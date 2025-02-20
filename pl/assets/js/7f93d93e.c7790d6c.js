"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[14993],{26621:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"scripting/functions/GetServerVarAsString","title":"GetServerVarAsString","description":"Get the string value of a server variable.","source":"@site/docs/scripting/functions/GetServerVarAsString.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetServerVarAsString","permalink":"/pl/docs/scripting/functions/GetServerVarAsString","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetServerVarAsString.md","tags":[],"version":"current","frontMatter":{"title":"GetServerVarAsString","sidebar_label":"GetServerVarAsString","description":"Get the string value of a server variable.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"GetServerVarAsInt","permalink":"/pl/docs/scripting/functions/GetServerVarAsInt"},"next":{"title":"GetSpawnInfo","permalink":"/pl/docs/scripting/functions/GetSpawnInfo"}}');var s=n(74848),i=n(28453);const a={title:"GetServerVarAsString",sidebar_label:"GetServerVarAsString",description:"Get the string value of a server variable.",tags:[]},o=void 0,l={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsx)(t.p,{children:"This function, as of 0.3.7 R2, is deprecated. Please see GetConsoleVarAsString"})}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Get the string value of a server variable."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"const varname[]"}),(0,s.jsx)(t.td,{children:"The name of the string variable to get the value of."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"buffer[]"}),(0,s.jsx)(t.td,{children:"An array into which to store the value, passed by reference."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"len"}),(0,s.jsx)(t.td,{children:"The length of the string that should be stored."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(t.p,{children:"The length of the returned string. 0 if the specified server variable is not a string or doesn't exist."}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-c",children:'public OnGameModeInit()\n{\n    new hostname[64];\n    GetServerVarAsString("hostname", hostname, sizeof(hostname));\n    printf("Hostname: %s", hostname);\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsx)(t.p,{children:"When filterscripts or plugins is specified as the varname, this function only returns the name of the first specified filterscript or plugin. This is a bug."})}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsx)(t.p,{children:"Type 'varlist' in the server console to display a list of available server variables and their types."})}),"\n",(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsx)(t.p,{children:"Using this function on anything other than a string (int, bool or float) or a nonexistent server variable, will crash your server! This is a bug."})}),"\n",(0,s.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"GetServerVarAsInt",children:"GetServerVarAsInt"}),": Retreive a server variable as an integer."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"GetServerVarAsBool",children:"GetServerVarAsBool"}),": Retreive a server variable as a boolean."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var r=n(96540);const s={},i=r.createContext(s);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);