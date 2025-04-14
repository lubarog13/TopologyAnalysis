<script lang="ts">
	import { GridCell } from "$lib/classes/GridCell";
    import { Cell } from "$lib/classes/Cell";

    interface Props {
        cell: Cell | GridCell
    }

    const { cell }: Props = $props()
    import { onMount } from 'svelte';
    import { Chart, registerables } from 'chart.js';
    import { elementsList } from "../../utils/consts/elements.list";
    
    let chartCanvas: HTMLCanvasElement;
    
    onMount(() => {
        Chart.register(...registerables);

        let elementEntries: [string, number][];
        if (cell instanceof GridCell) {
            elementEntries = Object.entries(cell.elements);
        } else {
            elementEntries = Object.entries(cell.getElementsAreasPercent());
        }

        // console.log(elementEntries);
        
        if (elementEntries.length > 0) {
            new Chart(chartCanvas, {
                type:    'pie',
                data: {
                    labels: elementEntries.map(([code]) => code),
                    datasets: [{
                        data: elementEntries.map(([, area]) => area),
                        backgroundColor:  elementEntries.map(([code]) => 
                            elementsList[code]?.color || '#ffffff'
                        )
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'bottom'
                        }
                    }
                }
            });
        }
    });
</script>

<div>
    <canvas bind:this={chartCanvas}></canvas>
</div>