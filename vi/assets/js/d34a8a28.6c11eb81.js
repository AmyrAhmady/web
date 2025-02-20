"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[13338],{28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>c});var n=r(96540);const s={},o=n.createContext(s);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(o.Provider,{value:t},e.children)}},44406:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"scripting/functions/GetActors","title":"GetActors","description":"Gets an array variable of the IDs of the created actors on the server.","source":"@site/docs/scripting/functions/GetActors.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetActors","permalink":"/vi/docs/scripting/functions/GetActors","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetActors.md","tags":[{"inline":true,"label":"actor","permalink":"/vi/docs/tags/actor"}],"version":"current","frontMatter":{"title":"GetActors","sidebar_label":"GetActors","description":"Gets an array variable of the IDs of the created actors on the server.","tags":["actor"]},"sidebar":"docsSidebar","previous":{"title":"GetActorVirtualWorld","permalink":"/vi/docs/scripting/functions/GetActorVirtualWorld"},"next":{"title":"GetAnimationName","permalink":"/vi/docs/scripting/functions/GetAnimationName"}}');var s=r(74848),o=r(28453);const i={title:"GetActors",sidebar_label:"GetActors",description:"Gets an array variable of the IDs of the created actors on the server.",tags:["actor"]},c=void 0,a={},l=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components},{VersionWarn:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r,{version:"omp v1.1.0.2612"}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Gets an array variable of the IDs of the created actors on the server."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"actors[]"}),(0,s.jsx)(t.td,{children:"An array into which to store the actor IDs, passed by reference."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"size"}),(0,s.jsx)(t.td,{children:"The size of the array."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(t.p,{children:"The function returns the number of actors stored in the array."}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-pawn",children:"new actors[MAX_ACTORS];\n\nGetActors(actors, sizeof(actors));\n// The `actors` array now contains created actor IDs. { 0, 1, 2, 3, 4, ... }\n"})}),"\n",(0,s.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"GetPlayers",children:"GetPlayers"}),": Gets an array variable of the IDs of the current players on the server."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"GetVehicles",children:"GetVehicles"}),": Gets an array variable of the IDs of the created vehicles on the server."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}}}]);