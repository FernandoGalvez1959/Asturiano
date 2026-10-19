var C = "asturiano-a1-v2";
var F = ["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png"];
self.addEventListener("install", function(e){
  e.waitUntil(caches.open(C).then(function(c){ return c.addAll(F); }).then(function(){ return self.skipWaiting(); }));
});
self.addEventListener("activate", function(e){
  e.waitUntil(caches.keys().then(function(k){
    return Promise.all(k.filter(function(x){ return x !== C; }).map(function(x){ return caches.delete(x); }));
  }).then(function(){ return self.clients.claim(); }));
});
// Con conexión: siempre la versión más reciente. Sin conexión: la copia guardada.
self.addEventListener("fetch", function(e){
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request).then(function(r){
      if (r && r.ok && new URL(e.request.url).origin === location.origin) {
        var cp = r.clone();
        caches.open(C).then(function(c){ c.put(e.request, cp); });
      }
      return r;
    }).catch(function(){
      return caches.match(e.request).then(function(r){ return r || caches.match("./index.html"); });
    })
  );
});
