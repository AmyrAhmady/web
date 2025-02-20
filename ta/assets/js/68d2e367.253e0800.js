"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[52330],{27910:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"scripting/functions/PlayerPlaySound","title":"PlayerPlaySound","description":"Plays the specified sound for a player.","source":"@site/docs/scripting/functions/PlayerPlaySound.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/PlayerPlaySound","permalink":"/ta/docs/scripting/functions/PlayerPlaySound","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/PlayerPlaySound.md","tags":[{"inline":true,"label":"player","permalink":"/ta/docs/tags/player"}],"version":"current","frontMatter":{"title":"PlayerPlaySound","sidebar_label":"PlayerPlaySound","description":"Plays the specified sound for a player.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"PlayerHasClockEnabled","permalink":"/ta/docs/scripting/functions/PlayerHasClockEnabled"},"next":{"title":"PlayerSpectatePlayer","permalink":"/ta/docs/scripting/functions/PlayerSpectatePlayer"}}');var s=n(74848),l=n(28453);const o={title:"PlayerPlaySound",sidebar_label:"PlayerPlaySound",description:"Plays the specified sound for a player.",tags:["player"]},a=void 0,i={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Resources",id:"related-resources",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Plays the specified sound for a player."}),"\n",(0,s.jsxs)(t.p,{children:["For a library that lists all sounds, check out ",(0,s.jsx)(t.a,{href:"https://github.com/WoutProvost/samp-sound-array",children:"this"}),"."]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"playerid"}),(0,s.jsx)(t.td,{children:"The ID of the player for whom to play the sound."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"soundid"}),(0,s.jsxs)(t.td,{children:["The ",(0,s.jsx)(t.a,{href:"../resources/sound-ids",children:"sound"})," to play."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["Float",":x"]}),(0,s.jsx)(t.td,{children:"X coordinate for the sound to play at. (0.0 for no position)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["Float",":y"]}),(0,s.jsx)(t.td,{children:"Y coordinate for the sound to play at. (0.0 for no position)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["Float",":z"]}),(0,s.jsx)(t.td,{children:"Z coordinate for the sound to play at. (0.0 for no position)"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"true"})," - The function was executed successfully."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"false"})," - The function failed to execute. This means the player is not connected."]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-c",children:"// player punching sound (fits for commands such as /slap well). The sound will be quiet, as the source is actually 10 meters above the player.\nPlayerPlaySound(playerid, 1130, 0.0, 0.0, 10.0);\n"})}),"\n",(0,s.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsx)(t.p,{children:"Only use the coordinates if you want the sound to be played at a certain position. Set coordinates all to 0.0 to just play the sound."})}),"\n",(0,s.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"PlayCrimeReportForPlayer",children:"PlayCrimeReportForPlayer"}),": Play a crime report for a player."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"PlayAudioStreamForPlayer",children:"PlayAudioStreamForPlayer"}),": Plays a audio stream for a player."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"StopAudioStreamForPlayer",children:"StopAudioStreamForPlayer"}),": Stops the current audio stream for a player."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"../resources/sound-ids",children:"Sound IDs"})}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var r=n(96540);const s={},l=r.createContext(s);function o(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);