const cacheName = 'gatitu-cache-v1';
const assetsToCache = [
  './',
  './gatitu.html',
  './gatitu.css',
  './gatitu.js',
  './images/logo.png',
  './images/whatsapp-logo.png',
  './images/call-logo.jpeg',
  './images/email-logo.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(assetsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
