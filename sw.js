const CACHE_VERSION = 29;
const CACHE_NAME = "ca".concat("-v", CACHE_VERSION);
const FILES_TO_CACHE = [
  '/css.fonts.v9.css',
  '/css.style.v9.css',
  '/css.color.v9.css',
  '/css.extra.v9.css',
  '/aplus.sw.css',
  '/js.polyfill.v9.js',
  '/aplus.sw.js',
  '/aplus.init.js',
  '/js.storage.v9.js',
  '/js.app.v9.js',
  '/js.main.v9.js',
  '/favicon.svg',
  '/favicon.ico',
];
self.addEventListener("install", function (event) {
  event.waitUntil(caches.open(CACHE_NAME).then(function(cache){
    try{return cache.addAll(FILES_TO_CACHE).catch(function(){return self.skipWaiting()});}catch(e){}
    return self.skipWaiting();
}).catch(function(){return self.skipWaiting()}));
});
function clearCashe(cacheNames,cacheAllowlist){return Promise.all(cacheNames.map(function(cacheName){if (!cacheAllowlist.includes(cacheName)) {return caches.delete(cacheName);};return undefined;}))}
self.addEventListener("activate", function(event) {
  event.waitUntil(caches.keys().then(function(cacheNames){clearCashe(cacheNames,CACHE_NAME)
  }));
});