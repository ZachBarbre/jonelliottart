import { getGallery } from '$lib/utils/getGallery';

export function get() {
	const graphicDesign = getGallery('graphic-design');

	return {
		body: graphicDesign
	};
}
