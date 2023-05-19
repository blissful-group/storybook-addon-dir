# ![storybook-addon-dir](https://github.com/blissful-group/storybook-addon-dir/blob/HEAD/logo.png?raw=true)

A simple addon for a storybook rtl-toggle

[![Build Status][]](https://github.com/blissful-group/storybook-addon-dir/acs/workflows/main.workflow.yml)
[![Issues Open][]](https://github.com/blissful-group/storybook-addon-dir/issues)
[![Licenses][]](./LICENSE)
[![Bundle Size][]](https://bundlephobia.com/package/storybook-addon-dir)
[![NPM][]](https://www.npmjs.com/package/storybook-addon-dir)

[Build Status]: https://github.com/blissful-group/storybook-addon-dir/actions/workflows/main.workflow.yml/badge.svg
[Issues Open]: https://img.shields.io/github/issues/blissful-group/storybook-addon-dir
[Licenses]: https://img.shields.io/github/license/blissful-group/storybook-addon-dir
[Bundle Size]: https://img.shields.io/bundlephobia/min/storybook-addon-dir
[NPM]: https://img.shields.io/npm/v/storybook-addon-dir

## getting started
First install the dependencies
```bash
npm install -D storybook-addon-dir
```
```bash
yarn add -D storybook-addon-dir
```
```bash
pnpm add -D storybook-addon-dir
```

Then add the addon to your main.(js|ts) storybook file
```ts
// main.ts
const config: StorybookConfig = {
  addons: [
    'storybook-addon-dir',
    ...
  ],
  ...
}

export default config
```

## examples
The addon adds a button to the tool bar, at the top:

![inactive example](https://github.com/blissful-group/storybook-addon-dir/blob/main/assets/inactive.png?raw=true)
![active example](https://github.com/blissful-group/storybook-addon-dir/blob/main/assets/active.png?raw=true)
