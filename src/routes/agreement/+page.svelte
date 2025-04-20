<script lang="ts">
	import { onMount } from "svelte";
	import { base } from "$app/paths";
	import { goto } from "$app/navigation";

	onMount(() => {
		goto(base + '/?action=agreement');
	});
</script>