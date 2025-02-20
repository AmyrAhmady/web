"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[21875],{28453:(n,e,s)=>{s.d(e,{R:()=>a,x:()=>d});var t=s(96540);const i={},o=t.createContext(i);function a(n){const e=t.useContext(o);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:a(n.components),t.createElement(o.Provider,{value:e},n.children)}},37807:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>r,contentTitle:()=>d,default:()=>m,frontMatter:()=>a,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"scripting/functions/SendRconCommand","title":"SendRconCommand","description":"Sends an RCON (Remote Console) command.","source":"@site/docs/scripting/functions/SendRconCommand.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SendRconCommand","permalink":"/id/docs/scripting/functions/SendRconCommand","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/SendRconCommand.md","tags":[{"inline":true,"label":"administration","permalink":"/id/docs/tags/administration"}],"version":"current","frontMatter":{"title":"SendRconCommand","sidebar_label":"SendRconCommand","description":"Sends an RCON (Remote Console) command.","tags":["administration"]},"sidebar":"docsSidebar","previous":{"title":"SendPlayerMessageToPlayer","permalink":"/id/docs/scripting/functions/SendPlayerMessageToPlayer"},"next":{"title":"Set3DTextLabelDrawDistance","permalink":"/id/docs/scripting/functions/Set3DTextLabelDrawDistance"}}');var i=s(74848),o=s(28453);const a={title:"SendRconCommand",sidebar_label:"SendRconCommand",description:"Sends an RCON (Remote Console) command.",tags:["administration"]},d=void 0,r={},l=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function c(n){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(e.p,{children:"Sends an RCON (Remote Console) command."}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Name"}),(0,i.jsx)(e.th,{children:"Description"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"const format[]"}),(0,i.jsx)(e.td,{children:"The RCON command to be executed."})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"OPEN_MP_TAGS:..."}),(0,i.jsx)(e.td,{children:"Indefinite number of arguments of any tag."})]})]})]}),"\n",(0,i.jsx)(e.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(e.p,{children:"This function always returns 1."}),"\n",(0,i.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-c",children:'SendRconCommand("gmx");\n// This is a scripted version of typing "/rcon gmx" in-game.\n// GMX restarts the game mode.\n\n// Example using format()\nnew szMapName[] = "Los Santos";\nnew szCmd[64];\nformat(szCmd, sizeof(szCmd), "mapname %s", szMapName);\nSendRconCommand(szCmd);\n\n// PRO TIP: You don\'t need `format` in open.mp\nSendRconCommand("game.map %s", szMapName);\n'})}),"\n",(0,i.jsx)(e.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsx)(e.admonition,{type:"warning",children:(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Does not support login, due to the lack of a 'playerid' parameter."}),"\n",(0,i.jsx)(e.li,{children:"'password 0' will remove the server's password if one is set."}),"\n",(0,i.jsxs)(e.li,{children:["This function will result in ",(0,i.jsx)(e.a,{href:"../callbacks/OnRconCommand",children:"OnRconCommand"})," being called."]}),"\n"]})}),"\n",(0,i.jsx)(e.admonition,{type:"info",children:(0,i.jsxs)(e.p,{children:["See ",(0,i.jsx)(e.a,{href:"../../server/config.json",children:"config.json"})]})}),"\n",(0,i.jsx)(e.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"IsPlayerAdmin",children:"IsPlayerAdmin"}),": Checks if a player is logged into RCON."]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"../callbacks/OnRconCommand",children:"OnRconCommand"}),": Called when an RCON command is sent."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"../callbacks/OnRconLoginAttempt",children:"OnRconLoginAttempt"}),": Called when an attempt to login to RCON is made."]}),"\n"]})]})}function m(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(c,{...n})}):c(n)}}}]);