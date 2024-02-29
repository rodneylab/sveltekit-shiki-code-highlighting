import adapter from '@sveltejs/adapter-auto';
import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.mjs';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.svelte.md'],
  preprocess: [vitePreprocess({}), mdsvex(mdsvexConfig)],
  kit: {
    adapter: adapter(),
  },
};

export default config;
