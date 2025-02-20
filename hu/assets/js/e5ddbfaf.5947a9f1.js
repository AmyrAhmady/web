"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[26512],{28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>l});var t=r(96540);const i={},s=t.createContext(i);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:n},e.children)}},40238:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"scripting/functions/RemoveBuildingForPlayer","title":"RemoveBuildingForPlayer","description":"Removes a standard San Andreas model for a single player within a specified range.","source":"@site/docs/scripting/functions/RemoveBuildingForPlayer.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/RemoveBuildingForPlayer","permalink":"/hu/docs/scripting/functions/RemoveBuildingForPlayer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/RemoveBuildingForPlayer.md","tags":[{"inline":true,"label":"player","permalink":"/hu/docs/tags/player"}],"version":"current","frontMatter":{"title":"RemoveBuildingForPlayer","sidebar_label":"RemoveBuildingForPlayer","description":"Removes a standard San Andreas model for a single player within a specified range.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"RedirectDownload","permalink":"/hu/docs/scripting/functions/RedirectDownload"},"next":{"title":"RemovePlayerAttachedObject","permalink":"/hu/docs/scripting/functions/RemovePlayerAttachedObject"}}');var i=r(74848),s=r(28453);const o={title:"RemoveBuildingForPlayer",sidebar_label:"RemoveBuildingForPlayer",description:"Removes a standard San Andreas model for a single player within a specified range.",tags:["player"]},l=void 0,d={},a=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Removes a standard San Andreas model for a single player within a specified range."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"playerid"}),(0,i.jsx)(n.td,{children:"The ID of the player to remove the objects for."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"modelid"}),(0,i.jsx)(n.td,{children:"The model to remove."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["Float",":centerX"]}),(0,i.jsx)(n.td,{children:"The X coordinate around which the objects will be removed."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["Float",":centerY"]}),(0,i.jsx)(n.td,{children:"The Y coordinate around which the objects will be removed."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["Float",":centerZ"]}),(0,i.jsx)(n.td,{children:"The Z coordinate around which the objects will be removed."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["Float",":radius"]}),(0,i.jsx)(n.td,{children:"The radius around the specified point to remove objects with the specified model."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:"This function does not return any specific values."}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"public OnPlayerConnect(playerid)\n{\n    // When the player connects, objects with model 615 will be removed within a\n    // range of 200.0 from the point 0.0, 0.0, 0.0, which is the center of San Andreas.\n    RemoveBuildingForPlayer(playerid, 615, 0.0, 0.0, 0.0, 200.0);\n    return 1;\n}\n\npublic OnPlayerConnect(playerid)\n{\n    // When the player connects, all map objects will be removed.\n    RemoveBuildingForPlayer(playerid, -1, 0.0, 0.0, 0.0, 6000.0);\n    return 1;\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["You can use ",(0,i.jsx)(n.strong,{children:"-1"})," for the modelid to remove all objects within the specified radius."]})}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"There appears to be a limit of around 1000 lines/objects. There is no workaround."}),"\n",(0,i.jsx)(n.li,{children:"When removing the same object for a player, they will crash. Commonly, players crash when reconnecting to the server because the server removes buildings on OnPlayerConnect."}),"\n"]})}),"\n",(0,i.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"GetPlayerBuildingsRemoved",children:"GetPlayerBuildingsRemoved"}),": Gets the number of removed buildings for a player."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"DestroyObject",children:"DestroyObject"}),": Destroy an object."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"DestroyPlayerObject",children:"DestroyPlayerObject"}),": Destroy a player object."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}}}]);