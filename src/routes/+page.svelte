<script lang="ts">
    import Form from "$lib/components/Form.svelte";
</script>

<div class="container mx-auto min-h-200">
    <div class="flex flex-col items-center justify-center mb-4 sm:hidden w-full">
        <img src="/images/cat-pc.png" alt="Компьютеr" class="w-full h-auto mb-2" />
        <p class="text-center text-xl">Лучше работает на больших экранах</p>
        <p class="text-center text-sm">Мы адаптировали дизайн для маленьких экранов, но лучше всего использовать наш сайт на ПК</p>
    </div>
    <Form class="h-full" />
</div>
