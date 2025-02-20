"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[43412],{28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>c});var i=r(96540);const a={},n=i.createContext(a);function s(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(n.Provider,{value:t},e.children)}},32425:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"scripting/functions/StopPlayerObject","title":"StopPlayerObject","description":"Zaustavi player-object koji se kre\u0107e nakon \u0161to se MovePlayerObject koristio.","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/StopPlayerObject.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/StopPlayerObject","permalink":"/bs/docs/scripting/functions/StopPlayerObject","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/StopPlayerObject.md","tags":[{"inline":true,"label":"player","permalink":"/bs/docs/tags/player"}],"version":"current","frontMatter":{"title":"StopPlayerObject","sidebar_label":"StopPlayerObject","description":"Zaustavi player-object koji se kre\u0107e nakon \u0161to se MovePlayerObject koristio.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"StopPlayerHoldingObject","permalink":"/bs/docs/scripting/functions/StopPlayerHoldingObject"},"next":{"title":"StopRecordingPlayback","permalink":"/bs/docs/scripting/functions/StopRecordingPlayback"}}');var a=r(74848),n=r(28453);const s={title:"StopPlayerObject",sidebar_label:"StopPlayerObject",description:"Zaustavi player-object koji se kre\u0107e nakon \u0161to se MovePlayerObject koristio.",tags:["player"]},c=void 0,l={},o=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function j(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,a.jsx)(t.p,{children:"Zaustavi player-object koji se kre\u0107e nakon \u0161to se MovePlayerObject koristio."}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Ime"}),(0,a.jsx)(t.th,{children:"Deskripcija"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"playerid"}),(0,a.jsx)(t.td,{children:"ID igra\u010da \u010diji player-object treba zaustaviti."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"objectid"}),(0,a.jsx)(t.td,{children:"ID player-object-a za zaustaviti."})]})]})]}),"\n",(0,a.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(t.p,{children:"Ova funkcija ne returna (vra\u0107a) nikakve posebne vrijednosti."}),"\n",(0,a.jsx)(t.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-c",children:"StopPlayerObject(playerid, objectid);\n"})}),"\n",(0,a.jsx)(t.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"MovePlayerObject",children:"MovePlayerObject"}),": Pomjeri player objekat."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"CreatePlayerObject",children:"CreatePlayerObject"}),": Kreiraj objekat za samo jednog igra\u010da."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"DestroyPlayerObject",children:"DestroyPlayerObject"}),": Uni\u0161ti player objekat."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"IsValidPlayerObject",children:"IsValidPlayerObject"}),": Provjeri da li je odre\u0111eni player objekat validan."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"IsPlayerObjectMoving",children:"IsPlayerObjectMoving"}),": Provjeri da li se player objekat kre\u0107e."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"SetPlayerObjectPos",children:"SetPlayerObjectPos"}),": Postavi poziciju player objekta."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"SetPlayerObjectRot",children:"SetPlayerObjectRot"}),": Postavi rotaciju player objekta."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"GetPlayerObjectPos",children:"GetPlayerObjectPos"}),": Lociraj player objekat."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"GetPlayerObjectRot",children:"GetPlayerObjectRot"}),": Provjeri rotaciju player objekta."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"AttachPlayerObjectToPlayer",children:"AttachPlayerObjectToPlayer"}),": Prikva\u010di player objekat za igra\u010da."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"CreateObject",children:"CreateObject"}),": Kreiraj objekat."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"DestroyObject",children:"DestroyObject"}),": Uni\u0161ti objekat."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"IsValidObject",children:"IsValidObject"}),": Provjeri da li je odre\u0111eni objekat validan."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"MoveObject",children:"MoveObject"}),": Pomjeri objekat."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"IsObjectMoving",children:"IsObjectMoving"}),": Provjeri da li se objekat kre\u0107e."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"StopObject",children:"StopObject"}),": Zaustavi objekat od kretanja."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"SetObjectPos",children:"SetObjectPos"}),": Postavi poziciju objekta."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"SetObjectRot",children:"SetObjectRot"}),": Postavi rotaciju objekta."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"GetObjectPos",children:"GetObjectPos"}),": Lociraj objekat."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"GetObjectRot",children:"GetObjectRot"}),": Provjeri rotaciju objekta."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"AttachObjectToPlayer",children:"AttachObjectToPlayer"}),": Prikva\u010di objekat za igra\u010da."]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(j,{...e})}):j(e)}}}]);