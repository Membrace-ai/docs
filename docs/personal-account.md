# Personal account

In your personal account, you can:

- Send a request to [create a new project](#new_project).

- View the general [statistics](#statistics) on all projects and on every separate project.

## Open your personal account {#entrance}

1. Follow the [link](https://my.membrace.ai/).

2. Enter your email and password.

3. Click **Continue**.

## Restore your password {#recover}

If you forgot your password:

1. Click **Forgot password**.

  <img src={require('./assets/forgot-password.png').default} alt="Restore your password" width="400"/>

2. Enter the email address that you used for registration.

3. Click **Continue**.

4. We'll send you the instructions on changing your password.

## Create a new project {#new_project}

1. Open your [personal account](https://my.membrace.ai/).

2. Click **New Project**.

3. Fill out the form:

	3.1 Enter the project name.

	3.2 Specify the business area, content type, and approximate number of labeling elements per month. This information is optional.

	3.3 Briefly describe what you want to do.

3. Click **Submit**. A project card with the __pending__ status will be created in your personal account.

4. A Membrace specialist will contact you to discuss the details and find a suitable solution.

## Statistics {#statistics}

In the **Summary** section, you can view general statistics on your current projects for the past 30 days.

- **moderated**: The number of elements processed.

- **spent**: The amount spent.

You can view general statistics on every project in the project cards in the **Projects** section:

- **today**: The number of elements processed today.

- **month**: The number of elements processed this month.

- **spending**: Estimated expenses this month (the estimate is based on data for the past 30 days).

To view the project details, click its card. On the project page, you can:

- Find out the project ID for [connecting the API](https://toloka.ai/ru/docs/toloka-apps/api/concepts/streaming-items) in the **project config** section on the top right.

  <img src={require('./assets/api-project-id.png').default} alt="Project ID" width="500"/>

- View charts that show detailed statistics:

	- **Moderated items by time**: The number of labeled elements by days.

	- **Latency**: The median time of labeling one element by days.

	- **Quality**: The labeling quality by days.


