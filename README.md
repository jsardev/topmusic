# topmusic

A showcase application built with React and it's ecosystem. Powered by a simple [RSS iTunes API](https://itunes.apple.com/us/rss/topalbums/limit=100/json).

[Live demo](https://topmusic-sarneeh.vercel.app/)

## How to use

### Run in development mode

```bash
pnpm install
pnpm dev
```

### Run tests

```bash
pnpm test
```

## Design

I took some time to create a full design and mockup of the application. I found that starting with Figma results in better end products as you spend more time thinking about and focusing on good design and user experience. It's also a lot easier later on to work on the actual implementation having mockups and design tokens ready to use.

[Figma](https://www.figma.com/file/V77tBuUbl6X0qmlaNUboov/wizcode%2Frecruitment-task?type=design&node-id=0%3A1&mode=design&t=rakHT4majZ9Y8WtI-1)

## Technology

Following libraries and technologies were used in this project:

- [React](https://github.com/facebook/react) - UI Library
- [React Router](https://github.com/remix-run/react-router) - Routing
- [Recoil](https://github.com/facebookexperimental/Recoil) - State Management + Data Fetching
- [UnoCSS](https://github.com/unocss/unocss) - CSS Framework
- [Ky](https://github.com/sindresorhus/ky) - HTTP Client
- [Fuse.js](https://github.com/krisk/Fuse) - Fuzzy search
- [Localforage](https://github.com/localForage/localForage) - Offline storage

### Rationale

#### UnoCSS

I love [TailwindCSS](https://tailwindcss.com/) and the Utility CSS approach in general. Although I know Tailwind already and could be probably pretty fast with it, I did recently stumble upon [UnoCSS](https://unocss.dev/) which seemed like a very interesting alternative that provides a lot of improvements to the table. Because it's fully compatible with the Tailwind API, I decided to give it a try and learn something new.

## Assets

Icons have been taken from an open-source project called [Lucide](https://lucide.dev/). Integrated easily with the brilliant [UnoCSS icons preset](https://unocss.dev/presets/icons).

## Architecture

The codebase architecture is inspired by a few resources found in the web:

- [Feature-Sliced Design](https://feature-sliced.design/)
- [Khalil Stemmler - Client-Side Architecture](https://khalilstemmler.com/articles/client-side-architecture/introduction/)
- [Juan Otálora - Folder structure in a React hexagonal architecture](https://dev.to/juanoa/folder-structure-in-a-react-hexagonal-architecture-h77)

It does not stricly follow any of those suggestions, but is mostly inspired by the FSD folder structures and tries to follow SOLID, implements a bit of the hexagonal architecture from DDD and generally focuses on `Low Coupling, High Cohesion` rule.

> Note: Due to small amount of time to finish up the project properly, there are some [shortcomings](#shortcomings) which I'd like to fix when it will be possible.

## Shortcomings / Todo List

As this project was supposed to be a production-ready solution, I wanted to point out what's missing and what I have in my head as a todo list to potentially make it happen:

### Unit tests

There are a lot of places where unit tests are lacking - mostly in some of the container-like React components that have some kind of logic in it. I tried to handle all the domain-related logic, but as time became very short to me, I decided to ship features instead of learning how to properly [test Recoil atoms/selectors/effects](https://recoiljs.org/docs/guides/testing/) which is not so trivial.

### End-to-end tests

I wanted to create end-to-end tests using [Cypress](https://www.cypress.io/) but didn't have enough time.

### SEO / Semantic HTML

To be honest, when time got short I started to spam `div`'s wherever I could. There are certainly some places for improvement.

### UI / UX

There are a few problems and places which could be improved:

- accessibility
- keyboard navigation
- layout shifts (mostly when on scroll show/hide)

### Continuous integration / Continuous deployment

I wanted to create some basic build/test/lint/typecheck GitHub Actions that could check stuff every commit without the need to do it locally.

### Developer tooling

There's only some simple linting and an autoformatter. It would be great to add some precommit hooks to automate things out and some additional eslint rules e.g. for cleaning up imports (and creating module boundaries).
