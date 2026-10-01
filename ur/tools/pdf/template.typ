$--
$-- Pandoc کا typst template (صرف $body$ اور چند -V متغیرات پہچانتا ہے)؛ pandoc کے built-in conf() استعمال نہیں کرتا:
$-- built-in template page settings کو conf() کے اندر lock کرتا ہے، جس سے header
$-- اور footer بدلنا ناممکن ہو جاتا ہے، اس لیے ہم یہاں چیزیں خود layout کرتے ہیں۔
$-- اوپر سے divisor تک helper definitions ہیں جو pandoc-generated body text استعمال کرتا ہے،
$-- `pandoc -D typst` سے verbatim نقل کیا گیا؛ حذف نہ کریں۔
$--
#set terms(hanging-indent: 1.5em)

#set table(inset: 6pt, stroke: none)
// Pandoc tables کو align(center) کے اندر wrap کرتا ہے، جو cells کو center کرتا ہے؛ چینی tables بائیں side سے بہتر پڑھے جاتے ہیں
#show table.cell: it => align(left, it)

#let horizontalRule = line(start: (25%, 0%), end: (75%, 0%))
#let divider = if "divider" in std { divider } else { horizontalRule }

#show figure.where(kind: table): set figure.caption(position: top)
#show figure.where(kind: image): set figure.caption(position: bottom)
// لمبے tables صفحات کے پار ٹوٹنے کے قابل ہونے چاہئیں؛ ورنہ ایک oversized block خالی صفحہ چھوڑتا ہے
#show figure: set block(breakable: true)
#set smartquote(enabled: false)

// ---------- Layout ----------
#set document(title: "$booktitle$", author: "eternity4719")
#set text(
  // Latin script typst کے built-in Libertinus استعمال کرتا ہے؛ چینی available fonts کے ذریعے fallback کرتا ہے: CI پر Noto، مقامی طور پر Microsoft YaHei
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
// ہر سیکشن ایک نئے صفحے پر شروع ہوتا ہے؛ weak یقینی بناتا ہے کہ پچھلا صفحہ بالکل بھرا ہو تو کوئی اضافی خالی صفحہ نہ ہو
#show heading.where(level: 1): it => { pagebreak(weak: true); it }

// Header: بائیں side پر book title، دائیں side پر current section name؛ کسی سیکشن کے پہلے صفحے پر header نہیں
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

// ---------- سرورق ----------
#set page(paper: "a4", margin: (x: 2.2cm, top: 2.2cm, bottom: 2cm), header: none, footer: none)
#align(center + horizon)[
  #image("/og.png", width: 100%)
  #v(1.2cm)
  #block(width: 80%)[#text(11.5pt, fill: luma(60))[$subtitle$]]
  #v(2cm)
  #text(10pt, fill: luma(90))[
    تیار کردہ وقت $builddate$ (بیجنگ وقت) 　·　body-text commit $commit$ \
    متن روزانہ اپ ڈیٹ ہوتا ہے؛ آن لائن ورژن معتبر ہے: $site$ \
    آن لائن سرچ، EPUB، اور اس PDF کا تازہ ترین ورژن سب $repo$ پر ہیں
  ]
]

// ---------- فہرست ----------
#pagebreak()
#outline(title: [فہرست], depth: 1, indent: 1em)

// ---------- متن ----------
#pagebreak(weak: true)
#set page(header: running-head, footer: context align(center, text(8.5pt, fill: luma(120))[#counter(page).at(here()).first() / #counter(page).final().first()]))
#counter(page).update(1)

$body$
