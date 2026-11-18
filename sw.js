/* Sự kiện MKT — service worker: chỉ lưu file của app (cùng nguồn, GET); trang chính luôn lấy bản mới trước, mất mạng mới dùng bản lưu.
   Dữ liệu (POST tới Apps Script) không qua đây. */
var C = 'ehapp-v40';
var SHELL = ['./', './index.html', './ui2.js', './manifest.webmanifest', './img/mani_logo_box.png', './img/icon-192.png', './img/icon-512.png'];
self.addEventListener('install', function(e){ e.waitUntil(caches.open(C).then(function(c){ return c.addAll(SHELL).catch(function(){}); })); self.skipWaiting(); });
self.addEventListener('activate', function(e){ e.waitUntil(caches.keys().then(function(ks){ return Promise.all(ks.filter(function(k){ return k !== C; }).map(function(k){ return caches.delete(k); })); }).then(function(){ return self.clients.claim(); })); });
self.addEventListener('fetch', function(e){
  var r = e.request; if (r.method !== 'GET') return;
  var u = new URL(r.url); if (u.origin !== location.origin) return;
  e.respondWith(fetch(r).then(function(res){ if (res && res.ok){ var cp = res.clone(); caches.open(C).then(function(c){ c.put(r, cp); }); } return res; })
    .catch(function(){ return caches.match(r).then(function(m){ return m || caches.match('./index.html'); }); }));
});
