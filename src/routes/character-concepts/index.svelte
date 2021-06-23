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
	<title>Character Concepts - Jonathan Elliott</title>
</svelte:head>

<section class="section-content">
	<Gallery imageArray={concepts} path={'/character-concepts'} />
</section>
