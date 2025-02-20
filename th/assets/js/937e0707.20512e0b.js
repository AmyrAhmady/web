"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[73587],{28453:(e,n,a)=>{a.d(n,{R:()=>s,x:()=>i});var r=a(96540);const l={},t=r.createContext(l);function s(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),r.createElement(t.Provider,{value:n},e.children)}},54394:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"scripting/callbacks/OnPlayerEnterPlayerGangZone","title":"OnPlayerEnterPlayerGangZone","description":"This callback is called when a player enters a player gangzone","source":"@site/docs/scripting/callbacks/OnPlayerEnterPlayerGangZone.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerEnterPlayerGangZone","permalink":"/th/docs/scripting/callbacks/OnPlayerEnterPlayerGangZone","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnPlayerEnterPlayerGangZone.md","tags":[{"inline":true,"label":"player","permalink":"/th/docs/tags/player"},{"inline":true,"label":"gangzone","permalink":"/th/docs/tags/gangzone"}],"version":"current","frontMatter":{"title":"OnPlayerEnterPlayerGangZone","sidebar_label":"OnPlayerEnterPlayerGangZone","description":"This callback is called when a player enters a player gangzone","tags":["player","gangzone"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerEnterGangZone","permalink":"/th/docs/scripting/callbacks/OnPlayerEnterGangZone"},"next":{"title":"OnPlayerEnterRaceCheckpoint","permalink":"/th/docs/scripting/callbacks/OnPlayerEnterRaceCheckpoint"}}');var l=a(74848),t=a(28453);const s={title:"OnPlayerEnterPlayerGangZone",sidebar_label:"OnPlayerEnterPlayerGangZone",description:"This callback is called when a player enters a player gangzone",tags:["player","gangzone"]},i=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components},{VersionWarn:a}=n;return a||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{name:"callback",version:"omp v1.1.0.2612"}),"\n",(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"This callback is called when a player enters a player gangzone."}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Name"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"playerid"}),(0,l.jsx)(n.td,{children:"The ID of the player that entered the player gangzone."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"zoneid"}),(0,l.jsx)(n.td,{children:"The ID of the player gangzone the player entered."})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsx)(n.p,{children:"It is always called first in gamemode."}),"\n",(0,l.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:'public OnPlayerEnterPlayerGangZone(playerid, zoneid)\n{\n    new string[128];\n    format(string, sizeof(string), "You are entering player gangzone %i", zoneid);\n    SendClientMessage(playerid, 0xFFFFFFFF, string);\n    return 1;\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,l.jsx)(n.p,{children:"The following callbacks might be useful, as they're related to this callback in one way or another."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"OnPlayerLeavePlayerGangZone",children:"OnPlayerLeavePlayerGangZone"}),": This callback is called when a player exited a player gangzone."]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsx)(n.p,{children:"The following functions might be useful, as they're related to this callback in one way or another."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../functions/CreatePlayerGangZone",children:"CreatePlayerGangZone"}),": Create player gangzone."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../functions/PlayerGangZoneDestroy",children:"PlayerGangZoneDestroy"}),": Destroy player gangzone."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../functions/UsePlayerGangZoneCheck",children:"UsePlayerGangZoneCheck"}),": Enables the callback when a player entered this zone."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}}}]);