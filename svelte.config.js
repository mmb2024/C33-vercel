import adapter from '@sveltejs/adapter-vercel';
//import vercel from '@sveltejs/adapter-vercel';
//import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
	},
	preprocess: vitePreprocess(),
};

export default config;
