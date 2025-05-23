<script>
	import { Heading, Breadcrumb, BreadcrumbItem, P, Alert, List, Li, A } from 'flowbite-svelte';
	import { base } from '$app/paths';
</script>

<div class="container mx-auto min-h-200 py-4">
	<Breadcrumb>
		<BreadcrumbItem href={base + '/'} home>Главная</BreadcrumbItem>
		<BreadcrumbItem href={base + '/about'}>О программе</BreadcrumbItem>
	</Breadcrumb>
	<Heading tag="h1" class="mt-8 mb-6">О программе</Heading>
	<P>
		Данная программа предназначена для анализа заполненности ячеек интегральной схемы, передаваемой
		пользователем в формате <code>.cif</code> или <code>.txt</code>. Для составления интегральной
		схемы воспользуйтесь одной из систем проектирования (TopDesign, ...).
	</P>
	<P class="mt-4 mb-2">
		<u class="underline">Примеры файлов:</u>
	</P>
	<List tag="ul" class="space-y-1">
		<Li><A href={base + '/files/examples/sum.cif'}>sum.cif</A></Li>
		<Li><A href={base + '/files/examples/BC.cif'}>BC.cif</A></Li>
		<Li><A href={base + '/files/examples/RTC1.cif'}>RTC1.cif</A></Li>
		<Li><A href={base + '/files/examples/RTC2.cif'}>RTC2.cif</A></Li>
		<Li><A href={base + '/files/examples/RBC1.cif'}>RBC1.cif</A></Li>
		<Li><A href={base + '/files/examples/RBC2.cif'}>RBC2.cif</A></Li>
	</List>
	<Alert class="my-4" color="red"
		>Внимание! данная программа не предназначена для проектирования схем, а только для анализа
		существующих.</Alert
	>

	<img
		src={base + '/files/screenshots/topology.png'}
		alt="О программе"
		class="mb-4 h-auto w-full max-w-[1000px]"
	/>
	<P>
		Данная проект представляет собой программу, выводящую на диаграмме заполненность ячеек СБИС
		элементами, а также количество пустого пространства, с целью оптимизации использования места.
	</P>
	<Heading tag="h2" class="mt-8 mb-4">Правила использования:</Heading>
	<List tag="ol" class="space-y-1">
		<Li>
			<span
				>Введите текст топологии в соответствующее поле или выбирете файл (поддерживаются форматы <code
					>.cif</code
				>
				и <code>.txt</code>).</span
			>
			<img
				src={base + '/files/screenshots/form.png'}
				alt="Форма"
				class="my-3 h-auto w-full max-w-[700px]"
			/>
		</Li>
		<Li>Убедитесь, что схема корректно отрисована.</Li>
		<Li
			><span>Выберете необходимые для отображения и анализа слои.</span>
			<img
				src={base + '/files/screenshots/layers.png'}
				alt="Слои"
				class="my-3 h-auto w-full max-w-[500px]"
			/>
		</Li>
		<Li
			><span>Отрегулируйте желаемый шаг сетки с помощью ползунков сверху.</span>
			<img
				src={base + '/files/screenshots/grid.png'}
				alt="Сетка"
				class="my-3 h-auto w-full max-w-[700px]"
			/>
		</Li>
		<Li>
			<span>При нажатии на ячейку сетки</span> слева сверху появится детальная диаграмма с
			распределением слоев внутри ячейки.
			<img
				src={base + '/files/screenshots/diagram.png'}
				alt="Диаграмма"
				class="my-3 h-auto w-full max-w-[300px]"
			/>
		</Li>
	</List>
	<Alert class="my-4" color="red">
		<em>Внимание:</em> мы не ручаемся, что отображение топологии будет корректным ввиду того, что
		различные САПР используют различные форматы языка <code>CIF</code>.
	</Alert>
	<P class="my-4">
		Вы можете отключить отображение сетки. По-умолчанию выделение ячеек скрывается, если количество
		строк или колонок превышает 30.
	</P>
	<img
		src={base + '/files/screenshots/analysis.png'}
		alt="Анализ"
		class="my-3 h-auto w-full max-w-[700px]"
	/>

	<Heading tag="h3" class="mt-8 mb-4">Список поддерживаемых слоев:</Heading>
	<List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400">
		<Li>KN - n-карман, включающий p-транзисторы</Li>
		<Li>KP - p-карман (отсутствует)</Li>
		<Li>NA - n++ активная область n-транзистора</Li>
		<li>NK - n++ контактная область к n-карману</li>
		<li>
			NE - n++ контактная область к n-карману, эквипотенциально соединенная с p++ активной областью
		</li>
		<li>PA - p++ контактная область к p-карману</li>
		<li>PK - p++ контактная область к p-карману</li>
		<Li
			>PE - p++ контактная область к p-карману, эквипотенциально соединенная с n++ активной областью</Li
		>
		<Li>LN - n-подзатворная область (отсутствует)</Li>
		<Li>LP - p-подзатворная область (отсутствует)</Li>
		<Li>N - n++ область легирования (отсутствует)</Li>
		<Li>P - p++ область легирования</Li>
		<Li>SI - Поликремний, включая закрылок транзистора</Li>
		<Li>SN - Затвор n-транзистора</Li>
		<Li>SP - Затвор p-транзистора</Li>
		<Li>SZ - Закрылок транзистора (отсутствует)</Li>
		<Li>CNA - Контактное окно между М1C и NA</Li>
		<Li>CNK - Контактное окно между М1C и NK</Li>
		<Li>CNE - Контактное окно между М1C и NE</Li>
		<Li>CPA - Контактное окно между М1C и PA</Li>
		<Li>CPK - Контактное окно между М1C и PK</Li>
		<Li>CPE - Контактное окно между М1C и PE</Li>
		<Li>CSI - Контактное окно между M1C и SI</Li>
		<Li>M1 - Металл нижний</Li>
		<Li>M1C - Металл нижний, окружающий контакт</Li>
		<Li>M1A - Металл нижний при большой ширине линии</Li>
		<Li>CM - Контактное окно между М2C и M1C</Li>
		<Li>M2 - Металл верхний</Li>
		<Li>M2C - Металл верхний, окружающий контакт</Li>
		<Li>M2A - Металл второй при большой ширине линии</Li>
		<Li>CM2 - Контактное окно между М3C и M2C (отсутствует)</Li>
		<li>M3 - Металл третий (отсутствует)</li>
		<li>M3C - Металл третий, окружающий контакт (отсутствует)</li>
		<Li>M3A - Металл третий при большой ширине линии (отсутствует)</Li>
		<Li>CM3 - Контактное окно между М4C и M3C (отсутствует)</Li>
		<Li>M4 - Металл четвертый (отсутствует)</Li>
		<Li>M4C - Металл четвертый, окружающий контакт (отсутствует)</Li>
		<Li>M4A - Металл четвертый при большой ширине линии (отсутствует)</Li>
		<Li>CM4 - Контактное окно между М5C и M4C (отсутствует)</Li>
		<Li>M5 - Металл пятый (отсутствует)</Li>
		<Li>M5C - Металл пятый, окружающий контакт (отсутствует)</Li>
		<Li>M5A - Металл пятый при большой ширине линии (отсутствует)</Li>
		<Li>CM5 - Контактное окно между М6C и M5C (отсутствует)</Li>
		<Li>M6 - Металл верхний (отсутствует)</Li>
		<Li>M6C - Металл верхний, окружающий контакт (отсутствует)</Li>
		<Li>M6A - Металл верхний при большой ширине линии (отсутствует)</Li>
		<Li>B1 - Границы фрагмента левая и правая</Li>
		<Li>B2 - Границы фрагмента нижняя и верхняя</Li>
		<Li>CW - Контактное окно с внешним выводом БИС</Li>
	</List>
	<Alert class="my-4">
		Слои <em>KN, P, M3, M3C, M3A, M4, M4C, M4A, M5, M5C, M5A, M6, M6C, M6A, CW</em> при анализе считаются
		за пустое пространство.
	</Alert>
</div>
