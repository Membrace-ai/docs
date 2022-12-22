# Integrate via API

## Before you begin

Your Account Manager will provide you with:
1. `token`. This token will let you access your projects and data.
2. `project_ID`. This ID will be used to associate the content you send to Membrace with your specific project, which in turn lets us know what kind of moderation to perform on the content.

## Sending Content for Moderation

### Synchronous API

Sync API implies that as soon as you send us your content, you immediately some kind of response. Responses may vary depending on the specifics of your project.

#### Structure

```
POST /v1/item/process
Host: https://api.membrace.ai
Authorization: <token>
```

#### Payload

```json
{
    "request_id": "1",
    "project_id": <project_id>,
    "project_version": "1",
    "content": <content>
}
```
 - `request_id` — String. Optional. This represents the content item ID in your system.
 - `project_id` — String. Required.
 - `project_version` — String. Required. Version of the project, initial value "1".
 - `content` — JSON. Required. Your content, structured in accordance with your project.

#### Example

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
    "item_id": "safdhgjkl",
    "project_id": "text",
    "project_version": "1",
    "status": "SUCCESS",
    "result": <result>,
    "error": {
        "code": "DOWNLOAD_ERROR",
        "message": "Failed to download image",
        "context": null
    }
}
```
 - `request_id` — String. Optional. Same ID as the one you've sent our way.
- `item_id` — String. ID in Membrace system.
- `status` — String. Moderation task status (`SUCCESS` or `FAILED`).
- `result` — JSON. Result of moderation, structure specified for your project.
- `error` — JSON. Optional. Error message. Appears only if `status` returned `FAILED`.

#### Example (`status` value `SUCCESS`)

```json
{
    "request_id": "42",
    "item_id": "safdhgjkl",
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
#### Example (`status` value `FAILED`)

```json
{
    "request_id": "45",
    "item_id": "poakksaxw",
    "project_id": "image",
    "project_version": "1",
    "status": "FAILED",
    "error": {
        "code": "DOWNLOAD_ERROR",
        "message": "Failed to download image",
        "context": null
    }
}
```