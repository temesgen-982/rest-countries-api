<script>
	import { Search } from '@lucide/svelte';
	// import { goto } from '$app/navigation';
	// import { page } from '$app/state';

	import CountryCard from '$lib/components/CountryCard.svelte';

	let { data } = $props();

	let searchQuery = $state('');
	let selectedRegion = $state('');
	// let selectedRegion = $state(data.currentRegion ?? '');
	// let searchQuery = $state(data.currentQuery ?? '');

	// effect to handle region changes and query changes
	// $effect(() => {
	// 	const url = new URL(page.url);

	// 	if (selectedRegion) url.searchParams.set('region', selectedRegion);
	// 	else url.searchParams.delete('region');

	// 	if (searchQuery)
	// 		url.searchParams.set('q', searchQuery); // <-- Add search logic
	// 	else url.searchParams.delete('q');

	// 	goto(url, { replaceState: true, keepFocus: true });
	// });
</script>

<main class="flex flex-col gap-4 px-3 py-4">
	<div class="md:flex md:items-center md:justify-between md:px-10">
		<div class="py-5">
			<form class="dark:bg-neutral-blue-700 flex items-center gap-2 rounded px-3 py-2 shadow">
				<Search />
				<input
					type="text"
					bind:value={searchQuery}
					placeholder="Search for a country..."
					class="border-0 bg-transparent"
				/>
			</form>
		</div>
		<select
			bind:value={selectedRegion}
			class="dark:bg-neutral-blue-700 bg-neutral-white justify-start rounded border-0 text-left shadow md:px-25 md:py-5"
		>
			<option value="">Filter by region:</option>
			<option value="Africa">Africa</option>
			<option value="America">America</option>
			<option value="Asia">Asia</option>
			<option value="Europe">Europe</option>
			<option value="Oceania">Oceania</option>
		</select>
	</div>
	<div class="grid gap-10 p-3 md:grid-cols-4 md:px-10">
		{#each data.countries as country (country.name)}
			<CountryCard
				flag={country.flags.svg}
				code={country.alpha3Code}
				population={country.population}
				name={country.name}
				region={country.region}
				capital={country.capital ?? 'N/A'}
			/>
		{/each}
	</div>
</main>
