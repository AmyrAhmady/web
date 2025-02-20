"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[19656],{13993:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>r,contentTitle:()=>c,default:()=>o,frontMatter:()=>l,metadata:()=>a,toc:()=>h});const a=JSON.parse('{"id":"scripting/callbacks/OnVehicleDamageStatusUpdate","title":"OnVehicleDamageStatusUpdate","description":"This callback is called when a vehicle element such as doors, tyres, panels, or lights change their damage status.","source":"@site/docs/scripting/callbacks/OnVehicleDamageStatusUpdate.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnVehicleDamageStatusUpdate","permalink":"/hu/docs/scripting/callbacks/OnVehicleDamageStatusUpdate","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnVehicleDamageStatusUpdate.md","tags":[{"inline":true,"label":"vehicle","permalink":"/hu/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"OnVehicleDamageStatusUpdate","sidebar_label":"OnVehicleDamageStatusUpdate","description":"This callback is called when a vehicle element such as doors, tyres, panels, or lights change their damage status.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"OnUnoccupiedVehicleUpdate","permalink":"/hu/docs/scripting/callbacks/OnUnoccupiedVehicleUpdate"},"next":{"title":"OnVehicleDeath","permalink":"/hu/docs/scripting/callbacks/OnVehicleDeath"}}');var n=s(74848),i=s(28453);const l={title:"OnVehicleDamageStatusUpdate",sidebar_label:"OnVehicleDamageStatusUpdate",description:"This callback is called when a vehicle element such as doors, tyres, panels, or lights change their damage status.",tags:["vehicle"]},c=void 0,r={},h=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["For some useful functions for working with vehicle damage values, see ",(0,n.jsx)(t.a,{href:"../resources/damagestatus",children:"here"}),"."]})}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"This callback is called when a vehicle element such as doors, tyres, panels, or lights change their damage status."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"vehicleid"}),(0,n.jsx)(t.td,{children:"The ID of the vehicle that was changed its damage status."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"playerid"}),(0,n.jsx)(t.td,{children:"The ID of the player who synced the change in the damage status (who had the car damaged or repaired)."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"1"})," - Will prevent other filterscripts from receiving this callback."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"0"})," - Indicates that this callback will be passed to the next filterscript."]}),"\n",(0,n.jsx)(t.p,{children:"It is always called first in filterscripts."}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c",children:"public OnVehicleDamageStatusUpdate(vehicleid, playerid)\n{\n    // Get the damage status of all the components\n    new\n        VEHICLE_PANEL_STATUS:panels,\n        VEHICLE_DOOR_STATUS:doors,\n        VEHICLE_LIGHT_STATUS:lights,\n        VEHICLE_TYRE_STATUS:tyres;\n\n    GetVehicleDamageStatus(vehicleid, panels, doors, lights, tyres);\n\n    // Set the tyres to 0, which means none are popped\n    tyres = VEHICLE_TYRE_STATUS_NONE;\n\n    // Update the vehicle's damage status with unpopped tyres\n    UpdateVehicleDamageStatus(vehicleid, panels, doors, lights, tyres);\n    return 1;\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsx)(t.p,{children:"This does not include vehicle health changes."})}),"\n",(0,n.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,n.jsx)(t.p,{children:"The following functions might be useful, as they're related to this callback in one way or another."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/GetVehicleDamageStatus",children:"GetVehicleDamageStatus"}),": Get the vehicle damage state for each part individually."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../functions/UpdateVehicleDamageStatus",children:"UpdateVehicleDamageStatus"}),": Update the vehicle damage."]}),"\n"]})]})}function o(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>l,x:()=>c});var a=s(96540);const n={},i=a.createContext(n);function l(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);