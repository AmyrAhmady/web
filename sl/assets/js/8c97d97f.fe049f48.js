"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[18774],{28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var r=n(96540);const i={},c=r.createContext(i);function s(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(c.Provider,{value:t},e.children)}},50176:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"scripting/functions/GetActorFacingAngle","title":"GetActorFacingAngle","description":"Get the facing angle of an actor.","source":"@site/docs/scripting/functions/GetActorFacingAngle.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetActorFacingAngle","permalink":"/sl/docs/scripting/functions/GetActorFacingAngle","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetActorFacingAngle.md","tags":[{"inline":true,"label":"actor","permalink":"/sl/docs/tags/actor"}],"version":"current","frontMatter":{"title":"GetActorFacingAngle","sidebar_label":"GetActorFacingAngle","description":"Get the facing angle of an actor.","tags":["actor"]},"sidebar":"docsSidebar","previous":{"title":"GetActorAnimation","permalink":"/sl/docs/scripting/functions/GetActorAnimation"},"next":{"title":"GetActorHealth","permalink":"/sl/docs/scripting/functions/GetActorHealth"}}');var i=n(74848),c=n(28453);const s={title:"GetActorFacingAngle",sidebar_label:"GetActorFacingAngle",description:"Get the facing angle of an actor.",tags:["actor"]},o=void 0,a={},l=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{version:"SA-MP 0.3.7"}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Get the facing angle of an actor."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"actorid"}),(0,i.jsxs)(t.td,{children:["The ID of the actor to get the facing angle of. Returned by ",(0,i.jsx)(t.a,{href:"CreateActor",children:"CreateActor"}),"."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["&Float",":angle"]}),(0,i.jsx)(t.td,{children:"A float variable, passed by reference, in to which the actor's facing angle will be stored."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"true"})," - The function executed successfully."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"false"})," - The function failed to execute. The actor specified does not exist."]}),"\n",(0,i.jsx)(t.p,{children:"The actor's facing angle is stored in the specified variable."}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:"new Float:facingAngle;\nGetActorFacingAngle(actorid, facingAngle);\n"})}),"\n",(0,i.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"SetActorFacingAngle",children:"SetActorFacingAngle"}),": Set the facing angle of an actor."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"GetActorPos",children:"GetActorPos"}),": Get the position of an actor."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);