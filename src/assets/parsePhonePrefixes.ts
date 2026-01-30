import fs from 'fs';
import { JSDOM } from 'jsdom';

const html = fs.readFileSync('flag.html', 'utf-8');
const dom = new JSDOM(html);
const document = dom.window.document;

const rows = document.querySelectorAll('tr');

const result = [];

rows.forEach((row) => {
  const tds = row.querySelectorAll('td');
  if (tds.length < 2) return;

  const img = tds[0].querySelector('img');
  const countryLink = tds[0].querySelector('a[title]');
  const prefix = tds[1]?.textContent?.trim();

  if (!img || !countryLink || !prefix) return;

  const country = countryLink.textContent.trim();

  result.push({
    src: img.getAttribute('src'),
    prefix,
    country,
  });
});

fs.writeFileSync(
  'src/data/phonePrefixes.ts',
  `export const PHONE_PREFIXES = ${JSON.stringify(result, null, 2)};`
);

console.log('✅ File phonePrefixes.ts generato');
