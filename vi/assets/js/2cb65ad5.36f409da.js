"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[68053],{28453:(e,i,t)=>{t.d(i,{R:()=>l,x:()=>o});var n=t(96540);const r={},c=n.createContext(r);function l(e){const i=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(c.Provider,{value:i},e.children)}},49603:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"scripting/functions/GetVehicleInterior","title":"GetVehicleInterior","description":"Get the interior id of a vehicle.","source":"@site/docs/scripting/functions/GetVehicleInterior.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetVehicleInterior","permalink":"/vi/docs/scripting/functions/GetVehicleInterior","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetVehicleInterior.md","tags":[{"inline":true,"label":"vehicle","permalink":"/vi/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"GetVehicleInterior","sidebar_label":"GetVehicleInterior","description":"Get the interior id of a vehicle.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"GetVehicleHydraReactorAngle","permalink":"/vi/docs/scripting/functions/GetVehicleHydraReactorAngle"},"next":{"title":"GetVehicleLandingGearState","permalink":"/vi/docs/scripting/functions/GetVehicleLandingGearState"}}');var r=t(74848),c=t(28453);const l={title:"GetVehicleInterior",sidebar_label:"GetVehicleInterior",description:"Get the interior id of a vehicle.",tags:["vehicle"]},o=void 0,s={},d=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Values",id:"return-values",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function a(e){const i={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components},{VersionWarn:t}=i;return t||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t,{version:"omp v1.1.0.2612"}),"\n",(0,r.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(i.p,{children:"Get the interior id of a vehicle."}),"\n",(0,r.jsx)(i.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Name"}),(0,r.jsx)(i.th,{children:"Description"})]})}),(0,r.jsx)(i.tbody,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"vehicleid"}),(0,r.jsx)(i.td,{children:"The ID of the vehicle."})]})})]}),"\n",(0,r.jsx)(i.h2,{id:"return-values",children:"Return Values"}),"\n",(0,r.jsx)(i.p,{children:"Returns vehicle interior id."}),"\n",(0,r.jsx)(i.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-c",children:"public OnGameModeInit()\n{\n    new vehicleid = CreateVehicle(560, 2096.1917, -1328.5150, 25.1059, 0.0000, 6, 0, 100);\n    LinkVehicleToInterior(vehicleid, 15);\n\n    new interiorid = GetVehicleInterior(vehicleid);\n    // interiorid = 15\n    return 1;\n}\n"})}),"\n",(0,r.jsx)(i.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"LinkVehicleToInterior",children:"LinkVehicleToInterior"}),": Links a vehicle to an interior."]}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,c.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}}}]);