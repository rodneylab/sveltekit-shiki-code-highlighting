import mdsvexConfig from './mdsvex.config.mjs';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svelte.md'],
	preprocess: [vitePreprocess({}), mdsvex(mdsvexConfig)],
	kit: {
		adapter: adapter(),
	},
};

export default config;
