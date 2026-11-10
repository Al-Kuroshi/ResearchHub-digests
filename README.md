# ResearchHub Digest

The public archive of [ResearchHub](https://github.com/Al-Kuroshi/ResearchHub)'s
weekly digests: https://al-kuroshi.github.io/ResearchHub-digests/

This repository is the site. GitHub Pages builds it with Jekyll; there is no
build step of our own.

## How content gets here

The ResearchHub API publishes each digest after it is sent to Discord, as one
file in `_digests/<digest>/<date>-<number>.md`. The file is front matter only:
the whole digest as structured data (JSON, which YAML front matter accepts).
The layouts render it. Text fields ending in `_html` are already escaped by the
API (with `[n]` citations turned into links), so the layouts output them as is;
every other field is escaped by the layout.

Don't edit digest files by hand: the next publish of the same digest replaces
them.

## Layout

```text
_config.yml          site settings, the "digests" collection
_layouts/default.html   page shell: masthead, footer
_layouts/issue.html     one digest
_layouts/page.html      plain pages (About)
_includes/              masthead, issue band, date range
index.html              home: latest issue and the archive by digest
about.md
assets/css/site.css     the whole design (two-ink riso bulletin)
assets/js/site.js       optional: marks the section being read
assets/fonts/           Archivo, Literata, JetBrains Mono (SIL Open Font License)
```

## Preview locally

With Docker, using the same Jekyll version GitHub Pages uses:

```bash
docker run --rm -v "$PWD:/site" -v rh_pages_gems:/usr/local/bundle -w /site -p 4000:4000 \
  ruby:3.3 sh -c "bundle install && bundle exec jekyll serve --host 0.0.0.0"
# then open http://localhost:4000/ResearchHub-digests/
```

Design notes live in `PRODUCT.md`, `DESIGN.md` and `.impeccable/` (not part of
the built site).
