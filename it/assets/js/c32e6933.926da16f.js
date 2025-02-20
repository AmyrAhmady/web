"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[65023],{28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>c});var n=r(96540);const i={},a=n.createContext(i);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(a.Provider,{value:t},e.children)}},54198:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"scripting/functions/StartRecordingPlayerData","title":"StartRecordingPlayerData","description":"Starts recording a player\'s movements to a file, which can then be reproduced by an NPC.","source":"@site/docs/scripting/functions/StartRecordingPlayerData.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/StartRecordingPlayerData","permalink":"/it/docs/scripting/functions/StartRecordingPlayerData","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/StartRecordingPlayerData.md","tags":[{"inline":true,"label":"player","permalink":"/it/docs/tags/player"}],"version":"current","frontMatter":{"title":"StartRecordingPlayerData","sidebar_label":"StartRecordingPlayerData","description":"Starts recording a player\'s movements to a file, which can then be reproduced by an NPC.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"StartRecordingPlayback","permalink":"/it/docs/scripting/functions/StartRecordingPlayback"},"next":{"title":"StopAudioStreamForPlayer","permalink":"/it/docs/scripting/functions/StopAudioStreamForPlayer"}}');var i=r(74848),a=r(28453);const s={title:"StartRecordingPlayerData",sidebar_label:"StartRecordingPlayerData",description:"Starts recording a player's movements to a file, which can then be reproduced by an NPC.",tags:["player"]},c=void 0,l={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Resources",id:"related-resources",level:2}];function o(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Starts recording a player's movements to a file, which can then be reproduced by an NPC."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"playerid"}),(0,i.jsx)(t.td,{children:"The ID of the player to record."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["PLAYER_RECORDING_TYPE",":recordType"]}),(0,i.jsxs)(t.td,{children:["The ",(0,i.jsx)(t.a,{href:"../resources/recordtypes",children:"type"})," of recording."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"const recordFile[]"}),(0,i.jsx)(t.td,{children:"The name of the file which will hold the recorded data. It will be saved in the scriptfiles directory, with an automatically added .rec extension, you will need to move the file to npcmodes/recordings to use for playback."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(t.p,{children:"This function does not return any specific values."}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:'if (!strcmp("/recordme", cmdtext))\n{\n    if (GetPlayerState(playerid) == PLAYER_STATE_ONFOOT)\n    {\n        StartRecordingPlayerData(playerid, PLAYER_RECORDING_TYPE_ONFOOT, "MyFile");\n    }\n    else if (GetPlayerState(playerid) == PLAYER_STATE_DRIVER)\n    {\n        StartRecordingPlayerData(playerid, PLAYER_RECORDING_TYPE_DRIVER, "MyFile");\n    }\n    SendClientMessage(playerid, 0xFFFFFFFF, "All your movements are now being recorded!");\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"StopRecordingPlayerData",children:"StopRecordingPlayerData"}),": Stops recording player data."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"../resources/recordtypes",children:"Record Types"})}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}}}]);