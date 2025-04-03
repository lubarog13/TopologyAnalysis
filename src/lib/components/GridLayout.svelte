<script lang="ts">
    import type {Element} from "$lib/classes/Element";
    import {GridCell} from "$lib/classes/GridCell";
    import {onMount} from "svelte";
    interface Props {
        width: number,
        height: number,
        cellsCountRows: number,
        cellsCountCols: number,
        elements: Element[],
        onCellSelected: (cell: GridCell | null) => void
    }
    let {elements, width, height, cellsCountCols, cellsCountRows, onCellSelected}: Props = $props();
    let cells: GridCell[] = $state([]);
    let selectedIndex: number | null = $state(null);
    onMount(() => {
        replaceCellSize()
    });
    function replaceCellSize() {
        onCellSelected(null);
        cells = []
        let widthCell = Math.round(width / cellsCountCols);
        let heightCell = Math.round(height / cellsCountRows);
        for(let i = 0;i< cellsCountCols;i++) {
            for (let j = 0; j < cellsCountRows;j++) {
                cells.push(new GridCell(widthCell * i, heightCell * j, widthCell, heightCell));
            }
        }
        console.log('cells', cells)
    }
    const selectCell = (index: number) => {
        cells[index].setElementsAreas(elements)
        console.log(cells[index])
        selectedIndex = index;
        onCellSelected(cells[index])
    }
</script>

<div class="element-table absolute top-0 left-0 w-full h-full grid" style="grid-template-columns: repeat({cellsCountCols}, 1fr); grid-template-rows: repeat({cellsCountRows}, 1fr);">
    {#each cells as _, index}
        <div class="cell w-full h-full outline-dotted outline-({index === selectedIndex ? '--color-primary-700' : '--color-gray-200'}) outline-2" onclick={() => selectCell(index)}>
        </div>
    {/each}
</div>