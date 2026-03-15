# AllMosaics — allmosaics.au

Static marketing portal with three collection sections.

## File Structure

```
index.html                    ← Main hub portal
sections/
  mexican-smalti.html         ← Mexican Smalti collection page
  italian-smalti.html         ← Italian Smalti collection page
  glass-ceramics.html         ← Glass & Ceramics collection page
components/
  shared.css                  ← ALL shared styles, tokens, nav, footer
  shared.js                   ← ALL shared JS utilities & mosaic palettes
README.md
.gitignore
```

## How to edit

- **Colours / tokens** → `components/shared.css` (`:root` variables)
- **Nav or footer** → `components/shared.css` (nav/footer sections)
- **Hub page** → `index.html`
- **A collection page** → `sections/<name>.html`
- **Mosaic palettes** → `components/shared.js` (`AM.palettes`)
- **Shopify URLs** → Search for `#SHOPIFY-` in any file and replace

## Shopify URL placeholders

Search for these strings and replace with your Shopify collection URLs:
- `#SHOPIFY-MEXICAN-URL`
- `#SHOPIFY-ITALIAN-URL`
- `#SHOPIFY-GLASS-URL`

## GitHub Pages deployment

1. Push all files to a GitHub repo (keep folder structure intact)
2. Settings → Pages → Deploy from branch (main, / root)
3. Add custom domain `allmosaics.au`
4. DNS A records at your registrar:
   185.199.108.153 / .109.153 / .110.153 / .111.153
   CNAME www → yourusername.github.io
