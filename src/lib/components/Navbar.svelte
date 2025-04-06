<Navbar rounded color="primary">
  <div class="flex flex-row gap-4"> 
    <NavBrand href="/">
      <img src="/images/tutorial.svg" class="me-3 h-6 sm:h-9" alt="Логотип" />
      <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Анализ интегральной схемы</span>
    </NavBrand>
    <DarkMode />
    </div>
    <NavHamburger  />
    <NavUl >
      <NavLi href="/">Старт</NavLi>
      <NavLi href="/about">Как пользоваться</NavLi>
      <NavLi href="/agreement" on:click={(event) => {
        event.preventDefault();
        clickAgreement = true;
      }}>Соглашение</NavLi>
      <NavLi href="/contacts">Контакты</NavLi>
    </NavUl>
  </Navbar>
  <TermsModal clickOutsideModal={clickAgreement} />
<script lang="ts">
  import { Navbar, NavBrand, NavHamburger, NavUl, NavLi } from 'flowbite-svelte';
  import { DarkMode } from 'flowbite-svelte';
	import TermsModal from './TermsModal.svelte';
  let {action} = $props();
  let clickAgreement = $state(false);
  if (action === 'agreement') {
    clickAgreement = true;
  }
</script>
