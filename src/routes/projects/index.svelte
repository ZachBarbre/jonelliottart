<script context="module">
	export async function load({ fetch }) {
		const response = await fetch('/projects.json');

		return {
			props: {
				projects: await response.json()
			}
		};
	}
</script>

<script>
	import Gallery from '$lib/components/Gallery/index.svelte';
	export let projects;
</script>

<svelte:head>
	<title>Projects - Jonathan Elliott</title>
</svelte:head>

<section>
	<Gallery imageArray={projects} path={'/projects'} />
</section>

<style>
	section {
		margin: 3% auto;
		max-width: var(--content-max-width);
		padding: 0 20px;
	}
</style>
