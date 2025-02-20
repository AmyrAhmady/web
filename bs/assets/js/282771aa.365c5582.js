"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[28830],{28453:(e,r,a)=>{a.d(r,{R:()=>l,x:()=>s});var t=a(96540);const i={},n=t.createContext(i);function l(e){const r=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(n.Provider,{value:r},e.children)}},81258:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"scripting/functions/PlayerTextDrawShow","title":"PlayerTextDrawShow","description":"Prika\u017ei player-textdraw igra\u010du za kojeg je kreiran.","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/PlayerTextDrawShow.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/PlayerTextDrawShow","permalink":"/bs/docs/scripting/functions/PlayerTextDrawShow","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/PlayerTextDrawShow.md","tags":[{"inline":true,"label":"player","permalink":"/bs/docs/tags/player"},{"inline":true,"label":"textdraw","permalink":"/bs/docs/tags/textdraw"},{"inline":true,"label":"playertextdraw","permalink":"/bs/docs/tags/playertextdraw"}],"version":"current","frontMatter":{"title":"PlayerTextDrawShow","sidebar_label":"PlayerTextDrawShow","description":"Prika\u017ei player-textdraw igra\u010du za kojeg je kreiran.","tags":["player","textdraw","playertextdraw"]},"sidebar":"docsSidebar","previous":{"title":"PlayerTextDrawSetString","permalink":"/bs/docs/scripting/functions/PlayerTextDrawSetString"},"next":{"title":"PlayerTextDrawTextSize","permalink":"/bs/docs/scripting/functions/PlayerTextDrawTextSize"}}');var i=a(74848),n=a(28453);const l={title:"PlayerTextDrawShow",sidebar_label:"PlayerTextDrawShow",description:"Prika\u017ei player-textdraw igra\u010du za kojeg je kreiran.",tags:["player","textdraw","playertextdraw"]},s=void 0,o={},d=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Zabilje\u0161ke",id:"zabilje\u0161ke",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function x(e){const r={a:"a",admonition:"admonition",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,i.jsx)(r.p,{children:"Prika\u017ei player-textdraw igra\u010du za kojeg je kreiran."}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Ime"}),(0,i.jsx)(r.th,{children:"Deskripcija"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"playerid"}),(0,i.jsx)(r.td,{children:"ID igra\u010da za prikazati textdraw."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"text"}),(0,i.jsx)(r.td,{children:"ID textdraw za prikazati."})]})]})]}),"\n",(0,i.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(r.p,{children:"Ova funkcija ne returna (vra\u0107a) nikakve posebne vrijednosti."}),"\n",(0,i.jsx)(r.h2,{id:"zabilje\u0161ke",children:"Zabilje\u0161ke"}),"\n",(0,i.jsx)(r.admonition,{type:"tip",children:(0,i.jsx)(r.p,{children:"Izvla\u010denje teksta igra\u010da vrijedi samo za igra\u010d za kojeg je stvoren. To zna\u010di da ne mo\u017eete drugom igra\u010du prikazati tekstdraw stvorenog za odre\u0111enog igra\u010da."})}),"\n",(0,i.jsx)(r.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"PlayerTextDrawHide",children:"PlayerTextDrawHide"}),": Sakrij player-textdraw."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"CreatePlayerTextDraw",children:"CreatePlayerTextDraw"}),": Kreiraj player-textdraw."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"PlayerTextDrawDestroy",children:"PlayerTextDrawDestroy"}),": Uni\u0161ti player-textdraw."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"PlayerTextDrawColor",children:"PlayerTextDrawColor"}),": Postavi boju teksta u player-textdrawu."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"PlayerTextDrawBoxColor",children:"PlayerTextDrawBoxColor"}),": Postavi boju box-a od player-textdrawa."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"PlayerTextDrawBackgroundColor",children:"PlayerTextDrawBackgroundColor"}),": Postavi boju pozadine player-textdrawa."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"PlayerTextDrawAlignment",children:"PlayerTextDrawAlignment"}),": Postavi poravnanje player-textdrawa."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"PlayerTextDrawFont",children:"PlayerTextDrawFont"}),": Postavi font player-textdrawa."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"PlayerTextDrawLetterSize",children:"PlayerTextDrawLetterSize"}),": Postavi veli\u010dinu slova u tekstu player-textdrawa."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"PlayerTextDrawTextSize",children:"PlayerTextDrawTextSize"}),": Postavi veli\u010dinu box-a player-textdrawa (ili dijela koji reaguje na klik za PlayerTextDrawSetSelectable)."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"PlayerTextDrawSetOutline",children:"PlayerTextDrawSetOutline"}),": Omogu\u0107i/onemogu\u0107i kori\u0161\u0107enje outline-a za player-textdraw."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"PlayerTextDrawSetShadow",children:"PlayerTextDrawSetShadow"}),": Postavi sjenu na player-textdraw."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"PlayerTextDrawSetProportional",children:"PlayerTextDrawSetProportional"}),": Razmjeri razmak teksta u player-textdrawu na proporcionalni omjer."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"PlayerTextDrawUseBox",children:"PlayerTextDrawUseBox"}),": Omogu\u0107i/onemogu\u0107i kori\u0161\u0107enje box-a za player-textdraw."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"PlayerTextDrawSetString",children:"PlayerTextDrawSetString"}),": Postavi tekst player-textdrawa."]}),"\n"]})]})}function c(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}}}]);