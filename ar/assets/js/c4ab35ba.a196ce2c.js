"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[66304],{28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>c});var i=t(96540);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}},69294:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"scripting/functions/clamp","title":"clamp","description":"Force a value to be inside a range.","source":"@site/docs/scripting/functions/clamp.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/clamp","permalink":"/ar/docs/scripting/functions/clamp","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/clamp.md","tags":[{"inline":true,"label":"core","permalink":"/ar/docs/tags/core"}],"version":"current","frontMatter":{"title":"clamp","sidebar_label":"clamp","description":"Force a value to be inside a range.","tags":["core"]},"sidebar":"docsSidebar","previous":{"title":"atan","permalink":"/ar/docs/scripting/functions/atan2"},"next":{"title":"db_close","permalink":"/ar/docs/scripting/functions/db_close"}}');var s=t(74848),r=t(28453);const a={title:"clamp",sidebar_label:"clamp",description:"Force a value to be inside a range.",tags:["core"]},c=void 0,o={},l=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const n={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components},{LowercaseNote:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNote",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t,{}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Force a value to be inside a range."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"value"}),(0,s.jsx)(n.td,{children:"The value to force in a range."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"min"}),(0,s.jsxs)(n.td,{children:["The low bound of the range. ",(0,s.jsx)(n.em,{children:"(optional=cellmin)"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"max"}),(0,s.jsxs)(n.td,{children:["The high bound of the range. ",(0,s.jsx)(n.em,{children:"(optional=cellmax)"})]})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:"value, if it is in the range min\u2013max, min, if value is lower than min or max, if value is higher than max."}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'new\n    valueA = 3,\n    valueB = 7,\n    valueC = 100\n;\nprintf("The value is: %d", clamp(valueA, 5, 10)); // output: "The value is: 5" because 3 is less than 5.\nprintf("The value is: %d", clamp(valueB, 5, 10)); // output: "The value is: 7" because 7 is between 5 and 10.\nprintf("The value is: %d", clamp(valueC, 5, 10)); // output: "The value is: 10" because 100 is more than 10.\n'})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}}}]);