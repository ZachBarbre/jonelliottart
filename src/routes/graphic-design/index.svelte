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

<section class="section-content">
	<Gallery imageArray={design} path={'/graphic-design'} />
</section>
