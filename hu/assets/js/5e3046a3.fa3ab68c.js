"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[58066],{24263:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>c,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"scripting/functions/GetActorSkin","title":"GetActorSkin","description":"Get the skin of the actor.","source":"@site/docs/scripting/functions/GetActorSkin.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetActorSkin","permalink":"/hu/docs/scripting/functions/GetActorSkin","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetActorSkin.md","tags":[{"inline":true,"label":"actor","permalink":"/hu/docs/tags/actor"}],"version":"current","frontMatter":{"title":"GetActorSkin","sidebar_label":"GetActorSkin","description":"Get the skin of the actor.","tags":["actor"]},"sidebar":"docsSidebar","previous":{"title":"GetActorPos","permalink":"/hu/docs/scripting/functions/GetActorPos"},"next":{"title":"GetActorSpawnInfo","permalink":"/hu/docs/scripting/functions/GetActorSpawnInfo"}}');var i=n(74848),o=n(28453);const c={title:"GetActorSkin",sidebar_label:"GetActorSkin",description:"Get the skin of the actor.",tags:["actor"]},s=void 0,a={},l=[{value:"Description",id:"description",level:2},{value:"Return Values",id:"return-values",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Get the skin of the actor."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"actorid"}),(0,i.jsx)(t.td,{children:"The ID of the actor to get."})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"return-values",children:"Return Values"}),"\n",(0,i.jsx)(t.p,{children:"Returns the actor's current skin."}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:"new gMyActor;\n\npublic OnGameModeInit()\n{\n    gMyActor = CreateActor(179, 1153.9640, -1772.3915, 16.5920, 0.0000);\n    \n    new actorSkinID = GetActorSkin(gMyActor);\n    // The value of `actorSkinID` is now 179\n    return 1;\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"CreateActor",children:"CreateActor"}),": Create an actor (static NPC)."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"SetActorSkin",children:"SetActorSkin"}),": Set the skin of the actor."]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>s});var r=n(96540);const i={},o=r.createContext(i);function c(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);