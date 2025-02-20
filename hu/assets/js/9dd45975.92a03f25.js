"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[66098],{28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>i});var t=r(96540);const l={},s=t.createContext(l);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),t.createElement(s.Provider,{value:n},e.children)}},35832:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"scripting/functions/ArePlayerWeaponsAllowed","title":"ArePlayerWeaponsAllowed","description":"Can the player use weapons?","source":"@site/docs/scripting/functions/ArePlayerWeaponsAllowed.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/ArePlayerWeaponsAllowed","permalink":"/hu/docs/scripting/functions/ArePlayerWeaponsAllowed","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/ArePlayerWeaponsAllowed.md","tags":[{"inline":true,"label":"player","permalink":"/hu/docs/tags/player"}],"version":"current","frontMatter":{"title":"ArePlayerWeaponsAllowed","sidebar_label":"ArePlayerWeaponsAllowed","description":"Can the player use weapons?","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"AreInteriorWeaponsAllowed","permalink":"/hu/docs/scripting/functions/AreInteriorWeaponsAllowed"},"next":{"title":"Attach3DTextLabelToPlayer","permalink":"/hu/docs/scripting/functions/Attach3DTextLabelToPlayer"}}');var l=r(74848),s=r(28453);const o={title:"ArePlayerWeaponsAllowed",sidebar_label:"ArePlayerWeaponsAllowed",description:"Can the player use weapons?",tags:["player"]},i=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components},{VersionWarn:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r,{version:"omp v1.1.0.2612"}),"\n",(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"Can the player use weapons?"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Name"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"playerid"}),(0,l.jsx)(n.td,{children:"The ID of the player to check."})]})})]}),"\n",(0,l.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"true"})," - Player is allowed."]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"false"})," - Player is not allowed."]}),"\n",(0,l.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:"public OnPlayerSpawn(playerid)\n{\n    if (ArePlayerWeaponsAllowed(playerid))\n    {\n        // do something\n    }\n\n    return 1;\n}\n"})}),"\n",(0,l.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"AllowPlayerWeapons",children:"AllowPlayerWeapons"}),": Enable/Disable weapons for a player."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}}}]);