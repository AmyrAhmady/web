"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[55915],{28453:(e,n,a)=>{a.d(n,{R:()=>r,x:()=>c});var l=a(96540);const t={},i=l.createContext(t);function r(e){const n=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),l.createElement(i.Provider,{value:n},e.children)}},68695:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>o});const l=JSON.parse('{"id":"scripting/callbacks/OnPlayerClickGangZone","title":"OnPlayerClickGangZone","description":"This callback is called when a player clicked a gangzone on the pause menu map (by right-clicking).","source":"@site/docs/scripting/callbacks/OnPlayerClickGangZone.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerClickGangZone","permalink":"/th/docs/scripting/callbacks/OnPlayerClickGangZone","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnPlayerClickGangZone.md","tags":[{"inline":true,"label":"player","permalink":"/th/docs/tags/player"},{"inline":true,"label":"gangzone","permalink":"/th/docs/tags/gangzone"}],"version":"current","frontMatter":{"title":"OnPlayerClickGangZone","sidebar_label":"OnPlayerClickGangZone","description":"This callback is called when a player clicked a gangzone on the pause menu map (by right-clicking).","tags":["player","gangzone"]},"sidebar":"docsSidebar","previous":{"title":"OnPickupStreamOut","permalink":"/th/docs/scripting/callbacks/OnPickupStreamOut"},"next":{"title":"OnPlayerClickMap","permalink":"/th/docs/scripting/callbacks/OnPlayerClickMap"}}');var t=a(74848),i=a(28453);const r={title:"OnPlayerClickGangZone",sidebar_label:"OnPlayerClickGangZone",description:"This callback is called when a player clicked a gangzone on the pause menu map (by right-clicking).",tags:["player","gangzone"]},c=void 0,s={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{VersionWarn:a}=n;return a||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a,{name:"callback",version:"omp v1.1.0.2612"}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"This callback is called when a player clicked a gangzone on the pause menu map (by right-clicking)."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"playerid"}),(0,t.jsx)(n.td,{children:"The ID of the player that clicked a gangzone"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"zoneid"}),(0,t.jsx)(n.td,{children:"The ID of the gangzone the player clicked"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:"This callback does not handle returns."}),"\n",(0,t.jsx)(n.p,{children:"It is always called first in gamemode."}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'public OnPlayerClickGangZone(playerid, zoneid)\n{\n    new string[128];\n    format(string, sizeof(string), "You are click gangzone %i", zoneid);\n    SendClientMessage(playerid, 0xFFFFFFFF, string);\n    return 1;\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,t.jsx)(n.p,{children:"The following functions might be useful, as they're related to this callback in one way or another."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"../functions/GangZoneCreate",children:"GangZoneCreate"}),": Create a gangzone (colored radar area)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"../functions/GangZoneDestroy",children:"GangZoneDestroy"}),": Destroy a gangzone."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}}}]);