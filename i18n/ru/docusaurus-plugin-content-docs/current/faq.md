import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# FAQ

<details><summary>Как узнать расходы по проекту?</summary>

<Tabs>
  <TabItem value="ui" label="В веб-интерфейсе">

В кабинете заказчика на вкладке **Профиль** → **Затраты** выберите дату, за которую вы хотите посмотреть расходы, и необходимый проект.

  </TabItem>
  <TabItem value="api" label="Через API">

Чтобы получить стоимость `cost`, умножьте цену элемента `item_price` на количество размеченных элементов `item_count`.

  </TabItem>
</Tabs>

</details>


<details><summary>Как узнать цену разметки одного элемента?</summary>

Через API запроситe [информацию о проекте](https://toloka.ai/docs/toloka-apps/api/ref/app-project/app-projects_app_project_id_get.html) атрибут `item_price` — цена разметки одного элемента.

</details>


<details><summary>Как посмотреть описание проекта?</summary>

В кабинете заказчика на соответствующей вкладке выберите необходимый проект и нажмите значок ![Предпросмотр](assets/preview.png). В открывшемся окне отобразятся настройки и описание проекта.

![Предпросмотр](assets/project.png)

</details>


<details><summary>По API я получил размеченными только 100 элементов, но отправлял на разметку больше. Почему?</summary>

Существует ограничение по количеству одновременно передаваемых элементов — `/app-projects/{app_project_id}/items?sort=finished&after_id={last_saved_item_id}` возвращает не более 100 элементов за один раз. Если значение поля `"has_more" = true`, значит есть еще результаты. В этом случае обновите `after_id` и повторите запрос для получения следующих результатов.

</details>


