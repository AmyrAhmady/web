"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[81441],{18981:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"scripting/functions/GetPlayerMarkerForPlayer","title":"GetPlayerMarkerForPlayer","description":"Get the colour of a player\'s nametag and radar blip for another player.","source":"@site/docs/scripting/functions/GetPlayerMarkerForPlayer.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerMarkerForPlayer","permalink":"/fil/docs/scripting/functions/GetPlayerMarkerForPlayer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetPlayerMarkerForPlayer.md","tags":[{"inline":true,"label":"player","permalink":"/fil/docs/tags/player"}],"version":"current","frontMatter":{"title":"GetPlayerMarkerForPlayer","sidebar_label":"GetPlayerMarkerForPlayer","description":"Get the colour of a player\'s nametag and radar blip for another player.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerLastSyncedVehicleID","permalink":"/fil/docs/scripting/functions/GetPlayerLastSyncedVehicleID"},"next":{"title":"GetPlayerMenu","permalink":"/fil/docs/scripting/functions/GetPlayerMenu"}}');var n=a(74848),l=a(28453);const s={title:"GetPlayerMarkerForPlayer",sidebar_label:"GetPlayerMarkerForPlayer",description:"Get the colour of a player's nametag and radar blip for another player.",tags:["player"]},i=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components},{VersionWarn:a}=r;return a||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a,{version:"omp v1.1.0.2612"}),"\n",(0,n.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(r.p,{children:["Get the colour of a player's ",(0,n.jsx)(r.strong,{children:"nametag"})," and ",(0,n.jsx)(r.strong,{children:"radar blip"})," for another player."]}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"playerid"}),(0,n.jsx)(r.td,{children:"The player that can see the player's changed blip/nametag colour"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"targetid"}),(0,n.jsx)(r.td,{children:"The player whose colour has been changed."})]})]})]}),"\n",(0,n.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(r.p,{children:["The target player's ",(0,n.jsx)(r.strong,{children:"nametag"})," and ",(0,n.jsx)(r.strong,{children:"radar blip"})," colour."]}),"\n",(0,n.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-c",children:"// Make player 42 see player 1 as a red marker\nSetPlayerMarkerForPlayer(42, 1, 0xFF0000FF);\n\nnew markerColour = GetPlayerMarkerForPlayer(42, 1);\n// markerColour = 0xFF0000FF\n"})}),"\n",(0,n.jsx)(r.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"ShowPlayerMarkers",children:"ShowPlayerMarkers"}),": Decide if the server should show markers on the radar."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"LimitPlayerMarkerRadius",children:"LimitPlayerMarkerRadius"}),": Limit the player marker radius."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"SetPlayerColor",children:"SetPlayerColor"}),": Set a player's color."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"ShowPlayerNameTagForPlayer",children:"ShowPlayerNameTagForPlayer"}),": Show or hide a nametag for a certain player."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"SetPlayerMarkerForPlayer",children:"SetPlayerMarkerForPlayer"}),": Set a player's marker for a specific player."]}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,l.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,r,a)=>{a.d(r,{R:()=>s,x:()=>i});var t=a(96540);const n={},l=t.createContext(n);function s(e){const r=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),t.createElement(l.Provider,{value:r},e.children)}}}]);