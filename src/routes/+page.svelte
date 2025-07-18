<script>
	import CountryCard from '$lib/components/CountryCard.svelte';
	import { Search } from '@lucide/svelte';
	let { data } = $props();
</script>

<main class="flex flex-col gap-4 px-3 py-4">
	<div class="md:flex md:items-center md:justify-between md:px-10">
		<div class="py-5">
			<form class="dark:bg-neutral-blue-700 flex items-center gap-2 rounded px-3 py-2 shadow">
				<Search />
				<input type="text" placeholder="Search for a country..." class="border-0 bg-transparent" />
			</form>
		</div>
		<select
			class="dark:bg-neutral-blue-700 bg-neutral-white justify-start rounded border-0 text-left shadow md:px-25 md:py-5"
		>
			<option>Africa</option>
			<option>America</option>
			<option>Asia</option>
			<option>Europe</option>
			<option>Oceania</option>
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
