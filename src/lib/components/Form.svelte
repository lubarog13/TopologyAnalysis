<script lang="ts">
	import { Fileupload, Helper, Label, Textarea } from "flowbite-svelte";
    import TopologyTable from "./TopologyTable.svelte";
    const fileuploadprops = {
        id: "fileupload",
        label: "Upload file",
        placeholder: "Upload file",
        accept: "*/cif, */txt",
    }

    let error = $state(false);
    let errorMessage = $state("");
    let file = $state<File | null>(null);
    let topology = $state("");

    function handleFileChange(event: Event) {
        const input = event.target as HTMLInputElement;
        if (input.files && input.files.length > 0) {
            if (input.files[0].type !== "text/plain" && input.files[0].type !== "application/vnd.multiad.creator.cif") {
                error = true;   
                errorMessage = "Неверный тип файла";
            } else {
                file = input.files[0];
                parseFileText();
            }
        }
    }

    function parseFileText() {
        if (file) {
            const reader = new FileReader();
            reader.readAsText(file)
            reader.onload = (event) => {
                const text = event.target?.result as string;
                topology = text;
            };
        }
    }
</script>

<div class="h-full mx-auto w-full max-w-2xl xl:max-w-5xl xl:grid-cols-[minmax(0,1fr)_var(--container-2xs)]">
    <div class="sm:min-h-200 px-4 pt-10 pb-24 sm:px-6 xl:pr-0 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-16">
    <form class="pt-10 h-fit">
        <Label class="pb-2">Введите описание</Label>
        <Textarea rows={5} class="mb-2" placeholder="Описание топологии" bind:value={topology} />
        <Label class="pb-2">... или загрузите файл</Label>
        <Fileupload on:change={handleFileChange} {...fileuploadprops} />
        {#if error} 
            <Helper class='mt-2' color='red'>{errorMessage}</Helper>
        {:else}
            <Helper>Поддерживаемые форматы: CIF, TXT</Helper>
        {/if}
    </form>
    <TopologyTable />
    </div>
</div>