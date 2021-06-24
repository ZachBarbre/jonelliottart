import { getGallery } from '$lib/utils/getGallery';
import { getImage } from '$lib/utils/getImage';

export function get({ params }) {
	const { slug } = params;

	const illustrations = getGallery('illustrations');
	const illustration = getImage('illustrations', slug);

	return {
		body: { illustrations, illustration }
	};
}
