# Optimaks Website

Landing page for Optimaks, a workflow automation partner for Singapore / SEA service SMEs.

## Tech Stack
- Next.js (App Router)
- React
- Tailwind CSS
- next-intl (i18n support)

## Development

```bash
# Install dependencies
npm install

# Run local development server
npm run dev

# Build production bundle
npm run build

# Run lint checks
npm run lint
```

## Environment Variables

Copy `.env.example` to create your local configurations:
```env
NEXT_PUBLIC_OPTIMAKS_WHATSAPP_NUMBER=
```
*Note: Use digits only, including country code (e.g. 65XXXXXXXX).*

## Routes
- `/en` - English landing page
- `/zh-TW` - Traditional Chinese landing page
- `/zh-CN` - Simplified Chinese landing page

## Pre-Publish Checklist
- Confirm WhatsApp number
- Confirm contact email
- Confirm privacy / terms pages
- Test mobile 375px / 390px
- Test Workflow Audit → WhatsApp redirect
