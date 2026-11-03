// Tell IndexNow (Bing, which feeds Copilot and ChatGPT search, plus Yandex, Seznam and others)
// about every URL in the live sitemap. Run after a deploy: npm run indexnow
// Optional: pass specific URLs instead, e.g. npm run indexnow -- https://ezuconstruction.ca/journal/new-guide
const HOST = 'ezuconstruction.ca';
const KEY = 'fa9a7a7b1d7d8961af28c619ecde7186'; // must match public/<KEY>.txt

const fromArgs = process.argv.slice(2).filter((a) => a.startsWith('https://'));
let urls = fromArgs;
if (!urls.length) {
  const xml = await (await fetch(`https://${HOST}/sitemap.xml`)).text();
  urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}
if (!urls.length) throw new Error('No URLs found in the sitemap');

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList: urls }),
});
// 200 or 202 means accepted; 403 means the key file isn't live yet; 422 means a URL doesn't match the host
console.log(`IndexNow: ${res.status} ${res.statusText} for ${urls.length} URLs`);
if (!res.ok) process.exitCode = 1;
