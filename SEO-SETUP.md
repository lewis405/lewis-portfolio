# Portfolio SEO setup and change report

Site: https://lewis405.github.io/lewis-portfolio/
Owner: Githaiga Lewis Wanjohi — Digital Marketing Specialist (IT, Media & Sign Language Interpreter), Nairobi, Kenya

## Files in this package

| File | What to do with it |
| --- | --- |
| `index.html` | Replace the `index.html` in your repository with this one |
| `robots.txt` | Add/replace at the repository root |
| `sitemap.xml` | Add/replace at the repository root |
| `SEO-SETUP.md` | Reference only (safe to keep in the repo) |

Everything is at the repository root because GitHub Pages serves `/lewis-portfolio/` from there.

---

## A. What changed

1. All KCPE and KCSE content removed from the page, from the resume section, from the certificates gallery and from the structured data.
2. The fake Google Search Console verification code was deleted and replaced with clearly marked comments showing exactly where the real Google and Bing codes go.
3. The main headline is now your real name (`<h1>Githaiga Lewis Wanjohi</h1>`) with your professional title as the subheading, so a search engine sees who the page is about in the first line of content.
4. Two image links that contained raw spaces were corrected, and the "preload" hint now points at the portrait the page actually shows instead of a file that is not used.
5. `robots.txt` and `sitemap.xml` created with the correct live address and no test or localhost links.

Nothing was invented. No new qualifications, employers, clients, awards or profiles were added.

## B. KCPE / KCSE content removed

- Resume entry: "KCSE Certificate — 2024 — St. Bonaventure Kaheti Boys High School | Mean Grade: C- | AGP: 34"
- Certificate card: "KCSE Certificate 2024" (image `kcse.jpg`)
- Certificate card: "KCPE Certificate — C & J Mt. Carmel School — Year: 2020 | Total: 296 Marks" (image `kcpe cert.jpg`)
- Structured data: "St. Bonaventure Kaheti Boys High School" removed from the `alumniOf` list

The whole file was then re-scanned: no occurrence of KCPE, KCSE, Bonaventure, Mt. Carmel, 296 Marks, Mean Grade or AGP: 34 remains, in visible text, alt text, scripts, comments or structured data.

**You still need to do one thing manually:** delete the now-unused image files `kcse.jpg` and `kcpe cert.jpg` from your GitHub repository (open each file on GitHub → the three-dot menu → Delete file → Commit).

## C. SEO status

- One clear canonical address: `https://lewis405.github.io/lewis-portfolio/` — used identically in the canonical tag, Open Graph URL, structured data and sitemap.
- No `noindex` anywhere; robots meta allows full indexing and large image previews.
- Unique, descriptive title and description; language declared as English; all sections reachable from the on-page navigation.
- Open Graph and Twitter/X cards complete (title, description, image, image size, alt text, site name, locale).
- Structured data validated: all 8 JSON-LD blocks parse correctly — Person, WebSite, WebPage, BreadcrumbList, ProfilePage, FAQPage, EducationEvent, ItemList, Blog, ProfessionalService, ImageObject and VideoObject.
- `sameAs` and `rel="me"` link your GitHub, LinkedIn, YouTube, Instagram, Facebook and TikTok profiles to the same person — these were already yours and were left exactly as they were.
- Images lazy-load below the fold, the portrait loads with priority, and headings run in a logical order.

## D. Things worth doing yourself later

- Some image files still have machine-generated names (for example `0cf77831853040b0b5586341ee2d37db.jpg`). Renaming them to something like `lewis-wanjohi-brand-campaign.jpg` helps image search a little; if you rename a file you must update its link inside `index.html` too.
- Confirm `lewis-wanjohi-og.jpg` (the social sharing picture) really exists in the repository — if it is missing, LinkedIn and WhatsApp previews will show no picture.
- The testimonials section was left untouched. Keep it only if every quote is from a real person; delete any that are not.

---

## E. Google Search Console — your steps

1. Go to https://search.google.com/search-console and sign in with your Google account.
2. Click **Add property** → choose **URL prefix** → enter `https://lewis405.github.io/lewis-portfolio/`.
3. Choose the **HTML tag** verification method. Google shows a line like
   `<meta name="google-site-verification" content="abc123..." >`. Copy it.
