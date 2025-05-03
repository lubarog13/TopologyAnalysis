<script>
	import { Breadcrumb, BreadcrumbItem, Heading, Card, P, A } from 'flowbite-svelte';
	import { base } from '$app/paths';
</script>

<div class="container mx-auto min-h-200 py-4">
	<Breadcrumb>
		<BreadcrumbItem href={base + '/'} home>Главная</BreadcrumbItem>
		<BreadcrumbItem href={base + '/contacts'}>Контакты</BreadcrumbItem>
	</Breadcrumb>
	<Heading tag="h1" class="mt-4 mb-6">Контакты</Heading>
	<P class="mt-4 mb-6 text-lg">
		При возникновении жалоб, предложений или вопросов, пожалуйста, свяжитесь с нами одним из
		следующих способов:
	</P>
	<div class="grid w-full grid-cols-1 gap-4 lg:grid-cols-2">
		<Card padding="none" size="xl" class="order-1 grid grid-cols-1 sm:grid-cols-2 lg:order-0">
			<figure
				class="flex flex-col items-center justify-center rounded-t-lg rounded-t-none rounded-tl-lg border-r border-b border-gray-200 bg-white p-8 text-center hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800"
			>
				<blockquote class="mx-auto mb-4 max-w-2xl text-gray-500 dark:text-gray-400">
					<h3 class="text-lg font-semibold text-gray-900 dark:text-white">Telegram</h3>
				</blockquote>
				<figcaption class="flex items-center justify-center space-x-3 rtl:space-x-reverse">
					<img
						class="h-9 w-9 rounded-full"
						src="https://upload.wikimedia.org/wikipedia/commons/8/83/Telegram_2019_Logo.svg"
						alt="Telegram"
					/>
					<div class="space-y-0.5 text-left font-medium dark:text-white">
						<A href="https://t.me/new_cybrid">@new_cybrid</A>
					</div>
				</figcaption>
			</figure>
			<figure
				class="flex flex-col items-center justify-center rounded-tr-lg rounded-tr-none rounded-br-lg border-b border-gray-200 bg-white p-8 text-center hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800"
			>
				<blockquote class="mx-auto mb-4 max-w-2xl text-gray-500 dark:text-gray-400">
					<h3 class="text-lg font-semibold text-gray-900 dark:text-white">Email</h3>
					<p class="my-4 font-light">Почты много, могу отвечать долго</p>
				</blockquote>
				<figcaption class="flex items-center justify-center space-x-3 rtl:space-x-reverse">
					<img
						class="h-9 w-9 rounded-full"
						src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg"
						alt="Email"
					/>
					<div class="space-y-0.5 text-left font-medium dark:text-white">
						<A href="mailto:lubarog13@gmail.com">lubarog13@gmail.com</A>
					</div>
				</figcaption>
			</figure>
			<figure
				class="flex flex-col items-center justify-center rounded-bl-lg border-e border-b border-b-0 border-gray-200 bg-white p-8 text-center hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800"
			>
				<blockquote class="mx-auto mb-4 max-w-2xl text-gray-500 dark:text-gray-400">
					<h3 class="text-lg font-semibold text-gray-900 dark:text-white">LinkedIn</h3>
					<p class="my-4 font-light">С предложениями вакансий и сотрудничества</p>
				</blockquote>
				<figcaption class="flex items-center justify-center space-x-3 rtl:space-x-reverse">
					<img
						class="h-9 w-9 rounded-full"
						src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg"
						alt="LinkedIn"
					/>
					<div class="space-y-0.5 text-left font-medium dark:text-white">
						<A href="https://www.linkedin.com/in/lubarog13/"
							>https://www.linkedin.com/in/lubarog13/</A
						>
					</div>
				</figcaption>
			</figure>
			<figure
				class="flex flex-col items-center justify-center rounded-b-lg rounded-br-lg border-gray-200 bg-white p-8 text-center hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800"
			>
				<blockquote class="mx-auto mb-4 max-w-2xl text-gray-500 dark:text-gray-400">
					<h3 class="text-lg font-semibold text-gray-900 dark:text-white">GitHub</h3>
					<p class="my-4 font-light">Баги репортить сюда</p>
				</blockquote>
				<figcaption class="flex items-center justify-center space-x-3 rtl:space-x-reverse">
					<img
						class="h-9 w-9 rounded-full"
						src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
						alt="GitHub"
					/>
					<div class="space-y-0.5 text-left font-medium dark:text-white">
						<A href="https://github.com/lubarog13/TopologyAnalysis">TopologyAnalysis</A>
					</div>
				</figcaption>
			</figure>
		</Card>
		<img
			src={base + '/images/virtual-assistant-concept.png'}
			alt="Контакты"
			class="order-0 mx-auto h-full w-full max-w-[300px] object-cover lg:order-1 lg:max-w-none"
		/>
	</div>
</div>
