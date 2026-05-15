# Akshar Sharma — Portfolio

Personal portfolio site for Akshar Sharma, freelance web developer & designer.

**Live:** https://akshar-portfolio.vercel.app *(update after first Vercel deploy)*

## Stack
- Next.js 16 (App Router, TypeScript)
- Tailwind v4
- Framer Motion 12
- Lenis (smooth scroll)
- Web3Forms (contact form)
- Deployed on Vercel

## Local development

1. Clone the repo
2. `npm install`
3. Copy `.env.example` to `.env.local` and fill in values
4. `npm run dev`

## Environment variables

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_WEB3FORMS_KEY` | Web3Forms access key (get one at web3forms.com) |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL — set to the Vercel domain (or custom domain later) |

## Deployment

Push to `main` (or `master`) — Vercel auto-deploys on every push.

After the first deploy:
1. Copy the assigned Vercel URL (e.g. `https://akshar-portfolio.vercel.app`)
2. In Vercel → Project Settings → Environment Variables, set `NEXT_PUBLIC_SITE_URL` to that URL
3. Redeploy once to apply

When attaching a custom domain later, update only `NEXT_PUBLIC_SITE_URL` in Vercel — no code change needed.
