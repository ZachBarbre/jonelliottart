<script>
	// import { onMount, tick } from 'svelte';
	import Masonry from '$lib/Masonry.svelte';
	export let imageArray;

	// onMount(() => {
	// 	let grids = [...document.querySelectorAll('.grid-masonry')];

	// 	if (grids.length && getComputedStyle(grids[0]).gridTemplateRows !== 'masonry') {
	// 		grids = grids.map((grid) => ({
	// 			_el: grid,
	// 			gap: parseFloat(getComputedStyle(grid).gridRowGap),
	// 			items: [...grid.childNodes].filter((child) => child.nodeType === 1),
	// 			numberCol: 0
	// 		}));

	// 		function layoutGrid() {
	// 			grids.forEach((grid) => {
	// 				let numberCol = getComputedStyle(grid._el).gridTemplateColumns.split(' ').length;
	// 				if (grid.numberCol !== numberCol) {
	// 					grid.numberCol = numberCol;

	// 					grid.items.forEach((child) => child.style.removeProperty('margin-top'));

	// 					if (grid.numberCol > 1) {
	// 						grid.items.slice(numberCol).forEach((child, index) => {
	// 							let prevChildBottom = grid.items[index].getBoundingClientRect().bottom;
	// 							let currChildTop = child.getBoundingClientRect().top;
	// 							console.log(`${prevChildBottom + grid.gap - currChildTop}px`);
	// 							child.style.marginTop = `${prevChildBottom + grid.gap - currChildTop}px`;
	// 						});
	// 					}
	// 				}
	// 			});
	// 		}
	// 		layoutGrid();
	// 	}
	// });
</script>

<Masonry gridGap="10px" colWidth="minmax(360px, 1fr)">
	{#each imageArray as image}
		<div class="image-wrapper">
			<img src={image.imageUrl} alt={image.title} />
		</div>
	{/each}
</Masonry>

<style>
	.gallery {
		max-width: 1300px;
		margin: 0 auto;
		display: grid;
		justify-items: center;
		grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
		gap: 10px;
	}

	@media (max-width: 835px) {
		.image-wrapper {
			max-width: 360px;
		}
	}

	img {
		width: 100%;
	}
</style>
