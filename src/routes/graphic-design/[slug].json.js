import { getGallery } from '$lib/utils/getGallery';
import { getImage } from '$lib/utils/getImage';

export function get({ params }) {
	const { slug } = params;

	const designs = getGallery('graphic-design');
	const design = getImage('graphic-design', slug);

	return {
		body: { designs, design }
	};
}
