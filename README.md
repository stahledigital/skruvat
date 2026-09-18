# skruvat.stahledigital.se – flyttskylt

Skruvat har flyttat till **https://stahledigital.se/verkstaden/skruvat** (kort länk stahledigital.se/skruvat). Anders beslutade 2026-09-18 att allt i Verkstaden ska bo under stahledigital.se.

Det här repot är nu en flyttskylt på GitHub Pages:
- `index.html` skickar besökaren vidare och tar med resultat och streak som var sparad i telefonen (`#flytt=` i adressen, skickas aldrig till servern).
- `sw.js` städar bort den gamla appen ur telefonen.
- Källan till spelet finns i sajtrepot: `site-cloudflare/app/verkstaden/skruvat/skruvat.html` + `public/verkstaden/skruvat/`. Historiken fram till skruvat-v3 finns kvar här i git.

Senare (Anders, DNS): när `skruvat` pekas om till sajtens Cloudflare Worker kan flytten göras som en riktig 301-omdirigering, och repot kan arkiveras. Ta inte bort repot innan dess, för då slutar gamla länkar fungera.
