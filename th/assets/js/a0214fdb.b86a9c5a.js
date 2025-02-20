"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[4847],{28453:(e,r,s)=>{s.d(r,{R:()=>l,x:()=>i});var n=s(96540);const t={},a=n.createContext(t);function l(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),n.createElement(a.Provider,{value:r},e.children)}},38172:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"scripting/functions/ShowPlayerMarkers","title":"ShowPlayerMarkers","description":"Toggles player markers (blips on the radar).","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/functions/ShowPlayerMarkers.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/ShowPlayerMarkers","permalink":"/th/docs/scripting/functions/ShowPlayerMarkers","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/ShowPlayerMarkers.md","tags":[{"inline":true,"label":"player","permalink":"/th/docs/tags/player"}],"version":"current","frontMatter":{"title":"ShowPlayerMarkers","sidebar_label":"ShowPlayerMarkers","description":"Toggles player markers (blips on the radar).","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"ShowPlayerDialog","permalink":"/th/docs/scripting/functions/ShowPlayerDialog"},"next":{"title":"ShowPlayerNameTagForPlayer","permalink":"/th/docs/scripting/functions/ShowPlayerNameTagForPlayer"}}');var t=s(74848),a=s(28453);const l={title:"ShowPlayerMarkers",sidebar_label:"ShowPlayerMarkers",description:"Toggles player markers (blips on the radar).",tags:["player"]},i=void 0,o={},d=[{value:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",level:2},{value:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",id:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",level:2},{value:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",level:2},{value:"Marker Modes",id:"marker-modes",level:2},{value:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",id:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",level:2},{value:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",level:2}];function c(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",children:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22"}),"\n",(0,t.jsx)(r.p,{children:"Toggles player markers (blips on the radar). Must be used when the server starts (OnGameModeInit). For other times, see SetPlayerMarkerForPlayer."}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Name"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"mode"}),(0,t.jsxs)(r.td,{children:["The ",(0,t.jsx)(r.a,{href:"#marker-modes",children:"mode"})," to use for markers. They can be streamed, meaning they are only visible to nearby players. See table below."]})]})})]}),"\n",(0,t.jsx)(r.h2,{id:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",children:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19"}),"\n",(0,t.jsx)(r.p,{children:"This function does not return any specific values."}),"\n",(0,t.jsx)(r.h2,{id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",children:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-c",children:"public OnGameModeInit()\n{\n    // Player markers only visible to nearby players\n    ShowPlayerMarkers(PLAYER_MARKERS_MODE_STREAMED);\n}\n"})}),"\n",(0,t.jsx)(r.h2,{id:"marker-modes",children:"Marker Modes"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"ID"}),(0,t.jsx)(r.th,{children:"MODE"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"0"}),(0,t.jsx)(r.td,{children:"PLAYER_MARKERS_MODE_OFF"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"1"}),(0,t.jsx)(r.td,{children:"PLAYER_MARKERS_MODE_GLOBAL"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"2"}),(0,t.jsx)(r.td,{children:"PLAYER_MARKERS_MODE_STREAMED"})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",children:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01"}),"\n",(0,t.jsx)(r.admonition,{type:"tip",children:(0,t.jsx)(r.p,{children:"It is also possible to set a player's color to a color that has full transparency (no alpha value). This makes it possible to show markers on a per-player basis."})}),"\n",(0,t.jsx)(r.h2,{id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",children:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"SetPlayerMarkerForPlayer: Set a player's marker."}),"\n",(0,t.jsx)(r.li,{children:"LimitPlayerMarkerRadius: Limit the player marker radius."}),"\n",(0,t.jsx)(r.li,{children:"ShowNameTags: Set nametags on or off."}),"\n",(0,t.jsx)(r.li,{children:"SetPlayerColor: Set a player's color."}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}}}]);