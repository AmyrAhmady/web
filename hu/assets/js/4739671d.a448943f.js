"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[91290],{28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>d});var l=i(96540);const c={},t=l.createContext(c);function s(e){const n=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),l.createElement(t.Provider,{value:n},e.children)}},80254:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>r});const l=JSON.parse('{"id":"scripting/callbacks/OnVehicleMod","title":"OnVehicleMod","description":"This callback is called when a vehicle is modded.","source":"@site/docs/scripting/callbacks/OnVehicleMod.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnVehicleMod","permalink":"/hu/docs/scripting/callbacks/OnVehicleMod","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnVehicleMod.md","tags":[{"inline":true,"label":"vehicle","permalink":"/hu/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"OnVehicleMod","sidebar_label":"OnVehicleMod","description":"This callback is called when a vehicle is modded.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"OnVehicleDeath","permalink":"/hu/docs/scripting/callbacks/OnVehicleDeath"},"next":{"title":"OnVehiclePaintjob","permalink":"/hu/docs/scripting/callbacks/OnVehiclePaintjob"}}');var c=i(74848),t=i(28453);const s={title:"OnVehicleMod",sidebar_label:"OnVehicleMod",description:"This callback is called when a vehicle is modded.",tags:["vehicle"]},d=void 0,a={},r=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2},{value:"Related Functions",id:"related-functions",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,c.jsx)(n.p,{children:"This callback is called when a vehicle is modded."}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Name"}),(0,c.jsx)(n.th,{children:"Description"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"playerid"}),(0,c.jsx)(n.td,{children:"The ID of the driver of the vehicle."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"vehicleid"}),(0,c.jsx)(n.td,{children:"The ID of the vehicle which is modded."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"componentid"}),(0,c.jsx)(n.td,{children:"The ID of the component which was added to the vehicle."})]})]})]}),"\n",(0,c.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,c.jsx)(n.p,{children:"It is always called first in gamemode so returning 0 there also blocks other filterscripts from processing it."}),"\n",(0,c.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-c",children:'public OnVehicleMod(playerid, vehicleid, componentid)\n{\n    printf("Vehicle %d was modded by ID %d with the componentid %d", vehicleid, playerid, componentid);\n\n    if (GetPlayerInterior(playerid) == 0)\n    {\n        BanEx(playerid, "Tuning Hacks"); // Anti-tuning hacks script\n        return 0; // Prevents the bad modification from being synced to other players\n        // Tested and it works even on servers wich allow you to mod your vehicle using commands, menus, dialogs, etc..\n    }\n    return 1;\n}\n'})}),"\n",(0,c.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,c.jsx)(n.admonition,{type:"tip",children:(0,c.jsx)(n.p,{children:"This callback is NOT called by AddVehicleComponent."})}),"\n",(0,c.jsx)(n.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,c.jsx)(n.p,{children:"The following callbacks might be useful, as they're related to this callback in one way or another."}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"OnEnterExitModShop",children:"OnEnterExitModShop"}),": This callback is called when a vehicle enters or exits a mod shop."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"OnVehiclePaintjob",children:"OnVehiclePaintjob"}),": This callback is called when a vehicle's paintjob is changed."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"OnVehicleRespray",children:"OnVehicleRespray"}),": This callback is called when a vehicle is resprayed."]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,c.jsx)(n.p,{children:"The following functions might be useful, as they're related to this callback in one way or another."}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"../functions/AddVehicleComponent",children:"AddVehicleComponent"}),": Add a component to a vehicle."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}}}]);