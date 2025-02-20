"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[92977],{6281:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"scripting/callbacks/OnPlayerExitedMenu","title":"OnPlayerExitedMenu","description":"This callback is called when a player exits a menu.","source":"@site/docs/scripting/callbacks/OnPlayerExitedMenu.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerExitedMenu","permalink":"/ar/docs/scripting/callbacks/OnPlayerExitedMenu","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnPlayerExitedMenu.md","tags":[{"inline":true,"label":"player","permalink":"/ar/docs/tags/player"},{"inline":true,"label":"menu","permalink":"/ar/docs/tags/menu"}],"version":"current","frontMatter":{"title":"OnPlayerExitedMenu","sidebar_label":"OnPlayerExitedMenu","description":"This callback is called when a player exits a menu.","tags":["player","menu"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerExitVehicle","permalink":"/ar/docs/scripting/callbacks/OnPlayerExitVehicle"},"next":{"title":"OnPlayerFinishedDownloading","permalink":"/ar/docs/scripting/callbacks/OnPlayerFinishedDownloading"}}');var t=l(74848),i=l(28453);const r={title:"OnPlayerExitedMenu",sidebar_label:"OnPlayerExitedMenu",description:"This callback is called when a player exits a menu.",tags:["player","menu"]},s=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2},{value:"Related Functions",id:"related-functions",level:2}];function o(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"This callback is called when a player exits a menu."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"playerid"}),(0,t.jsx)(n.td,{children:"The ID of the player that exited the menu"})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:"It is always called first in gamemode."}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"public OnPlayerExitedMenu(playerid)\n{\n    TogglePlayerControllable(playerid, true); // unfreeze the player when they exit a menu\n    return 1;\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,t.jsx)(n.p,{children:"The following callbacks might be useful, as they're related to this callback in one way or another."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"OnPlayerSelectedMenuRow",children:"OnPlayerSelectedMenuRow"}),": This callback is called when a player selected a row in a menu."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,t.jsx)(n.p,{children:"The following functions might be useful, as they're related to this callback in one way or another."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"../functions/CreateMenu",children:"CreateMenu"}),": Create a menu."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"../functions/DestroyMenu",children:"DestroyMenu"}),": Destroy a menu."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},28453:(e,n,l)=>{l.d(n,{R:()=>r,x:()=>s});var a=l(96540);const t={},i=a.createContext(t);function r(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);