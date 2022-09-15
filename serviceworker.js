const urlsToCache = ["/", "popup.js", "popup.html", "./assets/*"];
self.addEventListener("install", event => {
    event.waitUntil(
        caches.open("cookie_clearer-assets")
        .then(cache => {
           return cache.addAll(urlsToCache);
        })
     )
 });

 self.addEventListener("activate", event => {
    console.log("Service worker activated");
 });


self.addEventListener("fetch", event => {
    event.respondWith(
      caches.match(event.request)
      .then(cachedResponse => {
        // It can update the cache to serve updated content on the next request
          return cachedResponse || fetch(event.request);
      }
    )
   )
 });
