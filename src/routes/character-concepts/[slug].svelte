<script context="module">
	export async function load({ page, fetch }) {
		const response = await fetch(`${page.path}.json`);
		const data = await response.json();

		return {
			props: {
				character: data.character,
				characters: data.characters
			}
		};
	}
</script>

<script>
	import Gallery from '$lib/components/Gallery/index.svelte';
	import Image from '$lib/components/Image.svelte';
	export let character;
	export let characters;
</script>

<svelte:head>
	<title>{character.title} - Jonathan Elliott</title>
</svelte:head>

<section>
	<Image image={character} images={characters} path={'/character-concepts'} />
	<Gallery imageArray={characters} path={'/character-concepts'} />
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
