"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[94282],{5787:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"scripting/functions/IsValidTimer","title":"IsValidTimer","description":"Checks if a timer is valid.","source":"@site/docs/scripting/functions/IsValidTimer.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/IsValidTimer","permalink":"/pl/docs/scripting/functions/IsValidTimer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/IsValidTimer.md","tags":[{"inline":true,"label":"timer","permalink":"/pl/docs/tags/timer"}],"version":"current","frontMatter":{"title":"IsValidTimer","sidebar_label":"IsValidTimer","description":"Checks if a timer is valid.","tags":["timer"]},"sidebar":"docsSidebar","previous":{"title":"IsValidTextDraw","permalink":"/pl/docs/scripting/functions/IsValidTextDraw"},"next":{"title":"IsValidVehicle","permalink":"/pl/docs/scripting/functions/IsValidVehicle"}}');var t=n(74848),s=n(28453);const l={title:"IsValidTimer",sidebar_label:"IsValidTimer",description:"Checks if a timer is valid.",tags:["timer"]},a=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Values",id:"return-values",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function o(e){const i={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components},{VersionWarn:n}=i;return n||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,t.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(i.p,{children:"Checks if a timer is valid."}),"\n",(0,t.jsx)(i.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Name"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsx)(i.tbody,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"timerid"}),(0,t.jsx)(i.td,{children:"The ID of the timer to check."})]})})]}),"\n",(0,t.jsx)(i.h2,{id:"return-values",children:"Return Values"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"true"}),": Timer is valid."]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"false"}),": Timer is not valid."]}),"\n",(0,t.jsx)(i.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-c",children:'new g_Timer;\n\npublic OnGameModeInit()\n{\n    g_Timer = SetTimer("TimerCallback", 60000, true);\n    return 1;\n}\n\npublic OnGameModeExit()\n{\n    if (IsValidTimer(g_Timer))\n    {\n        printf("Timer ID %d is valid.", g_Timer);\n        KillTimer(g_Timer);\n    }\n    else\n    {\n        printf("Timer ID %d is not valid.", g_Timer);\n    }\n    return 1;\n}\n'})}),"\n",(0,t.jsx)(i.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"SetTimer",children:"SetTimer"}),": Set a timer."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"SetTimerEx",children:"SetTimerEx"}),": Set a timer with parameters."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"KillTimer",children:"KillTimer"}),": Stop a timer."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"IsRepeatingTimer",children:"IsRepeatingTimer"}),": Checks if a timer is set to repeat."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"CountRunningTimers",children:"CountRunningTimers"}),": Get the running timers."]}),"\n"]})]})}function m(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>l,x:()=>a});var r=n(96540);const t={},s=r.createContext(t);function l(e){const i=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(s.Provider,{value:i},e.children)}}}]);