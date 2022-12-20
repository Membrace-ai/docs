# Launching stream processing

Once the project is approved and ready to launch, you can start integration via the API:

<details><summary>Step 1. Sign up.</summary>


1. Go to the [sign-up page](https://passport.toloka.ai/auth/list?origin=toloka_requesters&retpath=https%3A%2F%2Fplatform.toloka.ai%2Fsignup%2Frequester%3FauthRole%3Drequester) and create an account:

<details><summary>Using your Google account</summary>


1. In the registration window, click **Google**.

  <img src={require('./assets/login_google1.png').default} alt="Select Google" width="127"/>

2. Select a username and confirm account creation.

  <img src={require('./assets/login_google2.png').default} alt="Confirm account creation in Toloka" width="126"/>

</details>

<details><summary>Using your email</summary>

1. In the registration window, enter your email and click **Log in**.

  <img src={require('./assets/login_email1.png').default} alt="Enter email address" width="124"/>

2. You'll receive a confirmation code in your email. Enter it in the window that opens.

  <img src={require('./assets/login_email2.png').default} alt="Enter confirmation code" width="126"/>

</details>

3. Complete registration by filling out your personal information.

  <img src={require('./assets/info-about-yourself.png').default} alt="Fill out personal information" width="417"/>

</details>

<details><summary>Step 2. Top up your balance.</summary>

1. Top up your balance.

   1. Go to the **Profile** tab.

      <img src={require('./assets/profile.png').default} alt="Go to your profile" width="630"/>

   2. If you have a promo code:

	   1. Click **Enter promo code**.

         <img src={require('./assets/enter-promo-code.png').default} alt="Click to enter promo code" width="307"/>

	   1. In the window that opens, enter the promo code and click **Activate**. Once it's activated, your balance will be topped up.

:::info

To continue using the service, you'll need to link your account to a billing system. To learn more about linking your account, check this [page](https://toloka.ai/ru/docs/guide/concepts/budget.html).

:::

</details>

<details><summary>Step 3. Send us your login.</summary>

   Send your consultant the login that you registered with, and we'll link your ready-to-go solution to it. You can find your login in your [profile](https://platform.toloka.ai/requester/profile).

</details>

<details><summary>Step 4. Name your project.</summary>

  1. We'll send you a link in response to your login information – follow it.

  2. Create a project:

      1. In the **Project setup** section, enter the name of your app and click **Go to instructions setup**.

         <img src={require('./assets/project-name.png').default} alt="Enter name" width="631"/>

      2. You don't need to enter anything in the **Instructions setup** section. Go straight to the next section by clicking **Go to Final check**.

            <img src={require('./assets/go-final-check.png').default} alt="Go to final check" width="630"/>

      3. In the **Final check** section, click **Create project**.

         <img src={require('./assets/final-check.png').default} alt="Create a project" width="633"/>

  3. You'll see your project data appear on the screen. Copy the project ID and send it to your consultant.

        <img src={require('./assets/project-id.png').default} alt="Copy project ID" width="629"/>

  4. Wait for the project to activate. You can see the status info on the page you copied the ID from.

     <img src={require('./assets/project-activated.png').default} alt="Project activated" width="634"/>

</details>

<details><summary>Step 5. Connect the API and get started.</summary>

   1. Get an authorization token: on the **Integrations** tab in your [profile](https://platform.toloka.ai/requester/profile), click **Get OAuth token**.

      <img src={require('./assets/get-oauth-token.png').default} alt="Get a token" width="626"/>

   2. You are now ready to exchange data via the API — send your project data and receive moderation results:

      - Use stream data processing (not batch processing). To learn more, see [Help](https://toloka.ai/docs/toloka-apps/api/concepts/streaming-items.html).

      - You'll need the project ID that you got in the previous step. In Help, the project ID corresponds to the `{app_project_id}` variable.

      :::info

      To learn more about the API, check the following pages:
      - [Getting project information](https://toloka.ai/docs/toloka-apps/api/ref/app-project/app-projects_app_project_id_get.html)
      - [Getting labeling item information](https://toloka.ai/docs/toloka-apps/api/ref/item/app-projects_app_project_id_items_item_id_get.html)
      - [Getting a list of all project items](https://toloka.ai/docs/toloka-apps/api/ref/item/app-projects_app_project_id_items_get.html)

      :::

</details>

