const CACHE = "smart-attend";
const assets = [
  "/",
  "/index.html",
  "https://files.catbox.moe/25uoqy.jpg",
  "https://fonts.googleapis.com/css2?family=Orbitron:wght@500;900&family=Roboto:wght@300;500&display=swap"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(assets))
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
