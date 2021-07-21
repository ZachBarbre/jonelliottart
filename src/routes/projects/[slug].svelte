<script context="module">
	export async function load({ page, fetch }) {
		const response = await fetch(`${page.path}.json`);
		const data = await response.json();

		return {
			props: {
				project: data.project,
				projects: data.projects
			}
		};
	}
</script>

<script>
	import Gallery from '$lib/components/Gallery/index.svelte';
	import Image from '$lib/components/Image.svelte';
	export let project;
	export let projects;
</script>

<svelte:head>
	<title>{project.title} - Jonathan Elliott</title>
</svelte:head>

<section>
	<Image image={project} images={projects} path={'/projects'} />
	<Gallery imageArray={projects} path={'/projects'} />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: var(--content-max-width);
		margin: 20px auto;
	}
</style>
