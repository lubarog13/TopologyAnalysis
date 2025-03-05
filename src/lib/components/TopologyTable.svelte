<script lang="ts">
    import { Cell } from "../classes/Cell";
    import { onMount } from "svelte";
	import CellItem from "./CellItem.svelte";
    let cells: Cell[] = [];
    let rows: number = $state(0);
    let columns: number = $state(0);

    onMount(() => {
        columns = Math.max(...cells.map(cell => cell.x)) + 1;
        rows = Math.max(...cells.map(cell => cell.y)) + 1;
    });
</script>

<div class="topology-table grid grid-cols-{columns} grid-rows-{rows} gap-0">
        {#each cells as cell}
            <div class="topology-table-cell"><CellItem {cell} /></div>
        {/each}
</div>