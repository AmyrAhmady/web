"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[92524],{13962:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"scripting/functions/gettime","title":"gettime","description":"Get the current server time, which will be stored in the variables &hour, &minute and &second.","source":"@site/docs/scripting/functions/gettime.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/gettime","permalink":"/fa/docs/scripting/functions/gettime","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/gettime.md","tags":[{"inline":true,"label":"time","permalink":"/fa/docs/tags/time"}],"version":"current","frontMatter":{"title":"gettime","sidebar_label":"gettime","description":"Get the current server time, which will be stored in the variables &hour, &minute and &second.","tags":["time"]},"sidebar":"docsSidebar","previous":{"title":"getpubvar","permalink":"/fa/docs/scripting/functions/getpubvar"},"next":{"title":"gpci","permalink":"/fa/docs/scripting/functions/gpci"}}');var s=n(74848),r=n(28453);const o={title:"gettime",sidebar_label:"gettime",description:"Get the current server time, which will be stored in the variables &hour, &minute and &second.",tags:["time"]},c=void 0,d={},a=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{LowercaseNote:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNote",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n,{}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Get the current server time, which will be stored in the variables &hour, &minute and &second."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"&hour=0"}),(0,s.jsx)(t.td,{children:"The variable to store the hour in, passed by reference."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"&minute=0"}),(0,s.jsx)(t.td,{children:"The variable to store the minute in, passed by reference."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"&second=0"}),(0,s.jsx)(t.td,{children:"The variable to store the seconds in, passed by reference."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(t.p,{children:"The function itself returns a Unix Timestamp."}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-c",children:'new\n\thours,\n\tminutes,\n\tseconds,\n\ttimestamp;\n\ntimestamp = gettime(hours, minutes, seconds);\nprintf("%02d:%02d:%02d", hours, minutes, seconds);\nprintf("Seconds since midnight 1st January 1970: %d", timestamp);\n'})}),"\n",(0,s.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsx)(t.p,{children:"This function is useful for measuring time intervals by using its timestamp characteristics. This can be particularly useful if you want to restrict some functionality based on a time (e.g. a command that can only be executed every 30 seconds). Using this method you don't have to rely on timers."})}),"\n",(0,s.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"getdate",children:"getdate"}),": Get the current date of the server."]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var i=n(96540);const s={},r=i.createContext(s);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);