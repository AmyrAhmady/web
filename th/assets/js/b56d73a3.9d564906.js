"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[76844],{1704:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"scripting/functions/SendPlayerMessageToPlayer","title":"SendPlayerMessageToPlayer","description":"Sends a message in the name of a player to another player on the server.","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/functions/SendPlayerMessageToPlayer.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SendPlayerMessageToPlayer","permalink":"/th/docs/scripting/functions/SendPlayerMessageToPlayer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/SendPlayerMessageToPlayer.md","tags":[{"inline":true,"label":"player","permalink":"/th/docs/tags/player"}],"version":"current","frontMatter":{"title":"SendPlayerMessageToPlayer","sidebar_label":"SendPlayerMessageToPlayer","description":"Sends a message in the name of a player to another player on the server.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"SendPlayerMessageToAll","permalink":"/th/docs/scripting/functions/SendPlayerMessageToAll"},"next":{"title":"SendRconCommand","permalink":"/th/docs/scripting/functions/SendRconCommand"}}');var l=s(74848),r=s(28453);const a={title:"SendPlayerMessageToPlayer",sidebar_label:"SendPlayerMessageToPlayer",description:"Sends a message in the name of a player to another player on the server.",tags:["player"]},i=void 0,o={},d=[{value:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",level:2},{value:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",id:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",level:2},{value:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",level:2},{value:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",id:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",level:2},{value:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",level:2}];function c(e){const n={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",children:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22"}),"\n",(0,l.jsx)(n.p,{children:"Sends a message in the name of a player to another player on the server. The message will appear in the chat box but can only be seen by the user specified with 'playerid'. The line will start with the sender's name in their color, followed by the message in white."}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Name"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"playerid"}),(0,l.jsx)(n.td,{children:"The ID of the player who will receive the message."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"senderid"}),(0,l.jsx)(n.td,{children:"The sender's ID. If invalid, the message will not be sent."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"const message[]"}),(0,l.jsx)(n.td,{children:"The message that will be sent."})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",children:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19"}),"\n",(0,l.jsx)(n.p,{children:"1: The function was executed successfully."}),"\n",(0,l.jsx)(n.p,{children:"0: The function failed to execute. This means the player specified does not exist."}),"\n",(0,l.jsx)(n.h2,{id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",children:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:"public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, \"/hello\", true))\n    {\n        SendPlayerMessageToPlayer(0, playerid, \"Hello ID 0!\"); //Will send a message to the user with the ID 0 in the name of the user who typed '/hello'.\n        // Assuming 'playerid' is called Tenpenny, the output will be 'Tenpenny: Hello ID 0!'\n        return 1;\n    }\n    return 0;\n}\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",children:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01"}),"\n",(0,l.jsx)(n.admonition,{type:"warning",children:(0,l.jsx)(n.p,{children:"Avoid using format specifiers in your messages without formatting the string that is sent. It will result in crashes otherwise."})}),"\n",(0,l.jsx)(n.h2,{id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",children:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"SendPlayerMessageToAll: Force a player to send text for all players."}),"\n",(0,l.jsx)(n.li,{children:"SendClientMessage: Send a message to a certain player."}),"\n",(0,l.jsx)(n.li,{children:"SendClientMessageToAll: Send a message to all players."}),"\n",(0,l.jsx)(n.li,{children:"OnPlayerText: Called when a player sends a message via the chat."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>i});var t=s(96540);const l={},r=t.createContext(l);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);