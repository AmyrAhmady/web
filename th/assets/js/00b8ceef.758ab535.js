"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[52420],{28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>a});var t=r(96540);const s={},i=t.createContext(s);function l(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(i.Provider,{value:n},e.children)}},71870:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"scripting/functions/GetPlayerIp","title":"GetPlayerIp","description":"Get the specified player\'s IP address and store it in a string.","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/functions/GetPlayerIp.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerIp","permalink":"/th/docs/scripting/functions/GetPlayerIp","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetPlayerIp.md","tags":[{"inline":true,"label":"player","permalink":"/th/docs/tags/player"},{"inline":true,"label":"ip address","permalink":"/th/docs/tags/ip-address"}],"version":"current","frontMatter":{"title":"GetPlayerIp","sidebar_label":"GetPlayerIp","description":"Get the specified player\'s IP address and store it in a string.","tags":["player","ip address"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerInterior","permalink":"/th/docs/scripting/functions/GetPlayerInterior"},"next":{"title":"GetPlayerKeys","permalink":"/th/docs/scripting/functions/GetPlayerKeys"}}');var s=r(74848),i=r(28453);const l={title:"GetPlayerIp",sidebar_label:"GetPlayerIp",description:"Get the specified player's IP address and store it in a string.",tags:["player","ip address"]},a=void 0,c={},d=[{value:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",level:2},{value:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",id:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",level:2},{value:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",level:2},{value:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",id:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",level:2},{value:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",children:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22"}),"\n",(0,s.jsx)(n.p,{children:"Get the specified player's IP address and store it in a string."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"playerid"}),(0,s.jsx)(n.td,{children:"The ID of the player to get the IP address of."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ip[]"}),(0,s.jsx)(n.td,{children:"The string to store the player's IP address in, passed by reference."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"len"}),(0,s.jsx)(n.td,{children:"The maximum length of the IP address (recommended 16)."})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",children:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19"}),"\n",(0,s.jsx)(n.p,{children:"The player's IP address is stored in the specified array."}),"\n",(0,s.jsx)(n.h2,{id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",children:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'public OnPlayerConnect(playerid)\n{\n    new plrIP[16];\n    GetPlayerIp(playerid, plrIP, sizeof(plrIP));\n    if (!strcmp(plrIP, "127.0.0.1"))\n    {\n        SendClientMessage(playerid, 0xFFFFFFFF, "Welcome to your server, master\xa0:)");\n    }\n    return 1;\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",children:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"PAWN is case-sensitive. GetPlayerIP will not work."})}),"\n",(0,s.jsxs)(n.admonition,{type:"warning",children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"SA-MP server"}),": This function ",(0,s.jsx)(n.strong,{children:"does not work"})," when used in ",(0,s.jsx)(n.a,{href:"../callbacks/OnPlayerDisconnect",children:"OnPlayerDisconnect"})," because the player is already disconnected. It will return an invalid IP (255.255.255.255).\nSave players' IPs under ",(0,s.jsx)(n.a,{href:"../callbacks/OnPlayerConnect",children:"OnPlayerConnect"})," if they need to be used under ",(0,s.jsx)(n.a,{href:"../callbacks/OnPlayerDisconnect",children:"OnPlayerDisconnect"}),"."]}),(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"open.mp server"}),": This function ",(0,s.jsx)(n.strong,{children:"work"})," when used in ",(0,s.jsx)(n.a,{href:"../callbacks/OnPlayerDisconnect",children:"OnPlayerDisconnect"}),"."]})]}),"\n",(0,s.jsx)(n.h2,{id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",children:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"../functions/NetStats_GetIpPort",children:"NetStats_GetIpPort"}),": Get a player's IP and port."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"../functions/GetPlayerName",children:"GetPlayerName"}),": Get a player's name."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"../functions/GetPlayerPing",children:"GetPlayerPing"}),": Get the ping of a player."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"../functions/GetPlayerVerion",children:"GetPlayerVersion"}),": Get a player's client-version."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"../callbacks/OnIncomingConnection",children:"OnIncomingConnection"}),": Called when a player is attempting to connect to the server."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"../callbacks/OnPlayerConnect",children:"OnPlayerConnect"}),": Called when a player connects to the server."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"../callbacks/OnPlayerDisconnect",children:"OnPlayerDisconnect"}),": Called when a player leaves the server."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}}}]);