$--
$-- Pandoc's typst template (only recognizes $body$ and a few -V variables); does not use pandoc's built-in conf():
$-- the built-in template locks page settings inside conf(), making it impossible to change the header
$-- and footer, so we lay things out ourselves here.
$-- From the top through the divider is the helper definitions that pandoc-generated body text uses,
$-- copied verbatim from `pandoc -D typst`; do not delete.
$--
#set terms(hanging-indent: 1.5em)

#set table(inset: 6pt, stroke: none)
// Pandoc wraps tables inside align(center), which centers the cells; Chinese tables read better left-aligned
#show table.cell: it => align(left, it)

#let horizontalRule = line(start: (25%, 0%), end: (75%, 0%))
#let divider = if "divider" in std { divider } else { horizontalRule }

#show figure.where(kind: table): set figure.caption(position: top)
#show figure.where(kind: image): set figure.caption(position: bottom)
// Long tables must be able to break across pages; otherwise an oversized block leaves a blank page
#show figure: set block(breakable: true)
#set smartquote(enabled: false)

// ---------- Layout ----------
#set document(title: "$booktitle$", author: "eternity4719")
#set text(
  // Latin script uses typst's built-in Libertinus; Chinese falls back through available fonts: Noto on CI, Microsoft YaHei locally
  font: ("Libertinus Serif", "Noto Serif CJK SC", "Noto Serif SC", "Source Han Serif SC", "Noto Sans CJK SC", "Microsoft YaHei", "SimSun"),
  size: 10.5pt, lang: "zh", region: "cn",
)
#set par(justify: false, leading: 0.78em, spacing: 0.9em)
#set list(indent: 0.6em, spacing: 0.75em)
#show raw: set text(font: ("DejaVu Sans Mono", "Noto Sans Mono CJK SC", "Consolas"), size: 9pt)
#show link: set text(fill: rgb("#1a4fb4"))
#show heading: set block(sticky: true, above: 1.5em, below: 0.65em)
#show heading.where(level: 1): set text(19pt)
#show heading.where(level: 2): set text(14pt)
#show heading.where(level: 3): set text(11.5pt)
// Each section starts on a new page; weak ensures no extra blank page when the previous page is exactly full
#show heading.where(level: 1): it => { pagebreak(weak: true); it }

// Header: book title on the left, current section name on the right; no header on a section's first page
#let running-head = context {
  let next = query(selector(heading.where(level: 1)).after(here())).at(0, default: none)
  if next != none and next.location().page() == here().page() { return }
  let seen = query(selector(heading.where(level: 1)).before(here()))
  if seen.len() == 0 { return }
  set text(8.5pt, fill: luma(120))
  grid(columns: (1fr, auto), align(left)[$booktitle$], align(right)[#seen.last().body])
  v(-7pt)
  line(length: 100%, stroke: 0.4pt + luma(215))
}

// ---------- Cover ----------
#set page(paper: "a4", margin: (x: 2.2cm, top: 2.2cm, bottom: 2cm), header: none, footer: none)
#align(center + horizon)[
  #image("/og.png", width: 100%)
  #v(1.2cm)
  #block(width: 80%)[#text(11.5pt, fill: luma(60))[$subtitle$]]
  #v(2cm)
  #text(10pt, fill: luma(90))[
    Generated at $builddate$ (Beijing time) 　·　body-text commit $commit$ \
    The body text is updated daily; the online version is authoritative: $site$ \
    Online search, the EPUB, and the latest version of this PDF are all at $repo$
  ]
]

// ---------- Table of contents ----------
#pagebreak()
#outline(title: [Contents], depth: 1, indent: 1em)

// ---------- Body ----------
#pagebreak(weak: true)
#set page(header: running-head, footer: context align(center, text(8.5pt, fill: luma(120))[#counter(page).at(here()).first() / #counter(page).final().first()]))
#counter(page).update(1)

$body$
