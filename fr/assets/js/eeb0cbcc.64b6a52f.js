"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[65082],{7456:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"scripting/functions/GetPlayerNetworkStats","title":"GetPlayerNetworkStats","description":"Gets a player\'s network stats and saves them into a string.","source":"@site/docs/scripting/functions/GetPlayerNetworkStats.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerNetworkStats","permalink":"/fr/docs/scripting/functions/GetPlayerNetworkStats","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetPlayerNetworkStats.md","tags":[{"inline":true,"label":"player","permalink":"/fr/docs/tags/player"},{"inline":true,"label":"network monitoring","permalink":"/fr/docs/tags/network-monitoring"}],"version":"current","frontMatter":{"title":"GetPlayerNetworkStats","sidebar_label":"GetPlayerNetworkStats","description":"Gets a player\'s network stats and saves them into a string.","tags":["player","network monitoring"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerName","permalink":"/fr/docs/scripting/functions/GetPlayerName"},"next":{"title":"GetPlayerObjectAttachedData","permalink":"/fr/docs/scripting/functions/GetPlayerObjectAttachedData"}}');var r=s(74848),a=s(28453);const i={title:"GetPlayerNetworkStats",sidebar_label:"GetPlayerNetworkStats",description:"Gets a player's network stats and saves them into a string.",tags:["player","network monitoring"]},o=void 0,l={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Gets a player's network stats and saves them into a string."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"playerid"}),(0,r.jsx)(t.td,{children:"The ID of the player you want to get the networkstats of."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"output[]"}),(0,r.jsx)(t.td,{children:"The string to store the networkstats in, passed by reference."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"size = sizeof (output)"}),(0,r.jsx)(t.td,{children:"The length of the string that should be stored."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(t.p,{children:"This function always returns 1."}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, "/mynetstats"))\n    {\n        new stats[400+1];\n        GetPlayerNetworkStats(playerid, stats, sizeof(stats));\n        ShowPlayerDialog(playerid, 0, DIALOG_STYLE_MSGBOX, "My Network Stats", stats, "Okay", "");\n    }\n    return 1;\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["This function may not return accurate data when used under ",(0,r.jsx)(t.a,{href:"OnPlayerDisconnect",children:"OnPlayerDisconnect"})," if the player has quit normally. It usually returns accurate data if the player has been kicked or has timed out."]})}),"\n",(0,r.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"GetNetworkStats",children:"GetNetworkStats"}),": Gets the servers networkstats and saves it into a string."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"NetStats_GetConnectedTime",children:"NetStats_GetConnectedTime"}),": Get the time that a player has been connected for."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"NetStats_MessagesReceived",children:"NetStats_MessagesReceived"}),": Get the number of network messages the server has received from the player."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"NetStats_BytesReceived",children:"NetStats_BytesReceived"}),": Get the amount of information (in bytes) that the server has received from the player."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"NetStats_MessagesSent",children:"NetStats_MessagesSent"}),": Get the number of network messages the server has sent to the player."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"NetStats_BytesSent",children:"NetStats_BytesSent"}),": Get the amount of information (in bytes) that the server has sent to the player."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"NetStats_MessagesRecvPerSecond",children:"NetStats_MessagesRecvPerSecond"}),": Get the number of network messages the server has received from the player in the last second."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"NetStats_PacketLossPercent",children:"NetStats_PacketLossPercent"}),": Get a player's packet loss percent."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"NetStats_ConnectionStatus",children:"NetStats_ConnectionStatus"}),": Get a player's connection status."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"NetStats_GetIpPort",children:"NetStats_GetIpPort"}),": Get a player's IP and port."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>o});var n=s(96540);const r={},a=n.createContext(r);function i(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);