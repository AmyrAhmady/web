"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[9876],{28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>d});var r=n(96540);const s={},i=r.createContext(s);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}},58390:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"scripting/functions/getdate","title":"getdate","description":"Get the current server date, which will be stored in the variables &year, &month and &day.","source":"@site/docs/scripting/functions/getdate.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/getdate","permalink":"/ru/docs/scripting/functions/getdate","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/getdate.md","tags":[{"inline":true,"label":"time","permalink":"/ru/docs/tags/time"},{"inline":true,"label":"date","permalink":"/ru/docs/tags/date"}],"version":"current","frontMatter":{"title":"getdate","sidebar_label":"getdate","description":"Get the current server date, which will be stored in the variables &year, &month and &day.","tags":["time","date"]},"sidebar":"docsSidebar","previous":{"title":"getarg","permalink":"/ru/docs/scripting/functions/getarg"},"next":{"title":"getproperty","permalink":"/ru/docs/scripting/functions/getproperty"}}');var s=n(74848),i=n(28453);const a={title:"getdate",sidebar_label:"getdate",description:"Get the current server date, which will be stored in the variables &year, &month and &day.",tags:["time","date"]},d=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{LowercaseNote:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNote",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n,{}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Get the current server date, which will be stored in the variables &year, &month and &day."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"&year=0"}),(0,s.jsx)(t.td,{children:"The variable to store the year in, passed by reference."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"&month=0"}),(0,s.jsx)(t.td,{children:"The variable to store the month in, passed by reference."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"&day=0"}),(0,s.jsx)(t.td,{children:"The variable to store the day in, passed by reference."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(t.p,{children:"The number of days since the start of the year."}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-c",children:'new Year, Month, Day, Days;\nDays = getdate(Year, Month, Day);\nprintf("%02d/%02d/%d", Day, Month, Year);\nprintf("Days since the start of the year: %d", Days);\n'})}),"\n",(0,s.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"gettime",children:"gettime"}),": Get the current time of the server as a unix timestamp."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}}}]);