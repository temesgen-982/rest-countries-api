// src/routes/[slug]/+page.server.ts
import { error } from '@sveltejs/kit';
import { getCountry, getCountries } from '$lib/server/database';

export function load({ params }) {
	// `params.slug` will be the country code from the URL
	const country = getCountry(params.slug);

	if (!country) {
		// If no country is found, throw a 404 error.
		error(404, 'Not found');
	}

	// This is the ideal pattern. It's efficient, centralized, and easy to understand.

	// ---

	// ### **Bonus: Handling the "Border Countries" Feature**

	// Your detail page design shows links to bordering countries.
	// This is a perfect example of why the utility approach is so powerful.
	// Your detail page `load` function needs access to *all* the country data to find the full names of the border countries.

	// Here's how you'd extend your `/[slug]/+page.server.ts`:

	// Get the full list of countries
	const allCountries = getCountries();

	// Find the full country objects for each border code
	const borderCountries = country.borders
		? country.borders
				.map((borderCode) => allCountries.find((c) => c.alpha3Code === borderCode))
				.filter(Boolean) // filter out any undefined results
		: [];

	return {
		country,
		borderCountries // Pass this new data to your page!
	};
}
