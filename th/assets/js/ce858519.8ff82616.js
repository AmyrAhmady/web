"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[7701],{28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var l=n(96540);const i={},r=l.createContext(i);function s(e){const t=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),l.createElement(r.Provider,{value:t},e.children)}},47421:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>a});const l=JSON.parse('{"id":"scripting/functions/SetPlayerVelocity","title":"SetPlayerVelocity","description":"Set a player\'s velocity on the X, Y and Z axes.","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/functions/SetPlayerVelocity.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetPlayerVelocity","permalink":"/th/docs/scripting/functions/SetPlayerVelocity","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/SetPlayerVelocity.md","tags":[{"inline":true,"label":"player","permalink":"/th/docs/tags/player"}],"version":"current","frontMatter":{"title":"SetPlayerVelocity","sidebar_label":"SetPlayerVelocity","description":"Set a player\'s velocity on the X, Y and Z axes.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"SetPlayerTime","permalink":"/th/docs/scripting/functions/SetPlayerTime"},"next":{"title":"SetPlayerVirtualWorld","permalink":"/th/docs/scripting/functions/SetPlayerVirtualWorld"}}');var i=n(74848),r=n(28453);const s={title:"SetPlayerVelocity",sidebar_label:"SetPlayerVelocity",description:"Set a player's velocity on the X, Y and Z axes.",tags:["player"]},c=void 0,o={},a=[{value:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",level:2},{value:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",id:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",level:2},{value:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",level:2},{value:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",level:2}];function d(e){const t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",children:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22"}),"\n",(0,i.jsx)(t.p,{children:"Set a player's velocity on the X, Y and Z axes."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"playerid"}),(0,i.jsx)(t.td,{children:"The player to apply the speed to."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["Float",":X"]}),(0,i.jsx)(t.td,{children:"The velocity (speed) on the X axis."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["Float",":Y"]}),(0,i.jsx)(t.td,{children:"The velocity (speed) on the Y axis."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["Float",":Z"]}),(0,i.jsx)(t.td,{children:"The velocity (speed) on the Z axis."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",children:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19"}),"\n",(0,i.jsx)(t.p,{children:"1: The function executed successfully."}),"\n",(0,i.jsx)(t.p,{children:"0: The function failed to execute. This means the player is not connected."}),"\n",(0,i.jsx)(t.h2,{id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",children:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp("/jump", cmdtext))\n    {\n    SetPlayerVelocity(playerid, 0.0, 0.0, 0.2); // Forces the player to jump (Z velocity + 0.2)\n    return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",children:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"GetPlayerVelocity: Get a player's velocity."}),"\n",(0,i.jsx)(t.li,{children:"SetVehicleVelocity: Set a vehicle's velocity."}),"\n",(0,i.jsx)(t.li,{children:"GetVehicleVelocity: Get a vehicle's velocity."}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);