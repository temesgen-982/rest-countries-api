import { getCountries } from '$lib/server/database';

export function load() {
	// const region = url.searchParams.get('region');
	// const query = url.searchParams.get('q'); // 'q' is a common convention for search

	const countries = getCountries();

	return {
		countries
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
