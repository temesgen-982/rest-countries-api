// import fs from 'fs';
// import path from 'path';
import type { Country } from '$lib/types';

import allCountriesData from '$lib/data/countries.json' with { type: 'json' };
const allCountries: Country[] = allCountriesData;
// This is our in-memory cache. It starts empty.
// let countries: Country[] | null = null;

// The path to your data file
// const filePath = path.join(process.cwd(), 'src', 'lib', 'data', 'countries.json');

// function loadCountries(): Country[] {
// 	if (countries) {
// 		// If we've already loaded the data, return the cached version instantly.
// 		return countries;
// 	}

// Otherwise, read the file from disk for the first time.
// const fileContents = fs.readFileSync(filePath, 'utf8');
// 	countries = JSON.parse(fileContents) as Country[];
// 	return countries;
// }

// ---- This is your new API for the rest of your app ----

/**
 * Gets all countries.
 */
export function getCountries() {
	return allCountries;
}

/**
 * Gets a single country by its alpha3Code (e.g., "BEL").
 * @param {string} code
 */
export function getCountry(code: string): Country | undefined {
	return allCountries.find((c) => c.alpha3Code.toLowerCase() === code.toLowerCase()) ?? undefined;
}

/**
 * Filters countries by their region
 */
export function filterCountries(region: string): Country[] {
	return allCountries.filter((c) => c.region === region);
}
