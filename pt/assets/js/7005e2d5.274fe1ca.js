"use strict";(self.webpackChunkmembrace=self.webpackChunkmembrace||[]).push([[906],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,k=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return a?n.createElement(k,l(l({ref:t},c),{},{components:a})):n.createElement(k,l({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<o;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>y});var n=a(7462),r=a(7294),o=a(6010),l=a(2466),s=a(6550),i=a(1980),u=a(7392),c=a(12);function p(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function v(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=d(e),[l,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[i,u]=k({queryString:a,groupId:n}),[p,v]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),f=(()=>{const e=i??p;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),v(e)}),[u,v,o]),tabValues:o}}var f=a(2389);const g="tabList__CuJ",b="tabItem_LNqP";function N(e){let{className:t,block:a,selectedValue:s,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==s&&(p(t),i(n))},m=e=>{var t;let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;a=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;a=c[t]??c[c.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",b,null==l?void 0:l.className,{"tabs__item--active":s===t})}),a??t)})))}function _(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function h(e){const t=v(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",g)},r.createElement(N,(0,n.Z)({},e,t)),r.createElement(_,(0,n.Z)({},e,t)))}function y(e){const t=(0,f.Z)();return r.createElement(h,(0,n.Z)({key:String(t)},e))}},1383:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var n=a(7462),r=(a(7294),a(3905)),o=a(4866),l=a(5162);const s={hide_table_of_contents:!0},i="Integrar via API",u={unversionedId:"api",id:"api",title:"Integrar via API",description:"Antes de come\xe7ar",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/api.md",sourceDirName:".",slug:"/api",permalink:"/pt/api",draft:!1,tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"docsSidebar",previous:{title:"Solicitar demonstra\xe7\xe3o",permalink:"/pt/demo"},next:{title:"Feedback",permalink:"/pt/feedback"}},c={},p=[{value:"Antes de come\xe7ar",id:"antes-de-come\xe7ar",level:2},{value:"Estrutura",id:"estrutura",level:3},{value:"Payload",id:"payload",level:3},{value:"Resposta",id:"resposta",level:3},{value:"Exemplos",id:"exemplos",level:3},{value:"Requisi\xe7\xe3o",id:"requisi\xe7\xe3o",level:4},{value:"Request",id:"request",level:4},{value:"Evento 1. Enviar Conte\xfado para Modera\xe7\xe3o",id:"evento-1-enviar-conte\xfado-para-modera\xe7\xe3o",level:3},{value:"Estrutura",id:"estrutura-1",level:4},{value:"Payload",id:"payload-1",level:4},{value:"Resposta",id:"resposta-1",level:4},{value:"Requisi\xe7\xe3o",id:"requisi\xe7\xe3o-1",level:4},{value:"Resposta",id:"resposta-2",level:4},{value:"Requisi\xe7\xe3o",id:"requisi\xe7\xe3o-2",level:4},{value:"Resposta",id:"resposta-3",level:4},{value:"Evento 2. Coletando os Resultados",id:"retrieving-async",level:3},{value:"Resposta",id:"resposta-4",level:4},{value:"Exemplo",id:"exemplo",level:4}],d={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"integrar-via-api"},"Integrar via API"),(0,r.kt)("h2",{id:"antes-de-come\xe7ar"},"Antes de come\xe7ar"),(0,r.kt)("p",null,"O(a) gerente da sua conta fornecer\xe1:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"token"),". Este token acessar\xe1 os seus projetos e dados. Voc\xea precisar\xe1 adicionar o token a cada requisi\xe7\xe3o no header HTTP ",(0,r.kt)("strong",{parentName:"li"},"Authorization"),";")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Guarde o seu token em um armazenamento seguro e n\xe3o o publique em lugar algum. Se o token for comprometido, entre em contato conosco imediatamente para descart\xe1-lo e criar um novo. Al\xe9m disso, sempre use o protocolo HTTPS para manter a conex\xe3o segura.")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"project_ID"),". Esse ID ser\xe1 usado para associar o conte\xfado que voc\xea enviar para a Membrace com o seu projeto, o que nos comunica qual tipo de modera\xe7\xe3o devemos usar no conte\xfado.")),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"synch_api",label:"API S\xedncrona",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"A API s\xedncrona significa que, assim que voc\xea nos enviar o seu conte\xfado, voc\xea ter\xe1 uma resposta imediata. As respostas podem variar conforme os detalhes do seu projeto."),(0,r.kt)("h3",{id:"estrutura"},"Estrutura"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"POST /v1/item/process\nHost: https://api.membrace.ai\nAuthorization: <token>\n")),(0,r.kt)("h3",{id:"payload"},"Payload"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "request_id": "42",\n    "project_id": <project_id>,\n    "project_version": "1",\n    "content": <content>\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"request_id")," - String. Opcional. Representa o ID do item do conte\xfado no seu sistema;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"project_id")," - String. Obrigat\xf3rio;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"project_version"),' - String. Obrigat\xf3rio. Vers\xe3o do projeto, valor inicial "1";'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"content")," - JSON. Obrigat\xf3rio. O seu conte\xfado, estruturado conforme seu projeto.")),(0,r.kt)("h3",{id:"resposta"},"Resposta"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "request_id": "42",\n    "item_id": <item_id>,\n    "project_id": "text",\n    "project_version": "1",\n    "status": "SUCCESS",\n    "result": <result>,\n    "error": <error>\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"request_id")," - String. Opcional. O mesmo ID que voc\xea nos enviou;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"item_id")," - String. UUID-4 gerado automaticamente, ID no sistema da Membrace."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"status")," - String. Status da tarefa de modera\xe7\xe3o (",(0,r.kt)("inlineCode",{parentName:"li"},"SUCCESS")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"FAILED"),");"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"result")," - JSON. Resultado da modera\xe7\xe3o, estrutura especificada para o seu projeto. Aparece apenas se o status for ",(0,r.kt)("inlineCode",{parentName:"li"},"SUCCESS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"error")," - JSON. Opcional. Mensagem de erro. Aparece apenas se o status retornar como ",(0,r.kt)("inlineCode",{parentName:"li"},"FAILED"),". Veja os poss\xedveis tipos de erros de modera\xe7\xe3o na tabela a seguir:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Tipo de erro"),(0,r.kt)("th",{parentName:"tr",align:null},"Descri\xe7\xe3o"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DOWNLOAD_ERROR")),(0,r.kt)("td",{parentName:"tr",align:null},"Falha em carregar a imagem pelo link.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MODERATION_ERROR")),(0,r.kt)("td",{parentName:"tr",align:null},"Um dos m\xf3dulos de modera\xe7\xe3o funcionou incorretamente.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"INTERNAL_ERROR ")),(0,r.kt)("td",{parentName:"tr",align:null},"Algum outro problema com o servi\xe7o.")))),(0,r.kt)("p",null,"Se voc\xea recebeu o erro ",(0,r.kt)("inlineCode",{parentName:"p"},"MODERATION_ERROR")," ou ",(0,r.kt)("inlineCode",{parentName:"p"},"INTERNAL_ERROR"),", entre em contato com o servi\xe7o de suporte."),(0,r.kt)("h3",{id:"exemplos"},"Exemplos"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"text",label:"Texto",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Nesse caso ",(0,r.kt)("inlineCode",{parentName:"p"},"project_id = text"),"."),(0,r.kt)("h4",{id:"requisi\xe7\xe3o"},"Requisi\xe7\xe3o"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "request_id": "42",\n    "project_id": "text",\n    "project_version": "1",\n    "content": {\n        "text": "Ol\xe1 mundo"\n    }\n}\n')),(0,r.kt)(o.Z,{className:"button-tabs",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"success",label:"Resposta (sucesso)",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "request_id": "42",\n    "item_id": "a8688067-af4c-4c6b-b37e-a9c0e878e27b",\n    "project_id": "text",\n    "project_version": "1",\n    "status": "SUCCESS",\n    "result": {\n        "alcohol": false,\n        "clean_text": true,\n        "clickbait": false,\n        "drugs": false,\n        "erotica": false,\n        "explicit": false,\n        "insult": false,\n        "insult_light": false,\n        "insult_strong": false,\n        "obscene_light": false,\n        "obscene_strong": false,\n        "personal_data": false,\n        "swearing": false\n    }\n}\n'))),(0,r.kt)(l.Z,{value:"failed",label:"Resposta (falha)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "request_id": "42",\n    "item_id": "6fc3d67c-d4c4-4967-9a1d-709653649bc3",\n    "project_id": "text",\n    "project_version": "1",\n    "status": "FAILED",\n    "error": {\n        "code": "TEXT_TOO_LONG",\n        "message": "Text must be no longer than 500 chars",\n        "context": null\n    }\n}\n'))))),(0,r.kt)(l.Z,{value:"image",label:"Imagem",mdxType:"TabItem"},(0,r.kt)("p",null,"Nesse caso ",(0,r.kt)("inlineCode",{parentName:"p"},"project_id = image"),"."),(0,r.kt)("h4",{id:"request"},"Request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "request_id": "42",\n    "project_id": "image",\n    "project_version": "1",\n    "content": {\n        "image_url": "https://example.com/image.png"\n    }\n}\n')),(0,r.kt)(o.Z,{className:"button-tabs",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"success",label:"Resposta (sucesso)",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "request_id": "42",\n    "item_id": "938726b4-31c0-44af-a42a-95cce3f8d719",\n    "project_id": "image",\n    "project_version": "1",\n    "status": "SUCCESS",\n    "result": {\n        "clean": true,\n        "casino": false,\n        "clickbait": false,\n        "explicit": false,\n        "guns": false,\n        "illegal": false,\n        "intim_goods": false,\n        "shocking": false\n    }\n}\n'))),(0,r.kt)(l.Z,{value:"failed",label:"Resposta (falha)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "request_id": "42",\n    "item_id": "1564f7ea-5d43-4931-a204-60dd5e4d48b0",\n    "project_id": "image",\n    "project_version": "1",\n    "status": "FAILED",\n    "error": {\n        "code": "DOWNLOAD_ERROR",\n        "message": "Failed to download image",\n        "context": {\n            "failed_images": [\n                "https://example.com/image.png"\n            ]\n        }\n    }\n}\n'))))))),(0,r.kt)(l.Z,{value:"asynch_api",label:"API Ass\xedncrona",mdxType:"TabItem"},(0,r.kt)("p",null,"A API ass\xedncrona exige que voc\xea fa\xe7a uma requisi\xe7\xe3o separada para receber os resultados da modera\xe7\xe3o.\nNa nossa API ass\xedncrona, temos duas requisi\xe7\xf5es separadas:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#sending-async"},"Evento 1"),": voc\xea envia o conte\xfado para a Membrace;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#retrieving-async"},"Evento 2"),": voc\xea solicita resultados para os itens processados.")),(0,r.kt)("h3",{id:"evento-1-enviar-conte\xfado-para-modera\xe7\xe3o"},"Evento 1. Enviar Conte\xfado para Modera\xe7\xe3o"),(0,r.kt)("h4",{id:"estrutura-1"},"Estrutura"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"POST /v1/item/process\nHost: https://api.membrace.ai\nAuthorization: <token>\n")),(0,r.kt)("h4",{id:"payload-1"},"Payload"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "request_id": "42",\n    "project_id": <project_id>,\n    "project_version": "1",\n    "content": <content>\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"request_id")," - String. Opcional. Representa o ID do item do conte\xfado no seu sistema;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"project_id")," - String. Obrigat\xf3rio;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"project_version"),' - String. Obrigat\xf3rio. Vers\xe3o do projeto, valor inicial "1";'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"content")," - JSON. Obrigat\xf3rio. O seu conte\xfado, estruturado conforme seu projeto.")),(0,r.kt)("h4",{id:"resposta-1"},"Resposta"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "request_id": "42",\n    "item_id": <item_id>,\n    "project_id": "text",\n    "project_version": "1",\n    "status": "PENDING"\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"request_id")," - String. Optional. Same ID as the one you've sent our way;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"item_id")," - String. Auto generated UUID-4 string, ID in Membrace system;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"status")," - String. Status da tarefa de modera\xe7\xe3o (\xfanico valor ",(0,r.kt)("inlineCode",{parentName:"li"},"PENDING")," para a API ass\xedncrona).")),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"text",label:"Texto",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Nesse caso ",(0,r.kt)("inlineCode",{parentName:"p"},"project_id = text"),"."),(0,r.kt)("h4",{id:"requisi\xe7\xe3o-1"},"Requisi\xe7\xe3o"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "request_id": "42",\n    "project_id": "text",\n    "project_version": "1",\n    "content": {\n        "text": "Ol\xe1 mundo"\n    }\n}\n')),(0,r.kt)("h4",{id:"resposta-2"},"Resposta"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "request_id": "42",\n    "item_id": "d9c8bfbe-8632-474e-a117-31df356199b5",\n    "project_id": "text",\n    "project_version": "1",\n    "status": "PENDING"\n}\n'))),(0,r.kt)(l.Z,{value:"image",label:"Imagem",mdxType:"TabItem"},(0,r.kt)("p",null,"Nesse caso ",(0,r.kt)("inlineCode",{parentName:"p"},"project_id = image"),"."),(0,r.kt)("h4",{id:"requisi\xe7\xe3o-2"},"Requisi\xe7\xe3o"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "request_id": "42",\n    "project_id": "image",\n    "project_version": "1",\n    "content": {\n        "image_url": "https://example.com/image.png"\n    }\n}\n')),(0,r.kt)("h4",{id:"resposta-3"},"Resposta"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "request_id": "42",\n    "item_id": "d48c06b7-7c79-4890-b274-d05353f43b61",\n    "project_id": "image",\n    "project_version": "1",\n    "status": "PENDING"\n}\n')))),(0,r.kt)("h3",{id:"retrieving-async"},"Evento 2. Coletando os Resultados"),(0,r.kt)("p",null,"Para obter os resultados, recomendamos que voc\xea fa\xe7a uma requisi\xe7\xe3o GET ordenados por momento de conclus\xe3o. Voc\xea receber\xe1 os primeiros N itens como a resposta, com N dependendo dos detalhes do seu projeto.\nPara receber os pr\xf3ximos itens, salve ",(0,r.kt)("inlineCode",{parentName:"p"},"next_results")," e use como a vari\xe1vel ",(0,r.kt)("inlineCode",{parentName:"p"},"next_results"),".\nVoc\xea pode pular esta vari\xe1vel na primeira requisi\xe7\xe3o ou usar filtros datetime."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GET /v1/item/results?project_id=<project_id>&project_version=<project_version>&status=finished&next_results=<next_results>\nHost: https://api.membrace.ai\nAuthorization: <token>\n")),(0,r.kt)("h4",{id:"resposta-4"},"Resposta"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "items": [<list_of_items>],\n    "has_more": false,\n    "next_results": "177771999702"\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"has_more")," \u2013 se a resposta tiver mais do que os 100 itens iniciais, este valor ser\xe1 configurado como ",(0,r.kt)("inlineCode",{parentName:"li"},"true"))),(0,r.kt)("h4",{id:"exemplo"},"Exemplo"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "items": [\n        {\n            "request_id": "42",\n            "item_id": "c9cc1f01-2e46-4384-87a4-8f775fdf8c3d",\n            "project_id": "text",\n            "project_version": "1",\n            "status": "SUCCESS",\n            "result": {\n                "alcohol": false,\n                "clean_text": true,\n                "clickbait": false,\n                "drugs": false,\n                "erotica": false,\n                "explicit": false,\n                "insult": false,\n                "insult_light": false,\n                "insult_strong": false,\n                "obscene_light": false,\n                "obscene_strong": false,\n                "personal_data": false,\n                "swearing": false\n            }\n        }\n    ],\n    "has_more": false,\n    "next_results": "177771999702"\n}\n')))))}m.isMDXComponent=!0}}]);