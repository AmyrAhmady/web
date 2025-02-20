"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[68215],{28453:(e,r,t)=>{t.d(r,{R:()=>s,x:()=>o});var n=t(96540);const i={},c=n.createContext(i);function s(e){const r=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(c.Provider,{value:r},e.children)}},56554:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>n,toc:()=>a});const n=JSON.parse('{"id":"scripting/functions/HideObjectForPlayer","title":"HideObjectForPlayer","description":"Hide an object for a player.","source":"@site/docs/scripting/functions/HideObjectForPlayer.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/HideObjectForPlayer","permalink":"/tr/docs/scripting/functions/HideObjectForPlayer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/HideObjectForPlayer.md","tags":[{"inline":true,"label":"player","permalink":"/tr/docs/tags/player"},{"inline":true,"label":"object","permalink":"/tr/docs/tags/object"}],"version":"current","frontMatter":{"title":"HideObjectForPlayer","sidebar_label":"HideObjectForPlayer","description":"Hide an object for a player.","tags":["player","object"]},"sidebar":"docsSidebar","previous":{"title":"HideMenuForPlayer","permalink":"/tr/docs/scripting/functions/HideMenuForPlayer"},"next":{"title":"HidePickupForPlayer","permalink":"/tr/docs/scripting/functions/HidePickupForPlayer"}}');var i=t(74848),c=t(28453);const s={title:"HideObjectForPlayer",sidebar_label:"HideObjectForPlayer",description:"Hide an object for a player.",tags:["player","object"]},o=void 0,l={},a=[{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components},{VersionWarn:t}=r;return t||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t,{version:"omp v1.1.0.2612"}),"\n",(0,i.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(r.p,{children:"Hide an object for a player."}),"\n",(0,i.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Name"}),(0,i.jsx)(r.th,{children:"Description"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"playerid"}),(0,i.jsx)(r.td,{children:"The ID of the player."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"objectid"}),(0,i.jsx)(r.td,{children:"The ID of the object to hide for player."})]})]})]}),"\n",(0,i.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"true"})," - The function was executed successfully."]}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.code,{children:"false"})," - The function failed to execute. The playerid or objectid specified does not exist."]}),"\n",(0,i.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-c",children:"new gObject;\n\npublic OnGameModeInit()\n{\n    gObject = CreateObject(1431, 921.12201, -1206.78613, 16.52670,   0.00000, 0.00000, 90.00000);\n    return 1;\n}\n\npublic OnPlayerConnect(playerid)\n{\n    HideObjectForPlayer(playerid, gObject);\n    return 1;\n}\n"})}),"\n",(0,i.jsx)(r.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"ShowObjectForPlayer",children:"ShowObjectForPlayer"}),": Show an object for a player."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"IsObjectHiddenForPlayer",children:"IsObjectHiddenForPlayer"}),": Checks if an object is hidden for a player."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"CreateObject",children:"CreateObject"}),": Create an object."]}),"\n"]})]})}function p(e={}){const{wrapper:r}={...(0,c.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);