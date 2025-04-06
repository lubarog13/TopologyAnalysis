<script lang="ts">
  import {
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell,
    Checkbox,
    Tooltip
  } from 'flowbite-svelte';
  import { elementsList, type LayoutElement } from '../../utils/consts/elements.list';

  interface Props {
    onElementChange: () => void,
  }

  let {onElementChange}: Props = $props();
  let hideAll: boolean = $state(false);

  interface ElementItem extends LayoutElement {
    code: string
  }
  let items: ElementItem[] = Object.keys(elementsList).map(it => {
    return {
        code: it,
        ...elementsList[it]
    }
  })

  function castToItem(item: any): ElementItem {
    return item as ElementItem;
  }

  function changeVisibilytyOfItem(item: ElementItem) {
    item.visible = !item.visible;
    elementsList[item.code].visible = item.visible;
    onElementChange();
  }

  function changeHideAll() {
    hideAll = !hideAll;
    Object.keys(elementsList).forEach(item => {
      elementsList[item].visible = !hideAll;
    });
    items.forEach(item => {
      item.visible = !hideAll;
    });
    onElementChange();
  }
</script>

<div>
  <Checkbox checked={hideAll} on:click={() => {changeHideAll()}}>Скрыть все</Checkbox>

<Table {items} divClass="h-70 sm:h-150 max-h-[80vh] relative overflow-y-auto order-0 sm:order-1" placeholder="Поиск слоя" hoverable={true} filter={(item: ElementItem, searchTerm) => item.name.toLowerCase().includes(searchTerm.toLowerCase()) || item.code.toLowerCase().includes(searchTerm.toLowerCase())}>
    <TableHead class="sticky">
      <TableHeadCell>Цвет</TableHeadCell>
      <TableHeadCell>Код</TableHeadCell>
      <TableHeadCell>Видимость</TableHeadCell>
    </TableHead>
    <TableBody tableBodyClass="divide-y overflow-y-auto">
      <TableBodyRow slot="row" let:item id="layout-{castToItem(item).code}" >
        <TableBodyCell><div class="w-4 h-4" style="background: {castToItem(item).color};"></div></TableBodyCell>
        <TableBodyCell><span>{castToItem(item).code}</span> <Tooltip triggeredBy="#layout-{castToItem(item).code}">{castToItem(item).name}</Tooltip></TableBodyCell>
        <TableBodyCell>   <Checkbox checked={castToItem(item).visible && !hideAll} on:click={() => {changeVisibilytyOfItem(castToItem(item))}} /></TableBodyCell>
      </TableBodyRow>
    </TableBody>
  </Table>
</div>