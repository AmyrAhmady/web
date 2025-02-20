"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[52330],{27910:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"scripting/functions/PlayerPlaySound","title":"PlayerPlaySound","description":"Plays the specified sound for a player.","source":"@site/docs/scripting/functions/PlayerPlaySound.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/PlayerPlaySound","permalink":"/fil/docs/scripting/functions/PlayerPlaySound","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/PlayerPlaySound.md","tags":[{"inline":true,"label":"player","permalink":"/fil/docs/tags/player"}],"version":"current","frontMatter":{"title":"PlayerPlaySound","sidebar_label":"PlayerPlaySound","description":"Plays the specified sound for a player.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"PlayerHasClockEnabled","permalink":"/fil/docs/scripting/functions/PlayerHasClockEnabled"},"next":{"title":"PlayerSpectatePlayer","permalink":"/fil/docs/scripting/functions/PlayerSpectatePlayer"}}');var s=t(74848),l=t(28453);const o={title:"PlayerPlaySound",sidebar_label:"PlayerPlaySound",description:"Plays the specified sound for a player.",tags:["player"]},i=void 0,a={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Resources",id:"related-resources",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Plays the specified sound for a player."}),"\n",(0,s.jsxs)(n.p,{children:["For a library that lists all sounds, check out ",(0,s.jsx)(n.a,{href:"https://github.com/WoutProvost/samp-sound-array",children:"this"}),"."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"playerid"}),(0,s.jsx)(n.td,{children:"The ID of the player for whom to play the sound."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"soundid"}),(0,s.jsxs)(n.td,{children:["The ",(0,s.jsx)(n.a,{href:"../resources/sound-ids",children:"sound"})," to play."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["Float",":x"]}),(0,s.jsx)(n.td,{children:"X coordinate for the sound to play at. (0.0 for no position)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["Float",":y"]}),(0,s.jsx)(n.td,{children:"Y coordinate for the sound to play at. (0.0 for no position)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["Float",":z"]}),(0,s.jsx)(n.td,{children:"Z coordinate for the sound to play at. (0.0 for no position)"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"true"})," - The function was executed successfully."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"false"})," - The function failed to execute. This means the player is not connected."]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"// player punching sound (fits for commands such as /slap well). The sound will be quiet, as the source is actually 10 meters above the player.\nPlayerPlaySound(playerid, 1130, 0.0, 0.0, 10.0);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"Only use the coordinates if you want the sound to be played at a certain position. Set coordinates all to 0.0 to just play the sound."})}),"\n",(0,s.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"PlayCrimeReportForPlayer",children:"PlayCrimeReportForPlayer"}),": Play a crime report for a player."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"PlayAudioStreamForPlayer",children:"PlayAudioStreamForPlayer"}),": Plays a audio stream for a player."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"StopAudioStreamForPlayer",children:"StopAudioStreamForPlayer"}),": Stops the current audio stream for a player."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"../resources/sound-ids",children:"Sound IDs"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var r=t(96540);const s={},l=r.createContext(s);function o(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);