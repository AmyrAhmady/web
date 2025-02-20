"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[69331],{13821:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"scripting/callbacks/OnEnterExitModShop","title":"OnEnterExitModShop","description":"This callback is called when a player enters or exits a mod shop.","source":"@site/docs/scripting/callbacks/OnEnterExitModShop.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnEnterExitModShop","permalink":"/pl/docs/scripting/callbacks/OnEnterExitModShop","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnEnterExitModShop.md","tags":[{"inline":true,"label":"player","permalink":"/pl/docs/tags/player"}],"version":"current","frontMatter":{"title":"OnEnterExitModShop","sidebar_label":"OnEnterExitModShop","description":"This callback is called when a player enters or exits a mod shop.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"OnDialogResponse","permalink":"/pl/docs/scripting/callbacks/OnDialogResponse"},"next":{"title":"OnFilterScriptExit","permalink":"/pl/docs/scripting/callbacks/OnFilterScriptExit"}}');var l=i(74848),s=i(28453);const r={title:"OnEnterExitModShop",sidebar_label:"OnEnterExitModShop",description:"This callback is called when a player enters or exits a mod shop.",tags:["player"]},a=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"This callback is called when a player enters or exits a mod shop."}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Name"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"playerid"}),(0,l.jsx)(n.td,{children:"The ID of the player that entered or exited the modshop"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"enterexit"}),(0,l.jsx)(n.td,{children:"1 if the player entered or 0 if they exited"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"interiorid"}),(0,l.jsx)(n.td,{children:"The interior ID of the modshop that the player is entering (or 0 if exiting)"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsx)(n.p,{children:"It is always called first in filterscripts."}),"\n",(0,l.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:'public OnEnterExitModShop(playerid, enterexit, interiorid)\n{\n    if (enterexit == 0) // If enterexit is 0, this means they are exiting\n    {\n        SendClientMessage(playerid, COLOR_WHITE, "Nice car! You have been taxed $100.");\n        GivePlayerMoney(playerid, -100);\n    }\n    return 1;\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,l.jsxs)(n.admonition,{type:"warning",children:[(0,l.jsx)(n.p,{children:"Known Bug(s):"}),(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Players collide when they get into the same mod shop."}),"\n"]})]}),"\n",(0,l.jsx)(n.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,l.jsx)(n.p,{children:"The following callbacks might be useful, as they're related to this callback in one way or another."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"OnVehicleMod",children:"OnVehicleMod"}),": This callback is called when a vehicle is modded."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"OnVehicleRespray",children:"OnVehicleRespray"}),": This callback is called when a player exits a mod shop, even if the colors weren't changed."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"OnVehiclePaintjob",children:"OnVehiclePaintjob"}),": This callback is called when a player previews a vehicle paintjob inside a mod shop."]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsx)(n.p,{children:"The following functions might be useful, as they're related to this callback in one way or another."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../functions/IsPlayerInModShop",children:"IsPlayerInModShop"}),": Check if the player is in the mod shop."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../functions/AddVehicleComponent",children:"AddVehicleComponent"}),": Add a component to a vehicle."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var t=i(96540);const l={},s=t.createContext(l);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);