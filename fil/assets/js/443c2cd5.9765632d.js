"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[88017],{24574:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});const l=JSON.parse('{"id":"scripting/functions/SetPlayerMarkerForPlayer","title":"SetPlayerMarkerForPlayer","description":"Change the colour of a player\'s nametag and radar blip for another player.","source":"@site/docs/scripting/functions/SetPlayerMarkerForPlayer.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetPlayerMarkerForPlayer","permalink":"/fil/docs/scripting/functions/SetPlayerMarkerForPlayer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/SetPlayerMarkerForPlayer.md","tags":[{"inline":true,"label":"player","permalink":"/fil/docs/tags/player"}],"version":"current","frontMatter":{"title":"SetPlayerMarkerForPlayer","sidebar_label":"SetPlayerMarkerForPlayer","description":"Change the colour of a player\'s nametag and radar blip for another player.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"SetPlayerMapIcon","permalink":"/fil/docs/scripting/functions/SetPlayerMapIcon"},"next":{"title":"SetPlayerName","permalink":"/fil/docs/scripting/functions/SetPlayerName"}}');var t=a(74848),n=a(28453);const i={title:"SetPlayerMarkerForPlayer",sidebar_label:"SetPlayerMarkerForPlayer",description:"Change the colour of a player's nametag and radar blip for another player.",tags:["player"]},o=void 0,s={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(r.p,{children:"Change the colour of a player's nametag and radar blip for another player."}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Name"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"playerid"}),(0,t.jsx)(r.td,{children:"The player that will see the player's changed blip/nametag color"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"targetid"}),(0,t.jsx)(r.td,{children:"The player whose color will be changed"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"colour"}),(0,t.jsx)(r.td,{children:"New color. Supports alpha values."})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(r.p,{children:"This function does not return any specific values."}),"\n",(0,t.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-c",children:"// Make player 42 see player 1 as a red marker\nSetPlayerMarkerForPlayer(42, 1, 0xFF0000FF);\n\n// Make the players marker an invisible white (chat will be white but marker will be gone).\nSetPlayerMarkerForPlayer(42, 1, 0xFFFFFF00);\n\n// Make the players marker invisible to the player while keeping chat colour the same. Will only work correctly if SetPlayerColor has been used:\nSetPlayerMarkerForPlayer(42, 1, (GetPlayerColor(1) & 0xFFFFFF00));\n\n// Make the players marker fully opaque (solid) to the player while keeping chat colour the same. Will only work correctly if SetPlayerColor has been used:\nSetPlayerMarkerForPlayer(42, 1, (GetPlayerColor(1) | 0x000000FF));\n"})}),"\n",(0,t.jsx)(r.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"ShowPlayerMarkers",children:"ShowPlayerMarkers"}),": Decide if the server should show markers on the radar."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"LimitPlayerMarkerRadius",children:"LimitPlayerMarkerRadius"}),": Limit the player marker radius."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"SetPlayerColor",children:"SetPlayerColor"}),": Set a player's color."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"ShowPlayerNameTagForPlayer",children:"ShowPlayerNameTagForPlayer"}),": Show or hide a nametag for a certain player."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"GetPlayerMarkerForPlayer",children:"GetPlayerMarkerForPlayer"}),": Gets the colour of a player's nametag and radar blip for another player."]}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,r,a)=>{a.d(r,{R:()=>i,x:()=>o});var l=a(96540);const t={},n=l.createContext(t);function i(e){const r=l.useContext(n);return l.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),l.createElement(n.Provider,{value:r},e.children)}}}]);