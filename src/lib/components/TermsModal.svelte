<script>

	import { Button, Li, List, Modal } from "flowbite-svelte";
    let {clickOutsideModal} = $props();


</script>
<Modal title="Соглашение пользования программой" bind:open={clickOutsideModal} autoclose outsideclose>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400"></p>
    <div class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
      <List list="decimal" position="inside">
        <Li><b>Общие положения</b><br>
    Настоящее пользовательское соглашение регулирует использование веб-сервиса анализа топологии интегральных схем (далее - "Сервис").
        </Li>
        <Li><b>Условия использования</b><br>
          <List>
            <Li>Сервис предоставляется исключительно для некоммерческого использования.</Li>
            <Li>Пользователь обязуется не использовать Сервис в коммерческих целях.</Li>
            <Li>Запрещается передача данных, полученных с помощью Сервиса, третьим лицам для коммерческого использования.</Li>
          </List>
        </Li>
        <Li><b>Ответственность</b><br>
          <List>
            <Li>Сервис предоставляется "как есть", без каких-либо гарантий.</Li>
            <Li>Администрация не несет ответственности за результаты анализа и возможные последствия их использования.</Li>
          </List>
        </Li>
        <Li><b>Интеллектуальная собственность</b><br>
          <List>
            <Li>Все права на Сервис принадлежат его разработчикам.</Li>
            <Li>Пользователь сохраняет права на загружаемые для анализа материалы.</Li>
          </List>
        </Li>
        <Li><b>Изменение условий</b><br>
    Администрация оставляет за собой право изменять условия соглашения в одностороннем порядке.
        </Li>
      </List>
    </div>
    <svelte:fragment slot="footer">
      <Button on:click={() => {
        clickOutsideModal = false;
      }}>Принять</Button>
    </svelte:fragment>
  </Modal>