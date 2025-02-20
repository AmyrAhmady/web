"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[70454],{27097:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"scripting/functions/SetActorFacingAngle","title":"SetActorFacingAngle","description":"Set the facing angle of an actor.","source":"@site/docs/scripting/functions/SetActorFacingAngle.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetActorFacingAngle","permalink":"/it/docs/scripting/functions/SetActorFacingAngle","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/SetActorFacingAngle.md","tags":[{"inline":true,"label":"actor","permalink":"/it/docs/tags/actor"}],"version":"current","frontMatter":{"title":"SetActorFacingAngle","sidebar_label":"SetActorFacingAngle","description":"Set the facing angle of an actor.","tags":["actor"]},"sidebar":"docsSidebar","previous":{"title":"Set3DTextLabelVirtualWorld","permalink":"/it/docs/scripting/functions/Set3DTextLabelVirtualWorld"},"next":{"title":"SetActorHealth","permalink":"/it/docs/scripting/functions/SetActorHealth"}}');var r=n(74848),c=n(28453);const o={title:"SetActorFacingAngle",sidebar_label:"SetActorFacingAngle",description:"Set the facing angle of an actor.",tags:["actor"]},s=void 0,a={},l=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n,{version:"SA-MP 0.3.7"}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Set the facing angle of an actor."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"actorid"}),(0,r.jsx)(t.td,{children:"The ID of the actor to set the facing angle of. Returned by CreateActor."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["Float",":angle"]}),(0,r.jsx)(t.td,{children:"The facing angle to set for the actor."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"true"})," - The function was executed successfully."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"false"})," - The function failed to execute. The actor specified does not exist."]}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:"new MyActor;\n\npublic OnGameModeInit()\n{\n    MyActor = CreateActor(38, 0.0, 0.0, 3.0, 90.0);\n    return 1;\n}\n\n// Somewhere else\nSetActorFacingAngle(MyActor, 180.0);\n"})}),"\n",(0,r.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["When creating an actor with ",(0,r.jsx)(t.a,{href:"CreateActor",children:"CreateActor"}),", you specify it's facing angle. You do not need to use this function unless you want to change its facing angle later."]})}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsx)(t.p,{children:"Players will see actor's facing angle changed only when it is restreamed to them."})}),"\n",(0,r.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"GetActorFacingAngle",children:"GetActorFacingAngle"}),": Get the facing angle of an actor."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"SetActorPos",children:"SetActorPos"}),": Set the position of an actor."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>s});var i=n(96540);const r={},c=i.createContext(r);function o(e){const t=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(c.Provider,{value:t},e.children)}}}]);