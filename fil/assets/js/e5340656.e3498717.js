"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[23995],{28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var l=n(96540);const s={},r=l.createContext(s);function i(e){const t=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),l.createElement(r.Provider,{value:t},e.children)}},75486:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>x,frontMatter:()=>i,metadata:()=>l,toc:()=>c});const l=JSON.parse('{"id":"scripting/functions/Get3DTextLabelText","title":"Get3DTextLabelText","description":"Gets the 3D text label text.","source":"@site/docs/scripting/functions/Get3DTextLabelText.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/Get3DTextLabelText","permalink":"/fil/docs/scripting/functions/Get3DTextLabelText","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/Get3DTextLabelText.md","tags":[{"inline":true,"label":"3dtextlabel","permalink":"/fil/docs/tags/3-dtextlabel"}],"version":"current","frontMatter":{"title":"Get3DTextLabelText","sidebar_label":"Get3DTextLabelText","description":"Gets the 3D text label text.","tags":["3dtextlabel"]},"sidebar":"docsSidebar","previous":{"title":"Get3DTextLabelPos","permalink":"/fil/docs/scripting/functions/Get3DTextLabelPos"},"next":{"title":"Get3DTextLabelVirtualWorld","permalink":"/fil/docs/scripting/functions/Get3DTextLabelVirtualWorld"}}');var s=n(74848),r=n(28453);const i={title:"Get3DTextLabelText",sidebar_label:"Get3DTextLabelText",description:"Gets the 3D text label text.",tags:["3dtextlabel"]},a=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Gets the 3D text label text."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["Text3D",":textid"]}),(0,s.jsx)(t.td,{children:"The ID of the 3D text label to get the text of."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"const text[]"}),(0,s.jsx)(t.td,{children:"An array into which to store the text, passed by reference."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"len"}),(0,s.jsx)(t.td,{children:"The length of the text that should be stored."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-c",children:"new Text3D:gMyLabel;\n\npublic OnGameModeInit()\n{\n    gMyLabel = Create3DTextLabel(\"Hello World!\", 0x008080FF, 30.0, 40.0, 50.0, 40.0, 0, false);\n    \n    new text[16];\n    Get3DTextLabelText(gMyLabel, text, sizeof(text));\n    // The `text` will be 'Hello World!'\n    return 1;\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"Create3DTextLabel",children:"Create3DTextLabel"}),": Create a 3D text label."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"Update3DTextLabelText",children:"Update3DTextLabelText"}),": Updates a 3D Text Label text and colour."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"GetPlayer3DTextLabelText",children:"GetPlayer3DTextLabelText"}),": Gets the player 3D text label text."]}),"\n"]})]})}function x(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}}}]);