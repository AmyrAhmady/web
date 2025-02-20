"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[71103],{9597:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"scripting/functions/Set3DTextLabelVirtualWorld","title":"Set3DTextLabelVirtualWorld","description":"Sets the 3D text label virtual world id.","source":"@site/docs/scripting/functions/Set3DTextLabelVirtualWorld.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/Set3DTextLabelVirtualWorld","permalink":"/tr/docs/scripting/functions/Set3DTextLabelVirtualWorld","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/Set3DTextLabelVirtualWorld.md","tags":[{"inline":true,"label":"3dtextlabel","permalink":"/tr/docs/tags/3-dtextlabel"}],"version":"current","frontMatter":{"title":"Set3DTextLabelVirtualWorld","sidebar_label":"Set3DTextLabelVirtualWorld","description":"Sets the 3D text label virtual world id.","tags":["3dtextlabel"]},"sidebar":"docsSidebar","previous":{"title":"Set3DTextLabelLOS","permalink":"/tr/docs/scripting/functions/Set3DTextLabelLOS"},"next":{"title":"SetActorFacingAngle","permalink":"/tr/docs/scripting/functions/SetActorFacingAngle"}}');var i=l(74848),n=l(28453);const a={title:"Set3DTextLabelVirtualWorld",sidebar_label:"Set3DTextLabelVirtualWorld",description:"Sets the 3D text label virtual world id.",tags:["3dtextlabel"]},s=void 0,o={},d=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components},{VersionWarn:l}=t;return l||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l,{version:"omp v1.1.0.2612"}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Sets the 3D text label virtual world id."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["Text3D",":textid"]}),(0,i.jsx)(t.td,{children:"The ID of the 3D text label to set the virtual world id."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"virtualWorld"}),(0,i.jsx)(t.td,{children:"The virtual world in which you are able to see the 3D Text"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:"new Text3D:gMyLabel;\n\ngMyLabel = Create3DTextLabel(\"Hello World!\", 0x008080FF, 30.0, 40.0, 50.0, 10.0, 20, false);\n\nSet3DTextLabelVirtualWorld(gMyLabel, 60);\n// The virtual world id changed from '20' to '60'\n"})}),"\n",(0,i.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"Get3DTextLabelVirtualWorld",children:"Get3DTextLabelVirtualWorld"}),": Gets the 3D text label virtual world id."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"SetPlayer3DTextLabelVirtualWorld",children:"SetPlayer3DTextLabelVirtualWorld"}),": Sets the player 3D text label virtual world id."]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,t,l)=>{l.d(t,{R:()=>a,x:()=>s});var r=l(96540);const i={},n=r.createContext(i);function a(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);