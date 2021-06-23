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

<section class="section-content">
	<Gallery imageArray={projects} path={'/projects'} />
</section>
