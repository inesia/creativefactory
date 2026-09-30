# PCFN — Frontend Development Guide

## 1. Objective

Build the Promedia Creator Factory Network (PCFN) website based on `PCFN_Desktop_English_Terms.pdf`. The scope is frontend UI only. Use the PDF as the primary reference for content, identity, section order, typography, and appearance.

This document provides implementation instructions for the development agent. It does not authorize a redesign of the mockup.

**Priorities:** PDF fidelity → content accuracy → responsiveness → accessibility → maintainability.

## 2. Source Status and Confidence

- The source reference is the Promedia Creator Factory Network PDF, described in the initial guide as a single-page document; verify its page count during inspection.
- The content inventory below carries forward the initial guide's transcription. Verify it against the PDF before implementation; it is not an independently verified extraction in this revision.
- Text extraction alone does not provide sufficient visual evidence to identify exact fonts, color codes, dimensions, spacing, stroke widths, images, or layout.
- **Font names and design token values remain unverified. Do not treat this document as an identification of the original design system.**
- Before finalizing the UI, the agent must open or render the PDF visually and inspect its font metadata and assets. If the environment supports text extraction only, precise visual matching is blocked; do not claim an exact match.
- If this transcription differs from the PDF, the PDF is the source of truth. Correct the transcription to match the source rather than applying copywriting preferences.

## 3. Selected Stack

| Area | Selection | Requirements |
| --- | --- | --- |
| Framework | Next.js with App Router | Use compatible stable releases when initializing the project; pin versions through the lockfile. |
| Language | TypeScript | Enable strict mode. |
| Styling | CSS Modules + CSS custom properties | Control dimensions, typography, and spacing without imposing a component library's default styling. |
| Fonts | `next/font/local` | Use identified original font files with appropriate usage rights. |
| Rendering | Server Components by default | Use Client Components only for interactions requiring state or browser APIs. |
| Icons/assets | Original assets or local SVG files | Match the PDF's shapes and stroke weights. Do not replace the logo with a generic icon. |
| Checks | ESLint, TypeScript, Playwright | Cover code quality, interaction flows, and screenshot comparisons. |
| Packages | npm + one lockfile | Do not mix package managers. |

No backend, database, authentication, CMS, external API, or global state library is required. Do not install a UI kit that introduces default styling inconsistent with the mockup. Complex animation is outside the initial scope.

## 4. Scope

### Included

- Main landing page at `/`.
- Header, navigation, hero, network introduction, how it works, four pathways, eight pillars, closing CTA, and footer.
- Desktop implementation matching the PDF.
- Tablet and mobile adaptations retaining the same content and hierarchy.
- Mobile navigation, relevant internal navigation, hover, focus, and basic interaction states.
- Basic page metadata, semantic HTML, and local asset optimization.

### Excluded

- Login, dashboards, admin panels, form submission, WhatsApp/email integration, or actual registration.
- Program pages, location pages, trainer profiles, or service details absent from the PDF.
- Additional pricing, testimonials, statistics, city lists, FAQs, or business claims.
- Redesigns, palette substitutions, supposedly more modern fonts, added gradients, illustrations, or decorative effects absent from the PDF.

## 5. Mandatory Visual Matching Procedure

1. Render the PDF page as a reference image and record its dimensions and aspect ratio. Do not assume a desktop viewport size without inspecting the artboard.
2. Inspect embedded fonts using a PDF inspection utility such as `pdffonts`, when available. Distinguish subset prefixes from actual font family names.
3. Record fonts by role: logo, main heading, section headings, body copy, small labels, numbers, navigation, and buttons. Check whether any text has been converted into outlines or images.
4. Identify font weights, sizes, line heights, letter spacing, capitalization, and line breaks.
5. Sample colors from the document/assets; measure containers, gutters, padding, gaps, lines, radii, and element proportions.
6. Extract available logos and assets. Do not approximate the final logo using plain text.
7. Capture the implementation at the reference viewport and compare it with the rendered PDF using an overlay or image diff.
8. Correct large-scale geometry first, followed by typography, colors, details, and interactions.

PDF and browser antialiasing may differ. Assess final fidelity through visual comparison rather than claims based solely on extracted text.

## 6. Design System Contract

The following values are **not yet specified**. Determine them through PDF inspection rather than a default theme.

| Token group | Required observations |
| --- | --- |
| Colors | Section backgrounds, primary/secondary text, accents, borders, buttons, and derived hover/focus states. |
| Fonts | Original families, files, available weights, styles, and temporary fallbacks. |
| Typography | Size, line height, tracking, and text width for each role. |
| Layout | Container width, horizontal margins, columns, gutters, and alignment. |
| Spacing | Section spacing, internal padding, and gaps. |
| Shapes | Borders, radii, and shadows where present. |
| Assets | Logos, arrow symbols, decorations, images, and aspect ratios. |
| Motion | Necessary interface behavior only; it must not change the static composition. |

Store tokens as CSS custom properties in the global stylesheet. Use CSS Modules for component details. Use semantic token names and avoid unexplained repetition of raw color and spacing values.

