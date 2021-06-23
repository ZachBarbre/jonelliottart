<script>
	import Masonry from '$lib/components/Masonry.svelte';
	export let imageArray;
	export let path = '';
	let refreshLayout;
</script>

<Masonry gridGap="10px" colWidth="minmax(360px, 1fr)" bind:refreshLayout>
	{#each imageArray as image, i}
		<a sveltekit:prefetch href="{path}/{image.file}">
			<div class="image-wrapper">
				{#if i === imageArray.length - 1}
					<img on:load={refreshLayout} src={image.imageUrl} alt={image.title} />
				{:else}
					<img src={image.imageUrl} alt={image.title} />
				{/if}
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
