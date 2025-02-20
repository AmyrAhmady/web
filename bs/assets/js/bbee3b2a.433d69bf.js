"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[76825],{28453:(e,i,a)=>{a.d(i,{R:()=>l,x:()=>s});var t=a(96540);const n={},r=t.createContext(n);function l(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),t.createElement(r.Provider,{value:i},e.children)}},65181:(e,i,a)=>{a.r(i),a.d(i,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"scripting/functions/PlayerSpectateVehicle","title":"PlayerSpectateVehicle","description":"Postavlja igra\u010da da spectate-a (nadgleda) neko vozilo.","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/PlayerSpectateVehicle.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/PlayerSpectateVehicle","permalink":"/bs/docs/scripting/functions/PlayerSpectateVehicle","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/PlayerSpectateVehicle.md","tags":[{"inline":true,"label":"player","permalink":"/bs/docs/tags/player"},{"inline":true,"label":"vehicle","permalink":"/bs/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"PlayerSpectateVehicle","sidebar_label":"PlayerSpectateVehicle","description":"Postavlja igra\u010da da spectate-a (nadgleda) neko vozilo.","tags":["player","vehicle"]},"sidebar":"docsSidebar","previous":{"title":"PlayerSpectatePlayer","permalink":"/bs/docs/scripting/functions/PlayerSpectatePlayer"},"next":{"title":"PlayerTextDrawAlignment","permalink":"/bs/docs/scripting/functions/PlayerTextDrawAlignment"}}');var n=a(74848),r=a(28453);const l={title:"PlayerSpectateVehicle",sidebar_label:"PlayerSpectateVehicle",description:"Postavlja igra\u010da da spectate-a (nadgleda) neko vozilo.",tags:["player","vehicle"]},s=void 0,c={},o=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Zabilje\u0161ke",id:"zabilje\u0161ke",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function d(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,n.jsx)(i.p,{children:"Postavlja igra\u010da da spectate-a (nadgleda) neko vozilo. Njegova kamera \u0107e biti prikva\u010dena za vozilo ako ga neko vozi."}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Ime"}),(0,n.jsx)(i.th,{children:"Deskripcija"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"playerid"}),(0,n.jsx)(i.td,{children:"ID igra\u010da koji \u0107e nadgledati vozilo."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"targetvehicleid"}),(0,n.jsx)(i.td,{children:"ID vozila kojeg \u0107e igra\u010d nadgledati."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"mode"}),(0,n.jsxs)(i.td,{children:[(0,n.jsx)(i.a,{href:"../resources/spectatemodes",children:"Na\u010din/tip"}),". Op\u0107enito se mo\u017ee ostaviti prazno jer je prema zadanim postavkama 'normal'."]})]})]})]}),"\n",(0,n.jsx)(i.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(i.p,{children:"1: Funkcija uspje\u0161no izvr\u0161ena. Imajte na umu da se uspjeh prijavljuje ako igra\u010d nije u re\u017eimu gledatelja (TogglePlayerSpectating), ali ni\u0161ta se ne\u0107e dogoditi. TogglePlayerSpectating MORA se prvo koristiti."}),"\n",(0,n.jsx)(i.p,{children:"0: Funkcija neuspje\u0161no izvr\u0161ena. Igra\u010d, vozilo ili oboje ne postoje."}),"\n",(0,n.jsx)(i.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-c",children:"TogglePlayerSpectating(playerid, 1);\nPlayerSpectateVehicle(playerid, vehicleid);\n"})}),"\n",(0,n.jsx)(i.h2,{id:"zabilje\u0161ke",children:"Zabilje\u0161ke"}),"\n",(0,n.jsx)(i.admonition,{type:"warning",children:(0,n.jsx)(i.p,{children:"Red je KRITI\u010cAN! Obavezno koristite TogglePlayerSpectating prije PlayerSpectateVehicle. Igra\u010d i vozilo moraju biti u istom unutra\u0161njosti i virtualnom svijetu da bi ova funkcija radila ispravno."})}),"\n",(0,n.jsx)(i.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"PlayerSpectatePlayer",children:"PlayerSpectatePlayer"}),": Nadgledaj igra\u010da."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"TogglePlayerSpectating",children:"TogglePlayerSpectating"}),": Po\u010dni ili prekini spectate-ovati (nadgledati)."]}),"\n"]})]})}function p(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}}}]);