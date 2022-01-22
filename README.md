# OpenC SvelteKit template

Preconfigured SvelteKit template with:

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
