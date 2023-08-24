---
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Integrate via API

## Before you begin
Your Account Manager will provide you with:
1. `token`. This token will let you access your projects & data. You have to add thе token
to each request in **Authorization** HTTP-header;

:::caution

Keep your token in a safe storage and do not publish it anywhere. If the token has been compromised, contact us immediately to drop it and issue a new one. Also, always use HTTPS protocol to keep the connection safe.

:::

2. `project_ID`. This ID will be used to associate the content you send to Membrace with your specific project, which in turn lets us know what kind of moderation to perform on the content.

<Tabs>
<TabItem value="synch_api" label="Synchronous API" default>

Sync API implies that as soon as you send us your content, you immediately some kind of response. Responses may vary depending on the specifics of your project.

### Structure

```
POST /v1/item/process
Host: https://api.membrace.ai
Authorization: <token>
```

### Payload
```json
{
    "request_id": "42",
    "project_id": <project_id>,
    "project_version": "1",
    "content": <content>
}
```
* `request_id` - String. Optional. This represents the content item ID in your system;
* `project_id` - String. Required;
* `project_version` - String. Required. Version of the project, initial value "1";
* `content` - JSON. Required. Your content, structured in accordance with your project.

### Response
```json
{
    "request_id": "42",
    "item_id": <item_id>,
    "project_id": "text",
    "project_version": "1",
    "status": "SUCCESS",
    "result": <result>,
    "error": <error>
}
```
* `request_id` - String. Optional. Same ID as the one you've sent our way;
* `item_id` - String. Auto generated UUID-4 string, ID in Membrace system;
* `status` - String. Moderation task status (`SUCCESS` or `FAILED`);
* `result` - JSON. Result of moderation, structure specified for your project. Appears only if `status` is `SUCCESS`;
* `error` - JSON. Optional. Error message. Appears only if `status` returned `FAILED`. Possible types of moderation errors are given in the table:

| Type of error             | Description                                         |
| ------------------------- | --------------------------------------------------- |
| `DOWNLOAD_ERROR`          | Failed to upload image by link.                     |
| `MODERATION_ERROR`        | Оne of the moderation modules worked incorrectly.   |
| `INTERNAL_ERROR `         | Any other problem with the service.                 |

If you received error type `MODERATION_ERROR` or `INTERNAL_ERROR`, contact to the support service.

### Examples

<Tabs>
<TabItem value="text" label="Text" default>

In this case `project_id = text`.

#### Request

```json
{
    "request_id": "42",
    "project_id": "text",
    "project_version": "1",
    "content": {
        "text": "Hello world"
    }
}
```

<Tabs className="button-tabs">
<TabItem value="success" label="Responce (success)" default>

```json
{
    "request_id": "42",
    "item_id": "a8688067-af4c-4c6b-b37e-a9c0e878e27b",
    "project_id": "text",
    "project_version": "1",
    "status": "SUCCESS",
    "result": {
        "alcohol": false,
        "clean_text": true,
        "clickbait": false,
        "drugs": false,
        "erotica": false,
        "explicit": false,
        "insult": false,
        "insult_light": false,
        "insult_strong": false,
        "obscene_light": false,
        "obscene_strong": false,
        "personal_data": false,
        "swearing": false
    }
}
```
</TabItem>
<TabItem value="failed" label="Response (failed)">

```json
{
    "request_id": "42",
    "item_id": "6fc3d67c-d4c4-4967-9a1d-709653649bc3",
    "project_id": "text",
    "project_version": "1",
    "status": "FAILED",
    "error": {
        "code": "TEXT_TOO_LONG",
        "message": "Text must be no longer than 500 chars",
        "context": null
    }
}
```

</TabItem>
</Tabs>

</TabItem>
<TabItem value="image" label="Image">

In this case `project_id = image`.

#### Request

```json
{
    "request_id": "42",
    "project_id": "image",
    "project_version": "1",
    "content": {
        "image_url": "https://example.com/image.png"
    }
}
```
<Tabs className="button-tabs">
<TabItem value="success" label="Response (success)" default>

```json
{
    "request_id": "42",
    "item_id": "938726b4-31c0-44af-a42a-95cce3f8d719",
    "project_id": "image",
    "project_version": "1",
    "status": "SUCCESS",
    "result": {
        "clean": true,
        "casino": false,
        "clickbait": false,
        "explicit": false,
        "guns": false,
        "illegal": false,
        "intim_goods": false,
        "shocking": false
    }
}
```

