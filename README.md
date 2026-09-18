# Skruvat – skruvat.stahledigital.se

Dagens byggord: gissa ett byggord med fem bokstäver på sex försök. Statisk PWA utan konton, utan kakor och utan byggsteg.

## Filer

- `index.html` – hela spelet. Svarsorden och förklaringarna ligger i `W`. **Ordningen i `W` är dagarnas ordning**: första ordet är Skruvat #1 (14 sep 2026). Nya ord läggs sist. Flytta eller ta aldrig bort ett ord som redan varit dagens ord, för då byts ordet för alla som spelar.
- `ord.txt` – tillåtna gissningar (cirka 9 300 ord med fem bokstäver). Härledd ur sv_SE-ordlistan, LGPL-3. Se `ORDLISTA-LICENS.txt`. Om filen inte laddas godkänns alla gissningar.
- `sw.js` – service worker (gör att spelet fungerar utan nät). Höj `V` vid varje release.
- `manifest.webmanifest`, ikoner, `og.png`, `sitemap.xml`, `robots.txt`, `CNAME`.

Versionen syns i `<meta name="app-version">` (till exempel `skruvat-v3`), så att det går att kontrollera vad som ligger live.

## Mätning

Cloudflare Web Analytics, utan kakor. Samma webbplatsnyckel som Materialräknaren och Kapa. Filtrera på värden `skruvat.stahledigital.se` i Cloudflare.

## Släppa en ny version

Committa på `main`. Dubbelklicka på `PUSH_ALLT.command` i mappen Ståhle Digital. GitHub Pages bygger om på någon minut. Kontrollera sedan att live-sidan visar rätt `app-version`.

## Ordlistan räcker

367 svarsord räcker till och med den 15 september 2027. Fyll på före dess.
