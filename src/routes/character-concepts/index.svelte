<script context="module">
	export async function load({ fetch }) {
		const response = await fetch('/character-concepts.json');

		return {
			props: {
				concepts: await response.json()
			}
		};
	}
</script>

<script>
	import Gallery from '$lib/components/Gallery/index.svelte';
	export let concepts;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<Gallery imageArray={concepts} />
</section>

<style>
	section {
		margin: 3% auto;
		max-width: 1300px;
	}
</style>
