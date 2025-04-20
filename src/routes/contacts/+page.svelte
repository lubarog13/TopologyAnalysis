<script>
    import { Breadcrumb, BreadcrumbItem, Heading, Card, P, A } from 'flowbite-svelte';
    import { base } from '$app/paths';
</script>
<div class="container mx-auto py-4 min-h-200">
    <Breadcrumb>
        <BreadcrumbItem href={base + '/'} home>Главная</BreadcrumbItem>
        <BreadcrumbItem href={base + '/contacts'}>Контакты</BreadcrumbItem>
    </Breadcrumb>
    <Heading tag="h1" class="mb-6 mt-4">Контакты</Heading>
    <P class="mb-6 mt-4 text-lg">
        При возникновении жалоб, предложений или вопросов, пожалуйста, свяжитесь с нами одним из следующих способов:
    </P>
    <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
    <Card padding="none" size="xl" class="grid grid-cols-1 sm:grid-cols-2 order-1 lg:order-0">
        <figure class="flex flex-col justify-center items-center p-8 text-center bg-white hover:bg-gray-100 rounded-t-lg border-b border-gray-200 rounded-t-none rounded-tl-lg border-r dark:bg-gray-800 dark:border-gray-700">
          <blockquote class="mx-auto mb-4 max-w-2xl text-gray-500 dark:text-gray-400">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Telegram</h3>
          </blockquote>
          <figcaption class="flex justify-center items-center space-x-3 rtl:space-x-reverse">
            <img class="w-9 h-9 rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/8/83/Telegram_2019_Logo.svg" alt="Telegram" />
            <div class="space-y-0.5 font-medium dark:text-white text-left">
                <A href="https://t.me/new_cybrid">@new_cybrid</A>
            </div>
          </figcaption>
        </figure>
        <figure class="flex flex-col justify-center items-center p-8 text-center bg-white hover:bg-gray-100 rounded-tr-lg border-b border-gray-200 rounded-tr-none rounded-br-lg dark:bg-gray-800 dark:border-gray-700">
          <blockquote class="mx-auto mb-4 max-w-2xl text-gray-500 dark:text-gray-400">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Email</h3>
            <p class="my-4 font-light">Почты много, могу отвечать долго</p>
          </blockquote>
          <figcaption class="flex justify-center items-center space-x-3 rtl:space-x-reverse">
            <img class="w-9 h-9 rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" alt="Email" />
            <div class="space-y-0.5 font-medium dark:text-white text-left">
              <A href="mailto:lubarog13@gmail.com">lubarog13@gmail.com</A>
            </div>
          </figcaption>
        </figure>
        <figure class="flex flex-col justify-center items-center p-8 text-center bg-white hover:bg-gray-100 rounded-bl-lg border-b border-gray-200 border-b-0 border-e dark:bg-gray-800 dark:border-gray-700">
          <blockquote class="mx-auto mb-4 max-w-2xl text-gray-500 dark:text-gray-400">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">LinkedIn</h3>
            <p class="my-4 font-light">С предложениями вакансий и сотрудничества</p>
          </blockquote>
          <figcaption class="flex justify-center items-center space-x-3 rtl:space-x-reverse">
            <img class="w-9 h-9 rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" alt="LinkedIn" />
            <div class="space-y-0.5 font-medium dark:text-white text-left">
              <A href="https://www.linkedin.com/in/lubarog13/">https://www.linkedin.com/in/lubarog13/</A>
            </div>
          </figcaption>
        </figure>
        <figure class="flex flex-col justify-center items-center p-8 text-center bg-white hover:bg-gray-100 rounded-b-lg border-gray-200 rounded-br-lg dark:bg-gray-800 dark:border-gray-700">
          <blockquote class="mx-auto mb-4 max-w-2xl text-gray-500 dark:text-gray-400">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">GitHub</h3>
            <p class="my-4 font-light">Баги репортить сюда</p>
          </blockquote>
          <figcaption class="flex justify-center items-center space-x-3 rtl:space-x-reverse">
            <img class="w-9 h-9 rounded-full" src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="GitHub" />
            <div class="space-y-0.5 font-medium dark:text-white text-left">
              <A href="https://github.com/lubarog13/TopologyAnalysis">TopologyAnalysis</A>
            </div>
          </figcaption>
        </figure>
      </Card>
      <img src={base + '/images/virtual-assistant-concept.png'} alt="Контакты" class="w-full h-full object-cover max-w-[300px] mx-auto lg:max-w-none order-0 lg:order-1">
    </div>
</div>