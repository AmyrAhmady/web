"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[81397],{7706:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"scripting/functions/AddStaticVehicle","title":"AddStaticVehicle","description":"Dodaje \'stati\u010dno\' vozilo (modeli su unaprijed u\u010ditani za igra\u010d) u gamemode-u.","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/AddStaticVehicle.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/AddStaticVehicle","permalink":"/bs/docs/scripting/functions/AddStaticVehicle","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/AddStaticVehicle.md","tags":[{"inline":true,"label":"vehicle","permalink":"/bs/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"AddStaticVehicle","sidebar_label":"AddStaticVehicle","description":"Dodaje \'stati\u010dno\' vozilo (modeli su unaprijed u\u010ditani za igra\u010d) u gamemode-u.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"AddStaticPickup","permalink":"/bs/docs/scripting/functions/AddStaticPickup"},"next":{"title":"AddStaticVehicleEx","permalink":"/bs/docs/scripting/functions/AddStaticVehicleEx"}}');var r=n(74848),s=n(28453);const d={title:"AddStaticVehicle",sidebar_label:"AddStaticVehicle",description:"Dodaje 'stati\u010dno' vozilo (modeli su unaprijed u\u010ditani za igra\u010d) u gamemode-u.",tags:["vehicle"]},c=void 0,l={},o=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function a(e){const i={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,r.jsx)(i.p,{children:"Dodaje 'stati\u010dno' vozilo (modeli su unaprijed u\u010ditani za igra\u010d) u gamemode-u."}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Ime"}),(0,r.jsx)(i.th,{children:"Deskripcija"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"modelid"}),(0,r.jsx)(i.td,{children:"ID modela za vozilo."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsxs)(i.td,{children:["Float",":spawn_X"]}),(0,r.jsx)(i.td,{children:"X kordinata za vozilo."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsxs)(i.td,{children:["Float",":spawn_Y"]}),(0,r.jsx)(i.td,{children:"Y kordinata za vozilo."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsxs)(i.td,{children:["Float",":spawn_Z"]}),(0,r.jsx)(i.td,{children:"Z kordinata za vozilo."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsxs)(i.td,{children:["Float",":z_angle"]}),(0,r.jsx)(i.td,{children:"Pravac vozila - angle."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.a,{href:"../resources/vehiclecolorid.md",children:"color1"})}),(0,r.jsx)(i.td,{children:"ID primarne boje. -1 za random."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.a,{href:"../resources/vehiclecolorid.md",children:"color2"})}),(0,r.jsx)(i.td,{children:"ID sekundarne boje. -1 za random."})]})]})]}),"\n",(0,r.jsx)(i.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(i.p,{children:"ID vozila koje je kreirano (izme\u0111u 1 i MAX_VEHICLES)."}),"\n",(0,r.jsx)(i.p,{children:"INVALID_VEHICLE_ID (65535) je vozilo koje nije kreirano (limit vozila je dostignut ili je proslije\u0111en neva\u017ee\u0107i model ID vozila)."}),"\n",(0,r.jsx)(i.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-c",children:"public OnGameModeInit()\n{\n    // Dodaj Hydru u igru\n    AddStaticVehicle(520, 2109.1763, 1503.0453, 32.2887, 82.2873, 0, 1);\n\n    return 1;\n}\n"})}),"\n",(0,r.jsx)(i.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"/bs/docs/scripting/functions/AddStaticVehicleEx",children:"AddStaticVehicleEx"}),": Dodaj stati\u010dno vozilo na server sa proizvoljnim respawn vremenom."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"/bs/docs/scripting/functions/CreateVehicle",children:"CreateVehicle"}),": Kreiraj vozilo."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"/bs/docs/scripting/functions/DestroyVehicle",children:"DestroyVehicle"}),": Uni\u0161ti vozilo."]}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>d,x:()=>c});var t=n(96540);const r={},s=t.createContext(r);function d(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);