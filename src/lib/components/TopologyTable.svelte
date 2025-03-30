<script lang="ts">
    import { Cell } from "../classes/Cell";
    import { onMount } from "svelte";

    interface Props {
        cells: Cell[];
        globalCell: Cell | undefined
    }
    let {cells, globalCell}: Props = $props();
    let canvas: HTMLCanvasElement;
    let ctx: CanvasRenderingContext2D;

    onMount(() => {
        canvas = document.getElementById('topology-table-canvas') as HTMLCanvasElement;
    ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    if (!ctx) {
				throw new Error('Failed to get canvas context');
			}
    });
    $effect(() => {
        console.log(cells.length, ctx)
        if (cells.length && ctx) {
            cells.forEach(cell => {
                if (cell.elements.length > 0) {
                    cell.setWidth(Math.max(...cell.elements.map(element => element.getSize()[0])));
                    cell.setHeight(Math.max(...cell.elements.map(element => element.getSize()[1])));
                }
            })
            let maxX = Math.max(...cells.map(cell => cell.x_coord));
            let maxSize = Math.max(...cells.filter(cell => cell.x_coord === maxX).map(cell => cell.width));
            canvas.width = maxX + (maxSize / 2);
            console.log(maxSize)
            let maxY = Math.max(...cells.map(cell => cell.y_coord));
            let maxSizeY = Math.max(...cells.filter(cell => cell.y_coord === maxY).map(cell => cell.height));
            canvas.height = maxY + (maxSizeY / 2);
            console.log(maxSizeY)
            if (globalCell) {
                ctx.globalAlpha = 0.3
                globalCell.setWidth(canvas.width)
                globalCell.setHeight(canvas.height)
                // globalCell.setCoords(canvas.width / 2, canvas.height / 2);
                console.log(globalCell)
                globalCell.draw(ctx);
            }

            ctx.globalAlpha = 1
            cells.forEach(cell => cell.draw(ctx));
            let container=document.getElementById('topology-table-container') as HTMLElement;
            const scaleX = (container?.clientWidth || 0) / canvas.width;
            const scaleY = (container?.clientHeight || 0) / canvas.height;

            const scaleToFit = Math.min(scaleX, scaleY);
            const scaleToCover = Math.max(scaleX, scaleY);

            canvas.style.transformOrigin = "0 0"; //scale from top left
            canvas.style.transform = `scale(${scaleToFit})`;
            if (container!==null) {
                container.style.width = (canvas.clientWidth*scaleToFit+10) + 'px';
                container.style.height = (canvas.clientHeight*scaleToFit+10) + 'px'
            }
        }
    });
</script>

<div id="topology-table-container" class="topology-table min-h-50 max-h-50 sm:min-h-auto rounded-sm grid border-4 border-double border-(--color-primary-700) gap-0">
    <canvas id="topology-table-canvas"></canvas>
</div>  

<style>
    .topology-table {
        width: 100%;
    }
</style>