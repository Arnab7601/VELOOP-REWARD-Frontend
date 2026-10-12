# VELOOP Rewards — Banner Redesign

A responsive React + Vite frontend concept for the VELOOP Rewards promotional and feature banners. Built from the supplied Task 08 assignment brief.

## Project overview

The interface redesigns five reward features using a premium fintech visual direction: deep navy surfaces, restrained gold accents, clear content hierarchy, large feature illustrations, subtle motion and accessible calls to action.

## Banners

1. **Refer & Earn** — invite friends and discover referral rewards.
2. **Swap Center** — conceptually convert supported reward balances.
3. **Bonus VEs** — explore eligible bonus opportunities.
4. **Captcha Tasks** — understand the task → verification → reward flow.
5. **Exchange Center** — explore supported reward redemption options.

> This is a frontend demonstration with illustrative content. It does not connect to a backend, execute real captcha tasks, process exchanges, or promise actual reward amounts. Replace demo actions and copy with approved VELOOP product rules before production.

## Features

- 100% width responsive banners and mobile-friendly navigation
- Distinct visual direction for each feature
- CSS Modules for component-level styles
- Reusable `BannerShell` and `FeatureIllustration` components
- React Hooks for menu state, selected banner, and demo feedback
- Lucide React and React Icons
- Subtle entrance, hover, floating, progress and swap animations
- Keyboard-friendly buttons, focus indicators and reduced-motion support
- Vite production build

## Technology stack

- React 18
- Vite 6
- Bootstrap 5
- CSS Modules
- React Hooks
- Lucide React
- React Icons

## Requirements

- Node.js 20 or newer (Node.js 22 recommended)
- npm
- Git (optional, for GitHub submission)

## Installation

```bash
npm install
npm run dev
```

Vite prints a local URL, usually `http://localhost:5173`. Open that URL in your browser.

## Development commands

```bash
npm run dev       # start local development server
npm run build     # create production files in dist/
npm run preview   # preview the production build locally
```

## Folder structure

```text
veloop-rewards-redesign/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── BannerShell/
│   │   ├── FeatureIllustration/
│   │   └── banners/
│   │       ├── ReferEarnBanner/
│   │       ├── SwapCenterBanner/
│   │       ├── BonusVEsBanner/
│   │       ├── CaptchaTasksBanner/
│   │       └── ExchangeCenterBanner/
│   ├── hooks/
│   ├── pages/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Responsive design

The design uses full-width banners and responsive CSS:
- Desktop/laptop target: 410–450px
- Tablet target: 380–540px
- Mobile target: 330–520px

The banner content can change from a two-column desktop composition to a vertically stacked mobile layout.

## Animation details

- Floating coin and reward elements
- Animated swap arrows and conversion cards
- Bonus counter/progress motion
- Task verification progress
- Subtle card entrance and hover elevation
- CTA hover and active states
- `prefers-reduced-motion` support

## Accessibility

- Semantic sections and buttons
- Descriptive labels for icon-only controls
- Visible keyboard focus
- High-contrast text
- Responsive touch targets
- Reduced-motion preference support

## Screenshots

Add your own screenshots after running the app, for example:

```text
docs/
└── screenshot-home.png
```

Then link them here using `![VELOOP Rewards preview](docs/screenshot-home.png)`.

## Live demo

Add the deployed Vercel or Netlify URL after deployment.

## GitHub repository

Add your public repository URL after creating it.

## Author

Add your name and contact/profile links before submission.
