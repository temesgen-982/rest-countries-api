<script lang="ts">
	import '../app.css';
	import ThemeToggleBtn from '$lib/components/ThemeToggleBtn.svelte';

	let { children } = $props();
</script>

<main
	class="bg-neutral-grey-50 text-neutral-grey-950 dark:bg-neutral-blue-950 min-h-screen dark:text-white"
>
	<header
		class="dark:bg-neutral-blue-700 bg-neutral-white flex justify-between px-3 py-6 shadow md:px-20"
	>
		<h1>Where in the world?</h1>
		<ThemeToggleBtn />
	</header>
	{@render children()}
</main>
