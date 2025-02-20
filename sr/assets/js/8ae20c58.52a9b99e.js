"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[78691],{28453:(t,e,n)=>{n.d(e,{R:()=>i,x:()=>c});var o=n(96540);const r={},s=o.createContext(r);function i(t){const e=o.useContext(s);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:i(t.components),o.createElement(s.Provider,{value:e},t.children)}},71939:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"scripting/functions/SetActorPos","title":"SetActorPos","description":"Set the position of an actor.","source":"@site/docs/scripting/functions/SetActorPos.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetActorPos","permalink":"/sr/docs/scripting/functions/SetActorPos","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/SetActorPos.md","tags":[{"inline":true,"label":"actor","permalink":"/sr/docs/tags/actor"}],"version":"current","frontMatter":{"title":"SetActorPos","sidebar_label":"SetActorPos","description":"Set the position of an actor.","tags":["actor"]},"sidebar":"docsSidebar","previous":{"title":"SetActorInvulnerable","permalink":"/sr/docs/scripting/functions/SetActorInvulnerable"},"next":{"title":"SetActorSkin","permalink":"/sr/docs/scripting/functions/SetActorSkin"}}');var r=n(74848),s=n(28453);const i={title:"SetActorPos",sidebar_label:"SetActorPos",description:"Set the position of an actor.",tags:["actor"]},c=void 0,a={},l=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(t){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...t.components},{VersionWarn:n}=e;return n||function(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n,{version:"SA-MP 0.3.7"}),"\n",(0,r.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(e.p,{children:"Set the position of an actor."}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Name"}),(0,r.jsx)(e.th,{children:"Description"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"actorid"}),(0,r.jsx)(e.td,{children:"The ID of the actor to set the position of. Returned by CreateActor."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsxs)(e.td,{children:["Float",":x"]}),(0,r.jsx)(e.td,{children:"The X coordinate to position the actor at."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsxs)(e.td,{children:["Float",":y"]}),(0,r.jsx)(e.td,{children:"The Y coordinate to position the actor at."})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsxs)(e.td,{children:["Float",":z"]}),(0,r.jsx)(e.td,{children:"The Z coordinate to position the actor at."})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"true"})," - The function was executed successfully."]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"false"})," - The function failed to execute. The actor specified does not exist."]}),"\n",(0,r.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-c",children:"new gMyActor;\n\npublic OnGameModeInit()\n{\n    gMyActor = CreateActor(24, 2050.7544, -1920.0621, 13.5485, -180.0);\n    return 1;\n}\n\n// Somewhere else\nSetActorPos(gMyActor, 2062.2332, -1908.1423, 13.5485);\n"})}),"\n",(0,r.jsx)(e.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsx)(e.admonition,{type:"tip",children:(0,r.jsxs)(e.p,{children:["When creating an actor with ",(0,r.jsx)(e.a,{href:"CreateActor",children:"CreateActor"}),", you specify it's position. You do not need to use this function unless you want to change its position later."]})}),"\n",(0,r.jsx)(e.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"GetActorPos",children:"GetActorPos"}),": Get the position of an actor."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"CreateActor",children:"CreateActor"}),": Create an actor (static NPC)."]}),"\n"]})]})}function h(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(d,{...t})}):d(t)}}}]);