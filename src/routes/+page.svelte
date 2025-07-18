<script lang="ts">
	import { Search } from '@lucide/svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { onMount } from 'svelte';

	import CountryCard from '$lib/components/CountryCard.svelte';

	let { data } = $props();

	let searchQuery = $state('');
	let selectedRegion = $state('');

	let isMounted = false;
	onMount(() => {
		// This prevents the effect from running on the initial server render
		isMounted = true;
	});

	let debounceTimer: ReturnType<typeof setTimeout>;

	// This is a shared function that builds the URL from our state.
	// It's the single source of truth for navigation.
	function navigateWithFilters() {
		// Use `location.origin` and `location.pathname` which are always available in browser event handlers
		const url = new URL(location.origin + location.pathname);

		if (selectedRegion) {
			url.searchParams.set('region', selectedRegion);
		}
		if (searchQuery) {
			url.searchParams.set('q', searchQuery);
		}

		goto(url.href, { replaceState: true, keepFocus: true, noScroll: true });
	}

	// Handler for the SEARCH INPUT - this one is debounced.
	function onSearchInput() {
		clearTimeout(debounceTimer);
		debounceTimer = setTimeout(() => {
			navigateWithFilters();
		}, 300); // 300ms delay
	}

	// Handler for the REGION DROPDOWN - this one is instant.
	function onRegionChange() {
		// A region change should be immediate. If a search is pending, cancel it.
		clearTimeout(debounceTimer);
		navigateWithFilters();
	}
</script>

<main class="flex flex-col gap-4 px-3 py-4">
	<div class="md:flex md:items-center md:justify-between md:px-10">
		<div class="py-5">
			<form class="dark:bg-neutral-blue-700 flex items-center gap-2 rounded px-3 py-2 shadow">
				<Search />
				<input
					type="text"
					bind:value={searchQuery}
					oninput={onSearchInput}
					placeholder="Search for a country..."
					class="border-0 bg-transparent"
				/>
			</form>
		</div>
		<select
			bind:value={selectedRegion}
			onchange={onRegionChange}
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
		{#await data.countries}
			<p>Loading Countries...</p>
		{:then countries}
			{#each countries as country (country.name)}
				<CountryCard
					flag={country.flags.svg}
					code={country.alpha3Code}
					population={country.population}
					name={country.name}
					region={country.region}
					capital={country.capital ?? 'N/A'}
				/>
			{/each}
		{:catch error}
			<p>Error loading</p>
		{/await}
	</div>
</main>
