"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[45891],{28453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>n});var r=i(96540);const l={},c=r.createContext(l);function s(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),r.createElement(c.Provider,{value:t},e.children)}},48040:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>n,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"scripting/functions/IsTrailerAttachedToVehicle","title":"IsTrailerAttachedToVehicle","description":"Checks if a vehicle has a trailer attached to it.","source":"@site/docs/scripting/functions/IsTrailerAttachedToVehicle.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/IsTrailerAttachedToVehicle","permalink":"/de/docs/scripting/functions/IsTrailerAttachedToVehicle","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/IsTrailerAttachedToVehicle.md","tags":[{"inline":true,"label":"vehicle","permalink":"/de/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"IsTrailerAttachedToVehicle","sidebar_label":"IsTrailerAttachedToVehicle","description":"Checks if a vehicle has a trailer attached to it.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"IsTextDrawVisibleForPlayer","permalink":"/de/docs/scripting/functions/IsTextDrawVisibleForPlayer"},"next":{"title":"IsValid3DTextLabel","permalink":"/de/docs/scripting/functions/IsValid3DTextLabel"}}');var l=i(74848),c=i(28453);const s={title:"IsTrailerAttachedToVehicle",sidebar_label:"IsTrailerAttachedToVehicle",description:"Checks if a vehicle has a trailer attached to it.",tags:["vehicle"]},n=void 0,a={},h=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function o(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(t.p,{children:"Checks if a vehicle has a trailer attached to it. Use GetVehicleTrailer to get the vehicle ID of the trailer (if any)."}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Name"}),(0,l.jsx)(t.th,{children:"Description"})]})}),(0,l.jsx)(t.tbody,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"vehicleid"}),(0,l.jsx)(t.td,{children:"The ID of the vehicle to check for trailers."})]})})]}),"\n",(0,l.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"true"})," - The vehicle has a trailer attached."]}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:"false"})," - The vehicle does not have a trailer attached."]}),"\n",(0,l.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-c",children:'if (IsTrailerAttachedToVehicle(vehicleid))\n{\n    printf("Vehicle %i has a trailer!", vehicleid);\n}\n'})}),"\n",(0,l.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"GetVehicleTrailer",children:"GetVehicleTrailer"}),": Check what trailer a vehicle is pulling."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"AttachTrailerToVehicle",children:"AttachTrailerToVehicle"}),": Attach a trailer to a vehicle."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"DetachTrailerFromVehicle",children:"DetachTrailerFromVehicle"}),": Detach a trailer from a vehicle."]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}}}]);