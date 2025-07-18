<script>
	let { data } = $props();
</script>

<button class="m-3"> Back </button>
<div class="px-3 py-6">
	<img src={data.country.flags.svg} alt="{data.country.name} flag" />
	<div class="grid gap-3 p-3">
		<h1>{data.country.name}</h1>
		<div>
			<p>Native Name: <span>{data.country.nativeName}</span></p>
			<p>Population: <span>{data.country.population}</span></p>
			<p>Region: <span>{data.country.region}</span></p>
			<p>Sub Region: <span>{data.country.subregion}</span></p>
			<p>Capital: <span>{data.country.capital}</span></p>
		</div>
		<div>
			<p>Top Level Domain: <span>{data.country.topLevelDomain}</span></p>
			<div class="flex gap-2">
				<p>Currencies:</p>
				{#if data.country.currencies}
					{#each data.country.currencies as currency}
						<span>{currency.name}</span>
					{/each}
				{:else}
					<span>N/A</span>
				{/if}
			</div>
			<div class="flex gap-2">
				<p>Languages:</p>
				{#if data.country.languages}
					{#each data.country.languages as language}
						<span>{language.name}</span>
					{/each}
				{:else}
					<span>N/A</span>
				{/if}
			</div>
		</div>
		<div class="flex">
			<p>Border Countries:</p>
			<div class="flex w-full justify-around">
				{#each data.borderCountries as borderCountry}
					<span>{borderCountry?.name}</span>
				{/each}
			</div>
		</div>
	</div>
</div>
