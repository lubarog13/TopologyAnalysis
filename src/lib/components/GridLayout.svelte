<script lang="ts">
    import type {Element} from "$lib/classes/Element";
    import {GridCell} from "$lib/classes/GridCell";
    import {onMount} from "svelte";
	import { elementsList } from "../../utils/consts/elements.list";
    interface Props {
        width: number,
        height: number,
        cellsCountRows: number,
        cellsCountCols: number,
        elements: Element[],
        showGrid: boolean,
        setGridCells: (cells: GridCell[]) => void,
        onCellSelected: (cell: GridCell | null) => void
    }
    let {elements, width, height, cellsCountCols, cellsCountRows, onCellSelected, setGridCells, showGrid}: Props = $props();
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
        for(let i = 0;i< cellsCountRows;i++) {
            for (let j = 0; j < cellsCountCols;j++) {
                cells.push(new GridCell(j, i, widthCell * j, heightCell * i, widthCell, heightCell));
                // console.log(cells[cells.length - 1], elements.filter(element => elementsList[element.code].visible && !elementsList[element.code].negative))
            }
        }
        setGridCells(cells);
        // console.log('cells', cells)
    }
    const selectCell = (index: number) => {
        // console.log(index)
        cells[index].setElementsAreas(elements.filter(element => elementsList[element.code].visible && !elementsList[element.code].negative))
        // console.log(cells[index])
        selectedIndex = index;
        onCellSelected(cells[index])
    }
</script>

<div class="element-table absolute top-0 left-0 w-full h-full grid" style="grid-template-columns: repeat({cellsCountCols}, 1fr); grid-template-rows: repeat({cellsCountRows}, 1fr);">
    {#each cells as _, index}
        <div class="cell w-full h-full outline-dotted outline-({index === selectedIndex ? '--color-red-700' : '--color-gray-200'}) outline-{showGrid ? '2' : '0'}" 
        style="{(!showGrid && index !== selectedIndex) ? 'outline:none' : ''} outline-color: {index === selectedIndex ? 'var(--color-red-700)' : 'var(--color-gray-700)'};outline-offset: -2px" 
        onclick={() => selectCell(index)}
        >
        </div>
    {/each}
</div>