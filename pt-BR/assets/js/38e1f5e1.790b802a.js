"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[26217],{28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var r=n(96540);const a={},i=r.createContext(a);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:t},e.children)}},53344:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"scripting/functions/GetPlayerAmmo","title":"GetPlayerAmmo","description":"Gets the amount of ammo in a player\'s current weapon.","source":"@site/docs/scripting/functions/GetPlayerAmmo.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerAmmo","permalink":"/pt-BR/docs/scripting/functions/GetPlayerAmmo","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetPlayerAmmo.md","tags":[{"inline":true,"label":"player","permalink":"/pt-BR/docs/tags/player"}],"version":"current","frontMatter":{"title":"GetPlayerAmmo","sidebar_label":"GetPlayerAmmo","description":"Gets the amount of ammo in a player\'s current weapon.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayer3DTextLabelVirtualWorld","permalink":"/pt-BR/docs/scripting/functions/GetPlayer3DTextLabelVirtualWorld"},"next":{"title":"GetPlayerAnimFlags","permalink":"/pt-BR/docs/scripting/functions/GetPlayerAnimFlags"}}');var a=n(74848),i=n(28453);const s={title:"GetPlayerAmmo",sidebar_label:"GetPlayerAmmo",description:"Gets the amount of ammo in a player's current weapon.",tags:["player"]},o=void 0,l={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(t.p,{children:"Gets the amount of ammo in a player's current weapon."}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"playerid"}),(0,a.jsx)(t.td,{children:"The ID of the player whose ammo to get."})]})})]}),"\n",(0,a.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(t.p,{children:"The amount of ammo in the player's current weapon."}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-c",children:'ublic OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, "/myammo", true))\n    {\n        new\n            ammo = GetPlayerAmmo(playerid),\n            string[32];\n\n        format(string, sizeof(string), "Your ammo: %i", ammo);\n        SendClientMessage(playerid, -1, string);\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,a.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,a.jsx)(t.admonition,{type:"warning",children:(0,a.jsx)(t.p,{children:"The ammo can hold 16-bit values, therefore values over 32767 will return erroneous values."})}),"\n",(0,a.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"SetPlayerAmmo",children:"SetPlayerAmmo"}),": Set the ammo of a specific player's weapon."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"GetPlayerWeaponData",children:"GetPlayerWeaponData"}),": Find out information about weapons a player has."]}),"\n"]})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}}}]);