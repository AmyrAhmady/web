"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[61877],{28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var i=t(96540);const s={},c=i.createContext(s);function r(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(c.Provider,{value:n},e.children)}},29825:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"scripting/functions/SetVehicleRespawnTick","title":"SetVehicleRespawnTick","description":"Set the respawn tick of a vehicle.","source":"@site/docs/scripting/functions/SetVehicleRespawnTick.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetVehicleRespawnTick","permalink":"/fr/docs/scripting/functions/SetVehicleRespawnTick","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/SetVehicleRespawnTick.md","tags":[{"inline":true,"label":"vehicle","permalink":"/fr/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"SetVehicleRespawnTick","sidebar_label":"SetVehicleRespawnTick","description":"Set the respawn tick of a vehicle.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"SetVehicleRespawnDelay","permalink":"/fr/docs/scripting/functions/SetVehicleRespawnDelay"},"next":{"title":"SetVehicleSpawnInfo","permalink":"/fr/docs/scripting/functions/SetVehicleSpawnInfo"}}');var s=t(74848),c=t(28453);const r={title:"SetVehicleRespawnTick",sidebar_label:"SetVehicleRespawnTick",description:"Set the respawn tick of a vehicle.",tags:["vehicle"]},l=void 0,o={},a=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Values",id:"return-values",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components},{VersionWarn:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t,{version:"omp v1.1.0.2612"}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsx)(n.p,{children:"This function has not yet been implemented."})}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Set the respawn tick of a vehicle."}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"vehicleid"}),(0,s.jsx)(n.td,{children:"The ID of the vehicle."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ticks"}),(0,s.jsx)(n.td,{children:"The ticks to set."})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"return-values",children:"Return Values"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"true"})," - Function executed successfully."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"false"})," - Function failed to execute."]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"public OnGameModeInit()\n{\n    new vehicleid = CreateVehicle(560, 2096.1917, -1328.5150, 25.1059, 0.0000, 1, 8, 60);\n\n    SetVehicleRespawnTick(vehicleid, 300);\n    return 1;\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"GetVehicleRespawnTick",children:"GetVehicleRespawnTick"}),": Get the respawn tick of a vehicle."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}}}]);