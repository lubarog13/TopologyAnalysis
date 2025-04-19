<script lang="ts">
    import { Footer, FooterCopyright, FooterLinkGroup, FooterBrand, FooterLink, FooterIcon   } from 'flowbite-svelte';
    import { GithubSolid, DiscordSolid, TwitterSolid, CashOutline, LinkedinSolid, } from 'flowbite-svelte-icons';
	import Telegram from '../../utils/icons/Telegram.svelte';
  
  </script>
  
  <Footer footerType="logo">
    <div class="sm:flex sm:items-center sm:justify-between">
      <FooterBrand href="https://example.com" src="/images/chip.png" alt="Логотип" />
      <FooterLinkGroup ulClass="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
        <FooterLink href="/about">О программе</FooterLink>
      <FooterLink href="/agreement">Соглашение</FooterLink>
      <FooterLink href="/contacts">Контакты</FooterLink>
      <FooterLink href="/donut">Поддержка <CashOutline class="w-5 h-5" style="display: inline-block;" /></FooterLink>
      </FooterLinkGroup>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <div class="sm:flex sm:items-center sm:justify-between">
    <FooterCopyright href="/" by="lubarog13™" />
    <div class="flex mt-4 space-x-6 rtl:space-x-reverse sm:justify-center sm:mt-0">
        <FooterIcon href="https://t.me/new_cybrid">
        <Telegram class="w-5 h-5 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white" />
        </FooterIcon>
        <FooterIcon href="https://discordapp.com/users/691322783682134046">
        <DiscordSolid class="w-5 h-5 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white" />
        </FooterIcon>
        <FooterIcon href="https://x.com/lubarog13">
        <TwitterSolid class="w-5 h-5 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white" />
        </FooterIcon>
        <FooterIcon href="https://www.linkedin.com/in/lubarog13/">
          <LinkedinSolid class="w-5 h-5 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white" />
        </FooterIcon>
        <FooterIcon href="https://github.com/lubarog13">
        <GithubSolid class="w-5 h-5 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white" />
        </FooterIcon>
    </div>
  </Footer>