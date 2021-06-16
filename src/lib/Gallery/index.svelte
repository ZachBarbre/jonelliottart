<script>
	import MagicGrid from 'magic-grid';
	import { onMount } from 'svelte';
	export let imageArray;
	export let galleryType;
	console.log('🚀 ~ file: index.svelte ~ line 6 ~ gallery', galleryType);

	onMount(() => {
		let magicGrid = new MagicGrid({
			container: `#${galleryType}`,
			static: true,
			gutter: 10,
			maxColumns: 3
		});

		magicGrid.listen();
	});
</script>

<div class="gallery" id={galleryType}>
	{#each imageArray as image}
		<div class="image-wrapper">
			<img src={image.imageUrl} alt={image.title} />
		</div>
	{/each}
</div>

<style>
	.gallery {
		max-width: 1300px;
		margin: 0 auto;
	}
	.image-wrapper {
		max-width: 400px;
	}

	@media (max-width: 835px) {
		.image-wrapper {
			max-width: 360px;
		}
	}

	img {
		width: 100%;
	}
</style>
