"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[60834],{28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var s=t(96540);const r={},i=s.createContext(r);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:n},e.children)}},68573:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"scripting/functions/numargs","title":"numargs","description":"Get the number of arguments passed to a function.","source":"@site/docs/scripting/functions/numargs.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/numargs","permalink":"/id/docs/scripting/functions/numargs","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/numargs.md","tags":[{"inline":true,"label":"core","permalink":"/id/docs/tags/core"},{"inline":true,"label":"arguments","permalink":"/id/docs/tags/arguments"},{"inline":true,"label":"args","permalink":"/id/docs/tags/args"}],"version":"current","frontMatter":{"title":"numargs","sidebar_label":"numargs","description":"Get the number of arguments passed to a function.","tags":["core","arguments","args"]},"sidebar":"docsSidebar","previous":{"title":"min","permalink":"/id/docs/scripting/functions/min"},"next":{"title":"numpubvars","permalink":"/id/docs/scripting/functions/numpubvars"}}');var r=t(74848),i=t(28453);const a={title:"numargs",sidebar_label:"numargs",description:"Get the number of arguments passed to a function.",tags:["core","arguments","args"]},o=void 0,c={},u=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components},{LowercaseNote:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNote",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t,{}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Get the number of arguments passed to a function."}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'SomeFunction(...)\n{\n    printf("numargs(): %i", numargs());\n}\n\npublic OnFilterScriptInit()\n{\n    SomeFunction(1, 2, 3);\n}\n\n// Output: "numargs(): 3"\n// Because 3 parameters (1, 2, 3) were passed.\n'})}),"\n",(0,r.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"getarg",children:"getarg"}),": Retrieve an argument from a variable argument list."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"setarg",children:"setarg"}),": Set an argument."]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}}}]);