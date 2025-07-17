import { browser } from '$app/environment';

// if the default is dark get dark otherwise start with light
function getInitialTheme() {
	return browser ? (window.localStorage.getItem('theme') ?? 'light') : 'light';
}

export const themeStore = $state({
	currentTheme: getInitialTheme()
});

$effect.root(() => {
	$effect(() => {
		if (browser) {
			window.localStorage.setItem('theme', themeStore.currentTheme);

			if (themeStore.currentTheme === 'dark') {
				document.documentElement.classList.add('dark');
			} else {
				document.documentElement.classList.remove('dark');
			}
		}
	});
});

export function toggleTheme() {
	themeStore.currentTheme = themeStore.currentTheme === 'dark' ? 'light' : 'dark';
}
