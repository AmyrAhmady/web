"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[35672],{28453:(n,e,a)=>{a.d(e,{R:()=>d,x:()=>o});var i=a(96540);const t={},s=i.createContext(t);function d(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:d(n.components),i.createElement(s.Provider,{value:e},n.children)}},73859:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>d,metadata:()=>i,toc:()=>r});const i=JSON.parse('{"id":"scripting/functions/AddVehicleComponent","title":"AddVehicleComponent","description":"Nagdaragdag ng \'bahagi\' (madalas na tinutukoy bilang \'mod\' (pagbabago)) sa isang sasakyan.","source":"@site/i18n/fil/docusaurus-plugin-content-docs/current/scripting/functions/AddVehicleComponent.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/AddVehicleComponent","permalink":"/fil/docs/scripting/functions/AddVehicleComponent","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/AddVehicleComponent.md","tags":[{"inline":true,"label":"vehicle","permalink":"/fil/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"AddVehicleComponent","sidebar_label":"AddVehicleComponent","description":"Nagdaragdag ng \'bahagi\' (madalas na tinutukoy bilang \'mod\' (pagbabago)) sa isang sasakyan.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"AddStaticVehicleEx","permalink":"/fil/docs/scripting/functions/AddStaticVehicleEx"},"next":{"title":"AllowAdminTeleport","permalink":"/fil/docs/scripting/functions/AllowAdminTeleport"}}');var t=a(74848),s=a(28453);const d={title:"AddVehicleComponent",sidebar_label:"AddVehicleComponent",description:"Nagdaragdag ng 'bahagi' (madalas na tinutukoy bilang 'mod' (pagbabago)) sa isang sasakyan.",tags:["vehicle"]},o=void 0,l={},r=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function c(n){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(e.p,{children:"Nagdaragdag ng 'bahagi' (madalas na tinutukoy bilang 'mod' (pagbabago)) sa isang sasakyan. Ang mga wastong bahagi ay matatagpuan dito."}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Name"}),(0,t.jsx)(e.th,{children:"Description"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"vehicleid"}),(0,t.jsx)(e.td,{children:"Ang ID ng sasakyan kung saan idaragdag ang bahagi. Hindi dapat malito sa modelid."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.a,{href:"../resources/carcomponentid",children:"componentid"})}),(0,t.jsx)(e.td,{children:"Ang ID ng component na idaragdag sa sasakyan."})]})]})]}),"\n",(0,t.jsx)(e.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(e.p,{children:"0 - Hindi naidagdag ang component dahil wala ang sasakyan."}),"\n",(0,t.jsx)(e.p,{children:"1 - Ang bahagi ay matagumpay na naidagdag sa sasakyan."}),"\n",(0,t.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-c",children:'new gTaxi;\n\npublic OnGameModeInit()\n{\n    gTaxi = AddStaticVehicle(420, -2482.4937, 2242.3936, 4.6225, 179.3656, 6, 1); // Taxi\n    return 1;\n}\n\npublic OnPlayerStateChange(playerid, PLAYER_STATE:newstate, PLAYER_STATE:oldstate)\n{\n    if (newstate == PLAYER_STATE_DRIVER && oldstate == PLAYER_STATE_ONFOOT)\n    {\n        if (GetPlayerVehicleID(playerid) == gTaxi)\n        {\n            AddVehicleComponent(gTaxi, 1010); // Nitro\n            SendClientMessage(playerid, 0xFFFFFFAA, "Nitro added to the Taxi.");\n        }\n    }\n    return 1;\n}\n'})}),"\n",(0,t.jsx)(e.h2,{id:"notes",children:"Notes"}),"\n",(0,t.jsx)(e.admonition,{type:"warning",children:(0,t.jsx)(e.p,{children:"Ang paggamit ng di-wastong component ID ay nag-crash sa laro ng player. Walang mga panloob na pagsusuri para dito."})}),"\n",(0,t.jsx)(e.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"RemoveVehicleComponent",children:"RemoveVehicleComponent"}),": Alisin ang isang bahagi mula sa isang sasakyan."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"GetVehicleComponentInSlot",children:"GetVehicleComponentInSlot"}),": Suriin kung anong mga bahagi mayroon ang sasakyan."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"GetVehicleComponentType",children:"GetVehicleComponentType"}),": Suriin ang uri ng bahagi sa pamamagitan ng ID."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"../callbacks/OnVehicleMod",children:"OnVehicleMod"}),": Tinatawag kapag ang isang sasakyan ay modded."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"../callbacks/OnEnterExitModShop",children:"OnEnterExitModShop"}),": Tinatawag kapag pumasok o lumabas ang sasakyan sa isang mod shop."]}),"\n"]})]})}function g(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(c,{...n})}):c(n)}}}]);