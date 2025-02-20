"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[80966],{4234:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"scripting/functions/DeleteSVar","title":"DeleteSVar","description":"Deletes a previously set server variable.","source":"@site/docs/scripting/functions/DeleteSVar.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/DeleteSVar","permalink":"/sr/docs/scripting/functions/DeleteSVar","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/DeleteSVar.md","tags":[{"inline":true,"label":"server variable","permalink":"/sr/docs/tags/server-variable"},{"inline":true,"label":"svar","permalink":"/sr/docs/tags/svar"}],"version":"current","frontMatter":{"title":"DeleteSVar","sidebar_label":"DeleteSVar","description":"Deletes a previously set server variable.","tags":["server variable","svar"]},"sidebar":"docsSidebar","previous":{"title":"DeletePlayer3DTextLabel","permalink":"/sr/docs/scripting/functions/DeletePlayer3DTextLabel"},"next":{"title":"DestroyActor","permalink":"/sr/docs/scripting/functions/DestroyActor"}}');var s=t(74848),i=t(28453);const a={title:"DeleteSVar",sidebar_label:"DeleteSVar",description:"Deletes a previously set server variable.",tags:["server variable","svar"]},l=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(r.p,{children:"Deletes a previously set server variable."}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Name"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"const svar[]"}),(0,s.jsx)(r.td,{children:"The name of the server variable to delete."})]})})]}),"\n",(0,s.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"true"})," - The function executed successfully."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"false"})," - The function failed to execute. There is no variable set with the given name."]}),"\n",(0,s.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-c",children:'SetSVarInt("SomeVarName", 69);\n\n// Later on, when the variable is no longer needed...\n\nDeleteSVar("SomeVarName");\n'})}),"\n",(0,s.jsx)(r.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsx)(r.admonition,{type:"tip",children:(0,s.jsx)(r.p,{children:"Once a variable is deleted, attempts to retrieve the value will return 0 for integers and 0.0 for floats and NULL for strings."})}),"\n",(0,s.jsx)(r.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"SetSVarInt",children:"SetSVarInt"}),": Set an integer for a server variable."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"GetSVarInt",children:"GetSVarInt"}),": Get a player server as an integer."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"SetSVarString",children:"SetSVarString"}),": Set a string for a server variable."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"GetSVarString",children:"GetSVarString"}),": Get the previously set string from a server variable."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"SetSVarFloat",children:"SetSVarFloat"}),": Set a float for a server variable."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"GetSVarFloat",children:"GetSVarFloat"}),": Get the previously set float from a server variable."]}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>l});var n=t(96540);const s={},i=n.createContext(s);function a(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);