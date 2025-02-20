"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[4781],{17149:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>r,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>h});const l=JSON.parse('{"id":"scripting/callbacks/OnVehiclePaintjob","title":"OnVehiclePaintjob","description":"This callback is called when a player previews a vehicle paintjob inside a mod shop.","source":"@site/docs/scripting/callbacks/OnVehiclePaintjob.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnVehiclePaintjob","permalink":"/ta/docs/scripting/callbacks/OnVehiclePaintjob","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnVehiclePaintjob.md","tags":[{"inline":true,"label":"vehicle","permalink":"/ta/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"OnVehiclePaintjob","sidebar_label":"OnVehiclePaintjob","description":"This callback is called when a player previews a vehicle paintjob inside a mod shop.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"OnVehicleMod","permalink":"/ta/docs/scripting/callbacks/OnVehicleMod"},"next":{"title":"OnVehicleRespray","permalink":"/ta/docs/scripting/callbacks/OnVehicleRespray"}}');var t=n(74848),a=n(28453);const s={title:"OnVehiclePaintjob",sidebar_label:"OnVehiclePaintjob",description:"This callback is called when a player previews a vehicle paintjob inside a mod shop.",tags:["vehicle"]},c=void 0,r={},h=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2},{value:"Related Functions",id:"related-functions",level:2}];function o(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(i.p,{children:"This callback is called when a player previews a vehicle paintjob inside a mod shop. Watch out, this callback is not called when the player buys the paintjob."}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Name"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"playerid"}),(0,t.jsx)(i.td,{children:"The ID of the player that changed the paintjob of their vehicle."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"vehicleid"}),(0,t.jsx)(i.td,{children:"The ID of the vehicle that had its paintjob changed."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"paintjobid"}),(0,t.jsx)(i.td,{children:"The ID of the new paintjob."})]})]})]}),"\n",(0,t.jsx)(i.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(i.p,{children:"It is always called first in gamemode so returning 0 there blocks other filterscripts from processing it."}),"\n",(0,t.jsx)(i.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-c",children:'public OnVehiclePaintjob(playerid, vehicleid, paintjobid)\n{\n    new string[128];\n    format(string, sizeof(string), "You have changed your vehicle\'s paintjob to %d!", paintjobid);\n    SendClientMessage(playerid, 0x33AA33AA, string);\n    return 1;\n}\n'})}),"\n",(0,t.jsx)(i.h2,{id:"notes",children:"Notes"}),"\n",(0,t.jsx)(i.admonition,{type:"tip",children:(0,t.jsx)(i.p,{children:"This callback is not called by ChangeVehiclePaintjob. You might use OnVehicleChangePaintjob from vSync in order to know when the player buys the paintjob."})}),"\n",(0,t.jsx)(i.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,t.jsx)(i.p,{children:"The following callbacks might be useful, as they're related to this callback in one way or another."}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"OnVehicleRespray",children:"OnVehicleRespray"}),": This callback is called when a vehicle is resprayed."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"OnVehicleMod",children:"OnVehicleMod"}),": This callback is called when a vehicle is modded."]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,t.jsx)(i.p,{children:"The following functions might be useful, as they're related to this callback in one way or another."}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"../functions/ChangeVehiclePaintjob",children:"ChangeVehiclePaintjob"}),": Change the paintjob on a vehicle."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"../functions/ChangeVehicleColor",children:"ChangeVehicleColor"}),": Set the color of a vehicle."]}),"\n"]})]})}function d(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>s,x:()=>c});var l=n(96540);const t={},a=l.createContext(t);function s(e){const i=l.useContext(a);return l.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),l.createElement(a.Provider,{value:i},e.children)}}}]);