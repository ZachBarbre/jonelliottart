import path from 'path';
import fs from 'fs';

export function getGallery(gallery) {
	const _dirname = path.resolve();
	const location = path.join(_dirname, `src/content/${gallery}`);
	const files = fs.readdirSync(location);

	const images = files.map((file) => {
		const image = fs.readFileSync(`${location}/${file}`, { encoding: 'utf-8' });
		const imageJSON = JSON.parse(image);
		imageJSON.file = file.split('.')[0];
		return imageJSON;
	});

	images.sort((a, b) => a.order - b.order);

	return images;
}
