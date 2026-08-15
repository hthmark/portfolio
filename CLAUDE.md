# Gabe Gonzalez — Personal Portfolio Website

Context handoff for picking up this project. Read this before making changes —
it covers the tech stack, where content lives, decisions already made (and
why), and environment quirks that will otherwise waste your time re-discovering
them.

## Who this site is for

**Gabe Gonzalez** (Gabriel A. Gonzalez) — Head of Marketing / AI-driven growth
& marketing strategy leader. This is his personal portfolio site, built from a
generic template ("Dominic Nova, a design wizard") that was fully rebranded
using his real resume (`public/resume.pdf`). Every fact on the site (ROI
stats, job history, dates) is sourced from that resume — don't invent numbers.

His email: `gabeagonzalez14@gmail.com`. Live domain:
`gabegonzalezmarketing.com` (see Deployment below).

## Tech stack

- **Next.js 14.2.35**, App Router, TypeScript, deliberately pinned to the 14.x
  line (not 15/16) — this was an explicit spec requirement, not an oversight.
  14.2.35 is the latest patched 14.x release (14.2.5 had a known CVE).
- **Tailwind CSS** for all styling, no UI kit.
- **Framer Motion** for scroll-triggered fade/slide-up animations (`FadeIn.tsx`).
- Fonts via `next/font/google`: **Inter** (body/nav) + **Fraunces** italic
  serif (display headlines like "Hello" and section h2s).
- No test framework. `npm run build` + `npm run lint` are the only automated
  checks — both must pass clean before committing.

## Where everything lives

```
app/
  layout.tsx       root layout, fonts, <metadata> (title pulls from heroContent.pageTitle)
  page.tsx         assembles sections in order — see below
  globals.css       tailwind base + .duotone filter + .container-portfolio utility
lib/
  content.ts        *** THE SINGLE SOURCE OF TRUTH FOR ALL COPY/DATA ***
components/
  Navbar, Hero, About, Experience, CTABanner, LatestWorks, FinalCTA, Footer
  WorkCard.tsx       shared card used by LatestWorks (video + website variants)
  ContactForm.tsx    real contact form, mailto-based (no backend)
  PillButton.tsx     reusable pill CTA button
  FadeIn.tsx         framer-motion scroll-reveal wrapper
  icons/             ArrowUpRight, Play (hand-rolled inline SVGs)
public/
  images/            local optimized .webp images (see Images section)
  resume.pdf          Gabe's actual resume, linked from the Experience section
```

**`lib/content.ts` is the only file you should touch for copy/data changes.**
Nav links, hero stats, about copy, experience rows, portfolio items, footer —
all typed exports there. Components just render `content.ts` values; don't
hardcode copy in JSX.

Page order in `app/page.tsx`: Navbar → Hero → About → Experience → CTABanner
→ LatestWorks → FinalCTA → Footer.

**Two sections were deliberately deleted, not hidden**, per explicit user
request: `FeaturedWork.tsx` (a 3-image strip below About) and `Blog.tsx`
("Design Insights & Trends"). Their content/types were fully removed from
`content.ts` too — don't resurrect them without being asked.

## Content decisions already made (don't redo these)

- **About section** stat card: `18.96x` blended marketing ROI (real, from
  resume) — not the original generic "120%" placeholder.
- **Experience section** ("Explore My AI Marketing Journey") has 4 real roles
  from the resume: Go Solutions (Head of Marketing), TCS World Travel (Paid
  Media Strategist), Here to Help Marketing (Freelance), Wiley Education
  Services (Student Services Coordinator). Each row has **2 bullet points**
  (`ExperienceRow.expanded.bullets: string[]`) sourced/condensed from the
  actual resume bullets. There is **no per-row resume-link arrow** — that was
  removed because a single "View Resume" text link already sits at the top of
  the section (links to `/resume.pdf`).
- **Contact**: no backend/email service is wired up. Every "Book A Call"
  button scrolls to `#contact` (the `FinalCTA` section), which contains a real
  `ContactForm` (name/email/message). On submit it builds a `mailto:` link to
  Gabe's email and does `window.location.href = mailto:...` — this opens the
  visitor's own mail client, it does **not** send silently server-side. If
  asked for silent submission, that needs a real API key from the user
  (Resend, Formspree, etc.) — don't assume one exists.
