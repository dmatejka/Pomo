// Service Worker Script
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('pomodoro-cache-v1').then(function(cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/sound1.mp3',
                '/sound2.mp3',
                '/sound3.mp3',
                '/icon-256x256.png',
                '/icon-512x512.png'
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});

self.addEventListener('activate', function(event) {
    var cacheWhitelist = ['pomodoro-cache-v1'];
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

self.addEventListener('sync', function(event) {
    if (event.tag === 'timerUpdate') {
        event.waitUntil(timerSync());
    }
});

function timerSync() {
    // Simulate background task for timer
    console.log('Running background timer sync...');
    // You can add additional logic here to manage timers in background
}