"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[38048],{105:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"scripting/functions/AllowAdminTeleport","title":"AllowAdminTeleport","description":"This function will determine whether RCON admins will be teleported to their waypoint when they set one.","source":"@site/docs/scripting/functions/AllowAdminTeleport.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/AllowAdminTeleport","permalink":"/ar/docs/scripting/functions/AllowAdminTeleport","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/AllowAdminTeleport.md","tags":[],"version":"current","frontMatter":{"title":"AllowAdminTeleport","sidebar_label":"AllowAdminTeleport","description":"This function will determine whether RCON admins will be teleported to their waypoint when they set one.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"AddVehicleComponent","permalink":"/ar/docs/scripting/functions/AddVehicleComponent"},"next":{"title":"AllowInteriorWeapons","permalink":"/ar/docs/scripting/functions/AllowInteriorWeapons"}}');var l=t(74848),r=t(28453);const o={title:"AllowAdminTeleport",sidebar_label:"AllowAdminTeleport",description:"This function will determine whether RCON admins will be teleported to their waypoint when they set one.",tags:[]},s=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.admonition,{type:"warning",children:(0,l.jsxs)(n.p,{children:["This function, as of 0.3d, is deprecated. Please see ",(0,l.jsx)(n.a,{href:"../callbacks/OnPlayerClickMap",children:"OnPlayerClickMap"}),"."]})}),"\n",(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"This function will determine whether RCON admins will be teleported to their waypoint when they set one."}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Name"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsxs)(n.td,{children:["bool",":allow"]}),(0,l.jsx)(n.td,{children:"'false' to disable and 'true' to enable."})]})})]}),"\n",(0,l.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsx)(n.p,{children:"This function does not return any specific values."}),"\n",(0,l.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:"public OnGameModeInit()\n{\n    AllowAdminTeleport(true);\n    // Other stuff\n    return 1;\n}\n"})}),"\n",(0,l.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"IsAdminTeleportAllowed",children:"IsAdminTeleportAllowed"}),": Checks if the RCON admins allowed to teleport by right-clicking on the map."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"IsPlayerAdmin",children:"IsPlayerAdmin"}),": Checks if a player is logged into RCON."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"AllowPlayerTeleport",children:"AllowPlayerTeleport"}),": Toggle waypoint teleporting for players."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var i=t(96540);const l={},r=i.createContext(l);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);