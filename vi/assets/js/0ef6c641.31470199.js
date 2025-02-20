"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[17624],{28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>s});var o=n(96540);const r={},i=o.createContext(r);function c(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),o.createElement(i.Provider,{value:t},e.children)}},31978:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>a});const o=JSON.parse('{"id":"scripting/functions/GetActorPoolSize","title":"GetActorPoolSize","description":"Gets the highest actorid created on the server.","source":"@site/docs/scripting/functions/GetActorPoolSize.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetActorPoolSize","permalink":"/vi/docs/scripting/functions/GetActorPoolSize","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetActorPoolSize.md","tags":[{"inline":true,"label":"actor","permalink":"/vi/docs/tags/actor"}],"version":"current","frontMatter":{"title":"GetActorPoolSize","sidebar_label":"GetActorPoolSize","description":"Gets the highest actorid created on the server.","tags":["actor"]},"sidebar":"docsSidebar","previous":{"title":"GetActorHealth","permalink":"/vi/docs/scripting/functions/GetActorHealth"},"next":{"title":"GetActorPos","permalink":"/vi/docs/scripting/functions/GetActorPos"}}');var r=n(74848),i=n(28453);const c={title:"GetActorPoolSize",sidebar_label:"GetActorPoolSize",description:"Gets the highest actorid created on the server.",tags:["actor"]},s=void 0,l={},a=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n,{version:"SA-MP 0.3.7"}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["Gets the highest actorid created on the server.  Note that in SA",":MP"," this function is broken and will return ",(0,r.jsx)(t.code,{children:"0"})," even when there are no actors.  fixes.inc and open.mp correct this to return ",(0,r.jsx)(t.code,{children:"-1"}),", but also deprecate the function in favour of ",(0,r.jsx)(t.code,{children:"MAX_ACTORS"})," or ",(0,r.jsx)(t.code,{children:"foreach"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:"SetAllActorsHealth(Float:health)\n{\n    for(new i = 0, j = GetActorPoolSize(); i <= j; i++)\n    {\n        if (IsValidActor(i))\n        {\n            SetActorHealth(i, health);\n        }\n    }\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"CreateActor",children:"CreateActor"}),": Create an actor (static NPC)."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"isValidActor",children:"IsValidActor"}),": Check if actor id is valid."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"SetActorHealth",children:"SetActorHealth"}),": Set the health of an actor."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);