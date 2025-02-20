"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[13079],{28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>s});var n=r(96540);const a={},o=n.createContext(a);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(o.Provider,{value:t},e.children)}},78028:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"scripting/functions/StopAudioStreamForPlayer","title":"StopAudioStreamForPlayer","description":"Stops the current audio stream for a player.","source":"@site/docs/scripting/functions/StopAudioStreamForPlayer.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/StopAudioStreamForPlayer","permalink":"/ro/docs/scripting/functions/StopAudioStreamForPlayer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/StopAudioStreamForPlayer.md","tags":[{"inline":true,"label":"player","permalink":"/ro/docs/tags/player"}],"version":"current","frontMatter":{"title":"StopAudioStreamForPlayer","sidebar_label":"StopAudioStreamForPlayer","description":"Stops the current audio stream for a player.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"StartRecordingPlayerData","permalink":"/ro/docs/scripting/functions/StartRecordingPlayerData"},"next":{"title":"StopObject","permalink":"/ro/docs/scripting/functions/StopObject"}}');var a=r(74848),o=r(28453);const i={title:"StopAudioStreamForPlayer",sidebar_label:"StopAudioStreamForPlayer",description:"Stops the current audio stream for a player.",tags:["player"]},s=void 0,l={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(t.p,{children:"Stops the current audio stream for a player."}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"playerid"}),(0,a.jsx)(t.td,{children:"The player you want to stop the audio stream for."})]})})]}),"\n",(0,a.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(t.p,{children:"This function does not return any specific values."}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-c",children:"public OnPlayerStateChange(playerid, PLAYER_STATE:newstate, PLAYER_STATE:oldstate)\n{\n    // If the player exits a vehicle\n    if (oldstate == PLAYER_STATE_DRIVER || oldstate == PLAYER_STATE_PASSENGER)\n    {\n        StopAudioStreamForPlayer(playerid); // Stop the audio stream\n    }\n    return 1;\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"PlayAudioStreamForPlayer",children:"PlayAudioStreamForPlayer"}),": Plays a audio stream for a player."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"PlayerPlaySound",children:"PlayerPlaySound"}),": Play a sound for a player."]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}}}]);