import adapter from '@sveltejs/adapter-vercel';
import vercel from '@sveltejs/adapter-vercel';
//import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: vercel(),
		//paths: {
      //base: process.env.NODE_ENV === 'production' ? '/sveltekit-github-pages' : '',
    //},
		files: {
			assets: 'static',
			lib: 'src/lib'
		},
	},
	preprocess: vitePreprocess(),
};

export default config;
