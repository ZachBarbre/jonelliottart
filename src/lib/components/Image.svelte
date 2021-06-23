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

<h2>{image.title}</h2>
<div class="description">{@html marked(image.body)}</div>
<div class="image-wrapper">
	<img src={image.imageUrl} alt={image.title} />
</div>
<div class="image-nav">
	<a sveltekit:prefetch href="{path}/{prevNext.prev}">prev</a> /
	<a sveltekit:prefetch href="{path}/{prevNext.next}">next</a>
</div>

<style>
	h2 {
		font-size: 1.8rem;
		text-transform: uppercase;
		font-weight: 200;
		font-style: normal;
		letter-spacing: 0.06rem;
		line-height: 1.2rem;
		margin: 1%;
	}

	.description {
		max-width: 600px;
		font-weight: 300;
		line-height: 1.5rem;
		font-size: 1.1rem;
		text-align: center;
		margin-bottom: 3%;
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
