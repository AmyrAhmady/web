"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[73436],{28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>s});var t=i(96540);const r={},l=t.createContext(r);function a(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(l.Provider,{value:n},e.children)}},83545:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"scripting/functions/GetPlayerPing","title":"GetPlayerPing","description":"Get the ping of a player.","source":"@site/docs/scripting/functions/GetPlayerPing.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerPing","permalink":"/ru/docs/scripting/functions/GetPlayerPing","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetPlayerPing.md","tags":[{"inline":true,"label":"player","permalink":"/ru/docs/tags/player"}],"version":"current","frontMatter":{"title":"GetPlayerPing","sidebar_label":"GetPlayerPing","description":"Get the ping of a player.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerPickupVirtualWorld","permalink":"/ru/docs/scripting/functions/GetPlayerPickupVirtualWorld"},"next":{"title":"GetPlayerPoolSize","permalink":"/ru/docs/scripting/functions/GetPlayerPoolSize"}}');var r=i(74848),l=i(28453);const a={title:"GetPlayerPing",sidebar_label:"GetPlayerPing",description:"Get the ping of a player.",tags:["player"]},s=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Get the ping of a player. The ping measures the amount of time it takes for the server to 'ping' the client and for the client to send the message back."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"playerid"}),(0,r.jsx)(n.td,{children:"The ID of the player to get the ping of."})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:"The current ping of the player (expressed in milliseconds)."}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'new string[24];\nformat(string, sizeof(string), "Your ping: %d", GetPlayerPing(playerid));\nSendClientMessage(playerid, -1, string);\n'})}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example to kick high ping players:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'// Declare an array of all possible timer identifiers for timers for kicking players with\n// generally high ping with default value of 0\nnew gPlayerPingTimer[MAX_PLAYERS] = {0, ...};\n\n// A constant (nice documentation :))\nconst MAX_ACCEPTED_PING = 500;\n\npublic OnPlayerConnect(playerid)\n{\n    // Initiate the timer and assign the variable the identifier of the timer\n    gPlayerPingTimer[playerid] = SetTimerEx("Ping_Timer", 3 * 1000, true, "i", playerid);\n}\n\npublic OnPlayerDisconnect(playerid, reason)\n{\n    // Kill the timer and reset the value to invalid\n    KillTimer(gPlayerPingTimer[playerid]);\n    gPlayerPingTimer[playerid] = 0;\n}\n\n// A forwarded function (callback)\nforward Ping_Timer(playerid);\npublic Ping_Timer(playerid)\n{\n    // Kick player if their ping is more than the generally accepted high ping\n    new ping = GetPlayerPing(playerid);\n    if (ping > MAX_ACCEPTED_PING)\n    {\n        new string[128];\n        format(string, sizeof(string), "You have been kicked from the server. Reason: high ping (%d)", ping);\n        SendClientMessage(playerid, -1, string);\n        \n        Kick(playerid);\n    }\n    return 1;\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"Player's ping may be 65535 for a while after a player connects"})}),"\n",(0,r.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"GetPlayerIp",children:"GetPlayerIp"}),": Get a player's IP."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"GetPlayerName",children:"GetPlayerName"}),": Get a player's name."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"GetPlayerVersion",children:"GetPlayerVersion"}),": Get a player's client-version."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);