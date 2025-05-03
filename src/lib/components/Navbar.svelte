<script lang="ts">
	import { base } from '$app/paths';
	import { Navbar, NavBrand, NavHamburger, NavUl, NavLi } from 'flowbite-svelte';
	import { DarkMode } from 'flowbite-svelte';
	import TermsModal from './TermsModal.svelte';
	let { action } = $props();
	let clickAgreement = $state(false);
	if (action === 'agreement') {
		clickAgreement = true;
	}
</script>

<Navbar rounded color="primary">
	<div class="flex flex-row gap-4">
		<NavBrand href={base + '/'}>
			<img src={base + '/images/chip.png'} class="me-3 h-6 sm:h-9" alt="Логотип" />
			<span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
				>Анализ интегральной схемы</span
			>
		</NavBrand>
		<DarkMode />
	</div>
	<NavHamburger />
	<NavUl>
		<NavLi href={base + '/'}>Старт</NavLi>
		<NavLi href={base + '/about'}>Как пользоваться</NavLi>
		<NavLi
			href={base + '/agreement'}
			on:click={(event) => {
				event.preventDefault();
				clickAgreement = true;
			}}>Соглашение</NavLi
		>
		<NavLi href={base + '/contacts'}>Контакты</NavLi>
	</NavUl>
</Navbar>
<TermsModal clickOutsideModal={clickAgreement} />
