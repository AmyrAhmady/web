"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[48414],{28453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>s});var o=r(96540);const l={},a=o.createContext(l);function t(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),o.createElement(a.Provider,{value:n},e.children)}},59742:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"scripting/functions/GangZoneGetColourForPlayer","title":"GangZoneGetColourForPlayer","description":"Get the colour of a gangzone for player","source":"@site/docs/scripting/functions/GangZoneGetColourForPlayer.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GangZoneGetColourForPlayer","permalink":"/ro/docs/scripting/functions/GangZoneGetColourForPlayer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GangZoneGetColourForPlayer.md","tags":[{"inline":true,"label":"player","permalink":"/ro/docs/tags/player"},{"inline":true,"label":"gangzone","permalink":"/ro/docs/tags/gangzone"}],"version":"current","frontMatter":{"title":"GangZoneGetColourForPlayer","sidebar_label":"GangZoneGetColourForPlayer","description":"Get the colour of a gangzone for player","tags":["player","gangzone"]},"sidebar":"docsSidebar","previous":{"title":"GangZoneFlashForPlayer","permalink":"/ro/docs/scripting/functions/GangZoneFlashForPlayer"},"next":{"title":"GangZoneGetFlashColourForPlayer","permalink":"/ro/docs/scripting/functions/GangZoneGetFlashColourForPlayer"}}');var l=r(74848),a=r(28453);const t={title:"GangZoneGetColourForPlayer",sidebar_label:"GangZoneGetColourForPlayer",description:"Get the colour of a gangzone for player",tags:["player","gangzone"]},s=void 0,i={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const n={a:"a",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components},{VersionWarn:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r,{version:"omp v1.1.0.2612"}),"\n",(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"Get the colour of a gangzone for player."}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Name"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"playerid"}),(0,l.jsx)(n.td,{children:"The ID of the player you need to get."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"zoneid"}),(0,l.jsx)(n.td,{children:"The ID of the gangzone."})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsx)(n.p,{children:"Colour of gangzone for player."}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"0:"})," Failed to execute the function. The gangzone is not shown for the player."]}),"\n",(0,l.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"GangZoneDestroy",children:"GangZoneDestroy"}),": Destroy a gangzone."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"GangZoneShowForPlayer",children:"GangZoneShowForPlayer"}),": Show a gangzone for a player."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"GangZoneShowForAll",children:"GangZoneShowForAll"}),": Show a gangzone for all players."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"GangZoneHideForPlayer",children:"GangZoneHideForPlayer"}),": Hide a gangzone for a player."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"GangZoneHideForAll",children:"GangZoneHideForAll"}),": Hide a gangzone for all players."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"GangZoneFlashForPlayer",children:"GangZoneFlashForPlayer"}),": Make a gangzone flash for a player."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"GangZoneFlashForAll",children:"GangZoneFlashForAll"}),": Make a gangzone flash for all players."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"GangZoneStopFlashForPlayer",children:"GangZoneStopFlashForPlayer"}),": Stop a gangzone flashing for a player."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"GangZoneStopFlashForAll",children:"GangZoneStopFlashForAll"}),": Stop a gangzone flashing for all players."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"IsValidGangZone",children:"IsValidGangZone"}),": Check if the gangzone valid."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"IsPlayerInGangZone",children:"IsPlayerInGangZone"}),": Check if the player in gangzone."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"IsGangZoneVisibleForPlayer",children:"IsGangZoneVisibleForPlayer"}),": Check if the gangzone is visible for player."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}}}]);