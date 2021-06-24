import path from 'path';
import fs from 'fs';

export function getImage(gallery, name) {
	const _dirname = path.resolve();
	const location = path.join(_dirname, `src/content/${gallery}`);

	const image = fs.readFileSync(`${location}/${name}.json`, { encoding: 'utf-8' });
	const imageJson = JSON.parse(image);

	return imageJson;
}
