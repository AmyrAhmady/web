"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[78496],{28453:(e,t,r)=>{r.d(t,{R:()=>c,x:()=>s});var n=r(96540);const a={},i=n.createContext(a);function c(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),n.createElement(i.Provider,{value:t},e.children)}},36381:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"scripting/functions/StartRecordingPlayerData","title":"StartRecordingPlayerData","description":"Starts recording a player\'s movements to a file, which can then be reproduced by an NPC.","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/functions/StartRecordingPlayerData.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/StartRecordingPlayerData","permalink":"/th/docs/scripting/functions/StartRecordingPlayerData","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/StartRecordingPlayerData.md","tags":[{"inline":true,"label":"player","permalink":"/th/docs/tags/player"}],"version":"current","frontMatter":{"title":"StartRecordingPlayerData","sidebar_label":"StartRecordingPlayerData","description":"Starts recording a player\'s movements to a file, which can then be reproduced by an NPC.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"StartRecordingPlayback","permalink":"/th/docs/scripting/functions/StartRecordingPlayback"},"next":{"title":"StopAudioStreamForPlayer","permalink":"/th/docs/scripting/functions/StopAudioStreamForPlayer"}}');var a=r(74848),i=r(28453);const c={title:"StartRecordingPlayerData",sidebar_label:"StartRecordingPlayerData",description:"Starts recording a player's movements to a file, which can then be reproduced by an NPC.",tags:["player"]},s=void 0,o={},d=[{value:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",level:2},{value:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",id:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",level:2},{value:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",level:2},{value:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",children:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22"}),"\n",(0,a.jsx)(t.p,{children:"Starts recording a player's movements to a file, which can then be reproduced by an NPC."}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"playerid"}),(0,a.jsx)(t.td,{children:"The ID of the player to record."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"recordtype"}),(0,a.jsxs)(t.td,{children:["The ",(0,a.jsx)(t.a,{href:"/th/docs/scripting/resources/recordtypes",children:"type"})," of recording."]})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"recordname[]"}),(0,a.jsx)(t.td,{children:"The name of the file which will hold the recorded data. It will be saved in the scriptfiles directory, with an automatically added .rec extension, you will need to move the file to npcmodes/recordings to use for playback."})]})]})]}),"\n",(0,a.jsx)(t.h2,{id:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",children:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19"}),"\n",(0,a.jsx)(t.p,{children:"This function does not return any specific values."}),"\n",(0,a.jsx)(t.h2,{id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",children:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-c",children:'if (!strcmp("/recordme", cmdtext))\n{\n    if (GetPlayerState(playerid) == PLAYER_STATE_ONFOOT)\n    {\n        StartRecordingPlayerData(playerid, PLAYER_RECORDING_TYPE_ONFOOT, "MyFile");\n    }\n    else if (GetPlayerState(playerid) == PLAYER_STATE_DRIVER)\n    {\n        StartRecordingPlayerData(playerid, PLAYER_RECORDING_TYPE_DRIVER, "MyFile");\n    }\n    SendClientMessage(playerid, 0xFFFFFFFF, "All your movements are now being recorded!");\n    return 1;\n}\n'})}),"\n",(0,a.jsx)(t.h2,{id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",children:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/th/docs/scripting/functions/StopRecordingPlayerData",children:"StopRecordingPlayerData"}),": Stops recording player data."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}}}]);