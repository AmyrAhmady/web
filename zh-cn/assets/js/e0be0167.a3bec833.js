"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[97399],{28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var s=t(96540);const i={},r=s.createContext(i);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}},75643:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"scripting/functions/valstr","title":"valstr","description":"Convert an integer into a string.","source":"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/scripting/functions/valstr.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/valstr","permalink":"/zh-cn/docs/scripting/functions/valstr","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/valstr.md","tags":[{"inline":true,"label":"string","permalink":"/zh-cn/docs/tags/string"}],"version":"current","frontMatter":{"title":"valstr","sidebar_label":"valstr","description":"Convert an integer into a string.","tags":["string"]},"sidebar":"docsSidebar","previous":{"title":"uuencode","permalink":"/zh-cn/docs/scripting/functions/uuencode"},"next":{"title":"Contents","permalink":"/zh-cn/docs/scripting/language/reference/Contents"}}');var i=t(74848),r=t(28453);const a={title:"valstr",sidebar_label:"valstr",description:"Convert an integer into a string.",tags:["string"]},l=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{LowercaseNote:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNote",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t,{}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Convert an integer into a string."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"dest"}),(0,i.jsx)(n.td,{children:"The destination of the string."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"value"}),(0,i.jsx)(n.td,{children:"The value to convert to a string."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["pack ",(0,i.jsx)(n.em,{children:"(optional)"})]}),(0,i.jsx)(n.td,{children:"Whether to pack the destination (off by default)."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:"This function does not return any specific values."}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'new string[4];\nnew value = 250;\nvalstr(string, value); // string is now "250"\n'})}),"\n",(0,i.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsxs)(n.admonition,{type:"warning",children:[(0,i.jsxs)(n.p,{children:["Passing a high value to this function can cause the server to freeze/crash. Fixes are available. Below is a fix that can be put straight in to your script (before valstr is used anywhere). ",(0,i.jsx)(n.a,{href:"https://github.com/pawn-lang/sa-mp-fixes",children:"fixes.inc"})," includes this fix."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'// valstr fix by Slice\nstock FIX_valstr(dest[], value, bool:pack = false)\n{\n    // format can\'t handle cellmin properly\n    static const cellmin_value[] =\xa0!"-2147483648";\n\n    if (value == cellmin)\n        pack && strpack(dest, cellmin_value, 12) || strunpack(dest, cellmin_value, 12);\n    else\n        format(dest, 12, "%d", value), pack && strpack(dest, dest, 12);\n}\n#define valstr FIX_valstr\n'})})]}),"\n",(0,i.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"strval",children:"strval"}),": Convert a string into an integer."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"strcmp",children:"strcmp"}),": Compare two strings to check if they are the same."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);