"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[82935],{28453:(e,a,r)=>{r.d(a,{R:()=>i,x:()=>s});var n=r(96540);const t={},l=n.createContext(t);function i(e){const a=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(l.Provider,{value:a},e.children)}},70215:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>n,toc:()=>o});const n=JSON.parse('{"id":"scripting/callbacks/OnPlayerGiveDamageActor","title":"OnPlayerGiveDamageActor","description":"Bu geri \xe7a\u011f\u0131rma, bir oyuncu bir NPC\'ye hasar verdi\u011finde \xe7a\u011f\u0131r\u0131l\u0131r.","source":"@site/i18n/tr/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerGiveDamageActor.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerGiveDamageActor","permalink":"/tr/docs/scripting/callbacks/OnPlayerGiveDamageActor","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnPlayerGiveDamageActor.md","tags":[{"inline":true,"label":"player","permalink":"/tr/docs/tags/player"}],"version":"current","frontMatter":{"title":"OnPlayerGiveDamageActor","sidebar_label":"OnPlayerGiveDamageActor","description":"Bu geri \xe7a\u011f\u0131rma, bir oyuncu bir NPC\'ye hasar verdi\u011finde \xe7a\u011f\u0131r\u0131l\u0131r.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerGiveDamage","permalink":"/tr/docs/scripting/callbacks/OnPlayerGiveDamage"},"next":{"title":"OnPlayerInteriorChange","permalink":"/tr/docs/scripting/callbacks/OnPlayerInteriorChange"}}');var t=r(74848),l=r(28453);const i={title:"OnPlayerGiveDamageActor",sidebar_label:"OnPlayerGiveDamageActor",description:"Bu geri \xe7a\u011f\u0131rma, bir oyuncu bir NPC'ye hasar verdi\u011finde \xe7a\u011f\u0131r\u0131l\u0131r.",tags:["player"]},s=void 0,c={},o=[{value:"A\xe7\u0131klama",id:"a\xe7\u0131klama",level:2},{value:"\xc7al\u0131\u015f\u0131nca Verece\u011fi Sonu\xe7lar",id:"\xe7al\u0131\u015f\u0131nca-verece\u011fi-sonu\xe7lar",level:2},{value:"\xd6rnek",id:"\xf6rnek",level:2},{value:"Notlar",id:"notlar",level:2},{value:"Ba\u011flant\u0131l\u0131 Fonksiyonlar",id:"ba\u011flant\u0131l\u0131-fonksiyonlar",level:2},{value:"Ba\u011flant\u0131l\u0131 Geri \xc7a\u011f\u0131rmalar",id:"ba\u011flant\u0131l\u0131-geri-\xe7a\u011f\u0131rmalar",level:2}];function d(e){const a={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components},{VersionWarnTR:r}=a;return r||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarnTR",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r,{name:"callback",version:"SA-MP 0.3.7"}),"\n",(0,t.jsx)(a.h2,{id:"a\xe7\u0131klama",children:"A\xe7\u0131klama"}),"\n",(0,t.jsx)(a.p,{children:"Bu geri \xe7a\u011f\u0131rma, bir oyuncu bir NPC'ye hasar verdi\u011finde \xe7a\u011f\u0131r\u0131l\u0131r."}),"\n",(0,t.jsxs)(a.table,{children:[(0,t.jsx)(a.thead,{children:(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.th,{children:"Parametre"}),(0,t.jsx)(a.th,{children:"A\xe7\u0131klama"})]})}),(0,t.jsxs)(a.tbody,{children:[(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"playerid"}),(0,t.jsx)(a.td,{children:"Hasar veren oyuncunun ID'si."})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"damaged_actorid"}),(0,t.jsx)(a.td,{children:"Hasar alan NPC'nin ID'si."})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsxs)(a.td,{children:["Float",":amount"]}),(0,t.jsx)(a.td,{children:"Hasar alan NPC'nin kaybetti\u011fi can/z\u0131rh miktar\u0131."})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsxs)(a.td,{children:["WEAPON",":weaponid"]}),(0,t.jsx)(a.td,{children:"Hasar\u0131n sebebi."})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"bodypart"}),(0,t.jsx)(a.td,{children:"Hasar\u0131n isabet etti\u011fi v\xfccut b\xf6l\xfcm\xfc."})]})]})]}),"\n",(0,t.jsx)(a.h2,{id:"\xe7al\u0131\u015f\u0131nca-verece\u011fi-sonu\xe7lar",children:"\xc7al\u0131\u015f\u0131nca Verece\u011fi Sonu\xe7lar"}),"\n",(0,t.jsx)(a.p,{children:"1- Geri \xe7a\u011f\u0131rma di\u011fer filterscriptlerde \xe7a\u011f\u0131r\u0131lmayacak."}),"\n",(0,t.jsx)(a.p,{children:"0 - Geri \xe7a\u011f\u0131rma di\u011fer filterscriptlerde de \xe7a\u011f\u0131r\u0131lacak."}),"\n",(0,t.jsx)(a.p,{children:"Her zaman ilk \xf6nce filterscriptlerde \xe7a\u011f\u0131r\u0131l\u0131r, yani 1 de\u011ferini d\xf6nd\xfcrmek di\u011fer filterscriptlerin bu geri \xe7a\u011f\u0131rmay\u0131 g\xf6rmesini engeller."}),"\n",(0,t.jsx)(a.h2,{id:"\xf6rnek",children:"\xd6rnek"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-c",children:"public OnPlayerGiveDamageActor(playerid, damaged_actorid, Float:amount, WEAPON:weaponid, bodypart)\n{\n    new string[128], attacker[MAX_PLAYER_NAME];\n    new weaponname[24];\n    GetPlayerName(playerid, attacker, sizeof (attacker));\n    GetWeaponName(weaponid, weaponname, sizeof (weaponname));\n\n\tformat(string, sizeof(string), \"%s, %i ID'li NPC'ye %s'i kullanarak %0.f miktar\u0131nda hasar verdi.\", attacker, damaged_actorid, weaponname, amount);\n    SendClientMessageToAll(0xFFFFFFFF, string);\n    return 1;\n}\n"})}),"\n",(0,t.jsx)(a.h2,{id:"notlar",children:"Notlar"}),"\n",(0,t.jsx)(a.admonition,{type:"tip",children:(0,t.jsxs)(a.p,{children:["Bu fonksiyon hasar almayan NPC'lerde \xe7a\u011f\u0131r\u0131lmaz, (NPC'ler varsay\u0131lan olarak hasar almazlar.) ",(0,t.jsx)(a.a,{href:"../functions/SetActorInvulnerable",children:"SetActorInvulnerable"})," fonksiyonuna bak\u0131n."]})}),"\n",(0,t.jsx)(a.h2,{id:"ba\u011flant\u0131l\u0131-fonksiyonlar",children:"Ba\u011flant\u0131l\u0131 Fonksiyonlar"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.a,{href:"../functions/CreateActor",children:"CreateActor"}),": Create an actor (static NPC)."]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.a,{href:"../functions/SetActorInvulnerable",children:"SetActorInvulnerable"}),": Set actor invulnerable."]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.a,{href:"../functions/SetActorHealth",children:"SetActorHealth"}),": Set the health of an actor."]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.a,{href:"../functions/GetActorHealth",children:"GetActorHealth"}),": Gets the health of an actor."]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.a,{href:"../functions/IsActorInvulnerable",children:"IsActorInvulnerable"}),": Check if actor is invulnerable."]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.a,{href:"../functions/IsValidActor",children:"IsValidActor"}),": Check if actor id is valid."]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"ba\u011flant\u0131l\u0131-geri-\xe7a\u011f\u0131rmalar",children:"Ba\u011flant\u0131l\u0131 Geri \xc7a\u011f\u0131rmalar"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.a,{href:"OnActorStreamOut",children:"OnActorStreamOut"}),": Called when an actor is streamed out by a player."]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.a,{href:"OnPlayerStreamIn",children:"OnPlayerStreamIn"}),": Called when a player streams in for another player."]}),"\n"]})]})}function h(e={}){const{wrapper:a}={...(0,l.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}}}]);