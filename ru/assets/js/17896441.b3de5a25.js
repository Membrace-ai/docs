(self.webpackChunkmembrace=self.webpackChunkmembrace||[]).push([[918],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>m,kt:()=>p});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),i=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=i(n),p=r,f=u["".concat(s,".").concat(p)]||u[p]||d[p]||o;return n?a.createElement(f,l(l({ref:t},m),{},{components:n})):a.createElement(f,l({ref:t},m))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var i=2;i<o;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7565:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Mt});var a=n(7294),r=n(1944),o=n(902);const l=a.createContext(null);function c(e){let{children:t,content:n}=e;const r=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return a.createElement(l.Provider,{value:r},t)}function s(){const e=(0,a.useContext)(l);if(null===e)throw new o.i6("DocProvider");return e}function i(){const{metadata:e,frontMatter:t,assets:n}=s();return a.createElement(r.d,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var m=n(6010),d=n(7524),u=n(7462),p=n(5999),f=n(9960);function h(e){const{permalink:t,title:n,subLabel:r,isNext:o}=e;return a.createElement(f.Z,{className:(0,m.Z)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},r&&a.createElement("div",{className:"pagination-nav__sublabel"},r),a.createElement("div",{className:"pagination-nav__label"},n))}function g(e){const{previous:t,next:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,p.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&a.createElement(h,(0,u.Z)({},t,{subLabel:a.createElement(p.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&a.createElement(h,(0,u.Z)({},n,{subLabel:a.createElement(p.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}function v(){const{metadata:e}=s();return a.createElement(g,{previous:e.previous,next:e.next})}var b=n(2263),E=n(143),y=n(5281),k=n(373),N=n(4477);const L={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(p.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(p.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function C(e){const t=L[e.versionMetadata.banner];return a.createElement(t,e)}function T(e){let{versionLabel:t,to:n,onClick:r}=e;return a.createElement(p.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(f.Z,{to:n,onClick:r},a.createElement(p.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function _(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:r}}=(0,b.Z)(),{pluginId:o}=(0,E.gA)({failfast:!0}),{savePreferredVersionName:l}=(0,k.J)(o),{latestDocSuggestion:c,latestVersionSuggestion:s}=(0,E.Jo)(o),i=c??(d=s).docs.find((e=>e.id===d.mainDocId));var d;return a.createElement("div",{className:(0,m.Z)(t,y.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(C,{siteTitle:r,versionMetadata:n})),a.createElement("div",{className:"margin-top--md"},a.createElement(T,{versionLabel:s.label,to:i.path,onClick:()=>l(s.name)})))}function w(e){let{className:t}=e;const n=(0,N.E)();return n.banner?a.createElement(_,{className:t,versionMetadata:n}):null}function Z(e){let{className:t}=e;const n=(0,N.E)();return n.badge?a.createElement("span",{className:(0,m.Z)(t,y.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(p.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}function x(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return a.createElement(p.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function B(e){let{lastUpdatedBy:t}=e;return a.createElement(p.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function O(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:r}=e;return a.createElement("span",{className:y.k.common.lastUpdated},a.createElement(p.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(x,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:r?a.createElement(B,{lastUpdatedBy:r}):""}},"Last updated{atDate}{byUser}"),!1)}const A="iconEdit_Z9Sw";function H(e){let{className:t,...n}=e;return a.createElement("svg",(0,u.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,m.Z)(A,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function j(e){let{editUrl:t}=e;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:y.k.common.editThisPage},a.createElement(H,null),a.createElement(p.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}const S="tag_zVej",M="tagRegular_sFm0",I="tagWithCount_h2kH";function P(e){let{permalink:t,label:n,count:r}=e;return a.createElement(f.Z,{href:t,className:(0,m.Z)(S,r?I:M)},n,r&&a.createElement("span",null,r))}const U="tags_jXut",z="tag_QGVx";function V(e){let{tags:t}=e;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(p.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,m.Z)(U,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:n}=e;return a.createElement("li",{key:n,className:z},a.createElement(P,{label:t,permalink:n}))}))))}const D="lastUpdated_vwxv";function R(e){return a.createElement("div",{className:(0,m.Z)(y.k.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(V,e)))}function $(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:r,formattedLastUpdatedAt:o}=e;return a.createElement("div",{className:(0,m.Z)(y.k.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},t&&a.createElement(j,{editUrl:t})),a.createElement("div",{className:(0,m.Z)("col",D)},(n||r)&&a.createElement(O,{lastUpdatedAt:n,formattedLastUpdatedAt:o,lastUpdatedBy:r})))}function W(){const{metadata:e}=s(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:r,lastUpdatedBy:o,tags:l}=e,c=l.length>0,i=!!(t||n||o);return c||i?a.createElement("footer",{className:(0,m.Z)(y.k.docs.docFooter,"docusaurus-mt-lg")},c&&a.createElement(R,{tags:l}),i&&a.createElement($,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:o,formattedLastUpdatedAt:r})):null}var F=n(6043),q=n(6668);function G(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...r}=e;n>=0?t[n].children.push(r):a.push(r)})),a}function J(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=J({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function Q(e){const t=e.getBoundingClientRect();return t.top===t.bottom?Q(e.parentNode):t}function X(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>Q(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(Q(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function Y(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,q.L)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function K(e){const t=(0,a.useRef)(void 0),n=Y();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:r,minHeadingLevel:o,maxHeadingLevel:l}=e;function c(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),c=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let r=t;r<=n;r+=1)a.push(`h${r}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:o,maxHeadingLevel:l}),s=X(c,{anchorTopOffset:n.current}),i=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===i)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,n])}function ee(e){let{toc:t,className:n,linkClassName:r,isChild:o}=e;return t.length?a.createElement("ul",{className:o?void 0:n},t.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:`#${e.id}`,className:r??void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(ee,{isChild:!0,toc:e.children,className:n,linkClassName:r}))))):null}const te=a.memo(ee);function ne(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:l,maxHeadingLevel:c,...s}=e;const i=(0,q.L)(),m=l??i.tableOfContents.minHeadingLevel,d=c??i.tableOfContents.maxHeadingLevel,p=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:r}=e;return(0,a.useMemo)((()=>J({toc:G(t),minHeadingLevel:n,maxHeadingLevel:r})),[t,n,r])}({toc:t,minHeadingLevel:m,maxHeadingLevel:d});return K((0,a.useMemo)((()=>{if(r&&o)return{linkClassName:r,linkActiveClassName:o,minHeadingLevel:m,maxHeadingLevel:d}}),[r,o,m,d])),a.createElement(te,(0,u.Z)({toc:p,className:n,linkClassName:r},s))}const ae="tocCollapsibleButton_TO0P",re="tocCollapsibleButtonExpanded_MG3E";function oe(e){let{collapsed:t,...n}=e;return a.createElement("button",(0,u.Z)({type:"button"},n,{className:(0,m.Z)("clean-btn",ae,!t&&re,n.className)}),a.createElement(p.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const le="tocCollapsible_ETCw",ce="tocCollapsibleContent_vkbj",se="tocCollapsibleExpanded_sAul";function ie(e){let{toc:t,className:n,minHeadingLevel:r,maxHeadingLevel:o}=e;const{collapsed:l,toggleCollapsed:c}=(0,F.u)({initialState:!0});return a.createElement("div",{className:(0,m.Z)(le,!l&&se,n)},a.createElement(oe,{collapsed:l,onClick:c}),a.createElement(F.z,{lazy:!0,className:ce,collapsed:l},a.createElement(ne,{toc:t,minHeadingLevel:r,maxHeadingLevel:o})))}const me="tocMobile_ITEo";function de(){const{toc:e,frontMatter:t}=s();return a.createElement(ie,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,m.Z)(y.k.docs.docTocMobile,me)})}const ue="tableOfContents_bqdL";function pe(e){let{className:t,...n}=e;return a.createElement("div",{className:(0,m.Z)(ue,"thin-scrollbar",t)},a.createElement(ne,(0,u.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}function fe(){const{toc:e,frontMatter:t}=s();return a.createElement(pe,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:y.k.docs.docTocDesktop})}const he="anchorWithStickyNavbar_LWe7",ge="anchorWithHideOnScrollNavbar_WYt5";function ve(e){let{as:t,id:n,...r}=e;const{navbar:{hideOnScroll:o}}=(0,q.L)();return"h1"!==t&&n?a.createElement(t,(0,u.Z)({},r,{className:(0,m.Z)("anchor",o?ge:he),id:n}),r.children,a.createElement("a",{className:"hash-link",href:`#${n}`,title:(0,p.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):a.createElement(t,(0,u.Z)({},r,{id:void 0}))}var be=n(3905),Ee=n(5742);var ye=n(2389),ke=n(2949);function Ne(){const{prism:e}=(0,q.L)(),{colorMode:t}=(0,ke.I)(),n=e.theme,a=e.darkTheme||n;return"dark"===t?a:n}var Le=n(7594),Ce=n.n(Le);const Te=/title=(?<quote>["'])(?<title>.*?)\1/,_e=/\{(?<range>[\d,-]+)\}/,we={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function Ze(e,t){const n=e.map((e=>{const{start:n,end:a}=we[e];return`(?:${n}\\s*(${t.flatMap((e=>{var t,n;return[e.line,null==(t=e.block)?void 0:t.start,null==(n=e.block)?void 0:n.end].filter(Boolean)})).join("|")})\\s*${a})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function xe(e,t){let n=e.replace(/\n$/,"");const{language:a,magicComments:r,metastring:o}=t;if(o&&_e.test(o)){const e=o.match(_e).groups.range;if(0===r.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${o}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=r[0].className,a=Ce()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(a),code:n}}if(void 0===a)return{lineClassNames:{},code:n};const l=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return Ze(["js","jsBlock"],t);case"jsx":case"tsx":return Ze(["js","jsBlock","jsx"],t);case"html":return Ze(["js","jsBlock","html"],t);case"python":case"py":case"bash":return Ze(["bash"],t);case"markdown":case"md":return Ze(["html","jsx","bash"],t);default:return Ze(Object.keys(we),t)}}(a,r),c=n.split("\n"),s=Object.fromEntries(r.map((e=>[e.className,{start:0,range:""}]))),i=Object.fromEntries(r.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),m=Object.fromEntries(r.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),d=Object.fromEntries(r.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let p=0;p<c.length;){const e=c[p].match(l);if(!e){p+=1;continue}const t=e.slice(1).find((e=>void 0!==e));i[t]?s[i[t]].range+=`${p},`:m[t]?s[m[t]].start=p:d[t]&&(s[d[t]].range+=`${s[d[t]].start}-${p-1},`),c.splice(p,1)}n=c.join("\n");const u={};return Object.entries(s).forEach((e=>{let[t,{range:n}]=e;Ce()(n).forEach((e=>{u[e]??=[],u[e].push(t)}))})),{lineClassNames:u,code:n}}const Be="codeBlockContainer_Ckt0";function Oe(e){let{as:t,...n}=e;const r=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[a,r]=e;const o=t[a];o&&"string"==typeof r&&(n[o]=r)})),n}(Ne());return a.createElement(t,(0,u.Z)({},n,{style:r,className:(0,m.Z)(n.className,Be,y.k.common.codeBlock)}))}const Ae={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function He(e){let{children:t,className:n}=e;return a.createElement(Oe,{as:"pre",tabIndex:0,className:(0,m.Z)(Ae.codeBlockStandalone,"thin-scrollbar",n)},a.createElement("code",{className:Ae.codeBlockLines},t))}const je={attributes:!0,characterData:!0,childList:!0,subtree:!0};function Se(e,t){const[n,r]=(0,a.useState)(),l=(0,a.useCallback)((()=>{var t;r(null==(t=e.current)?void 0:t.closest("[role=tabpanel][hidden]"))}),[e,r]);(0,a.useEffect)((()=>{l()}),[l]),function(e,t,n){void 0===n&&(n=je);const r=(0,o.zX)(t),l=(0,o.Ql)(n);(0,a.useEffect)((()=>{const t=new MutationObserver(r);return e&&t.observe(e,l),()=>t.disconnect()}),[e,r,l])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),l())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}const Me={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var Ie={Prism:n(7410).Z,theme:Me};function Pe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ue(){return Ue=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Ue.apply(this,arguments)}var ze=/\r\n|\r|\n/,Ve=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},De=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},Re=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=Ue({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=Ue({},n,{backgroundColor:null}),r};function $e(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}const We=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),Pe(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?Re(e.theme,e.language):void 0;return t.themeDict=n})),Pe(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,o=Ue({},$e(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==r&&(o.style=void 0!==o.style?Ue({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),Pe(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return o[n[0]];var l=a?{display:"inline-block"}:{},c=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(c))}})),Pe(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,o=e.token,l=Ue({},$e(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(l.style=void 0!==l.style?Ue({},l.style,r):r),void 0!==n&&(l.key=n),a&&(l.className+=" "+a),l})),Pe(this,"tokenize",(function(e,t,n,a){var r={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",r);var o=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,o=this.getThemeDict(this.props),l=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],o=0,l=0,c=[],s=[c];l>-1;){for(;(o=a[l]++)<r[l];){var i=void 0,m=t[l],d=n[l][o];if("string"==typeof d?(m=l>0?m:["plain"],i=d):(m=De(m,d.type),d.alias&&(m=De(m,d.alias)),i=d.content),"string"==typeof i){var u=i.split(ze),p=u.length;c.push({types:m,content:u[0]});for(var f=1;f<p;f++)Ve(c),s.push(c=[]),c.push({types:m,content:u[f]})}else l++,t.push(m),n.push(i),a.push(0),r.push(i.length)}l--,t.pop(),n.pop(),a.pop(),r.pop()}return Ve(c),s}(void 0!==l?this.tokenize(t,a,l,n):[a]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component),Fe="codeLine_lJS_",qe="codeLineNumber_Tfdd",Ge="codeLineContent_feaV";function Je(e){let{line:t,classNames:n,showLineNumbers:r,getLineProps:o,getTokenProps:l}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const c=o({line:t,className:(0,m.Z)(n,r&&Fe)}),s=t.map(((e,t)=>a.createElement("span",(0,u.Z)({key:t},l({token:e,key:t})))));return a.createElement("span",c,r?a.createElement(a.Fragment,null,a.createElement("span",{className:qe}),a.createElement("span",{className:Ge},s)):s,a.createElement("br",null))}const Qe={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function Xe(e){let{code:t,className:n}=e;const[r,o]=(0,a.useState)(!1),l=(0,a.useRef)(void 0),c=(0,a.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;const a=document.createElement("textarea"),r=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const o=document.getSelection();let l=!1;o.rangeCount>0&&(l=o.getRangeAt(0)),n.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch{}a.remove(),l&&(o.removeAllRanges(),o.addRange(l)),r&&r.focus()}(t),o(!0),l.current=window.setTimeout((()=>{o(!1)}),1e3)}),[t]);return(0,a.useEffect)((()=>()=>window.clearTimeout(l.current)),[]),a.createElement("button",{type:"button","aria-label":r?(0,p.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,p.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,p.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,m.Z)("clean-btn",n,Qe.copyButton,r&&Qe.copyButtonCopied),onClick:c},a.createElement("span",{className:Qe.copyButtonIcons,"aria-hidden":"true"},a.createElement("svg",{className:Qe.copyButtonIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),a.createElement("svg",{className:Qe.copyButtonSuccessIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}const Ye="wordWrapButtonIcon_Bwma",Ke="wordWrapButtonEnabled_EoeP";function et(e){let{className:t,onClick:n,isEnabled:r}=e;const o=(0,p.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return a.createElement("button",{type:"button",onClick:n,className:(0,m.Z)("clean-btn",t,r&&Ke),"aria-label":o,title:o},a.createElement("svg",{className:Ye,viewBox:"0 0 24 24","aria-hidden":"true"},a.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}function tt(e){let{children:t,className:n="",metastring:r,title:o,showLineNumbers:l,language:c}=e;const{prism:{defaultLanguage:s,magicComments:i}}=(0,q.L)(),d=c??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return null==t?void 0:t.replace(/language-/,"")}(n)??s,p=Ne(),f=function(){const[e,t]=(0,a.useState)(!1),[n,r]=(0,a.useState)(!1),o=(0,a.useRef)(null),l=(0,a.useCallback)((()=>{const n=o.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[o,e]),c=(0,a.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=o.current,n=e>t||o.current.querySelector("code").hasAttribute("style");r(n)}),[o]);return Se(o,c),(0,a.useEffect)((()=>{c()}),[e,c]),(0,a.useEffect)((()=>(window.addEventListener("resize",c,{passive:!0}),()=>{window.removeEventListener("resize",c)})),[c]),{codeBlockRef:o,isEnabled:e,isCodeScrollable:n,toggle:l}}(),h=function(e){var t;return(null==e||null==(t=e.match(Te))?void 0:t.groups.title)??""}(r)||o,{lineClassNames:g,code:v}=xe(t,{metastring:r,language:d,magicComments:i}),b=l??function(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}(r);return a.createElement(Oe,{as:"div",className:(0,m.Z)(n,d&&!n.includes(`language-${d}`)&&`language-${d}`)},h&&a.createElement("div",{className:Ae.codeBlockTitle},h),a.createElement("div",{className:Ae.codeBlockContent},a.createElement(We,(0,u.Z)({},Ie,{theme:p,code:v,language:d??"text"}),(e=>{let{className:t,tokens:n,getLineProps:r,getTokenProps:o}=e;return a.createElement("pre",{tabIndex:0,ref:f.codeBlockRef,className:(0,m.Z)(t,Ae.codeBlock,"thin-scrollbar")},a.createElement("code",{className:(0,m.Z)(Ae.codeBlockLines,b&&Ae.codeBlockLinesWithNumbering)},n.map(((e,t)=>a.createElement(Je,{key:t,line:e,getLineProps:r,getTokenProps:o,classNames:g[t],showLineNumbers:b})))))})),a.createElement("div",{className:Ae.buttonGroup},(f.isEnabled||f.isCodeScrollable)&&a.createElement(et,{className:Ae.codeButton,onClick:()=>f.toggle(),isEnabled:f.isEnabled}),a.createElement(Xe,{className:Ae.codeButton,code:v}))))}function nt(e){let{children:t,...n}=e;const r=(0,ye.Z)(),o=function(e){return a.Children.toArray(e).some((e=>(0,a.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),l="string"==typeof o?tt:He;return a.createElement(l,(0,u.Z)({key:String(r)},n),o)}const at="details_lb9f",rt="isBrowser_bmU9",ot="collapsibleContent_i85q";function lt(e){return!!e&&("SUMMARY"===e.tagName||lt(e.parentElement))}function ct(e,t){return!!e&&(e===t||ct(e.parentElement,t))}function st(e){let{summary:t,children:n,...r}=e;const o=(0,ye.Z)(),l=(0,a.useRef)(null),{collapsed:c,setCollapsed:s}=(0,F.u)({initialState:!r.open}),[i,d]=(0,a.useState)(r.open);return a.createElement("details",(0,u.Z)({},r,{ref:l,open:i,"data-collapsed":c,className:(0,m.Z)(at,o&&rt,r.className),onMouseDown:e=>{lt(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;lt(t)&&ct(t,l.current)&&(e.preventDefault(),c?(s(!1),d(!0)):s(!0))}}),t??a.createElement("summary",null,"Details"),a.createElement(F.z,{lazy:!1,collapsed:c,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{s(e),d(!e)}},a.createElement("div",{className:ot},n)))}const it="details_b_Ee";function mt(e){let{...t}=e;return a.createElement(st,(0,u.Z)({},t,{className:(0,m.Z)("alert alert--info",it,t.className)}))}function dt(e){return a.createElement(ve,e)}const ut="containsTaskList_mC6p";const pt="img_ev3q";const ft="admonition_LlT9",ht="admonitionHeading_tbUL",gt="admonitionIcon_kALy",vt="admonitionContent_S0QG";const bt={note:{infimaClassName:"secondary",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:a.createElement(p.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:a.createElement(p.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:a.createElement(p.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:a.createElement(p.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 16 16"},a.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:a.createElement(p.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},Et={secondary:"note",important:"info",success:"tip",warning:"danger"};function yt(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=a.Children.toArray(e),n=t.find((e=>{var t;return a.isValidElement(e)&&"mdxAdmonitionTitle"===(null==(t=e.props)?void 0:t.mdxType)})),r=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:r}}(e.children);return{...e,title:e.title??t,children:n}}const kt={head:function(e){const t=a.Children.map(e.children,(e=>a.isValidElement(e)?function(e){var t;if(null!=(t=e.props)&&t.mdxType&&e.props.originalType){const{mdxType:t,originalType:n,...r}=e.props;return a.createElement(e.props.originalType,r)}return e}(e):e));return a.createElement(Ee.Z,e,t)},code:function(e){const t=["a","abbr","b","br","button","cite","code","del","dfn","em","i","img","input","ins","kbd","label","object","output","q","ruby","s","small","span","strong","sub","sup","time","u","var","wbr"];return a.Children.toArray(e.children).every((e=>{var n;return"string"==typeof e&&!e.includes("\n")||(0,a.isValidElement)(e)&&t.includes(null==(n=e.props)?void 0:n.mdxType)}))?a.createElement("code",e):a.createElement(nt,e)},a:function(e){return a.createElement(f.Z,e)},pre:function(e){var t;return a.createElement(nt,(0,a.isValidElement)(e.children)&&"code"===(null==(t=e.children.props)?void 0:t.originalType)?e.children.props:{...e})},details:function(e){const t=a.Children.toArray(e.children),n=t.find((e=>{var t;return a.isValidElement(e)&&"summary"===(null==(t=e.props)?void 0:t.mdxType)})),r=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return a.createElement(mt,(0,u.Z)({},e,{summary:n}),r)},ul:function(e){return a.createElement("ul",(0,u.Z)({},e,{className:(t=e.className,(0,m.Z)(t,(null==t?void 0:t.includes("contains-task-list"))&&ut))}));var t},img:function(e){return a.createElement("img",(0,u.Z)({loading:"lazy"},e,{className:(t=e.className,(0,m.Z)(t,pt))}));var t},h1:e=>a.createElement(dt,(0,u.Z)({as:"h1"},e)),h2:e=>a.createElement(dt,(0,u.Z)({as:"h2"},e)),h3:e=>a.createElement(dt,(0,u.Z)({as:"h3"},e)),h4:e=>a.createElement(dt,(0,u.Z)({as:"h4"},e)),h5:e=>a.createElement(dt,(0,u.Z)({as:"h5"},e)),h6:e=>a.createElement(dt,(0,u.Z)({as:"h6"},e)),admonition:function(e){const{children:t,type:n,title:r,icon:o}=yt(e),l=function(e){const t=Et[e]??e;return bt[t]||(console.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`),bt.info)}(n),c=r??l.label,{iconComponent:s}=l,i=o??a.createElement(s,null);return a.createElement("div",{className:(0,m.Z)(y.k.common.admonition,y.k.common.admonitionType(e.type),"alert",`alert--${l.infimaClassName}`,ft)},a.createElement("div",{className:ht},a.createElement("span",{className:gt},i),c),a.createElement("div",{className:vt},t))},mermaid:n(1875).Z};function Nt(e){let{children:t}=e;return a.createElement(be.Zo,{components:kt},t)}function Lt(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=s();return t.hide_title||void 0!==n?null:e.title}();return a.createElement("div",{className:(0,m.Z)(y.k.docs.docMarkdown,"markdown")},n&&a.createElement("header",null,a.createElement(ve,{as:"h1"},n)),a.createElement(Nt,null,t))}var Ct=n(3438),Tt=n(8596),_t=n(4996);function wt(e){return a.createElement("svg",(0,u.Z)({viewBox:"0 0 24 24"},e),a.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const Zt={breadcrumbsContainer:"breadcrumbsContainer_Z_bl",breadcrumbHomeIcon:"breadcrumbHomeIcon_OVgt"};function xt(e){let{children:t,href:n,isLast:r}=e;const o="breadcrumbs__link";return r?a.createElement("span",{className:o,itemProp:"name"},t):n?a.createElement(f.Z,{className:o,href:n,itemProp:"item"},a.createElement("span",{itemProp:"name"},t)):a.createElement("span",{className:o},t)}function Bt(e){let{children:t,active:n,index:r,addMicrodata:o}=e;return a.createElement("li",(0,u.Z)({},o&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,m.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,a.createElement("meta",{itemProp:"position",content:String(r+1)}))}function Ot(){const e=(0,_t.Z)("/");return a.createElement("li",{className:"breadcrumbs__item"},a.createElement(f.Z,{"aria-label":(0,p.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,m.Z)("breadcrumbs__link",Zt.breadcrumbsItemLink),href:e},a.createElement(wt,{className:Zt.breadcrumbHomeIcon})))}function At(){const e=(0,Ct.s1)(),t=(0,Tt.Ns)();return e?a.createElement("nav",{className:(0,m.Z)(y.k.docs.docBreadcrumbs,Zt.breadcrumbsContainer),"aria-label":(0,p.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},a.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&a.createElement(Ot,null),e.map(((t,n)=>{const r=n===e.length-1;return a.createElement(Bt,{key:n,active:r,index:n,addMicrodata:!!t.href},a.createElement(xt,{href:t.href,isLast:r},t.label))})))):null}const Ht="docItemContainer_Djhp",jt="docItemCol_VOVn";function St(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=s(),n=(0,d.i)(),r=e.hide_table_of_contents,o=!r&&t.length>0;return{hidden:r,mobile:o?a.createElement(de,null):void 0,desktop:!o||"desktop"!==n&&"ssr"!==n?void 0:a.createElement(fe,null)}}();return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,m.Z)("col",!n.hidden&&jt)},a.createElement(w,null),a.createElement("div",{className:Ht},a.createElement("article",null,a.createElement(At,null),a.createElement(Z,null),n.mobile,a.createElement(Lt,null,t),a.createElement(W,null)),a.createElement(v,null))),n.desktop&&a.createElement("div",{className:"col col--3"},n.desktop))}function Mt(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`,n=e.content;return a.createElement(c,{content:e.content},a.createElement(r.FG,{className:t},a.createElement(i,null),a.createElement(St,null,a.createElement(n,null))))}},4477:(e,t,n)=>{"use strict";n.d(t,{E:()=>c,q:()=>l});var a=n(7294),r=n(902);const o=a.createContext(null);function l(e){let{children:t,version:n}=e;return a.createElement(o.Provider,{value:n},t)}function c(){const e=(0,a.useContext)(o);if(null===e)throw new r.i6("DocsVersionProvider");return e}},7594:(e,t)=>{function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,r,o]=t;if(a&&o){a=parseInt(a),o=parseInt(o);const e=a<o?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(o+=e);for(let t=a;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);