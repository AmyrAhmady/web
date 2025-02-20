"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[47685],{28453:(e,r,t)=>{t.d(r,{R:()=>c,x:()=>s});var n=t(96540);const i={},o=n.createContext(i);function c(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),n.createElement(o.Provider,{value:r},e.children)}},51829:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>n,toc:()=>a});const n=JSON.parse('{"id":"scripting/functions/ShowObjectForPlayer","title":"ShowObjectForPlayer","description":"Show an object for a player.","source":"@site/docs/scripting/functions/ShowObjectForPlayer.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/ShowObjectForPlayer","permalink":"/de/docs/scripting/functions/ShowObjectForPlayer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/ShowObjectForPlayer.md","tags":[{"inline":true,"label":"player","permalink":"/de/docs/tags/player"},{"inline":true,"label":"object","permalink":"/de/docs/tags/object"}],"version":"current","frontMatter":{"title":"ShowObjectForPlayer","sidebar_label":"ShowObjectForPlayer","description":"Show an object for a player.","tags":["player","object"]},"sidebar":"docsSidebar","previous":{"title":"ShowNameTags","permalink":"/de/docs/scripting/functions/ShowNameTags"},"next":{"title":"ShowPickupForPlayer","permalink":"/de/docs/scripting/functions/ShowPickupForPlayer"}}');var i=t(74848),o=t(28453);const c={title:"ShowObjectForPlayer",sidebar_label:"ShowObjectForPlayer",description:"Show an object for a player.",tags:["player","object"]},s=void 0,l={},a=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components},{VersionWarn:t}=r;return t||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t,{version:"omp v1.1.0.2612"}),"\n",(0,i.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(r.p,{children:["Show an object for a player that is hidden with ",(0,i.jsx)(r.a,{href:"HideObjectForPlayer",children:"HideObjectForPlayer"})," function."]}),"\n",(0,i.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Name"}),(0,i.jsx)(r.th,{children:"Description"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"playerid"}),(0,i.jsx)(r.td,{children:"The ID of the player."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"objectid"}),(0,i.jsx)(r.td,{children:"The ID of the object to show for player."})]})]})]}),"\n",(0,i.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"true"})," - The function was executed successfully."]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"false"})," - The function failed to execute. The playerid or objectid specified does not exist."]}),"\n",(0,i.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-c",children:"new gObject;\n\npublic OnGameModeInit()\n{\n    gObject = CreateObject(1431, 921.12201, -1206.78613, 16.52670,   0.00000, 0.00000, 90.00000);\n    return 1;\n}\n\npublic OnPlayerConnect(playerid)\n{\n    HideObjectForPlayer(playerid, gObject);\n    return 1;\n}\n\npublic OnPlayerSpawn(playerid)\n{\n    ShowObjectForPlayer(playerid, gObject);\n    return 1;\n}\n"})}),"\n",(0,i.jsx)(r.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"HideObjectForPlayer",children:"HideObjectForPlayer"}),": Hide an object for a player."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"IsObjectHiddenForPlayer",children:"IsObjectHiddenForPlayer"}),": Checks if an object is hidden for a player."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"CreateObject",children:"CreateObject"}),": Create an object."]}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);