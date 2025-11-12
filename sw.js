const WORKER = 'https://late-scene-c0e9.mark-toxxter.workers.dev/?url=';

/* установка */
self.addEventListener('install',  e => e.waitUntil(self.skipWaiting()));
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));

/* перехват */
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if(!url.pathname.startsWith('/p/')) return;          // касаемся только /p/...

  const target = atob(url.pathname.slice(3));          // base64 → исходный URL
  const proxyUrl = WORKER + encodeURIComponent(target);

  /* получаем HTML через Worker, возвращаем клиенту */
  e.respondWith(
    fetch(proxyUrl)
      .then(r => r.text())
      .then(html => new Response(html, {
        headers: {'Content-Type':'text/html;charset=utf-8'}
      }))
      .catch(() => new Response('Worker unreachable',[500]))
  );
});
