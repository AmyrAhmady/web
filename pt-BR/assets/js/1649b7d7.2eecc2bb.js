"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[95001],{28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>r});var s=t(96540);const o={},l=s.createContext(o);function i(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(l.Provider,{value:n},e.children)}},95556:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"scripting/functions/GetConsoleVarAsBool","title":"GetConsoleVarAsBool","description":"Get the boolean value of a console variable.","source":"@site/docs/scripting/functions/GetConsoleVarAsBool.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetConsoleVarAsBool","permalink":"/pt-BR/docs/scripting/functions/GetConsoleVarAsBool","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetConsoleVarAsBool.md","tags":[],"version":"current","frontMatter":{"title":"GetConsoleVarAsBool","sidebar_label":"GetConsoleVarAsBool","description":"Get the boolean value of a console variable.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"GetAvailableClasses","permalink":"/pt-BR/docs/scripting/functions/GetAvailableClasses"},"next":{"title":"GetConsoleVarAsFloat","permalink":"/pt-BR/docs/scripting/functions/GetConsoleVarAsFloat"}}');var o=t(74848),l=t(28453);const i={title:"GetConsoleVarAsBool",sidebar_label:"GetConsoleVarAsBool",description:"Get the boolean value of a console variable.",tags:[]},r=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,o.jsx)(n.p,{children:"Get the boolean value of a console variable."}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Name"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"const cvar[]"}),(0,o.jsx)(n.td,{children:"The name of the boolean variable to get the value of."})]})})]}),"\n",(0,o.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,o.jsx)(n.p,{children:"The value of the specified console variable. 0 if the specified console variable is not a boolean or doesn't exist."}),"\n",(0,o.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-c",children:'public OnGameModeInit()\n{\n    new queryEnabled = GetConsoleVarAsBool("enable_query");\n    if (!queryEnabled)\n    {\n        print("WARNING: Querying is disabled. The server will appear offline in the server browser.");\n    }\n    return 1;\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsx)(n.p,{children:"Type 'varlist' in the server console to display a list of available console variables and their types."})}),"\n",(0,o.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"GetConsoleVarAsString",children:"GetConsoleVarAsString"}),": Retreive a server variable as a string."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"GetConsoleVarAsInt",children:"GetConsoleVarAsInt"}),": Retreive a server variable as an integer."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}}}]);