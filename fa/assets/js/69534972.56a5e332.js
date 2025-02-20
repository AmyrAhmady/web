"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[25830],{28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>i});var a=r(96540);const o={},t=a.createContext(o);function s(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(t.Provider,{value:n},e.children)}},84756:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"scripting/functions/GangZoneCreate","title":"GangZoneCreate","description":"Create a gangzone (colored radar area).","source":"@site/docs/scripting/functions/GangZoneCreate.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GangZoneCreate","permalink":"/fa/docs/scripting/functions/GangZoneCreate","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GangZoneCreate.md","tags":[{"inline":true,"label":"gangzone","permalink":"/fa/docs/tags/gangzone"}],"version":"current","frontMatter":{"title":"GangZoneCreate","sidebar_label":"GangZoneCreate","description":"Create a gangzone (colored radar area).","tags":["gangzone"]},"sidebar":"docsSidebar","previous":{"title":"GameTextForPlayer","permalink":"/fa/docs/scripting/functions/GameTextForPlayer"},"next":{"title":"GangZoneDestroy","permalink":"/fa/docs/scripting/functions/GangZoneDestroy"}}');var o=r(74848),t=r(28453);const s={title:"GangZoneCreate",sidebar_label:"GangZoneCreate",description:"Create a gangzone (colored radar area).",tags:["gangzone"]},i=void 0,l={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"GangZone Editors",id:"gangzone-editors",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,o.jsx)(n.p,{children:"Create a gangzone (colored radar area)."}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Name"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsxs)(n.td,{children:["Float",":minX"]}),(0,o.jsx)(n.td,{children:"The X coordinate for the west side of the gangzone."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsxs)(n.td,{children:["Float",":minY"]}),(0,o.jsx)(n.td,{children:"The Y coordinate for the south side of the gangzone."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsxs)(n.td,{children:["Float",":maxX"]}),(0,o.jsx)(n.td,{children:"The X coordinate for the east side of the gangzone."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsxs)(n.td,{children:["Float",":maxY"]}),(0,o.jsx)(n.td,{children:"The Y coordinate for the north side of the gangzone."})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,o.jsxs)(n.p,{children:["The ID of the created zone, returns ",(0,o.jsx)(n.strong,{children:"-1"})," if not created"]}),"\n",(0,o.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-c",children:"new gangZone;\n\npublic OnGameModeInit()\n{\n    gangZone = GangZoneCreate(1248.011, 2072.804, 1439.348, 2204.319);\n    return 1;\n}\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"                          MaxY\n                          v\n             -------------* < MaxX\n             |            |\n             |  gangzone  |\n             |   center   |\n             |            |\n      MinX > *-------------\n             ^\n             MinY\n"})}),"\n",(0,o.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"There is a limit of 1024 gangzones."}),"\n",(0,o.jsx)(n.li,{children:"Putting the parameters in the wrong order results in glitchy behavior."}),"\n"]})}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["This function merely CREATES the gangzone, you must use ",(0,o.jsx)(n.a,{href:"GangZoneShowForPlayer",children:"GangZoneShowForPlayer"})," or ",(0,o.jsx)(n.a,{href:"GangZoneShowForAll",children:"GangZoneShowForAll"})," to show it."]})}),"\n",(0,o.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"GangZoneDestroy",children:"GangZoneDestroy"}),": Destroy a gangzone."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"GangZoneShowForPlayer",children:"GangZoneShowForPlayer"}),": Show a gangzone for a player."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"GangZoneShowForAll",children:"GangZoneShowForAll"}),": Show a gangzone for all players."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"GangZoneHideForPlayer",children:"GangZoneHideForPlayer"}),": Hide a gangzone for a player."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"GangZoneHideForAll",children:"GangZoneHideForAll"}),": Hide a gangzone for all players."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"GangZoneFlashForPlayer",children:"GangZoneFlashForPlayer"}),": Make a gangzone flash for a player."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"GangZoneFlashForAll",children:"GangZoneFlashForAll"}),": Make a gangzone flash for all players."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"GangZoneStopFlashForPlayer",children:"GangZoneStopFlashForPlayer"}),": Stop a gangzone flashing for a player."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"GangZoneStopFlashForAll",children:"GangZoneStopFlashForAll"}),": Stop a gangzone flashing for all players."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"gangzone-editors",children:"GangZone Editors"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://dev.prineside.com/en/gtasa_gangzone_editor/",children:"Prineside DevTools GangZone Editor"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}}}]);