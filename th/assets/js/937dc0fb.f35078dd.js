"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[34267],{28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var i=n(96540);const r={},l=i.createContext(r);function s(e){const t=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(l.Provider,{value:t},e.children)}},35923:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"scripting/functions/GetPlayerPoolSize","title":"GetPlayerPoolSize","description":"Gets the highest playerid currently in use on the server.","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/functions/GetPlayerPoolSize.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerPoolSize","permalink":"/th/docs/scripting/functions/GetPlayerPoolSize","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetPlayerPoolSize.md","tags":[{"inline":true,"label":"player","permalink":"/th/docs/tags/player"}],"version":"current","frontMatter":{"title":"GetPlayerPoolSize","sidebar_label":"GetPlayerPoolSize","description":"Gets the highest playerid currently in use on the server.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerPing","permalink":"/th/docs/scripting/functions/GetPlayerPing"},"next":{"title":"GetPlayerPos","permalink":"/th/docs/scripting/functions/GetPlayerPos"}}');var r=n(74848),l=n(28453);const s={title:"GetPlayerPoolSize",sidebar_label:"GetPlayerPoolSize",description:"Gets the highest playerid currently in use on the server.",tags:["player"]},o=void 0,a={},c=[{value:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",level:2},{value:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",level:2},{value:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",level:2}];function h(e){const t={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsx)(t.p,{children:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e19\u0e35\u0e49\u0e16\u0e39\u0e01\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e43\u0e19 SA-MP 0.3.7 \u0e41\u0e25\u0e30\u0e08\u0e30\u0e44\u0e21\u0e48\u0e17\u0e33\u0e07\u0e32\u0e19\u0e43\u0e19\u0e40\u0e27\u0e2d\u0e23\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e01\u0e48\u0e2d\u0e19\u0e2b\u0e19\u0e49\u0e32\u0e19\u0e35\u0e49!"})}),"\n",(0,r.jsx)(t.h2,{id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",children:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22"}),"\n",(0,r.jsx)(t.p,{children:"Gets the highest playerid currently in use on the server."}),"\n",(0,r.jsx)(t.table,{children:(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})})}),"\n",(0,r.jsx)(t.h2,{id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",children:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:"FreezeAll()\n{\n    // note that we assign the return value to a new variable (j) to avoid calling the function with each iteration\n    for(new i = 0, j = GetPlayerPoolSize(); i <= j; i++)\n    {\n        TogglePlayerControllable(i, 0);\n    }\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",children:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"GetVehiclePoolSize: Gets the highest vehicleid currently in use on the server."}),"\n",(0,r.jsx)(t.li,{children:"GetMaxPlayers: Gets the maximum number of players that can join the server."}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}}}]);