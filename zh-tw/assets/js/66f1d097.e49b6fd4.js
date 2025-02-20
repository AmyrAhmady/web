"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[88880],{28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>a});var i=n(96540);const r={},s=i.createContext(r);function l(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:t},e.children)}},34842:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"scripting/functions/GetPlayerLastShotVectors","title":"GetPlayerLastShotVectors","description":"Retrieves the start and end (hit) position of the last bullet a player fired.","source":"@site/docs/scripting/functions/GetPlayerLastShotVectors.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerLastShotVectors","permalink":"/zh-tw/docs/scripting/functions/GetPlayerLastShotVectors","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetPlayerLastShotVectors.md","tags":[{"inline":true,"label":"player","permalink":"/zh-tw/docs/tags/player"}],"version":"current","frontMatter":{"title":"GetPlayerLastShotVectors","sidebar_label":"GetPlayerLastShotVectors","description":"Retrieves the start and end (hit) position of the last bullet a player fired.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerLandingGearState","permalink":"/zh-tw/docs/scripting/functions/GetPlayerLandingGearState"},"next":{"title":"GetPlayerLastSyncedTrailerID","permalink":"/zh-tw/docs/scripting/functions/GetPlayerLastSyncedTrailerID"}}');var r=n(74848),s=n(28453);const l={title:"GetPlayerLastShotVectors",sidebar_label:"GetPlayerLastShotVectors",description:"Retrieves the start and end (hit) position of the last bullet a player fired.",tags:["player"]},a=void 0,o={},h=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Retrieves the start and end (hit) position of the last bullet a player fired."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"playerid"}),(0,r.jsx)(t.td,{children:"The ID of the player to get the last bullet shot information of."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["&Float",":originX"]}),(0,r.jsx)(t.td,{children:"A float variable in which to save the X coordinate of where the bullet originated from."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["&Float",":originY"]}),(0,r.jsx)(t.td,{children:"A float variable in which to save the Y coordinate of where the bullet originated from."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["&Float",":originZ"]}),(0,r.jsx)(t.td,{children:"A float variable in which to save the Z coordinate of where the bullet originated from."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["&Float",":hitPosX"]}),(0,r.jsx)(t.td,{children:"A float variable in which to save the X coordinate of where the bullet hit."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["&Float",":hitPosY"]}),(0,r.jsx)(t.td,{children:"A float variable in which to save the Y coordinate of where the bullet hit."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["&Float",":hitPosZ"]}),(0,r.jsx)(t.td,{children:"A float variable in which to save the Z coordinate of where the bullet hit."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"true"})," - The function executed successfully."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"false"})," - The function failed to execute. The player specified does not exist."]}),"\n",(0,r.jsx)(t.p,{children:"The position of the last bullet is stored in the specified variables."}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (strcmp(cmdtext, "/lastshot", true) == 0)\n    {\n        new string[128],\n            Float:originX, Float:originY, Float:originZ,\n            Float:hitPosX, Float:hitPosY, Float:hitPosZ;\n\n        GetPlayerLastShotVectors(playerid, originX, originY, originZ, hitPosX, hitPosY, hitPosZ);\n        \n        format(string, sizeof(string), "Last Shot Information: Origin: %f, %f, %f. Hit position: %f, %f, %f", originX, originY, originZ, hitPosX, hitPosY, hitPosZ);\n        SendClientMessage(playerid, -1, string);\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"This function will only work when lag compensation is enabled."}),"\n",(0,r.jsx)(t.li,{children:"If the player hit nothing, the hit positions will be 0. This means you can't currently calculate how far a bullet travels through open air."}),"\n"]})}),"\n",(0,r.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"GetPlayerWeaponData",children:"GetPlayerWeaponData"}),": Find out information about weapons a player has."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"GetPlayerWeapon",children:"GetPlayerWeapon"}),": Check what weapon a player is currently holding."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"VectorSize",children:"VectorSize"}),": Get the length (norm) of a vector."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"../callbacks/OnPlayerWeaponShot",children:"OnPlayerWeaponShot"}),": Called when a player fires a weapon."]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}}}]);