"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[66825],{28453:(n,i,e)=>{e.d(i,{R:()=>l,x:()=>r});var t=e(96540);const a={},c=t.createContext(a);function l(n){const i=t.useContext(c);return t.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function r(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:l(n.components),t.createElement(c.Provider,{value:i},n.children)}},47719:(n,i,e)=>{e.r(i),e.d(i,{assets:()=>h,contentTitle:()=>r,default:()=>o,frontMatter:()=>l,metadata:()=>t,toc:()=>s});const t=JSON.parse('{"id":"scripting/callbacks/OnPlayerGiveDamage","title":"OnPlayerGiveDamage","description":"Callback n\xe0y \u0111\u01b0\u1ee3c g\u1ecdi khi m\u1ed9t ng\u01b0\u1eddi ch\u01a1i g\xe2y thi\u1ec7t h\u1ea1i cho ng\u01b0\u1eddi ch\u01a1i kh\xe1c.","source":"@site/i18n/vi/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerGiveDamage.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerGiveDamage","permalink":"/vi/docs/scripting/callbacks/OnPlayerGiveDamage","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnPlayerGiveDamage.md","tags":[{"inline":true,"label":"player","permalink":"/vi/docs/tags/player"}],"version":"current","frontMatter":{"title":"OnPlayerGiveDamage","sidebar_label":"OnPlayerGiveDamage","description":"Callback n\xe0y \u0111\u01b0\u1ee3c g\u1ecdi khi m\u1ed9t ng\u01b0\u1eddi ch\u01a1i g\xe2y thi\u1ec7t h\u1ea1i cho ng\u01b0\u1eddi ch\u01a1i kh\xe1c.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerFinishedDownloading","permalink":"/vi/docs/scripting/callbacks/OnPlayerFinishedDownloading"},"next":{"title":"OnPlayerGiveDamageActor","permalink":"/vi/docs/scripting/callbacks/OnPlayerGiveDamageActor"}}');var a=e(74848),c=e(28453);const l={title:"OnPlayerGiveDamage",sidebar_label:"OnPlayerGiveDamage",description:"Callback n\xe0y \u0111\u01b0\u1ee3c g\u1ecdi khi m\u1ed9t ng\u01b0\u1eddi ch\u01a1i g\xe2y thi\u1ec7t h\u1ea1i cho ng\u01b0\u1eddi ch\u01a1i kh\xe1c.",tags:["player"]},r=void 0,h={},s=[{value:"M\xf4 T\u1ea3",id:"m\xf4-t\u1ea3",level:2},{value:"Tr\u1ea3 V\u1ec1",id:"tr\u1ea3-v\u1ec1",level:2},{value:"V\xed D\u1ee5",id:"v\xed-d\u1ee5",level:2},{value:"Ghi Ch\xfa",id:"ghi-ch\xfa",level:2},{value:"C\xe1c Callbacks Li\xean Quan",id:"c\xe1c-callbacks-li\xean-quan",level:2},{value:"T\xe0i Nguy\xean Li\xean Quan",id:"t\xe0i-nguy\xean-li\xean-quan",level:2}];function d(n){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.h2,{id:"m\xf4-t\u1ea3",children:"M\xf4 T\u1ea3"}),"\n",(0,a.jsx)(i.p,{children:"Callback n\xe0y \u0111\u01b0\u1ee3c g\u1ecdi khi m\u1ed9t ng\u01b0\u1eddi ch\u01a1i g\xe2y thi\u1ec7t h\u1ea1i cho ng\u01b0\u1eddi ch\u01a1i kh\xe1c."}),"\n",(0,a.jsxs)(i.table,{children:[(0,a.jsx)(i.thead,{children:(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.th,{children:"T\xean"}),(0,a.jsx)(i.th,{children:"M\xf4 T\u1ea3"})]})}),(0,a.jsxs)(i.tbody,{children:[(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:"playerid"}),(0,a.jsx)(i.td,{children:"ID c\u1ee7a ng\u01b0\u1eddi ch\u01a1i \u0111\xe3 g\xe2y thi\u1ec7t h\u1ea1i."})]}),(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:"damagedid"}),(0,a.jsx)(i.td,{children:"ID c\u1ee7a ng\u01b0\u1eddi ch\u01a1i b\u1ecb thi\u1ec7t h\u1ea1i."})]}),(0,a.jsxs)(i.tr,{children:[(0,a.jsxs)(i.td,{children:["Float",":amount"]}),(0,a.jsx)(i.td,{children:"S\u1ed1 l\u01b0\u1ee3ng m\xe1u/gi\xe1p m\xe0 damagedid \u0111\xe3 m\u1ea5t (k\u1ebft h\u1ee3p)."})]}),(0,a.jsxs)(i.tr,{children:[(0,a.jsxs)(i.td,{children:["WEAPON",":weaponid"]}),(0,a.jsx)(i.td,{children:"Nguy\xean nh\xe2n g\xe2y thi\u1ec7t h\u1ea1i."})]}),(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:"bodypart"}),(0,a.jsxs)(i.td,{children:[(0,a.jsx)(i.a,{href:"../resources/bodyparts",children:"Ph\u1ea7n c\u01a1 th\u1ec3"})," b\u1ecb tr\xfang \u0111\u1ea1n."]})]})]})]}),"\n",(0,a.jsx)(i.h2,{id:"tr\u1ea3-v\u1ec1",children:"Tr\u1ea3 V\u1ec1"}),"\n",(0,a.jsx)(i.p,{children:"1 - Callback s\u1ebd kh\xf4ng \u0111\u01b0\u1ee3c g\u1ecdi trong c\xe1c filterscript kh\xe1c."}),"\n",(0,a.jsx)(i.p,{children:"0 - Cho ph\xe9p callback n\xe0y \u0111\u01b0\u1ee3c g\u1ecdi trong c\xe1c filterscript kh\xe1c."}),"\n",(0,a.jsx)(i.p,{children:"Callback n\xe0y lu\xf4n \u0111\u01b0\u1ee3c g\u1ecdi \u0111\u1ea7u ti\xean trong filterscripts, v\xec v\u1eady vi\u1ec7c tr\u1ea3 v\u1ec1 1 \u1edf \u0111\xf3 s\u1ebd ng\u0103n callback \u0111\u01b0\u1ee3c th\u1ea5y trong c\xe1c filterscript kh\xe1c."}),"\n",(0,a.jsx)(i.h2,{id:"v\xed-d\u1ee5",children:"V\xed D\u1ee5"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-c",children:'public OnPlayerGiveDamage(playerid, damagedid, Float:amount, WEAPON:weaponid, bodypart)\n{\n    new string[128], victim[MAX_PLAYER_NAME], attacker[MAX_PLAYER_NAME];\n    new weaponname[24];\n    GetPlayerName(playerid, attacker, sizeof(attacker));\n    GetPlayerName(damagedid, victim, sizeof(victim));\n\n    GetWeaponName(weaponid, weaponname, sizeof(weaponname));\n    format(string, sizeof(string), "%s \u0111\xe3 g\xe2y %.0f thi\u1ec7t h\u1ea1i cho %s, v\u0169 kh\xed: %s, ph\u1ea7n c\u01a1 th\u1ec3: %d", attacker, amount, victim, weaponname, bodypart);\n    SendClientMessageToAll(0xFFFFFFFF, string);\n    return 1;\n}\n'})}),"\n",(0,a.jsx)(i.h2,{id:"ghi-ch\xfa",children:"Ghi Ch\xfa"}),"\n",(0,a.jsx)(i.admonition,{type:"tip",children:(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"L\u01b0u \xfd r\u1eb1ng h\xe0m n\xe0y c\xf3 th\u1ec3 kh\xf4ng ch\xednh x\xe1c trong m\u1ed9t s\u1ed1 tr\u01b0\u1eddng h\u1ee3p."}),"\n",(0,a.jsxs)(i.li,{children:["N\u1ebfu b\u1ea1n mu\u1ed1n ng\u0103n ch\u1eb7n m\u1ed9t s\u1ed1 ng\u01b0\u1eddi ch\u01a1i kh\xf4ng g\xe2y thi\u1ec7t h\u1ea1i cho nhau, h\xe3y s\u1eed d\u1ee5ng ",(0,a.jsx)(i.a,{href:"../functions/SetPlayerTeam",children:"SetPlayerTeam"}),"."]}),"\n",(0,a.jsx)(i.li,{children:"weaponid s\u1ebd tr\u1ea3 v\u1ec1 37 (s\xfang phun l\u1eeda) t\u1eeb b\u1ea5t k\u1ef3 ngu\u1ed3n l\u1eeda n\xe0o (v\xed d\u1ee5: molotov, 18)"}),"\n",(0,a.jsx)(i.li,{children:"weaponid s\u1ebd tr\u1ea3 v\u1ec1 51 t\u1eeb b\u1ea5t k\u1ef3 v\u0169 kh\xed n\xe0o t\u1ea1o ra v\u1ee5 n\u1ed5 (v\xed d\u1ee5: RPG, l\u1ef1u \u0111\u1ea1n)"}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"playerid"})," l\xe0 ng\u01b0\u1eddi duy nh\u1ea5t c\xf3 th\u1ec3 g\u1ecdi callback n\xe0y."]}),"\n",(0,a.jsx)(i.li,{children:"S\u1ed1 l\u01b0\u1ee3ng lu\xf4n l\xe0 l\u01b0\u1ee3ng thi\u1ec7t h\u1ea1i t\u1ed1i \u0111a m\xe0 weaponid c\xf3 th\u1ec3 g\xe2y ra, ngay c\u1ea3 khi s\u1ee9c kh\u1ecfe c\xf2n l\u1ea1i nh\u1ecf h\u01a1n l\u01b0\u1ee3ng thi\u1ec7t h\u1ea1i t\u1ed1i \u0111a \u0111\xf3. V\xec v\u1eady, khi m\u1ed9t ng\u01b0\u1eddi ch\u01a1i c\xf3 100.0 m\xe1u v\xe0 b\u1ecb b\u1eafn b\u1edfi Desert Eagle c\xf3 gi\xe1 tr\u1ecb thi\u1ec7t h\u1ea1i l\xe0 46.2, c\u1ea7n 3 ph\xe1t b\u1eafn \u0111\u1ec3 ti\xeau di\u1ec7t ng\u01b0\u1eddi ch\u01a1i \u0111\xf3. C\u1ea3 3 ph\xe1t b\u1eafn s\u1ebd hi\u1ec3n th\u1ecb s\u1ed1 l\u01b0\u1ee3ng 46.2, ngay c\u1ea3 khi khi ph\xe1t b\u1eafn cu\u1ed1i c\xf9ng tr\xfang, ng\u01b0\u1eddi ch\u01a1i ch\u1ec9 c\xf2n 7.6 m\xe1u."}),"\n"]})}),"\n",(0,a.jsx)(i.h2,{id:"c\xe1c-callbacks-li\xean-quan",children:"C\xe1c Callbacks Li\xean Quan"}),"\n",(0,a.jsx)(i.p,{children:"C\xe1c callback sau \u0111\xe2y c\xf3 th\u1ec3 h\u1eefu \xedch v\xec ch\xfang li\xean quan \u0111\u1ebfn callback n\xe0y theo m\u1ed9t c\xe1ch n\xe0o \u0111\xf3."}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.a,{href:"OnPlayerTakeDamage",children:"OnPlayerTakeDamage"}),": Callback n\xe0y \u0111\u01b0\u1ee3c g\u1ecdi khi m\u1ed9t ng\u01b0\u1eddi ch\u01a1i nh\u1eadn thi\u1ec7t h\u1ea1i."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.a,{href:"OnPlayerWeaponShot",children:"OnPlayerWeaponShot"}),": Callback n\xe0y \u0111\u01b0\u1ee3c g\u1ecdi khi m\u1ed9t ng\u01b0\u1eddi ch\u01a1i b\u1eafn v\u0169 kh\xed."]}),"\n"]}),"\n",(0,a.jsx)(i.h2,{id:"t\xe0i-nguy\xean-li\xean-quan",children:"T\xe0i Nguy\xean Li\xean Quan"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"../resources/bodyparts",children:"C\xe1c Ph\u1ea7n C\u01a1 Th\u1ec3"})}),"\n"]})]})}function o(n={}){const{wrapper:i}={...(0,c.R)(),...n.components};return i?(0,a.jsx)(i,{...n,children:(0,a.jsx)(d,{...n})}):d(n)}}}]);