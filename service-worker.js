!function(){"use strict";const e=["client/[category].43916f7e.js","client/index.5d0323d0.js","client/index.3ceae1f6.js","client/Item.720255b7.js","client/[slug].bb561e41.js","client/store.d415e0cf.js","client/client.626a6c00.js"].concat(["service-worker-index.html","android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","favicon-16x16.png","favicon-32x32.png","favicon.ico","site.webmanifest"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1579035390069").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1579035390069"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const n=new URL(e.request.url);n.protocol.startsWith("http")&&(n.hostname===self.location.hostname&&n.port!==self.location.port||(n.host===self.location.host&&t.has(n.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1579035390069").then(async t=>{try{const n=await fetch(e.request);return t.put(e.request,n.clone()),n}catch(n){const c=await t.match(e.request);if(c)return c;throw n}}))))})}();
