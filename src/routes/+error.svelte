<div class="container mx-auto min-h-200">
    <div class="flex flex-col items-center justify-center mb-4 w-full">
        <img src={base + '/images/404-error.png'} alt="404" class="w-full max-w-[500px] h-auto mb-2" />
        <P class="text-center text-xl">Страница не найдена</P>
        <P class="text-center text-sm">Возможно, вы ввели неправильный URL, или страница была удалена.</P>
        <Button class="mt-4" href={base + '/'}>Вернуться на главную</Button>
    </div>
</div>

<script lang="ts">
    import { base } from '$app/paths';
    import { P, Button } from 'flowbite-svelte';
</script>