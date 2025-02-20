"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[88587],{852:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>o,frontMatter:()=>s,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"scripting/callbacks/OnVehicleSpawn","title":"OnVehicleSpawn","description":"This callback is called when a vehicle respawns.","source":"@site/docs/scripting/callbacks/OnVehicleSpawn.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnVehicleSpawn","permalink":"/ta/docs/scripting/callbacks/OnVehicleSpawn","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnVehicleSpawn.md","tags":[{"inline":true,"label":"vehicle","permalink":"/ta/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"OnVehicleSpawn","sidebar_label":"OnVehicleSpawn","description":"This callback is called when a vehicle respawns.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"OnVehicleSirenStateChange","permalink":"/ta/docs/scripting/callbacks/OnVehicleSirenStateChange"},"next":{"title":"OnVehicleStreamIn","permalink":"/ta/docs/scripting/callbacks/OnVehicleStreamIn"}}');var c=l(74848),t=l(28453);const s={title:"OnVehicleSpawn",sidebar_label:"OnVehicleSpawn",description:"This callback is called when a vehicle respawns.",tags:["vehicle"]},a=void 0,r={},h=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.admonition,{type:"warning",children:(0,c.jsxs)(n.p,{children:["This callback is called ",(0,c.jsx)(n.strong,{children:"only"})," when vehicle ",(0,c.jsx)(n.strong,{children:"re"}),"spawns! CreateVehicle and AddStaticVehicle(Ex) ",(0,c.jsx)(n.strong,{children:"won't"})," trigger this callback."]})}),"\n",(0,c.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,c.jsx)(n.p,{children:"This callback is called when a vehicle respawns."}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Name"}),(0,c.jsx)(n.th,{children:"Description"})]})}),(0,c.jsx)(n.tbody,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"vehicleid"}),(0,c.jsx)(n.td,{children:"The ID of the vehicle that spawned."})]})})]}),"\n",(0,c.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,c.jsx)(n.p,{children:"0 - Will prevent other filterscripts from receiving this callback."}),"\n",(0,c.jsx)(n.p,{children:"1 - Indicates that this callback will be passed to the next filterscript."}),"\n",(0,c.jsx)(n.p,{children:"It is always called first in filterscripts."}),"\n",(0,c.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-c",children:'public OnVehicleSpawn(vehicleid)\n{\n    printf("Vehicle %i spawned!",vehicleid);\n    return 1;\n}\n'})}),"\n",(0,c.jsx)(n.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,c.jsx)(n.p,{children:"The following callbacks might be useful, as they're related to this callback in one way or another."}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"OnVehicleDeath",children:"OnVehicleDeath"}),": This callback is called when a vehicle is destroyed."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"OnPlayerSpawn",children:"OnPlayerSpawn"}),": This callback is called when a player spawns."]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,c.jsx)(n.p,{children:"The following functions might be useful, as they're related to this callback in one way or another."}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"../functions/SetVehicleToRespawn",children:"SetVehicleToRespawn"}),": Respawn a vehicle."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"../functions/CreateVehicle",children:"CreateVehicle"}),": Create a vehicle."]}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},28453:(e,n,l)=>{l.d(n,{R:()=>s,x:()=>a});var i=l(96540);const c={},t=i.createContext(c);function s(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);