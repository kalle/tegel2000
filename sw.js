// Tegel Service Worker - Enables offline play
const CACHE_NAME = 'tegel-v4';
const urlsToCache = [
  './game.html',
  './manifest.json',
  './icon-192.svg',
  './icon-512.svg',
  './' // Cache the root as well
];

// Install event - cache all game files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Tegel: Caching game files');
        return cache.addAll(urlsToCache);
      })
  );
  // Don't skip waiting automatically - let the user decide
});

// Listen for skip waiting message from the page
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    console.log('Tegel: Activating new version...');
    self.skipWaiting();
  }
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Tegel: Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim(); // Take control immediately
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      })
      .catch(() => {
        // If both cache and network fail, could return offline page
        console.log('Tegel: Failed to fetch:', event.request.url);
      })
  );
});
