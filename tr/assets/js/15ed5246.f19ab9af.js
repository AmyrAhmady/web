"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[26277],{28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>i});var t=s(96540);const l={},r=t.createContext(l);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),t.createElement(r.Provider,{value:n},e.children)}},92796:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"scripting/functions/SendPlayerMessageToPlayer","title":"SendPlayerMessageToPlayer","description":"Sends a message in the name of a player to another player on the server.","source":"@site/docs/scripting/functions/SendPlayerMessageToPlayer.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SendPlayerMessageToPlayer","permalink":"/tr/docs/scripting/functions/SendPlayerMessageToPlayer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/SendPlayerMessageToPlayer.md","tags":[{"inline":true,"label":"player","permalink":"/tr/docs/tags/player"}],"version":"current","frontMatter":{"title":"SendPlayerMessageToPlayer","sidebar_label":"SendPlayerMessageToPlayer","description":"Sends a message in the name of a player to another player on the server.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"SendPlayerMessageToAll","permalink":"/tr/docs/scripting/functions/SendPlayerMessageToAll"},"next":{"title":"SendRconCommand","permalink":"/tr/docs/scripting/functions/SendRconCommand"}}');var l=s(74848),r=s(28453);const a={title:"SendPlayerMessageToPlayer",sidebar_label:"SendPlayerMessageToPlayer",description:"Sends a message in the name of a player to another player on the server.",tags:["player"]},i=void 0,d={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"Sends a message in the name of a player to another player on the server. The message will appear in the chat box but can only be seen by the user specified with 'playerid'. The line will start with the sender's name in their color, followed by the message in white."}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Name"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"playerid"}),(0,l.jsx)(n.td,{children:"The ID of the player who will receive the message."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"senderid"}),(0,l.jsx)(n.td,{children:"The sender's ID. If invalid, the message will not be sent."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"const format[]"}),(0,l.jsx)(n.td,{children:"The message that will be sent."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"OPEN_MP_TAGS:..."}),(0,l.jsx)(n.td,{children:"Indefinite number of arguments of any tag."})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"true"})," - The function was executed successfully."]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"false"})," - The function failed to execute. This means the player specified does not exist."]}),"\n",(0,l.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:"public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, \"/hello\", true))\n    {\n        SendPlayerMessageToPlayer(0, playerid, \"Hello ID 0!\"); // Will send a message to the user with the ID 0 in the name of the user who typed '/hello'.\n        // Assuming 'playerid' is called Tenpenny, the output will be 'Tenpenny: Hello ID 0!'\n        return 1;\n    }\n    return 0;\n}\n"})}),"\n",(0,l.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,l.jsx)(n.admonition,{type:"warning",children:(0,l.jsx)(n.p,{children:"Avoid using format specifiers in your messages without formatting the string that is sent. It will result in crashes otherwise."})}),"\n",(0,l.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"SendPlayerMessageToAll",children:"SendPlayerMessageToAll"}),": Force a player to send text for all players."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"SendClientMessage",children:"SendClientMessage"}),": Send a message to a certain player."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"SendClientMessageToAll",children:"SendClientMessageToAll"}),": Send a message to all players."]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../callbacks/OnPlayerText",children:"OnPlayerText"}),": Called when a player sends a message via the chat."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}}}]);