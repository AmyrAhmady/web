"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[97971],{301:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"scripting/functions/SetPlayerCameraLookAt","title":"SetPlayerCameraLookAt","description":"Set the direction a player\'s camera looks at.","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/functions/SetPlayerCameraLookAt.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetPlayerCameraLookAt","permalink":"/th/docs/scripting/functions/SetPlayerCameraLookAt","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/SetPlayerCameraLookAt.md","tags":[{"inline":true,"label":"player","permalink":"/th/docs/tags/player"}],"version":"current","frontMatter":{"title":"SetPlayerCameraLookAt","sidebar_label":"SetPlayerCameraLookAt","description":"Set the direction a player\'s camera looks at.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"SetPlayerAttachedObject","permalink":"/th/docs/scripting/functions/SetPlayerAttachedObject"},"next":{"title":"SetPlayerCameraPos","permalink":"/th/docs/scripting/functions/SetPlayerCameraPos"}}');var n=r(74848),s=r(28453);const o={title:"SetPlayerCameraLookAt",sidebar_label:"SetPlayerCameraLookAt",description:"Set the direction a player's camera looks at.",tags:["player"]},i=void 0,l={},c=[{value:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",level:2},{value:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",id:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",level:2},{value:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",level:2},{value:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",id:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",level:2},{value:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",children:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22"}),"\n",(0,n.jsx)(t.p,{children:"Set the direction a player's camera looks at. Generally meant to be used in combination with SetPlayerCameraPos."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"playerid"}),(0,n.jsx)(t.td,{children:"The ID of the player whose camera to set."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["Float",":x"]}),(0,n.jsx)(t.td,{children:"The X coordinate for the player's camera to look at."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["Float",":y"]}),(0,n.jsx)(t.td,{children:"The Y coordinate for the player's camera to look at."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["Float",":z"]}),(0,n.jsx)(t.td,{children:"The Z coordinate for the player's camera to look at."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"cut"}),(0,n.jsxs)(t.td,{children:["The ",(0,n.jsx)(t.a,{href:"/th/docs/scripting/resources/cameracutstyles",children:"style"})," of the change. Can be used to interpolate (change slowly) from old pos to new pos using CAMERA_MOVE."]})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",children:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19"}),"\n",(0,n.jsx)(t.p,{children:"1: The function was executed successfully."}),"\n",(0,n.jsx)(t.p,{children:"0: The function failed to execute. The player specified does not exist."}),"\n",(0,n.jsx)(t.h2,{id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",children:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c",children:"SetPlayerCameraPos(playerid, 320.0, 50.0, 170.0);\nSetPlayerCameraLookAt(playerid, 324.34, 54.122, 173.35);\n"})}),"\n",(0,n.jsx)(t.h2,{id:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",children:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01"}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsx)(t.p,{children:"Using the camera functions directly after enabling spectator mode doesn't work."})}),"\n",(0,n.jsx)(t.h2,{id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",children:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"SetPlayerCameraPos: Set a player's camera position."}),"\n",(0,n.jsx)(t.li,{children:"SetCameraBehindPlayer: Set a player's camera behind them."}),"\n",(0,n.jsx)(t.li,{children:"GetPlayerCameraPos: Find out where the player's camera is."}),"\n",(0,n.jsx)(t.li,{children:"GetPlayerCameraFrontVector: Get the player's camera front vector"}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>i});var a=r(96540);const n={},s=a.createContext(n);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);