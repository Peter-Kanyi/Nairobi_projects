# Nairobi Projects Website

A responsive, multi-page-feeling static website based on the supplied Nairobi Projects visual reference.

## Pages
- Home
- About
- Services
- Projects
- Blog
- Contact

## Run locally
No build step is required.

1. Open `index.html` in a browser, or
2. Serve the folder with any static server.

Example:
```bash
python3 -m http.server 8000
```
Then open `http://localhost:8000`.

## Important before launch
The image URLs currently use Unsplash placeholders. Replace them in `script.js` with the final Nairobi Projects project photography.

The contact form currently shows a confirmation alert. Connect `submitForm()` to Formspree, Netlify Forms, your backend, WhatsApp, email service, or CRM before production.

The phone numbers, email address and project names are illustrative placeholders and should be replaced with the company's real details.
