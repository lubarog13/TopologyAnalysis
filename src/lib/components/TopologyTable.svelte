<script lang="ts">
	import { Cell } from '../classes/Cell';
	import { onMount } from 'svelte';
	import LayoutsList from '$lib/components/LayoutsList.svelte';
	import type {GridCell} from "$lib/classes/GridCell";
	import GridLayout from "$lib/components/GridLayout.svelte";
	import type {Element} from "$lib/classes/Element";
	import {Checkbox} from "flowbite-svelte";

	interface Props {
		cells: Cell[];
		globalCell: Cell | undefined;
		canRedraw: boolean,
		redrawComplete: () => void,
		onCellSelected: (cell: GridCell | null) => void
	}
	let { cells, globalCell, canRedraw, redrawComplete, onCellSelected }: Props = $props();
	let elements: Element[] = $state([])
	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D;
	let scaleToFit: number = 1;
	let drawComplete: boolean = $state(false);
	let selectedCell: Cell | GridCell | null = $state(null);
	let showCustomGrid: boolean = $state(false);
	let customGridRows: number = 5;
	let customGridCols: number = 5;

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
				redrawComplete();
			}
			if (cells.length && ctx) {
				ctx.fillStyle = 'white';
				ctx.fillRect(0, 0, canvas.width, canvas.height);
				cells.forEach((cell) => {
					if (cell.elements.length > 0) {
						cell.setWidth(Math.max(...cell.elements.map((element) => element.getSize()[0])));
						cell.setHeight(Math.max(...cell.elements.map((element) => element.getSize()[1])));
						console.log(cell.width);
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
				console.log(cells);
				cells.forEach(cell => {
					elements = [...elements, ...cell.elements];
				})
				if (globalCell) {
					elements = [...elements, ...globalCell.elements];
				}
				drawComplete = true;
			}
	}


	$effect(() => {
		console.log(canRedraw)
		if (canRedraw) {
			redraw();
		}
	});
</script>

<div
	class="topology grid w-full grid-cols-1 gap-10 sm:col-span-2 sm:grid-cols-[minmax(0,_1fr)_350px]"
>
	<div class="w-full mt-10 sm:mt-0">
		{#if drawComplete}
		<Checkbox checked={showCustomGrid} on:change={() => {showCustomGrid=!showCustomGrid}}>Показать сетку</Checkbox>
		{/if}
	<div
		id="topology-table-container"
		class="topology-table relative mt-0 grid max-h-50 min-h-50 w-full rounded-sm border-4 border-double border-(--color-primary-700) sm:mt-3 sm:min-h-150 {cells.length
			? 'bg-white'
			: 'bg-gray-400'} order-1 gap-0 sm:order-0 overflow-hidden"
	>
		<canvas id="topology-table-canvas"></canvas>
		{#if drawComplete}
			<div class="absolute" style="width: {canvas.clientWidth}px;height: {canvas.clientHeight}px;">
				<div
					class="relative h-full w-full"
					style=" transform: scale({scaleToFit});transform-origin: 0px 0px 0px;"
				>
					{#each cells as cell, index}
						{#if cell.width}
							<div
								class="absolute border-({selectedCell === cell
									? '--color-primary-700'
									: '--color-gray-200'}) border-10 border-dashed"
								style="left: {cell.borderCoords[3]}px; top: {cell
									.borderCoords[0]}px;width: {cell.width}px;height: {cell.height}px;"
								onclick={() => {
									selectedCell = cells[index];
								}}
							></div>
						{/if}
					{/each}
				</div>
			</div>
			{#if showCustomGrid}
			<GridLayout elements={elements} cellsCountCols={customGridCols} cellsCountRows={customGridRows} width={canvas.width} height={canvas.height} onCellSelected={(cell) => {
				selectedCell = cell;
				onCellSelected(cell);
			}}></GridLayout>
			{/if}
		{/if}
	</div>
	</div>
	<LayoutsList onElementChange={redraw} />
</div>

<style>
	.topology-table {
		width: 100%;
	}
</style>
