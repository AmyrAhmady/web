"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[17815],{28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var r=n(96540);const a={},i=r.createContext(a);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:t},e.children)}},52036:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"scripting/functions/GetPlayerWeaponState","title":"GetPlayerWeaponState","description":"Provjeri stanje igra\u010devog oru\u017eja.","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/GetPlayerWeaponState.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerWeaponState","permalink":"/bs/docs/scripting/functions/GetPlayerWeaponState","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetPlayerWeaponState.md","tags":[{"inline":true,"label":"player","permalink":"/bs/docs/tags/player"}],"version":"current","frontMatter":{"title":"GetPlayerWeaponState","sidebar_label":"GetPlayerWeaponState","description":"Provjeri stanje igra\u010devog oru\u017eja.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerWeaponData","permalink":"/bs/docs/scripting/functions/GetPlayerWeaponData"},"next":{"title":"GetPlayerWeather","permalink":"/bs/docs/scripting/functions/GetPlayerWeather"}}');var a=n(74848),i=n(28453);const s={title:"GetPlayerWeaponState",sidebar_label:"GetPlayerWeaponState",description:"Provjeri stanje igra\u010devog oru\u017eja.",tags:["player"]},o=void 0,l={},c=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,a.jsx)(t.p,{children:"Provjeri stanje igra\u010devog oru\u017eja."}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Ime"}),(0,a.jsx)(t.th,{children:"Deskripcija"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"playerid"}),(0,a.jsx)(t.td,{children:"ID igra\u010da za primiti stanje oru\u017eja."})]})})]}),"\n",(0,a.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(t.p,{children:"Stanje igra\u010devog oru\u017eja. 0 ako navedeni igra\u010d ne postoji."}),"\n",(0,a.jsx)(t.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-c",children:'public OnPlayerSpawn(playerid)\n{\n    SetPVarInt(playerid, "WepState", GetPlayerWeaponState(playerid));\n    return 1;\n}\n'})}),"\n",(0,a.jsx)(t.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"GivePlayerWeapon",children:"GivePlayerWeapon"}),": Daj igra\u010du oru\u017eje."]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}}}]);