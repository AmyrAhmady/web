"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[58457],{27246:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"scripting/functions/StopRecordingPlayerData","title":"StopRecordingPlayerData","description":"Stops all the recordings that had been started with StartRecordingPlayerData for a specific player.","source":"@site/docs/scripting/functions/StopRecordingPlayerData.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/StopRecordingPlayerData","permalink":"/de/docs/scripting/functions/StopRecordingPlayerData","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/StopRecordingPlayerData.md","tags":[{"inline":true,"label":"player","permalink":"/de/docs/tags/player"}],"version":"current","frontMatter":{"title":"StopRecordingPlayerData","sidebar_label":"StopRecordingPlayerData","description":"Stops all the recordings that had been started with StartRecordingPlayerData for a specific player.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"StopRecordingPlayback","permalink":"/de/docs/scripting/functions/StopRecordingPlayback"},"next":{"title":"TextDrawAlignment","permalink":"/de/docs/scripting/functions/TextDrawAlignment"}}');var a=r(74848),i=r(28453);const s={title:"StopRecordingPlayerData",sidebar_label:"StopRecordingPlayerData",description:"Stops all the recordings that had been started with StartRecordingPlayerData for a specific player.",tags:["player"]},o=void 0,c={},l=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(t.p,{children:"Stops all the recordings that had been started with StartRecordingPlayerData for a specific player."}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"playerid"}),(0,a.jsx)(t.td,{children:"The player you want to stop the recordings of."})]})})]}),"\n",(0,a.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(t.p,{children:"This function does not return any specific values."}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp("/stoprecording", cmdtext))\n    {\n        StopRecordingPlayerData(playerid);\n        SendClientMessage(playerid, 0xFFFFFFFF, "Your recorded file has been saved to the scriptfiles folder!");\n        return 1;\n    }\n}\n'})}),"\n",(0,a.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"StartRecordingPlayerData",children:"StartRecordingPlayerData"}),": Start recording player data."]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>o});var n=r(96540);const a={},i=n.createContext(a);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);