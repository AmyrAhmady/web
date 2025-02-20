"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[93592],{28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var i=n(96540);const r={},s=i.createContext(r);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:t},e.children)}},34392:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"scripting/functions/VectorSize","title":"VectorSize","description":"Returns the norm (length) of the provided vector.","source":"@site/docs/scripting/functions/VectorSize.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/VectorSize","permalink":"/tr/docs/scripting/functions/VectorSize","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/VectorSize.md","tags":[{"inline":true,"label":"math","permalink":"/tr/docs/tags/math"}],"version":"current","frontMatter":{"title":"VectorSize","sidebar_label":"VectorSize","description":"Returns the norm (length) of the provided vector.","tags":["math"]},"sidebar":"docsSidebar","previous":{"title":"UsePlayerPedAnims","permalink":"/tr/docs/scripting/functions/UsePlayerPedAnims"},"next":{"title":"VehicleCanHaveComponent","permalink":"/tr/docs/scripting/functions/VehicleCanHaveComponent"}}');var r=n(74848),s=n(28453);const o={title:"VectorSize",sidebar_label:"VectorSize",description:"Returns the norm (length) of the provided vector.",tags:["math"]},c=void 0,l={},a=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Returns the norm (length) of the provided vector."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["Float",":x"]}),(0,r.jsx)(t.td,{children:"The vector's magnitude on the X axis."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["Float",":y"]}),(0,r.jsx)(t.td,{children:"The vector's magnitude on the Y axis."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["Float",":z"]}),(0,r.jsx)(t.td,{children:"The vector's magnitude on the Z axis."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(t.p,{children:"The norm (length) of the provided vector as a float."}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:"stock Float:GetDistanceBetweenPoints(Float:x1, Float:y1, Float:z1, Float:x2, Float:y2, Float:z2)\n{\n    return VectorSize(x1-x2, y1-y2, z1-z2);\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"GetPlayerDistanceFromPoint",children:"GetPlayerDistanceFromPoint"}),": Get the distance between a player and a point."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"GetVehicleDistanceFromPoint",children:"GetVehicleDistanceFromPoint"}),": Get the distance between a vehicle and a point."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"floatsqroot",children:"floatsqroot"}),": Calculate the square root of a floating point value."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);