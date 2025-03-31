<script lang="ts">
	import { Cell } from '../classes/Cell';
	import { onMount } from 'svelte';
	import LayoutsList from '$lib/components/LayoutsList.svelte';

	interface Props {
		cells: Cell[];
		globalCell: Cell | undefined;
	}
	let { cells, globalCell }: Props = $props();
	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D;
	let scaleToFit: number = $state(1);
	let drawComplete: boolean = $state(false);

	onMount(() => {
		canvas = document.getElementById('topology-table-canvas') as HTMLCanvasElement;
		ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
		if (!ctx) {
			throw new Error('Failed to get canvas context');
		}
	});
	function redraw() {
		drawComplete = false;
		if (ctx) {
			// Store the current transformation matrix
			ctx.save();

			// Use the identity matrix while clearing the canvas
			ctx.setTransform(1, 0, 0, 1, 0, 0);
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			// Restore the transform
			ctx.restore();
		}
		if (cells.length && ctx) {
			ctx.fillStyle = 'white';
			ctx.fillRect(0, 0, canvas.width, canvas.height);
			cells.forEach((cell) => {
				if (cell.elements.length > 0) {
					cell.setWidth(Math.max(...cell.elements.map((element) => element.getSize()[0])));
					cell.setHeight(Math.max(...cell.elements.map((element) => element.getSize()[1])));
                    console.log(cell.width)
				}
			});
			let maxX = Math.max(...cells.map((cell) => cell.x_coord));
			let maxSize = Math.max(
				...cells.filter((cell) => cell.x_coord === maxX).map((cell) => cell.width)
			);
			canvas.width = maxX + maxSize / 2;
			console.log(maxSize);
			let maxY = Math.max(...cells.map((cell) => cell.y_coord));
			let maxSizeY = Math.max(
				...cells.filter((cell) => cell.y_coord === maxY).map((cell) => cell.height)
			);
			canvas.height = maxY + maxSizeY / 2;
			console.log(maxSizeY);
			if (globalCell) {
				ctx.globalAlpha = 0.3;
				globalCell.setWidth(canvas.width);
				globalCell.setHeight(canvas.height);
				// globalCell.setCoords(canvas.width / 2, canvas.height / 2);
				console.log(globalCell);
				globalCell.draw(ctx);
			}

			ctx.globalAlpha = 1;
			cells.forEach((cell) => cell.draw(ctx));
			let container = document.getElementById('topology-table-container') as HTMLElement;
			const scaleX = (container?.clientWidth || 0) / canvas.width;
			const scaleY = (container?.clientHeight || 0) / canvas.height;

			scaleToFit = Math.min(scaleX, scaleY);
			const scaleToCover = Math.max(scaleX, scaleY);

			canvas.style.transformOrigin = '0 0'; //scale from top left
			canvas.style.transform = `scale(${scaleToFit})`;
			if (container !== null) {
				container.style.width = canvas.clientWidth * scaleToFit + 10 + 'px';
				container.style.height = canvas.clientHeight * scaleToFit + 10 + 'px';
			}
            console.log(cells)
			drawComplete = true;
		}
	}
	$effect(() => {
		redraw();
	});
</script>

<div
	class="topology grid w-full grid-cols-1 gap-10 sm:col-span-2 sm:grid-cols-[minmax(0,_1fr)_350px]"
>
	<div
		id="topology-table-container"
		class="topology-table relative mt-0 grid max-h-50 min-h-50 w-full rounded-sm border-4 border-double border-(--color-primary-700) sm:mt-10 sm:min-h-150 {cells.length
			? 'bg-white'
			: 'bg-gray-400'} order-1 gap-0 sm:order-0"
	>
		<canvas id="topology-table-canvas"></canvas>
		{#if drawComplete}
        <div class="absolute" style="width: {canvas.clientWidth}px;height: {canvas.clientHeight}px;">
            <div class="relative w-full h-full" style=" transform: scale({scaleToFit});transform-origin: 0px 0px 0px;">
			{#each cells as cell}
            {#if cell.width}
				<div
					class="absolute border-(--color-primary-700) border-10 border-dashed"
					style="left: {(cell.borderCoords[3])}px; top: {cell.borderCoords[0]}px;width: {cell.width}px;height: {cell.height}px;"
				></div>
                {/if}
			{/each}
            </div>
        </div>
		{/if}
	</div>
	<LayoutsList onElementChange={redraw} />
</div>

<style>
	.topology-table {
		width: 100%;
	}
</style>
