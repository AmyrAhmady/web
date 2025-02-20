"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[49691],{28453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>c});var a=r(96540);const l={},i=a.createContext(l);function t(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),a.createElement(i.Provider,{value:n},e.children)}},91804:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>o});const a=JSON.parse('{"id":"scripting/callbacks/OnTrailerUpdate","title":"OnTrailerUpdate","description":"Bu fonksiyon, oyuncu arac\u0131na r\xf6mork ba\u011flad\u0131\u011f\u0131nda \xe7a\u011fr\u0131l\u0131r.","source":"@site/i18n/tr/docusaurus-plugin-content-docs/current/scripting/callbacks/OnTrailerUpdate.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnTrailerUpdate","permalink":"/tr/docs/scripting/callbacks/OnTrailerUpdate","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnTrailerUpdate.md","tags":[],"version":"current","frontMatter":{"title":"OnTrailerUpdate","sidebar_label":"OnTrailerUpdate","description":"Bu fonksiyon, oyuncu arac\u0131na r\xf6mork ba\u011flad\u0131\u011f\u0131nda \xe7a\u011fr\u0131l\u0131r.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"OnScriptUnloadPlayer","permalink":"/tr/docs/scripting/callbacks/OnScriptUnloadPlayer"},"next":{"title":"OnUnoccupiedVehicleUpdate","permalink":"/tr/docs/scripting/callbacks/OnUnoccupiedVehicleUpdate"}}');var l=r(74848),i=r(28453);const t={title:"OnTrailerUpdate",sidebar_label:"OnTrailerUpdate",description:"Bu fonksiyon, oyuncu arac\u0131na r\xf6mork ba\u011flad\u0131\u011f\u0131nda \xe7a\u011fr\u0131l\u0131r.",tags:[]},c=void 0,s={},o=[{value:"A\xe7\u0131klama",id:"a\xe7\u0131klama",level:2},{value:"\xc7al\u0131\u015f\u0131nca Verece\u011fi Sonu\xe7lar",id:"\xe7al\u0131\u015f\u0131nca-verece\u011fi-sonu\xe7lar",level:2},{value:"\xd6rnek",id:"\xf6rnek",level:2},{value:"Notlar",id:"notlar",level:2},{value:"Ba\u011flant\u0131l\u0131 Fonksiyonlar",id:"ba\u011flant\u0131l\u0131-fonksiyonlar",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"a\xe7\u0131klama",children:"A\xe7\u0131klama"}),"\n",(0,l.jsx)(n.p,{children:"Bu fonksiyon, oyuncu arac\u0131na r\xf6mork ba\u011flad\u0131\u011f\u0131nda \xe7a\u011fr\u0131l\u0131r."}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Parametre"}),(0,l.jsx)(n.th,{children:"A\xe7\u0131klama"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"playerid"}),(0,l.jsx)(n.td,{children:"R\xf6mork g\xfcncellemesi g\xf6nderen oyuncunun ID'si."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"vehicleid"}),(0,l.jsx)(n.td,{children:"G\xfcncellemesi g\xf6nderilen r\xf6mork'un ID'si. (ara\xe7)"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"\xe7al\u0131\u015f\u0131nca-verece\u011fi-sonu\xe7lar",children:"\xc7al\u0131\u015f\u0131nca Verece\u011fi Sonu\xe7lar"}),"\n",(0,l.jsx)(n.p,{children:"0 - Herhangi bir r\xf6mork g\xfcncellemelerinin di\u011fer oyunculara g\xf6nderilmesini iptal eder. G\xfcncelleme, g\xfcncelleyen oyuncuya hala g\xf6nderilir."}),"\n",(0,l.jsx)(n.p,{children:"1 - R\xf6mork g\xfcncellemesini normal \u015fekilde i\u015fler ve t\xfcm oyuncular aras\u0131nda senkronize eder."}),"\n",(0,l.jsx)(n.p,{children:"Filterscript komutlar\u0131nda her zaman ilk olarak \xe7a\u011fr\u0131l\u0131r."}),"\n",(0,l.jsx)(n.h2,{id:"\xf6rnek",children:"\xd6rnek"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:"public OnTrailerUpdate(playerid, vehicleid)\n{\n    DetachTrailerFromVehicle(GetPlayerVehicleID(playerid));\n    return 0;\n}\n"})}),"\n",(0,l.jsx)(n.h2,{id:"notlar",children:"Notlar"}),"\n",(0,l.jsx)(n.admonition,{type:"warning",children:(0,l.jsx)(n.p,{children:"Bu fonksiyon, her r\xf6mork i\xe7in saniyede \xe7ok s\u0131k \xe7a\u011fr\u0131l\u0131r. Bu \xe7a\u011fr\u0131da yo\u011fun hesaplamalar veya yo\u011fun dosya yazma / okuma i\u015flemleri yapmaktan ka\xe7\u0131nmal\u0131s\u0131n\u0131z."})}),"\n",(0,l.jsx)(n.h2,{id:"ba\u011flant\u0131l\u0131-fonksiyonlar",children:"Ba\u011flant\u0131l\u0131 Fonksiyonlar"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../functions/GetVehicleTrailer",children:"GetVehicleTrailer"}),": Arac\u0131n hangi r\xf6morku \xe7ekti\u011fini kontrol etme."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../functions/IsTrailerAttachedToVehicle",children:"IsTrailerAttachedToVehicle"}),": Araca r\xf6mork ba\u011flan\u0131p ba\u011flanmad\u0131\u011f\u0131n\u0131 kontrol edin."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../functions/AttachTrailerToVehicle",children:"AttachTrailerToVehicle"}),": Araca bir r\xf6mork takma."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../functions/DetachTrailerFromVehicle",children:"DetachTrailerFromVehicle"}),": Araca ba\u011flanan r\xf6morku \xe7\u0131karma."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}}}]);