"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[21893],{7692:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"scripting/functions/GetConsoleVarAsString","title":"GetConsoleVarAsString","description":"Get the string value of a console variable.","source":"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/scripting/functions/GetConsoleVarAsString.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetConsoleVarAsString","permalink":"/zh-cn/docs/scripting/functions/GetConsoleVarAsString","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetConsoleVarAsString.md","tags":[],"version":"current","frontMatter":{"title":"GetConsoleVarAsString","sidebar_label":"GetConsoleVarAsString","description":"Get the string value of a console variable.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"GetConsoleVarAsInt","permalink":"/zh-cn/docs/scripting/functions/GetConsoleVarAsInt"},"next":{"title":"GetCustomModelPath","permalink":"/zh-cn/docs/scripting/functions/GetCustomModelPath"}}');var i=t(74848),r=t(28453);const o={title:"GetConsoleVarAsString",sidebar_label:"GetConsoleVarAsString",description:"Get the string value of a console variable.",tags:[]},l=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Get the string value of a console variable."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"const cvar[]"}),(0,i.jsx)(n.td,{children:"The name of the string variable to get the value of."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"buffer[]"}),(0,i.jsx)(n.td,{children:"An array into which to store the value, passed by reference."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"len = sizeof (buffer)"}),(0,i.jsx)(n.td,{children:"The length of the string that should be stored."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:"The length of the returned string."}),"\n",(0,i.jsx)(n.p,{children:"0 if the specified console variable is not a string or doesn't exist."}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'public OnGameModeInit()\n{\n    new hostname[64];\n    GetConsoleVarAsString("hostname", hostname, sizeof(hostname));\n    printf("Hostname: %s", hostname);\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"When filterscripts or plugins are specified as the varname, this function only returns the name of the first specified filterscript or plugin."})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"Type 'varlist' in the server console to display a list of available console variables and their types."})}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Using this function with anything other than a string (integer, boolean or float) will cause your server to crash. (Fixed in open.mp)"}),"\n",(0,i.jsx)(n.li,{children:"Using it with a nonexistent console variable will also cause your server to crash. (Fixed in open.mp)"}),"\n"]})}),"\n",(0,i.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"GetConsoleVarAsInt",children:"GetConsoleVarAsInt"}),": Retreive a server variable as an integer."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"GetConsoleVarAsBool",children:"GetConsoleVarAsBool"}),": Retreive a server variable as a boolean."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var s=t(96540);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);