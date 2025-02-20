"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[94133],{28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>a});var r=n(96540);const i={},s=r.createContext(i);function l(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(s.Provider,{value:t},e.children)}},38601:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"scripting/functions/GetPlayerTrainSpeed","title":"GetPlayerTrainSpeed","description":"Gets the speed of the player\'s train.","source":"@site/docs/scripting/functions/GetPlayerTrainSpeed.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerTrainSpeed","permalink":"/pl/docs/scripting/functions/GetPlayerTrainSpeed","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetPlayerTrainSpeed.md","tags":[{"inline":true,"label":"player","permalink":"/pl/docs/tags/player"},{"inline":true,"label":"vehicle","permalink":"/pl/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"GetPlayerTrainSpeed","sidebar_label":"GetPlayerTrainSpeed","description":"Gets the speed of the player\'s train.","tags":["player","vehicle"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerTime","permalink":"/pl/docs/scripting/functions/GetPlayerTime"},"next":{"title":"GetPlayerVehicleID","permalink":"/pl/docs/scripting/functions/GetPlayerVehicleID"}}');var i=n(74848),s=n(28453);const l={title:"GetPlayerTrainSpeed",sidebar_label:"GetPlayerTrainSpeed",description:"Gets the speed of the player's train.",tags:["player","vehicle"]},a=void 0,d={},o=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Gets the speed of the player's train."}),"\n",(0,i.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"playerid"}),(0,i.jsx)(t.td,{children:"The ID of the player."})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:'new Float:speed = GetPlayerTrainSpeed(playerid);\nSendClientMessage(playerid, 0xFFFF00FF, "The speed of your train: %f", speed);\n'})}),"\n",(0,i.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"GetVehicleTrainSpeed",children:"GetVehicleTrainSpeed"}),": Gets the speed of the train."]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}}}]);