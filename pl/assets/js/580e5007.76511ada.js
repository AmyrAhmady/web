"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[92713],{28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>a});var l=s(96540);const i={},t=l.createContext(i);function r(e){const n=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),l.createElement(t.Provider,{value:n},e.children)}},36977:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});const l=JSON.parse('{"id":"scripting/functions/IsPlayerInModShop","title":"IsPlayerInModShop","description":"Check if the player is in the mod shop.","source":"@site/docs/scripting/functions/IsPlayerInModShop.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/IsPlayerInModShop","permalink":"/pl/docs/scripting/functions/IsPlayerInModShop","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/IsPlayerInModShop.md","tags":[{"inline":true,"label":"player","permalink":"/pl/docs/tags/player"}],"version":"current","frontMatter":{"title":"IsPlayerInModShop","sidebar_label":"IsPlayerInModShop","description":"Check if the player is in the mod shop.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"IsPlayerInGangZone","permalink":"/pl/docs/scripting/functions/IsPlayerInGangZone"},"next":{"title":"IsPlayerInPlayerGangZone","permalink":"/pl/docs/scripting/functions/IsPlayerInPlayerGangZone"}}');var i=s(74848),t=s(28453);const r={title:"IsPlayerInModShop",sidebar_label:"IsPlayerInModShop",description:"Check if the player is in the mod shop.",tags:["player"]},a=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Values",id:"return-values",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components},{VersionWarn:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s,{version:"omp v1.1.0.2612"}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Check if the player is in the mod shop."}),"\n",(0,i.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"playerid"}),(0,i.jsx)(n.td,{children:"The ID of the player to check."})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"return-values",children:"Return Values"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"true"})," - Player is in mod shop."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"false"})," - Player is not in mod shop."]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'if (IsPlayerInModShop(playerid))\n{\n    SendClientMessage(playerid, 0xFFFF00FF, "You are in the mod shop.");\n}\nelse\n{\n    SendClientMessage(playerid, 0xFF0000FF, "You are not in the mod shop.");\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsx)(n.p,{children:"The following functions might be useful, as they're related to this callback in one way or another."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"AddVehicleComponent",children:"AddVehicleComponent"}),": Add a component to a vehicle."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,i.jsx)(n.p,{children:"The following callbacks might be useful, as they're related to this callback in one way or another."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../callbacks/OnVehicleMod",children:"OnVehicleMod"}),": This callback is called when a vehicle is modded."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../callbacks/OnVehicleRespray",children:"OnVehicleRespray"}),": This callback is called when a player exits a mod shop, even if the colors weren't changed."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../callbacks/OnVehiclePaintjob",children:"OnVehiclePaintjob"}),": This callback is called when a player previews a vehicle paintjob inside a mod shop."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../callbacks/OnEnterExitModShop",children:"OnEnterExitModShop"}),": This callback is called when a player enters or exits a mod shop."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);