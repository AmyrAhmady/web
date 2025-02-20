"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[23893],{28453:(e,i,n)=>{n.d(i,{R:()=>o,x:()=>a});var d=n(96540);const r={},t=d.createContext(r);function o(e){const i=d.useContext(t);return d.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),d.createElement(t.Provider,{value:i},e.children)}},49993:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>l});const d=JSON.parse('{"id":"scripting/functions/AddSimpleModel","title":"AddSimpleModel","description":"Dodaje novi prilago\u0111en/custom prost model objekta za preuzimanje.","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/AddSimpleModel.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/AddSimpleModel","permalink":"/bs/docs/scripting/functions/AddSimpleModel","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/AddSimpleModel.md","tags":[],"version":"current","frontMatter":{"title":"AddSimpleModel","sidebar_label":"AddSimpleModel","description":"Dodaje novi prilago\u0111en/custom prost model objekta za preuzimanje.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"AddServerRule","permalink":"/bs/docs/scripting/functions/AddServerRule"},"next":{"title":"AddSimpleModelTimed","permalink":"/bs/docs/scripting/functions/AddSimpleModelTimed"}}');var r=n(74848),t=n(28453);const o={title:"AddSimpleModel",sidebar_label:"AddSimpleModel",description:"Dodaje novi prilago\u0111en/custom prost model objekta za preuzimanje.",tags:[]},a=void 0,s={},l=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Zabilje\u0161ke",id:"zabilje\u0161ke",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function c(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.admonition,{type:"warning",children:(0,r.jsx)(i.p,{children:"Ova funkcija je dodana u SA-MP 0.3.DL R1 i ne radi u ni\u017eim verzijama!"})}),"\n",(0,r.jsx)(i.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,r.jsx)(i.p,{children:"Dodaje novi prilago\u0111en/custom prost model objekta za preuzimanje. Fajlovi modela \u0107e biti pohranjeni u igra\u010devim: Documents\\GTA San Andreas User Files\\SAMP\\cache ispod Server IP i Port foldera u CRC-formi imena fajla."}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Ime"}),(0,r.jsx)(i.th,{children:"Deskripcija"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"virtualworld"}),(0,r.jsx)(i.td,{children:"ID virtualnog svijeta za kojeg \u0107e model biti dostupan, koristi -1 za sve svjetove."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"baseid"}),(0,r.jsx)(i.td,{children:"The base object model ID to use (original object to use when download is failed)."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"newid"}),(0,r.jsx)(i.td,{children:"Novi skin model ID izme\u0111u -1000 i -30000 (29000 slotova) da bi se kasnije koristio sa CreateObject i CreatePlayerObject."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"dffname"}),(0,r.jsx)(i.td,{children:"Ime .dff collision modela fajla koji se nalazi u 'models' server folderu po zadanim postavkama (artpath postavka)."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"txdname"}),(0,r.jsx)(i.td,{children:"Ime .txd texture modela fajla koji se nalazi u 'models' server folderu po zadanim postavkama (artpath postavka)."})]})]})]}),"\n",(0,r.jsx)(i.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(i.p,{children:"1: Funkcija uspje\u0161no izvr\u0161ena."}),"\n",(0,r.jsx)(i.p,{children:"0: Funkcija neuspje\u0161no izvr\u0161ena."}),"\n",(0,r.jsx)(i.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-c",children:'public OnGameModeInit()\n{\n    AddSimpleModel(-1, 19379, -2000, "wallzzz.dff", "wallzzz.txd");\n    return 1;\n}\n'})}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-c",children:'AddSimpleModel(-1, 19379, -2000, "wallzzz.dff", "wallzzz.txd");\n'})}),"\n",(0,r.jsx)(i.h2,{id:"zabilje\u0161ke",children:"Zabilje\u0161ke"}),"\n",(0,r.jsx)(i.admonition,{type:"tip",children:(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.code,{children:"useartwork"})," mora biti omogu\u0107en (u server settings) da bi ovo radilo kada je virtualworld postavljen, modeli \u0107e se preuzimati kada igra\u010d u\u0111e u odre\u0111eni svijet"]})}),"\n",(0,r.jsx)(i.admonition,{type:"warning",children:(0,r.jsx)(i.p,{children:"Trenutno ne postoje nikakva ograni\u010denja o pozivanju ove funkcije, ali budite oprezni jer ako ih ne koristite unutar OnFilterScriptInit/OnGameModeInit, riskirate da neki igra\u010di, koji su ve\u0107 na server, mo\u017eda ne preuzmu modele."})}),"\n",(0,r.jsx)(i.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"/bs/docs/scripting/callbacks/OnPlayerFinishedDownloading",children:"OnPlayerFinishedDownloading"}),": Pozvano kada igra\u010d dovr\u0161i preuzimanje prilago\u0111enih/custom modela."]}),"\n"]})]})}function u(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}}}]);