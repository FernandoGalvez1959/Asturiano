var C = "asturiano-a1-v3";
var F = ["./", "./index.html", "./lessons.js", "./firebase-config.js", "./manifest.webmanifest", "./icon.svg", "./icon-192.png", "./icon-512.png"];
self.addEventListener("install", function(e){
  e.waitUntil(caches.open(C).then(function(c){
    return Promise.all(F.map(function(f){ return c.add(f).catch(function(){}); }));
  }).then(function(){ return self.skipWaiting(); }));
});
self.addEventListener("activate", function(e){
  e.waitUntil(caches.keys().then(function(k){
    return Promise.all(k.filter(function(x){ return x !== C; }).map(function(x){ return caches.delete(x); }));
  }).then(function(){ return self.clients.claim(); }));
});
// Con conexión: siempre la versión más reciente. Sin conexión: la copia guardada.
self.addEventListener("fetch", function(e){
  if (e.request.method !== "GET") return;
  if (new URL(e.request.url).origin !== location.origin) return; // Firebase y otros: sin tocar
  e.respondWith(
    fetch(e.request).then(function(r){
      if (r && r.ok) { var cp = r.clone(); caches.open(C).then(function(c){ c.put(e.request, cp); }); }
      return r;
    }).catch(function(){
      return caches.match(e.request).then(function(r){ return r || caches.match("./index.html"); });
    })
  );
});
