"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[56653],{28453:(e,i,n)=>{n.d(i,{R:()=>a,x:()=>l});var t=n(96540);const r={},s=t.createContext(r);function a(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(s.Provider,{value:i},e.children)}},98750:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"scripting/functions/GetTimerRemaining","title":"GetTimerRemaining","description":"Gets the remaining interval of a timer.","source":"@site/docs/scripting/functions/GetTimerRemaining.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetTimerRemaining","permalink":"/fa/docs/scripting/functions/GetTimerRemaining","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetTimerRemaining.md","tags":[{"inline":true,"label":"timer","permalink":"/fa/docs/tags/timer"}],"version":"current","frontMatter":{"title":"GetTimerRemaining","sidebar_label":"GetTimerRemaining","description":"Gets the remaining interval of a timer.","tags":["timer"]},"sidebar":"docsSidebar","previous":{"title":"GetTimerInterval","permalink":"/fa/docs/scripting/functions/GetTimerInterval"},"next":{"title":"GetVehicleCab","permalink":"/fa/docs/scripting/functions/GetVehicleCab"}}');var r=n(74848),s=n(28453);const a={title:"GetTimerRemaining",sidebar_label:"GetTimerRemaining",description:"Gets the remaining interval of a timer.",tags:["timer"]},l=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Values",id:"return-values",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function m(e){const i={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components},{VersionWarn:n}=i;return n||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,r.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(i.p,{children:"Gets the remaining interval of a timer."}),"\n",(0,r.jsx)(i.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Name"}),(0,r.jsx)(i.th,{children:"Description"})]})}),(0,r.jsx)(i.tbody,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"timerid"}),(0,r.jsx)(i.td,{children:"The ID of the timer to get the remaining interval of."})]})})]}),"\n",(0,r.jsx)(i.h2,{id:"return-values",children:"Return Values"}),"\n",(0,r.jsx)(i.p,{children:"Returns the remaining interval of the timer in milliseconds."}),"\n",(0,r.jsx)(i.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-c",children:'new g_Timer;\n\npublic OnGameModeInit()\n{\n    g_Timer = SetTimer("TimerCallback", 60000, true);\n\n    new remainingInterval = GetTimerRemaining(g_Timer);\n    printf("Timer ID %d remaining interval: %d ms", g_Timer, remainingInterval);\n    return 1;\n}\n'})}),"\n",(0,r.jsx)(i.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"SetTimer",children:"SetTimer"}),": Set a timer."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"SetTimerEx",children:"SetTimerEx"}),": Set a timer with parameters."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"KillTimer",children:"KillTimer"}),": Stop a timer."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"IsValidTimer",children:"IsValidTimer"}),": Checks if a timer is valid."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"IsRepeatingTimer",children:"IsRepeatingTimer"}),": Checks if a timer is set to repeat."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"GetTimerInterval",children:"GetTimerInterval"}),": Gets the interval of a timer."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.a,{href:"CountRunningTimers",children:"CountRunningTimers"}),": Get the running timers."]}),"\n"]})]})}function d(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}}}]);