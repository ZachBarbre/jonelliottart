<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	let menuOpen = true;

	onMount(() => {
		if (window.innerWidth < 720) {
			menuOpen = false;
		}
	})
	const handleOpen = () => {
		menuOpen = !menuOpen
	}
</script>

<header>
	<a class="header-image" sveltekit:prefetch href="/">
		<img src="/jonelliottart.png" alt="Jon Elliot Art">
	</a>

	<nav>
		<button on:click="{handleOpen}" class="mobile-menu" aria-label="mobile menu">
			<svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
				<path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
			</svg>
		</button>
		{#if menuOpen}
			<ul transition:slide="{{ duration: 300, easing: quintOut }}">
				<li ><a class:active={$page.path === '/'} sveltekit:prefetch href="/">Illustration</a></li>
				<li ><a class:active={$page.path === '/character-concepts'} sveltekit:prefetch href="/character-concepts">Character Concepts</a></li>
				<li ><a class:active={$page.path === '/graphic-design'} sveltekit:prefetch href="/graphic-design">Graphic Design</a></li>
				<li ><a class:active={$page.path === '/projects'} sveltekit:prefetch href="/projects">Projects</a></li>
				<li><a rel="external" target="_blank" href="https://jonelliottart.storenvy.com/">Store</a></li>
				<li ><a class:active={$page.path === '/projects'} sveltekit:prefetch href="/porjects">About</a></li>
			</ul>
		{/if}
	</nav>
</header>

<style>
	header {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 2%;
	}

	.header-image {
		max-width: 300px;
	}

	.header-image img {
		width: 100%;
	}

	nav {
		width: 60%;
		min-width: 600px;
	}

	button {
		margin: 0.5rem 0 0 0;
		padding: 0.5rem;
		width: 90%;
		background-color: var(--background-color);
		border: 0;
		font-size: 2rem;
	}

	.mobile-menu {
		display: none;
	}
	
	ul {
		padding: 0;
		display: flex;
		justify-content: space-between;
		
	}

	li {
		text-align: center;
		list-style: none;
		flex: 1 0 auto;
		padding: 0 5px;

	}

	@media (max-width: 720px) {
		nav {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 100%;
			min-width: unset;
			font-size: 16px;
		}

		.mobile-menu {
			display: unset;
		}

		ul {
			flex-direction: column;
			justify-content: flex-start;
		}

		li {
			padding: 10px 0;
		}
	}

	
	a {
		color: var(--secondary-color);
	}

	.active {
		color: var(--primary-color);
	}

	a:hover {
		color: var(--accent-color);
		text-decoration: none;
	}
</style>
