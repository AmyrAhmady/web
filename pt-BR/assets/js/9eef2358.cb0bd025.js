"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[3954],{28453:(e,t,i)=>{i.d(t,{R:()=>l,x:()=>a});var n=i(96540);const r={},s=n.createContext(r);function l(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(s.Provider,{value:t},e.children)}},66967:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"scripting/functions/SetTimer","title":"SetTimer","description":"Sets a \'timer\' to call a function after some time.","source":"@site/docs/scripting/functions/SetTimer.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetTimer","permalink":"/pt-BR/docs/scripting/functions/SetTimer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/SetTimer.md","tags":[{"inline":true,"label":"timer","permalink":"/pt-BR/docs/tags/timer"}],"version":"current","frontMatter":{"title":"SetTimer","sidebar_label":"SetTimer","description":"Sets a \'timer\' to call a function after some time.","tags":["timer"]},"sidebar":"docsSidebar","previous":{"title":"SetTeamCount","permalink":"/pt-BR/docs/scripting/functions/SetTeamCount"},"next":{"title":"SetTimerEx","permalink":"/pt-BR/docs/scripting/functions/SetTimerEx"}}');var r=i(74848),s=i(28453);const l={title:"SetTimer",sidebar_label:"SetTimer",description:"Sets a 'timer' to call a function after some time.",tags:["timer"]},a=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Definitions",id:"definitions",level:2},{value:"Related Functions",id:"related-functions",level:2}];function o(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Sets a 'timer' to call a function after some time. Can be set to repeat."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"const functionName[]"}),(0,r.jsx)(t.td,{children:"Name of the function to call as a string. This must be a public function (forwarded). A null string here will crash the server."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"interval"}),(0,r.jsx)(t.td,{children:"Interval in milliseconds."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["bool",":repeating"]}),(0,r.jsx)(t.td,{children:"Boolean (true/false) on whether the timer should repeat or not."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(t.p,{children:"The ID of the timer that was started."}),"\n",(0,r.jsxs)(t.p,{children:["Timer IDs start at ",(0,r.jsx)(t.strong,{children:"1"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:'public OnGameModeInit()\n{\n    print("Starting timer...");\n    SetTimer("OneSecondTimer", 1000, true); // Set a repeating timer of 1000 milliseconds (1 second)\n}\n\nforward OneSecondTimer();\npublic OneSecondTimer()\n{\n    print("1 second has passed.");\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsxs)(t.admonition,{type:"warning",children:[(0,r.jsxs)(t.p,{children:["Timer intervals are not accurate (roughly 25% off) in SA-MP. There are fixes available ",(0,r.jsx)(t.a,{href:"https://sampforum.blast.hk/showthread.php?tid=289675",children:"here"})," and ",(0,r.jsx)(t.a,{href:"https://sampforum.blast.hk/showthread.php?tid=650736",children:"here"}),"."]}),(0,r.jsx)(t.p,{children:"But it is fixed in open.mp"})]}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsx)(t.p,{children:"The use of many timers will result in increased memory/cpu usage."})}),"\n",(0,r.jsxs)(t.admonition,{type:"tip",children:[(0,r.jsx)(t.p,{children:"Timer IDs are never used twice."}),(0,r.jsxs)(t.p,{children:["You can use ",(0,r.jsx)(t.a,{href:"KillTimer",children:"KillTimer"})," on a timer ID and it won't matter if it's running or not. The function that should be called, must be public, meaning it has to be forwarded."]})]}),"\n",(0,r.jsx)(t.h2,{id:"definitions",children:"Definitions"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Definition"}),(0,r.jsx)(t.th,{children:"Value"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"INVALID_TIMER"}),(0,r.jsx)(t.td,{children:"0"})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"SetTimerEx",children:"SetTimerEx"}),": Set a timer with parameters."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"KillTimer",children:"KillTimer"}),": Stop a timer."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"IsValidTimer",children:"IsValidTimer"}),": Checks if a timer is valid."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"IsRepeatingTimer",children:"IsRepeatingTimer"}),": Checks if a timer is set to repeat."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"GetTimerInterval",children:"GetTimerInterval"}),": Gets the interval of a timer."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"GetTimerRemaining",children:"GetTimerRemaining"}),": Gets the remaining interval of a timer."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"CountRunningTimers",children:"CountRunningTimers"}),": Get the running timers."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}}}]);