# OpenC SvelteKit template

Preconfigured SvelteKit template based on [this one](https://github.com/garraflavatra/sveltekit-template) and adapted for use within [OpenC](https://www.openc.nl). It ships with:

- VS Code configuration files
- `.nvmrc`
- TypeScript
- [OpenC component library](https://github.com/openc-bv/design-system)

## Download

Multiple options:

- Use the GitHub template by clicking _Use this template_.
- [Download the tarball](https://github.com/garraflavatra/sveltekit-template/tarball/main).

## Developing

Once you've created a project and installed dependencies with `npm install`, start a development server:

```bash
npm run dev
```

Or start the server and open the app in a new browser tab:

```bash
npm run dev -- --open
```

## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
npm run build
```

You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.

---

Please also see the [colophon] and note that a [license] applies to all work in
this repository. This component library is not intended for commercial use and not for personal use as well, although the license tolerates the latter.
