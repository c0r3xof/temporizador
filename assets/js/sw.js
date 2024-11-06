self.addEventListener('install', function(event) {
    console.log('Service Worker instalado');
    event.waitUntil(
        caches.open('v1').then(function(cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/assets/style/style.css',
                '/assets/js/script.js',
                '/assets/js/sw.js',
                '/assets/imgs/favicon.png',
                '/assets/imgs/icon.png',
                '/assets/imgs/icon-512.png',
                '/assets/json/manifest.json',
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
