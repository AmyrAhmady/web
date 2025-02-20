"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[48221],{10032:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"scripting/functions/IsActorInvulnerable","title":"IsActorInvulnerable","description":"Check if an actor is invulnerable.","source":"@site/docs/scripting/functions/IsActorInvulnerable.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/IsActorInvulnerable","permalink":"/docs/scripting/functions/IsActorInvulnerable","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/IsActorInvulnerable.md","tags":[{"inline":true,"label":"actor","permalink":"/docs/tags/actor"}],"version":"current","frontMatter":{"title":"IsActorInvulnerable","sidebar_label":"IsActorInvulnerable","description":"Check if an actor is invulnerable.","tags":["actor"]},"sidebar":"docsSidebar","previous":{"title":"Is3DTextLabelStreamedIn","permalink":"/docs/scripting/functions/Is3DTextLabelStreamedIn"},"next":{"title":"IsActorStreamedIn","permalink":"/docs/scripting/functions/IsActorStreamedIn"}}');var s=t(74848),i=t(28453);const c={title:"IsActorInvulnerable",sidebar_label:"IsActorInvulnerable",description:"Check if an actor is invulnerable.",tags:["actor"]},l=void 0,o={},a=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{VersionWarn:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t,{version:"SA-MP 0.3.7"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Check if an actor is invulnerable."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"actorid"}),(0,s.jsx)(n.td,{children:"The ID of the actor to check."})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"true"})," - The actor is invulnerable."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"false"})," - The actor is vulnerable."]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'new gMyActor;\n\npublic OnGameModeInit()\n{\n    gMyActor = CreateActor(179, 316.1, -134.0, 999.6, 90.0); // Actor as a salesperson in Ammunation.\n    \n    if (IsActorInvulnerable(gMyActor))\n    {\n        print("Actor is invulnerable.");\n    }\n    else\n    {\n        print("Actor is vulnerable.");\n    }\n    return 1;\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"CreateActor",children:"CreateActor"}),": Create an actor (static NPC)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"SetActorInvulnerable",children:"SetActorInvulnerable"}),": Set actor invulnerable."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"SetActorHealth",children:"SetActorHealth"}),": Set the health of an actor."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>l});var r=t(96540);const s={},i=r.createContext(s);function c(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);