import { getGallery } from '$lib/utils/getGallery';

export function get() {
	const illustrations = getGallery('illustrations');

	return {
		body: illustrations
	};
}
