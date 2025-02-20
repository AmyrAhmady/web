"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[25652],{28453:(e,s,l)=>{l.d(s,{R:()=>r,x:()=>i});var n=l(96540);const a={},t=n.createContext(a);function r(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(t.Provider,{value:s},e.children)}},50728:(e,s,l)=>{l.r(s),l.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"scripting/callbacks/OnPlayerRequestClass","title":"OnPlayerRequestClass","description":"Called when a player changes class at class selection (and when class selection first appears).","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerRequestClass.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerRequestClass","permalink":"/th/docs/scripting/callbacks/OnPlayerRequestClass","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnPlayerRequestClass.md","tags":[{"inline":true,"label":"player","permalink":"/th/docs/tags/player"}],"version":"current","frontMatter":{"title":"OnPlayerRequestClass","sidebar_label":"OnPlayerRequestClass","description":"Called when a player changes class at class selection (and when class selection first appears).","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerPickupStreamOut","permalink":"/th/docs/scripting/callbacks/OnPlayerPickupStreamOut"},"next":{"title":"OnPlayerRequestDownload","permalink":"/th/docs/scripting/callbacks/OnPlayerRequestDownload"}}');var a=l(74848),t=l(28453);const r={title:"OnPlayerRequestClass",sidebar_label:"OnPlayerRequestClass",description:"Called when a player changes class at class selection (and when class selection first appears).",tags:["player"]},i=void 0,c={},d=[{value:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",level:2},{value:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",id:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",level:2},{value:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",level:2},{value:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",id:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",level:2},{value:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",level:2}];function o(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h2,{id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",children:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22"}),"\n",(0,a.jsx)(s.p,{children:"Called when a player changes class at class selection (and when class selection first appears)."}),"\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{children:"Name"}),(0,a.jsx)(s.th,{children:"Description"})]})}),(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"playerid"}),(0,a.jsx)(s.td,{children:"The ID of the player that changed class."})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"classid"}),(0,a.jsx)(s.td,{children:"The ID of the current class being viewed (returned by AddPlayerClass)."})]})]})]}),"\n",(0,a.jsx)(s.h2,{id:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",children:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19"}),"\n",(0,a.jsx)(s.p,{children:"\u0e21\u0e31\u0e19\u0e16\u0e39\u0e01\u0e40\u0e23\u0e35\u0e22\u0e01\u0e43\u0e19\u0e1f\u0e34\u0e25\u0e40\u0e15\u0e2d\u0e23\u0e4c\u0e2a\u0e04\u0e23\u0e34\u0e1b\u0e15\u0e4c\u0e01\u0e48\u0e2d\u0e19\u0e40\u0e2a\u0e21\u0e2d"}),"\n",(0,a.jsx)(s.h2,{id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",children:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-c",children:'public OnPlayerRequestClass(playerid,classid)\n{\n    if (classid == 3 &&\xa0!IsPlayerAdmin(playerid))\n    {\n        SendClientMessage(playerid, COLOR_RED, "This skin is only for admins!");\n        return 0;\n    }\n    return 1;\n}\n'})}),"\n",(0,a.jsx)(s.h2,{id:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",children:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01"}),"\n",(0,a.jsx)(s.admonition,{type:"tip",children:(0,a.jsx)(s.p,{children:"This callback is also called when a player presses F4."})}),"\n",(0,a.jsx)(s.h2,{id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",children:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.a,{href:"/th/docs/scripting/functions/AddPlayerClass",children:"AddPlayerClass"}),": Add a class."]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}}}]);