# TripLink — Landing Page

Marketing landing page for **TripLink**, a marketplace connecting verified senders
with verified travelers to make international delivery more affordable while helping
travelers earn from unused luggage space.

Built with **React + Vite + TypeScript + Tailwind CSS v4**, following the official
TripLink brand palette and the approved landing-page copy.

## Tech stack

- [Vite](https://vite.dev/) 6
- React 18 + TypeScript
- Tailwind CSS v4 (via `@tailwindcss/vite`)

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check + production build
npm run preview  # preview the production build
```

## Brand palette

Defined as Tailwind theme tokens in [`src/index.css`](src/index.css):

| Token | Hex | Usage |
| --- | --- | --- |
| `navy` | `#03102F` | Main backgrounds, hero |
| `midnight` | `#1C2951` | Secondary backgrounds |
| `royal` | `#384460` | Cards, icons, dark elements |
| `purple` | `#645BDF` | Primary buttons, logo accent |
| `indigo` | `#626D9D` | Secondary UI elements |
| `offwhite` | `#F2F3F7` | Section backgrounds |
| `bluegray` | `#B9C3DF` | Borders & dividers |
| `mediumgray` | `#ACAFD3` | Secondary text |
| `darkgray` | `#535867` | Body text |
| `info` | `#3F7BFF` | Accent blue / information |
| `success` / `warning` / `error` | `#22C55E` / `#F59E0B` / `#EF4444` | Status |

Primary gradient: `#645BDF → #4C67F5 → #3F7BFF` (`.brand-gradient`).

## Sections

Navbar · Hero · Why TripLink · How It Works (Senders / Travelers) · Trust ·
Safety & KYC · How Payments Work · FAQ · Waitlist · Contact · Final CTA · Footer.

> Store badges are intentionally non-clickable ("Coming Soon") and the waitlist /
> contact forms capture intent on the client — wire them to a backend before launch.
