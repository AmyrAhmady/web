"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[74054],{28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>r});var i=n(96540);const l={},s=i.createContext(l);function c(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),i.createElement(s.Provider,{value:t},e.children)}},68171:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>d,frontMatter:()=>c,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"scripting/functions/SetVehicleNumberPlate","title":"SetVehicleNumberPlate","description":"Set a vehicle numberplate.","source":"@site/docs/scripting/functions/SetVehicleNumberPlate.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetVehicleNumberPlate","permalink":"/zh-tw/docs/scripting/functions/SetVehicleNumberPlate","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/SetVehicleNumberPlate.md","tags":[{"inline":true,"label":"vehicle","permalink":"/zh-tw/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"SetVehicleNumberPlate","sidebar_label":"SetVehicleNumberPlate","description":"Set a vehicle numberplate.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"SetVehicleHealth","permalink":"/zh-tw/docs/scripting/functions/SetVehicleHealth"},"next":{"title":"SetVehicleOccupiedTick","permalink":"/zh-tw/docs/scripting/functions/SetVehicleOccupiedTick"}}');var l=n(74848),s=n(28453);const c={title:"SetVehicleNumberPlate",sidebar_label:"SetVehicleNumberPlate",description:"Set a vehicle numberplate.",tags:["vehicle"]},r=void 0,a={},h=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function o(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(t.p,{children:"Set a vehicle numberplate."}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Name"}),(0,l.jsx)(t.th,{children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"vehicleid"}),(0,l.jsx)(t.td,{children:"The ID of the vehicle to set the number plate of."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"const numberPlate[]"}),(0,l.jsx)(t.td,{children:"The text that should be displayed on the number plate."})]})]})]}),"\n",(0,l.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"true"})," - The function executed successfully."]}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"false"})," - The function failed to execute. The vehicle does not exist"]}),"\n",(0,l.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-c",children:'new\n\tvehicleid = CreateVehicle(542, 2074.73, 1089.89, 10.51, 0.0, -1, -1, -1);\nSetVehicleNumberPlate(vehicleid, "ABCD 123");\n'})}),"\n",(0,l.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,l.jsx)(t.admonition,{type:"tip",children:(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"This function has no internal error checking."}),"\n",(0,l.jsx)(t.li,{children:"Do not assign custom number plates to vehicles without plates (boats, planes, etc) as this will result in some unneeded processing time on the client."}),"\n",(0,l.jsx)(t.li,{children:"The vehicle must be re-spawned or re-streamed for the changes to take effect."}),"\n",(0,l.jsx)(t.li,{children:"There's a limit of 32 characters on each number plate (including embedded colors)."}),"\n",(0,l.jsx)(t.li,{children:"The text length that can be seen on the number plate is around 9 to 10 characters, more characters will cause the text to split."}),"\n",(0,l.jsx)(t.li,{children:"Some vehicle models has a backward number plate, e.g. Boxville (498) (as an alternative to this vehicle you can use vehicle model ID 609, which is a duplicated Boxville (aka Boxburg), but with a regular number plate)."}),"\n"]})}),"\n",(0,l.jsx)(t.admonition,{type:"tip",children:(0,l.jsx)(t.p,{children:"You can use color embedding on the number plate text."})}),"\n",(0,l.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"GetVehicleNumberPlate",children:"GetVehicleNumberPlate"}),": Get the number plate of a vehicle."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"SetVehicleToRespawn",children:"SetVehicleToRespawn"}),": Respawn a vehicle."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"ChangeVehicleColor",children:"ChangeVehicleColor"}),": Set the color of a vehicle."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"ChangeVehiclePaintjob",children:"ChangeVehiclePaintjob"}),": Change the paintjob on a vehicle."]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}}}]);