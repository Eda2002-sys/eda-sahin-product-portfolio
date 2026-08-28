import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const fontsDir = join(root, "public/fonts");
const outputPath = join(root, "public/resume.pdf");

function fontDataUri(filename) {
  const bytes = readFileSync(join(fontsDir, filename));
  return `data:font/ttf;base64,${bytes.toString("base64")}`;
}

const dmRegular = fontDataUri("DMSans-Regular.ttf");
const dmMedium = fontDataUri("DMSans-Medium.ttf");
const dmSemiBold = fontDataUri("DMSans-SemiBold.ttf");

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="format-detection" content="telephone=no, email=no, address=no" />
  <title>Eda Sahin · Resume</title>
  <style>
    @font-face {
      font-family: "DM Sans";
      font-style: normal;
      font-weight: 400;
      src: url("${dmRegular}") format("truetype");
    }
    @font-face {
      font-family: "DM Sans";
      font-style: normal;
      font-weight: 500;
      src: url("${dmMedium}") format("truetype");
    }
    @font-face {
      font-family: "DM Sans";
      font-style: normal;
      font-weight: 600;
      src: url("${dmSemiBold}") format("truetype");
    }

    @page { size: A4; margin: 12mm 13mm 12mm; }

    * { box-sizing: border-box; }

    body {
      margin: 0;
      font-family: "DM Sans", Helvetica, Arial, sans-serif;
      color: #1a1f2e;
      font-size: 9pt;
      line-height: 1.4;
      font-weight: 400;
      letter-spacing: 0.005em;
      -webkit-font-smoothing: antialiased;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }

    header {
      padding-bottom: 11px;
      margin-bottom: 0;
      border-bottom: 1.5px solid #6f2c3a;
    }

    h1 {
      margin: 0;
      font-family: "DM Sans", Helvetica, Arial, sans-serif;
      font-size: 31pt;
      font-weight: 400;
      line-height: 1.2;
      color: #6f2c3a;
      letter-spacing: -0.02em;
    }

    .tagline {
      margin: 7px 0 0;
      font-family: "DM Sans", Helvetica, Arial, sans-serif;
      font-size: 8pt;
      font-weight: 500;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: #6b6f7a;
    }

    .meta {
      margin: 8px 0 0;
      color: #6b6f7a;
      font-size: 8.25pt;
      line-height: 1.45;
      font-weight: 400;
    }

    section {
      display: grid;
      grid-template-columns: 86px 1fr;
      gap: 14px;
      align-items: start;
      border-top: 1px solid rgba(111, 44, 58, 0.18);
      padding-top: 9px;
      padding-bottom: 2px;
      margin-top: 0;
    }

    section:first-of-type {
      border-top: 0;
      padding-top: 11px;
    }

    h2 {
      margin: 0;
      font-family: "DM Sans", Helvetica, Arial, sans-serif;
      font-size: 7pt;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: #6f2c3a;
      font-weight: 600;
      line-height: 1.3;
      padding-top: 1px;
    }

    ul { margin: 0; padding: 0; list-style: none; }

    .role {
      margin-bottom: 10px;
    }

    .role:last-child { margin-bottom: 0; }

    .role-head {
      display: flex;
      justify-content: space-between;
      gap: 12px;
      align-items: baseline;
    }

    .entry-title {
      font-size: 9.5pt;
      font-weight: 600;
      color: #1a1f2e;
      letter-spacing: -0.01em;
    }

    .entry-company {
      font-weight: 400;
      color: #6b6f7a;
    }

    .period {
      color: #6b6f7a;
      font-size: 8pt;
      font-weight: 500;
      letter-spacing: 0.02em;
      white-space: nowrap;
    }

    .website {
      color: #8a909c;
      font-size: 7.75pt;
      font-weight: 400;
      margin-top: 1px;
      letter-spacing: 0.01em;
    }

    .bullets {
      margin: 4px 0 0;
      padding-left: 0;
    }

    .bullets li {
      position: relative;
      margin: 0 0 2.5px;
      padding-left: 11px;
      font-weight: 400;
      font-size: 8.75pt;
      line-height: 1.38;
      color: #2a3040;
    }

    .bullets li::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0.48em;
      width: 3.5px;
      height: 3.5px;
      border-radius: 50%;
      background: #6f2c3a;
      opacity: 0.7;
    }

    .edu-item { margin-bottom: 8px; }
    .edu-item:last-child { margin-bottom: 0; }

    .edu-head {
      display: flex;
      justify-content: space-between;
      gap: 12px;
      align-items: baseline;
    }

    .edu-detail {
      margin-top: 1px;
      font-weight: 400;
      font-size: 8.75pt;
      color: #2a3040;
    }

    .notes {
      margin-top: 2px;
      color: #6b6f7a;
      font-size: 8pt;
      font-weight: 400;
      line-height: 1.4;
    }

    .languages {
      display: flex;
      flex-wrap: wrap;
      gap: 6px 18px;
      padding-top: 1px;
    }

    .languages li {
      font-weight: 400;
      font-size: 8.75pt;
      color: #1a1f2e;
    }

    .languages .level {
      color: #6b6f7a;
      font-weight: 400;
    }
  </style>
