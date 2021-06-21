<script>
	import Masonry from '$lib/components/Masonry.svelte';
	export let imageArray;
</script>

<Masonry gridGap="10px" colWidth="minmax(360px, 1fr)">
	{#each imageArray as image}
		<a sveltekit:prefetch href="/{image.imageUrl.split('.')[0].split('/')[2]}">
			<div class="image-wrapper">
				<img src={image.imageUrl} alt={image.title} />
			</div>
		</a>
	{/each}
</Masonry>

<style>
	img {
		width: 100%;
		opacity: 1;
	}

	img:hover {
		opacity: 0.8;
		transition: opacity 0.2s ease-out;
	}
</style>
