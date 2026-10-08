import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},

			// Fully prerendered static site, published on GitHub Pages.
			adapter: adapter(),
			paths: {
				// GitHub Pages serves a project site under /<repo>; BASE_PATH is set by the deploy workflow.
				base: (process.env.BASE_PATH ?? '') as '' | `/${string}`
			}
		})
	]
});
