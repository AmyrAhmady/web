"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[22123],{8433:(e,t,d)=>{d.r(t),d.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"scripting/functions/AddStaticVehicle","title":"AddStaticVehicle","description":"Dodaje \u201estatyczny\u201d pojazd (pojazdy s\u0105 wst\u0119pnie \u0142adowane dla graczy) do gamemodu.","source":"@site/i18n/pl/docusaurus-plugin-content-docs/current/scripting/functions/AddStaticVehicle.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/AddStaticVehicle","permalink":"/pl/docs/scripting/functions/AddStaticVehicle","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/AddStaticVehicle.md","tags":[{"inline":true,"label":"vehicle","permalink":"/pl/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"AddStaticVehicle","sidebar_label":"AddStaticVehicle","description":"Dodaje \u201estatyczny\u201d pojazd (pojazdy s\u0105 wst\u0119pnie \u0142adowane dla graczy) do gamemodu.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"AddStaticPickup","permalink":"/pl/docs/scripting/functions/AddStaticPickup"},"next":{"title":"AddStaticVehicleEx","permalink":"/pl/docs/scripting/functions/AddStaticVehicleEx"}}');var n=d(74848),c=d(28453);const s={title:"AddStaticVehicle",sidebar_label:"AddStaticVehicle",description:"Dodaje \u201estatyczny\u201d pojazd (pojazdy s\u0105 wst\u0119pnie \u0142adowane dla graczy) do gamemodu.",tags:["vehicle"]},r=void 0,a={},o=[{value:"Opis",id:"opis",level:2},{value:"Zwracane warto\u015bci",id:"zwracane-warto\u015bci",level:2},{value:"Przyk\u0142ady",id:"przyk\u0142ady",level:2},{value:"Powi\u0105zane funkcje",id:"powi\u0105zane-funkcje",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"opis",children:"Opis"}),"\n",(0,n.jsx)(t.p,{children:"Dodaje \u201estatyczny\u201d pojazd (pojazdy s\u0105 wst\u0119pnie \u0142adowane dla graczy) do gamemodu."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Nazwa"}),(0,n.jsx)(t.th,{children:"Opis"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"modelid"}),(0,n.jsx)(t.td,{children:"ID modelu pojazdu."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["Float",":spawn_X"]}),(0,n.jsx)(t.td,{children:"Koordynat X pojazdu."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["Float",":spawn_Y"]}),(0,n.jsx)(t.td,{children:"Koordynat Y pojazdu."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["Float",":spawn_Z"]}),(0,n.jsx)(t.td,{children:"Koordynat Z pojazdu."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["Float",":z_angle"]}),(0,n.jsx)(t.td,{children:"Kierunek pojazdu (k\u0105t)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../resources/vehiclecolorid.md",children:"color1"})}),(0,n.jsx)(t.td,{children:"ID pierwszego koloru. -1 to losowy."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"../resources/vehiclecolorid.md",children:"color2"})}),(0,n.jsx)(t.td,{children:"ID drugiego koloru. -1 to losowy."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"zwracane-warto\u015bci",children:"Zwracane warto\u015bci"}),"\n",(0,n.jsx)(t.p,{children:"ID stworzonego pojazdu (pomi\u0119dzy 1, a MAX_VEHICLES)."}),"\n",(0,n.jsx)(t.p,{children:"INVALID_VEHICLE_ID (65535) je\u017celi pojazd nie zosta\u0142 utworzony (osi\u0105gni\u0119to limit pojazd\xf3w lub podano nieprawid\u0142owe ID modelu)."}),"\n",(0,n.jsx)(t.h2,{id:"przyk\u0142ady",children:"Przyk\u0142ady"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c",children:"public OnGameModeInit()\n{\n    // Dodaje Hydr\u0119 do gry\n    AddStaticVehicle(520, 2109.1763, 1503.0453, 32.2887, 82.2873, 0, 1);\n\n    return 1;\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"powi\u0105zane-funkcje",children:"Powi\u0105zane funkcje"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/pl/docs/scripting/functions/AddStaticVehicleEx",children:"AddStaticVehicleEx"}),": Dodaje statyczny pojazd z niestandardowym czasem respawnu."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"CreateVehicle.md",children:"CreateVehicle"}),": Tworzy pojazd."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"DestroyVehicle.md",children:"DestroyVehicle"}),": Kasuje pojazd."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,t,d)=>{d.d(t,{R:()=>s,x:()=>r});var i=d(96540);const n={},c=i.createContext(n);function s(e){const t=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(c.Provider,{value:t},e.children)}}}]);