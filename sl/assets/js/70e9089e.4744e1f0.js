"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[39082],{28453:(e,t,i)=>{i.d(t,{R:()=>c,x:()=>a});var r=i(96540);const l={},n=r.createContext(l);function c(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),r.createElement(n.Provider,{value:t},e.children)}},50050:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>c,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"scripting/functions/AttachTrailerToVehicle","title":"AttachTrailerToVehicle","description":"Attach a vehicle to another vehicle as a trailer.","source":"@site/docs/scripting/functions/AttachTrailerToVehicle.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/AttachTrailerToVehicle","permalink":"/sl/docs/scripting/functions/AttachTrailerToVehicle","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/AttachTrailerToVehicle.md","tags":[{"inline":true,"label":"vehicle","permalink":"/sl/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"AttachTrailerToVehicle","sidebar_label":"AttachTrailerToVehicle","description":"Attach a vehicle to another vehicle as a trailer.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"AttachPlayerObjectToVehicle","permalink":"/sl/docs/scripting/functions/AttachPlayerObjectToVehicle"},"next":{"title":"Ban","permalink":"/sl/docs/scripting/functions/Ban"}}');var l=i(74848),n=i(28453);const c={title:"AttachTrailerToVehicle",sidebar_label:"AttachTrailerToVehicle",description:"Attach a vehicle to another vehicle as a trailer.",tags:["vehicle"]},a=void 0,s={},h=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function o(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(t.p,{children:"Attach a vehicle to another vehicle as a trailer."}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Name"}),(0,l.jsx)(t.th,{children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"trailerid"}),(0,l.jsx)(t.td,{children:"The ID of the vehicle that will be pulled."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"vehicleid"}),(0,l.jsx)(t.td,{children:"The ID of the vehicle that will pull the trailer."})]})]})]}),"\n",(0,l.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsxs)(t.p,{children:["This function always returns ",(0,l.jsx)(t.strong,{children:"true"}),", even if neither of the vehicle IDs passed are valid."]}),"\n",(0,l.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-c",children:"new vehicleId = CreateVehicle(403, 657.8788, 1721.9125, 7.7199, 41.0000, -1, -1, 100);\nnew trailerId = CreateVehicle(435, 651.8154, 1716.3301, 7.7700, 41.0000, -1, -1, 100);\n\nAttachTrailerToVehicle(trailerId, vehicleId);\n"})}),"\n",(0,l.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,l.jsx)(t.admonition,{type:"warning",children:(0,l.jsxs)(t.p,{children:["This will only work if both vehicles are streamed in for a player (check ",(0,l.jsx)(t.a,{href:"IsVehicleStreamedIn",children:"IsVehicleStreamedIn"}),")."]})}),"\n",(0,l.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"DetachTrailerFromVehicle",children:"DetachTrailerFromVehicle"}),": Detach a trailer from a vehicle."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"IsTrailerAttachedToVehicle",children:"IsTrailerAttachedToVehicle"}),": Check if a trailer is attached to a vehicle."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"GetVehicleTrailer",children:"GetVehicleTrailer"}),": Check what trailer a vehicle is pulling."]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}}}]);