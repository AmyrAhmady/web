"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[78983],{28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>o});var n=s(96540);const r={},i=n.createContext(r);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(i.Provider,{value:t},e.children)}},70161:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"scripting/functions/NetStats_GetIpPort","title":"NetStats_GetIpPort","description":"Get a player\'s IP and port.","source":"@site/docs/scripting/functions/NetStats_GetIpPort.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/NetStats_GetIpPort","permalink":"/hu/docs/scripting/functions/NetStats_GetIpPort","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/NetStats_GetIpPort.md","tags":[{"inline":true,"label":"network monitoring","permalink":"/hu/docs/tags/network-monitoring"},{"inline":true,"label":"ip address","permalink":"/hu/docs/tags/ip-address"}],"version":"current","frontMatter":{"title":"NetStats_GetIpPort","sidebar_label":"NetStats_GetIpPort","description":"Get a player\'s IP and port.","tags":["network monitoring","ip address"]},"sidebar":"docsSidebar","previous":{"title":"NetStats_GetConnectedTime","permalink":"/hu/docs/scripting/functions/NetStats_GetConnectedTime"},"next":{"title":"NetStats_MessagesReceived","permalink":"/hu/docs/scripting/functions/NetStats_MessagesReceived"}}');var r=s(74848),i=s(28453);const a={title:"NetStats_GetIpPort",sidebar_label:"NetStats_GetIpPort",description:"Get a player's IP and port.",tags:["network monitoring","ip address"]},o=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Get a player's IP and port."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"playerid"}),(0,r.jsx)(t.td,{children:"The ID of the player to get the IP and port of."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"output[]"}),(0,r.jsx)(t.td,{children:"A string array to store the IP and port in, passed by reference."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"size = sizeof (output)"}),(0,r.jsx)(t.td,{children:"The maximum length of the IP/port. 22 is recommended."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(t.p,{children:"The player's IP and port is stored in the specified array."}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, "/ipandport"))\n    {\n        new dest[22];\n        NetStats_GetIpPort(playerid, dest, sizeof(dest));\n\n        new szString[144];\n        format(szString, sizeof(szString), "Your current IP and port: %s.", dest);\n        SendClientMessage(playerid, -1, szString);\n    }\n    return 1;\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"GetPlayerIp",children:"GetPlayerIp"}),": Get a player's IP."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"GetPlayerNetworkStats",children:"GetPlayerNetworkStats"}),": Gets a player's networkstats and saves it into a string."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"GetNetworkStats",children:"GetNetworkStats"}),": Gets the server's networkstats and saves it into a string."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"NetStats_GetConnectedTime",children:"NetStats_GetConnectedTime"}),": Get the time that a player has been connected for."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"NetStats_MessagesReceived",children:"NetStats_MessagesReceived"}),": Get the number of network messages the server has received from the player."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"NetStats_BytesReceived",children:"NetStats_BytesReceived"}),": Get the amount of information (in bytes) that the server has received from the player."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"NetStats_MessagesSent",children:"NetStats_MessagesSent"}),": Get the number of network messages the server has sent to the player."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"NetStats_BytesSent",children:"NetStats_BytesSent"}),": Get the amount of information (in bytes) that the server has sent to the player."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"NetStats_MessagesRecvPerSecond",children:"NetStats_MessagesRecvPerSecond"}),": Get the number of network messages the server has received from the player in the last second."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"NetStats_PacketLossPercent",children:"NetStats_PacketLossPercent"}),": Get a player's packet loss percent."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"NetStats_ConnectionStatus",children:"NetStats_ConnectionStatus"}),": Get a player's connection status."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}}}]);