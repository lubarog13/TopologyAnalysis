<script lang="ts">
	import { Cell } from '../classes/Cell';
	import { onMount } from 'svelte';
	import LayoutsList from '$lib/components/LayoutsList.svelte';
	import type { GridCell } from '$lib/classes/GridCell';
	import GridLayout from '$lib/components/GridLayout.svelte';
	import type { Element } from '$lib/classes/Element';
	import { Checkbox, Label, Range, Spinner } from 'flowbite-svelte';
	import debounce from 'debounce';
	import DiagramLine from '$lib/components/DiagramLine.svelte';
	interface Props {
		cells: Cell[];
		globalCell: Cell | undefined;
		canRedraw: boolean;
		redrawComplete: () => void;
		onCellSelected: (cell: Cell | GridCell | null) => void;
	}
	let { cells, globalCell, canRedraw, redrawComplete, onCellSelected }: Props = $props();
	let elements: Element[] = $state([]);
	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D;
	let scaleToFit: number = 1;
	let drawComplete: boolean = $state(false);
	let selectedCell: Cell | GridCell | null = $state(null);
	let gridCells: GridCell[] = $state([]);
	let showCustomGrid: boolean = $state(false);
	let gridChanged: boolean = $state(false);
	let customGridRows: number = $state(10);
	let customGridCols: number = $state(10);
	let maxGridRows: number = $state(300);
	let maxGridCols: number = $state(300);
	let firstDraw = true;
	let isLoading = $state(false);
	let startTime: number = $state(0);
	let endTime: number = $state(0);
	let changeSizeRow: () => void = $state(() => {});
	let changeSizeColumn: () => void = $state(() => {});

	onMount(() => {
		canvas = document.getElementById('topology-table-canvas') as HTMLCanvasElement;
		ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
		if (!ctx) {
			throw new Error('Failed to get canvas context');
		}
	});

	const changeGrid = debounce((row: number, col: number) => {
		gridChanged = true;
		if ((row > 30 || col > 30) && (customGridRows !== row || customGridCols !== col)) {
			showCustomGrid = false;
		}
		customGridRows = row;
		customGridCols = col;
		selectedCell = null;
		gridCells = [];
		onCellSelected(null);
		setTimeout(() => {
			gridChanged = false;
		}, 300);
	}, 300);

	function setGridCells(cells: GridCell[]) {
		gridCells = cells;
	}

	function chengeGridShow() {
		gridChanged = true;
		showCustomGrid = !showCustomGrid;
		setTimeout(() => {
			gridChanged = false;
		}, 100);
	}

	function redraw() {
		drawComplete = false;
		isLoading = true;
		startTime = performance.now();
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
		if ((globalCell || cells.length) && ctx) {
			let penaltyX = 0;
			let penaltyY = 0;
			let maxSize = 0;
			let maxSizeY = 0;
			if (globalCell) {
				let minX = Math.min(...globalCell.elements.map((element) => element.coords[0]));
				let minY = Math.min(...globalCell.elements.map((element) => element.coords[1]));
				if (minX < 0) {
					penaltyX = minX;
				}
				if (minY < 0) {
					penaltyY = minY;
				}
				globalCell.setPenaltyX(penaltyX);
				globalCell.setPenaltyY(penaltyY);
				maxSize = Math.max(
					...globalCell.elements.map((element) => element.coords[3] + element.getSize()[0])
				);
				maxSizeY = Math.max(
					...globalCell.elements.map((element) => element.coords[0] + element.getSize()[1])
				);
			}
			ctx.fillStyle = 'white';
			ctx.fillRect(0, 0, canvas.width, canvas.height);
			cells.forEach((cell) => {
				cell.setPenaltyX(penaltyX);
				cell.setPenaltyY(penaltyY);
				if (cell.elements.length > 0) {
					cell.setWidth(Math.max(...cell.elements.map((element) => element.getSize()[0])));
					cell.setHeight(Math.max(...cell.elements.map((element) => element.getSize()[1])));
				}
			});
			let maxX = Math.max(...cells.map((cell) => cell.x_coord));
			maxSize = Math.max(
				maxSize,
				Math.max(...cells.filter((cell) => cell.x_coord === maxX).map((cell) => cell.width)) / 2 +
					maxX
			);
			canvas.width = maxSize;
			let maxY = Math.max(...cells.map((cell) => cell.y_coord));
			maxSizeY = Math.max(
				maxSizeY,
				Math.max(...cells.filter((cell) => cell.y_coord === maxY).map((cell) => cell.height)) / 2 +
					maxY
			);
			canvas.height = maxSizeY;
			if (globalCell) {
				ctx.globalAlpha = 0.3;

				globalCell.setWidth(canvas.width);
				globalCell.setHeight(canvas.height);
				globalCell.draw(ctx);
			}

			ctx.globalAlpha = 1;
			cells.forEach((cell) => {
				cell.draw(ctx);
			});
			let container = document.getElementById('topology-table-container') as HTMLElement;
			container.style.width = 'initial';
			container.style.height = 'initial';
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
			elements = [];
			cells.forEach((cell) => {
				elements = [...elements, ...cell.elements];
			});
			if (globalCell) {
				elements = [...elements, ...globalCell.elements];
			}
			for (let i = 0; i < elements.length; i++) {
				for (let j = i + 1; j < elements.length; j++) {
					if (
						elements[i].name === elements[j].name &&
						elements[i].positions.length === elements[j].positions.length &&
						elements[i].positions.every(function (value, index) {
							return value === elements[j].positions[index];
						})
					) {
						elements.splice(j, 1);
					}
				}
			}
			drawComplete = true;
			changeSizeRow();
			changeSizeColumn();
			if (firstDraw) {
				firstDraw = false;
				showCustomGrid = true;
			}
		}
		isLoading = false;
		endTime = performance.now();
		if (endTime - startTime > 7000) {
			maxGridRows = 30;
			maxGridCols = 30;
		}
		if (endTime - startTime > 5000) {
			maxGridRows = 100;
			maxGridCols = 100;
		}
	}

	$effect(() => {
		if (canRedraw) {
			redraw();
		}
	});
