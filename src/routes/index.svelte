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
	import Gallery from '$lib/components/Gallery/index.svelte';
	export let illustrations;
	const galleryType = 'illustrations';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section class="section-content">
	<Gallery imageArray={illustrations} galleryFor={'illustrations'} />
</section>
