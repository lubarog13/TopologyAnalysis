<script lang="ts">
	import { Fileupload, Helper, Label, Textarea, Button, Alert } from 'flowbite-svelte';
	import TopologyTable from './TopologyTable.svelte';
	import { parseCif, parseCifV2 } from '../../utils/consts/methods';
  import { InfoCircleSolid } from 'flowbite-svelte-icons';
	import type { Cell } from '$lib/classes/Cell';
	import {tick} from "svelte";
	import CellDiagram from './CellDiagram.svelte';
	import type { GridCell } from '$lib/classes/GridCell';
  const fileuploadprops = {
		id: 'fileupload',
		label: 'Upload file',
		placeholder: 'Upload file',
		accept: '*/cif, */txt'
	};

	let error = $state(false);
  let parseError = $state(false);
	let errorMessage = $state('');
	let file = $state<File | null>(null);
	let topology = $state('');
	let cells = $state<Cell[]>([]);
	let canRedraw: boolean = $state(false)
	let globalCell = $state<Cell|undefined>();
	let selectedCell = $state<GridCell|null>(null);
	let showDiagram: boolean = $state(false);
	function handleFileChange(event: Event) {
		const input = event.target as HTMLInputElement;
		if (input.files && input.files.length > 0) {
			if (
				input.files[0].type !== 'text/plain' &&
				input.files[0].type !== 'application/vnd.multiad.creator.cif'
			) {
				error = true;
				errorMessage = 'Неверный тип файла';
			} else {
				file = input.files[0];
				parseFileText();
			}
		}
	}

	function parseFileText() {
		if (file) {
			const reader = new FileReader();
			reader.readAsText(file);
			reader.onload = (event) => {
				const text = event.target?.result as string;
				topology = text;
			};
		}
	}

	function submitForm() {
    if (topology) {
        try {
						let content = parseCifV2(topology);
						cells = content.cells;
						globalCell = content.global;
            canRedraw = true
			tick().then(() => {
				console.log(canRedraw)
				canRedraw = false;
			})
            parseError = false
        } catch (e) {
            console.log(e)
            parseError = true;
        }
    }
	}

	function onCellSelected(cell: GridCell | null) {
		showDiagram = false;
		if (cell) {
			setTimeout(() => {
				showDiagram = true;
				selectedCell = cell;
			}, 100);
		}
	}
</script>

<div
	class="mx-auto h-full w-full xl:grid-cols-[minmax(0,1fr)_var(--container-2xs)]"
>
	<div
		class="grid grid-cols-1 gap-4 px-4 pt-10 pb-24 sm:min-h-200 sm:grid-cols-2 sm:gap-16 sm:px-6 xl:pr-0"
	>
		<form class="h-fit pt-10" onsubmit={submitForm}>
        {#if (parseError)}
        <Alert color="red" class="mb-4">
            <InfoCircleSolid slot="icon" class="w-5 h-5" />
            <span class="font-medium">Неверная топология!</span>
            Проверьте, что вы верно составили cif-файл
        </Alert>
        {/if}
			<Label class="pb-2">Введите описание</Label>
			<Textarea rows={5} class="mb-2" placeholder="Описание топологии" bind:value={topology} />
			<Label class="pb-2">... или загрузите файл</Label>
			<Fileupload on:change={handleFileChange} {...fileuploadprops} />
			{#if error}
				<Helper class="mt-2" color="red">{errorMessage}</Helper>
			{:else}
				<Helper>Поддерживаемые форматы: CIF, TXT</Helper>
			{/if}
			<Button class="mt-4" type="submit">Сохранить</Button>
		</form>
		<div class="w-100">
			{#if showDiagram && selectedCell}
				<CellDiagram cell={selectedCell} />
			{/if}
		</div>
		<TopologyTable cells={cells} canRedraw={canRedraw} globalCell={globalCell} redrawComplete={() => {canRedraw = false}} onCellSelected={onCellSelected} />
	</div>
</div>
