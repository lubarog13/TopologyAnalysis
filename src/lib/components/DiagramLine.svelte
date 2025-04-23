<script lang="ts">
	import type { GridCell } from "$lib/classes/GridCell";
    import type { Element } from "$lib/classes/Element";
    import { elementsList } from "../../utils/consts/elements.list";
    import { onMount } from "svelte";
    import { Tooltip } from "flowbite-svelte";
    interface Props {
        direction: 'row' | 'column',
        cells: GridCell[],
        count: number,
        selectedElements: Element[],
        style: string,
        className: string
    }
    interface DiagramItem {
        column: number,
        areas: {[name: string]: number}
    }
    let {direction, cells, count, selectedElements, style, className}: Props = $props();

    let diagramItems: DiagramItem[] = $state([]);
    let size: number = $state(0);
    let selectedColor: string = $state('');
    let codes: string[] = $state([]);
    let tooltipText: string = $state('');
    let tooltipTextFormatted: string = $derived(tooltipText.length > 100? tooltipText.slice(0, 100) + '...' : tooltipText);
    onMount(() => {
        // console.log('ok')
        // console.log(selectedElements)
        // console.log(selectedElements.filter(element => !elementsList[element.code]))
        let elementCodes = Array.from(new Set(selectedElements.filter(element => elementsList[element.code].is_selected).map(element => element.code)));
        tooltipText = elementCodes.join(' + ');
        for (let i = 0; i < count; i++) {
            diagramItems.push({column: i, areas: {}})
            diagramItems[i].areas[tooltipText] = 0;
            diagramItems[i].areas['Пустое пространство'] = 0;
        }

        for (let i = 0; i < count; i++) {
            let cellsInDirection = cells.filter(cell => direction === 'column' ? cell.y_index === i : cell.x_index === i);
            // console.log(cellsInDirection)
            cellsInDirection.forEach(cell => {
                Object.entries(cell.getAreasForLineDiagram(selectedElements, tooltipText)).forEach(([code, area]) => {
                    diagramItems[i].areas[code] += area;
                });
            })
            let totalArea = Object.values(diagramItems[i].areas).reduce((acc, area) => acc + area, 0);
            console.log(cellsInDirection.length)
            Object.entries(diagramItems[i].areas).forEach(([code, area]) => {
                diagramItems[i].areas[code] = (area / totalArea) * 100;
            });
        }
        selectedColor = elementCodes.length > 0 ? elementsList[elementCodes[0]].color : '';
        size = direction === 'column' ? document.getElementsByClassName('element-table')[0].clientHeight : document.getElementsByClassName('element-table')[0].clientWidth;
        codes = direction==='column'? Object.keys(diagramItems[0].areas).sort() : Object.keys(diagramItems[0].areas).sort().reverse();
        // console.log(diagramItems)

    })
</script>

<div id="diagram-line-{direction}" class="diagram-line grid {className}" style="{style} {direction === 'column' ? 'grid-template-rows' : 'grid-template-columns'}: repeat({count}, 1fr); {direction === 'column' ? 'height' : 'width'}: {size}px;">
    {#each diagramItems as item, index1}
        <div class="diagram-line__item" style="display: flex; flex-direction: {direction === 'column' ? 'row' : 'column'}; width: {direction === 'column' ? '50px' : '100%'}; height: {direction === 'column' ? '100%' : '50px'};">
            {#each codes as code, index2}
                <div class="diagram-line__item-area" id="diagram-line__item-area-{direction}-{index1}-{index2}" style="width: {direction==='column'? item.areas[code]+'%': '100%'}; height: {direction==='column'? '100%': item.areas[code]+'%'}; background-color: {code === 'Пустое пространство' ? 'var(--color-gray-200)' : selectedColor};"></div>
               {#if code !== 'Пустое пространство'}
                    <Tooltip triggeredBy="#diagram-line__item-area-{direction}-{index1}-{index2}" placement="{direction === 'column' ? 'left' : 'bottom'}">{item.areas[code].toFixed(2)}%</Tooltip>
               {/if}
            {/each}
        </div>
    {/each}
</div>
    <Tooltip triggeredBy="#diagram-line-{direction}">{tooltipTextFormatted}</Tooltip>
        