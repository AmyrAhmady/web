"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[13840],{28453:(e,i,n)=>{n.d(i,{R:()=>c,x:()=>l});var t=n(96540);const r={},s=t.createContext(r);function c(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(s.Provider,{value:i},e.children)}},93349:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"scripting/functions/HideVehicle","title":"HideVehicle","description":"Hides a vehicle from the game.","source":"@site/docs/scripting/functions/HideVehicle.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/HideVehicle","permalink":"/ar/docs/scripting/functions/HideVehicle","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/HideVehicle.md","tags":[{"inline":true,"label":"vehicle","permalink":"/ar/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"HideVehicle","sidebar_label":"HideVehicle","description":"Hides a vehicle from the game.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"HidePlayerDialog","permalink":"/ar/docs/scripting/functions/HidePlayerDialog"},"next":{"title":"InterpolateCameraLookAt","permalink":"/ar/docs/scripting/functions/InterpolateCameraLookAt"}}');var r=n(74848),s=n(28453);const c={title:"HideVehicle",sidebar_label:"HideVehicle",description:"Hides a vehicle from the game.",tags:["vehicle"]},l=void 0,o={},d=[{value:"Description",id:"description",level:2},{value:"Parametes",id:"parametes",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function a(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components},{VersionWarn:n}=i;return n||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,r.jsx)(i.admonition,{type:"warning",children:(0,r.jsx)(i.p,{children:"This function has not yet been implemented."})}),"\n",(0,r.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(i.p,{children:"Hides a vehicle from the game."}),"\n",(0,r.jsx)(i.h2,{id:"parametes",children:"Parametes"}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Name"}),(0,r.jsx)(i.th,{children:"Description"})]})}),(0,r.jsx)(i.tbody,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"vehicleid"}),(0,r.jsx)(i.td,{children:"The ID of the vehicle to hide."})]})})]}),"\n",(0,r.jsx)(i.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-c",children:"public OnGameModeInit()\n{\n    new vehicleid = CreateVehicle(536, 2496.5034, 5.6658, 27.2247, 180.0000, -1, -1, 60);\n    HideVehicle(vehicleid);\n    return 1;\n}\n"})}),"\n",(0,r.jsx)(i.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"ShowVehicle",children:"ShowVehicle"}),": Shows the hidden vehicle."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"IsVehicleHidden",children:"IsVehicleHidden"}),": Checks if a vehicle is hidden."]}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}}}]);