**Typography restriction:** do not default to Inter, Poppins, Montserrat, or another font without evidence from the PDF. Record any substitute as temporary; it cannot be described as identical.

## 7. Content Inventory

Keep the English and Indonesian website copy below in its original language. The guide is in English; this does not authorize translating the website. Do not paraphrase or polish source copy. Implement tracking through CSS rather than inserting extraction-related spaces between letters. Verify visual line breaks against the PDF.

### 7.1 Header

Identity:
- `PROMEDIA`
- `CREATOR FACTORY NETWORK`

Navigation in source order:
- `About`
- `Solutions`
- `Programs`
- `Locations`
- `Trainers`
- `Contact Us ↗`

The initial transcription also records `●`. Verify its position and visual role in the PDF; do not assume it is navigation text.

### 7.2 Hero

Label: `MAVERICKS & AHEAD / INDONESIA CREATOR ECONOMY`

Heading: `Where ideas become content. Content becomes opportunity.`

Description: `Promedia Creator Factory Network menghubungkan talenta daerah dengan keterampilan, fasilitas produksi, jaringan kreator, dan kebutuhan pasar.`

CTAs:
- `Partner With Us ↗`
- `Explore Our Network`

Large text element: `PCFN`

### 7.3 Network Introduction

Heading: `Local talent. National opportunity.`

Description: `Satu jaringan yang mempertemukan pelatihan, studio, kreator, brand, UMKM, dan peluang kerja.`

CTA: `EXPLORE THE NETWORK ↗`

### 7.4 How It Works

Label: `01 / HOW IT WORKS`

Heading: `More than a training space.`

Description: `Creator Factory dirancang sebagai tempat orang belajar, menghasilkan karya, lalu terhubung dengan kebutuhan bisnis yang nyata.`

Additional text: `Learn. Create. Connect.`

| Label | Description |
| --- | --- |
| `01 / LEARN` | `Pelatihan praktis untuk keterampilan media, kreator, dan perdagangan digital.` |
| `02 / MAKE` | `Produksi konten dan siaran dengan dukungan studio serta pendampingan.` |
| `03 / GROW` | `Kolaborasi dengan brand, instansi, UMKM, dan pasar melalui jejaring Promedia.` |

Verify the position of `Learn. Create. Connect.` and the three-column arrangement visually; extracted reading order does not reliably preserve page geometry.

### 7.5 Four Pathways

Label: `02 / FIND YOUR PATH`

Heading: `One ecosystem. Four pathways.`

Description: `Jalur dibuat jelas agar setiap pengunjung langsung menemukan langkah yang tepat.`

| Label | Heading | Description | CTA |
| --- | --- | --- | --- |
| `01 / B2B` | `Business Partners` | `Kampanye kreator, produksi konten, pelatihan, dan live commerce.` | `Start a Partnership ↗` |
| `02 / TALENT` | `Creators & Learners` | `Belajar, membuat portofolio, dan ikut kegiatan di kota Anda.` | `Explore Programs ↗` |
| `03 / TRAINER` | `Become a Trainer` | `Ikuti seleksi, TOT internal, lalu mengajar sesuai penugasan.` | `Apply as Trainer ↗` |
| `04 / NETWORK` | `Regional Partners` | `Bangun Creator Factory bersama jaringan Promedia.` | `Build With Us ↗` |

### 7.6 Eight Pillars

Label: `03 / OUR ECOSYSTEM`

Heading: `Eight pillars. One network.`

Description: `Setiap cabang mengembangkan fasilitas dan program sesuai kesiapan lokal, dengan arah yang sama: dari perhatian menuju transaksi.`

| Number | Name |
| --- | --- |
| `01` | `Live Commerce Studios` |
| `02` | `Broadcast & Podcast Studio` |
| `03` | `Creator Studio` |
| `04` | `Digital Skills Academy` |
| `05` | `Creator Network` |
| `06` | `Commerce & Affiliate Center` |
| `07` | `Media Production Center` |
| `08` | `Digital Job Center` |

Do not add pillar descriptions absent from the PDF. Preserve `Studios` versus `Studio` in each name.

### 7.7 Closing CTA and Footer

Label: `LET'S BUILD WHAT'S NEXT`

Heading: `Local talent. Greater impact.`

Description: `Bawa kebutuhan bisnis Anda, bergabung sebagai trainer, atau mulai membangun Creator Factory di daerah.`

CTA: `Connect With PCFN ↗`

Copyright: `© Promedia Creator Factory Network · Part of Promedia Group`

Additional identity text: `CREATOR`

Displayed website address: `creatorfactory.promediateknologi.id`

Do not add a year to the copyright. Position `CREATOR` and the website address according to the PDF.

## 8. Recommended Implementation Structure

This structure applies to the actual Next.js repository; it does not require creating separate preview pages.

