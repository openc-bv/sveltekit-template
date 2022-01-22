<script context="module" lang="ts">
	import type { LoadInput, LoadOutput } from '@sveltejs/kit';

	/** @type {import('@sveltejs/kit').Load} */
	export function load({ url }: LoadInput): LoadOutput {
		return {
			props: {
				path: url.pathname
			}
		};
	}
</script>

<script lang="ts">
	import NavigationBar from '@openc-bv/design-system/components/navigation-bar.svelte';
	import '../../node_modules/@openc-bv/design-system/styles/_base.scss';

	export let path: string = undefined;
</script>

<svelte:head>
	<title>OpenC Demo App</title>
</svelte:head>

<NavigationBar
	siteTitle="Demo App"
	{path}
	items={[
		{ label: 'Home', link: '/' },
		{ label: 'Page', link: '/page' },
	]}
/>

<main class="oc-page-content">
	<slot />
</main>
