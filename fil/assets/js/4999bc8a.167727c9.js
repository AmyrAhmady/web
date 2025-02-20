"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[29648],{28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>l});var s=n(96540);const a={},i=s.createContext(a);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:t},e.children)}},70168:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>x,frontMatter:()=>r,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"scripting/functions/Set3DTextLabelDrawDistance","title":"Set3DTextLabelDrawDistance","description":"Sets the 3D text label draw distance.","source":"@site/docs/scripting/functions/Set3DTextLabelDrawDistance.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/Set3DTextLabelDrawDistance","permalink":"/fil/docs/scripting/functions/Set3DTextLabelDrawDistance","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/Set3DTextLabelDrawDistance.md","tags":[{"inline":true,"label":"3dtextlabel","permalink":"/fil/docs/tags/3-dtextlabel"}],"version":"current","frontMatter":{"title":"Set3DTextLabelDrawDistance","sidebar_label":"Set3DTextLabelDrawDistance","description":"Sets the 3D text label draw distance.","tags":["3dtextlabel"]},"sidebar":"docsSidebar","previous":{"title":"SendRconCommand","permalink":"/fil/docs/scripting/functions/SendRconCommand"},"next":{"title":"Set3DTextLabelLOS","permalink":"/fil/docs/scripting/functions/Set3DTextLabelLOS"}}');var a=n(74848),i=n(28453);const r={title:"Set3DTextLabelDrawDistance",sidebar_label:"Set3DTextLabelDrawDistance",description:"Sets the 3D text label draw distance.",tags:["3dtextlabel"]},l=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function o(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,a.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(t.p,{children:"Sets the 3D text label draw distance."}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{children:["Text3D",":textid"]}),(0,a.jsx)(t.td,{children:"The ID of the 3D text label to set the draw distance."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{children:["Float",":drawDistance"]}),(0,a.jsx)(t.td,{children:"The distance from where you are able to see the 3D Text Label."})]})]})]}),"\n",(0,a.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(t.p,{children:"This function always returns true."}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-c",children:'new Text3D:gMyLabel;\n\ngMyLabel = Create3DTextLabel("Hello World!", 0x008080FF, 30.0, 40.0, 50.0, 10.0, 0, false);\n\nSet3DTextLabelDrawDistance(gMyLabel, 20.0);\n// The draw distance changed from 10.0 to 20.0\n'})}),"\n",(0,a.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"Get3DTextLabelDrawDistance",children:"Get3DTextLabelDrawDistance"}),": Gets the 3D text label draw distance."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"SetPlayer3DTextLabelDrawDistance",children:"SetPlayer3DTextLabelDrawDistance"}),": Sets the player 3D text label draw distance."]}),"\n"]})]})}function x(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}}}]);