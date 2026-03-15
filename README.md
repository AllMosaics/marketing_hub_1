# AllMosaics — allmosaics.au

Marketing portal for AllMosaics — handcrafted mosaic art & supplies.

## Deployment

This is a static single-page site. To deploy on GitHub Pages:

1. Upload all files in this folder to your GitHub repository
2. Go to Settings → Pages → Deploy from branch (main, / root)
3. Add your custom domain `allmosaics.au` in the Custom domain field
4. Add the following DNS records at your registrar:

```
A     @     185.199.108.153
A     @     185.199.109.153
A     @     185.199.110.153
A     @     185.199.111.153
CNAME www   yourusername.github.io
```

## Files

- `index.html` — the full site (self-contained, no dependencies)
- `README.md` — this file
