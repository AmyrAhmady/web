"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[21465],{28453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>c});var n=i(96540);const o={},r=n.createContext(o);function s(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(r.Provider,{value:t},e.children)}},68935:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>n,toc:()=>a});const n=JSON.parse('{"id":"scripting/functions/GetVehiclePoolSize","title":"GetVehiclePoolSize","description":"Gets the highest vehicleid currently in use on the server.","source":"@site/docs/scripting/functions/GetVehiclePoolSize.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetVehiclePoolSize","permalink":"/de/docs/scripting/functions/GetVehiclePoolSize","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetVehiclePoolSize.md","tags":[{"inline":true,"label":"vehicle","permalink":"/de/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"GetVehiclePoolSize","sidebar_label":"GetVehiclePoolSize","description":"Gets the highest vehicleid currently in use on the server.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"GetVehicleParamsSirenState","permalink":"/de/docs/scripting/functions/GetVehicleParamsSirenState"},"next":{"title":"GetVehiclePos","permalink":"/de/docs/scripting/functions/GetVehiclePos"}}');var o=i(74848),r=i(28453);const s={title:"GetVehiclePoolSize",sidebar_label:"GetVehiclePoolSize",description:"Gets the highest vehicleid currently in use on the server.",tags:["vehicle"]},c=void 0,l={},a=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components},{VersionWarn:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i,{version:"SA-MP 0.3.7"}),"\n",(0,o.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(t.p,{children:["Gets the highest vehicleid currently in use on the server.  Note that in SA",":MP"," this function is broken and will return ",(0,o.jsx)(t.code,{children:"0"})," even when there are no vehicles.  fixes.inc and open.mp correct this to return ",(0,o.jsx)(t.code,{children:"-1"}),", but also deprecate the function in favour of ",(0,o.jsx)(t.code,{children:"MAX_VEHICLES"})," or ",(0,o.jsx)(t.code,{children:"foreach"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-c",children:"RepairAllVehicles()\n{\n    // vehicleids start at 1\n    for(new i = 1, j = GetVehiclePoolSize(); i <= j; i++)\n    {\n        RepairVehicle(i);\n    }\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"GetPlayerPoolSize",children:"GetPlayerPoolSize"}),": Gets the highest playerid connected to the server."]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}}}]);