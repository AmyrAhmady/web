"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[69292],{28453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>s});var l=a(96540);const r={},t=l.createContext(r);function i(e){const n=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),l.createElement(t.Provider,{value:n},e.children)}},55307:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>o});const l=JSON.parse('{"id":"scripting/callbacks/OnPlayerLeaveGangZone","title":"OnPlayerLeaveGangZone","description":"This callback is called when a player exited a gangzone","source":"@site/docs/scripting/callbacks/OnPlayerLeaveGangZone.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerLeaveGangZone","permalink":"/id/docs/scripting/callbacks/OnPlayerLeaveGangZone","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnPlayerLeaveGangZone.md","tags":[{"inline":true,"label":"player","permalink":"/id/docs/tags/player"},{"inline":true,"label":"gangzone","permalink":"/id/docs/tags/gangzone"}],"version":"current","frontMatter":{"title":"OnPlayerLeaveGangZone","sidebar_label":"OnPlayerLeaveGangZone","description":"This callback is called when a player exited a gangzone","tags":["player","gangzone"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerLeaveCheckpoint","permalink":"/id/docs/scripting/callbacks/OnPlayerLeaveCheckpoint"},"next":{"title":"OnPlayerLeavePlayerGangZone","permalink":"/id/docs/scripting/callbacks/OnPlayerLeavePlayerGangZone"}}');var r=a(74848),t=a(28453);const i={title:"OnPlayerLeaveGangZone",sidebar_label:"OnPlayerLeaveGangZone",description:"This callback is called when a player exited a gangzone",tags:["player","gangzone"]},s=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components},{VersionWarn:a}=n;return a||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a,{name:"callback",version:"omp v1.1.0.2612"}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"This callback is called when a player exited a gangzone"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"playerid"}),(0,r.jsx)(n.td,{children:"The ID of the player that exited the gangzone."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"zoneid"}),(0,r.jsx)(n.td,{children:"The ID of the gangzone the player exited."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:"It is always called first in gamemode."}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'public OnPlayerLeaveGangZone(playerid, zoneid)\n{\n    new string[128];\n    format(string, sizeof(string), "You are leaving gangzone %i", zoneid);\n    SendClientMessage(playerid, 0xFFFFFFFF, string);\n    return 1;\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,r.jsx)(n.p,{children:"The following callbacks might be useful, as they're related to this callback in one way or another."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"OnPlayerEnterGangZone",children:"OnPlayerEnterGangZone"}),": This callback is called when a player enters a gangzone."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsx)(n.p,{children:"The following functions might be useful, as they're related to this callback in one way or another."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../functions/GangZoneCreate",children:"GangZoneCreate"}),": Create a gangzone (colored radar area)."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../functions/GangZoneDestroy",children:"GangZoneDestroy"}),": Destroy a gangzone."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);