"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[77917],{28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>s});var i=n(96540);const r={},a=i.createContext(r);function l(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(a.Provider,{value:t},e.children)}},79842:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"scripting/functions/SetTimerEx","title":"SetTimerEx","description":"Sets a timer to call a function after the specified interval.","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/functions/SetTimerEx.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetTimerEx","permalink":"/th/docs/scripting/functions/SetTimerEx","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/SetTimerEx.md","tags":[],"version":"current","frontMatter":{"title":"SetTimerEx","sidebar_label":"SetTimerEx","description":"Sets a timer to call a function after the specified interval.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"SetTimer","permalink":"/th/docs/scripting/functions/SetTimer"},"next":{"title":"SetVehicleAngularVelocity","permalink":"/th/docs/scripting/functions/SetVehicleAngularVelocity"}}');var r=n(74848),a=n(28453);const l={title:"SetTimerEx",sidebar_label:"SetTimerEx",description:"Sets a timer to call a function after the specified interval.",tags:[]},s=void 0,c={},o=[{value:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",level:2},{value:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",id:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",level:2},{value:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",level:2},{value:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",id:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",level:2},{value:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",level:2}];function d(e){const t={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",children:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22"}),"\n",(0,r.jsx)(t.p,{children:"Sets a timer to call a function after the specified interval. This variant ('Ex') can pass parameters (such as a player ID) to the function."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"funcname[]"}),(0,r.jsx)(t.td,{children:"The name of a public function to call when the timer expires."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"interval"}),(0,r.jsx)(t.td,{children:"Interval in milliseconds (1 second = 1000 MS)."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"repeating"}),(0,r.jsx)(t.td,{children:"Boolean (true/false (or 1/0)) that states whether the timer should be called repeatedly (can only be stopped with KillTimer) or only once."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"format[]"}),(0,r.jsx)(t.td,{children:"Special format indicating the types of values the timer will pass."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"\\ {Float, _}:..."}),(0,r.jsx)(t.td,{children:"Indefinite number of arguments to pass (must follow format specified in previous parameter)."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",children:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19"}),"\n",(0,r.jsx)(t.p,{children:"The ID of the timer that was started. Timer IDs start at 1 and are never reused. There are no internal checks to verify that the parameters passed are valid (e.g. duration not a minus value). Y_Less' 'fixes2' plugin implements these checks and also vastly improves the accuracy of timers, and also adds support for array/string passing."}),"\n",(0,r.jsx)(t.h2,{id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",children:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:'SetTimerEx("EndAntiSpawnKill", 5000, false, "i", playerid);\n// EndAntiSpawnKill - The function that will be called\n// 5000 - 5000 MS (5 seconds). This is the interval. The timer will be called after 5 seconds.\n// false - Not repeating. Will only be called once.\n// "i" - I stands for integer (whole number). We are passing an integer (a player ID) to the function.\n// playerid - The value to pass. This is the integer specified in the previous parameter.\n// The event callback (OnPlayerSpawn) - we will start a timer here\npublic OnPlayerSpawn(playerid)\n{\n    // Anti-Spawnkill (5 seconds)\n\n    // Set their health very high so they can\'t be killed\n    SetPlayerHealth(playerid, 999999);\n\n    // Notify them\n    SendClientMessage(playerid, -1, "You are protected against spawn-killing for 5 seconds.");\n\n    // Start a 5 second timer to end the anti-spawnkill\n    SetTimerEx("EndAntiSpawnKill", 5000, false, "i", playerid);\n}\n\n// Forward (make public) the function so the server can \'see\' it\nforward EndAntiSpawnKill(playerid);\n\n// The timer function - the code to be executed when the timer is called goes here\npublic EndAntiSpawnKill(playerid)\n{\n    // 5 seconds has passed, so let\'s set their health back to 100\n    SetPlayerHealth(playerid, 100);\n\n    // Let\'s notify them also\n    SendClientMessage(playerid, -1, "You are no longer protected against spawn-killing.");\n    return 1;\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",children:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01"}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsx)(t.p,{children:"Timer ID variables should be initialized to -1 when they can to minimise the chance of accidentally killing timer ID 0 by mistake (or use timer ID 0 up at the start of OnGameModeInit). Timer intervals are not accurate (roughly 25% off). There are fixes available here and here. The function to be called must be public. That means it has to be forwarded."})}),"\n",(0,r.jsx)(t.h2,{id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",children:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"SetTimer: Set a timer."}),"\n",(0,r.jsx)(t.li,{children:"KillTimer: Stop a timer."}),"\n",(0,r.jsx)(t.li,{children:"CallLocalFunction: Call a function in the script."}),"\n",(0,r.jsx)(t.li,{children:"CallRemoteFunction: Call a function in any loaded script."}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);