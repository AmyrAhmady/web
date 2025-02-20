"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[58761],{28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>i});var n=r(96540);const o={},l=n.createContext(o);function s(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(l.Provider,{value:t},e.children)}},31361:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"scripting/functions/GetPlayerColor","title":"GetPlayerColor","description":"Gets the color of the player\'s name and radar marker.","source":"@site/docs/scripting/functions/GetPlayerColor.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerColor","permalink":"/vi/docs/scripting/functions/GetPlayerColor","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetPlayerColor.md","tags":[{"inline":true,"label":"player","permalink":"/vi/docs/tags/player"}],"version":"current","frontMatter":{"title":"GetPlayerColor","sidebar_label":"GetPlayerColor","description":"Gets the color of the player\'s name and radar marker.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerClass","permalink":"/vi/docs/scripting/functions/GetPlayerClass"},"next":{"title":"GetPlayerCustomSkin","permalink":"/vi/docs/scripting/functions/GetPlayerCustomSkin"}}');var o=r(74848),l=r(28453);const s={title:"GetPlayerColor",sidebar_label:"GetPlayerColor",description:"Gets the color of the player's name and radar marker.",tags:["player"]},i=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,o.jsx)(t.p,{children:"Gets the color of the player's name and radar marker. Only works after SetPlayerColor."}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Name"}),(0,o.jsx)(t.th,{children:"Description"})]})}),(0,o.jsx)(t.tbody,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"playerid"}),(0,o.jsx)(t.td,{children:"The ID of the player to get the color of."})]})})]}),"\n",(0,o.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,o.jsx)(t.p,{children:"The player's color. 0 if no color set or player not connected."}),"\n",(0,o.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-c",children:"SendClientMessage(playerid, GetPlayerColor(playerid), \"This message is in your color\xa0:)\");\n\nnew output[144];\nformat(output, sizeof(output), \"You can also use the player's color for {%06x}color embedding!\", GetPlayerColor(playerid) >>> 8);\nSendClientMessage(playerid, -1, output);\n// will output the message in white, with ''color embedding'' in the player's color\n"})}),"\n",(0,o.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,o.jsx)(t.admonition,{type:"warning",children:(0,o.jsxs)(t.p,{children:["GetPlayerColor will return nothing (0) unless SetPlayerColor has been used first. Click ",(0,o.jsx)(t.a,{href:"../../tutorials/colorfix",children:"HERE"})," for a fix."]})}),"\n",(0,o.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"SetPlayerColor",children:"SetPlayerColor"}),": Set a player's color."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"ChangeVehicleColor",children:"ChangeVehicleColor"}),": Set the color of a vehicle."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}}}]);