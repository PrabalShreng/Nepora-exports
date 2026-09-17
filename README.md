# Nepora Exports

A Next.js site presenting the Pashmina story, collections, and craft of Nepora Exports. Visitors can browse and search pieces, read about the brand, and contact the team. The site has no cart, checkout, account, or payment flow.

## Local development

```bash
npm install
npm run dev
```

Run `npm run lint`, `npx tsc --noEmit`, and `npm run build` before deployment.

## Configuration and content

- Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS domain before building. Without it, canonical URLs use `example.com`, and the site is marked `noindex` and disallowed in `robots.txt` to prevent accidental indexing.
- Replace the placeholder email, phone number, social links, and WhatsApp destination in `app/data.ts` with verified business details. The floating WhatsApp logo currently opens the Contact page.
- Review the collection names, descriptions, categories, and images in `app/data.ts` and `public/images/` before publishing. The six sample pieces reuse three photographs.
- The Contact form opens an email draft. The newsletter validates locally; it needs a mailing-list service before it can collect subscriptions.
