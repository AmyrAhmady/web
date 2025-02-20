"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[51462],{28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var i=n(96540);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}},35320:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"scripting/functions/GetVehicleRotationQuat","title":"GetVehicleRotationQuat","description":"Returns a vehicle\'s rotation on all axes as a quaternion.","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/functions/GetVehicleRotationQuat.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetVehicleRotationQuat","permalink":"/th/docs/scripting/functions/GetVehicleRotationQuat","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetVehicleRotationQuat.md","tags":[{"inline":true,"label":"vehicle","permalink":"/th/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"GetVehicleRotationQuat","sidebar_label":"GetVehicleRotationQuat","description":"Returns a vehicle\'s rotation on all axes as a quaternion.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"GetVehicleRespawnTick","permalink":"/th/docs/scripting/functions/GetVehicleRespawnTick"},"next":{"title":"GetVehicleSeats","permalink":"/th/docs/scripting/functions/GetVehicleSeats"}}');var s=n(74848),o=n(28453);const r={title:"GetVehicleRotationQuat",sidebar_label:"GetVehicleRotationQuat",description:"Returns a vehicle's rotation on all axes as a quaternion.",tags:["vehicle"]},a=void 0,c={},l=[{value:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",level:2},{value:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",id:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",level:2},{value:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",id:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",level:2},{value:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",level:2}];function h(e){const t={admonition:"admonition",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",children:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22"}),"\n",(0,s.jsx)(t.p,{children:"Returns a vehicle's rotation on all axes as a quaternion."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"vehicleid"}),(0,s.jsx)(t.td,{children:"The ID of the vehicle to get the rotation of."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["&Float",":w"]}),(0,s.jsx)(t.td,{children:"A float variable in which to store the first quaternion angle, passed by reference."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["&Float",":x"]}),(0,s.jsx)(t.td,{children:"A float variable in which to store the second quaternion angle, passed by reference."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["&Float",":y"]}),(0,s.jsx)(t.td,{children:"A float variable in which to store the third quaternion angle, passed by reference."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["&Float",":z"]}),(0,s.jsx)(t.td,{children:"A float variable in which to store the fourth quaternion angle, passed by reference."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",children:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19"}),"\n",(0,s.jsx)(t.p,{children:"1: The function was executed successfully."}),"\n",(0,s.jsx)(t.p,{children:"0: The function failed to execute. This means the vehicle specified does not exist."}),"\n",(0,s.jsx)(t.p,{children:"The vehicle's rotation is stored in the specified variables."}),"\n",(0,s.jsx)(t.h2,{id:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",children:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01"}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsx)(t.p,{children:"There is no 'set' variation of this function; you can not SET a vehicle's rotation (apart from the Z angle) This function may return incorrect values for unoccupied vehicles. The reason is that the third row of the vehicle's internal rotation matrix gets corrupted if it gets updated while unoccupied."})}),"\n",(0,s.jsx)(t.h2,{id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",children:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"GetVehicleZAngle: Check the current angle of a vehicle."}),"\n",(0,s.jsx)(t.li,{children:"GetVehicleRotation: Get the rotation of a vehicle on the XYZ axis."}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}}}]);