"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[43670],{28453:(n,t,e)=>{e.d(t,{R:()=>o,x:()=>s});var a=e(96540);const i={},r=a.createContext(i);function o(n){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function s(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:o(n.components),a.createElement(r.Provider,{value:t},n.children)}},80856:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"scripting/functions/ClearActorAnimations","title":"ClearActorAnimations","description":"I-clear ang anumang mga animation na inilapat sa isang aktor.","source":"@site/i18n/fil/docusaurus-plugin-content-docs/current/scripting/functions/ClearActorAnimations.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/ClearActorAnimations","permalink":"/fil/docs/scripting/functions/ClearActorAnimations","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/ClearActorAnimations.md","tags":[],"version":"current","frontMatter":{"title":"ClearActorAnimations","sidebar_label":"ClearActorAnimations","description":"I-clear ang anumang mga animation na inilapat sa isang aktor.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"ChatTextReplacementToggled","permalink":"/fil/docs/scripting/functions/ChatTextReplacementToggled"},"next":{"title":"ClearAnimations","permalink":"/fil/docs/scripting/functions/ClearAnimations"}}');var i=e(74848),r=e(28453);const o={title:"ClearActorAnimations",sidebar_label:"ClearActorAnimations",description:"I-clear ang anumang mga animation na inilapat sa isang aktor.",tags:[]},s=void 0,c={},l=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(n){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...n.components},{VersionWarn:e}=t;return e||function(n,t){throw new Error("Expected "+(t?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e,{version:"SA-MP 0.3.7"}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"I-clear ang anumang mga animation na inilapat sa isang aktor."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"actorid"}),(0,i.jsx)(t.td,{children:"Ang ID ng aktor (ni-return ni CreateActor) para i-clear ang mga animation."})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(t.p,{children:"1: Matagumpay na naisakatuparan ang function."}),"\n",(0,i.jsx)(t.p,{children:"0: Nabigo ang function na isagawa. Ang aktor na tinukoy ay wala."}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:"new gMyActor;\n\npublic OnGameModeInit()\n{\n    gMyActor = CreateActor(...);\n}\n\n// Sa ibang lugar\nApplyActorAnimation(gMyActor, ...);\n\n// Sa ibang lugar\nClearActorAnimations(gMyActor);\n"})}),"\n",(0,i.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"ApplyActorAnimation",children:"ApplyActorAnimation"}),": Mag-apply ng animation sa isang actor."]}),"\n"]})]})}function p(n={}){const{wrapper:t}={...(0,r.R)(),...n.components};return t?(0,i.jsx)(t,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}}}]);