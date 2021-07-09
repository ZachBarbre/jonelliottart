/** @type {import('@sveltejs/kit').Config} */
// import adapter from '@sveltejs/adapter-static';
import adapter from '@sveltejs/adapter-netlify';

const config = {
	kit: {
		adapter: adapter(),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		ssr: true,
		vite: {}
	}
};

export default config;
