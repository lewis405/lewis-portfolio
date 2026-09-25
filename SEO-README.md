# SEO Package & Publishing Guide — Githaiga Lewis Wanjohi Portfolio

This package contains the search-optimised `index.html` plus the crawl and
identity files for the existing GitHub Pages site:

    https://lewis405.github.io/lewis-portfolio/

---

## 1. What is in this package

| File | Purpose |
|---|---|
| `index.html` | Full portfolio with cleaned, validated JSON-LD (Person / ProfilePage / WebSite / FAQPage / Blog / ProfessionalService / ImageObject / VideoObject) |
| `robots.txt` | Allows all crawlers and points to the sitemap |
| `sitemap.xml` | Homepage + image entries so Google can index the portrait and graduation photos |
| `manifest.json` | PWA/site identity metadata |
| `favicon.ico`, `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png` | Site icons for browsers, tabs, and search-result favicons |
| `404.html` | Friendly not-found page (noindexed) |
| `.nojekyll` | Tells GitHub Pages to serve files exactly as-is |
| `google-verification-PLACEHOLDER.html` | Replace with the real file from Search Console |
| `SEO-README.md` | This guide |

All 7 JSON-LD blocks in `index.html` were syntax-checked, and duplicate keys
(`knowsAbout`, `primaryImageOfPage`) inside the main Person graph were merged
so no data is silently dropped by parsers.

## 2. Deploy (GitHub Pages)

1. Unzip into your local `lewis-portfolio` repository (keep your existing
   image/video files — this package changes `index.html` and adds crawl files
   only; nothing here deletes or renames your media).
2. Replace `google-verification-PLACEHOLDER.html` with the real verification
   file from Search Console (keep its exact generated filename).
3. Commit and push to the branch GitHub Pages is set to (usually `main` or
   `gh-pages`, root `/`).
4. Wait 1–5 minutes, then open `https://lewis405.github.io/lewis-portfolio/`
   and hard-refresh (Ctrl/Cmd+Shift+R).

## 3. Verify it worked

- View-source the live page and confirm `<link rel="canonical">` points to
  `https://lewis405.github.io/lewis-portfolio/`.
- Rich Results Test: <https://search.google.com/test/rich-results> — paste the
  live URL; Person, ProfilePage, FAQ and Image metadata should be detected
  with no errors.
- Schema Markup Validator: <https://validator.schema.org/> — paste the URL.
- Search Console → URL Inspection → "Request indexing" for the homepage.
- Confirm `https://lewis405.github.io/lewis-portfolio/robots.txt` and
  `/sitemap.xml` load in the browser.

## 4. Strengthen identity signals over time

- Keep the exact name **Githaiga Lewis Wanjohi** (and handle "Lewis Wanjohi"
  as the alternate) identical on LinkedIn, GitHub, Instagram, TikTok, YouTube
  and Facebook. The page already links all of them with `rel="me"`.
- Upload the same portrait to each profile and to Search Console's site
  settings where possible.
- Do not rename certificate or graduation image files — their filenames carry
  the "lewis-wanjohi" keyword signal.

## 5. Honest expectations

These changes give Google **clearer identity signals**, but Google alone
controls indexing, image selection, AI Overviews, and ranking order. Expect
weeks (not days) for identity consolidation, and keep the identity details
consistent everywhere as described above.
