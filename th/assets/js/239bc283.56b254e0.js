"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[74575],{28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var r=t(96540);const i={},l=r.createContext(i);function c(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(l.Provider,{value:n},e.children)}},68239:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"scripting/functions/SetActorInvulnerable","title":"SetActorInvulnerable","description":"Toggle an actor\'s invulnerability.","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/functions/SetActorInvulnerable.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetActorInvulnerable","permalink":"/th/docs/scripting/functions/SetActorInvulnerable","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/SetActorInvulnerable.md","tags":[],"version":"current","frontMatter":{"title":"SetActorInvulnerable","sidebar_label":"SetActorInvulnerable","description":"Toggle an actor\'s invulnerability.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"SetActorHealth","permalink":"/th/docs/scripting/functions/SetActorHealth"},"next":{"title":"SetActorPos","permalink":"/th/docs/scripting/functions/SetActorPos"}}');var i=t(74848),l=t(28453);const c={title:"SetActorInvulnerable",sidebar_label:"SetActorInvulnerable",description:"Toggle an actor's invulnerability.",tags:[]},o=void 0,s={},a=[{value:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",level:2},{value:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",id:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",level:2},{value:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",level:2},{value:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",id:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",level:2},{value:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",level:2}];function d(e){const n={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e19\u0e35\u0e49\u0e16\u0e39\u0e01\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e43\u0e19 SA-MP 0.3.7 \u0e41\u0e25\u0e30\u0e08\u0e30\u0e44\u0e21\u0e48\u0e17\u0e33\u0e07\u0e32\u0e19\u0e43\u0e19\u0e40\u0e27\u0e2d\u0e23\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e01\u0e48\u0e2d\u0e19\u0e2b\u0e19\u0e49\u0e32\u0e19\u0e35\u0e49!"})}),"\n",(0,i.jsx)(n.h2,{id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",children:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22"}),"\n",(0,i.jsx)(n.p,{children:"Toggle an actor's invulnerability."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"actorid"}),(0,i.jsx)(n.td,{children:"The ID of the actor to set invulnerability."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"invulnerable"}),(0,i.jsx)(n.td,{children:"0 to make them vulnerable, 1 to make them invulnerable."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",children:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19"}),"\n",(0,i.jsx)(n.p,{children:"1 - Success"}),"\n",(0,i.jsx)(n.p,{children:"0 - Failure (i.e. Actor is not created)."}),"\n",(0,i.jsx)(n.h2,{id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",children:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"new MyActor;\n\npublic OnGameModeInit()\n{\n    MyActor = CreateActor(179, 316.1, -134.0, 999.6, 90.0); // Actor as a salesperson in Ammunation.\n    SetActorInvulnerable(MyActor, true);\n    return 1;\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",children:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01"}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"Once set invulnerable, the actor does not call OnPlayerGiveDamageActor. Players will have actor's invulnerability state changed only when it is restreamed to them."})}),"\n",(0,i.jsx)(n.h2,{id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",children:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19"})]})}function u(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);