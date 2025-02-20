"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[25579],{28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>l});var i=t(96540);const s={},r=i.createContext(s);function c(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(r.Provider,{value:n},e.children)}},97405:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>a,frontMatter:()=>c,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"scripting/functions/SendClientCheck","title":"SendClientCheck","description":"Perform a memory check on the client.","source":"@site/docs/scripting/functions/SendClientCheck.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SendClientCheck","permalink":"/ro/docs/scripting/functions/SendClientCheck","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/SendClientCheck.md","tags":[],"version":"current","frontMatter":{"title":"SendClientCheck","sidebar_label":"SendClientCheck","description":"Perform a memory check on the client.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"SendChat","permalink":"/ro/docs/scripting/functions/SendChat"},"next":{"title":"SendClientMessage","permalink":"/ro/docs/scripting/functions/SendClientMessage"}}');var s=t(74848),r=t(28453);const c={title:"SendClientCheck",sidebar_label:"SendClientCheck",description:"Perform a memory check on the client.",tags:[]},l=void 0,d={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Perform a memory check on the client."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"playerid"}),(0,s.jsx)(n.td,{children:"The ID of the player to check."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"type"}),(0,s.jsxs)(n.td,{children:["The type of check to perform. ",(0,s.jsx)(n.a,{href:"../resources/opcodes",children:"See here"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"memAddr"}),(0,s.jsx)(n.td,{children:"The base address to check."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"memOffset"}),(0,s.jsx)(n.td,{children:"The offset from the base address."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"byteCount"}),(0,s.jsx)(n.td,{children:"The number of bytes to check."})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:"1: The function was executed successfully."}),"\n",(0,s.jsx)(n.p,{children:"0: The function failed to execute. The player is not connected."}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'public OnPlayerConnect(playerid)\n{\n    SendClientCheck(playerid, 0x48, 0, 0, 2);\n    return 1;\n}\n\npublic OnClientCheckResponse(playerid, actionid, memaddr, retndata)\n{\n    if (actionid == 0x48) // or 72\n    {\n        print("The player is connecting using the PC client.");\n    }\n    return 1;\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"There are 6 types of requests that the client processes (2, 5, 69, 70, 71, 72)"}),"\n",(0,s.jsx)(n.li,{children:"Type 72 doesn't use any of the other arguments [arg | offset | size]."}),"\n",(0,s.jsx)(n.li,{children:"The arg returns the uptime of the computer."}),"\n"]})}),"\n",(0,s.jsxs)(n.admonition,{type:"warning",children:[(0,s.jsxs)(n.p,{children:[(0,s.jsxs)(n.strong,{children:["SA",":MP"," Server"]}),": This function only works when it is in a filterscript."]}),(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Open Multiplayer Server"}),": This functions normally inside a gamemode / filterscript."]})]}),"\n",(0,s.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"IsPlayerUsingOfficialClient",children:"IsPlayerUsingOfficialClient"}),": Check if the player is using the official SA-MP client."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"IsPlayerUsingOmp",children:"IsPlayerUsingOmp"}),": Check if the player is using the open.mp launcher."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"../callbacks/OnClientCheckResponse",children:"OnClientCheckResponse"}),": called when a SendClientCheck request completes."]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}}}]);