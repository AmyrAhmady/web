"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[65892],{28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var l=n(96540);const s={},i=l.createContext(s);function r(e){const t=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),l.createElement(i.Provider,{value:t},e.children)}},78574:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>x,frontMatter:()=>r,metadata:()=>l,toc:()=>c});const l=JSON.parse('{"id":"scripting/functions/Set3DTextLabelLOS","title":"Set3DTextLabelLOS","description":"Sets the 3D text label line-of-sight.","source":"@site/docs/scripting/functions/Set3DTextLabelLOS.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/Set3DTextLabelLOS","permalink":"/sl/docs/scripting/functions/Set3DTextLabelLOS","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/Set3DTextLabelLOS.md","tags":[{"inline":true,"label":"3dtextlabel","permalink":"/sl/docs/tags/3-dtextlabel"}],"version":"current","frontMatter":{"title":"Set3DTextLabelLOS","sidebar_label":"Set3DTextLabelLOS","description":"Sets the 3D text label line-of-sight.","tags":["3dtextlabel"]},"sidebar":"docsSidebar","previous":{"title":"Set3DTextLabelDrawDistance","permalink":"/sl/docs/scripting/functions/Set3DTextLabelDrawDistance"},"next":{"title":"Set3DTextLabelVirtualWorld","permalink":"/sl/docs/scripting/functions/Set3DTextLabelVirtualWorld"}}');var s=n(74848),i=n(28453);const r={title:"Set3DTextLabelLOS",sidebar_label:"Set3DTextLabelLOS",description:"Sets the 3D text label line-of-sight.",tags:["3dtextlabel"]},a=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Sets the 3D text label line-of-sight."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["Text3D",":textid"]}),(0,s.jsx)(t.td,{children:"The ID of the 3D text label to set the line-of-sight."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["bool",":enable"]}),(0,s.jsx)(t.td,{children:"(false/true) Test the line-of-sight so this text can't be seen through objects"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-c",children:"new Text3D:gMyLabel;\n\ngMyLabel = Create3DTextLabel(\"Hello World!\", 0x008080FF, 30.0, 40.0, 50.0, 40.0, 0, true);\n\nSet3DTextLabelLOS(gMyLabel, false);\n// The line-of-sight changed from 'true' to 'false'\n"})}),"\n",(0,s.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"Get3DTextLabelLOS",children:"Get3DTextLabelLOS"}),": Gets the 3D text label line-of-sight."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"SetPlayer3DTextLabelLOS",children:"SetPlayer3DTextLabelLOS"}),": Sets the player 3D text label line-of-sight."]}),"\n"]})]})}function x(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}}}]);