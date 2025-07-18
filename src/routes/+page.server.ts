import { findCountries } from '$lib/server/database';
import type { PageServerLoad } from './$types';

// A helper function to contain the actual data-fetching logic.
// It's async to simulate a real-world delay and to make streaming possible.
async function getFilteredCountries(url: URL) {
	const region = url.searchParams.get('region');
	const query = url.searchParams.get('q');

	// Optional: add a fake delay to make the loading state visible
	await new Promise((resolve) => setTimeout(resolve, 500));

	const countries = findCountries({ region, query });
	return countries;
}

export const load: PageServerLoad = ({ url }) => {
	// IMPORTANT: We do NOT `await` the result here.
	// We call the async function and immediately return the promise it creates.
	// This is the key to streaming and instant page loads.
	return {
		countries: getFilteredCountries(url),
		// We pass the current filter values back to the page for the UI
		currentRegion: url.searchParams.get('region'),
		currentQuery: url.searchParams.get('q')
	};
};
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
