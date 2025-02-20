"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[51191],{28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>a});var t=r(96540);const i={},s=t.createContext(i);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(s.Provider,{value:n},e.children)}},86822:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>o,frontMatter:()=>l,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"scripting/functions/IsVehicleStreamedIn","title":"IsVehicleStreamedIn","description":"Checks if a vehicle is streamed in for a player.","source":"@site/docs/scripting/functions/IsVehicleStreamedIn.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/IsVehicleStreamedIn","permalink":"/pt-BR/docs/scripting/functions/IsVehicleStreamedIn","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/IsVehicleStreamedIn.md","tags":[{"inline":true,"label":"vehicle","permalink":"/pt-BR/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"IsVehicleStreamedIn","sidebar_label":"IsVehicleStreamedIn","description":"Checks if a vehicle is streamed in for a player.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"IsVehicleSirenEnabled","permalink":"/pt-BR/docs/scripting/functions/IsVehicleSirenEnabled"},"next":{"title":"Kick","permalink":"/pt-BR/docs/scripting/functions/Kick"}}');var i=r(74848),s=r(28453);const l={title:"IsVehicleStreamedIn",sidebar_label:"IsVehicleStreamedIn",description:"Checks if a vehicle is streamed in for a player.",tags:["vehicle"]},a=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Checks if a vehicle is streamed in for a player. Only nearby vehicles are streamed in (visible) for a player."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"vehicleid"}),(0,i.jsx)(n.td,{children:"The ID of the vehicle to check."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"playerid"}),(0,i.jsx)(n.td,{children:"The ID of the player to check."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"true"})," - Vehicle is streamed in for the player."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"false"})," - Vehicle is not streamed in for the player, or the function failed to execute (player and/or vehicle do not exist)."]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'new streamedVehicleCount;\n\nfor(new i = 1; i < MAX_VEHICLES; i++)\n{\n    if (IsVehicleStreamedIn(i, playerid))\n    {\n        streamedVehicleCount ++;\n    }\n}\n\nnew string[144];\nformat(string, sizeof(string), "You currently have %i vehicles streamed in to your game.", streamedVehicleCount);\nSendClientMessage(playerid, -1, string);\n'})}),"\n",(0,i.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"IsPlayerStreamedIn",children:"IsPlayerStreamedIn"}),": Checks if a player is streamed in for another player."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../callbacks/OnVehicleStreamIn",children:"OnVehicleStreamIn"}),": Called when a vehicle streams in for a player."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../callbacks/OnVehicleStreamOut",children:"OnVehicleStreamOut"}),": Called when a vehicle streams out for a player."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../callbacks/OnPlayerStreamIn",children:"OnPlayerStreamIn"}),": Called when a player streams in for another player."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../callbacks/OnPlayerStreamOut",children:"OnPlayerStreamOut"}),": Called when a player streams out for another player."]}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}}}]);