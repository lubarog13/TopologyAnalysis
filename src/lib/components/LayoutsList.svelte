<script lang="ts">
	import {
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell,
		Checkbox,
		Tooltip,
		Button
	} from 'flowbite-svelte';
	import { elementsList, type LayoutElement } from '../../utils/consts/elements.list';

	interface Props {
		onElementChange: () => void;
		onDiagramChange: () => void;
	}

	interface ElementItem extends LayoutElement {
		code: string;
	}

	let { onElementChange, onDiagramChange }: Props = $props();

	let items: ElementItem[] = $state(
		Object.keys(elementsList).map((it) => {
			return {
				code: it,
				...elementsList[it]
			};
		})
	);

	function castToItem(item: any): ElementItem {
		return item as ElementItem;
	}

	function changeVisibilytyOfItem(item: ElementItem) {
		item.visible = !item.visible;
		elementsList[item.code].visible = item.visible;
		if (!item.visible) {
			item.is_selected = false;
			elementsList[item.code].is_selected = false;
			onDiagramChange();
		}
		onElementChange();
	}

	function changeIsSelectedOfItem(item: ElementItem) {
		item.is_selected = !item.is_selected;
		elementsList[item.code].is_selected = item.is_selected;
		onElementChange();
		onDiagramChange();
	}

	function changeHideAll(value: boolean) {
		Object.keys(elementsList).forEach((item) => {
			elementsList[item].visible = !value;
			elementsList[item].is_selected = false;
		});
		items = items.map((item) => {
			item.visible = !value;
			item.is_selected = false;
			return item;
		});
		onElementChange();
		onDiagramChange();
	}

	function showAllOnDiagram() {
		Object.keys(elementsList).forEach((item) => {
			elementsList[item].is_selected = true;
		});
		items = items.map((item) => {
			item.is_selected = true;
			return item;
		});
		onElementChange();
		onDiagramChange();
	}
</script>

<div>
	<Button
		color="primary"
		class="mb-2"
		on:click={() => {
			changeHideAll(true);
		}}>Скрыть все</Button
	>
	<Button
		color="primary"
		outline
		class="mb-2"
		on:click={() => {
			changeHideAll(false);
		}}>Показать все</Button
	>
	<Button
		color="primary"
		outline
		class="mb-2"
		on:click={() => {
			showAllOnDiagram();
		}}>Показать все на диаграмме</Button
	>

	<Table
		{items}
		divClass="h-70 sm:h-150 max-h-[80vh] relative overflow-y-auto order-0 sm:order-1"
		placeholder="Поиск слоя"
		hoverable={true}
		filter={(item: ElementItem, searchTerm) =>
			item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
			item.code.toLowerCase().includes(searchTerm.toLowerCase())}
	>
		<TableHead class="sticky">
			<TableHeadCell>Цвет</TableHeadCell>
			<TableHeadCell>Код</TableHeadCell>
			<TableHeadCell>Видимость</TableHeadCell>
			<TableHeadCell>На диаграмме</TableHeadCell>
		</TableHead>
		<TableBody tableBodyClass="divide-y overflow-y-auto">
			<TableBodyRow slot="row" let:item id="layout-{castToItem(item).code}">
				<TableBodyCell
					><div class="h-4 w-4" style="background: {castToItem(item).color};"></div></TableBodyCell
				>
				<TableBodyCell
					><span>{castToItem(item).code}</span>
					<Tooltip triggeredBy="#layout-{castToItem(item).code}">{castToItem(item).name}</Tooltip
					></TableBodyCell
				>
				<TableBodyCell>
					<Checkbox
						checked={castToItem(item).visible}
						on:click={() => {
							changeVisibilytyOfItem(castToItem(item));
						}}
					/></TableBodyCell
				>
				<TableBodyCell>
					<Checkbox
						checked={castToItem(item).is_selected}
						on:click={() => {
							changeIsSelectedOfItem(castToItem(item));
						}}
					/></TableBodyCell
				>
			</TableBodyRow>
		</TableBody>
	</Table>
</div>
