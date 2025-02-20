"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[3169],{13095:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"scripting/functions/GetPlayerLastShotVectors","title":"GetPlayerLastShotVectors","description":"Retrieves the start and end (hit) position of the last bullet a player fired.","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/functions/GetPlayerLastShotVectors.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerLastShotVectors","permalink":"/th/docs/scripting/functions/GetPlayerLastShotVectors","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetPlayerLastShotVectors.md","tags":[{"inline":true,"label":"player","permalink":"/th/docs/tags/player"}],"version":"current","frontMatter":{"title":"GetPlayerLastShotVectors","sidebar_label":"GetPlayerLastShotVectors","description":"Retrieves the start and end (hit) position of the last bullet a player fired.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerLandingGearState","permalink":"/th/docs/scripting/functions/GetPlayerLandingGearState"},"next":{"title":"GetPlayerLastSyncedTrailerID","permalink":"/th/docs/scripting/functions/GetPlayerLastSyncedTrailerID"}}');var r=i(74848),s=i(28453);const l={title:"GetPlayerLastShotVectors",sidebar_label:"GetPlayerLastShotVectors",description:"Retrieves the start and end (hit) position of the last bullet a player fired.",tags:["player"]},o=void 0,a={},c=[{value:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",level:2},{value:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",id:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",level:2},{value:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",level:2},{value:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",id:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",level:2},{value:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",level:2}];function h(e){const t={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",children:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22"}),"\n",(0,r.jsx)(t.p,{children:"Retrieves the start and end (hit) position of the last bullet a player fired."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"playerid"}),(0,r.jsx)(t.td,{children:"The ID of the player to get the last bullet shot information of."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["&Float",":fOriginX"]}),(0,r.jsx)(t.td,{children:"A float variable in which to save the X coordinate of where the bullet originated from."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["&Float",":fOriginY"]}),(0,r.jsx)(t.td,{children:"A float variable in which to save the Y coordinate of where the bullet originated from."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["&Float",":fOriginZ"]}),(0,r.jsx)(t.td,{children:"A float variable in which to save the Z coordinate of where the bullet originated from."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["&Float",":fHitPosX"]}),(0,r.jsx)(t.td,{children:"A float variable in which to save the X coordinate of where the bullet hit."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["&Float",":fHitPosY"]}),(0,r.jsx)(t.td,{children:"A float variable in which to save the Y coordinate of where the bullet hit."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["&Float",":fHitPosY"]}),(0,r.jsx)(t.td,{children:"A float variable in which to save the Z coordinate of where the bullet hit."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",children:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19"}),"\n",(0,r.jsx)(t.p,{children:"1: The function executed successfully."}),"\n",(0,r.jsx)(t.p,{children:"0: The function failed to execute. The player specified does not exist."}),"\n",(0,r.jsx)(t.p,{children:"The position of the last bullet is stored in the specified variables."}),"\n",(0,r.jsx)(t.h2,{id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",children:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (strcmp(cmdtext, "/lastshot", true) == 0)\n    {\n        new lsString[128],\n            Float:fOriginX, Float:fOriginY, Float:fOriginZ,\n            Float:fHitPosX, Float:fHitPosY, Float:fHitPosZ;\n\n        GetPlayerLastShotVectors(playerid, fOriginX, fOriginY, fOriginZ, fHitPosX, fHitPosY, fHitPosZ);\n        format(lsString, 128, "Last Shot Information: Origin: %f, %f, %f. Hit position: %f, %f, %f", fOriginX, fOriginY, fOriginZ, fHitPosX, fHitPosY, fHitPosZ);\n        SendClientMessage(playerid, -1, lsString);\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",children:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01"}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsx)(t.p,{children:"This function will only work when lag compensation is enabled. If the player hit nothing, the hit positions will be 0. This means you can't currently calculate how far a bullet travels through open air."})}),"\n",(0,r.jsx)(t.h2,{id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",children:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"GetPlayerWeaponData: Find out information about weapons a player has."}),"\n",(0,r.jsx)(t.li,{children:"GetPlayerWeapon: Check what weapon a player is currently holding."}),"\n",(0,r.jsx)(t.li,{children:"VectorSize: Get the length (norm) of a vector."}),"\n",(0,r.jsx)(t.li,{children:"OnPlayerWeaponShot: Called when a player fires a weapon."}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>l,x:()=>o});var n=i(96540);const r={},s=n.createContext(r);function l(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);