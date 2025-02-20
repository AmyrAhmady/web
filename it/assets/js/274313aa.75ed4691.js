"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[68215],{28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>o});var n=r(96540);const i={},c=n.createContext(i);function s(e){const t=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(c.Provider,{value:t},e.children)}},56554:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>n,toc:()=>a});const n=JSON.parse('{"id":"scripting/functions/HideObjectForPlayer","title":"HideObjectForPlayer","description":"Hide an object for a player.","source":"@site/docs/scripting/functions/HideObjectForPlayer.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/HideObjectForPlayer","permalink":"/it/docs/scripting/functions/HideObjectForPlayer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/HideObjectForPlayer.md","tags":[{"inline":true,"label":"player","permalink":"/it/docs/tags/player"},{"inline":true,"label":"object","permalink":"/it/docs/tags/object"}],"version":"current","frontMatter":{"title":"HideObjectForPlayer","sidebar_label":"HideObjectForPlayer","description":"Hide an object for a player.","tags":["player","object"]},"sidebar":"docsSidebar","previous":{"title":"HideMenuForPlayer","permalink":"/it/docs/scripting/functions/HideMenuForPlayer"},"next":{"title":"HidePickupForPlayer","permalink":"/it/docs/scripting/functions/HidePickupForPlayer"}}');var i=r(74848),c=r(28453);const s={title:"HideObjectForPlayer",sidebar_label:"HideObjectForPlayer",description:"Hide an object for a player.",tags:["player","object"]},o=void 0,l={},a=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components},{VersionWarn:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r,{version:"omp v1.1.0.2612"}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Hide an object for a player."}),"\n",(0,i.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"playerid"}),(0,i.jsx)(t.td,{children:"The ID of the player."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"objectid"}),(0,i.jsx)(t.td,{children:"The ID of the object to hide for player."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"true"})," - The function was executed successfully."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"false"})," - The function failed to execute. The playerid or objectid specified does not exist."]}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:"new gObject;\n\npublic OnGameModeInit()\n{\n    gObject = CreateObject(1431, 921.12201, -1206.78613, 16.52670,   0.00000, 0.00000, 90.00000);\n    return 1;\n}\n\npublic OnPlayerConnect(playerid)\n{\n    HideObjectForPlayer(playerid, gObject);\n    return 1;\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"ShowObjectForPlayer",children:"ShowObjectForPlayer"}),": Show an object for a player."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"IsObjectHiddenForPlayer",children:"IsObjectHiddenForPlayer"}),": Checks if an object is hidden for a player."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"CreateObject",children:"CreateObject"}),": Create an object."]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);