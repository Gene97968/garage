// shortcut: cache fissa, se modifichi i file cambia il numero (v3 in v4) per forzare l'aggiornamento
const C='garage-v3',F=['./','index.html','car.webp','icon-180.png','icon-192.png','icon-512.png','manifest.webmanifest'];
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(F)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
