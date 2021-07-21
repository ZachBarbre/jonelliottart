<script context="module">
	export async function load({ page, fetch }) {
		const response = await fetch(`${page.path}.json`);
		const data = await response.json();

		return {
			props: {
				design: data.design,
				designs: data.designs
			}
		};
	}
</script>

<script>
	import Gallery from '$lib/components/Gallery/index.svelte';
	import Image from '$lib/components/Image.svelte';
	export let design;
	export let designs;
</script>

<svelte:head>
	<title>{design.title} - Jonathan Elliott</title>
</svelte:head>

<section>
	<Image image={design} images={designs} path={'/graphic-design'} />
	<Gallery imageArray={designs} path={'/graphic-design'} />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: var(--content-max-width);
		margin: 20px auto;
	}
</style>
