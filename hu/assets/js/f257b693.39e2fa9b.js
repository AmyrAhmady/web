"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[45319],{28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>s});var t=n(96540);const l={},o=t.createContext(l);function i(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),t.createElement(o.Provider,{value:r},e.children)}},32432:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"scripting/functions/SetPlayerColor","title":"SetPlayerColor","description":"Set the colour of a player\'s nametag and marker (radar blip).","source":"@site/docs/scripting/functions/SetPlayerColor.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetPlayerColor","permalink":"/hu/docs/scripting/functions/SetPlayerColor","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/SetPlayerColor.md","tags":[{"inline":true,"label":"player","permalink":"/hu/docs/tags/player"}],"version":"current","frontMatter":{"title":"SetPlayerColor","sidebar_label":"SetPlayerColor","description":"Set the colour of a player\'s nametag and marker (radar blip).","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"SetPlayerCheckpoint","permalink":"/hu/docs/scripting/functions/SetPlayerCheckpoint"},"next":{"title":"SetPlayerDrunkLevel","permalink":"/hu/docs/scripting/functions/SetPlayerDrunkLevel"}}');var l=n(74848),o=n(28453);const i={title:"SetPlayerColor",sidebar_label:"SetPlayerColor",description:"Set the colour of a player's nametag and marker (radar blip).",tags:["player"]},s=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Resources",id:"related-resources",level:2}];function d(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(r.p,{children:"Set the colour of a player's nametag and marker (radar blip)."}),"\n",(0,l.jsxs)(r.table,{children:[(0,l.jsx)(r.thead,{children:(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.th,{children:"Name"}),(0,l.jsx)(r.th,{children:"Description"})]})}),(0,l.jsxs)(r.tbody,{children:[(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:"playerid"}),(0,l.jsx)(r.td,{children:"The ID of the player whose color to set."})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:"colour"}),(0,l.jsx)(r.td,{children:"The color to set. Supports alpha values."})]})]})]}),"\n",(0,l.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsx)(r.p,{children:"This function does not return any specific values."}),"\n",(0,l.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-c",children:"// Red, using hexadecimal notation:\nSetPlayerColor(playerid, 0xFF0000FF);\n\n//Red, using decimal notation:\nSetPlayerColor(playerid, 4278190335);\n"})}),"\n",(0,l.jsx)(r.h2,{id:"notes",children:"Notes"}),"\n",(0,l.jsx)(r.admonition,{type:"tip",children:(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsx)(r.li,{children:"This function will change player's color for everyone, even if player's color was changed with SetPlayerMarkerForPlayer for any other player."}),"\n",(0,l.jsx)(r.li,{children:"If used under OnPlayerConnect, the affecting player will not see the color in the TAB menu."}),"\n"]})}),"\n",(0,l.jsx)(r.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"SetPlayerMarkerForPlayer",children:"SetPlayerMarkerForPlayer"}),": Set a player's marker."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"GetPlayerColor",children:"GetPlayerColor"}),": Check the color of a player."]}),"\n",(0,l.jsxs)(r.li,{children:[(0,l.jsx)(r.a,{href:"ChangeVehicleColor",children:"ChangeVehicleColor"}),": Set the color of a vehicle."]}),"\n"]}),"\n",(0,l.jsx)(r.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,l.jsxs)(r.ul,{children:["\n",(0,l.jsx)(r.li,{children:(0,l.jsx)(r.a,{href:"../resources/colorslist",children:"Color List"})}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,l.jsx)(r,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}}}]);