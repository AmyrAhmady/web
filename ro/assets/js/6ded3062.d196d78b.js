"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[55915],{28453:(e,n,a)=>{a.d(n,{R:()=>t,x:()=>c});var l=a(96540);const i={},r=l.createContext(i);function t(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),l.createElement(r.Provider,{value:n},e.children)}},68695:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>t,metadata:()=>l,toc:()=>o});const l=JSON.parse('{"id":"scripting/callbacks/OnPlayerClickGangZone","title":"OnPlayerClickGangZone","description":"This callback is called when a player clicked a gangzone on the pause menu map (by right-clicking).","source":"@site/docs/scripting/callbacks/OnPlayerClickGangZone.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerClickGangZone","permalink":"/ro/docs/scripting/callbacks/OnPlayerClickGangZone","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnPlayerClickGangZone.md","tags":[{"inline":true,"label":"player","permalink":"/ro/docs/tags/player"},{"inline":true,"label":"gangzone","permalink":"/ro/docs/tags/gangzone"}],"version":"current","frontMatter":{"title":"OnPlayerClickGangZone","sidebar_label":"OnPlayerClickGangZone","description":"This callback is called when a player clicked a gangzone on the pause menu map (by right-clicking).","tags":["player","gangzone"]},"sidebar":"docsSidebar","previous":{"title":"OnPickupStreamOut","permalink":"/ro/docs/scripting/callbacks/OnPickupStreamOut"},"next":{"title":"OnPlayerClickMap","permalink":"/ro/docs/scripting/callbacks/OnPlayerClickMap"}}');var i=a(74848),r=a(28453);const t={title:"OnPlayerClickGangZone",sidebar_label:"OnPlayerClickGangZone",description:"This callback is called when a player clicked a gangzone on the pause menu map (by right-clicking).",tags:["player","gangzone"]},c=void 0,s={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{VersionWarn:a}=n;return a||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a,{name:"callback",version:"omp v1.1.0.2612"}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"This callback is called when a player clicked a gangzone on the pause menu map (by right-clicking)."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"playerid"}),(0,i.jsx)(n.td,{children:"The ID of the player that clicked a gangzone"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"zoneid"}),(0,i.jsx)(n.td,{children:"The ID of the gangzone the player clicked"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:"This callback does not handle returns."}),"\n",(0,i.jsx)(n.p,{children:"It is always called first in gamemode."}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'public OnPlayerClickGangZone(playerid, zoneid)\n{\n    new string[128];\n    format(string, sizeof(string), "You are click gangzone %i", zoneid);\n    SendClientMessage(playerid, 0xFFFFFFFF, string);\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsx)(n.p,{children:"The following functions might be useful, as they're related to this callback in one way or another."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../functions/GangZoneCreate",children:"GangZoneCreate"}),": Create a gangzone (colored radar area)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../functions/GangZoneDestroy",children:"GangZoneDestroy"}),": Destroy a gangzone."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);