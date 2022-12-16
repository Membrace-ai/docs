import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# FAQ

<details><summary>Как узнать расходы по проекту?</summary>

<Tabs>
  <TabItem value="pa" label="В личном кабинете">

В [личном кабинете](https://my.membrace.ai/) в блоке **Summary** отображаются затраченные средства по вашим текущим проектам за последние 30 дней.

  <img src={require('./assets/spent-all.png').default} alt="Общие затраты" width="500"/>

Чтобы посмотреть затраты по конкретному проекту, нажмите на его карточку. Вверху на странице проекта вы сможете узнать затраты за текущий день и за последние 30 дней.

  <img src={require('./assets/spent-project.png').default} alt="Общие затраты" width="500"/>

  </TabItem>
  <TabItem value="api" label="Через API">

Чтобы получить стоимость `cost`, умножьте цену элемента `item_price` на количество размеченных элементов `item_count`.

  </TabItem>
  <TabItem value="ui" label="В веб-интерфейсе">

В кабинете заказчика на вкладке **Профиль** → **Затраты** выберите дату, за которую вы хотите посмотреть расходы, и необходимый проект.

  </TabItem>
</Tabs>

</details>


<details><summary>Как узнать цену разметки одного элемента?</summary>

<Tabs>
  <TabItem value="pa_item" label="В личном кабинете">

В [личном кабинете](https://my.membrace.ai/) нажмите на карточку проекта. На странице проекта справа вверху в блоке **project config** можно узнать цену разметки 1000 элементов.

  </TabItem>
  <TabItem value="api_item" label="Через API">

Через API запроситe [информацию о проекте](https://toloka.ai/docs/toloka-apps/api/ref/app-project/app-projects_app_project_id_get.html) атрибут `item_price` — цена разметки одного элемента.

  </TabItem>
</Tabs>

</details>

<details><summary>Как узнать сколько объектов размечено?</summary>

В [личном кабинете](https://my.membrace.ai/) в блоке **Summary** отображаются сколько размечено объектов по всем вашим текущим проектам за последние 30 дней.

  <img src={require('./assets/moderated-all.png').default} alt="Всего размечено" width="500"/>

Чтобы посмотреть количество размеченных объетов по конкретному проекту, нажмите на его карточку. Вверху на странице проекта вы сможете узнать информацию о количестве размеченных объектов за текущий день и за последние 30 дней.

  <img src={require('./assets/moderated-project.png').default} alt="Общие затраты" width="500"/>

</details>

<details><summary>Как посмотреть описание проекта?</summary>

В кабинете заказчика на соответствующей вкладке выберите необходимый проект и нажмите значок ![Предпросмотр](assets/preview.png). В открывшемся окне отобразятся настройки и описание проекта.

![Предпросмотр](assets/project.png)

</details>


<details><summary>По API я получил размеченными только 100 элементов, но отправлял на разметку больше. Почему?</summary>

Существует ограничение по количеству одновременно передаваемых элементов — `/app-projects/{app_project_id}/items?sort=finished&after_id={last_saved_item_id}` возвращает не более 100 элементов за один раз. Если значение поля `"has_more" = true`, значит есть еще результаты. В этом случае обновите `after_id` и повторите запрос для получения следующих результатов.

</details>



