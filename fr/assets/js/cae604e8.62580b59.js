"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[70021],{28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var a=n(96540);const s={},r=a.createContext(s);function i(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:t},e.children)}},56163:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>x,frontMatter:()=>i,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"scripting/functions/Get3DTextLabelDrawDistance","title":"Get3DTextLabelDrawDistance","description":"Gets the 3D text label draw distance.","source":"@site/docs/scripting/functions/Get3DTextLabelDrawDistance.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/Get3DTextLabelDrawDistance","permalink":"/fr/docs/scripting/functions/Get3DTextLabelDrawDistance","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/Get3DTextLabelDrawDistance.md","tags":[{"inline":true,"label":"3dtextlabel","permalink":"/fr/docs/tags/3-dtextlabel"}],"version":"current","frontMatter":{"title":"Get3DTextLabelDrawDistance","sidebar_label":"Get3DTextLabelDrawDistance","description":"Gets the 3D text label draw distance.","tags":["3dtextlabel"]},"sidebar":"docsSidebar","previous":{"title":"Get3DTextLabelColour","permalink":"/fr/docs/scripting/functions/Get3DTextLabelColour"},"next":{"title":"Get3DTextLabelLOS","permalink":"/fr/docs/scripting/functions/Get3DTextLabelLOS"}}');var s=n(74848),r=n(28453);const i={title:"Get3DTextLabelDrawDistance",sidebar_label:"Get3DTextLabelDrawDistance",description:"Gets the 3D text label draw distance.",tags:["3dtextlabel"]},l=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function o(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Gets the 3D text label draw distance."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["Text3D",":textid"]}),(0,s.jsx)(t.td,{children:"The ID of the 3D text label to get the draw distance of."})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(t.p,{children:"Returns the draw distance of the 3D text label as float."}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-c",children:'new Text3D:gMyLabel;\nnew Float:drawDistance;\n\ngMyLabel = Create3DTextLabel("Hello World!", 0x008080FF, 30.0, 40.0, 50.0, 10.0, 0, false);\n\ndrawDistance = Get3DTextLabelDrawDistance(gMyLabel);\n// drawDistance = 10.0\n'})}),"\n",(0,s.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"Set3DTextLabelDrawDistance",children:"Set3DTextLabelDrawDistance"}),": Sets the 3D text label draw distance."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"GetPlayer3DTextLabelDrawDistance",children:"GetPlayer3DTextLabelDrawDistance"}),": Gets the player 3D text label draw distance."]}),"\n"]})]})}function x(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}}}]);