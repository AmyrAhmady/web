"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[80099],{28453:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>l});var n=t(96540);const s={},i=n.createContext(s);function a(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(i.Provider,{value:r},e.children)}},84095:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>l,default:()=>v,frontMatter:()=>a,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"scripting/functions/GetServerVarAsInt","title":"GetServerVarAsInt","description":"Get the integer value of a server variable.","source":"@site/docs/scripting/functions/GetServerVarAsInt.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetServerVarAsInt","permalink":"/pl/docs/scripting/functions/GetServerVarAsInt","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetServerVarAsInt.md","tags":[],"version":"current","frontMatter":{"title":"GetServerVarAsInt","sidebar_label":"GetServerVarAsInt","description":"Get the integer value of a server variable.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"GetServerVarAsBool","permalink":"/pl/docs/scripting/functions/GetServerVarAsBool"},"next":{"title":"GetServerVarAsString","permalink":"/pl/docs/scripting/functions/GetServerVarAsString"}}');var s=t(74848),i=t(28453);const a={title:"GetServerVarAsInt",sidebar_label:"GetServerVarAsInt",description:"Get the integer value of a server variable.",tags:[]},l=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.admonition,{type:"warning",children:(0,s.jsx)(r.p,{children:"This function, as of 0.3.7 R2, is deprecated. Please see GetConsoleVarAsInt"})}),"\n",(0,s.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(r.p,{children:"Get the integer value of a server variable."}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Name"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"const varname[]"}),(0,s.jsx)(r.td,{children:"The name of the integer variable to get the value of."})]})})]}),"\n",(0,s.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(r.p,{children:"The value of the specified server variable. 0 if the specified server variable is not an integer or doesn't exist."}),"\n",(0,s.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-c",children:'new serverPort = GetServerVarAsInt("port");\nprintf("Server Port: %i", serverPort);\n'})}),"\n",(0,s.jsx)(r.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsx)(r.admonition,{type:"tip",children:(0,s.jsx)(r.p,{children:"Type 'varlist' in the server console to display a list of available server variables and their types."})}),"\n",(0,s.jsx)(r.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"GetServerVarAsString",children:"GetServerVarAsString"}),": Retreive a server variable as a string."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"GetServerVarAsBool",children:"GetServerVarAsBool"}),": Retreive a server variable as a boolean."]}),"\n"]})]})}function v(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}}}]);