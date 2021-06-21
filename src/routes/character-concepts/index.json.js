import { getGallery } from '$lib/utils/getGallery';

export function get() {
	const characterConcepts = getGallery('character-concepts');

	return {
		body: characterConcepts
	};
}
