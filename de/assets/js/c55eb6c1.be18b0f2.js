"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[62681],{28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>a});var r=s(96540);const t={},i=r.createContext(t);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:n},e.children)}},33968:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"scripting/functions/GetPlayerIp","title":"GetPlayerIp","description":"Get the specified player\'s IP address and store it in a string.","source":"@site/docs/scripting/functions/GetPlayerIp.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerIp","permalink":"/de/docs/scripting/functions/GetPlayerIp","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetPlayerIp.md","tags":[{"inline":true,"label":"player","permalink":"/de/docs/tags/player"},{"inline":true,"label":"ip address","permalink":"/de/docs/tags/ip-address"}],"version":"current","frontMatter":{"title":"GetPlayerIp","sidebar_label":"GetPlayerIp","description":"Get the specified player\'s IP address and store it in a string.","tags":["player","ip address"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerInterior","permalink":"/de/docs/scripting/functions/GetPlayerInterior"},"next":{"title":"GetPlayerKeys","permalink":"/de/docs/scripting/functions/GetPlayerKeys"}}');var t=s(74848),i=s(28453);const l={title:"GetPlayerIp",sidebar_label:"GetPlayerIp",description:"Get the specified player's IP address and store it in a string.",tags:["player","ip address"]},a=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Get the specified player's IP address and store it in a string."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"playerid"}),(0,t.jsx)(n.td,{children:"The ID of the player to get the IP address of."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ip[]"}),(0,t.jsx)(n.td,{children:"The string to store the player's IP address in, passed by reference."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"len = sizeof (ip)"}),(0,t.jsx)(n.td,{children:"The maximum length of the IP address (recommended 16)."})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:"The player's IP address is stored in the specified array."}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'public OnPlayerConnect(playerid)\n{\n    new ipAddress[16];\n    GetPlayerIp(playerid, ipAddress, sizeof(ipAddress));\n    if (!strcmp(ipAddress, "127.0.0.1"))\n    {\n        SendClientMessage(playerid, 0xFFFFFFFF, "Welcome to your server, master\xa0:)");\n    }\n    return 1;\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"PAWN is case-sensitive. GetPlayerIP will not work."})}),"\n",(0,t.jsxs)(n.admonition,{type:"warning",children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SA-MP server"}),": This function ",(0,t.jsx)(n.strong,{children:"does not work"})," when used in ",(0,t.jsx)(n.a,{href:"../callbacks/OnPlayerDisconnect",children:"OnPlayerDisconnect"})," because the player is already disconnected. It will return an invalid IP (255.255.255.255).\nSave players' IPs under ",(0,t.jsx)(n.a,{href:"../callbacks/OnPlayerConnect",children:"OnPlayerConnect"})," if they need to be used under ",(0,t.jsx)(n.a,{href:"../callbacks/OnPlayerDisconnect",children:"OnPlayerDisconnect"}),"."]}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"open.mp server"}),": This function ",(0,t.jsx)(n.strong,{children:"work"})," when used in ",(0,t.jsx)(n.a,{href:"../callbacks/OnPlayerDisconnect",children:"OnPlayerDisconnect"}),"."]})]}),"\n",(0,t.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"NetStats_GetIpPort",children:"NetStats_GetIpPort"}),": Get a player's IP and port."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"GetPlayerRawIp",children:"GetPlayerRawIp"}),": Get a player's Raw IP."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"GetPlayerName",children:"GetPlayerName"}),": Get a player's name."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"GetPlayerPing",children:"GetPlayerPing"}),": Get the ping of a player."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"GetPlayerVerion",children:"GetPlayerVersion"}),": Get a player's client-version."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"../callbacks/OnIncomingConnection",children:"OnIncomingConnection"}),": Called when a player is attempting to connect to the server."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"../callbacks/OnPlayerConnect",children:"OnPlayerConnect"}),": Called when a player connects to the server."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"../callbacks/OnPlayerDisconnect",children:"OnPlayerDisconnect"}),": Called when a player leaves the server."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}}}]);