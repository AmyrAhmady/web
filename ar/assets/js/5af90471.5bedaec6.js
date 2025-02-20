"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[58050],{10620:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"scripting/functions/SetVehicleToRespawn","title":"SetVehicleToRespawn","description":"Sets a vehicle back to the position at where it was created.","source":"@site/docs/scripting/functions/SetVehicleToRespawn.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetVehicleToRespawn","permalink":"/ar/docs/scripting/functions/SetVehicleToRespawn","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/SetVehicleToRespawn.md","tags":[{"inline":true,"label":"vehicle","permalink":"/ar/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"SetVehicleToRespawn","sidebar_label":"SetVehicleToRespawn","description":"Sets a vehicle back to the position at where it was created.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"SetVehicleSpawnInfo","permalink":"/ar/docs/scripting/functions/SetVehicleSpawnInfo"},"next":{"title":"SetVehicleVelocity","permalink":"/ar/docs/scripting/functions/SetVehicleVelocity"}}');var s=n(74848),c=n(28453);const r={title:"SetVehicleToRespawn",sidebar_label:"SetVehicleToRespawn",description:"Sets a vehicle back to the position at where it was created.",tags:["vehicle"]},l=void 0,o={},a=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Sets a vehicle back to the position at where it was created."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"vehicleid"}),(0,s.jsx)(t.td,{children:"The ID of the vehicle to respawn"})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"true"})," - The function executed successfully."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"false"})," - The function failed to execute. The vehicle does not exist."]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-c",children:"// Respawns the all vehicles\nfor (new i = 1; i < MAX_VEHICLES; i++)\n{\n    SetVehicleToRespawn(i);\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"CreateVehicle",children:"CreateVehicle"}),": Create a vehicle."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"DestroyVehicle",children:"DestroyVehicle"}),": Destroy a vehicle."]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>l});var i=n(96540);const s={},c=i.createContext(s);function r(e){const t=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(c.Provider,{value:t},e.children)}}}]);