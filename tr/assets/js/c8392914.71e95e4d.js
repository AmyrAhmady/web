"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[54274],{28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>a});var r=n(96540);const i={},l=r.createContext(i);function c(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(l.Provider,{value:t},e.children)}},71953:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>c,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"scripting/functions/AttachObjectToPlayer","title":"AttachObjectToPlayer","description":"Objeyi oyuncuya ba\u011flama.","source":"@site/i18n/tr/docusaurus-plugin-content-docs/current/scripting/functions/AttachObjectToPlayer.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/AttachObjectToPlayer","permalink":"/tr/docs/scripting/functions/AttachObjectToPlayer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/AttachObjectToPlayer.md","tags":[{"inline":true,"label":"player","permalink":"/tr/docs/tags/player"}],"version":"current","frontMatter":{"title":"AttachObjectToPlayer","sidebar_label":"AttachObjectToPlayer","description":"Objeyi oyuncuya ba\u011flama.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"AttachObjectToObject","permalink":"/tr/docs/scripting/functions/AttachObjectToObject"},"next":{"title":"AttachObjectToVehicle","permalink":"/tr/docs/scripting/functions/AttachObjectToVehicle"}}');var i=n(74848),l=n(28453);const c={title:"AttachObjectToPlayer",sidebar_label:"AttachObjectToPlayer",description:"Objeyi oyuncuya ba\u011flama.",tags:["player"]},a=void 0,s={},o=[{value:"A\xe7\u0131klama",id:"a\xe7\u0131klama",level:2},{value:"\xc7al\u0131\u015f\u0131nca Verece\u011fi Sonu\xe7lar",id:"\xe7al\u0131\u015f\u0131nca-verece\u011fi-sonu\xe7lar",level:2},{value:"\xd6rnekler",id:"\xf6rnekler",level:2},{value:"Ba\u011flant\u0131l\u0131 Fonksiyonlar",id:"ba\u011flant\u0131l\u0131-fonksiyonlar",level:2}];function j(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"a\xe7\u0131klama",children:"A\xe7\u0131klama"}),"\n",(0,i.jsx)(t.p,{children:"Bir objeyi oyuncuya ba\u011flar."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Parametre"}),(0,i.jsx)(t.th,{children:"A\xe7\u0131klama"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"objectid"}),(0,i.jsx)(t.td,{children:"Ba\u011flan\u0131lacak objenin ID'si."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"playerid"}),(0,i.jsx)(t.td,{children:"Ba\u011flanacak oyuncunun ID'si."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["Float",":OffsetX"]}),(0,i.jsx)(t.td,{children:"Oyuncunun obje ile aras\u0131ndaki X de\u011feri."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["Float",":OffsetY"]}),(0,i.jsx)(t.td,{children:"Oyuncunun obje ile aras\u0131ndaki Y de\u011feri."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["Float",":OffsetZ"]}),(0,i.jsx)(t.td,{children:"Oyuncunun obje ile aras\u0131ndaki Z de\u011feri."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["Float",":RotX"]}),(0,i.jsx)(t.td,{children:"Oyuncunun obje ile aras\u0131ndaki X a\xe7\u0131s\u0131n\u0131n de\u011feri."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["Float",":RotY"]}),(0,i.jsx)(t.td,{children:"Oyuncunun obje ile aras\u0131ndaki Y a\xe7\u0131s\u0131n\u0131n de\u011feri."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["Float",":RotZ"]}),(0,i.jsx)(t.td,{children:"Oyuncunun obje ile aras\u0131ndaki Z a\xe7\u0131s\u0131n\u0131n de\u011feri."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"\xe7al\u0131\u015f\u0131nca-verece\u011fi-sonu\xe7lar",children:"\xc7al\u0131\u015f\u0131nca Verece\u011fi Sonu\xe7lar"}),"\n",(0,i.jsx)(t.p,{children:"Bu fonksiyon her zaman 0 d\xf6nd\xfcr\xfcr."}),"\n",(0,i.jsx)(t.h2,{id:"\xf6rnekler",children:"\xd6rnekler"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:"new gMyObject;\ngMyObject = CreateObject(19341, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0); // Objeyi olu\u015fturduk\nAttachObjectToPlayer(gMyObject, playerid, 1.5, 0.5, 0.0, 0.0, 1.5, 2); // Objeyi oyuncuya ba\u011flad\u0131k.\n"})}),"\n",(0,i.jsx)(t.h2,{id:"ba\u011flant\u0131l\u0131-fonksiyonlar",children:"Ba\u011flant\u0131l\u0131 Fonksiyonlar"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"AttachObjectToVehicle",children:"AttachObjectToVehicle"}),": Bir objeyi araca ba\u011flama."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"AttachObjectToObject",children:"AttachObjectToObject"}),": Bir objeyi bir di\u011fer objeye ba\u011flama."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"AttachPlayerObjectToPlayer",children:"AttachPlayerObjectToPlayer"}),": Bir oyuncu objesini bir objeye ba\u011flama."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"CreateObject",children:"CreateObject"}),": Obje olu\u015fturma."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"DestroyObject",children:"DestroyObject"}),": Obje silme."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"IsValidObject",children:"IsValidObject"}),": Objenin olu\u015fturulup olu\u015fturulmad\u0131\u011f\u0131n\u0131 kontrol etme."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"MoveObject",children:"MoveObject"}),": Objeyi hareket ettirme."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"StopObject",children:"StopObject"}),": Hareket eden bir objeyi durdurma."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"SetObjectPos",children:"SetObjectPos"}),": Objenin pozisyonunu de\u011fi\u015ftirme."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"SetObjectRot",children:"SetObjectRot"}),": Objenin rotasyonunu de\u011fi\u015ftirme."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"GetObjectPos",children:"GetObjectPos"}),": Objenin pozisyonunu kontrol etme."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"GetObjectRot",children:"GetObjectRot"}),": Objenin rotasyonunu kontrol etme."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"CreatePlayerObject",children:"CreatePlayerObject"}),": Oyuncu objesi olu\u015fturma."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"DestroyPlayerObject",children:"DestroyPlayerObject"}),": Oyuncu objesini kald\u0131rma."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"IsValidPlayerObject",children:"IsValidPlayerObject"}),": Oyuncu objesinin olu\u015fturulup olu\u015fturulmad\u0131\u011f\u0131n\u0131 kontrol etme."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"MovePlayerObject",children:"MovePlayerObject"}),": Oyuncu objesini hareket ettirme."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"StopPlayerObject",children:"StopPlayerObject"}),": Hareket eden oyuncu objesini durdurma."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"SetPlayerObjectPos",children:"SetPlayerObjectPos"}),": Oyuncu objesinin pozisyonunu de\u011fi\u015ftirme."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"SetPlayerObjectRot",children:"SetPlayerObjectRot"}),": Oyuncu objesinin rotasyonunu de\u011fi\u015ftirme."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"GetPlayerObjectPos",children:"GetPlayerObjectPos"}),": Oyuncu objesinin pozisyonunu kontrol etme."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"GetPlayerObjectRot",children:"GetPlayerObjectRot"}),": Oyuncu objesinin rotasyonunu kontrol etme."]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(j,{...e})}):j(e)}}}]);