- **Hero**: no "Design start here.." eyebrow (removed). Stats are `+200
  Projects completed` and `+7 Products brought to market`. Side label reads
  `Portfolio 2026`.
- **CTA banner**: heading is `"Book your free consultation today and let's
  craft a growth strategy tailored to your goals."` — there is deliberately no
  separate subtext paragraph below it (it used to be duplicated text; the
  duplicate was removed).
- **Footer**: `siteConfig.location` ("Blue Springs, MO") is shown bottom-right
  — this field replaced an original `domain` field that made no sense once
  rebranded. No Blog link (section was deleted).

## Latest Works / portfolio items

`latestWorksContent.items` in `content.ts` is a **discriminated union**
(`PortfolioItem`):

```ts
type PortfolioItem =
  | { kind: "video"; title: string; videoId: string }
  | { kind: "website"; title: string; href: string; image: string };
```

`WorkCard.tsx` branches on `kind`: video cards link to
`youtubeUrl(videoId)` and use `youtubeThumbnail(videoId)` — thumbnails are
derived from a **static YouTube CDN URL pattern**
(`img.youtube.com/vi/<id>/maxresdefault.jpg`), no API key or fetch required,
so adding a new video is just dropping in its ID. Website cards link to
`href` and show a real screenshot from `image`.

**Card aspect ratio is `aspect-video` (16:9), not portrait.** It was
originally `aspect-[4/5]` (portrait, matching the rest of the site's bleed
photos), but that was changed deliberately — YouTube thumbnails and website
screenshots are both landscape, and a portrait `object-cover` crop reduced
them to an illegible vertical sliver. Don't revert this without re-deriving
the math (a landscape source in a portrait container crops ~70%+ of the width
away).

Current items: 1 real YouTube video ("How to Start Google Meridian in 60
Seconds FAST", id `Am73sKyZ01U`) + 3 real website screenshots (Go Solutions
roundtable page, Kansas City TV Mounting, Pareo Island — screenshots in
`public/images/portfolio-*.webp`).

`latestWorksContent.channelUrl` is currently an **empty string** — the "View
More" link only renders when it's truthy (see `LatestWorks.tsx`). User hasn't
provided their YouTube channel URL yet.

## Images

All images are local files in `public/images/*.webp` — no external image CDN
is used for anything except the on-purpose YouTube thumbnail pattern above.
`next.config.mjs` `images.remotePatterns` allows `picsum.photos` (legacy, only
still used by `ctaBannerContent.backgroundImage`), `images.unsplash.com`
(unused currently, harmless to leave), and `img.youtube.com`.

Real photos (hero portrait, about-section portrait, floating headshot badge)
are AI-generated (Gemini) portraits the user supplied — sourced via Google
Drive (see workflow below), not real photography, but presented as his actual
photos per his instruction. If asked to swap any of the three, they're
`heroContent.portraitImage`, `aboutContent.primaryPortrait`,
`aboutContent.floatingHeadshot` in `content.ts`.

**How images got into this repo — reuse this pattern for future image
requests**, because two direct paths reliably fail in this environment:

1. **Images pasted inline into chat are NOT accessible on disk.** Unlike a
   true file upload (e.g. the resume PDF, which landed in
   `/root/.claude/uploads/.../*.pdf` and was `Read`-able), a pasted/dragged
   image in the chat has no filesystem path — `find` across the whole
   filesystem confirms nothing lands there. Don't waste time searching for it.
2. **This sandbox's outbound network is allowlisted and blocks most external
   domains** — confirmed 403 from the local proxy on `picsum.photos`,
   `youtube.com`/`img.youtube.com`, and arbitrary third-party sites
   (`kansascitytvmounting.com`, `pareoisland.com`, `gosolutions.com`, etc.)
   when hit directly with `curl` from this container. This is a **sandbox-only
   limitation** — the deployed Railway app has full internet access and these
   URLs resolve fine there. Don't conclude something is "broken" just because
   it 403s or shows a broken-image icon in an in-sandbox screenshot; check
   whether the domain is one you've already confirmed is blocked before
   assuming a real bug.
