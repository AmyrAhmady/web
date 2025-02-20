"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[14059],{28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>o});var n=s(96540);const r={},a=n.createContext(r);function i(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(a.Provider,{value:t},e.children)}},70266:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"scripting/functions/NetStats_PacketLossPercent","title":"NetStats_PacketLossPercent","description":"Gets the packet loss percentage of a player.","source":"@site/docs/scripting/functions/NetStats_PacketLossPercent.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/NetStats_PacketLossPercent","permalink":"/vi/docs/scripting/functions/NetStats_PacketLossPercent","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/NetStats_PacketLossPercent.md","tags":[{"inline":true,"label":"network monitoring","permalink":"/vi/docs/tags/network-monitoring"}],"version":"current","frontMatter":{"title":"NetStats_PacketLossPercent","sidebar_label":"NetStats_PacketLossPercent","description":"Gets the packet loss percentage of a player.","tags":["network monitoring"]},"sidebar":"docsSidebar","previous":{"title":"NetStats_MessagesSent","permalink":"/vi/docs/scripting/functions/NetStats_MessagesSent"},"next":{"title":"PauseRecordingPlayback","permalink":"/vi/docs/scripting/functions/PauseRecordingPlayback"}}');var r=s(74848),a=s(28453);const i={title:"NetStats_PacketLossPercent",sidebar_label:"NetStats_PacketLossPercent",description:"Gets the packet loss percentage of a player.",tags:["network monitoring"]},o=void 0,c={},l=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Gets the packet loss percentage of a player. Packet loss means data the player is sending to the server is being lost (or vice-versa)."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"playerid"}),(0,r.jsx)(t.td,{children:"The ID of the player to get the data from."})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(t.p,{children:"The percentage packet loss as a float. 0 if player not connected."}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:'public OnPlayerCommandText(playerid,cmdtext[])\n{\n    if (!strcmp(cmdtext, "/packetloss"))\n    {\n        new szString[144];\n        format(szString, sizeof(szString), "Packets lost: %.2f percent.", NetStats_PacketLossPercent(playerid));\n        SendClientMessage(playerid, -1, szString);\n    }\n    return 1;\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsxs)(t.admonition,{type:"tip",children:[(0,r.jsx)(t.p,{children:"This function has been found to be currently unreliable the output is not as expected when compared to the client. Therefore this function should not be used as a packet loss kicker. A more accurate packetloss function:"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:'stock GetPlayerPacketLoss(playerid, &Float:packetLoss)\n{\n    /* Returns the packetloss percentage of the given playerid - Made by Fusez */\n\n    if(!IsPlayerConnected(playerid))\n    {\n        return 0;\n    }\n\n    new nstats[400+1], nstats_loss[20], start, end;\n    GetPlayerNetworkStats(playerid, nstats, sizeof (nstats));\n\n    start = strfind(nstats, "packetloss", true);\n    end = strfind(nstats, "%", true, start);\n\n    strmid(nstats_loss, nstats, start+12, end, sizeof (nstats_loss));\n    packetLoss = floatstr(nstats_loss);\n    return 1;\n}\n'})})]}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["Be advised that this function will report the packets lost by the server. The packet loss number reported by the client ",(0,r.jsx)(t.strong,{children:"will"})," be different, not because either is incorrect, but because both the server and the client are only aware of the loss packages sent by them."]})}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsx)(t.p,{children:"Anything greater than 0.0% should already be a cause of concern. Anything greater than 1.0% is outright bad."})}),"\n",(0,r.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"GetPlayerNetworkStats",children:"GetPlayerNetworkStats"}),": Gets a player's networkstats and saves it into a string."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"GetNetworkStats",children:"GetNetworkStats"}),": Gets the server's networkstats and saves it into a string."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"NetStats_GetConnectedTime",children:"NetStats_GetConnectedTime"}),": Get the time that a player has been connected for."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"NetStats_MessagesReceived",children:"NetStats_MessagesReceived"}),": Get the number of network messages the server has received from the player."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"NetStats_BytesReceived",children:"NetStats_BytesReceived"}),": Get the amount of information (in bytes) that the server has received from the player."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"NetStats_MessagesSent",children:"NetStats_MessagesSent"}),": Get the number of network messages the server has sent to the player."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"NetStats_BytesSent",children:"NetStats_BytesSent"}),": Get the amount of information (in bytes) that the server has sent to the player."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"NetStats_MessagesRecvPerSecond",children:"NetStats_MessagesRecvPerSecond"}),": Get the number of network messages the server has received from the player in the last second."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"NetStats_ConnectionStatus",children:"NetStats_ConnectionStatus"}),": Get a player's connection status."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"NetStats_GetIpPort",children:"NetStats_GetIpPort"}),": Get a player's IP and port."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);