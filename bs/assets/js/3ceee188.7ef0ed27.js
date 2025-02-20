"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[35473],{28453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>i});var n=r(96540);const s={},a=n.createContext(s);function l(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(a.Provider,{value:t},e.children)}},99775:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>n,toc:()=>p});const n=JSON.parse('{"id":"scripting/functions/GetPlayerSpectateType","title":"GetPlayerSpectateType","description":"Returns the player\'s spectate type (vehicle or player).","source":"@site/docs/scripting/functions/GetPlayerSpectateType.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerSpectateType","permalink":"/bs/docs/scripting/functions/GetPlayerSpectateType","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetPlayerSpectateType.md","tags":[{"inline":true,"label":"player","permalink":"/bs/docs/tags/player"}],"version":"current","frontMatter":{"title":"GetPlayerSpectateType","sidebar_label":"GetPlayerSpectateType","description":"Returns the player\'s spectate type (vehicle or player).","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerSpectateID","permalink":"/bs/docs/scripting/functions/GetPlayerSpectateID"},"next":{"title":"GetPlayerState","permalink":"/bs/docs/scripting/functions/GetPlayerState"}}');var s=r(74848),a=r(28453);const l={title:"GetPlayerSpectateType",sidebar_label:"GetPlayerSpectateType",description:"Returns the player's spectate type (vehicle or player).",tags:["player"]},i=void 0,c={},p=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Resources",id:"related-resources",level:2}];function o(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components},{VersionWarn:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r,{version:"omp v1.1.0.2612"}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Returns the player's spectate type (vehicle or player)."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"playerid"}),(0,s.jsx)(t.td,{children:"The ID of the player."})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(t.p,{children:["Returns the player's ",(0,s.jsx)(t.a,{href:"../resources/spectatetypes",children:"spectate type"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-c",children:'new spectateType = GetPlayerSpectateType(playerid);\n\nif (spectateType == 1)\n{\n    SendClientMessage(playerid, -1, "You are spectating a vehicle.");\n}\nelse if (spectateType == 2)\n{\n    SendClientMessage(playerid, -1, "You are spectating a player.");\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"PlayerSpectatePlayer",children:"PlayerSpectatePlayer"}),": Spectate a player."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"PlayerSpectateVehicle",children:"PlayerSpectateVehicle"}),": Spectate a vehicle."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"TogglePlayerSpectating",children:"TogglePlayerSpectating"}),": Start or stop spectating."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"GetPlayerSpectateID",children:"GetPlayerSpectateID"}),": Gets the ID of the player or vehicle the player is spectating (watching)."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"../resources/spectatetypes",children:"Spectate Types"}),"."]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}}}]);