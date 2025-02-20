"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[3732],{28453:(e,t,s)=>{s.d(t,{R:()=>n,x:()=>l});var r=s(96540);const i={},a=r.createContext(i);function n(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),r.createElement(a.Provider,{value:t},e.children)}},97427:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>o,frontMatter:()=>n,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"scripting/resources/playerstates","title":"Player States","description":"A list of all the player states used by GetPlayerState function or OnPlayerStateChange callback.","source":"@site/docs/scripting/resources/playerstates.md","sourceDirName":"scripting/resources","slug":"/scripting/resources/playerstates","permalink":"/bs/docs/scripting/resources/playerstates","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/resources/playerstates.md","tags":[{"inline":true,"label":"player","permalink":"/bs/docs/tags/player"}],"version":"current","frontMatter":{"title":"Player States","sidebar_label":"Player States","description":"A list of all the player states used by GetPlayerState function or OnPlayerStateChange callback.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"Pickup Types","permalink":"/bs/docs/scripting/resources/pickuptypes"},"next":{"title":"Pvar Types","permalink":"/bs/docs/scripting/resources/pvartypes"}}');var i=s(74848),a=s(28453);const n={title:"Player States",sidebar_label:"Player States",description:"A list of all the player states used by GetPlayerState function or OnPlayerStateChange callback.",tags:["player"]},l=void 0,c={},d=[{value:"States",id:"states",level:2}];function h(e){const t={a:"a",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["This page compiles the list of all the player states used by ",(0,i.jsx)(t.a,{href:"../functions/GetPlayerState",children:"GetPlayerState"})," function or ",(0,i.jsx)(t.a,{href:"../callbacks/OnPlayerStateChange",children:"OnPlayerStateChange"})," callback. Both pages contain examples on how to use the values below."]}),"\n",(0,i.jsx)(t.p,{children:'From a server developer standpoint having both "player states" and "special actions" may seem confusing. The main difference between the two is that the former is used for synchronization purposes (and there are packets associated with some of them), and is used for more "generic" actions. The "special actions" don\'t have any packets associated with them and cover more "specific" actions, and obviously have little to do with the current state of a player.'}),"\n",(0,i.jsx)(t.h2,{id:"states",children:"States"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"ID"}),(0,i.jsx)(t.th,{children:"Macro"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"PLAYER_STATE_NONE"}),(0,i.jsx)(t.td,{children:"The default player state which is used while initializing"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"1"}),(0,i.jsx)(t.td,{children:"PLAYER_STATE_ONFOOT"}),(0,i.jsx)(t.td,{children:"The player is on foot"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"2"}),(0,i.jsx)(t.td,{children:"PLAYER_STATE_DRIVER"}),(0,i.jsx)(t.td,{children:"The player is driving a vehicle"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"3"}),(0,i.jsx)(t.td,{children:"PLAYER_STATE_PASSENGER"}),(0,i.jsx)(t.td,{children:"The player is in a vehicle as a passenger"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"4"}),(0,i.jsx)(t.td,{children:"PLAYER_STATE_EXIT_VEHICLE"}),(0,i.jsx)(t.td,{children:"The player is exiting a vehicle. It is primarily used internally"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"5"}),(0,i.jsx)(t.td,{children:"PLAYER_STATE_ENTER_VEHICLE_DRIVER"}),(0,i.jsx)(t.td,{children:"The player is entering a vehicle as the driver. It is primarily used internally"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"6"}),(0,i.jsx)(t.td,{children:"PLAYER_STATE_ENTER_VEHICLE_PASSENGER"}),(0,i.jsx)(t.td,{children:"The player is entering a vehicle as the passenger. It is primarily used internally"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"7"}),(0,i.jsx)(t.td,{children:"PLAYER_STATE_WASTED"}),(0,i.jsx)(t.td,{children:"The player is either dead or in class selection"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"8"}),(0,i.jsx)(t.td,{children:"PLAYER_STATE_SPAWNED"}),(0,i.jsx)(t.td,{children:"The player is just spawned"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"9"}),(0,i.jsx)(t.td,{children:"PLAYER_STATE_SPECTATING"}),(0,i.jsx)(t.td,{children:"The player is in spectator mode"})]})]})]})]})}function o(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}}}]);