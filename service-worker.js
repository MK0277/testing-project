const CACHE_NAME = "a1ti-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/assets/img/logo1.png",
  "/assets/favicon/favicon.ico",
  "/assets/favicon/favicon-32x32.png",
  "/assets/favicon/favicon-96x96.png",
  "/assets/favicon/apple-touch-icon.png",
  "/assets/css/style.css",   // ✅ update if your CSS path differs
  "/assets/js/script.js"     // ✅ update if your JS path differs
];

// Install Service Worker & Cache Files
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Activate & Clean Old Cache
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      )
    )
  );
});

// Fetch from Cache, Fallback to Network
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
