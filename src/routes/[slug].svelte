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
		max-width: var(--content-max-width);
		margin: 20px auto;
	}

	@media (max-width: 420px) {
		section {
			margin: 0 auto;
		}
	}
</style>
