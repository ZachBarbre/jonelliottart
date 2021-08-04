<footer>
	<h3>Say Howdy!</h3>
	<a class="mail" rel="external" href="mailto:jonelliottart@gmail.com">jonelliottart@gmail.com</a>
	<ul>
		<li><a rel="external" href="https://www.artstation.com/artist/sixfootewok">Artstation</a></li>
		<li><a rel="external" href="http://sixfootewok.deviantart.com/">Deviantart</a></li>
		<li><a rel="external" href="https://twitter.com/jonelliottart">Twitter</a></li>
		<li><a rel="external" href="https://www.instagram.com/jonelliottart/">Instagram</a></li>
		<li><a rel="external" href="https://www.facebook.com/jonelliottart/">Facebook</a></li>
		<li><a rel="external" href="https://www.twitch.tv/sixfootewok1">Twitch</a></li>
	</ul>
</footer>

<style>
	footer {
		width: 80%;
		min-width: 300px;
		max-width: var(--content-max-width);
		margin: 0 auto;
		border-top: var(--secondary-color) solid 1px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	h3 {
		font-size: 2rem;
		text-transform: uppercase;
		margin: 1.5rem 0 0;
	}

	a {
		font-weight: 500;
	}

	.mail {
		color: var(--primary-color);
		font-size: 1.2rem;
		margin: 29px 0 15px;
	}

	ul {
		padding: 0;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	li {
		text-align: center;
		list-style: none;
		flex: 1 0 auto;
		padding: 2px 12px;
	}

	li a {
		text-transform: uppercase;
		font-size: 1.3rem;
	}

	@media (min-width: 1000px) {
		ul {
			justify-self: stretch;
		}
	}
</style>
