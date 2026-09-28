const { chromium } = require('playwright');
const { copyFile } = require('node:fs/promises');
const path = require('node:path');
const { pathToFileURL } = require('node:url');

async function main() {
  const root = path.resolve(__dirname, '..');
  const output = path.join(root, 'resources/Resume/Juan_Pablo_Urista_Resume.pdf');
  const browser = await chromium.launch();

  try {
    const page = await browser.newPage({ viewport: { width: 816, height: 1056 } });
    const failures = [];
    page.on('requestfailed', request => failures.push(request.url()));
    await page.emulateMedia({ media: 'print' });
    await page.goto(pathToFileURL(path.join(root, 'resources/Resume/resume.html')).href);
    await page.evaluate(() => document.fonts.ready);
    if (failures.length) {
      throw new Error(`Resume assets failed to load: ${failures.join(', ')}`);
    }
    await page.pdf({
      path: output,
      format: 'Letter',
      preferCSSPageSize: true,
      printBackground: true,
      tagged: true,
    });
    // Keep the original public download URL in sync with the embedded resume.
    await copyFile(output, path.join(root, 'resources/Juan_Pablo_Urista_Resume.pdf'));
    console.log('Updated both public resume PDFs.');
  } finally {
    await browser.close();
  }
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
