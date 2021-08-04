<script>
	import marked from 'marked';
	import { browser } from '$app/env';
	import { onMount } from 'svelte';
	export let image;
	export let images;
	export let path = '';

	let pageWidth;
	let Carousel;
	let carouselWidth;

	if (browser) {
		onMount(async () => {
			const module = await import('svelte-carousel');
			Carousel = module.default;
			carouselWidth = pageWidth < 1320 ? pageWidth * 0.8 : 1320;
		});
	}

	function getSrcset(imageLink) {
		const splitImageUrl = imageLink.split('upload');
		const srcset = `${splitImageUrl[0]}upload/c_limit,w_340${splitImageUrl[1]} 340w, ${splitImageUrl[0]}upload/c_limit,w_630${splitImageUrl[1]} 630w, ${splitImageUrl[0]}upload/c_limit,w_680${splitImageUrl[1]} 680w, ${splitImageUrl[0]}upload/c_limit,w_750${splitImageUrl[1]} 750w, ${splitImageUrl[0]}upload/c_limit,w_840${splitImageUrl[1]} 840w, ${splitImageUrl[0]}upload/c_limit,w_1500${splitImageUrl[1]} 1500w`;
		return srcset;
	}

	function getPrevNextLinks(image) {
		for (let index = 0; index < images.length; index++) {
			if (images[index].file === image.file) {
				return {
					prev: images[index - 1]?.file || images[0].file,
					next: images[index + 1]?.file || images[index].file
				};
			}
		}
	}

	$: prevNext = getPrevNextLinks(image);
</script>

<svelte:window bind:innerWidth={pageWidth} />

<h1>{image.title}</h1>
{#if image.body}
	<div class="description">{@html marked(image.body)}</div>
{/if}
{#if !image.thumbnailOnly}
	<div class="image-wrapper">
		<img srcset={getSrcset(image.imageUrl)} src={image.imageUrl} alt={image.title} />
	</div>
{/if}
{#if image.list}
	{#each image.list as listImage}
		{#if listImage.title}
			<h2>{listImage.title}</h2>
		{/if}
		{#if listImage.body}
			<div class="description">{@html marked(listImage.body)}</div>
		{/if}
		<div class="image-wrapper">
			<img
				srcset={getSrcset(listImage.imageUrl)}
				src={listImage.imageUrl}
				alt={listImage.title || image.title}
			/>
		</div>
	{/each}
{/if}
{#if image.gallery}
	{#each image.gallery as imageGallery}
		{#if imageGallery.title}
			<h2>{imageGallery.title}</h2>
		{/if}
		{#if imageGallery.body}
			<div class="description">{@html marked(image.body)}</div>
		{/if}
		<div class="carousel" style="width: {pageWidth < 1320 ? pageWidth * 0.8 : 1320}px">
			<svelte:component this={Carousel}>
				{#each imageGallery.imageList as image}
					<div class="image-wrapper-gallery">
						<img
							class="gallery-image"
							srcset={getSrcset(image.image)}
							src={image.image}
							alt={image.title}
						/>
					</div>
				{/each}
			</svelte:component>
		</div>
	{/each}
{/if}
<div class="image-nav">
	<a sveltekit:prefetch href="{path}/{prevNext.prev}">prev</a> /
	<a sveltekit:prefetch href="{path}/{prevNext.next}">next</a>
</div>

<style>
	h1 {
		font-size: 1.8rem;
		text-transform: uppercase;
		font-weight: 300;
		font-style: normal;
		letter-spacing: 0.06rem;
		margin: 10px;
		text-align: center;
	}

	.description {
		max-width: 600px;
		font-weight: 300;
		font-size: 1.2rem;
		text-align: center;
		margin-bottom: 20px;
	}

	.image-wrapper {
		padding: 0 10px;
		margin: 10px auto;
	}

	@media (max-width: 420px) {
		.image-wrapper {
			width: 95%;
		}
	}

	.carousel {
		width: 100%;
		/* display: flex;
		align-items: center;
		justify-content: center;
		user-select: none; */
	}

	.image-wrapper-gallery {
		display: block;
		width: 100%;
		max-height: 600px;
	}

	img {
		width: 100%;
	}

	.gallery-image {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	.image-nav {
		margin-top: 2%;
		align-self: flex-end;
		margin-right: 10px;
		font-size: 1.1rem;
	}
</style>
