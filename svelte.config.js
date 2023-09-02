//import adapter from '@sveltejs/adapter-vercel';
//import vercel from '@sveltejs/adapter-vercel';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
      // default options are shown. On some platforms
      // these options are set automatically — see below
      fallback: '200.html' // may differ from host to host
    })	
	},
	preprocess: vitePreprocess(),
};

export default config;
