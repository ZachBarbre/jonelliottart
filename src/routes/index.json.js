import fs from 'fs';
import path from 'path';

export function get() {
	const _dirname = path.resolve();
	const location = path.join(_dirname, 'src/content/illustrations');
	const files = fs.readdirSync(location);

	const illustrations = files.map((file) => {
		const illustration = fs.readFileSync(`${location}/${file}`, { encoding: 'utf-8' });
		const illustrstionJSON = JSON.parse(illustration);
		return illustrstionJSON;
	});

	illustrations.sort((a, b) => a.order - b.order);

	return {
		body: illustrations
	};
}
