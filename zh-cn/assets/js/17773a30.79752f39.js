"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[66660],{28453:(e,l,i)=>{i.d(l,{R:()=>r,x:()=>s});var n=i(96540);const t={},a=n.createContext(t);function r(e){const l=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function s(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),n.createElement(a.Provider,{value:l},e.children)}},89112:(e,l,i)=>{i.r(l),i.d(l,{assets:()=>c,contentTitle:()=>s,default:()=>o,frontMatter:()=>r,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"scripting/callbacks/OnPlayerExitVehicle","title":"OnPlayerExitVehicle","description":"This callback is called when a player starts to exit a vehicle.","source":"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerExitVehicle.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerExitVehicle","permalink":"/zh-cn/docs/scripting/callbacks/OnPlayerExitVehicle","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnPlayerExitVehicle.md","tags":[{"inline":true,"label":"player","permalink":"/zh-cn/docs/tags/player"},{"inline":true,"label":"vehicle","permalink":"/zh-cn/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"OnPlayerExitVehicle","sidebar_label":"OnPlayerExitVehicle","description":"This callback is called when a player starts to exit a vehicle.","tags":["player","vehicle"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerEnterVehicle","permalink":"/zh-cn/docs/scripting/callbacks/OnPlayerEnterVehicle"},"next":{"title":"OnPlayerExitedMenu","permalink":"/zh-cn/docs/scripting/callbacks/OnPlayerExitedMenu"}}');var t=i(74848),a=i(28453);const r={title:"OnPlayerExitVehicle",sidebar_label:"OnPlayerExitVehicle",description:"This callback is called when a player starts to exit a vehicle.",tags:["player","vehicle"]},s=void 0,c={},h=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const l={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(l.p,{children:"This callback is called when a player starts to exit a vehicle."}),"\n",(0,t.jsxs)(l.table,{children:[(0,t.jsx)(l.thead,{children:(0,t.jsxs)(l.tr,{children:[(0,t.jsx)(l.th,{children:"Name"}),(0,t.jsx)(l.th,{children:"Description"})]})}),(0,t.jsxs)(l.tbody,{children:[(0,t.jsxs)(l.tr,{children:[(0,t.jsx)(l.td,{children:"playerid"}),(0,t.jsx)(l.td,{children:"The ID of the player that is exiting a vehicle."})]}),(0,t.jsxs)(l.tr,{children:[(0,t.jsx)(l.td,{children:"vehicleid"}),(0,t.jsx)(l.td,{children:"The ID of the vehicle the player is exiting."})]})]})]}),"\n",(0,t.jsx)(l.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(l.p,{children:"It is always called first in filterscripts."}),"\n",(0,t.jsx)(l.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-c",children:'public OnPlayerExitVehicle(playerid, vehicleid)\n{\n    new string[64];\n    format(string, sizeof(string), "INFO: You are exiting vehicle %i", vehicleid);\n    SendClientMessage(playerid, 0xFFFFFFFF, string);\n    return 1;\n}\n'})}),"\n",(0,t.jsx)(l.h2,{id:"notes",children:"Notes"}),"\n",(0,t.jsx)(l.admonition,{type:"warning",children:(0,t.jsxs)(l.ul,{children:["\n",(0,t.jsxs)(l.li,{children:["Not called if the player falls off a bike or is removed from a vehicle by other means such as using ",(0,t.jsx)(l.a,{href:"../functions/SetPlayerPos",children:"SetPlayerPos"}),"."]}),"\n",(0,t.jsxs)(l.li,{children:["You must use ",(0,t.jsx)(l.a,{href:"OnPlayerStateChange",children:"OnPlayerStateChange"})," and check if their old state is ",(0,t.jsx)(l.code,{children:"PLAYER_STATE_DRIVER"})," or ",(0,t.jsx)(l.code,{children:"PLAYER_STATE_PASSENGER"})," and their new state is ",(0,t.jsx)(l.code,{children:"PLAYER_STATE_ONFOOT"}),"."]}),"\n"]})}),"\n",(0,t.jsx)(l.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,t.jsx)(l.p,{children:"The following callbacks might be useful, as they're related to this callback in one way or another."}),"\n",(0,t.jsxs)(l.ul,{children:["\n",(0,t.jsxs)(l.li,{children:[(0,t.jsx)(l.a,{href:"OnPlayerEnterVehicle",children:"OnPlayerEnterVehicle"}),": This callback is called when a player starts to enter a vehicle."]}),"\n",(0,t.jsxs)(l.li,{children:[(0,t.jsx)(l.a,{href:"OnPlayerStateChange",children:"OnPlayerStateChange"}),": This callback is called when a player changes state."]}),"\n"]}),"\n",(0,t.jsx)(l.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,t.jsx)(l.p,{children:"The following functions might be useful, as they're related to this callback in one way or another."}),"\n",(0,t.jsxs)(l.ul,{children:["\n",(0,t.jsxs)(l.li,{children:[(0,t.jsx)(l.a,{href:"../functions/RemovePlayerFromVehicle",children:"RemovePlayerFromVehicle"}),": Throw a player out of their vehicle."]}),"\n",(0,t.jsxs)(l.li,{children:[(0,t.jsx)(l.a,{href:"../functions/GetPlayerVehicleSeat",children:"GetPlayerVehicleSeat"}),": Check what seat a player is in."]}),"\n"]})]})}function o(e={}){const{wrapper:l}={...(0,a.R)(),...e.components};return l?(0,t.jsx)(l,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}}}]);