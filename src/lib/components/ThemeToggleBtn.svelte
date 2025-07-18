<script>
	import { themeStore, toggleTheme } from '$lib/theme.svelte.js';
	import { Moon, Sun } from '@lucide/svelte';
</script>

<button onclick={toggleTheme} class="flex items-center gap-1">
	{#if themeStore.currentTheme === 'light'}
		<Moon size={20} color="#000000" strokeWidth={1} />
		<span>Dark mode</span>
	{:else}
		<Sun size={20} strokeWidth={1} />
		<span>Light mode</span>
	{/if}
</button>
