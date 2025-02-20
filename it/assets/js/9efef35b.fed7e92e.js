"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[34702],{17844:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"scripting/functions/GetActorSpawnInfo","title":"GetActorSpawnInfo","description":"Get the initial spawn point of the actor.","source":"@site/docs/scripting/functions/GetActorSpawnInfo.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetActorSpawnInfo","permalink":"/it/docs/scripting/functions/GetActorSpawnInfo","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetActorSpawnInfo.md","tags":[{"inline":true,"label":"actor","permalink":"/it/docs/tags/actor"}],"version":"current","frontMatter":{"title":"GetActorSpawnInfo","sidebar_label":"GetActorSpawnInfo","description":"Get the initial spawn point of the actor.","tags":["actor"]},"sidebar":"docsSidebar","previous":{"title":"GetActorSkin","permalink":"/it/docs/scripting/functions/GetActorSkin"},"next":{"title":"GetActorVirtualWorld","permalink":"/it/docs/scripting/functions/GetActorVirtualWorld"}}');var s=n(74848),i=n(28453);const o={title:"GetActorSpawnInfo",sidebar_label:"GetActorSpawnInfo",description:"Get the initial spawn point of the actor.",tags:["actor"]},c=void 0,a={},l=[{value:"Description",id:"description",level:2},{value:"Return Values",id:"return-values",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(t){const e={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...t.components},{VersionWarn:n}=e;return n||function(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,s.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(e.p,{children:"Get the initial spawn point of the actor."}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Name"}),(0,s.jsx)(e.th,{children:"Description"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"actorid"}),(0,s.jsx)(e.td,{children:"The ID of the actor to get the spawn point of"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"&skin"}),(0,s.jsx)(e.td,{children:"A variable into which to store the skin in, passed by reference."})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsxs)(e.td,{children:["&Float",":spawnX"]}),(0,s.jsx)(e.td,{children:"A float variable into which to store the spawnX in, passed by reference."})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsxs)(e.td,{children:["&Float",":spawnY"]}),(0,s.jsx)(e.td,{children:"A float variable into which to store the spawnY in, passed by reference."})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsxs)(e.td,{children:["&Float",":spawnZ"]}),(0,s.jsx)(e.td,{children:"A float variable into which to store the spawnZ in, passed by reference."})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsxs)(e.td,{children:["&Float",":spawnAngle"]}),(0,s.jsx)(e.td,{children:"A float variable into which to store the spawnAngle in, passed by reference."})]})]})]}),"\n",(0,s.jsx)(e.h2,{id:"return-values",children:"Return Values"}),"\n",(0,s.jsxs)(e.p,{children:["Returns ",(0,s.jsx)(e.strong,{children:"true"})," if the actor is valid, otherwise returns ",(0,s.jsx)(e.strong,{children:"false"}),"."]}),"\n",(0,s.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-c",children:"new gMyActor;\n\npublic OnGameModeInit()\n{\n    gMyActor = CreateActor(179, 1153.9640, -1772.3915, 16.5920, 0.0000);\n\n    new skin,\n        Float:spawnX,\n        Float:spawnY,\n        Float:spawnZ,\n        Float:spawnAngle;\n    \n    GetActorSpawnInfo(gMyActor, skin, spawnX, spawnY, spawnZ, spawnAngle);\n    return 1;\n}\n"})}),"\n",(0,s.jsx)(e.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"CreateActor",children:"CreateActor"}),": Create an actor (static NPC)."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"GetActorPos",children:"GetActorPos"}),": Get the position of an actor."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"SetActorPos",children:"SetActorPos"}),": Set the position of an actor."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"GetActorSkin",children:"GetActorSkin"}),": Get the skin of the actor."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"SetActorSkin",children:"SetActorSkin"}),": Set the skin of the actor."]}),"\n"]})]})}function h(t={}){const{wrapper:e}={...(0,i.R)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(d,{...t})}):d(t)}},28453:(t,e,n)=>{n.d(e,{R:()=>o,x:()=>c});var r=n(96540);const s={},i=r.createContext(s);function o(t){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:o(t.components),r.createElement(i.Provider,{value:e},t.children)}}}]);