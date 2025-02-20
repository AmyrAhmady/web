"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[44840],{28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>l});var r=n(96540);const s={},i=r.createContext(s);function c(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(i.Provider,{value:t},e.children)}},56158:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>c,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"scripting/functions/GetVehicles","title":"GetVehicles","description":"Gets an array variable of the IDs of the created vehicles on the server.","source":"@site/docs/scripting/functions/GetVehicles.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetVehicles","permalink":"/ar/docs/scripting/functions/GetVehicles","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetVehicles.md","tags":[{"inline":true,"label":"vehicle","permalink":"/ar/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"GetVehicles","sidebar_label":"GetVehicles","description":"Gets an array variable of the IDs of the created vehicles on the server.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"GetVehicleZAngle","permalink":"/ar/docs/scripting/functions/GetVehicleZAngle"},"next":{"title":"GetWeaponName","permalink":"/ar/docs/scripting/functions/GetWeaponName"}}');var s=n(74848),i=n(28453);const c={title:"GetVehicles",sidebar_label:"GetVehicles",description:"Gets an array variable of the IDs of the created vehicles on the server.",tags:["vehicle"]},l=void 0,o={},a=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Gets an array variable of the IDs of the created vehicles on the server."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"vehicles[]"}),(0,s.jsx)(t.td,{children:"An array into which to store the vehicle IDs, passed by reference."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"size"}),(0,s.jsx)(t.td,{children:"The size of the array."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(t.p,{children:"The function returns the number of vehicles stored in the array."}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-c",children:"new vehicles[MAX_VEHICLES];\n\nGetVehicles(vehicles, sizeof(vehicles));\n// The `vehicles` array now contains created vehicle IDs. { 0, 1, 2, 3, 4, ... }\n"})}),"\n",(0,s.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"GetPlayers",children:"GetPlayers"}),": Gets an array variable of the IDs of the current players on the server."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"GetActors",children:"GetActors"}),": Gets an array variable of the IDs of the created actors on the server."]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}}}]);