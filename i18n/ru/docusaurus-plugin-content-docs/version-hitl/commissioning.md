# Запуск потоковой обработки

После того, как проект согласован и принято решение о его запуске, можно приступать к интеграции через API:

<details><summary>Шаг 1. Зарегистрируйтесь.</summary>

1. Перейдите по [ссылке](https://passport.yandex.com/auth?origin=toloka_requesters&retpath=https://toloka.yandex.com/signup/requester) и создайте аккаунт:

<details><summary>С помощью логина в Google</summary>

1. В окне регистрации нажмите **Google**.

   <img src={require('./assets/login_google1.png').default} alt="Выберите Google" width="127"/>

1. Выберите нужный логин и подтвердите создание аккаунта.

   <img src={require('./assets/login_google2.png').default} alt="Подтвердите создание аккаунта в Толоке" width="126"/>

</details>

<details><summary>С помощью электронной почты</summary>

1. В окне регистрации введите адрес электронной почты и нажмите **Log in**.

   <img src={require('./assets/login_email1.png').default} alt="Введите адрес" width="124"/>

1. На вашу почту придет код подтверждения. Введите его в открывшемся окне.

   <img src={require('./assets/login_email2.png').default} alt="Введите код подтверждения" width="126"/>

</details>

1. Завершите регистрацию, заполнив информацию о себе.

  <img src={require('./assets/info-about-yourself.png').default} alt="Заполните информацию о себе" width="417"/>

</details>

<details><summary>Шаг 2. Пополните баланс.</summary>

1. Пополните баланс.

   1. Перейдите на вкладку **Profile**.

      <img src={require('./assets/profile.png').default} alt="Перейдите в свой профиль" width="630"/>

   1. Если у вас есть промокод воспользуйтесь им:

	   1. Нажмите кнопку **Enter promo code**.

	      <img src={require('./assets/enter-promo-code.png').default} alt="Нажмите кнопку для ввода промокода" width="307"/>

	   1. В открывшемся окне введите промокод и нажмите кнопку **Activate**. После активации ваш баланс будет пополнен.

:::info информация

Для дальнейшего использования вам потребуется привязать ваш аккаунт к биллинговой системе. Инструкцию по привязке аккаунта можно посмотреть по [ссылке](https://toloka.ai/ru/docs/guide/concepts/budget.html).

:::

</details>

<details><summary>Шаг 3. Сообщите нам ваш логин.</summary>

   Отправьте вашему консультанту логин, с которым вы зарегистрировались — мы привяжем к нему готовое решение для вашей задачи. Логин вы можете посмотреть в [профиле](https://toloka.yandex.com/requester/profile).

</details>

<details><summary>Шаг 4. Дайте название проекту.</summary>

1. Перейдите по ссылке, которую мы пришлем в ответ на письмо с логином.

2. Создайте проект:

   1. В блоке **Настройка проекта** введите название приложения, затем нажмите **Go to instructions setup**.

 	    <img src={require('./assets/project-name.png').default} alt="Введите название" width="631"/>

   1. В блоке **Настройка инструкции** ничего вводить не надо, просто перейдите к следующему блоку — нажмите **Go to Final check**.

         <img src={require('./assets/go-final-check.png').default} alt="Перейдите к итоговой проверке" width="630"/>

   1. В блоке **Итоговая проверка** нажмите **Create project**.

     	<img src={require('./assets/final-check.png').default} alt="Создайте проект" width="633"/>

1. На экране появятся данные созданного проекта. Скопируйте ID проекта и отправьте его вашему консультанту.

     <img src={require('./assets/project-id.png').default} alt="Скопируйте ID проекта" width="629"/>

1. Дождитесь активации проекта. Информацию о статусе вы увидите на той же странице, с которой копировали ID.

  <img src={require('./assets/project-activated.png').default} alt="Проект активирован" width="634"/>

</details>

<details><summary>Шаг 5. Подключите API и начните пользоваться.</summary>

1. Получите авторизационный токен: на вкладке **Integrations** вашего [профиля](https://toloka.yandex.com/requester/profile/integration) нажмите кнопку **Get OAuth token**.

   <img src={require('./assets/get-oauth-token.png').default} alt="Получите токен" width="626"/>

2. Для обмена через API все готово — отправляйте данные для проекта и получайте результаты их модерации:

   - Используйте потоковую обработку данных (не пакетную). Инструкцию смотрите [в Справке](https://toloka.ai/ru/docs/toloka-apps/api/concepts/streaming-items.html).

   - Вам понадобится ID проекта, полученный на предыдущем шаге. ID проекта в Справке соответствует переменная `{app_project_id}`.

:::info информация

Дополнительную информацию по API можно посмотреть на страницах:
  - [Получить информацию о проекте](https://toloka.ai/ru/docs/toloka-apps/api/ref/app-project/app-projects_app_project_id_get.html)
  - [Получить информацию об элементе разметки](https://toloka.ai/ru/docs/toloka-apps/api/ref/item/app-projects_app_project_id_items_item_id_get.html)
  - [Получить список всех элементов в проекте](https://toloka.ai/ru/docs/toloka-apps/api/ref/item/app-projects_app_project_id_items_get.html)

:::

</details>
