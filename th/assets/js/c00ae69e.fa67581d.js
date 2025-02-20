"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[54936],{28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var r=n(96540);const i={},c=r.createContext(i);function o(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(c.Provider,{value:t},e.children)}},35268:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"scripting/functions/StartRecordingPlayback","title":"StartRecordingPlayback","description":"This will run a .rec file which has to be saved in the npcmodes/recordings folder. These files allow the NPC to follow certain actions. Their actions can be recorded manually. For more information, check the related functions.","source":"@site/docs/scripting/functions/StartRecordingPlayback.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/StartRecordingPlayback","permalink":"/th/docs/scripting/functions/StartRecordingPlayback","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/StartRecordingPlayback.md","tags":[],"version":"current","frontMatter":{"title":"StartRecordingPlayback","sidebar_label":"StartRecordingPlayback","description":"This will run a .rec file which has to be saved in the npcmodes/recordings folder. These files allow the NPC to follow certain actions. Their actions can be recorded manually. For more information, check the related functions.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"SpawnPlayer","permalink":"/th/docs/scripting/functions/SpawnPlayer"},"next":{"title":"StartRecordingPlayerData","permalink":"/th/docs/scripting/functions/StartRecordingPlayerData"}}');var i=n(74848),c=n(28453);const o={title:"StartRecordingPlayback",sidebar_label:"StartRecordingPlayback",description:"This will run a .rec file which has to be saved in the npcmodes/recordings folder. These files allow the NPC to follow certain actions. Their actions can be recorded manually. For more information, check the related functions.",tags:[]},a=void 0,s={},l=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"This will run a .rec file which has to be saved in the npcmodes/recordings folder. These files allow the NPC to follow certain actions. Their actions can be recorded manually. For more information, check the related functions."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"playbacktype"}),(0,i.jsxs)(t.td,{children:["The ",(0,i.jsx)(t.a,{href:"../resources/recordtypes",children:"type"})," of recording to be loaded."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"recordname[]"}),(0,i.jsx)(t.td,{children:"The filename to be loaded, without the .rec extension."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:'public OnNPCEnterVehicle(vehicleid, seatid)\n{\n    StartRecordingPlayback(PLAYER_RECORDING_TYPE_DRIVER, "at400_lv_to_sf_x1");\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"../functions/StopRecordingPlayback",children:"StopRecordingPlayback"}),": Stops reproducing a .rec file."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);