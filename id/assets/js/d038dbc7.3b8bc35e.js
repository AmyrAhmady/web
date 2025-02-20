"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[334],{28453:(e,i,t)=>{t.d(i,{R:()=>c,x:()=>a});var n=t(96540);const l={},s=n.createContext(l);function c(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),n.createElement(s.Provider,{value:i},e.children)}},72371:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"scripting/callbacks/OnUnoccupiedVehicleUpdate","title":"OnUnoccupiedVehicleUpdate","description":"This callback is called when a player\'s client updates/syncs the position of a vehicle they\'re not driving.","source":"@site/docs/scripting/callbacks/OnUnoccupiedVehicleUpdate.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnUnoccupiedVehicleUpdate","permalink":"/id/docs/scripting/callbacks/OnUnoccupiedVehicleUpdate","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnUnoccupiedVehicleUpdate.md","tags":[{"inline":true,"label":"vehicle","permalink":"/id/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"OnUnoccupiedVehicleUpdate","sidebar_label":"OnUnoccupiedVehicleUpdate","description":"This callback is called when a player\'s client updates/syncs the position of a vehicle they\'re not driving.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"OnTrailerUpdate","permalink":"/id/docs/scripting/callbacks/OnTrailerUpdate"},"next":{"title":"OnVehicleDamageStatusUpdate","permalink":"/id/docs/scripting/callbacks/OnVehicleDamageStatusUpdate"}}');var l=t(74848),s=t(28453);const c={title:"OnUnoccupiedVehicleUpdate",sidebar_label:"OnUnoccupiedVehicleUpdate",description:"This callback is called when a player's client updates/syncs the position of a vehicle they're not driving.",tags:["vehicle"]},a=void 0,r={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function o(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(i.p,{children:"This callback is called when a player's client updates/syncs the position of a vehicle they're not driving. This can happen outside of the vehicle or when the player is a passenger of a vehicle that has no driver."}),"\n",(0,l.jsxs)(i.table,{children:[(0,l.jsx)(i.thead,{children:(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.th,{children:"Name"}),(0,l.jsx)(i.th,{children:"Description"})]})}),(0,l.jsxs)(i.tbody,{children:[(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"vehicleid"}),(0,l.jsx)(i.td,{children:"The ID of the vehicle that's position was updated."})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"playerid"}),(0,l.jsx)(i.td,{children:"The ID of the player that sent a vehicle position sync update."})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsx)(i.td,{children:"passenger_seat"}),(0,l.jsx)(i.td,{children:"The ID of the seat if the player is a passenger. 0=not in vehicle, 1=front passenger, 2=backleft 3=backright 4+ is for coach/bus etc. with many passenger seats."})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsxs)(i.td,{children:["Float",":new_x"]}),(0,l.jsx)(i.td,{children:"The new X coordinate of the vehicle."})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsxs)(i.td,{children:["Float",":new_y"]}),(0,l.jsx)(i.td,{children:"The new Y coordinate of the vehicle."})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsxs)(i.td,{children:["Float",":new_z"]}),(0,l.jsx)(i.td,{children:"The new Z coordinate of the vehicle."})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsxs)(i.td,{children:["Float",":vel_x"]}),(0,l.jsx)(i.td,{children:"The new X velocity of the vehicle."})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsxs)(i.td,{children:["Float",":vel_y"]}),(0,l.jsx)(i.td,{children:"The new Y velocity of the vehicle."})]}),(0,l.jsxs)(i.tr,{children:[(0,l.jsxs)(i.td,{children:["Float",":vel_z"]}),(0,l.jsx)(i.td,{children:"The new Z velocity of the vehicle."})]})]})]}),"\n",(0,l.jsx)(i.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsx)(i.p,{children:"It is always called first in filterscripts so returning 0 there also blocks other scripts from processing it."}),"\n",(0,l.jsx)(i.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-c",children:"public OnUnoccupiedVehicleUpdate(vehicleid, playerid, passenger_seat, Float:new_x, Float:new_y, Float:new_z, Float:vel_x, Float:vel_y, Float:vel_z)\n{\n    // Check if it moved far\n    if (GetVehicleDistanceFromPoint(vehicleid, new_x, new_y, new_z) > 50.0)\n    {\n        // Reject the update\n        return 0;\n    }\n\n    return 1;\n}\n"})}),"\n",(0,l.jsx)(i.h2,{id:"notes",children:"Notes"}),"\n",(0,l.jsx)(i.admonition,{type:"warning",children:(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"This callback is called very frequently per second per unoccupied vehicle. You should refrain from implementing intensive calculations or intensive file writing/reading operations in this callback."}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"../functions/GetVehiclePos",children:"GetVehiclePos"})," will return the old coordinates of the vehicle before this update."]}),"\n"]})}),"\n",(0,l.jsx)(i.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,l.jsx)(i.p,{children:"The following callbacks might be useful, as they're related to this callback in one way or another."}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"OnTrailerUpdate",children:"OnTrailerUpdate"}),": Called when a trailer's position is synced by a client."]}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,l.jsx)(i,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}}}]);