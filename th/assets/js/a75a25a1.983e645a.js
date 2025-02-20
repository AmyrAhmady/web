"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[75004],{28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>c});var n=s(96540);const r={},i=n.createContext(r);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(i.Provider,{value:t},e.children)}},87436:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"scripting/functions/GetNetworkStats","title":"GetNetworkStats","description":"Gets the server\'s network stats and stores them in a string.","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/functions/GetNetworkStats.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetNetworkStats","permalink":"/th/docs/scripting/functions/GetNetworkStats","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetNetworkStats.md","tags":[],"version":"current","frontMatter":{"title":"GetNetworkStats","sidebar_label":"GetNetworkStats","description":"Gets the server\'s network stats and stores them in a string.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"GetMyPos","permalink":"/th/docs/scripting/functions/GetMyPos"},"next":{"title":"GetObjectAttachedData","permalink":"/th/docs/scripting/functions/GetObjectAttachedData"}}');var r=s(74848),i=s(28453);const a={title:"GetNetworkStats",sidebar_label:"GetNetworkStats",description:"Gets the server's network stats and stores them in a string.",tags:[]},c=void 0,o={},d=[{value:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",level:2},{value:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",id:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",level:2},{value:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",level:2},{value:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",children:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22"}),"\n",(0,r.jsx)(t.p,{children:"Gets the server's network stats and stores them in a string."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"retstr[]"}),(0,r.jsx)(t.td,{children:"The string to store the network stats in, passed by reference."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"retstr_size"}),(0,r.jsx)(t.td,{children:"The length of the string to be stored."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",children:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19"}),"\n",(0,r.jsx)(t.p,{children:"This function always returns 1."}),"\n",(0,r.jsx)(t.h2,{id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",children:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:'public OnPlayerCommandText(playerid,cmdtext[])\n{\n    if (!strcmp(cmdtext, "/netstats"))\n    {\n        new stats[400+1];\n        GetNetworkStats(stats, sizeof(stats)); // get the servers networkstats\n        ShowPlayerDialog(playerid, 0, DIALOG_STYLE_MSGBOX, "Server Network Stats", stats, "Close", "");\n    }\n    return 1;\n}\n'})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"Server Ticks: 200\nMessages in Send buffer: 0\nMessages sent: 142\nBytes sent: 8203\nAcks sent: 11\nAcks in send buffer: 0\nMessages waiting for ack: 0\nMessages resent: 0\nBytes resent: 0\nPacketloss: 0.0%\nMessages received: 54\nBytes received: 2204\nAcks received: 0\nDuplicate acks received: 0\nInst. KBits per second: 28.8\nKBits per second sent: 10.0\nKBits per second received: 2.7\n"})}),"\n",(0,r.jsx)(t.h2,{id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",children:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"../functions/GetPlayerNetworkStats",children:"GetPlayerNetworkStats"}),": Gets a player networkstats and saves it into a string."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"../functions/NetStats_GetConnectedTime",children:"NetStats_GetConnectedTime"}),": Get the time that a player has been connected for."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"../functions/NetStats_MessagesReceived",children:"NetStats_MessagesReceived"}),": Get the number of network messages the server has received from the player."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"../functions/NetStats_BytesReceived",children:"NetStats_BytesReceived"}),": Get the amount of information (in bytes) that the server has received from the player."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"../functions/NetStats_MessagesSent",children:"NetStats_MessagesSent"}),": Get the number of network messages the server has sent to the player."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"../functions/NetStats_BytesSent",children:"NetStats_BytesSent"}),": Get the amount of information (in bytes) that the server has sent to the player."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"../functions/NetStats_MessagesRecvPerSecond",children:"NetStats_MessagesRecvPerSecond"}),": Get the number of network messages the server has received from the player in the last second."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"../functions/NetStats_PacketLossPercent",children:"NetStats_PacketLossPercent"}),": Get a player's packet loss percent."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"../functions/NetStats_ConnectionStatus",children:"NetStats_ConnectionStatus"}),": Get a player's connection status."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"../functions/NetStats_GetIpPort",children:"NetStats_GetIpPort"}),": Get a player's IP and port."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}}}]);