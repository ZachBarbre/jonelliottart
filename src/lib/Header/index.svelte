<script>
	import { page } from '$app/stores';
	console.log($page.path)
</script>

<header>
	<a class="header-image" sveltekit:prefetch href="/">
		<img src="/jonelliottart.png" alt="Jon Elliot Art">
	</a>

	<nav>
		<ul>
			<li ><a class:active={$page.path === '/'} sveltekit:prefetch href="/">Illustration</a></li>
			<li ><a class:active={$page.path === '/character-concepts'} sveltekit:prefetch href="/character-concepts">Character Concepts</a></li>
			<li ><a class:active={$page.path === '/graphic-design'} sveltekit:prefetch href="/graphic-design">Graphic Design</a></li>
			<li ><a class:active={$page.path === '/projects'} sveltekit:prefetch href="/projects">Projects</a></li>
			<li><a rel="external" target="_blank" href="https://jonelliottart.storenvy.com/">Store</a></li>
			<li ><a class:active={$page.path === '/projects'} sveltekit:prefetch href="/porjects">About</a></li>
		</ul>
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
		/* max-width: 1500px; */
		width: 60%;
		min-width: 600px;
	}

	@media (max-width: 720px) {
		nav {
			width: 100%;
			min-width: unset;
		}
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
