# Lewis Portfolio — SEO release notes

Drop these files into the root of the `lewis-portfolio` repository (the same
folder as your images and `Lewis_Wanjohi_CV_Updated.pdf`).

| File | What to do |
| --- | --- |
| `index.html` | Replace your existing one |
| `robots.txt` | Add (or replace) |
| `sitemap.xml` | Add (or replace) |
| `manifest.json` | Only add if you don't already have one |
| `rename-images.sh` | Run once, then delete it |

## 1. Rename the image files (required)

`index.html` now points at descriptive filenames instead of names like
`0cf77831853040b0b5586341ee2d37db.jpg`. Inside your repo folder run:

```bash
bash rename-images.sh
git add -A
git commit -m "SEO: descriptive image filenames, crawlability fixes"
git push
```

If a file is missing the script just skips it. Afterwards open the site and
check that every image still loads.

## 2. Search engine verification codes

Your `<head>` contains two clearly marked comment blocks:

- `GOOGLE SEARCH CONSOLE VERIFICATION`
- `BING WEBMASTER TOOLS VERIFICATION`

Paste the real meta tag each service gives you on the line below the comment,
then commit and push. No placeholder or invented code is present in the file.

## 3. Google Search Console

1. Go to https://search.google.com/search-console and sign in.
2. Choose **Add property → URL prefix** and enter
   `https://lewis405.github.io/lewis-portfolio/`.
3. Pick the **HTML tag** method, copy the `<meta name="google-site-verification" ...>`
   tag, paste it into the marked spot in `index.html`, push, wait ~1 minute for
   GitHub Pages to rebuild, then click **Verify**.
4. Submit the sitemap: **Sitemaps → Add a new sitemap →** type `sitemap.xml` →
   **Submit**.
5. Request indexing: paste `https://lewis405.github.io/lewis-portfolio/` into the
   **URL Inspection** bar at the top → **Request indexing**.
6. Check status any time with the same URL Inspection tool — it shows whether the
   page is indexed, which canonical Google picked, and when it last crawled.
7. Crawl problems appear under **Pages** (indexing report) and **Settings →
   Crawl stats**.

Indexing is Google's decision and can take days to weeks. Nobody can guarantee a
ranking position or a knowledge panel.

## 4. Bing Webmaster Tools

1. Go to https://www.bing.com/webmasters and sign in.
2. **Add a site** → `https://lewis405.github.io/lewis-portfolio/` (or import the
   property straight from Google Search Console, which skips verification).
3. If verifying manually, choose the **HTML Meta Tag** option and paste it into
   the marked spot in `index.html`, push, then click **Verify**.
4. **Sitemaps → Submit sitemap →** `https://lewis405.github.io/lewis-portfolio/sitemap.xml`.
5. **URL Inspection → Request indexing** for the homepage.

## 5. Things only you can confirm

- The testimonials and the numbers in the case studies must be real. If any of
  them are illustrative, edit or remove them — invented results are a credibility
  and policy risk.
- Confirm `Lewis_Wanjohi_CV_Updated.pdf`, `favicon.svg`, `favicon-32.png` and
  `apple-touch-icon.png` exist in the repo; the page links to all of them.
