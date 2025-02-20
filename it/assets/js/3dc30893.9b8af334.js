"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[70464],{28453:(t,e,r)=>{r.d(e,{R:()=>c,x:()=>l});var n=r(96540);const o={},i=n.createContext(o);function c(t){const e=n.useContext(i);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function l(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:c(t.components),n.createElement(i.Provider,{value:e},t.children)}},68294:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>n,toc:()=>a});const n=JSON.parse('{"id":"scripting/functions/GetActorVirtualWorld","title":"GetActorVirtualWorld","description":"Get the virtual world of an actor.","source":"@site/docs/scripting/functions/GetActorVirtualWorld.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetActorVirtualWorld","permalink":"/it/docs/scripting/functions/GetActorVirtualWorld","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetActorVirtualWorld.md","tags":[{"inline":true,"label":"actor","permalink":"/it/docs/tags/actor"}],"version":"current","frontMatter":{"title":"GetActorVirtualWorld","sidebar_label":"GetActorVirtualWorld","description":"Get the virtual world of an actor.","tags":["actor"]},"sidebar":"docsSidebar","previous":{"title":"GetActorSpawnInfo","permalink":"/it/docs/scripting/functions/GetActorSpawnInfo"},"next":{"title":"GetActors","permalink":"/it/docs/scripting/functions/GetActors"}}');var o=r(74848),i=r(28453);const c={title:"GetActorVirtualWorld",sidebar_label:"GetActorVirtualWorld",description:"Get the virtual world of an actor.",tags:["actor"]},l=void 0,s={},a=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(t){const e={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...t.components},{VersionWarn:r}=e;return r||function(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r,{version:"SA-MP 0.3.7"}),"\n",(0,o.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,o.jsx)(e.p,{children:"Get the virtual world of an actor."}),"\n",(0,o.jsxs)(e.table,{children:[(0,o.jsx)(e.thead,{children:(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.th,{children:"Name"}),(0,o.jsx)(e.th,{children:"Description"})]})}),(0,o.jsx)(e.tbody,{children:(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"actorid"}),(0,o.jsx)(e.td,{children:"The ID of the actor to get the virtual world of."})]})})]}),"\n",(0,o.jsx)(e.h2,{id:"returns",children:"Returns"}),"\n",(0,o.jsx)(e.p,{children:"The virtual world of the actor. By default this is 0."}),"\n",(0,o.jsx)(e.p,{children:"Also returns 0 if actor specified does not exist."}),"\n",(0,o.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-c",children:"new MyActor;\n\npublic OnGameModeInit()\n{\n    MyActor = CreateActor(69, 0.0, 0.0, 3.0, 0.0);\n\n    SetActorVirtualWorld(MyActor, 20);\n    return 1;\n}\n\n// Somewhere else\nif (GetActorVirtualWorld(MyActor) == 20)\n{\n    // Do something\n}\n"})}),"\n",(0,o.jsx)(e.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.a,{href:"SetActorVirtualWorld",children:"SetActorVirtualWorld"}),": Set the virtual world of an actor."]}),"\n"]})]})}function u(t={}){const{wrapper:e}={...(0,i.R)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(d,{...t})}):d(t)}}}]);