- `src/app/layout.tsx`: metadata, local fonts, global stylesheet, and document language.
- `src/app/page.tsx`: landing page composition.
- `src/app/globals.css`: minimal reset, design tokens, base styles, focus, and reduced motion.
- `src/components/`: `SiteHeader`, `HeroSection`, `NetworkIntro`, `HowItWorks`, `PathwaysSection`, `EcosystemSection`, `ContactSection`, `SiteFooter`.
- `src/components/`: colocated `.module.css` files where needed.
- `src/content/home.ts`: all copy, pathway data, pillar data, and navigation target configuration.
- `public/fonts/`: verified local fonts.
- `public/images/`: official extracted assets or supplied source files.
- `tests/`: content, navigation, and visual regression checks.

Use data arrays for repeated elements. Do not duplicate content strings across components. A mobile menu is not a reason to make the entire page a Client Component.

## 9. UI Behavior and Link Destinations

The PDF provides CTA labels, but the initial transcription does not establish destination URLs or workflows. The following mapping is a **proposed frontend implementation**, not a statement of PDF behavior.

| Element | Proposed initial behavior |
| --- | --- |
| About | Navigate to the introduction/how-it-works section. |
| Solutions | Navigate to the eight pillars section. |
| Explore Our Network / EXPLORE THE NETWORK | Navigate to the most suitable network/pillars section after layout inspection. |
| Contact Us / Partner With Us / Connect With PCFN | Navigate to the closing CTA; submit no data. |
| Programs / Explore Programs | Navigate to the Creators & Learners card. |
| Trainers / Apply as Trainer | Navigate to the Become a Trainer card. |
| Start a Partnership / Build With Us | Navigate to the closing CTA. |
| Locations | Destination unavailable. Do not invent locations or open a fabricated page. |

Inspect PDF link annotations, if available, before using these proposals. Centralize destination mappings. For genuinely unavailable destinations, retain the label and provide an accessible disabled state; do not use `href="#"` or dead links that appear functional. Record unresolved destinations before final acceptance.

The mobile menu must open and close, expose `aria-expanded`, and support keyboard operation. If implemented as a dialog/overlay, manage focus, support Escape, and return focus to the trigger on close.

## 10. Responsiveness and Accessibility

- The desktop PDF is the primary visual reference. Mobile is an adaptation because no mobile mockup has been supplied.
- Choose breakpoints based on when the composition breaks down; do not imply the PDF specifies particular breakpoints.
- Preserve reading order and all content. Stack columns when necessary.
- Adjust heading sizes and spacing without changing the design character. Avoid carrying forced desktop line breaks onto small screens.
- Do not shrink the entire page as one image. Text must remain selectable, accessible HTML.
- Use one H1, an ordered heading hierarchy, semantic landmarks, and an appropriate document language. Mark English passages where relevant.
- Provide visible focus indicators, adequate touch targets, no horizontal overflow, and support for `prefers-reduced-motion`.
- If source colors create contrast problems, record the conflict and obtain approval before changing them. Do not claim accessibility compliance without checking.

## 11. Agent Workflow

1. Inspect the PDF visually, including font metadata, link annotations, and assets. Record verified facts and unknowns.
2. Establish design tokens from the source and collect original assets/fonts.
3. Initialize Next.js, TypeScript, CSS Modules, linting, and the content structure.
4. Implement all desktop sections with source strings and no additional copy.
5. Compare desktop screenshots against the PDF; correct dimensions, alignment, typography, colors, and details.
6. Implement mobile/tablet adaptations and frontend interactions.
7. Run content, keyboard, link, overflow, lint, typecheck, and build checks.
8. Deliver the code, run instructions, visual comparison results, and any decisions/destinations requiring confirmation.

## 12. Acceptance Criteria

- [ ] All PDF sections and text are present; no lorem ipsum or additional business content.
- [ ] The four pathways and eight pillars follow source order.
- [ ] Capitalization, punctuation, spelling, and singular/plural forms are preserved.
- [ ] Original fonts are identified and loaded; temporary fallbacks are not considered final.
- [ ] Logos and assets match the source; approximations are not passed off as originals.
- [ ] Colors, typography, spacing, containers, and shapes are grounded in PDF inspection.
- [ ] A screenshot at the reference viewport has been compared with the PDF.
- [ ] Responsive behavior is tested at 360, 390, 768, 1024, and 1440 px; these are test widths, not dimensions claimed to originate from the PDF.
- [ ] No clipped text, overlapping elements, or horizontal overflow.
- [ ] Mobile navigation and keyboard navigation work.
- [ ] No fabricated URLs, simulated form submissions, or success claims without a backend.
- [ ] Unavailable CTA destinations are documented and resolved before release.
- [ ] No console, lint, typecheck, or build errors.
- [ ] No backend or unnecessary dependencies.

## 13. Core Agent Instruction

> Implement the PCFN frontend using Next.js App Router, TypeScript, CSS Modules, and local fonts. The PDF is the visual and content source of truth. Use this document's inventory as an initial transcription, then verify it against the PDF. Do not redesign or add copy. Do not guess fonts, colors, assets, or links. If visual information cannot be inspected, identify the blocked work and proceed only with structure/content supported by the source. Visual completion requires source inspection and screenshot comparison; do not claim an exact match based solely on extracted text.
