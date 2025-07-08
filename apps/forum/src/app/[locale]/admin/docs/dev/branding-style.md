# ✨ Portuguese Forum – Front‑End Design & Style Guide (2025 Refresh)

> **Goal:** Re‑energise the Portuguese Forum brand for a modern, tech‑savvy South‑African / Luso‑African audience while respecting its cultural heritage and community roots.

---

## 🎨 Colour System (OKLCH)

| Token          | Light                                   | Dark                           | Usage                    |
| -------------- | --------------------------------------- | ------------------------------ | ------------------------ |
| `--primary`    | `oklch(0.60 0.25 27)` 🇵🇹 deep Carmine | `oklch(0.63 0.25 27)`          | CTAs, highlights, links  |
| `--secondary`  | `oklch(0.65 0.21 142)` 🇵🇹 emerald     | `oklch(0.68 0.21 142)`         | Buttons, nav hover       |
| `--accent`     | `oklch(0.82 0.20 270)` Atlantic navy    | same                           | Badges, graphs           |
| `--muted`      | `oklch(0.92 0.03 95)` pastel gold       | `oklch(0.35 0.04 80)`          | Background tint, borders |
| `--background` | `oklch(0.98 0.01 100)` ivory            | `oklch(0.22 0.01 30)` charcoal | Page bg                  |

*Derived from PDF logo guide (Protea + Cross icon colours) and social‑media presence.*

---

## 🔠 Typography

| Role        | Font               | Size / Weight |
| ----------- | ------------------ | ------------- |
| Display     | `Playfair Display` | 42‑64px / 700 |
| Heading     | `Inter`            | 28‑40px / 600 |
| Body        | `Inter`            | 16‑18px / 400 |
| Mono (code) | `Fira Code`        | 14px / 400    |

All fonts served via **next/font/google** with `swap`.

---

## 🧩 Component Library

We build on **ShadCN + Radix UI** atoms, augmented by:

* **MagicUI** motion primitives (hover‑cards, magnetic buttons)
* **Tailwind‑variants** for variant plumbing (`variant="primary"`, etc.)
* **Lucide‑react** icon set

> *Every new component lives in `libs/ui/src/atoms` or `libs/ui/src/components` then re‑exported via `index.ts`.*

---

## 🖼️ Imagery & Iconography

* **Protea** motifs & subtle tile patterns
* Cross of the Order of Christ watermark (5 % opacity) on hero background
* Consistent rounded corners (`--radius: 10px`) echoing tower parapets from logo

---

## 🧭 Navigation UX

* **Sticky translucent nav bar** (`backdrop-blur`) with gradient bottom border `from-primary/0 via-primary/40 to-transparent`
* Dynamic logo swap (`pf-nav-logo-light.svg` / `pf-nav-logo-dark.svg`)
* Mobile sheet navigation (Slide‑in left)
* Persistent **“Join Community”** CTA (links to Facebook group)

---

## 🕶️ Dark Mode Guidelines

* Maintain AA contrast (>4.5) for all interactive states
* Elevation via `ring` colour, not opaque boxes
* Gradients pivot around `--accent` and `--primary` to avoid muddy tones

---

## 📂 File Locations & Naming

* Guide lives here → `apps/forum/src/app/[locale]/admin/docs/dev/branding-style.md`
* Assets → `apps/forum/public/`
* Global CSS vars → `libs/ui/src/styles/globals.css`

---

## 👀 Inspiration References

* **MagicUI.dev** – motion & micro‑interactions
* **tailwindui.com** marketing layouts
* Portuguese Forum legacy site [https://portugueseforum.org.za/](https://portugueseforum.org.za/)
* Social‑media tone (Facebook group, IG reels)

---

*Last updated: July 2025*
