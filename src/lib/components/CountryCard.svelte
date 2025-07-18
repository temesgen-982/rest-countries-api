<script>
	let { flag, code, name, population, region, capital } = $props();
</script>

<a class="dark:bg-neutral-blue-700 rounded-lg shadow-lg" href="/country/{code}">
	<img src={flag} alt="{name} flag" />
	<div class="flex flex-col gap-3 p-5">
		<h1 class="text-xl">{name}</h1>
		<div class="flex flex-col gap-1">
			<p>Population: <span>{population}</span></p>
			<p>Region: <span>{region}</span></p>
			<p>Capital: <span>{capital}</span></p>
		</div>
	</div>
</a>
