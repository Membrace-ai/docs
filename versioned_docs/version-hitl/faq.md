import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# FAQ

<details>
  <summary>Where can I view my project expenses?</summary>
  <div>

<Tabs>
  <TabItem value="ui" label="In the web interface">

In your account, go to **Profile** → **Expenses** and select the date and project you want to check.

  </TabItem>
  <TabItem value="api" label="Via the API">

To get the cost `cost`, multiply the item price `item_price` by the number of labeled elements `item_count`.

  </TabItem>
</Tabs>

  </div>
</details>

<details>
  <summary>How do I find out the price of labeling one element?</summary>
  <div>

Request [project information](https://toloka.ai/docs/toloka-apps/api/ref/app-project/app-projects_app_project_id_get.html) via the API. The `item_price` attribute is the price for labeling one element.

  </div>
</details>

<details>
  <summary>How can I view the project description?</summary>
  <div>

Select the project in your account and click the ![Preview](assets/preview.png) icon. A window will open with the project's settings and description.

![Preview](assets/project.png)

  </div>
</details>

<details>
  <summary>I only received 100 labeled elements via the API, but I sent more. What happened?</summary>
  <div>

Only a limited number of elements can be sent at the same time: `/app-projects/{app_project_id}/items?sort=finished&after_id={last_saved_item_id}` returns no more than 100 items at a time. If the field value is `"has_more" = true`, there are more results. In this case, update `after_id` and repeat the query to get more results.

  </div>
</details>
