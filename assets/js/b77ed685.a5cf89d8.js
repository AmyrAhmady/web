"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[61601],{9980:(e,l,r)=>{r.r(l),r.d(l,{assets:()=>a,contentTitle:()=>t,default:()=>x,frontMatter:()=>d,metadata:()=>s,toc:()=>i});const s=JSON.parse('{"id":"scripting/resources/callbacks-sequence","title":"Callbacks Sequence","description":"A list of callbacks available in SA-MP/open.mp and its call sequence","source":"@site/docs/scripting/resources/callbacks-sequence.md","sourceDirName":"scripting/resources","slug":"/scripting/resources/callbacks-sequence","permalink":"/docs/scripting/resources/callbacks-sequence","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/resources/callbacks-sequence.md","tags":[],"version":"current","frontMatter":{"title":"Callbacks Sequence","sidebar_label":"Callbacks Sequence","description":"A list of callbacks available in SA-MP/open.mp and its call sequence","tags":[]},"sidebar":"docsSidebar","previous":{"title":"Bullet Hit Types","permalink":"/docs/scripting/resources/bullethittypes"},"next":{"title":"Camera Cut Styles","permalink":"/docs/scripting/resources/cameracutstyles"}}');var c=r(74848),n=r(28453);const d={title:"Callbacks Sequence",sidebar_label:"Callbacks Sequence",description:"A list of callbacks available in SA-MP/open.mp and its call sequence",tags:[]},t=void 0,a={},i=[];function h(e){const l={a:"a",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(l.p,{children:"Below is a list of callbacks available in SA-MP/open.mp and its call sequence. Tickbox represent called first."}),"\n",(0,c.jsxs)(l.table,{children:[(0,c.jsx)(l.thead,{children:(0,c.jsxs)(l.tr,{children:[(0,c.jsx)(l.th,{children:"Callback"}),(0,c.jsx)(l.th,{children:"FilterScript"}),(0,c.jsx)(l.th,{children:"GameMode"})]})}),(0,c.jsxs)(l.tbody,{children:[(0,c.jsxs)(l.tr,{children:[(0,c.jsx)(l.td,{children:(0,c.jsx)(l.a,{href:"../callbacks/OnActorStreamIn",children:"OnActorStreamIn"})}),(0,c.jsx)(l.td,{children:"\u2705"}),(0,c.jsx)(l.td,{})]}),(0,c.jsxs)(l.tr,{children:[(0,c.jsx)(l.td,{children:(0,c.jsx)(l.a,{href:"../callbacks/OnActorStreamOut",children:"OnActorStreamOut"})}),(0,c.jsx)(l.td,{children:"\u2705"}),(0,c.jsx)(l.td,{})]}),(0,c.jsxs)(l.tr,{children:[(0,c.jsx)(l.td,{children:(0,c.jsx)(l.a,{href:"../callbacks/OnClientCheckResponse",children:"OnClientCheckResponse"})}),(0,c.jsx)(l.td,{children:"\u2705"}),(0,c.jsx)(l.td,{})]}),(0,c.jsxs)(l.tr,{children:[(0,c.jsx)(l.td,{children:(0,c.jsx)(l.a,{href:"../callbacks/OnClientMessage",children:"OnClientMessage"})}),(0,c.jsx)(l.td,{children:"\u2705"}),(0,c.jsx)(l.td,{})]}),(0,c.jsxs)(l.tr,{children:[(0,c.jsx)(l.td,{children:(0,c.jsx)(l.a,{href:"../callbacks/OnDialogResponse",children:"OnDialogResponse"})}),(0,c.jsx)(l.td,{children:"\u2705"}),(0,c.jsx)(l.td,{})]}),(0,c.jsxs)(l.tr,{children:[(0,c.jsx)(l.td,{children:(0,c.jsx)(l.a,{href:"../callbacks/OnEnterExitModShop",children:"OnEnterExitModShop"})}),(0,c.jsx)(l.td,{children:"\u2705"}),(0,c.jsx)(l.td,{})]}),(0,c.jsxs)(l.tr,{children:[(0,c.jsx)(l.td,{children:(0,c.jsx)(l.a,{href:"../callbacks/OnFilterScriptExit",children:"OnFilterScriptExit"})}),(0,c.jsx)(l.td,{children:"\u2705"}),(0,c.jsx)(l.td,{})]}),(0,c.jsxs)(l.tr,{children:[(0,c.jsx)(l.td,{children:(0,c.jsx)(l.a,{href:"../callbacks/OnFilterScriptInit",children:"OnFilterScriptInit"})}),(0,c.jsx)(l.td,{children:"\u2705"}),(0,c.jsx)(l.td,{})]}),(0,c.jsxs)(l.tr,{children:[(0,c.jsx)(l.td,{children:(0,c.jsx)(l.a,{href:"../callbacks/OnGameModeExit",children:"OnGameModeExit"})}),(0,c.jsx)(l.td,{children:"\u2705"}),(0,c.jsx)(l.td,{})]}),(0,c.jsxs)(l.tr,{children:[(0,c.jsx)(l.td,{children:(0,c.jsx)(l.a,{href:"../callbacks/OnGameModeInit",children:"OnGameModeInit"})}),(0,c.jsx)(l.td,{children:"\u2705"}),(0,c.jsx)(l.td,{})]}),(0,c.jsxs)(l.tr,{children:[(0,c.jsx)(l.td,{children:(0,c.jsx)(l.a,{href:"../callbacks/OnIncomingConnection",children:"OnIncomingConnection"})}),(0,c.jsx)(l.td,{children:"\u2705"}),(0,c.jsx)(l.td,{})]}),(0,c.jsxs)(l.tr,{children:[(0,c.jsx)(l.td,{children:(0,c.jsx)(l.a,{href:"../callbacks/OnObjectMoved",children:"OnObjectMoved"})}),(0,c.jsx)(l.td,{children:"\u2705"}),(0,c.jsx)(l.td,{})]}),(0,c.jsxs)(l.tr,{children:[(0,c.jsx)(l.td,{children:(0,c.jsx)(l.a,{href:"../callbacks/OnPlayerClickMap",children:"OnPlayerClickMap"})}),(0,c.jsx)(l.td,{}),(0,c.jsx)(l.td,{children:"\u2705"})]}),(0,c.jsxs)(l.tr,{children:[(0,c.jsx)(l.td,{children:(0,c.jsx)(l.a,{href:"../callbacks/OnPlayerClickPlayer",children:"OnPlayerClickPlayer"})}),(0,c.jsx)(l.td,{children:"\u2705"}),(0,c.jsx)(l.td,{})]}),(0,c.jsxs)(l.tr,{children:[(0,c.jsx)(l.td,{children:(0,c.jsx)(l.a,{href:"../callbacks/OnPlayerClickPlayerTextDraw",children:"OnPlayerClickPlayerTextDraw"})}),(0,c.jsx)(l.td,{children:"\u2705"}),(0,c.jsx)(l.td,{})]}),(0,c.jsxs)(l.tr,{children:[(0,c.jsx)(l.td,{children:(0,c.jsx)(l.a,{href:"../callbacks/OnPlayerClickTextDraw",children:"OnPlayerClickTextDraw"})}),(0,c.jsx)(l.td,{children:"\u2705"}),(0,c.jsx)(l.td,{})]}),(0,c.jsxs)(l.tr,{children:[(0,c.jsx)(l.td,{children:(0,c.jsx)(l.a,{href:"../callbacks/OnPlayerCommandText",children:"OnPlayerCommandText"})}),(0,c.jsx)(l.td,{children:"\u2705"}),(0,c.jsx)(l.td,{})]}),(0,c.jsxs)(l.tr,{children:[(0,c.jsx)(l.td,{children:(0,c.jsx)(l.a,{href:"../callbacks/OnPlayerConnect",children:"OnPlayerConnect"})}),(0,c.jsx)(l.td,{children:"\u2705"}),(0,c.jsx)(l.td,{})]}),(0,c.jsxs)(l.tr,{children:[(0,c.jsx)(l.td,{children:(0,c.jsx)(l.a,{href:"../callbacks/OnPlayerDeath",children:"OnPlayerDeath"})}),(0,c.jsx)(l.td,{children:"\u2705"}),(0,c.jsx)(l.td,{})]}),(0,c.jsxs)(l.tr,{children:[(0,c.jsx)(l.td,{children:(0,c.jsx)(l.a,{href:"../callbacks/OnPlayerDisconnect",children:"OnPlayerDisconnect"})}),(0,c.jsx)(l.td,{children:"\u2705"}),(0,c.jsx)(l.td,{})]}),(0,c.jsxs)(l.tr,{children:[(0,c.jsx)(l.td,{children:(0,c.jsx)(l.a,{href:"../callbacks/OnPlayerEditAttachedObject",children:"OnPlayerEditAttachedObject"})}),(0,c.jsx)(l.td,{children:"\u2705"}),(0,c.jsx)(l.td,{})]}),(0,c.jsxs)(l.tr,{children:[(0,c.jsx)(l.td,{children:(0,c.jsx)(l.a,{href:"../callbacks/OnPlayerEditObject",children:"OnPlayerEditObject"})}),(0,c.jsx)(l.td,{children:"\u2705"}),(0,c.jsx)(l.td,{})]}),(0,c.jsxs)(l.tr,{children:[(0,c.jsx)(l.td,{children:(0,c.jsx)(l.a,{href:"../callbacks/OnPlayerEnterCheckpoint",children:"OnPlayerEnterCheckpoint"})}),(0,c.jsx)(l.td,{children:"\u2705"}),(0,c.jsx)(l.td,{})]}),(0,c.jsxs)(l.tr,{children:[(0,c.jsx)(l.td,{children:(0,c.jsx)(l.a,{href:"../callbacks/OnPlayerEnterRaceCheckpoint",children:"OnPlayerEnterRaceCheckpoint"})}),(0,c.jsx)(l.td,{children:"\u2705"}),(0,c.jsx)(l.td,{})]}),(0,c.jsxs)(l.tr,{children:[(0,c.jsx)(l.td,{children:(0,c.jsx)(l.a,{href:"../callbacks/OnPlayerEnterVehicle",children:"OnPlayerEnterVehicle"})}),(0,c.jsx)(l.td,{children:"\u2705"}),(0,c.jsx)(l.td,{})]}),(0,c.jsxs)(l.tr,{children:[(0,c.jsx)(l.td,{children:(0,c.jsx)(l.a,{href:"../callbacks/OnPlayerExitedMenu",children:"OnPlayerExitedMenu"})}),(0,c.jsx)(l.td,{}),(0,c.jsx)(l.td,{children:"\u2705"})]}),(0,c.jsxs)(l.tr,{children:[(0,c.jsx)(l.td,{children:(0,c.jsx)(l.a,{href:"../callbacks/OnPlayerExitVehicle",children:"OnPlayerExitVehicle"})}),(0,c.jsx)(l.td,{children:"\u2705"}),(0,c.jsx)(l.td,{})]}),(0,c.jsxs)(l.tr,{children:[(0,c.jsx)(l.td,{children:(0,c.jsx)(l.a,{href:"../callbacks/OnPlayerFinishedDownloading",children:"OnPlayerFinishedDownloading"})}),(0,c.jsx)(l.td,{children:"\u2705"}),(0,c.jsx)(l.td,{})]}),(0,c.jsxs)(l.tr,{children:[(0,c.jsx)(l.td,{children:(0,c.jsx)(l.a,{href:"../callbacks/OnPlayerGiveDamage",children:"OnPlayerGiveDamage"})}),(0,c.jsx)(l.td,{children:"\u2705"}),(0,c.jsx)(l.td,{})]}),(0,c.jsxs)(l.tr,{children:[(0,c.jsx)(l.td,{children:(0,c.jsx)(l.a,{href:"../callbacks/OnPlayerGiveDamageActor",children:"OnPlayerGiveDamageActor"})}),(0,c.jsx)(l.td,{children:"\u2705"}),(0,c.jsx)(l.td,{})]}),(0,c.jsxs)(l.tr,{children:[(0,c.jsx)(l.td,{children:(0,c.jsx)(l.a,{href:"../callbacks/OnPlayerInteriorChange",children:"OnPlayerInteriorChange"})}),(0,c.jsx)(l.td,{}),(0,c.jsx)(l.td,{children:"\u2705"})]}),(0,c.jsxs)(l.tr,{children:[(0,c.jsx)(l.td,{children:(0,c.jsx)(l.a,{href:"../callbacks/OnPlayerKeyStateChange",children:"OnPlayerKeyStateChange"})}),(0,c.jsx)(l.td,{}),(0,c.jsx)(l.td,{children:"\u2705"})]}),(0,c.jsxs)(l.tr,{children:[(0,c.jsx)(l.td,{children:(0,c.jsx)(l.a,{href:"../callbacks/OnPlayerLeaveCheckpoint",children:"OnPlayerLeaveCheckpoint"})}),(0,c.jsx)(l.td,{children:"\u2705"}),(0,c.jsx)(l.td,{})]}),(0,c.jsxs)(l.tr,{children:[(0,c.jsx)(l.td,{children:(0,c.jsx)(l.a,{href:"../callbacks/OnPlayerLeaveRaceCheckpoint",children:"OnPlayerLeaveRaceCheckpoint"})}),(0,c.jsx)(l.td,{children:"\u2705"}),(0,c.jsx)(l.td,{})]}),(0,c.jsxs)(l.tr,{children:[(0,c.jsx)(l.td,{children:(0,c.jsx)(l.a,{href:"../callbacks/OnPlayerObjectMoved",children:"OnPlayerObjectMoved"})}),(0,c.jsx)(l.td,{children:"\u2705"}),(0,c.jsx)(l.td,{})]}),(0,c.jsxs)(l.tr,{children:[(0,c.jsx)(l.td,{children:(0,c.jsx)(l.a,{href:"../callbacks/OnPlayerPickUpPickup",children:"OnPlayerPickUpPickup"})}),(0,c.jsx)(l.td,{}),(0,c.jsx)(l.td,{children:"\u2705"})]}),(0,c.jsxs)(l.tr,{children:[(0,c.jsx)(l.td,{children:(0,c.jsx)(l.a,{href:"../callbacks/OnPickupStreamIn",children:"OnPickupStreamIn"})}),(0,c.jsx)(l.td,{children:"\u2705"}),(0,c.jsx)(l.td,{})]}),(0,c.jsxs)(l.tr,{children:[(0,c.jsx)(l.td,{children:(0,c.jsx)(l.a,{href:"../callbacks/OnPickupStreamOut",children:"OnPickupStreamOut"})}),(0,c.jsx)(l.td,{children:"\u2705"}),(0,c.jsx)(l.td,{})]}),(0,c.jsxs)(l.tr,{children:[(0,c.jsx)(l.td,{children:(0,c.jsx)(l.a,{href:"../callbacks/OnPlayerPickUpPlayerPickup",children:"OnPlayerPickUpPlayerPickup"})}),(0,c.jsx)(l.td,{}),(0,c.jsx)(l.td,{children:"\u2705"})]}),(0,c.jsxs)(l.tr,{children:[(0,c.jsx)(l.td,{children:(0,c.jsx)(l.a,{href:"../callbacks/OnPlayerPickupStreamIn",children:"OnPlayerPickupStreamIn"})}),(0,c.jsx)(l.td,{children:"\u2705"}),(0,c.jsx)(l.td,{})]}),(0,c.jsxs)(l.tr,{children:[(0,c.jsx)(l.td,{children:(0,c.jsx)(l.a,{href:"../callbacks/OnPlayerPickupStreamOut",children:"OnPlayerPickupStreamOut"})}),(0,c.jsx)(l.td,{children:"\u2705"}),(0,c.jsx)(l.td,{})]}),(0,c.jsxs)(l.tr,{children:[(0,c.jsx)(l.td,{children:(0,c.jsx)(l.a,{href:"../callbacks/OnPlayerRequestClass",children:"OnPlayerRequestClass"})}),(0,c.jsx)(l.td,{children:"\u2705"}),(0,c.jsx)(l.td,{})]}),(0,c.jsxs)(l.tr,{children:[(0,c.jsx)(l.td,{children:(0,c.jsx)(l.a,{href:"../callbacks/OnPlayerRequestDownload",children:"OnPlayerRequestDownload"})}),(0,c.jsx)(l.td,{children:"\u2705"}),(0,c.jsx)(l.td,{})]}),(0,c.jsxs)(l.tr,{children:[(0,c.jsx)(l.td,{children:(0,c.jsx)(l.a,{href:"../callbacks/OnPlayerRequestSpawn",children:"OnPlayerRequestSpawn"})}),(0,c.jsx)(l.td,{children:"\u2705"}),(0,c.jsx)(l.td,{})]}),(0,c.jsxs)(l.tr,{children:[(0,c.jsx)(l.td,{children:(0,c.jsx)(l.a,{href:"../callbacks/OnPlayerSelectedMenuRow",children:"OnPlayerSelectedMenuRow"})}),(0,c.jsx)(l.td,{}),(0,c.jsx)(l.td,{children:"\u2705"})]}),(0,c.jsxs)(l.tr,{children:[(0,c.jsx)(l.td,{children:(0,c.jsx)(l.a,{href:"../callbacks/OnPlayerSelectObject",children:"OnPlayerSelectObject"})}),(0,c.jsx)(l.td,{children:"\u2705"}),(0,c.jsx)(l.td,{})]}),(0,c.jsxs)(l.tr,{children:[(0,c.jsx)(l.td,{children:(0,c.jsx)(l.a,{href:"../callbacks/OnPlayerSpawn",children:"OnPlayerSpawn"})}),(0,c.jsx)(l.td,{children:"\u2705"}),(0,c.jsx)(l.td,{})]}),(0,c.jsxs)(l.tr,{children:[(0,c.jsx)(l.td,{children:(0,c.jsx)(l.a,{href:"../callbacks/OnPlayerStateChange",children:"OnPlayerStateChange"})}),(0,c.jsx)(l.td,{children:"\u2705"}),(0,c.jsx)(l.td,{})]}),(0,c.jsxs)(l.tr,{children:[(0,c.jsx)(l.td,{children:(0,c.jsx)(l.a,{href:"../callbacks/OnPlayerStreamIn",children:"OnPlayerStreamIn"})}),(0,c.jsx)(l.td,{children:"\u2705"}),(0,c.jsx)(l.td,{})]}),(0,c.jsxs)(l.tr,{children:[(0,c.jsx)(l.td,{children:(0,c.jsx)(l.a,{href:"../callbacks/OnPlayerStreamOut",children:"OnPlayerStreamOut"})}),(0,c.jsx)(l.td,{children:"\u2705"}),(0,c.jsx)(l.td,{})]}),(0,c.jsxs)(l.tr,{children:[(0,c.jsx)(l.td,{children:(0,c.jsx)(l.a,{href:"../callbacks/OnPlayerTakeDamage",children:"OnPlayerTakeDamage"})}),(0,c.jsx)(l.td,{children:"\u2705"}),(0,c.jsx)(l.td,{})]}),(0,c.jsxs)(l.tr,{children:[(0,c.jsx)(l.td,{children:(0,c.jsx)(l.a,{href:"../callbacks/OnPlayerText",children:"OnPlayerText"})}),(0,c.jsx)(l.td,{children:"\u2705"}),(0,c.jsx)(l.td,{})]}),(0,c.jsxs)(l.tr,{children:[(0,c.jsx)(l.td,{children:(0,c.jsx)(l.a,{href:"../callbacks/OnPlayerUpdate",children:"OnPlayerUpdate"})}),(0,c.jsx)(l.td,{children:"\u2705"}),(0,c.jsx)(l.td,{})]}),(0,c.jsxs)(l.tr,{children:[(0,c.jsx)(l.td,{children:(0,c.jsx)(l.a,{href:"../callbacks/OnPlayerWeaponShot",children:"OnPlayerWeaponShot"})}),(0,c.jsx)(l.td,{children:"\u2705"}),(0,c.jsx)(l.td,{})]}),(0,c.jsxs)(l.tr,{children:[(0,c.jsx)(l.td,{children:(0,c.jsx)(l.a,{href:"../callbacks/OnRconCommand",children:"OnRconCommand"})}),(0,c.jsx)(l.td,{children:"\u2705"}),(0,c.jsx)(l.td,{})]}),(0,c.jsxs)(l.tr,{children:[(0,c.jsx)(l.td,{children:(0,c.jsx)(l.a,{href:"../callbacks/OnRconLoginAttempt",children:"OnRconLoginAttempt"})}),(0,c.jsx)(l.td,{children:"\u2705"}),(0,c.jsx)(l.td,{})]}),(0,c.jsxs)(l.tr,{children:[(0,c.jsx)(l.td,{children:(0,c.jsx)(l.a,{href:"../callbacks/OnRecordingPlaybackEnd",children:"OnRecordingPlaybackEnd"})}),(0,c.jsx)(l.td,{children:"\u2705"}),(0,c.jsx)(l.td,{})]}),(0,c.jsxs)(l.tr,{children:[(0,c.jsx)(l.td,{children:(0,c.jsx)(l.a,{href:"../callbacks/OnTrailerUpdate",children:"OnTrailerUpdate"})}),(0,c.jsx)(l.td,{children:"\u2705"}),(0,c.jsx)(l.td,{})]}),(0,c.jsxs)(l.tr,{children:[(0,c.jsx)(l.td,{children:(0,c.jsx)(l.a,{href:"../callbacks/OnUnoccupiedVehicleUpdate",children:"OnUnoccupiedVehicleUpdate"})}),(0,c.jsx)(l.td,{children:"\u2705"}),(0,c.jsx)(l.td,{})]}),(0,c.jsxs)(l.tr,{children:[(0,c.jsx)(l.td,{children:(0,c.jsx)(l.a,{href:"../callbacks/OnVehicleDamageStatusUpdate",children:"OnVehicleDamageStatusUpdate"})}),(0,c.jsx)(l.td,{children:"\u2705"}),(0,c.jsx)(l.td,{})]}),(0,c.jsxs)(l.tr,{children:[(0,c.jsx)(l.td,{children:(0,c.jsx)(l.a,{href:"../callbacks/OnVehicleDeath",children:"OnVehicleDeath"})}),(0,c.jsx)(l.td,{children:"\u2705"}),(0,c.jsx)(l.td,{})]}),(0,c.jsxs)(l.tr,{children:[(0,c.jsx)(l.td,{children:(0,c.jsx)(l.a,{href:"../callbacks/OnVehicleMod",children:"OnVehicleMod"})}),(0,c.jsx)(l.td,{}),(0,c.jsx)(l.td,{children:"\u2705"})]}),(0,c.jsxs)(l.tr,{children:[(0,c.jsx)(l.td,{children:(0,c.jsx)(l.a,{href:"../callbacks/OnVehiclePaintjob",children:"OnVehiclePaintjob"})}),(0,c.jsx)(l.td,{}),(0,c.jsx)(l.td,{children:"\u2705"})]}),(0,c.jsxs)(l.tr,{children:[(0,c.jsx)(l.td,{children:(0,c.jsx)(l.a,{href:"../callbacks/OnVehicleRespray",children:"OnVehicleRespray"})}),(0,c.jsx)(l.td,{}),(0,c.jsx)(l.td,{children:"\u2705"})]}),(0,c.jsxs)(l.tr,{children:[(0,c.jsx)(l.td,{children:(0,c.jsx)(l.a,{href:"../callbacks/OnVehicleSirenStateChange",children:"OnVehicleSirenStateChange"})}),(0,c.jsx)(l.td,{children:"\u2705"}),(0,c.jsx)(l.td,{})]}),(0,c.jsxs)(l.tr,{children:[(0,c.jsx)(l.td,{children:(0,c.jsx)(l.a,{href:"../callbacks/OnVehicleSpawn",children:"OnVehicleSpawn"})}),(0,c.jsx)(l.td,{children:"\u2705"}),(0,c.jsx)(l.td,{})]}),(0,c.jsxs)(l.tr,{children:[(0,c.jsx)(l.td,{children:(0,c.jsx)(l.a,{href:"../callbacks/OnVehicleStreamIn",children:"OnVehicleStreamIn"})}),(0,c.jsx)(l.td,{children:"\u2705"}),(0,c.jsx)(l.td,{})]}),(0,c.jsxs)(l.tr,{children:[(0,c.jsx)(l.td,{children:(0,c.jsx)(l.a,{href:"../callbacks/OnVehicleStreamOut",children:"OnVehicleStreamOut"})}),(0,c.jsx)(l.td,{children:"\u2705"}),(0,c.jsx)(l.td,{})]})]})]})]})}function x(e={}){const{wrapper:l}={...(0,n.R)(),...e.components};return l?(0,c.jsx)(l,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},28453:(e,l,r)=>{r.d(l,{R:()=>d,x:()=>t});var s=r(96540);const c={},n=s.createContext(c);function d(e){const l=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function t(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),s.createElement(n.Provider,{value:l},e.children)}}}]);