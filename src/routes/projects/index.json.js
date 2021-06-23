import { getGallery } from '$lib/utils/getGallery';

export function get() {
	const projects = getGallery('projects');

	return {
		body: projects
	};
}
