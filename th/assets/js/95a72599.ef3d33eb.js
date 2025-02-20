"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[45176],{28453:(n,e,t)=>{t.d(e,{R:()=>a,x:()=>c});var i=t(96540);const r={},o=i.createContext(r);function a(n){const e=i.useContext(o);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:a(n.components),i.createElement(o.Provider,{value:e},n.children)}},46656:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"scripting/functions/ClearActorAnimations","title":"ClearActorAnimations","description":"Clear any animations applied to an actor.","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/functions/ClearActorAnimations.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/ClearActorAnimations","permalink":"/th/docs/scripting/functions/ClearActorAnimations","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/ClearActorAnimations.md","tags":[],"version":"current","frontMatter":{"title":"ClearActorAnimations","sidebar_label":"ClearActorAnimations","description":"Clear any animations applied to an actor.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"ChatTextReplacementToggled","permalink":"/th/docs/scripting/functions/ChatTextReplacementToggled"},"next":{"title":"ClearAnimations","permalink":"/th/docs/scripting/functions/ClearAnimations"}}');var r=t(74848),o=t(28453);const a={title:"ClearActorAnimations",sidebar_label:"ClearActorAnimations",description:"Clear any animations applied to an actor.",tags:[]},c=void 0,s={},l=[{value:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",level:2},{value:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",id:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",level:2},{value:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",level:2},{value:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",level:2}];function d(n){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.admonition,{type:"warning",children:(0,r.jsx)(e.p,{children:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e19\u0e35\u0e49\u0e16\u0e39\u0e01\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e43\u0e19 SA-MP 0.3.7 \u0e41\u0e25\u0e30\u0e08\u0e30\u0e44\u0e21\u0e48\u0e17\u0e33\u0e07\u0e32\u0e19\u0e43\u0e19\u0e40\u0e27\u0e2d\u0e23\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e01\u0e48\u0e2d\u0e19\u0e2b\u0e19\u0e49\u0e32\u0e19\u0e35\u0e49!"})}),"\n",(0,r.jsx)(e.h2,{id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",children:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22"}),"\n",(0,r.jsx)(e.p,{children:"Clear any animations applied to an actor."}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Name"}),(0,r.jsx)(e.th,{children:"Description"})]})}),(0,r.jsx)(e.tbody,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"actorid"}),(0,r.jsx)(e.td,{children:"The ID of the actor (returned by CreateActor) to clear the animations for."})]})})]}),"\n",(0,r.jsx)(e.h2,{id:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",children:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19"}),"\n",(0,r.jsx)(e.p,{children:"1: The function executed successfully."}),"\n",(0,r.jsx)(e.p,{children:"0: The function failed to execute. The actor specified does not exist."}),"\n",(0,r.jsx)(e.h2,{id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",children:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:"new MyActor;\n\npublic OnGameModeInit()\n{\n    MyActor = CreateActor(...);\n}\n\n// Somewhere else\nApplyActorAnimation(MyActor, ...);\n\n// Somewhere else\nClearActorAnimations(MyActor);\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",children:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"/th/docs/scripting/functions/ApplyActorAnimation",children:"ApplyActorAnimation"}),": Apply an animation to an actor."]}),"\n"]})]})}function p(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}}}]);