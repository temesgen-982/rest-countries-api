<script>
	import CountryCard from '$lib/components/CountryCard.svelte';
	let { data } = $props();
</script>

<main class="flex flex-col gap-4 px-3 py-4">
	<div class="py-5">
		<form class="flex items-center gap-2 rounded border px-3 py-2">
			<img src="" alt="search" />
			<input type="text" placeholder="Search for a country..." />
		</form>
	</div>
	<select class="form-select rounded">
		<option>Africa</option>
		<option>America</option>
		<option>Asia</option>
		<option>Europe</option>
		<option>Oceania</option>
	</select>
	<div class="grid gap-3 p-3">
		{#each data.countries as country (country.name)}
			<CountryCard
				flag={country.flags.svg}
				code={country.alpha3Code}
				population={country.population}
				name={country.name}
				region={country.region}
				capital={country.capital}
			/>
		{/each}
	</div>
</main>
