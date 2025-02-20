"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[11961],{9867:(n,e,l)=>{l.r(e),l.d(e,{assets:()=>i,contentTitle:()=>t,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"scripting/functions/GangZoneStopFlashForAll","title":"GangZoneStopFlashForAll","description":"Stops a gangzone flashing for all players.","source":"@site/docs/scripting/functions/GangZoneStopFlashForAll.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GangZoneStopFlashForAll","permalink":"/pl/docs/scripting/functions/GangZoneStopFlashForAll","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GangZoneStopFlashForAll.md","tags":[{"inline":true,"label":"gangzone","permalink":"/pl/docs/tags/gangzone"}],"version":"current","frontMatter":{"title":"GangZoneStopFlashForAll","sidebar_label":"GangZoneStopFlashForAll","description":"Stops a gangzone flashing for all players.","tags":["gangzone"]},"sidebar":"docsSidebar","previous":{"title":"GangZoneShowForPlayer","permalink":"/pl/docs/scripting/functions/GangZoneShowForPlayer"},"next":{"title":"GangZoneStopFlashForPlayer","permalink":"/pl/docs/scripting/functions/GangZoneStopFlashForPlayer"}}');var o=l(74848),r=l(28453);const s={title:"GangZoneStopFlashForAll",sidebar_label:"GangZoneStopFlashForAll",description:"Stops a gangzone flashing for all players.",tags:["gangzone"]},t=void 0,i={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(n){const e={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,o.jsx)(e.p,{children:"Stops a gangzone flashing for all players."}),"\n",(0,o.jsxs)(e.table,{children:[(0,o.jsx)(e.thead,{children:(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.th,{children:"Name"}),(0,o.jsx)(e.th,{children:"Description"})]})}),(0,o.jsx)(e.tbody,{children:(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"zoneid"}),(0,o.jsx)(e.td,{children:"The ID of the zone to stop flashing. Returned by GangZoneCreate."})]})})]}),"\n",(0,o.jsx)(e.h2,{id:"returns",children:"Returns"}),"\n",(0,o.jsx)(e.p,{children:"1: The function executed successfully. Success is reported even if the gang zone wasn't flashing to begin with."}),"\n",(0,o.jsx)(e.p,{children:"0: The function failed to execute. The gangzone specified does not exist."}),"\n",(0,o.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-c",children:"new gGangZoneId;\n\npublic OnGameModeInit()\n{\n    gGangZoneId = GangZoneCreate(1248.011, 2072.804, 1439.348, 2204.319);\n    return 1;\n}\n\npublic OnPlayerDeath(playerid, killerid, WEAPON:reason)\n{\n    GangZoneFlashForAll(gGangZoneId, COLOR_RED);\n    return 1;\n}\n\npublic OnPlayerSpawn(playerid)\n{\n    GangZoneStopFlashForAll(gGangZoneId);\n    return 1;\n}\n"})}),"\n",(0,o.jsx)(e.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.a,{href:"GangZoneCreate",children:"GangZoneCreate"}),": Create a gangzone."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.a,{href:"GangZoneDestroy",children:"GangZoneDestroy"}),": Destroy a gangzone."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.a,{href:"GangZoneShowForPlayer",children:"GangZoneShowForPlayer"}),": Show a gangzone for a player."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.a,{href:"GangZoneShowForAll",children:"GangZoneShowForAll"}),": Show a gangzone for all players."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.a,{href:"GangZoneHideForPlayer",children:"GangZoneHideForPlayer"}),": Hide a gangzone for a player."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.a,{href:"GangZoneHideForAll",children:"GangZoneHideForAll"}),": Hide a gangzone for all players."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.a,{href:"GangZoneFlashForPlayer",children:"GangZoneFlashForPlayer"}),": Make a gangzone flash for a player."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.a,{href:"GangZoneFlashForAll",children:"GangZoneFlashForAll"}),": Make a gangzone flash for all players."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.a,{href:"GangZoneStopFlashForPlayer",children:"GangZoneStopFlashForPlayer"}),": Stop a gangzone flashing for a player."]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(d,{...n})}):d(n)}},28453:(n,e,l)=>{l.d(e,{R:()=>s,x:()=>t});var a=l(96540);const o={},r=a.createContext(o);function s(n){const e=a.useContext(r);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:s(n.components),a.createElement(r.Provider,{value:e},n.children)}}}]);