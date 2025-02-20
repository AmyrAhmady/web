"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[80634],{28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var s=n(96540);const c={},r=s.createContext(c);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:a(e.components),s.createElement(r.Provider,{value:t},e.children)}},44742:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"scripting/functions/IsPlayerAttachedObjectSlotUsed","title":"IsPlayerAttachedObjectSlotUsed","description":"Check if a player has an object attached in the specified index (slot).","source":"@site/docs/scripting/functions/IsPlayerAttachedObjectSlotUsed.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/IsPlayerAttachedObjectSlotUsed","permalink":"/sr/docs/scripting/functions/IsPlayerAttachedObjectSlotUsed","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/IsPlayerAttachedObjectSlotUsed.md","tags":[{"inline":true,"label":"player","permalink":"/sr/docs/tags/player"},{"inline":true,"label":"object","permalink":"/sr/docs/tags/object"},{"inline":true,"label":"attachment","permalink":"/sr/docs/tags/attachment"}],"version":"current","frontMatter":{"title":"IsPlayerAttachedObjectSlotUsed","sidebar_label":"IsPlayerAttachedObjectSlotUsed","description":"Check if a player has an object attached in the specified index (slot).","tags":["player","object","attachment"]},"sidebar":"docsSidebar","previous":{"title":"IsPlayerAdmin","permalink":"/sr/docs/scripting/functions/IsPlayerAdmin"},"next":{"title":"IsPlayerCameraTargetEnabled","permalink":"/sr/docs/scripting/functions/IsPlayerCameraTargetEnabled"}}');var c=n(74848),r=n(28453);const a={title:"IsPlayerAttachedObjectSlotUsed",sidebar_label:"IsPlayerAttachedObjectSlotUsed",description:"Check if a player has an object attached in the specified index (slot).",tags:["player","object","attachment"]},i=void 0,l={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function o(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,c.jsx)(t.p,{children:"Check if a player has an object attached in the specified index (slot)."}),"\n",(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:"Name"}),(0,c.jsx)(t.th,{children:"Description"})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"playerid"}),(0,c.jsx)(t.td,{children:"The ID of the player to check."})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"index"}),(0,c.jsx)(t.td,{children:"The index (slot) to check."})]})]})]}),"\n",(0,c.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:"true"})," - The specified slot is used for an attached object."]}),"\n",(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:"false"})," - The specified slot is not in use for an attached object."]}),"\n",(0,c.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-c",children:'stock CountAttachedObjects(playerid)\n{\n    new count;\n    for (new i = 0; i < MAX_PLAYER_ATTACHED_OBJECTS; i++)\n    {\n        if (IsPlayerAttachedObjectSlotUsed(playerid, i))\n        {\n            count++;\n        }\n    }\n    return count;\n}\n\npublic OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, "/count", true))\n    {\n        new string[32];\n        format(string, sizeof(string), "Attached objects: %d", CountAttachedObjects(playerid));\n        SendClientMessage(playerid, -1, string);\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,c.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,c.jsxs)(t.ul,{children:["\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"SetPlayerAttachedObject",children:"SetPlayerAttachedObject"}),": Attach an object to a player"]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"RemovePlayerAttachedObject",children:"RemovePlayerAttachedObject"}),": Remove an attached object from a player"]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"GetPlayerAttachedObject",children:"GetPlayerAttachedObject"}),": Gets the player attachment object data by index."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}}}]);