"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[88010],{28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var r=t(96540);const l={},s=r.createContext(l);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),r.createElement(s.Provider,{value:n},e.children)}},76678:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"scripting/functions/SetPlayerDrunkLevel","title":"SetPlayerDrunkLevel","description":"Sets the drunk level of a player which makes the player\'s camera sway and vehicles hard to control.","source":"@site/docs/scripting/functions/SetPlayerDrunkLevel.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetPlayerDrunkLevel","permalink":"/fil/docs/scripting/functions/SetPlayerDrunkLevel","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/SetPlayerDrunkLevel.md","tags":[{"inline":true,"label":"player","permalink":"/fil/docs/tags/player"}],"version":"current","frontMatter":{"title":"SetPlayerDrunkLevel","sidebar_label":"SetPlayerDrunkLevel","description":"Sets the drunk level of a player which makes the player\'s camera sway and vehicles hard to control.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"SetPlayerColor","permalink":"/fil/docs/scripting/functions/SetPlayerColor"},"next":{"title":"SetPlayerFacingAngle","permalink":"/fil/docs/scripting/functions/SetPlayerFacingAngle"}}');var l=t(74848),s=t(28453);const i={title:"SetPlayerDrunkLevel",sidebar_label:"SetPlayerDrunkLevel",description:"Sets the drunk level of a player which makes the player's camera sway and vehicles hard to control.",tags:["player"]},a=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"Sets the drunk level of a player which makes the player's camera sway and vehicles hard to control."}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Name"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"playerid"}),(0,l.jsx)(n.td,{children:"The ID of the player to set the drunkenness of."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"level"}),(0,l.jsx)(n.td,{children:"The level of drunkenness to set."})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"true"})," - The function executed successfully."]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"false"})," - The function failed to execute. This means the player is not connected."]}),"\n",(0,l.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (strcmp(cmdtext, "/drunk", true) == 0)\n    {\n        SetPlayerDrunkLevel(playerid, 4000);\n        SendClientMessage(playerid, 0xFFFFFFAA, "You are now drunk; don\'t drink and drive!");\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Players' drunk level will automatically decrease over time, based on their FPS (players with 50 FPS will lose 50 'levels' per second. This is useful for determining a player's FPS!)."}),"\n",(0,l.jsx)(n.li,{children:"In 0.3a the drunk level will decrement and stop at 2000."}),"\n",(0,l.jsx)(n.li,{children:"In 0.3b+ the drunk level decrements to zero."}),"\n",(0,l.jsx)(n.li,{children:"Levels over 2000 make the player drunk (camera swaying and vehicles difficult to control)."}),"\n",(0,l.jsx)(n.li,{children:"Max drunk level is 50000. While the drunk level is above 5000, the player's HUD (radar etc.) will be hidden."}),"\n"]})}),"\n",(0,l.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"GetPlayerDrunkLevel",children:"GetPlayerDrunkLevel"}),": Returns the current drunk level of a player."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}}}]);