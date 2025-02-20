"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[25954],{28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var r=t(96540);const s={},i=r.createContext(s);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}},96110:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"scripting/functions/SetPlayerShopName","title":"SetPlayerShopName","description":"Loads or unloads an interior script for a player (for example the ammunation menu).","source":"@site/docs/scripting/functions/SetPlayerShopName.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetPlayerShopName","permalink":"/pt-BR/docs/scripting/functions/SetPlayerShopName","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/SetPlayerShopName.md","tags":[{"inline":true,"label":"player","permalink":"/pt-BR/docs/tags/player"}],"version":"current","frontMatter":{"title":"SetPlayerShopName","sidebar_label":"SetPlayerShopName","description":"Loads or unloads an interior script for a player (for example the ammunation menu).","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"SetPlayerScore","permalink":"/pt-BR/docs/scripting/functions/SetPlayerScore"},"next":{"title":"SetPlayerSkillLevel","permalink":"/pt-BR/docs/scripting/functions/SetPlayerSkillLevel"}}');var s=t(74848),i=t(28453);const a={title:"SetPlayerShopName",sidebar_label:"SetPlayerShopName",description:"Loads or unloads an interior script for a player (for example the ammunation menu).",tags:["player"]},l=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Resources",id:"related-resources",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Loads or unloads an interior script for a player (for example the ammunation menu)."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"playerid"}),(0,s.jsx)(n.td,{children:"The ID of the player to load the interior script for."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"const shopname[]"}),(0,s.jsxs)(n.td,{children:["The ",(0,s.jsx)(n.a,{href:"../resources/shopnames",children:"shop script"}),' to load. Leave blank ("") to unload scripts.']})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:"This function does not return any specific values."}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp("/enter", cmdtext))\n    {\n        SetPlayerInterior(playerid, 5);\n        SetPlayerPos(playerid, 372.5565, -131.3607, 1001.4922);\n        SetPlayerShopName(playerid, "FDPIZA");\n        SendClientMessage(playerid, 0xFFFFFFFF, "Welcome to Pizza Stack!");\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"This function does not support casino scripts."})}),"\n",(0,s.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"DisableInteriorEnterExits",children:"DisableInteriorEnterExits"}),": Disable the yellow door markers."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"SetPlayerInterior",children:"SetPlayerInterior"}),": Set a player's interior."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"../resources/shopnames",children:"Shop Names"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}}}]);