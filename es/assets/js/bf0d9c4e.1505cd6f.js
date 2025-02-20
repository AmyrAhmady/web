"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[92449],{15441:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"scripting/functions/SetPlayerWantedLevel","title":"SetPlayerWantedLevel","description":"Set a player\'s wanted level (6 brown stars under HUD).","source":"@site/docs/scripting/functions/SetPlayerWantedLevel.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetPlayerWantedLevel","permalink":"/es/docs/scripting/functions/SetPlayerWantedLevel","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/SetPlayerWantedLevel.md","tags":[{"inline":true,"label":"player","permalink":"/es/docs/tags/player"}],"version":"current","frontMatter":{"title":"SetPlayerWantedLevel","sidebar_label":"SetPlayerWantedLevel","description":"Set a player\'s wanted level (6 brown stars under HUD).","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"SetPlayerVirtualWorld","permalink":"/es/docs/scripting/functions/SetPlayerVirtualWorld"},"next":{"title":"SetPlayerWeather","permalink":"/es/docs/scripting/functions/SetPlayerWeather"}}');var l=n(74848),s=n(28453);const a={title:"SetPlayerWantedLevel",sidebar_label:"SetPlayerWantedLevel",description:"Set a player's wanted level (6 brown stars under HUD).",tags:["player"]},i=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function o(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(t.p,{children:"Set a player's wanted level (6 brown stars under HUD)."}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Name"}),(0,l.jsx)(t.th,{children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"playerid"}),(0,l.jsx)(t.td,{children:"The ID of the player to set the wanted level of."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"level"}),(0,l.jsx)(t.td,{children:"The wanted level to set for the player (0-6)."})]})]})]}),"\n",(0,l.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"true"})," - The function executed successfully."]}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"false"})," - The function failed to execute. The player specified does not exist."]}),"\n",(0,l.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (strcmp(cmdtext, "/turnuptheheat", true) == 0)\n    {\n        SetPlayerWantedLevel(playerid, 6);\n        SendClientMessage(playerid, 0xFF0000FF, "Wanted Level: 6");\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,l.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"GetPlayerWantedLevel",children:"GetPlayerWantedLevel"}),": Check a player's wanted level."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"PlayCrimeReportForPlayer",children:"PlayCrimeReportForPlayer"}),": Play a crime report for a player."]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var r=n(96540);const l={},s=r.createContext(l);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);