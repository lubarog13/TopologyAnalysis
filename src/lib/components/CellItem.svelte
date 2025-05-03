<script lang="ts">
	import { Cell } from '../classes/Cell';
	interface Props {
		cell: Cell;
	}
	let { cell }: Props = $props();
	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D;

	$effect(() => {
		if (canvas) {
			ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
			if (!ctx) {
				throw new Error('Failed to get canvas context');
			}
			cell.draw(ctx);
		}
	});
</script>

<div class="cell-item border-2 border-dashed border-gray-500">
	<canvas style="width: 100%; height: 100%;" bind:this={canvas}></canvas>
</div>

<style>
	.cell-item {
		position: relative;
	}
	.cell-item canvas {
		width: 100%;
		height: 100%;
	}
</style>
