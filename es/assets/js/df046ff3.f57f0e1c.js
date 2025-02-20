"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[88060],{28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>l});var o=r(96540);const s={},a=o.createContext(s);function i(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(a.Provider,{value:n},e.children)}},72006:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>t,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"scripting/functions/IsPlayerInGangZone","title":"IsPlayerInGangZone","description":"Check if the player in gangzone","source":"@site/docs/scripting/functions/IsPlayerInGangZone.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/IsPlayerInGangZone","permalink":"/es/docs/scripting/functions/IsPlayerInGangZone","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/IsPlayerInGangZone.md","tags":[{"inline":true,"label":"player","permalink":"/es/docs/tags/player"},{"inline":true,"label":"gangzone","permalink":"/es/docs/tags/gangzone"}],"version":"current","frontMatter":{"title":"IsPlayerInGangZone","sidebar_label":"IsPlayerInGangZone","description":"Check if the player in gangzone","tags":["player","gangzone"]},"sidebar":"docsSidebar","previous":{"title":"IsPlayerInDriveByMode","permalink":"/es/docs/scripting/functions/IsPlayerInDriveByMode"},"next":{"title":"IsPlayerInModShop","permalink":"/es/docs/scripting/functions/IsPlayerInModShop"}}');var s=r(74848),a=r(28453);const i={title:"IsPlayerInGangZone",sidebar_label:"IsPlayerInGangZone",description:"Check if the player in gangzone",tags:["player","gangzone"]},l=void 0,t={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const n={a:"a",admonition:"admonition",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components},{VersionWarn:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r,{version:"omp v1.1.0.2612"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Check if the player in gangzone."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"playerid"}),(0,s.jsx)(n.td,{children:"The ID of the player to check if he is in a gangzone."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"zoneid"}),(0,s.jsx)(n.td,{children:"The ID of the gangzone."})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"true"})," - The player is in gangzone."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"false"})," - The player is not in gangzone."]}),"\n",(0,s.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["This function is for open.mp, not SA-MP. To use with SA-MP, you need the ",(0,s.jsx)(n.a,{href:"https://github.com/IS4Code/YSF/releases",children:"YSF"})," plugin."]})}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["This function cannot be used without ",(0,s.jsx)(n.a,{href:"UseGangZoneCheck",children:"UseGangZoneCheck"})," being called first."]})}),"\n",(0,s.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"GangZoneDestroy",children:"GangZoneDestroy"}),": Destroy a gangzone."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"GangZoneShowForPlayer",children:"GangZoneShowForPlayer"}),": Show a gangzone for a player."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"GangZoneShowForAll",children:"GangZoneShowForAll"}),": Show a gangzone for all players."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"GangZoneHideForPlayer",children:"GangZoneHideForPlayer"}),": Hide a gangzone for a player."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"GangZoneHideForAll",children:"GangZoneHideForAll"}),": Hide a gangzone for all players."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"GangZoneFlashForPlayer",children:"GangZoneFlashForPlayer"}),": Make a gangzone flash for a player."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"GangZoneFlashForAll",children:"GangZoneFlashForAll"}),": Make a gangzone flash for all players."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"GangZoneStopFlashForPlayer",children:"GangZoneStopFlashForPlayer"}),": Stop a gangzone flashing for a player."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"GangZoneStopFlashForAll",children:"GangZoneStopFlashForAll"}),": Stop a gangzone flashing for all players."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"IsValidGangZone",children:"IsValidGangZone"}),": Check if the gangzone valid."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}}}]);