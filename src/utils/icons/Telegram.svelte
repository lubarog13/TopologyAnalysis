<script lang="ts">
    import { getContext } from 'svelte';
    import { twMerge } from 'tailwind-merge';
    import type { BaseProps, Props } from 'flowbite-svelte-icons/dist/types';
  
    const ctx: BaseProps = getContext('iconCtx') ?? {};
    const sizes = {
      xs: 'w-3 h-3',
      sm: 'w-4 h-4',
      md: 'w-5 h-5',
      lg: 'w-6 h-6',
      xl: 'w-8 h-8'
    };
  
    let {
      size = ctx.size || 'md',
      color = ctx.color || 'currentColor',
      title,
      desc,
      class: className,
      ariaLabel = 'apple solid',
      ...restProps
    }: Props = $props();
  
    let ariaDescribedby = `${title?.id || ''} ${desc?.id || ''}`;
    const hasDescription = $derived(!!(title?.id || desc?.id));
  </script>
  
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={color}
    {...restProps}
    class={twMerge('shrink-0', sizes[size], className)}
    aria-label={ariaLabel}
    aria-describedby={hasDescription ? ariaDescribedby : undefined}
    viewBox="0 0 240.1 240.1"
  >
    {#if title?.id && title.title}
      <title id={title.id}>{title.title}</title>
    {/if}
    {#if desc?.id && desc.desc}
      <desc id={desc.id}>{desc.desc}</desc>
    {/if}
    <circle fill-rule="evenodd" clip-rule="evenodd" cx="120.1" cy="120.1" r="120.1"/>
	<path fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF" d="M54.3,118.8c35-15.2,58.3-25.3,70-30.2
		c33.3-13.9,40.3-16.3,44.8-16.4c1,0,3.2,0.2,4.7,1.4c1.2,1,1.5,2.3,1.7,3.3s0.4,3.1,0.2,4.7c-1.8,19-9.6,65.1-13.6,86.3
		c-1.7,9-5,12-8.2,12.3c-7,0.6-12.3-4.6-19-9c-10.6-6.9-16.5-11.2-26.8-18c-11.9-7.8-4.2-12.1,2.6-19.1c1.8-1.8,32.5-29.8,33.1-32.3
		c0.1-0.3,0.1-1.5-0.6-2.1c-0.7-0.6-1.7-0.4-2.5-0.2c-1.1,0.2-17.9,11.4-50.6,33.5c-4.8,3.3-9.1,4.9-13,4.8
		c-4.3-0.1-12.5-2.4-18.7-4.4c-7.5-2.4-13.5-3.7-13-7.9C45.7,123.3,48.7,121.1,54.3,118.8z"/>
  </svg>
  
  <!--
  @component
  [Go to docs](https://flowbite-svelte-icons.codewithshin.com/)
  ## Props
  @prop size = ctx.size || 'md'
  @prop color = ctx.color || 'currentColor'
  @prop title
  @prop desc
  @prop class: className
  @prop ariaLabel = 'apple solid'
  @prop ...restProps
  -->
  