"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[15581],{25003:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"scripting/functions/NetStats_GetConnectedTime","title":"NetStats_GetConnectedTime","description":"Gets the amount of time (in milliseconds) that a player has been connected to the server for.","source":"@site/docs/scripting/functions/NetStats_GetConnectedTime.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/NetStats_GetConnectedTime","permalink":"/ta/docs/scripting/functions/NetStats_GetConnectedTime","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/NetStats_GetConnectedTime.md","tags":[{"inline":true,"label":"network monitoring","permalink":"/ta/docs/tags/network-monitoring"}],"version":"current","frontMatter":{"title":"NetStats_GetConnectedTime","sidebar_label":"NetStats_GetConnectedTime","description":"Gets the amount of time (in milliseconds) that a player has been connected to the server for.","tags":["network monitoring"]},"sidebar":"docsSidebar","previous":{"title":"NetStats_ConnectionStatus","permalink":"/ta/docs/scripting/functions/NetStats_ConnectionStatus"},"next":{"title":"NetStats_GetIpPort","permalink":"/ta/docs/scripting/functions/NetStats_GetIpPort"}}');var i=n(74848),r=n(28453);const a={title:"NetStats_GetConnectedTime",sidebar_label:"NetStats_GetConnectedTime",description:"Gets the amount of time (in milliseconds) that a player has been connected to the server for.",tags:["network monitoring"]},o=void 0,c={},l=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Gets the amount of time (in milliseconds) that a player has been connected to the server for."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"playerid"}),(0,i.jsx)(t.td,{children:"The ID of the player to get the connected time of."})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(t.p,{children:"This function returns the amount of time (in milliseconds) that a player has been connected to the server for."}),"\n",(0,i.jsx)(t.p,{children:"0 is returned if the player is not connected."}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:'public OnPlayerCommandText(playerid,cmdtext[])\n{\n    if (!strcmp(cmdtext, "/connectedtime"))\n    {\n        new szString[144];\n        format(szString, sizeof(szString), "You have been connected for %i milliseconds.", NetStats_GetConnectedTime(playerid));\n        SendClientMessage(playerid, -1, szString);\n    }\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:'The return value is not reset to zero after changing the game mode (using the RCON command "gmx").'})}),"\n",(0,i.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"GetPlayerNetworkStats",children:"GetPlayerNetworkStats"}),": Gets a player's networkstats and saves it into a string."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"GetNetworkStats",children:"GetNetworkStats"}),": Gets the server's networkstats and saves it into a string."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"NetStats_MessagesReceived",children:"NetStats_MessagesReceived"}),": Get the number of network messages the server has received from the player."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"NetStats_BytesReceived",children:"NetStats_BytesReceived"}),": Get the amount of information (in bytes) that the server has received from the player."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"NetStats_MessagesSent",children:"NetStats_MessagesSent"}),": Get the number of network messages the server has sent to the player."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"NetStats_BytesSent",children:"NetStats_BytesSent"}),": Get the amount of information (in bytes) that the server has sent to the player."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"NetStats_MessagesRecvPerSecond",children:"NetStats_MessagesRecvPerSecond"}),": Get the number of network messages the server has received from the player in the last second."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"NetStats_PacketLossPercent",children:"NetStats_PacketLossPercent"}),": Get a player's packet loss percent."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"NetStats_ConnectionStatus",children:"NetStats_ConnectionStatus"}),": Get a player's connection status."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"NetStats_GetIpPort",children:"NetStats_GetIpPort"}),": Get a player's IP and port."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var s=n(96540);const i={},r=s.createContext(i);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);