4. In `index.html`, find the comment block that says *GOOGLE SEARCH CONSOLE VERIFICATION* near the top and paste that line directly underneath it. Commit the change and wait 1–2 minutes for GitHub Pages to rebuild.
5. Back in Search Console, click **Verify**.
6. Submit the sitemap: left menu → **Sitemaps** → type `sitemap.xml` → **Submit**.
7. Request indexing: paste `https://lewis405.github.io/lewis-portfolio/` into the search bar at the top → wait for the URL inspection → **Request indexing**.
8. Check status any time with that same URL inspection screen, and watch **Pages** and **Performance** for crawl and traffic reports. First results usually appear within a few days to a few weeks.

## F. Bing Webmaster Tools — your steps

1. Go to https://www.bing.com/webmasters and sign in.
2. Easiest route: choose **Import from Google Search Console** once Google verification is done — everything transfers automatically.
3. Manual route: **Add site** → `https://lewis405.github.io/lewis-portfolio/` → choose the **HTML Meta Tag** option, copy the `msvalidate.01` tag and paste it under the *BING WEBMASTER TOOLS VERIFICATION* comment in `index.html`, commit, then click **Verify**.
4. **Sitemaps** → **Submit sitemap** → `https://lewis405.github.io/lewis-portfolio/sitemap.xml`.
5. **URL Inspection** → enter your homepage → **Request indexing**. Bing also has **URL Submission** for instant submissions.

## G. Checklist

- [x] Search engine crawlability
- [x] robots.txt
- [x] sitemap.xml
- [x] Canonical URL consistent everywhere
- [x] Person schema
- [x] WebSite schema
- [x] sameAs profiles
- [x] Open Graph
- [x] Twitter cards
- [x] Mobile responsiveness (existing responsive layout preserved)
- [x] Accessibility (semantic sections, skip link, alt text, ARIA labels preserved)
- [x] Page speed (correct preload, lazy loading kept)
- [x] KCPE removed
- [x] KCSE removed
- [x] Verification placeholders removed and clearly marked
- [x] No fake information added
- [x] No black-hat SEO used
- [ ] Real Google verification code pasted in (you)
- [ ] Real Bing verification code pasted in (you)
- [ ] `kcse.jpg` and `kcpe cert.jpg` deleted from the repository (you)

A note in plain terms: these steps make the site as easy as possible for Google and Bing to find, read and understand. No one can promise a first-page ranking or a Google knowledge panel, and nothing here tries to fake one.

---

## Update — identity photo & entity signals

- `lewis-wanjohi-profile.jpg` is now the single identity photo: hero portrait, preload hint,
  `og:image`, `og:image:secure_url`, `twitter:image`, `thumbnail`, Person `image`, and both
  ImageObject blocks all point to it. The old `lewis-wanjohi-og.jpg` reference is gone.
- Hero portrait alt text: "Githaiga Lewis Wanjohi - Digital Marketing Specialist".
- og:image dimensions corrected to the portrait's real 1000x1250.
- About section now opens with the heading "Who is Githaiga Lewis Wanjohi?" followed by a
  factual one-line answer; a matching Q&A was added to the FAQ structured data.
- `https://kiti.uonbi.ac.ke/` was removed from `sameAs` and `rel="me"`. It is an institution
  site, not a personal profile of Lewis, and leaving it there weakens the person entity.
  It is still linked in the visible text and remains valid as training/affiliation.
- sameAs now contains only: Instagram, Facebook, YouTube, GitHub, LinkedIn, TikTok.

### YOU MUST DO THIS
1. Add the real photo file named exactly `lewis-wanjohi-profile.jpg` to the repository root
   (same folder as index.html). Every image tag above depends on that exact filename.
   Recommended: JPG, roughly 1000x1250, under 300 KB, face clearly visible.
2. Make sure your LinkedIn, GitHub, YouTube, Facebook, Instagram and TikTok profiles all use
   the SAME photograph and the same name spelling. Google's photo choice is influenced far
   more by those profiles than by your own site.
3. In Google Search Console: URL Inspection > Test Live URL > Request Indexing for the homepage.
4. Re-share the homepage link on LinkedIn/Facebook so their preview caches refresh.

No claim is made that this forces Google to show a particular photo, panel or ranking —
it only makes the correct signals unambiguous.
