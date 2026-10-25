// Usage:  node generate-sitemap.js
// Reads the NOVELS list inside script.js and rewrites sitemap.xml (with lastmod dates).
const fs = require("fs");
const src = fs.readFileSync(__dirname + "/script.js", "utf8");
const a = src.indexOf("const NOVELS = ["), b = src.indexOf("const GENRE_GROUPS");
const NOVELS = new Function(src.slice(a, b).replace("const NOVELS", "var NOVELS") + "; return NOVELS;")();
const SITE = "https://lorepdf.com";
const dates = NOVELS.map(n => n.addedAt).filter(Boolean).sort();
const newest = dates[dates.length - 1] || new Date().toISOString().slice(0, 10);
const seen = new Set();
const urls = [[`${SITE}/`, newest], [`${SITE}/series.html`, newest], [`${SITE}/library.html`, newest]];
for (const p of ["harry-potter-books-in-order.html", "lord-of-the-rings-books-in-order.html", "a-song-of-ice-and-fire-books-in-order.html", "fourth-wing-books-in-order.html"]) urls.push([`${SITE}/${p}`, new Date().toISOString().slice(0, 10)]);
NOVELS.forEach(n => { if (n && n.id && n.title && !seen.has(n.id)) { seen.add(n.id); urls.push([`${SITE}/novel.html?id=${encodeURIComponent(n.id)}`, n.addedAt || newest]); } });
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  urls.map(([loc, d]) => `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${d}</lastmod>\n  </url>`).join("\n") + `\n</urlset>\n`;
fs.writeFileSync(__dirname + "/sitemap.xml", xml);
console.log(`sitemap.xml written: ${urls.length} URLs`);
