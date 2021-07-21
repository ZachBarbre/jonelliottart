<script>
	import marked from 'marked';
	export let image;
	export let images;
	export let path = '';

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

<h1>{image.title}</h1>
{#if image.body}
	<div class="description">{@html marked(image.body)}</div>
{/if}
<div class="image-wrapper">
	<img src={image.imageUrl} alt={image.title} />
</div>
{#if image.list}
	{#each image.list as listImage}
		{#if listImage.title}
			<h1>{listImage.title}</h1>
		{/if}
		{#if listImage.body}
			<div class="description">{@html marked(listImage.body)}</div>
		{/if}
		<div class="image-wrapper">
			<img src={listImage.imageUrl} alt={listImage.title || image.title} />
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
		padding: 5px 10px;
	}

	img {
		width: 100%;
	}

	.image-nav {
		margin-top: 2%;
		align-self: flex-end;
		margin-right: 10px;
		font-size: 1.1rem;
	}
</style>
