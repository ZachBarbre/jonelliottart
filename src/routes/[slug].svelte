<script context="module">
	export async function load({ page, fetch }) {
		const response = await fetch(`${page.params.slug}.json`);
		const data = await response.json();

		return {
			props: {
				illustration: data.illustration,
				illustrations: data.illustrations
			}
		};
	}
</script>

<script>
	import Gallery from '$lib/components/Gallery/index.svelte';
	import Image from '$lib/components/Image.svelte';
	export let illustration;
	export let illustrations;
	export const prerender = true;
</script>

<svelte:head>
	<title>{illustration.title} - Jonathan Elliott</title>
</svelte:head>

<section>
	<Image image={illustration} images={illustrations} />
	<Gallery imageArray={illustrations} />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 5%;
		max-width: var(--content-max-width);
		margin: 3% auto;
		padding: 0 10px;
	}
</style>
