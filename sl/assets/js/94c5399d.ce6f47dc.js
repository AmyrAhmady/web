"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[89003],{28453:(e,t,l)=>{l.d(t,{R:()=>a,x:()=>r});var n=l(96540);const s={},i=n.createContext(s);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(i.Provider,{value:t},e.children)}},66364:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>n,toc:()=>o});const n=JSON.parse('{"id":"scripting/functions/IsValidPlayer3DTextLabel","title":"IsValidPlayer3DTextLabel","description":"Checks if a player\'s 3D text label is valid.","source":"@site/docs/scripting/functions/IsValidPlayer3DTextLabel.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/IsValidPlayer3DTextLabel","permalink":"/sl/docs/scripting/functions/IsValidPlayer3DTextLabel","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/IsValidPlayer3DTextLabel.md","tags":[{"inline":true,"label":"player","permalink":"/sl/docs/tags/player"},{"inline":true,"label":"3dtextlabel","permalink":"/sl/docs/tags/3-dtextlabel"}],"version":"current","frontMatter":{"title":"IsValidPlayer3DTextLabel","sidebar_label":"IsValidPlayer3DTextLabel","description":"Checks if a player\'s 3D text label is valid.","tags":["player","3dtextlabel"]},"sidebar":"docsSidebar","previous":{"title":"IsValidPickup","permalink":"/sl/docs/scripting/functions/IsValidPickup"},"next":{"title":"IsValidPlayerGangZone","permalink":"/sl/docs/scripting/functions/IsValidPlayerGangZone"}}');var s=l(74848),i=l(28453);const a={title:"IsValidPlayer3DTextLabel",sidebar_label:"IsValidPlayer3DTextLabel",description:"Checks if a player's 3D text label is valid.",tags:["player","3dtextlabel"]},r=void 0,d={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{VersionWarn:l}=t;return l||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l,{version:"omp v1.1.0.2612"}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Checks if a player's 3D text label is valid."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"playerid"}),(0,s.jsx)(t.td,{children:"The ID of the player."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["PlayerText3D",":textid"]}),(0,s.jsx)(t.td,{children:"The ID of the player's 3D text label to check."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(t.p,{children:["This function returns ",(0,s.jsx)(t.strong,{children:"true"})," if the player's 3D text label is valid, or ",(0,s.jsx)(t.strong,{children:"false"})," if it is not."]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-c",children:'new PlayerText3D:playerTextId;\nnew Float:X, Float:Y, Float:Z;\n\nGetPlayerPos(playerid, X, Y, Z);\nplayerTextId = CreatePlayer3DTextLabel(playerid, "Hello\\nI\'m at your position", 0x008080FF, X, Y, Z, 40.0);\n\nif (IsValidPlayer3DTextLabel(playerid, playerTextId))\n{\n    // Do something\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"CreatePlayer3DTextLabel",children:"CreatePlayer3DTextLabel"}),": Creates a 3D Text Label only for a specific player."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"IsValid3DTextLabel",children:"IsValid3DTextLabel"}),": Checks if a 3D text label is valid."]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}}}]);