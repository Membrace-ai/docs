"use strict";(self.webpackChunkmembrace=self.webpackChunkmembrace||[]).push([[274],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(a),d=r,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8870:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={},i="How Membrace moderation works",l={unversionedId:"how-it-work",id:"version-hitl/how-it-work",title:"How Membrace moderation works",description:"Membrace is a moderation service that labels content using both AI models and human experts.",source:"@site/versioned_docs/version-hitl/how-it-work.md",sourceDirName:".",slug:"/how-it-work",permalink:"/es/hitl/how-it-work",draft:!1,tags:[],version:"hitl",frontMatter:{}},s={},c=[{value:"How it works",id:"pipeline",level:2},{value:"What <strong>Membrace</strong> can do",id:"use-case",level:2},{value:"Advantages",id:"advantages",level:2}],u={toc:c};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-membrace-moderation-works"},"How Membrace moderation works"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Membrace")," is a moderation service that labels content using both AI models and human experts."),(0,r.kt)("h2",{id:"pipeline"},"How it works"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You upload your data via the API.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Most of the data is processed automatically, and you get the results right away.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In difficult cases, when automated labeling isn't certain about the quality, the data is also checked by human experts. The results of human labeling are sent to you. They are also used for training the AI model."))),(0,r.kt)("p",null,"This data processing cycle lets the model adapt to new content and non-standard queries."),(0,r.kt)("img",{src:a(446).Z,alt:"Enter address",width:"600"}),(0,r.kt)("h2",{id:"use-case"},"What ",(0,r.kt)("strong",{parentName:"h2"},"Membrace")," can do"),(0,r.kt)("p",null,"We have solutions for various industries:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Ecommerce")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Image moderation (compliance checks)."),(0,r.kt)("li",{parentName:"ul"},"Data deduplication (for goods and services)."),(0,r.kt)("li",{parentName:"ul"},"Filtering out prohibited goods or services."),(0,r.kt)("li",{parentName:"ul"},"Moderation and analysis of customer reviews.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Online communities")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Moderation of posts and comments."),(0,r.kt)("li",{parentName:"ul"},"Profile checks."),(0,r.kt)("li",{parentName:"ul"},"Filtering out prohibited goods or services.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Online dating")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Profile checks."),(0,r.kt)("li",{parentName:"ul"},"Moderation of chats and messages.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Gaming")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In-game content checks."),(0,r.kt)("li",{parentName:"ul"},"Moderation of chats and reviews."),(0,r.kt)("li",{parentName:"ul"},"Identification of fake profiles.")),(0,r.kt)("p",null,"Check our ","[website]","(",(0,r.kt)("a",{parentName:"p",href:"https://membrace.ai/industries#/tab/436460030-1"},"https://membrace.ai/industries#/tab/436460030-1")," to learn more about Membrace and what it can do for your business.)."),(0,r.kt)("h2",{id:"advantages"},"Advantages"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Flexibility.")," 35 customizable moderation classes and 30 AI models that we can adapt to your needs."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Learning ability.")," Our models keep learning and improving thanks to data obtained through manual labeling."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Service and support.")," At your request, our manager will contact you to discuss the details and find the best solution for your project. Once we have all the information we need, we'll set everything up."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"High accuracy.")," We use reliable quality control methods to check both our human experts and our AI models. This way, we make sure that our labeling results are more than 95% accurate, even in non-standard cases."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Scalability.")," We can process more than 10 million tasks per day. This means we can deliver results even during spikes caused by spam attacks, high-profile events, flash mobs, and other issues."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Real-time moderation.")," The estimated response time for AI models is 200 milliseconds.")))}p.isMDXComponent=!0},446:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/how-it-work-ac68533de945485b5cdcef3621f6987b.png"}}]);