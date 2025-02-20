"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[79466],{15632:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"scripting/functions/GangZoneStopFlashForPlayer","title":"GangZoneStopFlashForPlayer","description":"Stops a gangzone flashing for a player.","source":"@site/docs/scripting/functions/GangZoneStopFlashForPlayer.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GangZoneStopFlashForPlayer","permalink":"/pl/docs/scripting/functions/GangZoneStopFlashForPlayer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GangZoneStopFlashForPlayer.md","tags":[{"inline":true,"label":"player","permalink":"/pl/docs/tags/player"},{"inline":true,"label":"gangzone","permalink":"/pl/docs/tags/gangzone"}],"version":"current","frontMatter":{"title":"GangZoneStopFlashForPlayer","sidebar_label":"GangZoneStopFlashForPlayer","description":"Stops a gangzone flashing for a player.","tags":["player","gangzone"]},"sidebar":"docsSidebar","previous":{"title":"GangZoneStopFlashForAll","permalink":"/pl/docs/scripting/functions/GangZoneStopFlashForAll"},"next":{"title":"Get3DTextLabelAttachedData","permalink":"/pl/docs/scripting/functions/Get3DTextLabelAttachedData"}}');var l=a(74848),o=a(28453);const t={title:"GangZoneStopFlashForPlayer",sidebar_label:"GangZoneStopFlashForPlayer",description:"Stops a gangzone flashing for a player.",tags:["player","gangzone"]},s=void 0,i={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"Stops a gangzone flashing for a player."}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Name"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"playerid"}),(0,l.jsx)(n.td,{children:"The ID of the player to stop the gangzone flashing for."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"zoneid"}),(0,l.jsx)(n.td,{children:"The ID of the gangzonezone to stop flashing."})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsx)(n.p,{children:"This function does not return any specific values."}),"\n",(0,l.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:"new gGangZoneId;\n\npublic OnGameModeInit()\n{\n    gGangZoneId = GangZoneCreate(1248.011, 2072.804, 1439.348, 2204.319);\n    return 1;\n}\n\npublic OnPlayerSpawn(playerid)\n{\n    GangZoneFlashForPlayer(playerid, gGangZoneId, 0xFF0000FF);\n    return 1;\n}\n\npublic OnPlayerEnterVehicle(playerid, vehicleid)\n{\n    GangZoneStopFlashForPlayer(playerid, gGangZoneId);\n    return 1;\n}\n"})}),"\n",(0,l.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"GangZoneCreate",children:"GangZoneCreate"}),": Create a gangzone."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"GangZoneDestroy",children:"GangZoneDestroy"}),": Destroy a gangzone."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"GangZoneShowForPlayer",children:"GangZoneShowForPlayer"}),": Show a gangzone for a player."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"GangZoneShowForAll",children:"GangZoneShowForAll"}),": Show a gangzone for all players."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"GangZoneHideForPlayer",children:"GangZoneHideForPlayer"}),": Hide a gangzone for a player."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"GangZoneHideForAll",children:"GangZoneHideForAll"}),": Hide a gangzone for all players."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"GangZoneFlashForPlayer",children:"GangZoneFlashForPlayer"}),": Make a gangzone flash for a player."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"GangZoneFlashForAll",children:"GangZoneFlashForAll"}),": Make a gangzone flash for all players."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"GangZoneStopFlashForAll",children:"GangZoneStopFlashForAll"}),": Stop a gangzone flashing for all players."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>t,x:()=>s});var r=a(96540);const l={},o=r.createContext(l);function t(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);