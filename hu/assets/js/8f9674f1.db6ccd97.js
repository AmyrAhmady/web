"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[48486],{28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var l=t(96540);const c={},i=l.createContext(c);function s(e){const n=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),l.createElement(i.Provider,{value:n},e.children)}},88220:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>o,frontMatter:()=>s,metadata:()=>l,toc:()=>d});const l=JSON.parse('{"id":"scripting/callbacks/OnNPCEnterVehicle","title":"OnNPCEnterVehicle","description":"This callback is called when a NPC enters a vehicle.","source":"@site/docs/scripting/callbacks/OnNPCEnterVehicle.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnNPCEnterVehicle","permalink":"/hu/docs/scripting/callbacks/OnNPCEnterVehicle","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnNPCEnterVehicle.md","tags":[{"inline":true,"label":"npc","permalink":"/hu/docs/tags/npc"}],"version":"current","frontMatter":{"title":"OnNPCEnterVehicle","sidebar_label":"OnNPCEnterVehicle","description":"This callback is called when a NPC enters a vehicle.","tags":["npc"]},"sidebar":"docsSidebar","previous":{"title":"OnNPCDisconnect","permalink":"/hu/docs/scripting/callbacks/OnNPCDisconnect"},"next":{"title":"OnNPCExitVehicle","permalink":"/hu/docs/scripting/callbacks/OnNPCExitVehicle"}}');var c=t(74848),i=t(28453);const s={title:"OnNPCEnterVehicle",sidebar_label:"OnNPCEnterVehicle",description:"This callback is called when a NPC enters a vehicle.",tags:["npc"]},a=void 0,r={},d=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,c.jsx)(n.p,{children:"This callback is called when a NPC enters a vehicle."}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Name"}),(0,c.jsx)(n.th,{children:"Description"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"vehicleid"}),(0,c.jsx)(n.td,{children:"The vehicle ID the NPC enter"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"seatid"}),(0,c.jsx)(n.td,{children:"The seatid the NPC uses"})]})]})]}),"\n",(0,c.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-c",children:'public OnNPCEnterVehicle(vehicleid, seatid)\n{\n    printf("OnNPCEnterVehicle ID: %d Seat: %d", vehicleid, seatid);\n    return 1;\n}\n'})}),"\n",(0,c.jsx)(n.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,c.jsx)(n.p,{children:"The following callbacks might be useful, as they're related to this callback in one way or another."}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"OnNPCExitVehicle",children:"OnNPCExitVehicle"}),": This callback is called when a NPC leaves a Vehicle."]}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}}}]);