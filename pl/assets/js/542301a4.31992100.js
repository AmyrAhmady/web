"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[92831],{27982:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"scripting/functions/DeletePVar","title":"DeletePVar","description":"Deletes a previously set player variable.","source":"@site/docs/scripting/functions/DeletePVar.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/DeletePVar","permalink":"/pl/docs/scripting/functions/DeletePVar","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/DeletePVar.md","tags":[{"inline":true,"label":"player variable","permalink":"/pl/docs/tags/player-variable"},{"inline":true,"label":"pvar","permalink":"/pl/docs/tags/pvar"}],"version":"current","frontMatter":{"title":"DeletePVar","sidebar_label":"DeletePVar","description":"Deletes a previously set player variable.","tags":["player variable","pvar"]},"sidebar":"docsSidebar","previous":{"title":"Delete3DTextLabel","permalink":"/pl/docs/scripting/functions/Delete3DTextLabel"},"next":{"title":"DeletePlayer3DTextLabel","permalink":"/pl/docs/scripting/functions/DeletePlayer3DTextLabel"}}');var l=r(74848),a=r(28453);const i={title:"DeletePVar",sidebar_label:"DeletePVar",description:"Deletes a previously set player variable.",tags:["player variable","pvar"]},s=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(t.p,{children:"Deletes a previously set player variable."}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Name"}),(0,l.jsx)(t.th,{children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"playerid"}),(0,l.jsx)(t.td,{children:"The ID of the player whose player variable to delete."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"const pvar[]"}),(0,l.jsx)(t.td,{children:"The name of the player variable to delete."})]})]})]}),"\n",(0,l.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"true"})," - The function executed successfully."]}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"false"})," - The function failed to execute. Either the player specified isn't connected or there is no variable set with the given name."]}),"\n",(0,l.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-c",children:'SetPVarInt(playerid, "SomeVarName", 69);\n\n// Later on, when the variable is no longer needed...\n\nDeletePVar(playerid, "SomeVarName");\n'})}),"\n",(0,l.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,l.jsx)(t.admonition,{type:"tip",children:(0,l.jsx)(t.p,{children:"Once a variable is deleted, attempts to retrieve the value will return 0 for integers and 0.0 for floats and NULL for strings."})}),"\n",(0,l.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"SetPVarInt",children:"SetPVarInt"}),": Set an integer for a player variable."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"GetPVarInt",children:"GetPVarInt"}),": Get the previously set integer from a player variable."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"SetPVarString",children:"SetPVarString"}),": Set a string for a player variable."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"GetPVarString",children:"GetPVarString"}),": Get the previously set string from a player variable."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"SetPVarFloat",children:"SetPVarFloat"}),": Set a float for a player variable."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"GetPVarFloat",children:"GetPVarFloat"}),": Get the previously set float from a player variable."]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>s});var n=r(96540);const l={},a=n.createContext(l);function i(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);