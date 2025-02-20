"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[27372],{21943:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});const l=JSON.parse('{"id":"scripting/callbacks/OnPlayerExitedMenu","title":"OnPlayerExitedMenu","description":"Called when a player exits a menu.","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerExitedMenu.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerExitedMenu","permalink":"/th/docs/scripting/callbacks/OnPlayerExitedMenu","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnPlayerExitedMenu.md","tags":[{"inline":true,"label":"player","permalink":"/th/docs/tags/player"},{"inline":true,"label":"menu","permalink":"/th/docs/tags/menu"}],"version":"current","frontMatter":{"title":"OnPlayerExitedMenu","sidebar_label":"OnPlayerExitedMenu","description":"Called when a player exits a menu.","tags":["player","menu"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerExitVehicle","permalink":"/th/docs/scripting/callbacks/OnPlayerExitVehicle"},"next":{"title":"OnPlayerFinishedDownloading","permalink":"/th/docs/scripting/callbacks/OnPlayerFinishedDownloading"}}');var r=t(74848),i=t(28453);const a={title:"OnPlayerExitedMenu",sidebar_label:"OnPlayerExitedMenu",description:"Called when a player exits a menu.",tags:["player","menu"]},s=void 0,c={},d=[{value:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",level:2},{value:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",id:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",level:2},{value:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",level:2},{value:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",level:2}];function o(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",children:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22"}),"\n",(0,r.jsx)(n.p,{children:"Called when a player exits a menu."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"playerid"}),(0,r.jsx)(n.td,{children:"The ID of the player that exited the menu"})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",children:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19"}),"\n",(0,r.jsx)(n.p,{children:"\u0e21\u0e31\u0e19\u0e16\u0e39\u0e01\u0e40\u0e23\u0e35\u0e22\u0e01\u0e43\u0e19\u0e40\u0e01\u0e21\u0e42\u0e2b\u0e21\u0e14\u0e01\u0e48\u0e2d\u0e19\u0e40\u0e2a\u0e21\u0e2d"}),"\n",(0,r.jsx)(n.h2,{id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",children:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"public OnPlayerExitedMenu(playerid)\n{\n    TogglePlayerControllable(playerid,1); // unfreeze the player when they exit a menu\n    return 1;\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",children:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/th/docs/scripting/functions/CreateMenu",children:"CreateMenu"}),": Create a menu."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/th/docs/scripting/functions/DestroyMenu",children:"DestroyMenu"}),": Destroy a menu."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var l=t(96540);const r={},i=l.createContext(r);function a(e){const n=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);