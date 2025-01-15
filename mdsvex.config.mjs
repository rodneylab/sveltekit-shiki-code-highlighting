import highlighter from './src/lib/utilities/codeHighlighter.mjs';
import { join, resolve } from 'node:path';

const __dirname = resolve();

const config = {
	extensions: ['.svelte.md'],
	highlight: {
		highlighter,
	},
	layout: join(__dirname, './src/lib/components/MarkdownLayout.svelte'),
};

export default config;