</head>
<body>
  <header>
    <h1>Eda Sahin</h1>
    <p class="tagline">Product · Operations · AI</p>
    <p class="meta">Istanbul, Turkey · +90 536 795 45 17 · edashn2002@gmail.com</p>
    <p class="meta">github.com/Eda2002-sys · linkedin.com/in/eda-şahin-b79300231</p>
  </header>

  <section>
    <h2>Experience</h2>
    <div>
      ${experienceBlock(
        "Chief of Staff",
        "AnalystAI",
        "2025–2026",
        "www.analystai.ai",
        [
          "Partner with the CEO on product strategy, business operations and the development of AI-powered solutions for investment and operating teams.",
          "Lead product management, testing and cross-functional delivery across multiple AI products, from business requirements and user journeys to engineering prioritisation and deployment.",
          "Manage AI product development for international clients including Keppel Corporation, Marcus & Millichap, Thrive Senior Living and Socida, coordinating engineering teams, client requirements, testing and implementation.",
          "Support product demonstrations, onboarding and continuous improvement across investment, healthcare and operating-intelligence use cases.",
          "Work hands-on with tools including Cursor, Codex, Claude Code, ElevenLabs and Meta Business Suite.",
        ],
      )}
      ${experienceBlock(
        "Chief of Staff",
        "GA Capital",
        "2025–2026",
        "www.gacapital.ai",
        [
          "Support the CEO across transaction execution, client management, business development and strategic initiatives within an AI-native M&A advisory firm.",
          "Contribute to live M&A engagements through due diligence, market and financial analysis, investor and lender outreach, data-room management and client materials.",
          "Coordinate communication across clients, investors, lenders, advisers and internal teams to maintain transaction momentum and timely execution.",
          "Support the use of AnalystAI products on international M&A mandates valued at over $20 million.",
        ],
      )}
      ${experienceBlock(
        "Marketing Specialist",
        "Mentor Özel Ders",
        "2024–2025",
        "mentorozelders.com",
        [
          "Dynamic Instagram management and content strategy.",
          "Post and pre-design and creation of seasonal content calendars.",
        ],
      )}
      ${experienceBlock(
        "SEO Intern",
        "Docquity, Doctor Jobs Today",
        "2022–2023",
        "docquity.com",
        [
          "Based in Singapore; supported the copywriting and SEO team by creating engaging blog posts and content.",
          "Contributed to improving Docquity's Google Search Rankings, increasing traffic from Malaysia, the Philippines and Indonesia.",
        ],
      )}
    </div>
  </section>

  <section>
    <h2>Education</h2>
    <div>
      ${educationBlock(
        "Koç University",
        "2020–2025",
        "B.A. Business Administration",
        [
          {
            text: "Selected coursework: Business Strategy, Marketing Research, Quantitative Methods",
          },
        ],
      )}
      ${educationBlock(
        "Darüşşafaka High School",
        "2016–2020",
        "High School Diploma",
        [
          { text: "Darüşşafaka entrance exam winner: opening ceremony speech" },
          { text: "IEARN Conference 2017 attendee, Morocco" },
        ],
      )}
    </div>
  </section>

  <section>
    <h2>Languages</h2>
    <ul class="languages">
      <li>Turkish <span class="level">· Native</span></li>
      <li>English <span class="level">· Advanced (Professional)</span></li>
    </ul>
  </section>
</body>
</html>`;

function experienceBlock(title, company, period, website, bullets) {
  return `<div class="role">
    <div class="role-head">
      <div class="entry-title">${title} <span class="entry-company">· ${company}</span></div>
      <div class="period">${period}</div>
    </div>
    <div class="website">${website}</div>
    <ul class="bullets">${bullets.map((b) => `<li>${b}</li>`).join("")}</ul>
  </div>`;
}

function educationNote(note) {
  return `<div class="notes">${note.text}</div>`;
}

function educationBlock(institution, period, detail, notes = []) {
  const notesHtml = notes.length ? notes.map(educationNote).join("") : "";

  return `<div class="edu-item">
    <div class="edu-head">
      <span class="entry-title">${institution}</span>
      <span class="period">${period}</span>
    </div>
    <div class="edu-detail">${detail}</div>
    ${notesHtml}
  </div>`;
}

const browser = await puppeteer.launch({
  headless: true,
  args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
});
const page = await browser.newPage();
await page.setContent(html, { waitUntil: "networkidle0" });
await page.evaluateHandle("document.fonts.ready");
await page.evaluate(async () => {
  await document.fonts.load('400 31pt "DM Sans"');
  await document.fonts.load('400 9pt "DM Sans"');
  await document.fonts.load('500 9pt "DM Sans"');
  await document.fonts.load('600 9pt "DM Sans"');
});
const pdf = await page.pdf({
  format: "A4",
  printBackground: true,
  margin: { top: "12mm", right: "13mm", bottom: "12mm", left: "13mm" },
});
await browser.close();
writeFileSync(outputPath, pdf);
console.log(`Wrote ${outputPath}`);
