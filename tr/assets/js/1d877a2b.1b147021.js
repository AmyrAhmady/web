"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[94639],{28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>a});var l=r(96540);const n={},i=l.createContext(n);function s(e){const t=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),l.createElement(i.Provider,{value:t},e.children)}},95424:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>o});const l=JSON.parse('{"id":"scripting/functions/PlayerSpectateVehicle","title":"PlayerSpectateVehicle","description":"Sets a player to spectate another vehicle.","source":"@site/docs/scripting/functions/PlayerSpectateVehicle.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/PlayerSpectateVehicle","permalink":"/tr/docs/scripting/functions/PlayerSpectateVehicle","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/PlayerSpectateVehicle.md","tags":[{"inline":true,"label":"player","permalink":"/tr/docs/tags/player"},{"inline":true,"label":"vehicle","permalink":"/tr/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"PlayerSpectateVehicle","sidebar_label":"PlayerSpectateVehicle","description":"Sets a player to spectate another vehicle.","tags":["player","vehicle"]},"sidebar":"docsSidebar","previous":{"title":"PlayerSpectatePlayer","permalink":"/tr/docs/scripting/functions/PlayerSpectatePlayer"},"next":{"title":"PlayerTextDrawAlignment","permalink":"/tr/docs/scripting/functions/PlayerTextDrawAlignment"}}');var n=r(74848),i=r(28453);const s={title:"PlayerSpectateVehicle",sidebar_label:"PlayerSpectateVehicle",description:"Sets a player to spectate another vehicle.",tags:["player","vehicle"]},a=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Resources",id:"related-resources",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"Sets a player to spectate another vehicle. Their camera will be attached to the vehicle as if they are driving it."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"playerid"}),(0,n.jsx)(t.td,{children:"The ID of the player who should spectate a vehicle."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"targetvehicleid"}),(0,n.jsx)(t.td,{children:"The ID of the vehicle the player should spectate."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["SPECTATE_MODE",":mode"]}),(0,n.jsxs)(t.td,{children:["The spectate ",(0,n.jsx)(t.a,{href:"../resources/spectatemodes",children:"mode"}),". Can generally be left blank as it defaults to 'normal'."]})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"true"})," - The function was executed successfully. Note that success is reported if the player is not in spectator mode (TogglePlayerSpectating), but nothing will happen. TogglePlayerSpectating MUST be used first."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"false"})," - The function failed to execute. The player, vehicle, or both don't exist."]}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c",children:"TogglePlayerSpectating(playerid, 1);\nPlayerSpectateVehicle(playerid, vehicleid);\n"})}),"\n",(0,n.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Order is CRITICAL! Ensure that you use TogglePlayerSpectating before PlayerSpectateVehicle."}),"\n",(0,n.jsx)(t.li,{children:"The playerid and vehicleid have to be in the same interior and virtual world for this function to work properly."}),"\n"]})}),"\n",(0,n.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"PlayerSpectatePlayer",children:"PlayerSpectatePlayer"}),": Spectate a player."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"TogglePlayerSpectating",children:"TogglePlayerSpectating"}),": Start or stop spectating."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"GetPlayerSpectateID",children:"GetPlayerSpectateID"}),": Gets the ID of the player or vehicle the player is spectating (watching)."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"GetPlayerSpectateType",children:"GetPlayerSpectateType"}),": Gets the player's spectate type."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"../resources/spectatemodes",children:"Spectate Modes"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}}}]);