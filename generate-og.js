const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function main() {
  const artigosPath = path.join(__dirname, 'frontend/src/data/artigos.js');
  const content = fs.readFileSync(artigosPath, 'utf8');

  const slugs = [...content.matchAll(/\bslug:\s*["']([^"']+)["']/g)].map(m => m[1]);
  const titulos = [...content.matchAll(/\btitulo:\s*["']([^"']+)["']/g)].map(m => m[1]);
  const descricoes = [...content.matchAll(/\bdescricao:\s*["']([^"']+)["']/g)].map(m => m[1]);

  const outputDir = path.join(__dirname, 'frontend/public/images/artigos');
  fs.mkdirSync(outputDir, { recursive: true });

  const templateHtml = fs.readFileSync(path.join(__dirname, 'og-article-template.html'), 'utf8');

  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    defaultViewport: { width: 1200, height: 630 }
  });

  let generated = 0;

  for (let i = 0; i < slugs.length; i++) {
    const slug = slugs[i];
    const titulo = (titulos[i] || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const desc = (descricoes[i] || '');
    const descricao = (desc.length > 130 ? desc.substring(0, 130) + '…' : desc)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const outputPath = path.join(outputDir, `${slug}.jpg`);

    if (fs.existsSync(outputPath)) {
      console.log(`Skip: ${slug}`);
      continue;
    }

    const html = templateHtml
      .replace('{{TITULO}}', titulo)
      .replace('{{DESCRICAO}}', descricao);

    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'networkidle0' });
    await page.screenshot({ path: outputPath, type: 'jpeg', quality: 90 });
    await page.close();
    console.log(`Generated: ${slug}`);
    generated++;
  }

  await browser.close();
  console.log(`Done. Generated ${generated} new images.`);
}

main().catch(err => { console.error(err); process.exit(1); });