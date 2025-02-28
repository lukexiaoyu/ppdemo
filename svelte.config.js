// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
    postcss: true
	}),
	kit: {
		adapter: adapter({
			edge: false,
			split:false
		})
	},
	vitePlugin: {
		inspector: false
	},
	onwarn: (warning, handler) => {
		if(warning.filename.includes('svelte-json-tree')) {return}
		handler(warning);
	}
};

export default config;
