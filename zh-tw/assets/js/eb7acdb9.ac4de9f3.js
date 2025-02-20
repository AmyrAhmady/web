"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[88848],{26486:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>a,frontMatter:()=>c,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"scripting/functions/RemoveVehicleComponent","title":"RemoveVehicleComponent","description":"Remove a component from a vehicle.","source":"@site/docs/scripting/functions/RemoveVehicleComponent.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/RemoveVehicleComponent","permalink":"/zh-tw/docs/scripting/functions/RemoveVehicleComponent","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/RemoveVehicleComponent.md","tags":[{"inline":true,"label":"vehicle","permalink":"/zh-tw/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"RemoveVehicleComponent","sidebar_label":"RemoveVehicleComponent","description":"Remove a component from a vehicle.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"RemoveServerRule","permalink":"/zh-tw/docs/scripting/functions/RemoveServerRule"},"next":{"title":"RepairVehicle","permalink":"/zh-tw/docs/scripting/functions/RepairVehicle"}}');var o=t(74848),l=t(28453);const c={title:"RemoveVehicleComponent",sidebar_label:"RemoveVehicleComponent",description:"Remove a component from a vehicle.",tags:["vehicle"]},s=void 0,r={},h=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2},{value:"Related Resources",id:"related-resources",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,o.jsx)(n.p,{children:"Remove a component from a vehicle."}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Name"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"vehicleid"}),(0,o.jsx)(n.td,{children:"ID of the vehicle."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"../resources/carcomponentid",children:"component"})}),(0,o.jsx)(n.td,{children:"ID of the component to remove."})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"true"})," - The component was successfully removed from the vehicle."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"false"})," - The component was not removed because the vehicle does not exist."]}),"\n",(0,o.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-c",children:"// Remove Nitro from player vehicle\nnew vehicleid = GetPlayerVehicleID(playerid);\nRemoveVehicleComponent(vehicleid, 1010);\n"})}),"\n",(0,o.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"AddVehicleComponent",children:"AddVehicleComponent"}),": Add a component to a vehicle."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"GetVehicleComponentInSlot",children:"GetVehicleComponentInSlot"}),": Check what components a vehicle has."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"GetVehicleComponentType",children:"GetVehicleComponentType"}),": Check the type of component via the ID."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"VehicleCanHaveComponent",children:"VehicleCanHaveComponent"}),": Is the component legal on the vehicle?"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"../callbacks/OnVehicleMod",children:"OnVehicleMod"}),": Called when a vehicle is modded."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"../callbacks/OnEnterExitModShop",children:"OnEnterExitModShop"}),": Called when a vehicle enters or exits a mod shop."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"../resources/carcomponentid",children:"Car Component IDs"})}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>s});var i=t(96540);const o={},l=i.createContext(o);function c(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);