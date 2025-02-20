"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[35953],{28453:(e,t,s)=>{s.d(t,{R:()=>l,x:()=>r});var a=s(96540);const i={},n=a.createContext(i);function l(e){const t=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),a.createElement(n.Provider,{value:t},e.children)}},44947:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>o,frontMatter:()=>l,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"scripting/functions/UpdateVehicleDamageStatus","title":"UpdateVehicleDamageStatus","description":"Sets the various visual damage statuses of a vehicle, such as popped tires, broken lights and damaged panels.","source":"@site/docs/scripting/functions/UpdateVehicleDamageStatus.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/UpdateVehicleDamageStatus","permalink":"/ar/docs/scripting/functions/UpdateVehicleDamageStatus","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/UpdateVehicleDamageStatus.md","tags":[{"inline":true,"label":"vehicle","permalink":"/ar/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"UpdateVehicleDamageStatus","sidebar_label":"UpdateVehicleDamageStatus","description":"Sets the various visual damage statuses of a vehicle, such as popped tires, broken lights and damaged panels.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"UpdatePlayer3DTextLabelText","permalink":"/ar/docs/scripting/functions/UpdatePlayer3DTextLabelText"},"next":{"title":"UseGangZoneCheck","permalink":"/ar/docs/scripting/functions/UseGangZoneCheck"}}');var i=s(74848),n=s(28453);const l={title:"UpdateVehicleDamageStatus",sidebar_label:"UpdateVehicleDamageStatus",description:"Sets the various visual damage statuses of a vehicle, such as popped tires, broken lights and damaged panels.",tags:["vehicle"]},r=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2},{value:"Related Resources",id:"related-resources",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["For some useful functions for working with vehicle damage values, see ",(0,i.jsx)(t.a,{href:"../resources/damagestatus",children:"here"}),"."]})}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Sets the various visual damage statuses of a vehicle, such as popped tires, broken lights and damaged panels."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"vehicleid"}),(0,i.jsx)(t.td,{children:"The ID of the vehicle to set the damage of."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["VEHICLE_PANEL_STATUS",":panels"]}),(0,i.jsx)(t.td,{children:"A set of bits containing the panel damage status."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["VEHICLE_DOOR_STATUS",":doors"]}),(0,i.jsx)(t.td,{children:"A set of bits containing the door damage status."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["VEHICLE_LIGHT_STATUS",":lights"]}),(0,i.jsx)(t.td,{children:"A set of bits containing the light damage status."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["VEHICLE_TIRE_STATUS",":tires"]}),(0,i.jsx)(t.td,{children:"A set of bits containing the tire damage status."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(t.p,{children:"This function does not return any specific values."}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:"new \n\tVEHICLE_PANEL_STATUS:panels,\n\tVEHICLE_DOOR_STATUS:doors,\n\tVEHICLE_LIGHT_STATUS:lights,\n\tVEHICLE_TIRE_STATUS:tires;\n\nGetVehicleDamageStatus(vehicleid, panels, doors, lights, tires);\n\ntires = VEHICLE_TIRE_STATUS:15; // Setting tires to 15 will pop them all\n\n// Or do it like this:\ntires = (VEHICLE_TIRE_STATUS_FRONT_LEFT_POPPED | VEHICLE_TIRE_STATUS_FRONT_RIGHT_POPPED | VEHICLE_TIRE_STATUS_REAR_LEFT_POPPED | VEHICLE_TIRE_STATUS_REAR_RIGHT_POPPED);\n\nUpdateVehicleDamageStatus(vehicleid, panels, doors, lights, tires);\n"})}),"\n",(0,i.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"SetVehicleHealth",children:"SetVehicleHealth"}),": Set the health of a vehicle."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"GetVehicleHealth",children:"GetVehicleHealth"}),": Check the health of a vehicle."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"RepairVehicle",children:"RepairVehicle"}),": Fully repair a vehicle."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"GetVehicleDamageStatus",children:"GetVehicleDamageStatus"}),": Get the vehicle damage state for each part individually."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"../callbacks/OnVehicleDamageStatusUpdate",children:"OnVehicleDamageStatusUpdate"}),": Called when a vehicle's damage state changes."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"../resources/damagestatus",children:"Damage Status"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"../resources/vehicle-panel-status",children:"Vehicle Panel Status"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"../resources/vehicle-door-status",children:"Vehicle Door Status"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"../resources/vehicle-light-status",children:"Vehicle Light Status"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"../resources/vehicle-tire-status",children:"Vehicle Tire Status"})}),"\n"]})]})}function o(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}}}]);