3. **The reliable path: ask the user to upload to Google Drive**, then use the
   Drive MCP connector:
   - `mcp__Google_Drive__search_files` with a `title contains '...'` query to
     find the file ID.
   - `mcp__Google_Drive__download_file_content` to fetch it. For anything but
     tiny files this **will exceed the tool's inline token limit** — it
     auto-saves the full base64 JSON response to a local path (given in the
     error message) instead of erroring out. Extract it with:
     ```bash
     jq -r '.content' <saved-path> | base64 -d > public/images/whatever.png
     ```
   - Drive images typically arrive as **raw, huge PNGs (1–3MB)**. Always
     compress before committing. `sharp` is not a project dependency — install
     it as a one-off in the scratchpad dir (`cd $SCRATCHPAD && npm install
     sharp`), run a throwaway Node script to resize + convert to WebP (quality
     ~80–82 has been the sweet spot, gets 1–3MB PNGs down to 20–200KB), then
     delete the intermediate PNG before `git add` so only the compressed WebP
     lands in the repo.

## Deployment

- **GitHub**: `hthmark/portfolio`. Two branches kept in sync:
  `claude/personal-portfolio-website-oaj3jr` (the harness's designated dev
  branch for this session) and `main`. Workflow used for every change: commit
  to the feature branch → push → `git checkout main && git merge --ff-only
  <feature-branch> && git push origin main` → checkout back to the feature
  branch. They've never diverged — always fast-forward, never rebased or
  force-pushed. Keep doing this unless told otherwise.
- **Railway**: connected to the GitHub repo, auto-deploys from `main`.
  `package.json`'s `start` script is `next start -p ${PORT:-3000}` —
  deliberately changed from plain `next start` because Railway assigns a
  dynamic `$PORT` env var at runtime and the default Next.js port (3000) would
  otherwise cause the deploy to not bind correctly.
- **Custom domain**: `gabegonzalezmarketing.com`, registered at Porkbun
  (DNS hosted on Cloudflare via Porkbun). Root/apex domains can't use a CNAME
  (RFC violation, Porkbun enforces this) — it uses an **ALIAS** record instead
  pointing at the Railway-provided target (`*.up.railway.app` subdomain),
  plus a `_railway-verify` TXT record (domain ownership proof) and
  `_acme-challenge` TXT record(s) (Let's Encrypt cert issuance). There was a
  transient `ERR_CERT_COMMON_NAME_INVALID` while Railway was still issuing the
  cert — that resolved on its own once Railway finished verification. If a
  cert error resurfaces, check Railway's Settings → Networking → Custom Domain
  status before assuming DNS is wrong; DNS was confirmed correctly configured
  as of the last session.

## Environment quirks that will otherwise cost you time

- **Framer Motion's `whileInView`** (via `FadeIn.tsx`) means elements start at
  `opacity: 0` and only animate in on scroll. A naive full-page Playwright
  screenshot taken right after `page.goto()` will show most of the page
  blank — this is **not a bug**, it's the animation not having triggered yet.
  Fix: either scroll incrementally through the whole page before
  screenshotting, or inject `page.addStyleTag({content: '* { opacity: 1
  !important; transform: none !important; }' })` right before the screenshot
  to force-reveal everything (QA-only hack, never touches real source).
- **Local dev server port conflicts**: always `lsof -ti:3000
  -sTCP:LISTEN | xargs -r kill` (and check 3001/3002/3003 too) before starting
  a new `npm run dev` — stray background processes from earlier runs
  accumulate and cause Next to silently fall back to a different port. Check
  the actual dev-server log output for which port it landed on; don't assume
  3000.
- **Playwright isn't a project dependency.** For visual QA, install it as a
  one-off in the scratchpad directory (not the repo), and launch with
  `executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome'` and
  `args: ['--no-sandbox']` — the environment pre-installs Chromium there.
- If `npm run build`/`npm run lint` output looks stale or contradicts what you
  just edited, `rm -rf .next` and rebuild — a stale webpack cache has caused
  spurious "port in use" / 404-on-everything symptoms before that had nothing
  to do with the actual code.

## Outstanding / waiting on the user

- Gabe's real YouTube channel URL (`latestWorksContent.channelUrl` is empty —
  "View More" link stays hidden until it's set).
- More videos for Latest Works beyond the one currently wired up.
- Whether he wants real (silent, server-side) contact form submission instead
  of the mailto fallback — needs an email-sending API key if so.
- Confirm `gabegonzalezmarketing.com` is now showing a valid cert with no
  browser warning (was resolving as of last check, but wasn't re-verified
  after the fact).
