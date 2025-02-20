"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[29201],{28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var r=t(96540);const l={},i=r.createContext(l);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),r.createElement(i.Provider,{value:n},e.children)}},44223:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"scripting/functions/RemovePlayerFromVehicle","title":"RemovePlayerFromVehicle","description":"Removes/ejects a player from their vehicle.","source":"@site/docs/scripting/functions/RemovePlayerFromVehicle.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/RemovePlayerFromVehicle","permalink":"/sl/docs/scripting/functions/RemovePlayerFromVehicle","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/RemovePlayerFromVehicle.md","tags":[{"inline":true,"label":"player","permalink":"/sl/docs/tags/player"},{"inline":true,"label":"vehicle","permalink":"/sl/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"RemovePlayerFromVehicle","sidebar_label":"RemovePlayerFromVehicle","description":"Removes/ejects a player from their vehicle.","tags":["player","vehicle"]},"sidebar":"docsSidebar","previous":{"title":"RemovePlayerAttachedObject","permalink":"/sl/docs/scripting/functions/RemovePlayerAttachedObject"},"next":{"title":"RemovePlayerMapIcon","permalink":"/sl/docs/scripting/functions/RemovePlayerMapIcon"}}');var l=t(74848),i=t(28453);const s={title:"RemovePlayerFromVehicle",sidebar_label:"RemovePlayerFromVehicle",description:"Removes/ejects a player from their vehicle.",tags:["player","vehicle"]},c=void 0,a={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"Removes/ejects a player from their vehicle."}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Name"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"playerid"}),(0,l.jsx)(n.td,{children:"The ID of the player to remove from their vehicle."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsxs)(n.td,{children:["bool",":force"]}),(0,l.jsxs)(n.td,{children:["Force remove from vehicle instantly. (default: ",(0,l.jsx)(n.code,{children:"false"}),")"]})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"true"})," - The function was executed successfully."]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"false"})," - The function failed to execute. This means the player is not connected."]}),"\n",(0,l.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:"// Example - Players can only drive vehicles if they have 10 score.\npublic OnPlayerStateChange(playerid, PLAYER_STATE:newstate, PLAYER_STATE:oldstate)\n{\n    if (newstate == PLAYER_STATE_DRIVER && GetPlayerScore(playerid) < 10) // PlAYER_STATE_DRIVER = 2\n    {\n        RemovePlayerFromVehicle(playerid);\n    }\n    return 1;\n}\n"})}),"\n",(0,l.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"The exiting animation is not synced for other players."}),"\n",(0,l.jsxs)(n.li,{children:["This function will not work when used in ",(0,l.jsx)(n.a,{href:"../callbacks/OnPlayerEnterVehicle",children:"OnPlayerEnterVehicle"}),", because the player isn't in the vehicle when the callback is called. Use ",(0,l.jsx)(n.a,{href:"../callbacks/OnPlayerStateChange",children:"OnPlayerStateChange"})," instead (see the example above)."]}),"\n",(0,l.jsxs)(n.li,{children:["If the player is in an RC vehicle, they will not be removed. (Use ",(0,l.jsx)(n.code,{children:".force = true"})," parameter or ",(0,l.jsx)(n.a,{href:"ClearAnimations",children:"ClearAnimations"})," function)"]}),"\n"]})}),"\n",(0,l.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"PutPlayerInVehicle",children:"PutPlayerInVehicle"}),": Put a player in a vehicle."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}}}]);