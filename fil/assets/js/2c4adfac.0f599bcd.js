"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[99885],{13090:(e,l,n)=>{n.r(l),n.d(l,{assets:()=>r,contentTitle:()=>a,default:()=>d,frontMatter:()=>t,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"scripting/callbacks/OnVehicleRespray","title":"OnVehicleRespray","description":"This callback is called when a player exits a mod shop, even if the colors weren\'t changed.","source":"@site/docs/scripting/callbacks/OnVehicleRespray.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnVehicleRespray","permalink":"/fil/docs/scripting/callbacks/OnVehicleRespray","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnVehicleRespray.md","tags":[{"inline":true,"label":"vehicle","permalink":"/fil/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"OnVehicleRespray","sidebar_label":"OnVehicleRespray","description":"This callback is called when a player exits a mod shop, even if the colors weren\'t changed.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"OnVehiclePaintjob","permalink":"/fil/docs/scripting/callbacks/OnVehiclePaintjob"},"next":{"title":"OnVehicleSirenStateChange","permalink":"/fil/docs/scripting/callbacks/OnVehicleSirenStateChange"}}');var s=n(74848),c=n(28453);const t={title:"OnVehicleRespray",sidebar_label:"OnVehicleRespray",description:"This callback is called when a player exits a mod shop, even if the colors weren't changed.",tags:["vehicle"]},a=void 0,r={},h=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2},{value:"Related Functions",id:"related-functions",level:2}];function o(e){const l={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(l.p,{children:"This callback is called when a player exits a mod shop, even if the colors weren't changed. Watch out, the name is ambiguous, Pay 'n' Spray shops don't call this callback."}),"\n",(0,s.jsxs)(l.table,{children:[(0,s.jsx)(l.thead,{children:(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.th,{children:"Name"}),(0,s.jsx)(l.th,{children:"Description"})]})}),(0,s.jsxs)(l.tbody,{children:[(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{children:"playerid"}),(0,s.jsx)(l.td,{children:"The ID of the player that is driving the vehicle."})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{children:"vehicleid"}),(0,s.jsx)(l.td,{children:"The ID of the vehicle that was resprayed."})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{children:"color1"}),(0,s.jsx)(l.td,{children:"The color that the vehicle's primary color was changed to."})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{children:"color2"}),(0,s.jsx)(l.td,{children:"The color that the vehicle's secondary color was changed to."})]})]})]}),"\n",(0,s.jsx)(l.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(l.p,{children:"It is always called first in gamemode so returning 0 there also blocks other filterscripts from processing it."}),"\n",(0,s.jsx)(l.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-c",children:'public OnVehicleRespray(playerid, vehicleid, color1, color2)\n{\n    new string[48];\n    format(string, sizeof(string), "You resprayed vehicle %d to colors %d and %d!", vehicleid, color1, color2);\n    SendClientMessage(playerid, COLOR_GREEN, string);\n    return 1;\n}\n'})}),"\n",(0,s.jsx)(l.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsxs)(l.admonition,{type:"tip",children:[(0,s.jsx)(l.p,{children:"This callback is not called by ChangeVehicleColor. Misleadingly, this callback is not called for pay 'n' spray (only modshops)."}),(0,s.jsxs)(l.p,{children:["Fix here: ",(0,s.jsx)(l.a,{href:"http://pastebin.com/G81da7N1",children:"http://pastebin.com/G81da7N1"})]})]}),"\n",(0,s.jsxs)(l.admonition,{type:"warning",children:[(0,s.jsx)(l.p,{children:"Known Bug(s):"}),(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"Previewing a component inside a mod shop might call this callback."}),"\n"]})]}),"\n",(0,s.jsx)(l.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,s.jsx)(l.p,{children:"The following callbacks might be useful, as they're related to this callback in one way or another."}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:[(0,s.jsx)(l.a,{href:"OnVehiclePaintjob",children:"OnVehiclePaintjob"}),": This callback is called when a vehicle's paintjob is changed."]}),"\n",(0,s.jsxs)(l.li,{children:[(0,s.jsx)(l.a,{href:"OnVehicleMod",children:"OnVehicleMod"}),": This callback is called when a vehicle is modded."]}),"\n",(0,s.jsxs)(l.li,{children:[(0,s.jsx)(l.a,{href:"OnEnterExitModShop",children:"OnEnterExitModShop"}),": This callback is called when a vehicle enters or exits a mod shop."]}),"\n"]}),"\n",(0,s.jsx)(l.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsx)(l.p,{children:"The following functions might be useful, as they're related to this callback in one way or another."}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:[(0,s.jsx)(l.a,{href:"../functions/ChangeVehicleColor",children:"ChangeVehicleColor"}),": Set the color of a vehicle."]}),"\n",(0,s.jsxs)(l.li,{children:[(0,s.jsx)(l.a,{href:"../functions/ChangeVehiclePaintjob",children:"ChangeVehiclePaintjob"}),": Change the paintjob on a vehicle."]}),"\n"]})]})}function d(e={}){const{wrapper:l}={...(0,c.R)(),...e.components};return l?(0,s.jsx)(l,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,l,n)=>{n.d(l,{R:()=>t,x:()=>a});var i=n(96540);const s={},c=i.createContext(s);function t(e){const l=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function a(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),i.createElement(c.Provider,{value:l},e.children)}}}]);