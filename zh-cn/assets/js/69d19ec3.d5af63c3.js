"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[82241],{28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var i=t(96540);const l={},r=i.createContext(l);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),i.createElement(r.Provider,{value:n},e.children)}},93613:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>o,frontMatter:()=>s,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"scripting/functions/PutPlayerInVehicle","title":"PutPlayerInVehicle","description":"Puts a player in a vehicle.","source":"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/scripting/functions/PutPlayerInVehicle.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/PutPlayerInVehicle","permalink":"/zh-cn/docs/scripting/functions/PutPlayerInVehicle","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/PutPlayerInVehicle.md","tags":[{"inline":true,"label":"player","permalink":"/zh-cn/docs/tags/player"},{"inline":true,"label":"vehicle","permalink":"/zh-cn/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"PutPlayerInVehicle","sidebar_label":"PutPlayerInVehicle","description":"Puts a player in a vehicle.","tags":["player","vehicle"]},"sidebar":"docsSidebar","previous":{"title":"PlayerTextDrawUseBox","permalink":"/zh-cn/docs/scripting/functions/PlayerTextDrawUseBox"},"next":{"title":"RedirectDownload","permalink":"/zh-cn/docs/scripting/functions/RedirectDownload"}}');var l=t(74848),r=t(28453);const s={title:"PutPlayerInVehicle",sidebar_label:"PutPlayerInVehicle",description:"Puts a player in a vehicle.",tags:["player","vehicle"]},c=void 0,a={},h=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"Puts a player in a vehicle."}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Name"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"playerid"}),(0,l.jsx)(n.td,{children:"The ID of the player to put in a vehicle."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"vehicleid"}),(0,l.jsx)(n.td,{children:"The ID of the vehicle to put the player in."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"seatid"}),(0,l.jsx)(n.td,{children:"The ID of the seat to put the player in."})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"true"})," - The function was executed successfully."]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"false"})," - The function failed to execute. The player or vehicle don't exist."]}),"\n",(0,l.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:"public OnPlayerEnterVehicle(playerid, vehicleid, ispassanger)\n{\n    PutPlayerInVehicle(playerid, vehicleid, 0);\n    return 1;\n}\n"})}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"ID"}),(0,l.jsx)(n.th,{children:"Seat"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"0"}),(0,l.jsx)(n.td,{children:"Driver"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"1"}),(0,l.jsx)(n.td,{children:"Front passenger"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"2"}),(0,l.jsx)(n.td,{children:"Back-left passenger"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"3"}),(0,l.jsx)(n.td,{children:"Back-right passenger"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"4+"}),(0,l.jsx)(n.td,{children:"Passenger seats (coach etc.)"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsxs)(n.p,{children:["You can use ",(0,l.jsx)(n.a,{href:"GetPlayerVehicleSeat",children:"GetPlayerVehicleSeat"})," in a loop to check if a seat is occupied by any players."]})}),"\n",(0,l.jsx)(n.admonition,{type:"warning",children:(0,l.jsx)(n.p,{children:"If the seat is invalid or is taken, will cause a crash when they EXIT the vehicle."})}),"\n",(0,l.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"RemovePlayerFromVehicle",children:"RemovePlayerFromVehicle"}),": Throw a player out of their vehicle."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"GetPlayerVehicleID",children:"GetPlayerVehicleID"}),": Get the ID of the vehicle the player is in."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"GetPlayerVehicleSeat",children:"GetPlayerVehicleSeat"}),": Check what seat a player is in."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"GetVehicleSeats",children:"GetVehicleSeats"}),": Gets the number of seats in the vehicle."]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../callbacks/OnPlayerEnterVehicle",children:"OnPlayerEnterVehicle"}),": Called when a player starts to enter a vehicle."]}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}}}]);