<script lang="ts">
    import { Cell } from "../classes/Cell";
    import { onMount } from "svelte";
    let cells: Cell[] = [];

    onMount(() => {
        const canvas = document.getElementById('topology-table-canvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
        cells = [new Cell(1, 0, 0, 0, 0), new Cell(2, 1, 0, 5897, 0), new Cell(3, 0, 1, 0, 5897), new Cell(4, 1, 1, 5897, 5897)];
        let text = `DS 1 1 1;  (определение ячейки B1);
(описание ячейки B1, полученной); 
(из файла описания виртуального фрагмента: B.vlf);
9 B;  
(топологические примитивы ячейки B1);
L CPA;
P -70 -70 70 -70 70 70 -70 70;
L NA;
P -140 -140 140 -140 140 140 -140 140;
L M1;
P -140 -140 140 -140 140 140 -140 140;
L P;
P -280 -280 280 -280 280 280 -280 280;`
        cells[1].setElementsFromDescription(text.split('\n'));
        if (!ctx) {
				throw new Error('Failed to get canvas context');
			} else {
                cells.forEach(cell => {
                    if (cell.elements.length > 0) {
                    cell.setWidth(Math.max(...cell.elements.map(element => element.getSize()[0])));
                    cell.setHeight(Math.max(...cell.elements.map(element => element.getSize()[1])));
                    }
                })
                let maxX = Math.max(...cells.map(cell => cell.x_coord));
                let maxSize = Math.max(...cells.filter(cell => cell.x_coord === maxX).map(cell => cell.width));
                canvas.width = maxX + (maxSize / 2);
                let maxY = Math.max(...cells.map(cell => cell.y_coord));
                let maxSizeY = Math.max(...cells.filter(cell => cell.y_coord === maxY).map(cell => cell.height));
                canvas.height = maxY + (maxSizeY / 2);
                cells.forEach(cell => cell.draw(ctx));
                const scaleX = (document.getElementById('topology-table-container')?.clientWidth || 0) / canvas.width;
                const scaleY = (document.getElementById('topology-table-container')?.clientHeight || 0) / canvas.height;

                const scaleToFit = Math.min(scaleX, scaleY);
                const scaleToCover = Math.max(scaleX, scaleY);

                canvas.style.transformOrigin = "0 0"; //scale from top left
                canvas.style.transform = `scale(${scaleToFit})`;

            }
    });
</script>

<div id="topology-table-container" class="topology-table min-h-50 sm:min-h-auto rounded-sm grid border-4 border-double border-(--color-primary-700) gap-0">
    <canvas id="topology-table-canvas"></canvas>
</div>  

<style>
    .topology-table {
        width: 100%;
    }
</style>