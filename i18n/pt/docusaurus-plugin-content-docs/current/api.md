---
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Integrar via API

## Antes de começar
O(a) gerente da sua conta fornecerá:
1. `token`. Este token acessará os seus projetos e dados. Você precisará adicionar o token a cada requisição no header HTTP **Authorization**;

:::caution

Guarde o seu token em um armazenamento seguro e não o publique em lugar algum. Se o token for comprometido, entre em contato conosco imediatamente para descartá-lo e criar um novo. Além disso, sempre use o protocolo HTTPS para manter a conexão segura.

:::

2. `project_ID`. Esse ID será usado para associar o conteúdo que você enviar para a Membrace com o seu projeto, o que nos comunica qual tipo de moderação devemos usar no conteúdo.

<Tabs>
<TabItem value="synch_api" label="API Síncrona" default>

A API síncrona significa que, assim que você nos enviar o seu conteúdo, você terá uma resposta imediata. As respostas podem variar conforme os detalhes do seu projeto.

### Estrutura

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
* `request_id` - String. Opcional. Representa o ID do item do conteúdo no seu sistema;
* `project_id` - String. Obrigatório;
* `project_version` - String. Obrigatório. Versão do projeto, valor inicial "1";
* `content` - JSON. Obrigatório. O seu conteúdo, estruturado conforme seu projeto.

### Resposta
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
* `request_id` - String. Opcional. O mesmo ID que você nos enviou;
* `item_id` - String. UUID-4 gerado automaticamente, ID no sistema da Membrace.
* `status` - String. Status da tarefa de moderação (`SUCCESS` or `FAILED`);
* `result` - JSON. Resultado da moderação, estrutura especificada para o seu projeto. Aparece apenas se o status for `SUCCESS`
* `error` - JSON. Opcional. Mensagem de erro. Aparece apenas se o status retornar como `FAILED`. Veja os possíveis tipos de erros de moderação na tabela a seguir:

| Tipo de erro              | Descrição                                             |
| ------------------------- | ----------------------------------------------------- |
| `DOWNLOAD_ERROR`          | Falha em carregar a imagem pelo link.                 |
| `MODERATION_ERROR`        | Um dos módulos de moderação funcionou incorretamente. |
| `INTERNAL_ERROR `         | Algum outro problema com o serviço.                   |

Se você recebeu o erro `MODERATION_ERROR` ou `INTERNAL_ERROR`, entre em contato com o serviço de suporte.

### Exemplos

<Tabs>
<TabItem value="text" label="Texto" default>

Nesse caso `project_id = text`.

#### Requisição

```json
{
    "request_id": "42",
    "project_id": "text",
    "project_version": "1",
    "content": {
        "text": "Olá mundo"
    }
}
```

<Tabs className="button-tabs">
<TabItem value="success" label="Resposta (sucesso)" default>

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
<TabItem value="failed" label="Resposta (falha)">

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
<TabItem value="image" label="Imagem">

Nesse caso `project_id = image`.

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
<TabItem value="success" label="Resposta (sucesso)" default>

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
<TabItem value="failed" label="Resposta (falha)">

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
<TabItem value="asynch_api" label="API Assíncrona">

A API assíncrona exige que você faça uma requisição separada para receber os resultados da moderação.
Na nossa API assíncrona, temos duas requisições separadas:
- [Evento 1](#sending-async): você envia o conteúdo para a Membrace;
- [Evento 2](#retrieving-async): você solicita resultados para os itens processados.

### Evento 1. Enviar Conteúdo para Moderação

#### Estrutura
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
* `request_id` - String. Opcional. Representa o ID do item do conteúdo no seu sistema;
* `project_id` - String. Obrigatório;
* `project_version` - String. Obrigatório. Versão do projeto, valor inicial "1";
* `content` - JSON. Obrigatório. O seu conteúdo, estruturado conforme seu projeto.

#### Resposta
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
* `status` - String. Status da tarefa de moderação (único valor `PENDING` para a API assíncrona).

<Tabs>
<TabItem value="text" label="Texto" default>

Nesse caso `project_id = text`.

#### Requisição
```json
{
    "request_id": "42",
    "project_id": "text",
    "project_version": "1",
    "content": {
        "text": "Olá mundo"
    }
}
```
#### Resposta
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
<TabItem value="image" label="Imagem">

Nesse caso `project_id = image`.

#### Requisição
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

#### Resposta
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

### Evento 2. Coletando os Resultados {#retrieving-async}
Para obter os resultados, recomendamos que você faça uma requisição GET ordenados por momento de conclusão. Você receberá os primeiros N itens como a resposta, com N dependendo dos detalhes do seu projeto.
Para receber os próximos itens, salve `next_results` e use como a variável `next_results`.
Você pode pular esta variável na primeira requisição ou usar filtros datetime.

```
GET /v1/item/results?project_id=<project_id>&project_version=<project_version>&status=finished&next_results=<next_results>
Host: https://api.membrace.ai
Authorization: <token>
```

#### Resposta
```json
{
    "items": [<list_of_items>],
    "has_more": false,
    "next_results": "177771999702"
}
```
* `has_more` – se a resposta tiver mais do que os 100 itens iniciais, este valor será configurado como `true`

#### Exemplo
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