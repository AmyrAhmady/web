"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[28283],{11902:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"scripting/functions/GetPlayerWorldBounds","title":"GetPlayerWorldBounds","description":"Get a player\'s world boundaries.","source":"@site/docs/scripting/functions/GetPlayerWorldBounds.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerWorldBounds","permalink":"/fr/docs/scripting/functions/GetPlayerWorldBounds","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetPlayerWorldBounds.md","tags":[{"inline":true,"label":"player","permalink":"/fr/docs/tags/player"}],"version":"current","frontMatter":{"title":"GetPlayerWorldBounds","sidebar_label":"GetPlayerWorldBounds","description":"Get a player\'s world boundaries.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerWeather","permalink":"/fr/docs/scripting/functions/GetPlayerWeather"},"next":{"title":"GetPlayerZAim","permalink":"/fr/docs/scripting/functions/GetPlayerZAim"}}');var s=r(74848),i=r(28453);const l={title:"GetPlayerWorldBounds",sidebar_label:"GetPlayerWorldBounds",description:"Get a player's world boundaries.",tags:["player"]},o=void 0,a={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{VersionWarn:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r,{version:"omp v1.1.0.2612"}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Get a player's world boundaries."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"playerid"}),(0,s.jsx)(n.td,{children:"The ID of the player."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["&Float",":maxX"]}),(0,s.jsx)(n.td,{children:"A float variable in which to store the maxX coordinate, passed by reference."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["&Float",":minX"]}),(0,s.jsx)(n.td,{children:"A float variable in which to store the minX coordinate, passed by reference."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["&Float",":maxY"]}),(0,s.jsx)(n.td,{children:"A float variable in which to store the maxY coordinate, passed by reference."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["&Float",":minY"]}),(0,s.jsx)(n.td,{children:"A float variable in which to store the minY coordinate, passed by reference."})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:"This function does not return a specific value."}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"public OnPlayerSpawn(playerid)\n{\n    SetPlayerWorldBounds(playerid, -1212.0, -1420.0, 2628.5, 2430.5);\n\n    new\n        Float:maxX,\n        Float:minX,\n        Float:maxY,\n        Float:minY;\n\n    GetPlayerWorldBounds(playerid, maxX, minX, maxY, minY);\n    // maxX = -1212.0\n    // minX = -1420.0\n    // maxY = 2628.5\n    // minY = 2430.5\n    return 1;\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"SetPlayerWorldBounds",children:"SetPlayerWorldBounds"}),": Set the world boundaries for a player. Players can not go out of the boundaries (they will be pushed back in)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"ClearPlayerWorldBounds",children:"ClearPlayerWorldBounds"}),": Reset the player's world boundaries to default world boundaries."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>o});var t=r(96540);const s={},i=t.createContext(s);function l(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);