"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[70366],{28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var i=t(96540);const l={},r=i.createContext(l);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),i.createElement(r.Provider,{value:n},e.children)}},68677:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"scripting/functions/GetPlayerFacingAngle","title":"GetPlayerFacingAngle","description":"Gets the angle a player is facing.","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/functions/GetPlayerFacingAngle.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerFacingAngle","permalink":"/th/docs/scripting/functions/GetPlayerFacingAngle","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetPlayerFacingAngle.md","tags":[{"inline":true,"label":"player","permalink":"/th/docs/tags/player"}],"version":"current","frontMatter":{"title":"GetPlayerFacingAngle","sidebar_label":"GetPlayerFacingAngle","description":"Gets the angle a player is facing.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerDrunkLevel","permalink":"/th/docs/scripting/functions/GetPlayerDrunkLevel"},"next":{"title":"GetPlayerFightingStyle","permalink":"/th/docs/scripting/functions/GetPlayerFightingStyle"}}');var l=t(74848),r=t(28453);const s={title:"GetPlayerFacingAngle",sidebar_label:"GetPlayerFacingAngle",description:"Gets the angle a player is facing.",tags:["player"]},a=void 0,c={},d=[{value:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",level:2},{value:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",id:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",level:2},{value:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",level:2},{value:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",id:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",level:2},{value:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",children:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22"}),"\n",(0,l.jsx)(n.p,{children:"Gets the angle a player is facing."}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Name"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"playerid"}),(0,l.jsx)(n.td,{children:"The player you want to get the angle of."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsxs)(n.td,{children:["&Float",":ang"]}),(0,l.jsx)(n.td,{children:"The Float to store the angle in, passed by reference."})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",children:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19"}),"\n",(0,l.jsx)(n.p,{children:"1: The function executed successfully."}),"\n",(0,l.jsx)(n.p,{children:"0: The function failed to execute. This means the player does not exist."}),"\n",(0,l.jsx)(n.p,{children:"The player's angle is stored in the specified variable."}),"\n",(0,l.jsx)(n.h2,{id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",children:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:'new Float:Angle, string[26];\nGetPlayerFacingAngle(playerid, Angle);\nformat(string, sizeof(string), "Your facing angle: %0.2f", Angle);\nSendClientMessage(playerid, 0xFFFFFFFF, string);\n'})}),"\n",(0,l.jsx)(n.h2,{id:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",children:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01"}),"\n",(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsx)(n.p,{children:"Angles returned when inside a vehicle is rarely correct. To get the correct facing angle while inside a vehicle, use GetVehicleZAngle."})}),"\n",(0,l.jsx)(n.admonition,{type:"warning",children:(0,l.jsxs)(n.p,{children:["Angles are reversed in GTA",":SA","; 90 degrees would be East in the real world, but in GTA",":SA"," 90 degrees is in fact West. North and South are still 0/360 and 180. To convert this, simply do 360 - angle."]})}),"\n",(0,l.jsx)(n.h2,{id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",children:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../functions/GetVehicleZAngle",children:"GetVehicleZAngle"}),": Check the current angle of a vehicle."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../functions/SetPlayerFacingAngle",children:"SetPlayerFacingAngle"}),": Set a player's facing angle."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}}}]);