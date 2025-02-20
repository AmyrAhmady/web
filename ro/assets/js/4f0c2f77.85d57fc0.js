"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[18192],{7582:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>c,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"scripting/functions/GetVehicleTrailer","title":"GetVehicleTrailer","description":"Get the ID of the trailer attached to a vehicle.","source":"@site/docs/scripting/functions/GetVehicleTrailer.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetVehicleTrailer","permalink":"/ro/docs/scripting/functions/GetVehicleTrailer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetVehicleTrailer.md","tags":[{"inline":true,"label":"vehicle","permalink":"/ro/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"GetVehicleTrailer","sidebar_label":"GetVehicleTrailer","description":"Get the ID of the trailer attached to a vehicle.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"GetVehicleTower","permalink":"/ro/docs/scripting/functions/GetVehicleTower"},"next":{"title":"GetVehicleTrainSpeed","permalink":"/ro/docs/scripting/functions/GetVehicleTrainSpeed"}}');var n=i(74848),l=i(28453);const c={title:"GetVehicleTrailer",sidebar_label:"GetVehicleTrailer",description:"Get the ID of the trailer attached to a vehicle.",tags:["vehicle"]},a=void 0,s={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"Get the ID of the trailer attached to a vehicle."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"vehicleid"}),(0,n.jsx)(t.td,{children:"The ID of the vehicle to get the trailer of."})]})})]}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.p,{children:"The vehicle ID of the trailer or 0 if no trailer is attached."}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c",children:"new\n\ttrailerId = GetVehicleTrailer(vehicleid);\nDetachTrailerFromVehicle(trailerId);\n"})}),"\n",(0,n.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsx)(t.p,{children:"This function does not work for trains."})}),"\n",(0,n.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"AttachTrailerToVehicle",children:"AttachTrailerToVehicle"}),": Attach a trailer to a vehicle."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"DetachTrailerFromVehicle",children:"DetachTrailerFromVehicle"}),": Detach a trailer from a vehicle."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"IsTrailerAttachedToVehicle",children:"IsTrailerAttachedToVehicle"}),": Check if a trailer is attached to a vehicle."]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>c,x:()=>a});var r=i(96540);const n={},l=r.createContext(n);function c(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);