"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[86286],{28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var i=n(96540);const l={},s=i.createContext(l);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),i.createElement(s.Provider,{value:t},e.children)}},63032:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>x,frontMatter:()=>a,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"scripting/functions/IsValid3DTextLabel","title":"IsValid3DTextLabel","description":"Checks if a 3D text label is valid.","source":"@site/docs/scripting/functions/IsValid3DTextLabel.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/IsValid3DTextLabel","permalink":"/pl/docs/scripting/functions/IsValid3DTextLabel","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/IsValid3DTextLabel.md","tags":[{"inline":true,"label":"3dtextlabel","permalink":"/pl/docs/tags/3-dtextlabel"}],"version":"current","frontMatter":{"title":"IsValid3DTextLabel","sidebar_label":"IsValid3DTextLabel","description":"Checks if a 3D text label is valid.","tags":["3dtextlabel"]},"sidebar":"docsSidebar","previous":{"title":"IsTrailerAttachedToVehicle","permalink":"/pl/docs/scripting/functions/IsTrailerAttachedToVehicle"},"next":{"title":"IsValidActor","permalink":"/pl/docs/scripting/functions/IsValidActor"}}');var l=n(74848),s=n(28453);const a={title:"IsValid3DTextLabel",sidebar_label:"IsValid3DTextLabel",description:"Checks if a 3D text label is valid.",tags:["3dtextlabel"]},r=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,l.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(t.p,{children:"Checks if a 3D text label is valid."}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Name"}),(0,l.jsx)(t.th,{children:"Description"})]})}),(0,l.jsx)(t.tbody,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{children:["Text3D",":textid"]}),(0,l.jsx)(t.td,{children:"The ID of the 3D text label to check."})]})})]}),"\n",(0,l.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsxs)(t.p,{children:["This function returns ",(0,l.jsx)(t.strong,{children:"true"})," if the 3D text label is valid, or ",(0,l.jsx)(t.strong,{children:"false"})," if it is not."]}),"\n",(0,l.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-c",children:'new Text3D:gMyLabel;\n\npublic OnGameModeInit()\n{\n    gMyLabel = Create3DTextLabel("I\'m at the coordinates:\\n30.0, 40.0, 50.0", 0x008080FF, 30.0, 40.0, 50.0, 40.0, 0, false);\n\n    if (IsValid3DTextLabel(gMyLabel))\n    {\n        // Do something\n    }\n    return 1;\n}\n'})}),"\n",(0,l.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"Create3DTextLabel",children:"Create3DTextLabel"}),": Creates a 3D Text Label at a specific location in the world."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"IsValidPlayer3DTextLabel",children:"IsValidPlayer3DTextLabel"}),": Checks if a player's 3D text label is valid."]}),"\n"]})]})}function x(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}}}]);