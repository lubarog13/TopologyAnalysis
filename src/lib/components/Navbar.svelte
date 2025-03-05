<Navbar rounded color="primary">
    <NavBrand href="/">
      <img src="/images/tutorial.svg" class="me-3 h-6 sm:h-9" alt="Логотип" />
      <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Анализ интегральной схемы</span>
    </NavBrand>
    <NavHamburger  />
    <NavUl >
      <NavLi href="/">Старт</NavLi>
      <NavLi href="/about">О программе</NavLi>
      <NavLi href="/agreement">Соглашение</NavLi>
      <NavLi href="/contacts">Контакты</NavLi>
    </NavUl>
    <DarkMode />
  </Navbar>

<script lang="ts">
  import { Navbar, NavBrand, NavHamburger, NavUl, NavLi } from 'flowbite-svelte';
  import { DarkMode } from 'flowbite-svelte';
</script>
