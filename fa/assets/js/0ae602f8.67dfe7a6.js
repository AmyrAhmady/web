"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[76863],{28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>s});var a=r(96540);const o={},l=a.createContext(o);function i(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(l.Provider,{value:n},e.children)}},85400:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>t,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"scripting/functions/GangZoneHideForAll","title":"GangZoneHideForAll","description":"GangZoneHideForAll hides a gangzone from all players.","source":"@site/docs/scripting/functions/GangZoneHideForAll.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GangZoneHideForAll","permalink":"/fa/docs/scripting/functions/GangZoneHideForAll","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GangZoneHideForAll.md","tags":[{"inline":true,"label":"gangzone","permalink":"/fa/docs/tags/gangzone"}],"version":"current","frontMatter":{"title":"GangZoneHideForAll","sidebar_label":"GangZoneHideForAll","description":"GangZoneHideForAll hides a gangzone from all players.","tags":["gangzone"]},"sidebar":"docsSidebar","previous":{"title":"GangZoneGetPos","permalink":"/fa/docs/scripting/functions/GangZoneGetPos"},"next":{"title":"GangZoneHideForPlayer","permalink":"/fa/docs/scripting/functions/GangZoneHideForPlayer"}}');var o=r(74848),l=r(28453);const i={title:"GangZoneHideForAll",sidebar_label:"GangZoneHideForAll",description:"GangZoneHideForAll hides a gangzone from all players.",tags:["gangzone"]},s=void 0,t={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,o.jsx)(n.p,{children:"GangZoneHideForAll hides a gangzone from all players."}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Name"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"zoneid"}),(0,o.jsx)(n.td,{children:"The zone to hide."})]})})]}),"\n",(0,o.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,o.jsx)(n.p,{children:"This function does not return any specific values."}),"\n",(0,o.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-c",children:'new gGangZoneId;\n\npublic OnGameModeInit()\n{\n    gGangZoneId = GangZoneCreate(1248.011, 2072.804, 1439.348, 2204.319);\n    return 1;\n}\n\npublic OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, "/hidezone", true))\n    {\n        GangZoneHideForAll(gGangZoneId);\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"GangZoneCreate",children:"GangZoneCreate"}),": Create a gangzone."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"GangZoneDestroy",children:"GangZoneDestroy"}),": Destroy a gangzone."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"GangZoneShowForPlayer",children:"GangZoneShowForPlayer"}),": Show a gangzone for a player."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"GangZoneShowForAll",children:"GangZoneShowForAll"}),": Show a gangzone for all players."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"GangZoneHideForPlayer",children:"GangZoneHideForPlayer"}),": Hide a gangzone for a player."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"GangZoneFlashForPlayer",children:"GangZoneFlashForPlayer"}),": Make a gangzone flash for a player."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"GangZoneFlashForAll",children:"GangZoneFlashForAll"}),": Make a gangzone flash for all players."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"GangZoneStopFlashForPlayer",children:"GangZoneStopFlashForPlayer"}),": Stop a gangzone flashing for a player."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"GangZoneStopFlashForAll",children:"GangZoneStopFlashForAll"}),": Stop a gangzone flashing for all players."]}),"\n"]})]})}function g(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}}}]);