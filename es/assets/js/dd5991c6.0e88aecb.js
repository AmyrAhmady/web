"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[932],{3966:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"scripting/functions/GetVehicleParamsSirenState","title":"GetVehicleParamsSirenState","description":"Returns a vehicle\'s siren state (on/off).","source":"@site/docs/scripting/functions/GetVehicleParamsSirenState.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetVehicleParamsSirenState","permalink":"/es/docs/scripting/functions/GetVehicleParamsSirenState","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetVehicleParamsSirenState.md","tags":[{"inline":true,"label":"vehicle","permalink":"/es/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"GetVehicleParamsSirenState","sidebar_label":"GetVehicleParamsSirenState","description":"Returns a vehicle\'s siren state (on/off).","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"GetVehicleParamsEx","permalink":"/es/docs/scripting/functions/GetVehicleParamsEx"},"next":{"title":"GetVehiclePoolSize","permalink":"/es/docs/scripting/functions/GetVehiclePoolSize"}}');var s=t(74848),r=t(28453);const o={title:"GetVehicleParamsSirenState",sidebar_label:"GetVehicleParamsSirenState",description:"Returns a vehicle's siren state (on/off).",tags:["vehicle"]},c=void 0,a={},l=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{VersionWarn:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t,{version:"SA-MP 0.3.7"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Returns a vehicle's siren state (on/off)."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"vehicleid"}),(0,s.jsx)(n.td,{children:"The ID of the vehicle to get the siren state of."})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"-1:"})," Vehicle siren hasn't been set yet (off)"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"0:"})," Vehicle siren is off"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"1:"})," Vehicle siren is on"]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"new\n    siren = GetVehicleParamsSirenState(vehicleid);\n\nif (siren == 1)\n{\n    // Siren is on, do something\n}\nelse if (siren == 0)\n{\n    // Siren is off, do something\n}\nelse\n{\n    // Vehicle does not have a siren\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsx)(n.p,{children:"Because a siren state of -1 or 0 means 'off', you cannot use a boolean conditional statement to check whether sirens are on. If you do 'if (sirenstate)', it will be true for anything NOT 0 (so -1 or 1). You should check that the siren state explicitly equals 1."})}),"\n",(0,s.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"SetVehicleParamsSirenState",children:"SetVehicleParamsSirenState"}),": Turn the siren for a vehicle on or off."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var i=t(96540);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);