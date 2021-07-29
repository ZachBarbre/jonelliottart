<script>
	import Masonry from '$lib/components/Masonry.svelte';
	import Image from '../Image.svelte';
	export let imageArray;
	export let path = '';
	let refreshLayout;

	function getSrcset(imageLink) {
		const splitImageUrl = imageLink.split('upload');
		const srcset = `
			${splitImageUrl[0]}upload/c_limit,w_340${splitImageUrl[1]} 340w, 
			${splitImageUrl[0]}upload/c_limit,w_378${splitImageUrl[1]} 378w, 
			${splitImageUrl[0]}upload/c_limit,w_680${splitImageUrl[1]} 680w, 
			${splitImageUrl[0]}upload/c_limit,w_750${splitImageUrl[1]} 750w, 
			${splitImageUrl[0]}upload/c_limit,w_840${splitImageUrl[1]} 840w, 
			${splitImageUrl[0]}upload/c_limit,w_1500${splitImageUrl[1]} 1500w, 
		`;
		return srcset;
	}
</script>

<Masonry gridGap="10px" colWidth="minmax(340px, 1fr)" bind:refreshLayout>
	{#each imageArray as image, i}
		<a sveltekit:prefetch href="{path}/{image.file}">
			<div class="image-wrapper">
				<img
					on:load={refreshLayout}
					srcset={getSrcset(image.imageUrl)}
					src={image.imageUrl}
					alt={image.title}
				/>
			</div>
		</a>
	{/each}
</Masonry>

<style>
	.image-wrapper {
		margin: 0 auto;
	}

	@media (max-width: 420px) {
		.image-wrapper {
			width: 95%;
		}
	}
	img {
		width: 100%;
		opacity: 1;
	}

	img:hover {
		opacity: 0.8;
		transition: opacity 0.2s ease-out;
	}
</style>
