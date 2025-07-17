<script>
	let { flag, code, name, population, region, capital } = $props();
</script>

<a class="rounded border" href="/country/{code}">
	<img src={flag} alt="{name} flag" />
	<div class="p-2">
		<h1>{name}</h1>
		<p>Population: <span>{population}</span></p>
		<p>Region: <span>{region}</span></p>
		<p>Capital: <span>{capital}</span></p>
	</div>
</a>
