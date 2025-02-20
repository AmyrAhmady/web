"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[99749],{1745:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"scripting/functions/GetPlayerInterior","title":"GetPlayerInterior","description":"Retrieves the player\'s current interior.","source":"@site/docs/scripting/functions/GetPlayerInterior.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerInterior","permalink":"/sr/docs/scripting/functions/GetPlayerInterior","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetPlayerInterior.md","tags":[{"inline":true,"label":"player","permalink":"/sr/docs/tags/player"}],"version":"current","frontMatter":{"title":"GetPlayerInterior","sidebar_label":"GetPlayerInterior","description":"Retrieves the player\'s current interior.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerHydraReactorAngle","permalink":"/sr/docs/scripting/functions/GetPlayerHydraReactorAngle"},"next":{"title":"GetPlayerIp","permalink":"/sr/docs/scripting/functions/GetPlayerIp"}}');var i=t(74848),s=t(28453);const l={title:"GetPlayerInterior",sidebar_label:"GetPlayerInterior",description:"Retrieves the player's current interior.",tags:["player"]},o=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(r.p,{children:"Retrieves the player's current interior. A list of currently known interiors with their positions can be found on this page."}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Name"}),(0,i.jsx)(r.th,{children:"Description"})]})}),(0,i.jsx)(r.tbody,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"playerid"}),(0,i.jsx)(r.td,{children:"The player to get the interior ID of."})]})})]}),"\n",(0,i.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(r.p,{children:"The interior ID the player is currently in."}),"\n",(0,i.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-c",children:'public OnPlayerCommandText(playerid,text[])\n{\n    if (strcmp(cmdtext, "/int", true) == 0)\n    {\n        new string[64];\n        format(string, sizeof(string), "You are in interior %i", GetPlayerInterior(playerid));\n        SendClientMessage(playerid, 0xFF8000FF, string);\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,i.jsx)(r.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsx)(r.admonition,{type:"tip",children:(0,i.jsx)(r.p,{children:"Always returns interior 0 for NPCs."})}),"\n",(0,i.jsx)(r.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"SetPlayerInterior",children:"SetPlayerInterior"}),": Set a player's interior."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"GetPlayerVirtualWorld",children:"GetPlayerVirtualWorld"}),": Check what virtual world a player is in."]}),"\n"]})]})}function p(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>l,x:()=>o});var n=t(96540);const i={},s=n.createContext(i);function l(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);