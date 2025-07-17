// src/routes/+page.server.ts
import { getCountries } from '$lib/server/database';

export function load() {
	const allCountries = getCountries();
	return {
		countries: allCountries
	};
}

// If I wanted an await block on my main page, this is what I would use

// import { read } from '$app/server';

// import countriesDataPath from '$lib/data/countries.json?url';

// async function getCountries() {
// 	await new Promise((resolve) => setTimeout(resolve, 1000));
// 	const response = read(countriesDataPath);
// 	return response.json();
// }

// export async function load() {
// 	return { countries: getCountries() };
// }
