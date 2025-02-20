"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[54572],{28453:(e,i,n)=>{n.d(i,{R:()=>s,x:()=>a});var r=n(96540);const t={},l=r.createContext(t);function s(e){const i=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(l.Provider,{value:i},e.children)}},44680:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"scripting/functions/CreateVehicle","title":"CreateVehicle","description":"Creates a vehicle in the world.","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/CreateVehicle.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/CreateVehicle","permalink":"/bs/docs/scripting/functions/CreateVehicle","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/CreateVehicle.md","tags":[{"inline":true,"label":"vehicle","permalink":"/bs/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"CreateVehicle","sidebar_label":"CreateVehicle","description":"Creates a vehicle in the world.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"CreatePlayerTextDraw","permalink":"/bs/docs/scripting/functions/CreatePlayerTextDraw"},"next":{"title":"DB_ExecuteQuery","permalink":"/bs/docs/scripting/functions/DB_ExecuteQuery"}}');var t=n(74848),l=n(28453);const s={title:"CreateVehicle",sidebar_label:"CreateVehicle",description:"Creates a vehicle in the world.",tags:["vehicle"]},a=void 0,c={},d=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Zabilje\u0161ke",id:"zabilje\u0161ke",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function o(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,t.jsx)(i.p,{children:"Creates a vehicle in the world. Can be used in place of AddStaticVehicleEx at any time in the script."}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Ime"}),(0,t.jsx)(i.th,{children:"Deskripcija"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"vehicletype"}),(0,t.jsx)(i.td,{children:"Model vozila."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsxs)(i.td,{children:["Float",":X"]}),(0,t.jsx)(i.td,{children:"X kordinata vozila."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsxs)(i.td,{children:["Float",":Y"]}),(0,t.jsx)(i.td,{children:"Y kordinata vozila."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsxs)(i.td,{children:["Float",":Z"]}),(0,t.jsx)(i.td,{children:"Z kordinata vozila."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsxs)(i.td,{children:["Float",":rotation"]}),(0,t.jsx)(i.td,{children:"Rotacija/smjer vozila."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"../resources/vehiclecolorid",children:"color1"})}),(0,t.jsx)(i.td,{children:"ID Primarne boje."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"../resources/vehiclecolorid",children:"color2"})}),(0,t.jsx)(i.td,{children:"ID Sekundarne boje"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"respawn_delay"}),(0,t.jsx)(i.td,{children:"Razmak do ponovnog respawnovanja automobila bez voza\u010da u sekundi. Kori\u0161tenjem -1 sprije\u010dit \u0107e ponovno respawnovanje vozila."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsxs)(i.td,{children:["bool",":addsiren"]}),(0,t.jsx)(i.td,{children:"Ima zadanu vrijednost 'false'. Omogu\u0107uje vozilu da ima sirenu, pod uvjetom da vozilo ima sirenu(trubu H)."})]})]})]}),"\n",(0,t.jsx)(i.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(i.p,{children:"ID vozila koji je kreiran (1 do MAX_VEHICLES)."}),"\n",(0,t.jsx)(i.p,{children:"INVALID_VEHICLE_ID (65535) ako vozilo nije kreirano (dostignut je limit vozila ili unesen neva\u017ee\u0107i model vozila)."}),"\n",(0,t.jsx)(i.p,{children:"0 Ako vozilo nije kreirano (Pro\u0161la su vozila 538 ili 537, a to su vozovi)."}),"\n",(0,t.jsx)(i.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-c",children:"public OnGameModeInit()\n{\n    // Dodaj Hydra (520) u igru sa respawn vremenom od 60 sekundi\n    CreateVehicle(520, 2109.1763, 1503.0453, 32.2887, 82.2873, -1, -1, 60);\n    return 1;\n}\n"})}),"\n",(0,t.jsx)(i.h2,{id:"zabilje\u0161ke",children:"Zabilje\u0161ke"}),"\n",(0,t.jsx)(i.admonition,{type:"warning",children:(0,t.jsx)(i.p,{children:"Vozovi se mogu dodati samo sa AddStaticVehicle i AddStaticVehicleEx."})}),"\n",(0,t.jsx)(i.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"DestroyVehicle",children:"DestroyVehicle"}),": Uni\u0161ti vozilo."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"AddStaticVehicle",children:"AddStaticVehicle"}),": Dodaj stati\u010dno vozilo."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"AddStaticVehicleEx",children:"AddStaticVehicleEx"}),": Dodaj stati\u010dno vozilo sa prilago\u0111enim vremenom respawnovanja."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"GetVehicleParamsSirenState",children:"GetVehicleParamsSirenState"}),": Provjeri da li je sirena vozila upaljena ili uga\u0161ena."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"../callbacks/OnVehicleSpawn",children:"OnVehicleSpawn"}),": Pozvano kada se vozilo respawnuje."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"../callbacks/OnVehicleSirenStateChange",children:"OnVehicleSirenStateChange"}),": Pozvano kada se sirena vozila upali ili ugasi."]}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,l.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}}}]);