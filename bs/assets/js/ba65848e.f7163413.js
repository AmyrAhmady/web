"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[14842],{28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>s});var c=i(96540);const t={},l=c.createContext(t);function r(e){const n=c.useContext(l);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),c.createElement(l.Provider,{value:n},e.children)}},31357:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});const c=JSON.parse('{"id":"scripting/callbacks/OnNPCEnterVehicle","title":"OnNPCEnterVehicle","description":"Ovaj callback je pozvan kada NPC u\u0111e u vozilo.","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/callbacks/OnNPCEnterVehicle.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnNPCEnterVehicle","permalink":"/bs/docs/scripting/callbacks/OnNPCEnterVehicle","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnNPCEnterVehicle.md","tags":[{"inline":true,"label":"npc","permalink":"/bs/docs/tags/npc"}],"version":"current","frontMatter":{"title":"OnNPCEnterVehicle","sidebar_label":"OnNPCEnterVehicle","description":"Ovaj callback je pozvan kada NPC u\u0111e u vozilo.","tags":["npc"]},"sidebar":"docsSidebar","previous":{"title":"OnNPCDisconnect","permalink":"/bs/docs/scripting/callbacks/OnNPCDisconnect"},"next":{"title":"OnNPCExitVehicle","permalink":"/bs/docs/scripting/callbacks/OnNPCExitVehicle"}}');var t=i(74848),l=i(28453);const r={title:"OnNPCEnterVehicle",sidebar_label:"OnNPCEnterVehicle",description:"Ovaj callback je pozvan kada NPC u\u0111e u vozilo.",tags:["npc"]},s=void 0,a={},d=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function o(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,t.jsx)(n.p,{children:"Ovaj callback je pozvan kada NPC u\u0111e u vozilo."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Ime"}),(0,t.jsx)(n.th,{children:"Deskripcija"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"vehicleid"}),(0,t.jsx)(n.td,{children:"ID vozila u koje NPC ulazi."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"seatid"}),(0,t.jsx)(n.td,{children:"ID sjedi\u0161ta na kojem NPC sjedi."})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'public OnNPCEnterVehicle(vehicleid, seatid)\n{\n    printf("OnNPCEnterVehicle ID: %d Sjedi\u0161te: %d", vehicleid, seatid);\n    return 1;\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,t.jsx)(n.p,{children:"Slijede\u0107i callbackovi mogu biti korisni, zato \u0161to su povezani sa ovim callback-om na neki na\u010din."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"OnNPCExitVehicle",children:"OnNPCExitVehicle"}),": Ovaj callback je pozvan kada NPC iza\u0111e iz vozila."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}}}]);