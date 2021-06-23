import { getGallery } from '$lib/utils/getGallery';
import { getImage } from '$lib/utils/getImage';

export function get({ params }) {
	const { slug } = params;

	const characters = getGallery('character-concepts');
	const character = getImage('character-concepts', slug);

	return {
		body: { characters, character }
	};
}
