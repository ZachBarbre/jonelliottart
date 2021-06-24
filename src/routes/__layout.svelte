<script>
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header/index.svelte';
	import '../app.css';
</script>

<Header />

<main>
	<slot />
</main>

<Footer />
