<script>
	import { themeStore, toggleTheme } from '$lib/theme.svelte.js';
</script>

<button onclick={toggleTheme}>
	{#if themeStore.currentTheme === 'light'}
		<span>Dark mode</span>
	{:else}
		<span>Light mode</span>
	{/if}
</button>
