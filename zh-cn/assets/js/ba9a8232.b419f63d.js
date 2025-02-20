"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[78919],{28453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>s});var l=i(96540);const t={},a=l.createContext(t);function c(e){const n=l.useContext(a);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),l.createElement(a.Provider,{value:n},e.children)}},68652:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>d,frontMatter:()=>c,metadata:()=>l,toc:()=>h});const l=JSON.parse('{"id":"scripting/callbacks/OnVehiclePaintjob","title":"OnVehiclePaintjob","description":"This callback is called when a player previews a vehicle paintjob inside a mod shop.","source":"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/scripting/callbacks/OnVehiclePaintjob.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnVehiclePaintjob","permalink":"/zh-cn/docs/scripting/callbacks/OnVehiclePaintjob","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnVehiclePaintjob.md","tags":[{"inline":true,"label":"vehicle","permalink":"/zh-cn/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"OnVehiclePaintjob","sidebar_label":"OnVehiclePaintjob","description":"This callback is called when a player previews a vehicle paintjob inside a mod shop.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"OnVehicleMod","permalink":"/zh-cn/docs/scripting/callbacks/OnVehicleMod"},"next":{"title":"OnVehicleRespray","permalink":"/zh-cn/docs/scripting/callbacks/OnVehicleRespray"}}');var t=i(74848),a=i(28453);const c={title:"OnVehiclePaintjob",sidebar_label:"OnVehiclePaintjob",description:"This callback is called when a player previews a vehicle paintjob inside a mod shop.",tags:["vehicle"]},s=void 0,r={},h=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2},{value:"Related Functions",id:"related-functions",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"This callback is called when a player previews a vehicle paintjob inside a mod shop. Watch out, this callback is not called when the player buys the paintjob."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"playerid"}),(0,t.jsx)(n.td,{children:"The ID of the player that changed the paintjob of their vehicle."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"vehicleid"}),(0,t.jsx)(n.td,{children:"The ID of the vehicle that had its paintjob changed."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"paintjobid"}),(0,t.jsx)(n.td,{children:"The ID of the new paintjob."})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:"It is always called first in gamemode so returning 0 there blocks other filterscripts from seeing it."}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'public OnVehiclePaintjob(playerid, vehicleid, paintjobid)\n{\n    new string[128];\n    format(string, sizeof(string), "You have changed your vehicle\'s paintjob to %d!", paintjobid);\n    SendClientMessage(playerid, 0x33AA33AA, string);\n    return 1;\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"This callback is not called by ChangeVehiclePaintjob. You might use OnVehicleChangePaintjob from vSync in order to know when the player buys the paintjob."})}),"\n",(0,t.jsx)(n.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,t.jsx)(n.p,{children:"The following callbacks might be useful, as they're related to this callback in one way or another."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"OnVehicleRespray",children:"OnVehicleRespray"}),": This callback is called when a vehicle is resprayed."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"OnVehicleMod",children:"OnVehicleMod"}),": This callback is called when a vehicle is modded."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,t.jsx)(n.p,{children:"The following functions might be useful, as they're related to this callback in one way or another."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"../functions/ChangeVehiclePaintjob",children:"ChangeVehiclePaintjob"}),": Change the paintjob on a vehicle."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"../functions/ChangeVehicleColor",children:"ChangeVehicleColor"}),": Set the color of a vehicle."]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}}}]);