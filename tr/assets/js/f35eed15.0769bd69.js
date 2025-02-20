"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[52409],{22687:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"scripting/functions/GetSVarString","title":"GetSVarString","description":"Gets a string server variable\'s value.","source":"@site/docs/scripting/functions/GetSVarString.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetSVarString","permalink":"/tr/docs/scripting/functions/GetSVarString","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetSVarString.md","tags":[{"inline":true,"label":"server variable","permalink":"/tr/docs/tags/server-variable"},{"inline":true,"label":"svar","permalink":"/tr/docs/tags/svar"}],"version":"current","frontMatter":{"title":"GetSVarString","sidebar_label":"GetSVarString","description":"Gets a string server variable\'s value.","tags":["server variable","svar"]},"sidebar":"docsSidebar","previous":{"title":"GetSVarNameAtIndex","permalink":"/tr/docs/scripting/functions/GetSVarNameAtIndex"},"next":{"title":"GetSVarType","permalink":"/tr/docs/scripting/functions/GetSVarType"}}');var s=t(74848),i=t(28453);const a={title:"GetSVarString",sidebar_label:"GetSVarString",description:"Gets a string server variable's value.",tags:["server variable","svar"]},l=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{VersionWarn:t}=r;return t||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t,{version:"SA-MP 0.3.7 R2"}),"\n",(0,s.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(r.p,{children:"Gets a string server variable's value."}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Name"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"const svar[]"}),(0,s.jsxs)(r.td,{children:["The name of the server variable (case-insensitive).",(0,s.jsx)("br",{}),"Assigned in ",(0,s.jsx)(r.a,{href:"SetSVarString",children:"SetSVarString"}),"."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"output[]"}),(0,s.jsx)(r.td,{children:"The array in which to store the string value in, passed by reference."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"len = sizeof (output)"}),(0,s.jsx)(r.td,{children:"The maximum length of the returned string."})]})]})]}),"\n",(0,s.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(r.p,{children:"The length of the string."}),"\n",(0,s.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-c",children:'// set "Version"\nSetSVarString("Version", "0.3.7");\n\n// will print version that server has\nnew string[5 + 1];\nGetSVarString("Version", string, sizeof(string));\nprintf("Version: %s", string);\n'})}),"\n",(0,s.jsx)(r.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"SetSVarInt",children:"SetSVarInt"}),": Set an integer for a server variable."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"GetSVarInt",children:"GetSVarInt"}),": Get a player server as an integer."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"SetSVarString",children:"SetSVarString"}),": Set a string for a server variable."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"SetSVarFloat",children:"SetSVarFloat"}),": Set a float for a server variable."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"GetSVarFloat",children:"GetSVarFloat"}),": Get the previously set float from a server variable."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"DeleteSVar",children:"DeleteSVar"}),": Delete a server variable."]}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>l});var n=t(96540);const s={},i=n.createContext(s);function a(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);