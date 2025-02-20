"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[97924],{6826:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"client/sa-mp.cfg","title":"sa-mp.cfg","description":"sa-mp client configuration file.","source":"@site/docs/client/sa-mp.cfg.md","sourceDirName":"client","slug":"/client/sa-mp.cfg","permalink":"/pl/docs/client/sa-mp.cfg","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/client/sa-mp.cfg.md","tags":[],"version":"current","frontMatter":{"title":"sa-mp.cfg","sidebar_label":"sa-mp.cfg","description":"sa-mp client configuration file."},"sidebar":"docsSidebar","previous":{"title":"Crash Addresses","permalink":"/pl/docs/client/CrashAddresses"},"next":{"title":"Advanced Structures","permalink":"/pl/docs/tutorials/AdvancedStructures"}}');var n=s(74848),r=s(28453);const o={title:"sa-mp.cfg",sidebar_label:"sa-mp.cfg",description:"sa-mp client configuration file."},d=void 0,l={},a=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2}];function c(e){const t={a:"a",code:"code",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"sa-mp.cfg"})," is a client configuration file which allows you to change settings related to SA-MP. This file is found in your 'My Documents\\GTA San Andreas User Files\\SAMP' folder, under your Windows user account. This file can be edited with a text editor such as notepad."]}),"\n",(0,n.jsx)(t.h2,{id:"options",children:"Options"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Option"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"pagesize"})}),(0,n.jsx)(t.td,{children:"This allows players to set the number of lines displayed in the chat window. It may be set between 10 and 20 lines. The default is 10 lines. This option can be set in-game using the client-side /pagesize command."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"fpslimit"})}),(0,n.jsxs)(t.td,{children:["This allows players to set a specific ",(0,n.jsx)(t.a,{href:"http://en.wikipedia.org/wiki/Frame_rate",title:"http://en.wikipedia.org/wiki/Frame_rate",children:"FPS"})," limit, when the frame limiter option is enabled in the GTA",":SA"," menu. Values accepted are 20 to 90. The default set by SA-MP is 50. This option can be changed in-game with the client-side /fpslimit command."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"disableheadmove"})}),(0,n.jsx)(t.td,{children:"This option controls whether player's heads move in the direction they are looking. 1 disables head movements, 0 enables it. This option can be toggled in-game with the client-side /headmove command."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"timestamp"})}),(0,n.jsx)(t.td,{children:"This allows players to show a local timestamp at the side of chat messages. 1 enables timestamps, and 0 disables them. This can be toggled in-game using the client-side /timestamp command."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"ime"})}),(0,n.jsx)(t.td,{children:"This controls whether the chat window input supports Input Method text editing and language switching. 1 enables IME, 0 disables it."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"multicore"})}),(0,n.jsx)(t.td,{children:"Toggle whether the SA-MP client uses multiple CPU cores when running. Default is 1 (DOES use multiple CPU cores). Set to 0 if you experience mouse problems."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"directmode"})}),(0,n.jsx)(t.td,{children:"This allows players with chat text drawing problems to use the slower direct-to-screen text rendering mode. 0 to disable, 1 to enable."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"audiomsgoff"})}),(0,n.jsx)(t.td,{children:"If this option is set to 1, no 'Audio Stream: [URL]' messages will be displayed in the chat window when the server plays an audio stream. This option can be toggle in-game using the client-side /audiomsg command."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"audioproxyoff"})}),(0,n.jsx)(t.td,{children:"If this option is set to 1, and there is a proxy server set in your Windows Internet Options, the proxy will not be used when playing audio streams in SA-MP."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"nonametagstatus"})}),(0,n.jsx)(t.td,{children:"If this option is set to 0, players will see an hourglass icon next to other players' nametags when they are paused. This is enabled (0) by default. This option can be changed in-game using the client-side /nametagstatus command."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"fontface"})}),(0,n.jsxs)(t.td,{children:["Allows you to change the font of chat, dialogs and the scoreboard. ",(0,n.jsx)(t.em,{children:'i.e. fontface="Comic Sans MS"'}),". Not officially supported, and may cause problems."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"fontweight"})}),(0,n.jsxs)(t.td,{children:["This option toggles whether your chat font is bold or not. ",(0,n.jsx)(t.strong,{children:"0 = BOLD (default) and 1 = NORMAL."})]})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>d});var i=s(96540);const n={},r=i.createContext(n);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);