"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[52356],{28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>c});var r=n(96540);const s={},i=r.createContext(s);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}},34699:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"scripting/functions/getarg","title":"getarg","description":"Get an argument that was passed to a function.","source":"@site/docs/scripting/functions/getarg.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/getarg","permalink":"/tr/docs/scripting/functions/getarg","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/getarg.md","tags":[{"inline":true,"label":"core","permalink":"/tr/docs/tags/core"},{"inline":true,"label":"arguments","permalink":"/tr/docs/tags/arguments"},{"inline":true,"label":"args","permalink":"/tr/docs/tags/args"}],"version":"current","frontMatter":{"title":"getarg","sidebar_label":"getarg","description":"Get an argument that was passed to a function.","tags":["core","arguments","args"]},"sidebar":"docsSidebar","previous":{"title":"fwrite","permalink":"/tr/docs/scripting/functions/fwrite"},"next":{"title":"getdate","permalink":"/tr/docs/scripting/functions/getdate"}}');var s=n(74848),i=n(28453);const a={title:"getarg",sidebar_label:"getarg",description:"Get an argument that was passed to a function.",tags:["core","arguments","args"]},c=void 0,o={},l=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{LowercaseNote:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNote",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n,{}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Get an argument that was passed to a function."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"arg"}),(0,s.jsx)(t.td,{children:"The argument sequence number. Use 0 for first argument."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"index"}),(0,s.jsxs)(t.td,{children:["The index (in case the argument is an array) ",(0,s.jsx)(t.em,{children:"(optional=0)"})]})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(t.p,{children:"The value of the argument."}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-c",children:'SomeFunc(...)\n{\n    printf("%i", getarg(3));\n}\n\npublic OnFilterScriptInit()\n{\n    SomeFunc(1, 3, 3, 7);\n}\n\n// Output: 7. The fourth argument (index 3) is 7.\n'})}),"\n",(0,s.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"numargs",children:"numargs"}),": Return the number of arguments."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"setarg",children:"setarg"}),": Set an argument."]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}}}]);