<script context="module">
	export async function load({ fetch }) {
		const response = await fetch('/index.json');

		return {
			props: {
				illustrations: await response.json()
			}
		};
	}
</script>

<script>
	import Gallery from '$lib/Gallery/index.svelte';
	export let illustrations;
	const galleryType = 'illustrations';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<Gallery imageArray={illustrations} {galleryType} />
</section>

<style>
	section {
		margin-top: 3%;
	}
</style>
