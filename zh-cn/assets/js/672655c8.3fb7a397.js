"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[57345],{28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var i=t(96540);const r={},s=i.createContext(r);function l(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:n},e.children)}},85023:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"scripting/functions/GetPlayerBuildingsRemoved","title":"GetPlayerBuildingsRemoved","description":"Gets the number of removed buildings for a player.","source":"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/scripting/functions/GetPlayerBuildingsRemoved.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerBuildingsRemoved","permalink":"/zh-cn/docs/scripting/functions/GetPlayerBuildingsRemoved","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetPlayerBuildingsRemoved.md","tags":[{"inline":true,"label":"player","permalink":"/zh-cn/docs/tags/player"}],"version":"current","frontMatter":{"title":"GetPlayerBuildingsRemoved","sidebar_label":"GetPlayerBuildingsRemoved","description":"Gets the number of removed buildings for a player.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerAttachedObject","permalink":"/zh-cn/docs/scripting/functions/GetPlayerAttachedObject"},"next":{"title":"GetPlayerCameraAspectRatio","permalink":"/zh-cn/docs/scripting/functions/GetPlayerCameraAspectRatio"}}');var r=t(74848),s=t(28453);const l={title:"GetPlayerBuildingsRemoved",sidebar_label:"GetPlayerBuildingsRemoved",description:"Gets the number of removed buildings for a player.",tags:["player"]},o=void 0,d={},a=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components},{VersionWarn:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t,{version:"omp v1.1.0.2612"}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Gets the number of removed buildings for a player."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"playerid"}),(0,r.jsx)(n.td,{children:"The ID of the player."})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:"Returns the number of removed buildings."}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'public OnPlayerConnect(playerid)\n{\n    RemoveBuildingForPlayer(playerid, 700, 1192.1016, -1738.0000, 13.0391, 0.25);\n    RemoveBuildingForPlayer(playerid, 700, 1204.4844, -1724.8516, 13.0391, 0.25);\n    RemoveBuildingForPlayer(playerid, 673, 1192.5625, -1723.8828, 12.5234, 0.25);\n\n    printf("Removed buildings: %d", GetPlayerBuildingsRemoved(playerid)); // Removed buildings: 3\n    return 1;\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"RemoveBuildingForPlayer",children:"RemoveBuildingForPlayer"}),": Removes a standard San Andreas model for a single player within a specified range."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}}}]);