</script>

<div
	class="topology grid w-full grid-cols-1 gap-10 sm:col-span-2 sm:grid-cols-[minmax(0,_1fr)_400px]"
>
	<div class="mt-10 w-full sm:mt-0">
		{#if drawComplete}
			<div class="flex flex-col gap-2">
				<Checkbox class="mr-2" checked={showCustomGrid} on:change={chengeGridShow}
					>Показать сетку</Checkbox
				>
				<Label
					>Количество колонок: <span class="font-bold text-red-500">{customGridCols}</span></Label
				>
				<Range
					id="range-cols"
					min="1"
					max={maxGridCols}
					value={customGridCols}
					on:change={(event) =>
						changeGrid(customGridRows, Number((event.target as HTMLTextAreaElement).value) || 1)}
				/>
				<Label>Количество строк: <span class="font-bold text-red-500">{customGridRows}</span></Label
				>
				<Range
					id="range-rows"
					min="1"
					max={maxGridRows}
					value={customGridRows}
					on:change={(event) =>
						changeGrid(Number((event.target as HTMLTextAreaElement).value) || 1, customGridCols)}
				/>
			</div>
		{/if}
		<div class="grid grid-cols-2 grid-cols-[50px_minmax(0,_1fr)] gap-1">
			{#if drawComplete && gridCells.length > 0}
				<DiagramLine
					onComplete={(fn) => {
						changeSizeColumn = fn;
					}}
					className="mt-0 sm:mt-3"
					style=""
					direction="column"
					cells={gridCells}
					count={customGridRows}
					selectedElements={elements}
					color="var(--color-primary-700)"
				/>
			{:else}
				<div class="mt-0 h-full w-full sm:mt-3 sm:mt-3"></div>
			{/if}
			<div
				id="topology-table-container"
				class="topology-table relative mt-0 grid max-h-50 min-h-50 w-full rounded-sm border-4 border-double border-(--color-primary-700) sm:mt-3 sm:min-h-150 {cells.length
					? 'bg-white'
					: 'bg-gray-400'} order-1 gap-0 overflow-hidden sm:order-0"
			>
				<canvas id="topology-table-canvas"></canvas>
				{#if drawComplete}
					<div
						class="absolute"
						style="width: {canvas.clientWidth}px;height: {canvas.clientHeight}px;"
					>
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
									></div>
								{/if}
							{/each}
						</div>
					</div>
					{#if !gridChanged}
						<GridLayout
							{elements}
							cellsCountCols={customGridCols}
							cellsCountRows={customGridRows}
							width={canvas.width}
							height={canvas.height}
							onCellSelected={(cell) => {
								selectedCell = cell;
								onCellSelected(cell);
							}}
							{setGridCells}
							showGrid={showCustomGrid}
						></GridLayout>
					{/if}
				{/if}
			</div>
			{#if drawComplete && gridCells.length > 0}
				<div></div>
				<DiagramLine
					onComplete={(fn) => {
						changeSizeRow = fn;
					}}
					className=""
					style=""
					direction="row"
					cells={gridCells}
					count={customGridCols}
					selectedElements={elements}
				/>
			{/if}
		</div>
	</div>
	<LayoutsList
		onElementChange={redraw}
		onDiagramChange={() => {
			changeGrid(customGridRows, customGridCols);
		}}
	/>
	{#if isLoading}
		<div class="absolute top-0 left-0 flex h-full w-full items-center justify-center bg-white/50">
			<Spinner />
		</div>
	{/if}
</div>

<style>
	.topology-table {
		width: 100%;
	}
</style>
