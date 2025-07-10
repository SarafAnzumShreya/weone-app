const CACHE_NAME = 'reddrobe-cache-v1';
const urlsToCache = [
  '/index.html',
  'https://unicons.iconscout.com/release/v4.0.8/css/line.css',
  'IMG_0587.PNG',
  'IMG_05872.webp'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});