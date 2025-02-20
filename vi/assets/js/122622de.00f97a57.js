"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[40755],{26426:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"scripting/functions/SetPlayerAttachedObject","title":"SetPlayerAttachedObject","description":"Attach an object to a specific bone on a player.","source":"@site/docs/scripting/functions/SetPlayerAttachedObject.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetPlayerAttachedObject","permalink":"/vi/docs/scripting/functions/SetPlayerAttachedObject","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/SetPlayerAttachedObject.md","tags":[{"inline":true,"label":"player","permalink":"/vi/docs/tags/player"},{"inline":true,"label":"object","permalink":"/vi/docs/tags/object"},{"inline":true,"label":"attachment","permalink":"/vi/docs/tags/attachment"}],"version":"current","frontMatter":{"title":"SetPlayerAttachedObject","sidebar_label":"SetPlayerAttachedObject","description":"Attach an object to a specific bone on a player.","tags":["player","object","attachment"]},"sidebar":"docsSidebar","previous":{"title":"SetPlayerArmour","permalink":"/vi/docs/scripting/functions/SetPlayerArmour"},"next":{"title":"SetPlayerCameraLookAt","permalink":"/vi/docs/scripting/functions/SetPlayerCameraLookAt"}}');var s=n(74848),i=n(28453);const a={title:"SetPlayerAttachedObject",sidebar_label:"SetPlayerAttachedObject",description:"Attach an object to a specific bone on a player.",tags:["player","object","attachment"]},c=void 0,o={},l=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Resources",id:"related-resources",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Attach an object to a specific bone on a player."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"playerid"}),(0,s.jsx)(t.td,{children:"The ID of the player to attach the object to."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"index"}),(0,s.jsx)(t.td,{children:"The index (slot 0-9) to assign the object to."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"modelid"}),(0,s.jsx)(t.td,{children:"The model to attach."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"bone"}),(0,s.jsxs)(t.td,{children:["The ",(0,s.jsx)(t.a,{href:"../resources/boneid",children:"bone"})," to attach the object to."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["Float",":offsetX"]}),(0,s.jsx)(t.td,{children:"(optional) X axis offset for the object position."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["Float",":offsetY"]}),(0,s.jsx)(t.td,{children:"(optional) Y axis offset for the object position."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["Float",":offsetZ"]}),(0,s.jsx)(t.td,{children:"(optional) Z axis offset for the object position."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["Float",":rotationX"]}),(0,s.jsx)(t.td,{children:"(optional) X axis rotation of the object."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["Float",":rotationY"]}),(0,s.jsx)(t.td,{children:"(optional) Y axis rotation of the object."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["Float",":rotationZ"]}),(0,s.jsx)(t.td,{children:"(optional) Z axis rotation of the object."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["Float",":scaleX"]}),(0,s.jsx)(t.td,{children:"(optional) X axis scale of the object."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["Float",":scaleY"]}),(0,s.jsx)(t.td,{children:"(optional) Y axis scale of the object."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["Float",":scaleZ"]}),(0,s.jsx)(t.td,{children:"(optional) Z axis scale of the object."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"materialColour1"}),(0,s.jsx)(t.td,{children:"(optional) The first object color to set, as an integer or hex in ARGB color format."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"materialColour2"}),(0,s.jsx)(t.td,{children:"(optional) The second object color to set, as an integer or hex in ARGB color format"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"1"})," on success, ",(0,s.jsx)(t.strong,{children:"0"})," on failure."]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-c",children:"public OnPlayerSpawn(playerid)\n{\n    SetPlayerAttachedObject(playerid, 3, 1609, 2); // Attach a turtle to the playerid's head, in slot 3\n\n    // Example of using colors on an object being attached to the player:\n    SetPlayerAttachedObject(playerid, 3, 19487, 2, 0.101, -0.0, 0.0, 5.50, 84.60, 83.7, 1.0, 1.0, 1.0, 0xFF00FF00);\n    // Attach a white hat to the head of the player and paint it green\n    return 1;\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsx)(t.p,{children:"This function is separate from the CreateObject / CreatePlayerObject pools."})}),"\n",(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsx)(t.p,{children:"Up to 10 objects can be attached to a single player (index 0-9)"})}),"\n",(0,s.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"RemovePlayerAttachedObject",children:"RemovePlayerAttachedObject"}),": Remove an attached object from a player"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"IsPlayerAttachedObjectSlotUsed",children:"IsPlayerAttachedObjectSlotUsed"}),": Check whether an object is attached to a player in a specified index"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"GetPlayerAttachedObject",children:"GetPlayerAttachedObject"}),": Gets the player attachment object data by index."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"EditAttachedObject",children:"EditAttachedObject"}),": Edit an attached object."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"../resources/boneid",children:"Bone IDs"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>c});var r=n(96540);const s={},i=r.createContext(s);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);