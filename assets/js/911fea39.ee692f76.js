"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[803],{9613:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var o=r(9496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),p=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},w=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(r),w=n,m=d["".concat(c,".").concat(w)]||d[w]||u[w]||a;return r?o.createElement(m,s(s({ref:t},l),{},{components:r})):o.createElement(m,s({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=w;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:n,s[1]=i;for(var p=2;p<a;p++)s[p]=r[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}w.displayName="MDXCreateElement"},2406:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var o=r(795),n=(r(9496),r(9613));const a={sidebar_position:6},s="How does it work ?",i={unversionedId:"how-do-it-work",id:"how-do-it-work",title:"How does it work ?",description:"How does where an asset is being used work?",source:"@site/docs/how-do-it-work.md",sourceDirName:".",slug:"/how-do-it-work",permalink:"/docs/how-do-it-work",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/how-do-it-work.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docsSidebar",previous:{title:"Coverage",permalink:"/docs/coverage"}},c={},p=[{value:"How does where an asset is being used work?",id:"how-does-where-an-asset-is-being-used-work",level:2}],l={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"how-does-it-work-"},"How does it work ?"),(0,n.kt)("h2",{id:"how-does-where-an-asset-is-being-used-work"},"How does where an asset is being used work?"),(0,n.kt)("p",null,"Search for all strings ",(0,n.kt)("inlineCode",{parentName:"p"},'"'),", ",(0,n.kt)("inlineCode",{parentName:"p"},"'")," with a regular expression and match them with the paths to the assets in the assetbox. "),(0,n.kt)("p",null,"For example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'import Example from "../../example.svg";\n')),(0,n.kt)("p",null,"Finds ",(0,n.kt)("inlineCode",{parentName:"p"},'"../../example.svg"'),", converts it to a relative path, and matches it with the paths of the assets in the assetbox."))}u.isMDXComponent=!0}}]);