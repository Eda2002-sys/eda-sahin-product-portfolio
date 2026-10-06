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
  <title>Eda Sahin · CV</title>
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

    .summary {
      margin: 8px 0 0;
      color: #6b6f7a;
      font-size: 8.5pt;
      line-height: 1.45;
      font-weight: 400;
      max-width: 92%;
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

    .role { margin-bottom: 10px; }
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

    .note {
      margin-top: 2px;
      color: #6b6f7a;
      font-size: 8pt;
      font-style: italic;
      line-height: 1.4;
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

    .ref-item { margin-bottom: 6px; }
    .ref-item:last-child { margin-bottom: 0; }

    .ref-title {
      margin-top: 1px;
      color: #6b6f7a;
      font-size: 8.5pt;
      line-height: 1.4;
    }
  </style>
</head>
<body>
  <header>
    <h1>Eda Sahin</h1>
    <p class="summary">Business graduate with hands on experience across product, operations and client delivery in international technology and advisory environments.</p>
    <p class="meta">Istanbul, Turkey · +90 536 795 45 17 · edashn2002@gmail.com</p>
    <p class="meta">linkedin.com/in/eda-sahin-b79300231 · github.com/Eda2002-sys</p>
    <p class="meta">Selected product work: eda-sahin-product-portfolio.vercel.app</p>
  </header>

  <section>
    <h2>Experience</h2>
    <div>
      ${experienceBlock(
        "Product & Operations Associate",
        "GA Capital",
        "2025 to 2026 · New York, USA",
        "www.gacapital.ai",
        "Combined role across GA Capital and AnalystAI, spanning AI products and M&A advisory.",
        [
          "Worked between clients and engineering on AI products, translating requirements and feedback into clear product tasks and keeping them connected to implementation.",
          "Tested end to end workflows with real use cases and product data, comparing expected and actual outputs to identify logic gaps, edge cases and patterns before release.",
          "Worked with both international business clients and individual users across demos, onboarding, implementation and product feedback, including organisations such as Keppel Corporation, Marcus & Millichap, Thrive Senior Living and Socida.",
          "Kept smaller workstreams moving by tracking open points, decisions and dependencies across the founder, clients and engineering team.",
          "Worked on UK buy side transactions, supporting due diligence, financial modelling and analysis, investor and lender research, data room management and preparation of deal materials.",
        ],
      )}
      ${experienceBlock(
        "Marketing Intern",
        "Mentor Özel Ders",
        "2024 to 2025 · Turkey",
        "mentorozelders.com",
        null,
        [
          "Planned weekly Instagram content around campaigns, tutor demand and seasonal periods, working with the team from idea and copy through publishing.",
          "Organised team content shoots, coordinated schedules and practical details, and supported production on set.",
        ],
      )}
      ${experienceBlock(
        "Marketing Intern",
        "Docquity, Doctor Jobs Today",
        "2022 to 2023 · Singapore",
        "docquity.com",
        null,
        [
          "Wrote blog and web content for healthcare audiences in Malaysia, the Philippines and Indonesia.",
          "Worked in a regular feedback loop with the manager and content team, revising drafts, sharing weekly progress reports and adjusting work based on feedback.",
          "Used keyword research and search intent to shape article structure and improve organic discoverability.",
        ],
      )}
    </div>
  </section>

  <section>
    <h2>Education</h2>
    <div>
      ${educationBlock(
        "Koç University",
        "2020 to 2025",
        "B.A. Business Administration",
        [
          {
            text: "Türkiye İş Bankası Scholar, Koç University Anadolu Scholars Program",
          },
        ],
      )}
      ${educationBlock(
        "Darüşşafaka High School",
        "2016 to 2020",
        "High School Diploma",
        [{ text: "Full scholarship, ranked 1st in entrance examination" }],
      )}
    </div>
  </section>

  <section>
    <h2>References</h2>
    <div>
      <div class="ref-item">
        <div class="entry-title">Ata Onat</div>
        <div class="ref-title">Founder &amp; Managing Director, GA Capital</div>
      </div>
      <div class="ref-item">
        <div class="entry-title">Murat Necmi Uzuner</div>
        <div class="ref-title">Founder, Mentor Özel Ders</div>
      </div>
    </div>
  </section>
</body>
</html>`;

function experienceBlock(title, company, period, website, note, bullets) {
  return `<div class="role">
    <div class="role-head">
      <div class="entry-title">${title} <span class="entry-company">· ${company}</span></div>
      <div class="period">${period}</div>
    </div>
    ${note ? `<div class="note">${note}</div>` : ""}
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
