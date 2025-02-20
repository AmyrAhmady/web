"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[94153],{28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>s});var i=t(96540);const o={},c=i.createContext(o);function l(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),i.createElement(c.Provider,{value:n},e.children)}},66834:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"scripting/functions/GetVehicleComponentType","title":"GetVehicleComponentType","description":"Find out what type of component a certain ID is.","source":"@site/docs/scripting/functions/GetVehicleComponentType.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetVehicleComponentType","permalink":"/ru/docs/scripting/functions/GetVehicleComponentType","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetVehicleComponentType.md","tags":[{"inline":true,"label":"vehicle","permalink":"/ru/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"GetVehicleComponentType","sidebar_label":"GetVehicleComponentType","description":"Find out what type of component a certain ID is.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"GetVehicleComponentInSlot","permalink":"/ru/docs/scripting/functions/GetVehicleComponentInSlot"},"next":{"title":"GetVehicleDamageStatus","permalink":"/ru/docs/scripting/functions/GetVehicleDamageStatus"}}');var o=t(74848),c=t(28453);const l={title:"GetVehicleComponentType",sidebar_label:"GetVehicleComponentType",description:"Find out what type of component a certain ID is.",tags:["vehicle"]},s=void 0,r={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,o.jsx)(n.p,{children:"Find out what type of component a certain ID is."}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Name"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"component"}),(0,o.jsx)(n.td,{children:"The component ID to check."})]})})]}),"\n",(0,o.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,o.jsxs)(n.p,{children:["The component slot ID of the specified component or ",(0,o.jsx)(n.strong,{children:"-1"})," if the component is invalid."]}),"\n",(0,o.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-c",children:'public OnVehicleMod(playerid, vehicleid, componentid)\n{\n    new\n        CARMODTYPE:componentType = GetVehicleComponentType(componentid);\n\n    if (componentType != CARMODTYPE_NONE)\n    {\n        new\n            string[64];\n\n        format(string, sizeof(string), "You have modified your vehicle on slot %i", componentType);\n        SendClientMessage(playerid, 0xFFFFFFFF, string);\n    }\n    else\n    {\n        SendClientMessage(playerid, 0xFF0000FF, "The component is invalid.");\n    }\n    return 1;\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"AddVehicleComponent",children:"AddVehicleComponent"}),": Add a component to a vehicle."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"RemoveVehicleComponent",children:"RemoveVehicleComponent"}),": Remove a component from a vehicle."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"GetVehicleComponentInSlot",children:"GetVehicleComponentInSlot"}),": Check what components a vehicle has."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"../callbacks/OnVehicleMod",children:"OnVehicleMod"}),": Called when a vehicle is modded."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"../callbacks/OnEnterExitModShop",children:"OnEnterExitModShop"}),": Called when a vehicle enters or exits a mod shop."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}}}]);