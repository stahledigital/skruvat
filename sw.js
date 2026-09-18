const V="skruvat-v3";const SHELL=["/","/index.html","/ord.txt","/manifest.webmanifest","/icon-192.png","/icon-512.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
async function pageResponse(r){
  const cached=caches.match(r).then(h=>h||caches.match("/index.html"));
  const net=fetch(r).then(res=>{const c=res.clone();caches.open(V).then(x=>x.put(r,c));return res});
  try{return await Promise.race([net,new Promise((_,rej)=>setTimeout(()=>rej(new Error("langsamt nat")),2500))]);}
  catch(err){const hit=await cached;if(hit)return hit;try{return await net;}catch(e2){return Response.error();}}
}
self.addEventListener("fetch",e=>{const r=e.request;if(r.method!=="GET")return;const u=new URL(r.url);
const page=u.origin===self.location.origin&&(u.pathname==="/"||u.pathname==="/index.html");
const own=u.origin===self.location.origin||u.hostname.endsWith("googleapis.com")||u.hostname.endsWith("gstatic.com");
if(!own)return;
if(page){e.respondWith(pageResponse(r));return}
e.respondWith(caches.match(r).then(h=>h||fetch(r).then(res=>{const c=res.clone();caches.open(V).then(x=>x.put(r,c));return res})))});
