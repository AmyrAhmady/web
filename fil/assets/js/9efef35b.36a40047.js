"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[34702],{17844:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"scripting/functions/GetActorSpawnInfo","title":"GetActorSpawnInfo","description":"Get the initial spawn point of the actor.","source":"@site/docs/scripting/functions/GetActorSpawnInfo.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetActorSpawnInfo","permalink":"/fil/docs/scripting/functions/GetActorSpawnInfo","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetActorSpawnInfo.md","tags":[{"inline":true,"label":"actor","permalink":"/fil/docs/tags/actor"}],"version":"current","frontMatter":{"title":"GetActorSpawnInfo","sidebar_label":"GetActorSpawnInfo","description":"Get the initial spawn point of the actor.","tags":["actor"]},"sidebar":"docsSidebar","previous":{"title":"GetActorSkin","permalink":"/fil/docs/scripting/functions/GetActorSkin"},"next":{"title":"GetActorVirtualWorld","permalink":"/fil/docs/scripting/functions/GetActorVirtualWorld"}}');var s=n(74848),i=n(28453);const o={title:"GetActorSpawnInfo",sidebar_label:"GetActorSpawnInfo",description:"Get the initial spawn point of the actor.",tags:["actor"]},c=void 0,a={},l=[{value:"Description",id:"description",level:2},{value:"Return Values",id:"return-values",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Get the initial spawn point of the actor."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"actorid"}),(0,s.jsx)(t.td,{children:"The ID of the actor to get the spawn point of"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"&skin"}),(0,s.jsx)(t.td,{children:"A variable into which to store the skin in, passed by reference."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["&Float",":spawnX"]}),(0,s.jsx)(t.td,{children:"A float variable into which to store the spawnX in, passed by reference."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["&Float",":spawnY"]}),(0,s.jsx)(t.td,{children:"A float variable into which to store the spawnY in, passed by reference."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["&Float",":spawnZ"]}),(0,s.jsx)(t.td,{children:"A float variable into which to store the spawnZ in, passed by reference."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["&Float",":spawnAngle"]}),(0,s.jsx)(t.td,{children:"A float variable into which to store the spawnAngle in, passed by reference."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"return-values",children:"Return Values"}),"\n",(0,s.jsxs)(t.p,{children:["Returns ",(0,s.jsx)(t.strong,{children:"true"})," if the actor is valid, otherwise returns ",(0,s.jsx)(t.strong,{children:"false"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-c",children:"new gMyActor;\n\npublic OnGameModeInit()\n{\n    gMyActor = CreateActor(179, 1153.9640, -1772.3915, 16.5920, 0.0000);\n\n    new skin,\n        Float:spawnX,\n        Float:spawnY,\n        Float:spawnZ,\n        Float:spawnAngle;\n    \n    GetActorSpawnInfo(gMyActor, skin, spawnX, spawnY, spawnZ, spawnAngle);\n    return 1;\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"CreateActor",children:"CreateActor"}),": Create an actor (static NPC)."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"GetActorPos",children:"GetActorPos"}),": Get the position of an actor."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"SetActorPos",children:"SetActorPos"}),": Set the position of an actor."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"GetActorSkin",children:"GetActorSkin"}),": Get the skin of the actor."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"SetActorSkin",children:"SetActorSkin"}),": Set the skin of the actor."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var r=n(96540);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);