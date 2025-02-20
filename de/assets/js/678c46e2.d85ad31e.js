"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[35250],{28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var i=t(96540);const l={},r=i.createContext(l);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),i.createElement(r.Provider,{value:n},e.children)}},55462:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"scripting/functions/GetPlayerFacingAngle","title":"GetPlayerFacingAngle","description":"Gets the angle a player is facing.","source":"@site/docs/scripting/functions/GetPlayerFacingAngle.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerFacingAngle","permalink":"/de/docs/scripting/functions/GetPlayerFacingAngle","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetPlayerFacingAngle.md","tags":[{"inline":true,"label":"player","permalink":"/de/docs/tags/player"}],"version":"current","frontMatter":{"title":"GetPlayerFacingAngle","sidebar_label":"GetPlayerFacingAngle","description":"Gets the angle a player is facing.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerDrunkLevel","permalink":"/de/docs/scripting/functions/GetPlayerDrunkLevel"},"next":{"title":"GetPlayerFightingStyle","permalink":"/de/docs/scripting/functions/GetPlayerFightingStyle"}}');var l=t(74848),r=t(28453);const s={title:"GetPlayerFacingAngle",sidebar_label:"GetPlayerFacingAngle",description:"Gets the angle a player is facing.",tags:["player"]},a=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"Gets the angle a player is facing."}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Name"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"playerid"}),(0,l.jsx)(n.td,{children:"The player you want to get the angle of."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsxs)(n.td,{children:["&Float",":angle"]}),(0,l.jsx)(n.td,{children:"The Float to store the angle in, passed by reference."})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"true"})," - The function executed successfully."]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"false"})," - The function failed to execute. This means the player does not exist."]}),"\n",(0,l.jsx)(n.p,{children:"The player's angle is stored in the specified variable."}),"\n",(0,l.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, "/angle", true))\n    {\n        new string[64];\n\n        new Float:angle;\n        GetPlayerFacingAngle(playerid, angle);\n\n        format(string, sizeof(string), "Your facing angle: %0.2f", angle);\n        SendClientMessage(playerid, 0xFFFFFFFF, string);\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsxs)(n.p,{children:["Angles returned when inside a vehicle is rarely correct. To get the correct facing angle while inside a vehicle, use ",(0,l.jsx)(n.a,{href:"GetVehicleZAngle",children:"GetVehicleZAngle"}),"."]})}),"\n",(0,l.jsx)(n.admonition,{type:"warning",children:(0,l.jsxs)(n.p,{children:["Angles are reversed in GTA",":SA","; 90 degrees would be East in the real world, but in GTA",":SA"," 90 degrees is in fact West. North and South are still 0/360 and 180. To convert this, simply do 360 - angle."]})}),"\n",(0,l.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"GetVehicleZAngle",children:"GetVehicleZAngle"}),": Check the current angle of a vehicle."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"SetPlayerFacingAngle",children:"SetPlayerFacingAngle"}),": Set a player's facing angle."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"GetPlayerRotationQuat",children:"GetPlayerRotationQuat"}),": Get the quaternion rotation of a player."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}}}]);