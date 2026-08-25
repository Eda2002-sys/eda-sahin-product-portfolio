import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const portraitPath = join(root, "public/images/eda-sahin.jpg");
const kocLogoPath = join(root, "public/images/koc-university-logo.png");
const darussafakaLogoPath = join(root, "public/images/darussafaka-logo.png");
const outputPath = join(root, "public/resume.pdf");

const portraitBase64 = readFileSync(portraitPath).toString("base64");
const kocLogoBase64 = readFileSync(kocLogoPath).toString("base64");
const darussafakaLogoBase64 = readFileSync(darussafakaLogoPath).toString("base64");

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Eda Sahin — Resume</title>
  <style>
    @page { size: A4; margin: 14mm 14mm 16mm; }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      font-family: Helvetica, Arial, sans-serif;
      color: #1a1f2e;
      font-size: 10.5pt;
      line-height: 1.45;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    .page { max-width: 100%; }
    header {
      display: flex;
      justify-content: space-between;
      gap: 16px;
      border-bottom: 1px solid rgba(111, 44, 58, 0.22);
      padding-bottom: 14px;
      margin-bottom: 14px;
    }
    h1 {
      margin: 0;
      font-size: 28pt;
      line-height: 1;
      color: #6f2c3a;
      font-family: "Times New Roman", Times, serif;
      font-weight: 700;
    }
    .meta { margin-top: 10px; color: #4a5568; font-size: 9.5pt; }
    .photo {
      width: 68px;
      height: 88px;
      object-fit: cover;
      object-position: center 18%;
      flex-shrink: 0;
    }
    section {
      display: grid;
      grid-template-columns: 92px 1fr;
      gap: 18px;
      border-top: 1px solid rgba(111, 44, 58, 0.22);
      padding-top: 12px;
      margin-top: 12px;
    }
    h2 {
      margin: 0;
      font-size: 8.5pt;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: #6f2c3a;
      font-weight: 600;
    }
    ul { margin: 0; padding: 0; list-style: none; }
    .role { margin-bottom: 14px; }
    .role-head {
      display: flex;
      justify-content: space-between;
      gap: 12px;
      align-items: baseline;
    }
    .role-title { font-size: 10.5pt; }
    .company { color: #6f2c3a; font-weight: 600; }
    .period { color: #4a5568; font-size: 9.5pt; white-space: nowrap; }
    .website { color: #4a5568; font-size: 9.5pt; margin-top: 2px; }
    .bullets { margin: 6px 0 0; padding-left: 14px; }
    .bullets li { margin: 0 0 4px; }
    .edu-item { margin-bottom: 10px; }
    .edu-row { display: flex; align-items: flex-start; gap: 10px; }
    .edu-logo { flex-shrink: 0; object-fit: contain; display: block; }
    .edu-body { flex: 1; min-width: 0; }
    .edu-head { display: flex; justify-content: space-between; gap: 12px; }
    .edu-institution { font-weight: 600; }
    .notes { margin-top: 4px; color: #4a5568; font-size: 9.5pt; }
    .notes a { color: #6f2c3a; text-decoration: none; }
  </style>
</head>
<body>
  <div class="page">
    <header>
      <div>
        <h1>Eda Sahin</h1>
        <p class="meta">Istanbul, Turkey · +90 536 795 45 17 · edashn2002@gmail.com</p>
        <p class="meta">github.com/Eda2002-sys · linkedin.com/in/eda-şahin-b79300231</p>
      </div>
      <img class="photo" src="data:image/jpeg;base64,${portraitBase64}" alt="" />
    </header>

    <section>
      <h2>Contact</h2>
      <ul>
        <li>+90 536 795 45 17</li>
        <li>edashn2002@gmail.com</li>
        <li>Istanbul, Turkey</li>
      </ul>
    </section>

    <section>
      <h2>Experience</h2>
      <div>
        ${experienceBlock(
          "Chief of Staff",
          "AnalystAI",
          "2025–Present",
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
          "2025–Present",
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
          "2024–Present",
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
            "Supported the copywriting and SEO team by creating engaging blog posts and content.",
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
          "Business Administration",
          kocLogoBase64,
          92,
          22,
        )}
        ${educationBlock(
          "Darüşşafaka High School",
          "2016–2020",
          "High School Diploma",
          darussafakaLogoBase64,
          59,
          28,
          [
            { text: "IEARN Conference 2017 attendee, Morocco" },
            {
              text: "Darüşşafaka entrance exam winner — opening ceremony speech",
              href: "https://www.darussafaka.org/haberler/darussafaka-egitim-kurumlari-torenle-acildi",
            },
            {
              text: "IMA Turkey 2013 Mental Arithmetic Olympics champion",
              href: "https://www.darussafaka.org/haberler/ima-turkey-2013-mental-aritmetik-olimpiyatlari-nda-birinci-bir-dackali",
            },
          ],
        )}
      </div>
    </section>

    <section>
      <h2>Languages</h2>
      <ul>
        <li>Turkish — Native</li>
        <li>English — B2</li>
      </ul>
    </section>
  </div>
</body>
</html>`;

function experienceBlock(title, company, period, website, bullets) {
  return `<div class="role">
    <div class="role-head">
      <div class="role-title">${title} <span class="company">| ${company}</span></div>
      <div class="period">${period}</div>
    </div>
    <div class="website">${website}</div>
    <ul class="bullets">${bullets.map((b) => `<li>${b}</li>`).join("")}</ul>
  </div>`;
}

function educationNote(note) {
  if (note.href) {
    return `<div class="notes"><a href="${note.href}">${note.text}</a></div>`;
  }
  return `<div class="notes">${note.text}</div>`;
}

function educationBlock(institution, period, detail, logoBase64, logoWidth, logoHeight, notes = []) {
  const notesHtml = notes.length ? notes.map(educationNote).join("") : "";

  return `<div class="edu-item">
    <div class="edu-row">
      <img
        class="edu-logo"
        src="data:image/png;base64,${logoBase64}"
        width="${logoWidth}"
        height="${logoHeight}"
        alt=""
      />
      <div class="edu-body">
        <div class="edu-head">
          <span class="edu-institution">${institution}</span>
          <span class="period">${period}</span>
        </div>
        <div>${detail}</div>
        ${notesHtml}
      </div>
    </div>
  </div>`;
}

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();
await page.setContent(html, { waitUntil: "networkidle0" });
const pdf = await page.pdf({
  format: "A4",
  printBackground: true,
  margin: { top: "14mm", right: "14mm", bottom: "16mm", left: "14mm" },
});
await browser.close();
writeFileSync(outputPath, pdf);
console.log(`Wrote ${outputPath}`);
