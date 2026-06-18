const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  const htmlPath = path.resolve(__dirname, 'templates/html/pdf-compliance-whatsapp.html');
  const outPath = path.resolve(__dirname, 'products/Professional - Compliance WhatsApp + IA - v1.0.pdf');

  await page.setViewport({ width: 1024, height: 1366 });
  await page.goto(`file:///${htmlPath}`, { waitUntil: 'networkidle0' });

  await page.pdf({
    path: outPath,
    printBackground: true,
    scale: 1,
    preferCSSPageSize: false,
    format: 'A4',
    margin: {
      top: '10px',
      bottom: '10px',
      left: '10px',
      right: '10px',
    },
  });

  await browser.close();
  console.log('✓ products/Professional - Compliance WhatsApp + IA - v1.0.pdf');
})();
