"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[41837],{6478:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"scripting/functions/RemovePlayerAttachedObject","title":"RemovePlayerAttachedObject","description":"Remove an attached object from a player.","source":"@site/docs/scripting/functions/RemovePlayerAttachedObject.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/RemovePlayerAttachedObject","permalink":"/ru/docs/scripting/functions/RemovePlayerAttachedObject","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/RemovePlayerAttachedObject.md","tags":[{"inline":true,"label":"player","permalink":"/ru/docs/tags/player"},{"inline":true,"label":"object","permalink":"/ru/docs/tags/object"},{"inline":true,"label":"attachment","permalink":"/ru/docs/tags/attachment"}],"version":"current","frontMatter":{"title":"RemovePlayerAttachedObject","sidebar_label":"RemovePlayerAttachedObject","description":"Remove an attached object from a player.","tags":["player","object","attachment"]},"sidebar":"docsSidebar","previous":{"title":"RemoveBuildingForPlayer","permalink":"/ru/docs/scripting/functions/RemoveBuildingForPlayer"},"next":{"title":"RemovePlayerFromVehicle","permalink":"/ru/docs/scripting/functions/RemovePlayerFromVehicle"}}');var c=n(74848),a=n(28453);const i={title:"RemovePlayerAttachedObject",sidebar_label:"RemovePlayerAttachedObject",description:"Remove an attached object from a player.",tags:["player","object","attachment"]},s=void 0,l={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,c.jsx)(t.p,{children:"Remove an attached object from a player."}),"\n",(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:"Name"}),(0,c.jsx)(t.th,{children:"Description"})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"playerid"}),(0,c.jsx)(t.td,{children:"The ID of the player to remove the object from."})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"index"}),(0,c.jsxs)(t.td,{children:["The index of the object to remove (set with ",(0,c.jsx)(t.a,{href:"SetPlayerAttachedObject",children:"SetPlayerAttachedObject"}),")."]})]})]})]}),"\n",(0,c.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:"1"})," on success, ",(0,c.jsx)(t.strong,{children:"0"})," on failure."]}),"\n",(0,c.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strmp(cmdtext, "/remove", true)) // Remove Attached Objects\n    {\n        for (new i = 0; i < MAX_PLAYER_ATTACHED_OBJECTS; i++)\n        {\n            if (IsPlayerAttachedObjectSlotUsed(playerid, i))\n            {\n                RemovePlayerAttachedObject(playerid, i);\n            }\n        }\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,c.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,c.jsxs)(t.ul,{children:["\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"SetPlayerAttachedObject",children:"SetPlayerAttachedObject"}),": Attach an object to a player"]}),"\n",(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.a,{href:"IsPlayerAttachedObjectSlotUsed",children:"IsPlayerAttachedObjectSlotUsed"}),": Check whether an object is attached to a player in a specified index"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>s});var r=n(96540);const c={},a=r.createContext(c);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);