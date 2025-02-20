"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[49720],{28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>l});var n=r(96540);const s={},i=n.createContext(s);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(i.Provider,{value:t},e.children)}},99358:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"scripting/functions/GetSVarFloat","title":"GetSVarFloat","description":"Gets a float server variable\'s value.","source":"@site/docs/scripting/functions/GetSVarFloat.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetSVarFloat","permalink":"/zh-tw/docs/scripting/functions/GetSVarFloat","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetSVarFloat.md","tags":[{"inline":true,"label":"server variable","permalink":"/zh-tw/docs/tags/server-variable"},{"inline":true,"label":"svar","permalink":"/zh-tw/docs/tags/svar"}],"version":"current","frontMatter":{"title":"GetSVarFloat","sidebar_label":"GetSVarFloat","description":"Gets a float server variable\'s value.","tags":["server variable","svar"]},"sidebar":"docsSidebar","previous":{"title":"GetRunningTimers","permalink":"/zh-tw/docs/scripting/functions/GetRunningTimers"},"next":{"title":"GetSVarInt","permalink":"/zh-tw/docs/scripting/functions/GetSVarInt"}}');var s=r(74848),i=r(28453);const a={title:"GetSVarFloat",sidebar_label:"GetSVarFloat",description:"Gets a float server variable's value.",tags:["server variable","svar"]},l=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{VersionWarn:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r,{version:"SA-MP 0.3.7 R2"}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Gets a float server variable's value."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"const svar[]"}),(0,s.jsxs)(t.td,{children:["The name of the server variable (case-insensitive).",(0,s.jsx)("br",{}),"Assigned in ",(0,s.jsx)(t.a,{href:"SetSVarFloat",children:"SetSVarFloat"}),"."]})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(t.p,{children:"The float value of the specified server variable."}),"\n",(0,s.jsx)(t.p,{children:"It will still return 0.0 if the variable is not set."}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-c",children:'// set "Version"\nSetSVarFloat("Version", 0.37);\n\n// will print version that server has\nprintf("Version: %.2f", GetSVarFloat("Version"));\n'})}),"\n",(0,s.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"SetSVarInt",children:"SetSVarInt"}),": Set an integer for a server variable."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"GetSVarInt",children:"GetSVarInt"}),": Get a player server as an integer."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"SetSVarString",children:"SetSVarString"}),": Set a string for a server variable."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"GetSVarString",children:"GetSVarString"}),": Get the previously set string from a server variable."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"SetSVarFloat",children:"SetSVarFloat"}),": Set a float for a server variable."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"DeleteSVar",children:"DeleteSVar"}),": Delete a server variable."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}}}]);