"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[1750],{24559:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"scripting/functions/GetVehicleModelCount","title":"GetVehicleModelCount","description":"Gets the model count of a vehicle model.","source":"@site/docs/scripting/functions/GetVehicleModelCount.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetVehicleModelCount","permalink":"/fa/docs/scripting/functions/GetVehicleModelCount","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetVehicleModelCount.md","tags":[{"inline":true,"label":"vehicle","permalink":"/fa/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"GetVehicleModelCount","sidebar_label":"GetVehicleModelCount","description":"Gets the model count of a vehicle model.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"GetVehicleModel","permalink":"/fa/docs/scripting/functions/GetVehicleModel"},"next":{"title":"GetVehicleModelInfo","permalink":"/fa/docs/scripting/functions/GetVehicleModelInfo"}}');var l=n(74848),o=n(28453);const c={title:"GetVehicleModelCount",sidebar_label:"GetVehicleModelCount",description:"Gets the model count of a vehicle model.",tags:["vehicle"]},s=void 0,r={},d=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function a(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,l.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(t.p,{children:"Gets the model count of a vehicle model."}),"\n",(0,l.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Name"}),(0,l.jsx)(t.th,{children:"Description"})]})}),(0,l.jsx)(t.tbody,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"modelid"}),(0,l.jsxs)(t.td,{children:["The ID of the ",(0,l.jsx)(t.a,{href:"../resources/vehicleid",children:"vehicle model"}),"."]})]})})]}),"\n",(0,l.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-c",children:'public OnGameModeInit()\n{\n    CreateVehicle(560, 2112.7607, -1308.3751, 23.6797, 90.0000, -1, -1, 100);\n\tCreateVehicle(560, 2104.5730, -1308.3313, 23.6797, 90.0000, -1, -1, 100);\n\tCreateVehicle(560, 2120.3616, -1308.4973, 23.6797, 90.0000, -1, -1, 100);\n\n    new modelid = 560;\n    printf("Vehicle model: %d - model count: %d", modelid, GetVehicleModelCount(modelid)); // Vehicle model: 560 - model count: 3\n}\n'})}),"\n",(0,l.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"CreateVehicle",children:"CreateVehicle"}),": Create a vehicle."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"GetVehicleModelsUsed",children:"GetVehicleModelsUsed"}),": Get the number of used vehicle models on the server."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>s});var i=n(96540);const l={},o=i.createContext(l);function c(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);