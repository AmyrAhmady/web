"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[87983],{28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>l});var n=r(96540);const a={},i=n.createContext(a);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(i.Provider,{value:t},e.children)}},43913:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"scripting/functions/GetPlayerTargetActor","title":"GetPlayerTargetActor","description":"Gets id of an actor which is aimed by certain player.","source":"@site/docs/scripting/functions/GetPlayerTargetActor.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerTargetActor","permalink":"/de/docs/scripting/functions/GetPlayerTargetActor","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetPlayerTargetActor.md","tags":[{"inline":true,"label":"player","permalink":"/de/docs/tags/player"}],"version":"current","frontMatter":{"title":"GetPlayerTargetActor","sidebar_label":"GetPlayerTargetActor","description":"Gets id of an actor which is aimed by certain player.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerSurfingVehicleID","permalink":"/de/docs/scripting/functions/GetPlayerSurfingVehicleID"},"next":{"title":"GetPlayerTargetPlayer","permalink":"/de/docs/scripting/functions/GetPlayerTargetPlayer"}}');var a=r(74848),i=r(28453);const s={title:"GetPlayerTargetActor",sidebar_label:"GetPlayerTargetActor",description:"Gets id of an actor which is aimed by certain player.",tags:["player"]},l=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{VersionWarn:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r,{version:"SA-MP 0.3.7"}),"\n",(0,a.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(t.p,{children:"Gets id of an actor which is aimed by certain player."}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"playerid"}),(0,a.jsx)(t.td,{children:"The ID of the player to get the target of."})]})})]}),"\n",(0,a.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsxs)(t.p,{children:["The ID of the targeted actor, or ",(0,a.jsx)(t.code,{children:"INVALID_ACTOR_ID"})," if none."]}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-c",children:'public OnPlayerUpdate(playerid)\n{\n    new\n        targetActorId = GetPlayerTargetActor(playerid),\n        string[32];\n\n    format(string, sizeof(string), "You are aiming at actor id %d", targetActorId);\n    SendClientMessage(playerid, -1, string);\n    return 1;\n}\n'})}),"\n",(0,a.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,a.jsx)(t.admonition,{type:"warning",children:(0,a.jsx)(t.p,{children:"Does not work for joypads/controllers, and after a certain distance. Does not work for the sniper rifle, as it doesn't lock on to anything and as such can't and won't return a player."})}),"\n",(0,a.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"GetPlayerCameraTargetActor",children:"GetPlayerCameraTargetActor"}),": Get the ID of the actor (if any) a player is looking at."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"GetPlayerCameraFrontVector",children:"GetPlayerCameraFrontVector"}),": Get the player's camera front vector"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"../callbacks/OnPlayerGiveDamageActor",children:"OnPlayerGiveDamageActor"}),": This callback is called when a player gives damage to an actor."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}}}]);