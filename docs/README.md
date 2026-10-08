# LVL UP TECH GAMING | Online Gaming PC Storefront based in Dubai, UAE

A responsive, static website for **Level Up Tech Gaming**, a UAE-based e-trader that sells custom and pre-built gaming PCs through Instagram and WhatsApp. Built with plain HTML, CSS, and JavaScript, and hosted on GitHub Pages.

**Live site:** https://zayedmir.github.io/leveluptech-webpage/

## About the project

The business started with two Canva pages, one for desktop and one for mobile. They looked like slides and needed maintaining twice. This project rebuilds them as one responsive website that keeps the brand's Y2K cyber-tech blueprint style but works like a real site: scrolling sections, a hamburger menu on phones, and one-tap ordering through WhatsApp.

It's a static, informational site. There is no backend. Every button either scrolls the page or opens WhatsApp, Instagram, or email.

## Features

- **Responsive layout:** one codebase for desktop, tablet, and phone, with a hamburger menu on small screens.
- **Build showcase:** six PC tiers shown as cards, generated from a single data list in `script.js`.
- **WhatsApp ordering:** each build's order button opens a chat with a prefilled message naming that build.
- **Enquiry form:** collects a name, build, and message, then opens WhatsApp or email with everything filled in. No server needed.
- **How to order and FAQ:** a numbered order flow, plus FAQ answers that open and close using native `<details>` elements.
- **Light motion:** cards wipe in on scroll (`IntersectionObserver`), a CSS-only scrolling parts ticker, and hover effects. Everything switches off for people who prefer reduced motion.
- **One place to edit contact details:** the phone number, Instagram handle, and email are set once in `script.js` and used everywhere.

## Built with

- HTML5
- CSS3 (custom properties, Grid, Flexbox, media queries)
- Vanilla JavaScript (no frameworks or libraries)
- Google Fonts: Schibsted Grotesk, JetBrains Mono, Space Mono
- GitHub Pages for hosting

## Design

| Token | Value | Use |
|---|---|---|
| System Blue | `#0047AB` | Text, borders, headers |
| Blueprint White | `#EAE0D5` | Page background |
| Warning Orange | `#FF6F00` | Buttons, alerts, nav bar |
| Circuit Black | `#1A1D21` | Fine details and specs |

The blueprint backgrounds are exploded-view PC case diagrams, faded to a low opacity so the text stays readable.

## Project structure

```
.
├── index.html      # page structure and content
├── style.css       # brand tokens, layout, responsive rules, motion
├── script.js       # contact config, build data, form, menu, scroll effects
└── images/         # logos, blueprint backgrounds, PC photos
```

## Run it locally

No install or build step is needed.

1. Clone the repo:
   ```
   git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   ```
2. Open `index.html` in your browser.

## Customizing

- **Contact details:** edit the `CONFIG` object at the top of `script.js`.
- **Builds and specs:** edit the `BUILDS` list in `script.js`. The cards update automatically.
- **Text content:** edit `index.html`.
- **Colors and fonts:** change the variables at the top of `style.css`.

## Credits & AI Usage Statement

Designed and built by me. Gemini was used for grammar fixes on webpage text I wrote, and Claude assisted with migrating the site from Canva websites to HTML/CSS/JS and with domain setup guidance. I reviewed and edited all AI-assisted output with extensive QA Testing before final deployment.

[Full AI Usage Statement](./AI_USAGE.md)

## License

The brand name, logos, PC photos, and background artwork belong to Level Up Tech Gaming (LEVELUPTGC COMPUTERS TRADING), all rights reserved. Please do not reuse them without permission. 
