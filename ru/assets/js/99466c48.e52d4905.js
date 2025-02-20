"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[32958],{1354:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"scripting/functions/Get3DTextLabelVirtualWorld","title":"Get3DTextLabelVirtualWorld","description":"Gets the 3D text label virtual world id.","source":"@site/docs/scripting/functions/Get3DTextLabelVirtualWorld.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/Get3DTextLabelVirtualWorld","permalink":"/ru/docs/scripting/functions/Get3DTextLabelVirtualWorld","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/Get3DTextLabelVirtualWorld.md","tags":[{"inline":true,"label":"3dtextlabel","permalink":"/ru/docs/tags/3-dtextlabel"}],"version":"current","frontMatter":{"title":"Get3DTextLabelVirtualWorld","sidebar_label":"Get3DTextLabelVirtualWorld","description":"Gets the 3D text label virtual world id.","tags":["3dtextlabel"]},"sidebar":"docsSidebar","previous":{"title":"Get3DTextLabelText","permalink":"/ru/docs/scripting/functions/Get3DTextLabelText"},"next":{"title":"GetActorAnimation","permalink":"/ru/docs/scripting/functions/GetActorAnimation"}}');var n=l(74848),i=l(28453);const s={title:"Get3DTextLabelVirtualWorld",sidebar_label:"Get3DTextLabelVirtualWorld",description:"Gets the 3D text label virtual world id.",tags:["3dtextlabel"]},a=void 0,o={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{VersionWarn:l}=t;return l||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l,{version:"omp v1.1.0.2612"}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"Gets the 3D text label virtual world id."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["Text3D",":textid"]}),(0,n.jsx)(t.td,{children:"The ID of the 3D text label to get the virtual world id of."})]})})]}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.p,{children:"Returns the virtual world id of the 3D text label."}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c",children:'new Text3D:gMyLabel;\nnew worldid;\n\ngMyLabel = Create3DTextLabel("Hello World!", 0x008080FF, 30.0, 40.0, 50.0, 10.0, 20, false);\n\nworldid = Get3DTextLabelVirtualWorld(gMyLabel);\n// worldid = 20\n'})}),"\n",(0,n.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"Set3DTextLabelVirtualWorld",children:"Set3DTextLabelVirtualWorld"}),": Sets the 3D text label virtual world id."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"GetPlayer3DTextLabelVirtualWorld",children:"GetPlayer3DTextLabelVirtualWorld"}),": Gets the player 3D text label virtual world id."]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,t,l)=>{l.d(t,{R:()=>s,x:()=>a});var r=l(96540);const n={},i=r.createContext(n);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);