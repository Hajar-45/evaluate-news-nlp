// service-worker.js


self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('my-cache').then((cache) => {
            return cache.addAll([


                './client/index.js',
                './formHandler.js',
                './nameChecker.js',
                './service-worker.js',
                './styles/resets.scss',
                './styles/base.scss',
                './styles/footer.scss',
                './styles/form.scss',
                './styles/header.scss',
                './client/views/index.html',


            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});