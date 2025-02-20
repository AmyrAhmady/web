"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[16928],{4113:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>c});const l=JSON.parse('{"id":"scripting/functions/GetPlayerWantedLevel","title":"GetPlayerWantedLevel","description":"Gets the wanted level of a player.","source":"@site/docs/scripting/functions/GetPlayerWantedLevel.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerWantedLevel","permalink":"/id/docs/scripting/functions/GetPlayerWantedLevel","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetPlayerWantedLevel.md","tags":[{"inline":true,"label":"player","permalink":"/id/docs/tags/player"}],"version":"current","frontMatter":{"title":"GetPlayerWantedLevel","sidebar_label":"GetPlayerWantedLevel","description":"Gets the wanted level of a player.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerVirtualWorld","permalink":"/id/docs/scripting/functions/GetPlayerVirtualWorld"},"next":{"title":"GetPlayerWeapon","permalink":"/id/docs/scripting/functions/GetPlayerWeapon"}}');var r=n(74848),a=n(28453);const s={title:"GetPlayerWantedLevel",sidebar_label:"GetPlayerWantedLevel",description:"Gets the wanted level of a player.",tags:["player"]},i=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function o(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Gets the wanted level of a player."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"playerid"}),(0,r.jsx)(t.td,{children:"The ID of the player that you want to get the wanted level of."})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(t.p,{children:"The player's wanted level."}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n     if (strcmp(cmdtext, "/getmywantedlevel", true) == 0)\n     {\n          // Gets the current wanted level, saves it in the variable wantedlevel\n          //and then tells the player his wanted in a client message.\n\n          new\n               wantedLevel = GetPlayerWantedLevel(playerid),\n               message[64];\n\n          format(message, sizeof(message), "Your current wanted level is: %i", wantedlevel);\n          SendClientMessage(playerid, 0xFF0000FF, message);\n\n          return 1;\n     }\n    return 0;\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"SetPlayerWantedLevel",children:"SetPlayerWantedLevel"}),": Set a player's wanted level."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"PlayCrimeReportForPlayer",children:"PlayCrimeReportForPlayer"}),": Play a crime report for a player."]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var l=n(96540);const r={},a=l.createContext(r);function s(e){const t=l.useContext(a);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),l.createElement(a.Provider,{value:t},e.children)}}}]);