"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[92232],{28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var o=n(96540);const r={},s=o.createContext(r);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:t},e.children)}},56648:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>a});const o=JSON.parse('{"id":"scripting/functions/GetActorPos","title":"GetActorPos","description":"Get the position of an actor.","source":"@site/docs/scripting/functions/GetActorPos.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetActorPos","permalink":"/ru/docs/scripting/functions/GetActorPos","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetActorPos.md","tags":[{"inline":true,"label":"actor","permalink":"/ru/docs/tags/actor"}],"version":"current","frontMatter":{"title":"GetActorPos","sidebar_label":"GetActorPos","description":"Get the position of an actor.","tags":["actor"]},"sidebar":"docsSidebar","previous":{"title":"GetActorPoolSize","permalink":"/ru/docs/scripting/functions/GetActorPoolSize"},"next":{"title":"GetActorSkin","permalink":"/ru/docs/scripting/functions/GetActorSkin"}}');var r=n(74848),s=n(28453);const i={title:"GetActorPos",sidebar_label:"GetActorPos",description:"Get the position of an actor.",tags:["actor"]},c=void 0,l={},a=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n,{version:"SA-MP 0.3.7"}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Get the position of an actor."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"actorid"}),(0,r.jsx)(t.td,{children:"The ID of the actor to get the position of. Returned by CreateActor."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["&Float",":x"]}),(0,r.jsx)(t.td,{children:"A float variable, passed by reference, in which to store the X coordinate of the actor."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["&Float",":y"]}),(0,r.jsx)(t.td,{children:"A float variable, passed by reference, in which to store the Y coordinate of the actor."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["&Float",":z"]}),(0,r.jsx)(t.td,{children:"A float variable, passed by reference, in which to store the Z coordinate of the actor."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"true"})," - The function executed successfully."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"false"})," - The function failed to execute. The actor specified does not exist."]}),"\n",(0,r.jsx)(t.p,{children:"The actor's position is stored in the specified variables."}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:"new Float:x, Float:y, Float:z;\nGetActorPos(actorid, x, y, z);\n"})}),"\n",(0,r.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"SetActorPos",children:"SetActorPos"}),": Set the position of an actor."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);