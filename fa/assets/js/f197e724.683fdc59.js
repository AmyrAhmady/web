"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[49894],{28453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>l});var r=i(96540);const n={},s=r.createContext(n);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),r.createElement(s.Provider,{value:t},e.children)}},83864:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"scripting/functions/GetVehicleMatrix","title":"GetVehicleMatrix","description":"Gets the actual rotation matrix of the vehicle.","source":"@site/docs/scripting/functions/GetVehicleMatrix.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetVehicleMatrix","permalink":"/fa/docs/scripting/functions/GetVehicleMatrix","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetVehicleMatrix.md","tags":[{"inline":true,"label":"vehicle","permalink":"/fa/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"GetVehicleMatrix","sidebar_label":"GetVehicleMatrix","description":"Gets the actual rotation matrix of the vehicle.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"GetVehicleLastDriver","permalink":"/fa/docs/scripting/functions/GetVehicleLastDriver"},"next":{"title":"GetVehicleModel","permalink":"/fa/docs/scripting/functions/GetVehicleModel"}}');var n=i(74848),s=i(28453);const a={title:"GetVehicleMatrix",sidebar_label:"GetVehicleMatrix",description:"Gets the actual rotation matrix of the vehicle.",tags:["vehicle"]},l=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components},{VersionWarn:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i,{version:"omp v1.1.0.2612"}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"Gets the actual rotation matrix of the vehicle."}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"vehicleid"}),(0,n.jsx)(t.td,{children:"The ID of the vehicle."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["&Float",":rightX"]}),(0,n.jsx)(t.td,{children:"A float variable in which to store the rightX coordinate, passed by reference."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["&Float",":rightY"]}),(0,n.jsx)(t.td,{children:"A float variable in which to store the rightY coordinate, passed by reference."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["&Float",":rightZ"]}),(0,n.jsx)(t.td,{children:"A float variable in which to store the rightZ coordinate, passed by reference."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["&Float",":upX"]}),(0,n.jsx)(t.td,{children:"A float variable in which to store the upX coordinate, passed by reference."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["&Float",":upY"]}),(0,n.jsx)(t.td,{children:"A float variable in which to store the upY coordinate, passed by reference."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["&Float",":upZ"]}),(0,n.jsx)(t.td,{children:"A float variable in which to store the upZ coordinate, passed by reference."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["&Float",":atX"]}),(0,n.jsx)(t.td,{children:"A float variable in which to store the atX coordinate, passed by reference."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["&Float",":atY"]}),(0,n.jsx)(t.td,{children:"A float variable in which to store the atY coordinate, passed by reference."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["&Float",":atZ"]}),(0,n.jsx)(t.td,{children:"A float variable in which to store the atZ coordinate, passed by reference."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c",children:"new \n    Float:rightX,\n    Float:rightY,\n    Float:rightZ,\n    Float:upX,\n    Float:upY,\n    Float:upZ,\n    Float:atX,\n    Float:atY,\n    Float:atZ;\n\nGetVehicleMatrix(vehicleid, rightX, rightY, rightZ, upX, upY, upZ, atX, atY, atZ);\n"})}),"\n",(0,n.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"GetVehicleRotationQuat",children:"GetVehicleRotationQuat"}),": Returns a vehicle's rotation on all axes as a quaternion."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}}}]);