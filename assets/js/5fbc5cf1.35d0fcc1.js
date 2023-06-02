"use strict";(self.webpackChunkmembrace=self.webpackChunkmembrace||[]).push([[207],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),r=n(7294),l=n(6010),i=n(2389),o=n(7392),s=n(7094),u=n(2466);const p="tabList__CuJ",c="tabItem_LNqP";function d(e){var t;const{lazy:n,block:i,defaultValue:d,values:m,groupId:k,className:f}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=m??v.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),h=(0,o.l)(g,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===d?d:d??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==b&&!g.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:y}=(0,s.U)(),[_,j]=(0,r.useState)(b),T=[],{blockElementScrollPositionUntilNextRender:x}=(0,u.o5)();if(null!=k){const e=N[k];null!=e&&e!==_&&g.some((t=>t.value===e))&&j(e)}const C=e=>{const t=e.currentTarget,n=T.indexOf(t),a=g[n].value;a!==_&&(x(t),j(a),null!=k&&y(k,String(a)))},I=e=>{var t;let n=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;n=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=T[t]??T[T.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},f)},g.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:_===t?0:-1,"aria-selected":_===t,key:t,ref:e=>T.push(e),onKeyDown:I,onClick:C},i,{className:(0,l.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":_===t})}),n??t)}))),n?(0,r.cloneElement)(v.filter((e=>e.props.value===_))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==_})))))}function m(e){const t=(0,i.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},7480:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),l=n(5488),i=n(5162);const o={hide_table_of_contents:!0},s="Integrate via API",u={unversionedId:"api",id:"api",title:"Integrate via API",description:"Before you begin",source:"@site/docs/api.md",sourceDirName:".",slug:"/api",permalink:"/api",draft:!1,tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"docsSidebar",previous:{title:"Request a demo",permalink:"/demo"},next:{title:"Feedback",permalink:"/feedback"}},p={},c=[{value:"Before you begin",id:"before-you-begin",level:2},{value:"Structure",id:"structure",level:3},{value:"Payload",id:"payload",level:3},{value:"Response",id:"response",level:3},{value:"Examples",id:"examples",level:3},{value:"Request",id:"request",level:4},{value:"Request",id:"request-1",level:4},{value:"Event 1. Sending Content for Moderation",id:"sending-async",level:3},{value:"Structure",id:"structure-1",level:4},{value:"Payload",id:"payload-1",level:4},{value:"Response",id:"response-1",level:4},{value:"Request",id:"request-2",level:4},{value:"Response",id:"response-2",level:4},{value:"Request",id:"request-3",level:4},{value:"Response",id:"response-3",level:4},{value:"Event 2. Retrieving Results",id:"retrieving-async",level:3},{value:"Response",id:"response-4",level:4},{value:"Example",id:"example",level:4}],d={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"integrate-via-api"},"Integrate via API"),(0,r.kt)("h2",{id:"before-you-begin"},"Before you begin"),(0,r.kt)("p",null,"Your Account Manager will provide you with:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"token"),". This token will let you access your projects & data. You have to add th\u0435 token\nto each request in ",(0,r.kt)("strong",{parentName:"li"},"Authorization")," HTTP-header;")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Keep your token in a safe storage and do not publish it anywhere. If the token has been compromised, contact us immediately to drop it and issue a new one. Also, always use HTTPS protocol to keep the connection safe.")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"project_ID"),". This ID will be used to associate the content you send to Membrace with your specific project, which in turn lets us know what kind of moderation to perform on the content.")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"synch_api",label:"Synchronous API",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Sync API implies that as soon as you send us your content, you immediately some kind of response. Responses may vary depending on the specifics of your project."),(0,r.kt)("h3",{id:"structure"},"Structure"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"POST /v1/item/process\nHost: https://api.membrace.ai\nAuthorization: <token>\n")),(0,r.kt)("h3",{id:"payload"},"Payload"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "request_id": "42",\n    "project_id": <project_id>,\n    "project_version": "1",\n    "content": <content>\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"request_id")," - String. Optional. This represents the content item ID in your system;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"project_id")," - String. Required;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"project_version"),' - String. Required. Version of the project, initial value "1";'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"content")," - JSON. Required. Your content, structured in accordance with your project.")),(0,r.kt)("h3",{id:"response"},"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "request_id": "42",\n    "item_id": <item_id>,\n    "project_id": "text",\n    "project_version": "1",\n    "status": "SUCCESS",\n    "result": <result>,\n    "error": <error>\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"request_id")," - String. Optional. Same ID as the one you've sent our way;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"item_id")," - String. Auto generated UUID-4 string, ID in Membrace system."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"status")," - String. Moderation task status (",(0,r.kt)("inlineCode",{parentName:"li"},"SUCCESS")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"FAILED"),");"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"result")," - JSON. Result of moderation, structure specified for your project. Appears only if ",(0,r.kt)("inlineCode",{parentName:"li"},"status")," is ",(0,r.kt)("inlineCode",{parentName:"li"},"SUCCESS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"error")," - JSON. Optional. Error message. Appears only if ",(0,r.kt)("inlineCode",{parentName:"li"},"status")," returned ",(0,r.kt)("inlineCode",{parentName:"li"},"FAILED"),". Possible types of moderation errors are given in the table:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type of error"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DOWNLOAD_ERROR")),(0,r.kt)("td",{parentName:"tr",align:null},"Failed to upload image by link.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MODERATION_ERROR")),(0,r.kt)("td",{parentName:"tr",align:null},"\u041ene of the moderation modules worked incorrectly.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"INTERNAL_ERROR ")),(0,r.kt)("td",{parentName:"tr",align:null},"Any other problem with the service.")))),(0,r.kt)("p",null,"If you received error type ",(0,r.kt)("inlineCode",{parentName:"p"},"MODERATION_ERROR")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"INTERNAL_ERROR"),", contact to the support service."),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"text",label:"Text",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"In this case ",(0,r.kt)("inlineCode",{parentName:"p"},"project_id = text"),"."),(0,r.kt)("h4",{id:"request"},"Request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "request_id": "42",\n    "project_id": "text",\n    "project_version": "1",\n    "content": {\n        "text": "Hello world"\n    }\n}\n')),(0,r.kt)(l.Z,{className:"button-tabs",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"success",label:"Responce (success)",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "request_id": "42",\n    "item_id": "a8688067-af4c-4c6b-b37e-a9c0e878e27b",\n    "project_id": "text",\n    "project_version": "1",\n    "status": "SUCCESS",\n    "result": {\n        "alcohol": false,\n        "clean_text": true,\n        "clickbait": false,\n        "drugs": false,\n        "erotica": false,\n        "explicit": false,\n        "insult": false,\n        "insult_light": false,\n        "insult_strong": false,\n        "obscene_light": false,\n        "obscene_strong": false,\n        "personal_data": false,\n        "swearing": false\n    }\n}\n'))),(0,r.kt)(i.Z,{value:"failed",label:"Response (failed)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "request_id": "42",\n    "item_id": "6fc3d67c-d4c4-4967-9a1d-709653649bc3",\n    "project_id": "text",\n    "project_version": "1",\n    "status": "FAILED",\n    "error": {\n        "code": "TEXT_TOO_LONG",\n        "message": "Text must be no longer than 500 chars",\n        "context": null\n    }\n}\n'))))),(0,r.kt)(i.Z,{value:"image",label:"Image",mdxType:"TabItem"},(0,r.kt)("p",null,"In this case ",(0,r.kt)("inlineCode",{parentName:"p"},"project_id = image"),"."),(0,r.kt)("h4",{id:"request-1"},"Request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "request_id": "42",\n    "project_id": "image",\n    "project_version": "1",\n    "content": {\n        "image_url": "https://example.com/image.png"\n    }\n}\n')),(0,r.kt)(l.Z,{className:"button-tabs",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"success",label:"Response (success)",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "request_id": "42",\n    "item_id": "938726b4-31c0-44af-a42a-95cce3f8d719",\n    "project_id": "image",\n    "project_version": "1",\n    "status": "SUCCESS",\n    "result": {\n        "clean": true,\n        "casino": false,\n        "clickbait": false,\n        "explicit": false,\n        "guns": false,\n        "illegal": false,\n        "intim_goods": false,\n        "shocking": false\n    }\n}\n'))),(0,r.kt)(i.Z,{value:"failed",label:"Response (failed)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "request_id": "42",\n    "item_id": "1564f7ea-5d43-4931-a204-60dd5e4d48b0",\n    "project_id": "image",\n    "project_version": "1",\n    "status": "FAILED",\n    "error": {\n        "code": "DOWNLOAD_ERROR",\n        "message": "Failed to download image",\n        "context": {\n            "failed_images": [\n                "https://example.com/image.png"\n            ]\n        }\n    }\n}\n'))))))),(0,r.kt)(i.Z,{value:"asynch_api",label:"Asynchronous API",mdxType:"TabItem"},(0,r.kt)("p",null,"Async API requires you to make a separate request in order to receive moderation results.\nIn our Async API, there are two separate requests:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#sending-async"},"Event 1"),": you send the content to Membrace;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#retrieving-async"},"Event 2"),": you request results for processed items.")),(0,r.kt)("h3",{id:"sending-async"},"Event 1. Sending Content for Moderation"),(0,r.kt)("h4",{id:"structure-1"},"Structure"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"POST /v1/item/process\nHost: https://api.membrace.ai\nAuthorization: <token>\n")),(0,r.kt)("h4",{id:"payload-1"},"Payload"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "request_id": "42",\n    "project_id": <project_id>,\n    "project_version": "1",\n    "content": <content>\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"request_id")," - String. Optional. This represents the content item ID in your system;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"project_id")," - String. Required;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"project_version"),' - String. Required. Version of the project, initial value "1";'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"content")," - JSON. Required. Your content, structured in accordance with your project.")),(0,r.kt)("h4",{id:"response-1"},"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "request_id": "42",\n    "item_id": <item_id>,\n    "project_id": "text",\n    "project_version": "1",\n    "status": "PENDING"\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"request_id")," - String. Optional. Same ID as the one you've sent our way;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"item_id")," - String. Auto generated UUID-4 string, ID in Membrace system;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"status")," - String. Moderation task status (only ",(0,r.kt)("inlineCode",{parentName:"li"},"PENDING")," value for Asynchronous API).")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"text",label:"Text",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"In this case ",(0,r.kt)("inlineCode",{parentName:"p"},"project_id = text"),"."),(0,r.kt)("h4",{id:"request-2"},"Request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "request_id": "42",\n    "project_id": "text",\n    "project_version": "1",\n    "content": {\n        "text": "Hello world"\n    }\n}\n')),(0,r.kt)("h4",{id:"response-2"},"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "request_id": "42",\n    "item_id": "d9c8bfbe-8632-474e-a117-31df356199b5",\n    "project_id": "text",\n    "project_version": "1",\n    "status": "PENDING"\n}\n'))),(0,r.kt)(i.Z,{value:"image",label:"Image",mdxType:"TabItem"},(0,r.kt)("p",null,"In this case ",(0,r.kt)("inlineCode",{parentName:"p"},"project_id = image"),"."),(0,r.kt)("h4",{id:"request-3"},"Request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "request_id": "42",\n    "project_id": "image",\n    "project_version": "1",\n    "content": {\n        "image_url": "https://example.com/image.png"\n    }\n}\n')),(0,r.kt)("h4",{id:"response-3"},"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "request_id": "42",\n    "item_id": "d48c06b7-7c79-4890-b274-d05353f43b61",\n    "project_id": "image",\n    "project_version": "1",\n    "status": "PENDING"\n}\n')))),(0,r.kt)("h3",{id:"retrieving-async"},"Event 2. Retrieving Results"),(0,r.kt)("p",null,"In order to get the results, it's recommended that you GET them sorted by time of completion. You will receive the first N items as the response, with N depending on specifics of your project.\nIn order to receive the next items, please save the ",(0,r.kt)("inlineCode",{parentName:"p"},"next_results")," & use it as the ",(0,r.kt)("inlineCode",{parentName:"p"},"next_results")," variable.\nYou can skip this variable on the first query or use datetime filters."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GET /v1/item/results?project_id=<project_id>&project_version=<project_version>&status=finished&next_results=<next_results>\nHost: https://api.membrace.ai\nAuthorization: <token>\n")),(0,r.kt)("h4",{id:"response-4"},"Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "items": [<list_of_items>],\n    "has_more": false,\n    "next_results": "177771999702"\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"has_more")," \u2013 if the response contains more than the initial 100 items, this value will be set to ",(0,r.kt)("inlineCode",{parentName:"li"},"true"))),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "items": [\n        {\n            "request_id": "42",\n            "item_id": "c9cc1f01-2e46-4384-87a4-8f775fdf8c3d",\n            "project_id": "text",\n            "project_version": "1",\n            "status": "SUCCESS",\n            "result": {\n                "alcohol": false,\n                "clean_text": true,\n                "clickbait": false,\n                "drugs": false,\n                "erotica": false,\n                "explicit": false,\n                "insult": false,\n                "insult_light": false,\n                "insult_strong": false,\n                "obscene_light": false,\n                "obscene_strong": false,\n                "personal_data": false,\n                "swearing": false\n            }\n        }\n    ],\n    "has_more": false,\n    "next_results": "177771999702"\n}\n')))))}m.isMDXComponent=!0}}]);