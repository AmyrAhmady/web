"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[83083],{28453:(n,e,r)=>{r.d(e,{R:()=>i,x:()=>l});var o=r(96540);const s={},a=o.createContext(s);function i(n){const e=o.useContext(a);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:i(n.components),o.createElement(a.Provider,{value:e},n.children)}},40075:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>t,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"scripting/functions/IsPlayerInGangZone","title":"IsPlayerInGangZone","description":"Check if the player in gangzone","source":"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/scripting/functions/IsPlayerInGangZone.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/IsPlayerInGangZone","permalink":"/zh-cn/docs/scripting/functions/IsPlayerInGangZone","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/IsPlayerInGangZone.md","tags":[{"inline":true,"label":"player","permalink":"/zh-cn/docs/tags/player"},{"inline":true,"label":"gangzone","permalink":"/zh-cn/docs/tags/gangzone"}],"version":"current","frontMatter":{"title":"IsPlayerInGangZone","sidebar_label":"IsPlayerInGangZone","description":"Check if the player in gangzone","tags":["player","gangzone"]},"sidebar":"docsSidebar","previous":{"title":"IsPlayerInDriveByMode","permalink":"/zh-cn/docs/scripting/functions/IsPlayerInDriveByMode"},"next":{"title":"IsPlayerInModShop","permalink":"/zh-cn/docs/scripting/functions/IsPlayerInModShop"}}');var s=r(74848),a=r(28453);const i={title:"IsPlayerInGangZone",sidebar_label:"IsPlayerInGangZone",description:"Check if the player in gangzone",tags:["player","gangzone"]},l=void 0,t={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(n){const e={a:"a",admonition:"admonition",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...n.components},{VersionWarn:r}=e;return r||function(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r,{version:"omp v1.1.0.2612"}),"\n",(0,s.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(e.p,{children:"Check if the player in gangzone."}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Name"}),(0,s.jsx)(e.th,{children:"Description"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"playerid"}),(0,s.jsx)(e.td,{children:"The ID of the player to check if he is in a gangzone."})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"zoneid"}),(0,s.jsx)(e.td,{children:"The ID of the gangzone."})]})]})]}),"\n",(0,s.jsx)(e.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"true"})," - The player is in gangzone."]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"false"})," - The player is not in gangzone."]}),"\n",(0,s.jsx)(e.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsx)(e.admonition,{type:"warning",children:(0,s.jsxs)(e.p,{children:["This function is for open.mp, not SA-MP. To use with SA-MP, you need the ",(0,s.jsx)(e.a,{href:"https://github.com/IS4Code/YSF/releases",children:"YSF"})," plugin."]})}),"\n",(0,s.jsx)(e.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"GangZoneDestroy",children:"GangZoneDestroy"}),": Destroy a gangzone."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"GangZoneShowForPlayer",children:"GangZoneShowForPlayer"}),": Show a gangzone for a player."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"GangZoneShowForAll",children:"GangZoneShowForAll"}),": Show a gangzone for all players."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"GangZoneHideForPlayer",children:"GangZoneHideForPlayer"}),": Hide a gangzone for a player."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"GangZoneHideForAll",children:"GangZoneHideForAll"}),": Hide a gangzone for all players."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"GangZoneFlashForPlayer",children:"GangZoneFlashForPlayer"}),": Make a gangzone flash for a player."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"GangZoneFlashForAll",children:"GangZoneFlashForAll"}),": Make a gangzone flash for all players."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"GangZoneStopFlashForPlayer",children:"GangZoneStopFlashForPlayer"}),": Stop a gangzone flashing for a player."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"GangZoneStopFlashForAll",children:"GangZoneStopFlashForAll"}),": Stop a gangzone flashing for all players."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.a,{href:"IsValidGangZone",children:"IsValidGangZone"}),": Check if the gangzone valid."]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}}}]);