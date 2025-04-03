<script lang="ts">
	import type { GridCell } from "$lib/classes/GridCell";

    interface Props {
        cell: GridCell
    }

    const { cell }: Props = $props()
    import { onMount } from 'svelte';
    import { Chart, registerables } from 'chart.js';
    import { elementsList } from "../../utils/consts/elements.list";
    
    let chartCanvas: HTMLCanvasElement;
    
    onMount(() => {
        Chart.register(...registerables);
        
        const elementEntries = Object.entries(cell.elements);
        
        if (elementEntries.length > 0) {
            new Chart(chartCanvas, {
                type: 'pie',
                data: {
                    labels: elementEntries.map(([code]) => code),
                    datasets: [{
                        data: elementEntries.map(([, area]) => area),
                        backgroundColor: elementEntries.map(([code]) => 
                            elementsList[code].color
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