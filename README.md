# Zangem BnBs — Next.js Scaffold

This repository contains a starter Next.js 15 + TypeScript + TailwindCSS + Framer Motion site scaffold for Zangem BnBs. It includes a mocked booking API, pages for properties, investments (with ROI calculator), gallery, contact, and a simple admin-ready structure.

Quick start

1. Install dependencies

   npm install

2. Run development server

   npm run dev

3. Open http://localhost:3000

Environment variables

Copy `.env.example` to `.env` and add values for:

- NEXT_PUBLIC_GOOGLE_MAPS_API_KEY (optional — map will fallback to an embed if missing)
- NEXT_PUBLIC_STRIPE_PK (optional placeholder)
- MPESA keys (integration hooks are included but not live)

Notes

- The booking API is mocked and writes booking requests to `data/bookings.json`.
- Replace the hero video: add your cinematic file to `public/videos/hero-placeholder.mp4` and a poster at `public/videos/hero-poster.jpg` or update the `Hero` component.
- Payment integration (Stripe / M-Pesa) is intentionally left as placeholders. Provide credentials and I can integrate live flows.

Files of interest

- `app/page.tsx` — Homepage
- `app/properties/page.tsx` — Properties listing
- `app/investments/page.tsx` — Investment page + ROI calculator
- `app/api/bookings/route.ts` — Mock booking API (writes to `data/bookings.json`)
- `components/*` — UI components

Next steps I can do for you

- Wire Stripe and M-Pesa live payments
- Add authentication (NextAuth) for the admin dashboard
- Persist bookings to a real database (Prisma + Postgres)
- Add image/video assets and production optimizations

Tell me which integration you'd like next and I'll implement it.
