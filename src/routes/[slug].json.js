import fs from 'fs';
import path from 'path';

export function get({ params }) {
	const { slug } = params;
	const _dirname = path.resolve();
	const location = path.join(_dirname, 'src/content/illustrations');

	const illustration = fs.readFileSync(`${location}/${slug}.json`, { encoding: 'utf-8' });
	const illustrstionJson = JSON.parse(illustration);

	return {
		body: illustrstionJson
	};
}
