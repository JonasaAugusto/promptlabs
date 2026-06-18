const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const templates = [
  {
    file: 'capa-foundations.html',
    type: 'pdf',
    out: 'templates/pdf/capa-foundations.pdf',
    width: 800,
    height: 1000,
  },
  {
    file: 'capa-professional.html',
    type: 'pdf',
    out: 'templates/pdf/capa-professional.pdf',
    width: 800,
    height: 1000,
  },
  {
    file: 'capa-enterprise.html',
    type: 'pdf',
    out: 'templates/pdf/capa-enterprise.pdf',
    width: 800,
    height: 1000,
  },
  {
    file: 'email-header.html',
    type: 'png',
    out: 'templates/images/email-header.png',
    width: 600,
    height: 340,
  },
  {
    file: 'email-pdf-promo.html',
    type: 'png',
    out: 'templates/images/email-pdf-promo.png',
    width: 600,
    height: 500,
  },
  {
    file: 'linkedin-banner.html',
    type: 'png',
    out: 'templates/images/linkedin-banner.png',
    width: 1200,
    height: 630,
  },
  {
    file: 'twitter-banner.html',
    type: 'png',
    out: 'templates/images/twitter-banner.png',
    width: 1200,
    height: 675,
  },
  {
    file: 'pdf-compliance-whatsapp.html',
    type: 'pdf',
    out: 'products/Professional - Compliance WhatsApp + IA - v1.0.pdf',
    width: 816,
    height: 1056,
  },
];

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  for (const t of templates) {
    const htmlPath = path.resolve(__dirname, 'templates/html', t.file);
    const outPath = path.resolve(__dirname, t.out);

    await page.setViewport({ width: t.width, height: t.height, deviceScaleFactor: 2 });
    await page.goto(`file:///${htmlPath}`, { waitUntil: 'networkidle0' });

    if (t.type === 'pdf') {
      await page.pdf({
        path: outPath,
        width: `${t.width}px`,
        height: `${t.height}px`,
        printBackground: true,
      });
    } else {
      await page.screenshot({
        path: outPath,
        clip: { x: 0, y: 0, width: t.width, height: t.height },
        omitBackground: false,
      });
    }

    console.log(`✓ ${t.out}`);
  }

  await browser.close();
  console.log('\nDone! All assets generated.');
})();
