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
	import marked from 'marked';
	import Gallery from '$lib/components/Gallery/index.svelte';
	import { afterUpdate } from 'svelte';
	export let illustration;
	export let illustrations;

	function getPrevNextLinks(illustration) {
		for (let index = 0; index < illustrations.length; index++) {
			if (illustrations[index].file === illustration.file) {
				return {
					prev: illustrations[index - 1]?.file || illustrations[0].file,
					next: illustrations[index + 1]?.file || illustrations[index].file
				};
			}
		}
	}

	$: prevNext = getPrevNextLinks(illustration);

	// afterUpdate(() => {
	// 	prevNext = getPrevNextLinks();
	// });

	console.log(prevNext);
</script>

<section>
	<h2>{illustration.title}</h2>
	<div class="description">{@html marked(illustration.body)}</div>
	<div class="image-wrapper">
		<img src={illustration.imageUrl} alt={illustration.title} />
	</div>
	<div class="image-nav">
		<a href="/{prevNext.prev}">prev</a> / <a href="/{prevNext.next}">next</a>
	</div>
	<Gallery imageArray={illustrations} />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 5%;
		max-width: 1300px;
		margin: 3% auto;
	}

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

	.image-nav {
		margin-top: 2%;
		align-self: flex-end;
		margin-right: 10px;
		font-size: 1.1rem;
	}
</style>
