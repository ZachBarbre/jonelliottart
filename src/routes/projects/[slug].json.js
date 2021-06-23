import { getGallery } from '$lib/utils/getGallery';
import { getImage } from '$lib/utils/getImage';

export function get({ params }) {
	const { slug } = params;

	const projects = getGallery('projects');
	const project = getImage('projects', slug);

	return {
		body: { projects, project }
	};
}
