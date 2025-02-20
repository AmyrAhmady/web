"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[41164],{28057:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>a,frontMatter:()=>c,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"scripting/functions/SetVehiclePos","title":"SetVehiclePos","description":"Set a vehicle\'s position.","source":"@site/docs/scripting/functions/SetVehiclePos.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetVehiclePos","permalink":"/sl/docs/scripting/functions/SetVehiclePos","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/SetVehiclePos.md","tags":[{"inline":true,"label":"vehicle","permalink":"/sl/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"SetVehiclePos","sidebar_label":"SetVehiclePos","description":"Set a vehicle\'s position.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"SetVehicleParamsSirenState","permalink":"/sl/docs/scripting/functions/SetVehicleParamsSirenState"},"next":{"title":"SetVehicleRespawnDelay","permalink":"/sl/docs/scripting/functions/SetVehicleRespawnDelay"}}');var s=i(74848),l=i(28453);const c={title:"SetVehiclePos",sidebar_label:"SetVehiclePos",description:"Set a vehicle's position.",tags:["vehicle"]},o=void 0,r={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Set a vehicle's position"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"vehicleid"}),(0,s.jsx)(t.td,{children:"Vehicle ID that you want set new position."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["Float",":x"]}),(0,s.jsx)(t.td,{children:"The X coordinate to position the vehicle at."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["Float",":y"]}),(0,s.jsx)(t.td,{children:"The Y coordinate to position the vehicle at."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["Float",":z"]}),(0,s.jsx)(t.td,{children:"The Z coordinate to position the vehicle at."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"true"})," - The function executed successfully."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"false"})," - The function failed to execute. The vehicle specified does not exist."]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-c",children:"// Put the player's vehicle at the coordinates 0.0, 0.0, 3.0 (center of SA)\nnew vehicleid = GetPlayerVehicleID(playerid);\nSetVehiclePos(vehicleid, 0.0, 0.0, 3.0);\n"})}),"\n",(0,s.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsxs)(t.admonition,{type:"warning",children:[(0,s.jsx)(t.p,{children:"Known Bug(s):"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"An empty vehicle will not fall after being teleported into the air!"}),"\n"]})]}),"\n",(0,s.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"SetPlayerPos",children:"SetPlayerPos"}),": Set a player's position."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"GetVehiclePos",children:"GetVehiclePos"}),": Get the position of a vehicle."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"SetVehicleZAngle",children:"SetVehicleZAngle"}),": Set the direction of a vehicle."]}),"\n"]})]})}function a(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>c,x:()=>o});var n=i(96540);const s={},l=n.createContext(s);function c(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);