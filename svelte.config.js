import adapter from '@sveltejs/adapter-auto';
import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.mjs';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.svelte.md'],
  preprocess: [mdsvex(mdsvexConfig)],
  kit: {
    adapter: adapter(),
  },
};

export default config;
