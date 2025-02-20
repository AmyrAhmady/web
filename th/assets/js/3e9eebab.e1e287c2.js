"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[18201],{1438:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"scripting/functions/NetStats_GetConnectedTime","title":"NetStats_GetConnectedTime","description":"Gets the amount of time (in milliseconds) that a player has been connected to the server for.","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/functions/NetStats_GetConnectedTime.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/NetStats_GetConnectedTime","permalink":"/th/docs/scripting/functions/NetStats_GetConnectedTime","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/NetStats_GetConnectedTime.md","tags":[],"version":"current","frontMatter":{"title":"NetStats_GetConnectedTime","sidebar_label":"NetStats_GetConnectedTime","description":"Gets the amount of time (in milliseconds) that a player has been connected to the server for.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"NetStats_ConnectionStatus","permalink":"/th/docs/scripting/functions/NetStats_ConnectionStatus"},"next":{"title":"NetStats_GetIpPort","permalink":"/th/docs/scripting/functions/NetStats_GetIpPort"}}');var i=n(74848),r=n(28453);const o={title:"NetStats_GetConnectedTime",sidebar_label:"NetStats_GetConnectedTime",description:"Gets the amount of time (in milliseconds) that a player has been connected to the server for.",tags:[]},c=void 0,a={},d=[{value:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",level:2},{value:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",id:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",level:2},{value:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",level:2},{value:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",id:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",level:2},{value:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",children:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22"}),"\n",(0,i.jsx)(t.p,{children:"Gets the amount of time (in milliseconds) that a player has been connected to the server for."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"playerid"}),(0,i.jsx)(t.td,{children:"The ID of the player to get the connected time of."})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",children:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19"}),"\n",(0,i.jsx)(t.p,{children:"This function returns the amount of time (in milliseconds) that a player has been connected to the server for. 0 is returned if the player is not connected."}),"\n",(0,i.jsx)(t.h2,{id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",children:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:'public OnPlayerCommandText(playerid,cmdtext[])\n{\n    if (!strcmp(cmdtext, "/connectedtime"))\n    {\n        new szString[144];\n        format(szString, sizeof(szString), "You have been connected for %i milliseconds.", NetStats_GetConnectedTime(playerid));\n        SendClientMessage(playerid, -1, szString);\n    }\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",children:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01"}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:'The return value is not reset to zero after changing the game mode (using the RCON command "gmx").'})}),"\n",(0,i.jsx)(t.h2,{id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",children:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/th/docs/scripting/functions/GetPlayerNetworkStats",children:"GetPlayerNetworkStats"}),": Gets a player networkstats and saves it into a string."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/th/docs/scripting/functions/GetNetworkStats",children:"GetNetworkStats"}),": Gets the servers networkstats and saves it into a string."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/th/docs/scripting/functions/NetStats_MessagesReceived",children:"NetStats_MessagesReceived"}),": Get the number of network messages the server has received from the player."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/th/docs/scripting/functions/NetStats_BytesReceived",children:"NetStats_BytesReceived"}),": Get the amount of information (in bytes) that the server has received from the player."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"../functions/NetStats_MessagesSent",children:"NetStats_MessagesSent"}),": Get the number of network messages the server has sent to the player."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/th/docs/scripting/functions/NetStats_BytesSent",children:"NetStats_BytesSent"}),": Get the amount of information (in bytes) that the server has sent to the player."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/th/docs/scripting/functions/NetStats_MessagesRecvPerSecond",children:"NetStats_MessagesRecvPerSecond"}),": Get the number of network messages the server has received from the player in the last second."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/th/docs/scripting/functions/NetStats_PacketLossPercent",children:"NetStats_PacketLossPercent"}),": Get a player's packet loss percent."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/th/docs/scripting/functions/NetStats_ConnectionStatus",children:"NetStats_ConnectionStatus"}),": Get a player's connection status."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/th/docs/scripting/functions/NetStats_GetIpPort",children:"NetStats_GetIpPort"}),": Get a player's IP and port."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var s=n(96540);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);