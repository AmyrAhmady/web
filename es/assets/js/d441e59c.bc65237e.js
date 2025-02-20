"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[40452],{28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var i=t(96540);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}},47513:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"scripting/functions/GetMenuColumnWidth","title":"GetMenuColumnWidth","description":"Get the width of the one or two columns.","source":"@site/docs/scripting/functions/GetMenuColumnWidth.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetMenuColumnWidth","permalink":"/es/docs/scripting/functions/GetMenuColumnWidth","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetMenuColumnWidth.md","tags":[{"inline":true,"label":"menu","permalink":"/es/docs/tags/menu"}],"version":"current","frontMatter":{"title":"GetMenuColumnWidth","sidebar_label":"GetMenuColumnWidth","description":"Get the width of the one or two columns.","tags":["menu"]},"sidebar":"docsSidebar","previous":{"title":"GetMenuColumnHeader","permalink":"/es/docs/scripting/functions/GetMenuColumnHeader"},"next":{"title":"GetMenuColumns","permalink":"/es/docs/scripting/functions/GetMenuColumns"}}');var o=t(74848),s=t(28453);const r={title:"GetMenuColumnWidth",sidebar_label:"GetMenuColumnWidth",description:"Get the width of the one or two columns.",tags:["menu"]},l=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function u(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components},{VersionWarn:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t,{version:"omp v1.1.0.2612"}),"\n",(0,o.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,o.jsx)(n.p,{children:"Get the width of the one or two columns."}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Name"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsxs)(n.td,{children:["Menu",":menuid"]}),(0,o.jsx)(n.td,{children:"The ID of the menu."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsxs)(n.td,{children:["&Float",":column1Width"]}),(0,o.jsx)(n.td,{children:"A float variable in which to store the column1 width in, passed by reference."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsxs)(n.td,{children:["&Float",":column2Width"]}),(0,o.jsx)(n.td,{children:"A float variable in which to store the column2 width in, passed by reference."})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,o.jsxs)(n.p,{children:["This function always returns ",(0,o.jsx)(n.strong,{children:"true"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-c",children:"new Float:column1Width, Float:column2Width;\nGetMenuColumnWidth(menuid, column1Width, column2Width);\n\n// Or you can only get column1 width\nnew Float:column1Width;\nGetMenuColumnWidth(menuid, column1Width);\n"})}),"\n",(0,o.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"GetMenuPos",children:"GetMenuPos"}),": Get the x/y screen position of the menu."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}}}]);