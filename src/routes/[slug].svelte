<script context="module">
	export async function load({ page, fetch }) {
		const response = await fetch(`${page.params.slug}.json`);
		const props = await response.json();

		return {
			props: {
				illustration: props.illustration
			}
		};
	}
</script>

<script>
	export let illustration;
	console.log(illustration);
</script>

<section>
	<div class="image-wrapper">
		<img src={illustration.imageUrl} alt={illustration.title} />
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 5%;
	}
</style>
