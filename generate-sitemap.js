import fs from 'fs/promises';
import path from 'path';
import sitemap from 'sitemap';

const { createSitemap } = sitemap; // 從 sitemap 模組中解構出 createSitemap 函數

const urls = [
  { url: 'https://roomservicetest.netlify.app/', changefreq: 'daily', priority: 1.0 },
  { url: 'https://roomservicetest.netlify.app/about', changefreq: 'weekly', priority: 0.8 },
  // 添加其他頁面 URL
];

const sitemapXML = createSitemap({
  hostname: 'https://roomservicetest.netlify.app',
  urls: urls,
});

await fs.writeFile(path.resolve('public', 'sitemap.xml'), sitemapXML.toString());
console.log('Sitemap has been generated successfully!');
