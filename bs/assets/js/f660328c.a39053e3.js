"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[52001],{28453:(e,i,n)=>{n.d(i,{R:()=>l,x:()=>o});var t=n(96540);const s={},r=t.createContext(s);function l(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(r.Provider,{value:i},e.children)}},92684:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"scripting/functions/SetVehiclePos","title":"SetVehiclePos","description":"Postavlja poziciju vozila.","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/SetVehiclePos.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetVehiclePos","permalink":"/bs/docs/scripting/functions/SetVehiclePos","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/SetVehiclePos.md","tags":[{"inline":true,"label":"vehicle","permalink":"/bs/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"SetVehiclePos","sidebar_label":"SetVehiclePos","description":"Postavlja poziciju vozila.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"SetVehicleParamsSirenState","permalink":"/bs/docs/scripting/functions/SetVehicleParamsSirenState"},"next":{"title":"SetVehicleRespawnDelay","permalink":"/bs/docs/scripting/functions/SetVehicleRespawnDelay"}}');var s=n(74848),r=n(28453);const l={title:"SetVehiclePos",sidebar_label:"SetVehiclePos",description:"Postavlja poziciju vozila.",tags:["vehicle"]},o=void 0,c={},a=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Zabilje\u0161ke",id:"zabilje\u0161ke",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function d(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,s.jsx)(i.p,{children:"Postavlja poziciju vozila."}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Ime"}),(0,s.jsx)(i.th,{children:"Deskripcija"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"vehicleid"}),(0,s.jsx)(i.td,{children:"ID vozila kojem \u017eelite postaviti novu poziciju."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsxs)(i.td,{children:["Float",":x"]}),(0,s.jsx)(i.td,{children:"X kordinata na koju treba pozicirati vozilo."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsxs)(i.td,{children:["Float",":y"]}),(0,s.jsx)(i.td,{children:"Y kordinata na koju treba pozicirati vozilo."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsxs)(i.td,{children:["Float",":z"]}),(0,s.jsx)(i.td,{children:"Z kordinata na koju treba pozicirati vozilo."})]})]})]}),"\n",(0,s.jsx)(i.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(i.p,{children:"1: Funkcija uspje\u0161no izvr\u0161ena."}),"\n",(0,s.jsx)(i.p,{children:"0: Funkcija neuspje\u0161no izvr\u0161ena. Navedeno vozilo ne postoji."}),"\n",(0,s.jsx)(i.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-c",children:"// Postavi vozilo igra\u010da na kordinatama 0, 0, 3 (centar SA)\nnew vehicleid = GetPlayerVehicleID(playerid);\nSetVehiclePos(vehicleid, 0, 0, 3);\n"})}),"\n",(0,s.jsx)(i.h2,{id:"zabilje\u0161ke",children:"Zabilje\u0161ke"}),"\n",(0,s.jsx)(i.admonition,{type:"warning",children:(0,s.jsx)(i.p,{children:"Prazno vozilo ne\u0107e padati nakon \u0161to se bude teleportovalo u zrak."})}),"\n",(0,s.jsx)(i.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"SetPlayerPos",children:"SetPlayerPos"}),": Postavite poziciju igra\u010da."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"GetVehiclePos",children:"GetVehiclePos"}),": Doznajte polo\u017eaj vozila."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"SetVehicleZAngle",children:"SetVehicleZAngle"}),": Postavi smjer vozila."]}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}}}]);