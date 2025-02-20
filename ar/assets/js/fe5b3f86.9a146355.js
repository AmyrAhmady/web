"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[30504],{24804:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"scripting/functions/SetSVarString","title":"SetSVarString","description":"Set a string server variable.","source":"@site/docs/scripting/functions/SetSVarString.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetSVarString","permalink":"/ar/docs/scripting/functions/SetSVarString","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/SetSVarString.md","tags":[{"inline":true,"label":"server variable","permalink":"/ar/docs/tags/server-variable"},{"inline":true,"label":"svar","permalink":"/ar/docs/tags/svar"}],"version":"current","frontMatter":{"title":"SetSVarString","sidebar_label":"SetSVarString","description":"Set a string server variable.","tags":["server variable","svar"]},"sidebar":"docsSidebar","previous":{"title":"SetSVarInt","permalink":"/ar/docs/scripting/functions/SetSVarInt"},"next":{"title":"SetServerRule","permalink":"/ar/docs/scripting/functions/SetServerRule"}}');var s=t(74848),i=t(28453);const a={title:"SetSVarString",sidebar_label:"SetSVarString",description:"Set a string server variable.",tags:["server variable","svar"]},l=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{VersionWarn:t}=r;return t||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t,{version:"SA-MP 0.3.7 R2"}),"\n",(0,s.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(r.p,{children:"Set a string server variable."}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Name"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"const svar[]"}),(0,s.jsx)(r.td,{children:"The name of the server variable."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"const value[]"}),(0,s.jsx)(r.td,{children:"The string to be set."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"OPEN_MP_TAGS:..."}),(0,s.jsx)(r.td,{children:"Indefinite number of arguments of any tag."})]})]})]}),"\n",(0,s.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"true"})," - The function executed successfully."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"false"})," - The function failed to execute. The variable name is null or over 40 characters."]}),"\n",(0,s.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-c",children:'// set "Version"\nSetSVarString("Version", "0.3.7");\n\n// will print version that server has\nnew string[5 + 1];\nGetSVarString("Version", string, sizeof(string));\nprintf("Version: %s", string);\n'})}),"\n",(0,s.jsx)(r.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"SetSVarInt",children:"SetSVarInt"}),": Set an integer for a server variable."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"GetSVarInt",children:"GetSVarInt"}),": Get a player server as an integer."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"GetSVarString",children:"GetSVarString"}),": Get the previously set string from a server variable."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"SetSVarFloat",children:"SetSVarFloat"}),": Set a float for a server variable."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"GetSVarFloat",children:"GetSVarFloat"}),": Get the previously set float from a server variable."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"DeleteSVar",children:"DeleteSVar"}),": Delete a server variable."]}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>l});var n=t(96540);const s={},i=n.createContext(s);function a(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);