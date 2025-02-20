"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[63931],{27399:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"scripting/functions/GetActorHealth","title":"GetActorHealth","description":"Get the health of an actor.","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/functions/GetActorHealth.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetActorHealth","permalink":"/th/docs/scripting/functions/GetActorHealth","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetActorHealth.md","tags":[],"version":"current","frontMatter":{"title":"GetActorHealth","sidebar_label":"GetActorHealth","description":"Get the health of an actor.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"GetActorFacingAngle","permalink":"/th/docs/scripting/functions/GetActorFacingAngle"},"next":{"title":"GetActorPoolSize","permalink":"/th/docs/scripting/functions/GetActorPoolSize"}}');var o=n(74848),c=n(28453);const i={title:"GetActorHealth",sidebar_label:"GetActorHealth",description:"Get the health of an actor.",tags:[]},s=void 0,a={},l=[{value:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",level:2},{value:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",id:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",level:2},{value:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",level:2},{value:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",level:2}];function h(t){const e={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.R)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.admonition,{type:"warning",children:(0,o.jsx)(e.p,{children:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e19\u0e35\u0e49\u0e16\u0e39\u0e01\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e43\u0e19 SA-MP 0.3.7 \u0e41\u0e25\u0e30\u0e08\u0e30\u0e44\u0e21\u0e48\u0e17\u0e33\u0e07\u0e32\u0e19\u0e43\u0e19\u0e40\u0e27\u0e2d\u0e23\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e01\u0e48\u0e2d\u0e19\u0e2b\u0e19\u0e49\u0e32\u0e19\u0e35\u0e49!"})}),"\n",(0,o.jsx)(e.h2,{id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",children:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22"}),"\n",(0,o.jsx)(e.p,{children:"Get the health of an actor."}),"\n",(0,o.jsxs)(e.table,{children:[(0,o.jsx)(e.thead,{children:(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.th,{children:"Name"}),(0,o.jsx)(e.th,{children:"Description"})]})}),(0,o.jsxs)(e.tbody,{children:[(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"actorid"}),(0,o.jsx)(e.td,{children:"The ID of the actor to get the health of."})]}),(0,o.jsxs)(e.tr,{children:[(0,o.jsxs)(e.td,{children:["&Float",":health"]}),(0,o.jsx)(e.td,{children:"A float variable, passed by reference, in to which to store the actor's health."})]})]})]}),"\n",(0,o.jsx)(e.h2,{id:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",children:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19"}),"\n",(0,o.jsx)(e.p,{children:"1 - success"}),"\n",(0,o.jsx)(e.p,{children:"0 - failure (i.e. actor is not created)."}),"\n",(0,o.jsx)(e.p,{children:"NOTE: The actor's health is stored in the specified variable, not in the return value."}),"\n",(0,o.jsx)(e.h2,{id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",children:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-c",children:'new MyActor;\n\npublic OnGameModeInit()\n{\n    MyActor = CreateActor(179, 316.1, -134.0, 999.6, 90.0); // Actor as salesperson in Ammunation\n    SetActorHealth(MyActor, 100);\n\n    new Float:actorHealth;\n    GetActorHealth(MyActor, actorHealth);\n    printf("Actor ID %d has %.2f health.", MyActor, actorHealth);\n    return 1;\n}\n'})}),"\n",(0,o.jsx)(e.h2,{id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",children:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19"})]})}function d(t={}){const{wrapper:e}={...(0,c.R)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(h,{...t})}):h(t)}},28453:(t,e,n)=>{n.d(e,{R:()=>i,x:()=>s});var r=n(96540);const o={},c=r.createContext(o);function i(t){const e=r.useContext(c);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function s(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:i(t.components),r.createElement(c.Provider,{value:e},t.children)}}}]);