<script lang="ts">
    import { Cell } from "../classes/Cell";
    interface Props {
        cell: Cell
    }
    let { cell }: Props = $props();
</script>

<div class="cell-item">
    <div class="cell-item-content">
        <div class="cell-item-content-header">
            <div class="cell-item-content-header-title">
                {cell.id}
            </div>
        </div>
    </div>
</div>