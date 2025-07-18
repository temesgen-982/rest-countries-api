<script lang="ts">
	import { MoveLeft } from '@lucide/svelte';
	import { base } from '$app/paths';
	import { onMount } from 'svelte';

	let { data } = $props();

	let previousPage = $state('/');

	// We use onMount to safely access `document`
	onMount(() => {
		// If the user came from another page on this site, set the previous page.
		// Otherwise, the fallback remains the homepage.
		if (document.referrer && new URL(document.referrer).origin === location.origin) {
			previousPage = document.referrer;
		}
	});

	// A handler to go back programmatically
	function goBack(event: Event) {
		// This prevents the browser from following the href link
		event.preventDefault();
		history.back();
	}
</script>

<a
	href={previousPage}
	onclick={goBack}
	class="dark:bg-neutral-blue-700 mx-5 my-7 flex items-center gap-2 rounded px-4 py-3 shadow-lg md:mx-20"
	><MoveLeft size={20} strokeWidth={1.25} /> Back
</a>
<div class="flex flex-col px-5 py-6 md:flex-row md:gap-10 md:px-20">
	<div class="md:w-1/2"><img src={data.country.flags.svg} alt="{data.country.name} flag" /></div>
	<div class="grid gap-5 py-3 md:w-1/2 md:grid-cols-2">
		<h1 class="col-span-full mt-3 text-xl">{data.country.name}</h1>
		<div class="flex flex-col gap-2">
			<p>Native Name: <span>{data.country.nativeName}</span></p>
			<p>Population: <span>{data.country.population}</span></p>
			<p>Region: <span>{data.country.region}</span></p>
			<p>Sub Region: <span>{data.country.subregion}</span></p>
			<p>Capital: <span>{data.country.capital}</span></p>
		</div>
		<div class="flex flex-col gap-2">
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
					{#each data.country.languages as language, i}
						<span
							>{language.name}{#if i < data.country.languages.length - 1},{/if}</span
						>
					{/each}
				{:else}
					<span>N/A</span>
				{/if}
			</div>
		</div>
		<div class="col-span-full grid gap-3 md:grid-cols-[auto_1fr]">
			<p class="text-lg">Border Countries:</p>
			<div class="flex w-full flex-wrap justify-start gap-3 md:justify-start">
				{#each data.borderCountries as borderCountry}
					<span class="bg-neutral-white dark:bg-neutral-blue-700 rounded p-2 shadow"
						>{borderCountry?.name}</span
					>
				{/each}
			</div>
		</div>
	</div>
</div>
