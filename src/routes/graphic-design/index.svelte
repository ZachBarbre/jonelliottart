<script context="module">
	export async function load({ fetch }) {
		const response = await fetch('/graphic-design.json');

		return {
			props: {
				design: await response.json()
			}
		};
	}
</script>

<script>
	import Gallery from '$lib/components/Gallery/index.svelte';
	export let design;
</script>

<svelte:head>
	<title>Graphic Design - Jonathan Elliott</title>
</svelte:head>

<section>
	<Gallery imageArray={design} path={'/graphic-design'} />
</section>

<style>
	section {
		margin: 3% auto;
		max-width: var(--content-max-width);
		padding: 0 20px;
	}
</style>
