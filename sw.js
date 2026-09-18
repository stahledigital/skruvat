/* Flyttad (2026-09-18). Den här service workern städar bort den gamla appen ur telefonen:
   tömmer cachen, avregistrerar sig och laddar om öppna flikar så att flyttskylten tar över. */
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) await caches.delete(k);
    await self.registration.unregister();
    for (const c of await self.clients.matchAll({ type: "window" })) c.navigate(c.url);
  })());
});
