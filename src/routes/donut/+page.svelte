<script lang="ts">
	import { Heading, Breadcrumb, BreadcrumbItem, P, Listgroup } from 'flowbite-svelte';
	import { GithubSolid, LinkedinSolid, StarSolid } from 'flowbite-svelte-icons';
	let variants = [
		{
			name: 'Поставьте звезду на GitHub',
			href: 'https://github.com/lubarog13/TopologyAnalysis',
			icon: GithubSolid,
			itemDefaultClass:
				'py-4 px-4 w-full text-sm font-medium list-none flex items-center first:rounded-t-lg last:rounded-b-lg'
		},
		{
			name: 'Поставьте пять',
			href: 'https://lk.etu.ru/',
			icon: StarSolid,
			itemDefaultClass:
				'py-4 px-4 w-full text-sm font-medium list-none flex items-center first:rounded-t-lg last:rounded-b-lg'
		},
		{
			name: 'Добавьтесь ко мне в LinkedIn',
			href: 'https://www.linkedin.com/in/lubarog13/',
			icon: LinkedinSolid,
			itemDefaultClass:
				'py-4 px-4 w-full text-sm font-medium list-none flex items-center first:rounded-t-lg last:rounded-b-lg'
		}
	];
	import { base } from '$app/paths';
</script>

<div class="container mx-auto min-h-200 py-4">
	<div class="grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-2 w-full">
        <div class="w-full">
            		<Breadcrumb>
			<BreadcrumbItem href={base + '/'} home>Главная</BreadcrumbItem>
			<BreadcrumbItem href={base + '/donut'}>Поддержать проект</BreadcrumbItem>
		</Breadcrumb>
		<Heading tag="h1" class="mt-4 mb-6">Поддержать проект</Heading>
		<P>Если вам понравилась программа, вы можете поддержать её разработку.</P>
		<Listgroup active items={variants} let:item class="mt-4 max-w-2xl">
			<svelte:component this={item.icon} class="me-2.5 h-4 w-4" />
			{item.name}
		</Listgroup>
        </div>
        <div class="w-full">
            <img src={base + '/images/charity-concept.png'} alt="Поддержать проект" class="w-full h-full object-cover">
        </div>
	</div>
</div>
