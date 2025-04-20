<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import type { LayoutProps } from './$types';
	import { page } from '$app/stores';
	import { derived } from 'svelte/store';

	export const currentUrl = derived(page, $page => $page.url);


	let {  children }: LayoutProps = $props();
	import { onMount } from 'svelte';

	let action = derived(currentUrl, $currentUrl => $currentUrl.searchParams.get('action'));
</script>

<Navbar :action={action}/>
{@render children()}
<Footer />