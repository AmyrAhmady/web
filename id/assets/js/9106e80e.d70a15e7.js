"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[92137],{28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>l});var t=i(96540);const s={},a=t.createContext(s);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(a.Provider,{value:n},e.children)}},96137:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"scripting/functions/ClearAnimations","title":"ClearAnimations","description":"Clears all animations for the given player (it also cancels all current tasks such as jetpacking, parachuting, entering vehicles, driving (removes player out of vehicle), swimming, etc).","source":"@site/docs/scripting/functions/ClearAnimations.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/ClearAnimations","permalink":"/id/docs/scripting/functions/ClearAnimations","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/ClearAnimations.md","tags":[{"inline":true,"label":"player","permalink":"/id/docs/tags/player"},{"inline":true,"label":"animation","permalink":"/id/docs/tags/animation"}],"version":"current","frontMatter":{"title":"ClearAnimations","sidebar_label":"ClearAnimations","description":"Clears all animations for the given player (it also cancels all current tasks such as jetpacking, parachuting, entering vehicles, driving (removes player out of vehicle), swimming, etc).","tags":["player","animation"]},"sidebar":"docsSidebar","previous":{"title":"ClearActorAnimations","permalink":"/id/docs/scripting/functions/ClearActorAnimations"},"next":{"title":"ClearBanList","permalink":"/id/docs/scripting/functions/ClearBanList"}}');var s=i(74848),a=i(28453);const r={title:"ClearAnimations",sidebar_label:"ClearAnimations",description:"Clears all animations for the given player (it also cancels all current tasks such as jetpacking, parachuting, entering vehicles, driving (removes player out of vehicle), swimming, etc).",tags:["player","animation"]},l=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Clears all animations for the given player (it also cancels all current tasks such as jetpacking, parachuting, entering vehicles, driving (removes player out of vehicle), swimming, etc)."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"playerid"}),(0,s.jsx)(n.td,{children:"The ID of the player to clear the animations of."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["FORCE_SYNC",":forceSync"]}),(0,s.jsxs)(n.td,{children:["Set to ",(0,s.jsx)(n.code,{children:"SYNC_ALL"})," to force playerid to sync the animation with other players in streaming radius (default=SYNC_NONE)"]})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(n.p,{children:["This function always returns ",(0,s.jsx)(n.strong,{children:"true"}),", even when the player specified is not connected."]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, "/animclear", true))\n    {\n        ClearAnimations(playerid);\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"ClearAnimations doesn't do anything when the animation ends if we pass 'true' for the freeze parameter in ApplyAnimation."})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"Unlike some other ways to remove player from a vehicle, this will also reset the vehicle's velocity to zero, instantly stopping the car. Player will appear on top of the vehicle with the same location as he was in his car seat."})}),"\n",(0,s.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"ApplyAnimation",children:"ApplyAnimation"}),": Apply an animation to a player."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}}}]);