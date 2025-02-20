"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[74998],{28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>s});var i=r(96540);const t={},l=i.createContext(t);function a(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(l.Provider,{value:n},e.children)}},52701:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"scripting/callbacks/OnPlayerInteriorChange","title":"OnPlayerInteriorChange","description":"This callback is called when a player changes interior.","source":"@site/docs/scripting/callbacks/OnPlayerInteriorChange.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerInteriorChange","permalink":"/de/docs/scripting/callbacks/OnPlayerInteriorChange","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnPlayerInteriorChange.md","tags":[{"inline":true,"label":"player","permalink":"/de/docs/tags/player"}],"version":"current","frontMatter":{"title":"OnPlayerInteriorChange","sidebar_label":"OnPlayerInteriorChange","description":"This callback is called when a player changes interior.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerGiveDamageActor","permalink":"/de/docs/scripting/callbacks/OnPlayerGiveDamageActor"},"next":{"title":"OnPlayerKeyStateChange","permalink":"/de/docs/scripting/callbacks/OnPlayerKeyStateChange"}}');var t=r(74848),l=r(28453);const a={title:"OnPlayerInteriorChange",sidebar_label:"OnPlayerInteriorChange",description:"This callback is called when a player changes interior.",tags:["player"]},s=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"This callback is called when a player changes interior. Can be triggered by SetPlayerInterior or when a player enter/exits a building."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"playerid"}),(0,t.jsx)(n.td,{children:"The playerid who changed interior."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"newinteriorid"}),(0,t.jsx)(n.td,{children:"The interior the player is now in."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"oldinteriorid"}),(0,t.jsx)(n.td,{children:"The interior the player was in before."})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:"It is always called first in gamemode."}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'public OnPlayerInteriorChange(playerid, newinteriorid, oldinteriorid)\n{\n    new string[42];\n    format(string, sizeof(string), "You went from interior %d to interior %d!", oldinteriorid, newinteriorid);\n    SendClientMessage(playerid, COLOR_ORANGE, string);\n    return 1;\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,t.jsx)(n.p,{children:"The following callbacks might be useful, as they're related to this callback in one way or another."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"OnPlayerStateChange",children:"OnPlayerStateChange"}),": This callback is called when a player changes state."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,t.jsx)(n.p,{children:"The following functions might be useful, as they're related to this callback in one way or another."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"../functions/SetPlayerInterior",children:"SetPlayerInterior"}),": Set a player's interior."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"../functions/GetPlayerInterior",children:"GetPlayerInterior"}),": Get the current interior of a player."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"../functions/LinkVehicleToInterior",children:"LinkVehicleToInterior"}),": Change the interior that a vehicle is seen in."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}}}]);