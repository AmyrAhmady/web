"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[99431],{12821:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"scripting/functions/SetPlayerWantedLevel","title":"SetPlayerWantedLevel","description":"Set a player\'s wanted level (6 brown stars under HUD).","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/functions/SetPlayerWantedLevel.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetPlayerWantedLevel","permalink":"/th/docs/scripting/functions/SetPlayerWantedLevel","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/SetPlayerWantedLevel.md","tags":[{"inline":true,"label":"player","permalink":"/th/docs/tags/player"}],"version":"current","frontMatter":{"title":"SetPlayerWantedLevel","sidebar_label":"SetPlayerWantedLevel","description":"Set a player\'s wanted level (6 brown stars under HUD).","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"SetPlayerVirtualWorld","permalink":"/th/docs/scripting/functions/SetPlayerVirtualWorld"},"next":{"title":"SetPlayerWeather","permalink":"/th/docs/scripting/functions/SetPlayerWeather"}}');var l=n(74848),s=n(28453);const a={title:"SetPlayerWantedLevel",sidebar_label:"SetPlayerWantedLevel",description:"Set a player's wanted level (6 brown stars under HUD).",tags:["player"]},i=void 0,d={},c=[{value:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",level:2},{value:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",id:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",level:2},{value:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",level:2},{value:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",level:2}];function o(e){const t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",children:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22"}),"\n",(0,l.jsx)(t.p,{children:"Set a player's wanted level (6 brown stars under HUD)."}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Name"}),(0,l.jsx)(t.th,{children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"playerid"}),(0,l.jsx)(t.td,{children:"The ID of the player to set the wanted level of."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"level"}),(0,l.jsx)(t.td,{children:"The wanted level to set for the player (0-6)."})]})]})]}),"\n",(0,l.jsx)(t.h2,{id:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",children:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19"}),"\n",(0,l.jsx)(t.p,{children:"1: The function executed successfully."}),"\n",(0,l.jsx)(t.p,{children:"0: The function failed to execute. The player specified does not exist."}),"\n",(0,l.jsx)(t.h2,{id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",children:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-c",children:'if (strcmp(cmdtext, "/turnuptheheat", true) == 0)\n{\n    SetPlayerWantedLevel(playerid, 6);\n    SendClientMessage(playerid, 0xFF0000FF, "Wanted Level: 6");\n    return 1;\n}\n'})}),"\n",(0,l.jsx)(t.h2,{id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",children:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"GetPlayerWantedLevel: Check a player's wanted level."}),"\n",(0,l.jsx)(t.li,{children:"PlayCrimeReportForPlayer: Play a crime report for a player."}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var r=n(96540);const l={},s=r.createContext(l);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);