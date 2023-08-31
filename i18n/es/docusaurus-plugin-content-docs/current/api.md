---
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Integrar a través de la API

## Antes de comenzar
Su Administrador de Cuenta le brindará:
1. `token`. Este token (ficha digital) le permitirá acceder a sus proyectos y datos. Usted tiene que agregar el token a cada pedido en el encabezado HTTP **Authorization**;

:::caution

Mantenga su token en un lugar seguro y no lo divulgue. Si el token ha sido comprometido, contáctenos inmediatamente para descartarlo y emitir uno nuevo. Además, siempre utilice el protocolo HTTPS para mantener la conexión segura.

:::

2. `project_ID`. Este ID se utilizará para asociar el contenido que usted envía a Membrace con su proyecto específico, el cual llegado el momento nos permite saber qué tipo de moderación debemos realizar en el contenido.

<Tabs>
<TabItem value="synch_api" label="API sincrónica" default>

Sincronizar API implica que tan pronto como usted nos manda su contenido, obtiene inmediatamente un tipo de respuesta. Las respuestas pueden variar según las especificaciones de su proyecto.

### Estructura

```
POST /v1/item/process
Host: https://api.membrace.ai
Authorization: <token>
```

### Carga de trabajo
```json
{
    "request_id": "42",
    "project_id": <project_id>,
    "project_version": "1",
    "content": <content>
}
```
* `request_id` - String. Opcional. Representa la ID del elemento de contenido en su sistema;
* `project_id` - String. Requerida;
* `project_version` - String. Requerida. Versión del Proyecto, valor inicial "1";
* `content` - JSON. Requerido. Su contenido, estructurado de acuerdo a su proyecto.

### Respuesta
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
* `request_id` - String. Opcional. Misma ID que que nos ha enviado;
* `item_id` - String. Cadena UUID-4 generada automáticamente, ID en el sistema de Membrace;
* `status` - String. Estado de la tarea de moderación (`SUCCESS` o `FAILED`);
* `result` - JSON. Resultado de la moderación, estructura especificada para su proyecto. Solo aparece si `status` es `SUCCESS`;
* `error` - JSON. Opcional. Mensaje de error. Solo aparece si `status` es `FAILED`. Los posibles tipos de errores de moderación se detallan en la siguiente tabla:

| Tipo de error             | Descripción                                                  |
| ------------------------- | ------------------------------------------------------------ |
| `DOWNLOAD_ERROR`          | Fallo al cargar la imagen mediante el enlace.                |
| `MODERATION_ERROR`        | Uno de los módulos de moderación no funcionó correctamente.  |
| `INTERNAL_ERROR `         | Cualquier otra clase de problema con el servicio.            |

Si usted obtuvo el tipo de error `MODERATION_ERROR` o `INTERNAL_ERROR`, contacte al servicio de soporte.

### Ejemplos

<Tabs>
<TabItem value="text" label="Texto" default>

En este caso `project_id = text`.

#### Pedido

```json
{
    "request_id": "42",
    "project_id": "text",
    "project_version": "1",
    "content": {
        "text": "Hola mundo"
    }
}
```

<Tabs className="button-tabs">
<TabItem value="success" label="Respuesta (éxito)" default>

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
<TabItem value="failed" label="Respuesta (fallida)">

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
<TabItem value="image" label="Imagen">

En este caso `project_id = image`.

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
<TabItem value="success" label="Respuesta (éxito)" default>

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
<TabItem value="failed" label="Respuesta (fallida)">

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
<TabItem value="asynch_api" label="API asincrónica">

La API asincrónica requiere que realice un pedido por separado a fines de recibir los resultados de moderación.
En nuestra API asincrónica, hay dos tipos de pedidos separados:
- [Caso 1](#sending-async): usted envía el contenido a Membrace;
- [Caso 2](#retrieving-async): usted solicita los resultados para los elementos procesados.

### Caso 1. Envío de contenido para la moderación {#sending-async}

#### Estructura
```
POST /v1/item/process
Host: https://api.membrace.ai
Authorization: <token>
```

#### Carga de trabajo
```json
{
    "request_id": "42",
    "project_id": <project_id>,
    "project_version": "1",
    "content": <content>
}
```
* `request_id` - String. Opcional. Esta cadena representa el ID del elemento de contenido en su sistema;
* `project_id` - String. Requerida;
* `project_version` - String. Requerida. Versión del Proyecto, valor inicial "1";
* `content` - JSON. Requerido. Su contenido, estructurado de acuerdo a su proyecto.

#### Respuesta
```json
{
    "request_id": "42",
    "item_id": <item_id>,
    "project_id": "text",
    "project_version": "1",
    "status": "PENDING"
}
```
* `request_id` - String. Opcional. Mismo ID que que nos ha enviado;
* `item_id` - String. Cadena UUID-4 generada automáticamente, ID en el sistema de Membrace;
* `status` - String. Estado de la tarea de moderación (solo valor `PENDING` para la API asincrónica).

<Tabs>
<TabItem value="text" label="Texto" default>

En este caso `project_id = text`.

#### Pedido

```json
{
    "request_id": "42",
    "project_id": "text",
    "project_version": "1",
    "content": {
        "text": "Hola mundo"
    }
}
```
#### Respuesta
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
<TabItem value="image" label="Imagen">

In this case `project_id = image`.

#### Pedido
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

#### Respuesta
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

### Caso 2. Recuperar los resultados {#retrieving-async}
A fines de obtener los resultados, se recomienda que los obtenga ordenados por tiempo de completado. Usted recibirá los primeros elementos N como respuesta, con N dependiendo de las especificaciones de su proyecto.
A fines de recibir los próximos elementos, por favor guarde el `next_results` y utilícelo como el `next_results` variable.
Usted puede saltar esta variable en la primera solicitud o utilizar los filtros datetime.

```
GET /v1/item/results?project_id=<project_id>&version=<project_version>&status=finished&next_results=<next_results>
Host: https://api.membrace.ai
Authorization: <token>
```

#### Respuesta
```json
{
    "items": [<list_of_items>],
    "has_more": false,
    "next_results": "177771999702"
}
```
* `has_more` – si la respuesta contiene más de 100 elementos iniciales, este valor se establecerá como `true`.


#### Ejemplo
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



