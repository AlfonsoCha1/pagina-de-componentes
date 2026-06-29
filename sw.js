/* sw.js — guarda la app para abrirla sin internet */
const CACHE = 'marelli-smt-v2';
const FILES = [
  './',
  './index.html',
  './componentes.html',
  './lineas.html',
  './mantenimiento.html',
  './css/base.css',
  './css/portal.css',
  './css/componentes.css',
  './css/lineas.css',
  './css/mantenimiento.css',
  './js/portal.js',
  './js/mantenimiento.js',
  './js/componentes.js',
  './js/lineas.js',
  './manifest.webmanifest',
  './favicon.svg',
  './favicon.ico',
  './icons/icon-192.png',
  './icons/icon-512.png'
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(hit => hit || fetch(e.request).catch(() => caches.match('./index.html'))));
});
