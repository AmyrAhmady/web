"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[96732],{28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var c=i(96540);const t={},l=c.createContext(t);function r(e){const n=c.useContext(l);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),c.createElement(l.Provider,{value:n},e.children)}},55096:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>o,frontMatter:()=>r,metadata:()=>c,toc:()=>h});const c=JSON.parse('{"id":"scripting/callbacks/OnVehicleStreamIn","title":"OnVehicleStreamIn","description":"Callback n\xe0y \u0111\u01b0\u1ee3c g\u1ecdi khi m\u1ed9t xe \u0111\u01b0\u1ee3c stream \u0111\u1ebfn client c\u1ee7a ng\u01b0\u1eddi ch\u01a1i.","source":"@site/i18n/vi/docusaurus-plugin-content-docs/current/scripting/callbacks/OnVehicleStreamIn.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnVehicleStreamIn","permalink":"/vi/docs/scripting/callbacks/OnVehicleStreamIn","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnVehicleStreamIn.md","tags":[{"inline":true,"label":"vehicle","permalink":"/vi/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"OnVehicleStreamIn","sidebar_label":"OnVehicleStreamIn","description":"Callback n\xe0y \u0111\u01b0\u1ee3c g\u1ecdi khi m\u1ed9t xe \u0111\u01b0\u1ee3c stream \u0111\u1ebfn client c\u1ee7a ng\u01b0\u1eddi ch\u01a1i.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"OnVehicleSpawn","permalink":"/vi/docs/scripting/callbacks/OnVehicleSpawn"},"next":{"title":"OnVehicleStreamOut","permalink":"/vi/docs/scripting/callbacks/OnVehicleStreamOut"}}');var t=i(74848),l=i(28453);const r={title:"OnVehicleStreamIn",sidebar_label:"OnVehicleStreamIn",description:"Callback n\xe0y \u0111\u01b0\u1ee3c g\u1ecdi khi m\u1ed9t xe \u0111\u01b0\u1ee3c stream \u0111\u1ebfn client c\u1ee7a ng\u01b0\u1eddi ch\u01a1i.",tags:["vehicle"]},a=void 0,s={},h=[{value:"M\xf4 t\u1ea3",id:"m\xf4-t\u1ea3",level:2},{value:"Tr\u1ea3 v\u1ec1",id:"tr\u1ea3-v\u1ec1",level:2},{value:"V\xed d\u1ee5",id:"v\xed-d\u1ee5",level:2},{value:"Ghi ch\xfa",id:"ghi-ch\xfa",level:2},{value:"C\xe1c callback li\xean quan",id:"c\xe1c-callback-li\xean-quan",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components},{TipNPCCallbacks:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("TipNPCCallbacks",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"m\xf4-t\u1ea3",children:"M\xf4 t\u1ea3"}),"\n",(0,t.jsx)(n.p,{children:"Callback n\xe0y \u0111\u01b0\u1ee3c g\u1ecdi khi m\u1ed9t xe \u0111\u01b0\u1ee3c stream \u0111\u1ebfn client c\u1ee7a ng\u01b0\u1eddi ch\u01a1i."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"T\xean"}),(0,t.jsx)(n.th,{children:"M\xf4 t\u1ea3"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"vehicleid"}),(0,t.jsx)(n.td,{children:"ID c\u1ee7a xe \u0111\u01b0\u1ee3c stream \u0111\u1ebfn cho ng\u01b0\u1eddi ch\u01a1i."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"forplayerid"}),(0,t.jsx)(n.td,{children:"ID c\u1ee7a ng\u01b0\u1eddi ch\u01a1i m\xe0 xe \u0111\u01b0\u1ee3c stream \u0111\u1ebfn."})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"tr\u1ea3-v\u1ec1",children:"Tr\u1ea3 v\u1ec1"}),"\n",(0,t.jsx)(n.p,{children:"Lu\xf4n \u0111\u01b0\u1ee3c g\u1ecdi \u0111\u1ea7u ti\xean trong filterscripts."}),"\n",(0,t.jsx)(n.h2,{id:"v\xed-d\u1ee5",children:"V\xed d\u1ee5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'public OnVehicleStreamIn(vehicleid, forplayerid)\n{\n    new string[32];\n    format(string, sizeof(string), "B\u1ea1n c\xf3 th\u1ec3 th\u1ea5y xe %d.", vehicleid);\n    SendClientMessage(forplayerid, 0xFFFFFFFF, string);\n    return 1;\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"ghi-ch\xfa",children:"Ghi ch\xfa"}),"\n",(0,t.jsx)(i,{}),"\n",(0,t.jsx)(n.h2,{id:"c\xe1c-callback-li\xean-quan",children:"C\xe1c callback li\xean quan"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"OnVehicleStreamOut",children:"OnVehicleStreamOut"}),": Callback n\xe0y \u0111\u01b0\u1ee3c g\u1ecdi khi m\u1ed9t xe b\u1ecb stream ra kh\u1ecfi client c\u1ee7a ng\u01b0\u1eddi ch\u01a1i."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"OnPlayerStreamIn",children:"OnPlayerStreamIn"}),": Callback n\xe0y \u0111\u01b0\u1ee3c g\u1ecdi khi m\u1ed9t ng\u01b0\u1eddi ch\u01a1i \u0111\u01b0\u1ee3c stream \u0111\u1ebfn cho m\u1ed9t ng\u01b0\u1eddi ch\u01a1i kh\xe1c."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"OnPlayerStreamOut",children:"OnPlayerStreamOut"}),": Callback n\xe0y \u0111\u01b0\u1ee3c g\u1ecdi khi m\u1ed9t ng\u01b0\u1eddi ch\u01a1i b\u1ecb stream ra kh\u1ecfi client c\u1ee7a ng\u01b0\u1eddi ch\u01a1i kh\xe1c."]}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}}}]);