</TabItem>
<TabItem value="failed" label="Response (failed)">

```json
{
    "request_id": "42",
    "item_id": "1564f7ea-5d43-4931-a204-60dd5e4d48b0",
    "project_id": "image",
    "project_version": "1",
    "status": "FAILED",
    "error": {
        "code": "DOWNLOAD_ERROR",
        "message": "Failed to download image",
        "context": {
            "failed_images": [
                "https://example.com/image.png"
            ]
        }
    }
}
```

</TabItem>
</Tabs>

</TabItem>
</Tabs>

</TabItem>
<TabItem value="asynch_api" label="Asynchronous API">

Async API requires you to make a separate request in order to receive moderation results.
In our Async API, there are two separate requests:
- [Event 1](#sending-async): you send the content to Membrace;
- [Event 2](#retrieving-async): you request results for processed items.

### Event 1. Sending Content for Moderation {#sending-async}

#### Structure
```
POST /v1/item/process
Host: https://api.membrace.ai
Authorization: <token>
```

#### Payload
```json
{
    "request_id": "42",
    "project_id": <project_id>,
    "project_version": "1",
    "content": <content>
}
```
* `request_id` - String. Optional. This represents the content item ID in your system;
* `project_id` - String. Required;
* `project_version` - String. Required. Version of the project, initial value "1";
* `content` - JSON. Required. Your content, structured in accordance with your project.

#### Response
```json
{
    "request_id": "42",
    "item_id": <item_id>,
    "project_id": "text",
    "project_version": "1",
    "status": "PENDING"
}
```
* `request_id` - String. Optional. Same ID as the one you've sent our way;
* `item_id` - String. Auto generated UUID-4 string, ID in Membrace system;
* `status` - String. Moderation task status (only `PENDING` value for Asynchronous API).

<Tabs>
<TabItem value="text" label="Text" default>

In this case `project_id = text`.

#### Request
```json
{
    "request_id": "42",
    "project_id": "text",
    "project_version": "1",
    "content": {
        "text": "Hello world"
    }
}
```
#### Response
```json
{
    "request_id": "42",
    "item_id": "d9c8bfbe-8632-474e-a117-31df356199b5",
    "project_id": "text",
    "project_version": "1",
    "status": "PENDING"
}
```

</TabItem>
<TabItem value="image" label="Image">

In this case `project_id = image`.

#### Request
```json
{
    "request_id": "42",
    "project_id": "image",
    "project_version": "1",
    "content": {
        "image_url": "https://example.com/image.png"
    }
}
```

#### Response
```json
{
    "request_id": "42",
    "item_id": "d48c06b7-7c79-4890-b274-d05353f43b61",
    "project_id": "image",
    "project_version": "1",
    "status": "PENDING"
}
```
</TabItem>
</Tabs>

### Event 2. Retrieving Results {#retrieving-async}
In order to get the results, it's recommended that you GET them sorted by time of completion. You will receive the first N items as the response, with N depending on specifics of your project.
In order to receive the next items, please save the `next_results` & use it as the `next_results` variable.
You can skip this variable on the first query or use datetime filters.

```
GET /v1/item/results?project_id=<project_id>&project_version=<project_version>&status=finished&next_results=<next_results>
Host: https://api.membrace.ai
Authorization: <token>
```

#### Response
```json
{
    "items": [<list_of_items>],
    "has_more": false,
    "next_results": "177771999702"
}
```
* `has_more` – if the response contains more than the initial 100 items, this value will be set to `true`.

#### Example
```json
{
    "items": [
        {
            "request_id": "42",
            "item_id": "c9cc1f01-2e46-4384-87a4-8f775fdf8c3d",
            "project_id": "text",
            "project_version": "1",
            "status": "SUCCESS",
            "result": {
                "alcohol": false,
                "clean_text": true,
                "clickbait": false,
                "drugs": false,
                "erotica": false,
                "explicit": false,
                "insult": false,
                "insult_light": false,
                "insult_strong": false,
                "obscene_light": false,
                "obscene_strong": false,
                "personal_data": false,
                "swearing": false
            }
        }
    ],
    "has_more": false,
    "next_results": "177771999702"
}
```
</TabItem>
</Tabs>



