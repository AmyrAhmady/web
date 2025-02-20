"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[28160],{28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var r=n(96540);const i={},o=r.createContext(i);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:t},e.children)}},97820:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"scripting/functions/GetActorAnimation","title":"GetActorAnimation","description":"Get the animation the actor is currently performing.","source":"@site/docs/scripting/functions/GetActorAnimation.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetActorAnimation","permalink":"/pl/docs/scripting/functions/GetActorAnimation","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetActorAnimation.md","tags":[{"inline":true,"label":"actor","permalink":"/pl/docs/tags/actor"}],"version":"current","frontMatter":{"title":"GetActorAnimation","sidebar_label":"GetActorAnimation","description":"Get the animation the actor is currently performing.","tags":["actor"]},"sidebar":"docsSidebar","previous":{"title":"Get3DTextLabelVirtualWorld","permalink":"/pl/docs/scripting/functions/Get3DTextLabelVirtualWorld"},"next":{"title":"GetActorFacingAngle","permalink":"/pl/docs/scripting/functions/GetActorFacingAngle"}}');var i=n(74848),o=n(28453);const s={title:"GetActorAnimation",sidebar_label:"GetActorAnimation",description:"Get the animation the actor is currently performing.",tags:["actor"]},a=void 0,c={},l=[{value:"Description",id:"description",level:2},{value:"Return Values",id:"return-values",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Get the animation the actor is currently performing."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"actorid"}),(0,i.jsx)(t.td,{children:"The ID of the actor to get the animation of."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"animationLibrary[]"}),(0,i.jsx)(t.td,{children:"An array into which to store the animationLibrary in, passed by reference."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"librarySize"}),(0,i.jsx)(t.td,{children:"The size of the animationLibrary array."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"animationName[]"}),(0,i.jsx)(t.td,{children:"An array into which to store the animationName in, passed by reference."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"nameSize"}),(0,i.jsx)(t.td,{children:"The size of the animationName array."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["&Float",":delta"]}),(0,i.jsx)(t.td,{children:"A float variable into which to store the delta in, passed by reference."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["&bool",":loop"]}),(0,i.jsx)(t.td,{children:"A boolean variable into which to store the loop in, passed by reference."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["&bool",":lockX"]}),(0,i.jsx)(t.td,{children:"A float variable into which to store the lockX in, passed by reference."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["&bool",":lockY"]}),(0,i.jsx)(t.td,{children:"A float variable into which to store the lockY in, passed by reference."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["&bool",":freeze"]}),(0,i.jsx)(t.td,{children:"A boolean variable into which to store the freeze in, passed by reference."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"&time"}),(0,i.jsx)(t.td,{children:"A variable into which to store the time in, passed by reference."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"return-values",children:"Return Values"}),"\n",(0,i.jsxs)(t.p,{children:["Returns ",(0,i.jsx)(t.strong,{children:"true"})," if the actor is valid, otherwise returns ",(0,i.jsx)(t.strong,{children:"false"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:'new gMyActor;\n\npublic OnGameModeInit()\n{\n    gMyActor = CreateActor(179, 1153.9640, -1772.3915, 16.5920, 0.0000);\n    ApplyActorAnimation(gMyActor, "PED", "IDLE_CHAT", 4.1, true, true, true, true, 0);\n\n    new animationLibrary[32],\n        animationName[32],\n        Float:delta,\n        bool:loop,\n        bool:lockX,\n        bool:lockY,\n        bool:freeze,\n        time;\n    \n    GetActorAnimation(gMyActor, animationLibrary, sizeof animationLibrary, animationName, sizeof animationName, delta, loop, lockX, lockY, freeze, time);\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"CreateActor",children:"CreateActor"}),": Create an actor (static NPC)."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"ApplyActorAnimation",children:"ApplyActorAnimation"}),": Apply an animation to an actor."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"ClearActorAnimations",children:"ClearActorAnimations"}),": Clear any animations that are applied to an actor."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);