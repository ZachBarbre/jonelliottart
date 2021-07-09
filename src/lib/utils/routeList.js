import path from 'path';
import fs from 'fs';

export function routeList() {
	let pages = ['*'];

	const _dirname = path.resolve();
	const location = path.join(_dirname, `src/content`);
	const contentTypes = fs.readdirSync(location);

	contentTypes.forEach((type) => {
		const _dirname = path.resolve();
		const location = path.join(_dirname, `src/content/${type}`);
		const files = fs.readdirSync(location);

		const newPages =
			type === 'illustrations'
				? files.map((file) => `/${file.split('.')[0]}`)
				: files.map((file) => `/${type}/${file.split('.')[0]}`);
		pages = [...pages, newPages];
	});

	pages = pages.flat();

	return pages;
}
