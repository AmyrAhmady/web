"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[20494],{28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>l});var r=n(96540);const s={},i=r.createContext(s);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}},83679:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"scripting/functions/Is3DTextLabelStreamedIn","title":"Is3DTextLabelStreamedIn","description":"Checks if a 3D text label is streamed in for a player.","source":"@site/docs/scripting/functions/Is3DTextLabelStreamedIn.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/Is3DTextLabelStreamedIn","permalink":"/zh-tw/docs/scripting/functions/Is3DTextLabelStreamedIn","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/Is3DTextLabelStreamedIn.md","tags":[{"inline":true,"label":"3dtextlabel","permalink":"/zh-tw/docs/tags/3-dtextlabel"}],"version":"current","frontMatter":{"title":"Is3DTextLabelStreamedIn","sidebar_label":"Is3DTextLabelStreamedIn","description":"Checks if a 3D text label is streamed in for a player.","tags":["3dtextlabel"]},"sidebar":"docsSidebar","previous":{"title":"InterpolateCameraPos","permalink":"/zh-tw/docs/scripting/functions/InterpolateCameraPos"},"next":{"title":"IsActorInvulnerable","permalink":"/zh-tw/docs/scripting/functions/IsActorInvulnerable"}}');var s=n(74848),i=n(28453);const a={title:"Is3DTextLabelStreamedIn",sidebar_label:"Is3DTextLabelStreamedIn",description:"Checks if a 3D text label is streamed in for a player.",tags:["3dtextlabel"]},l=void 0,o={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Checks if a 3D text label is streamed in for a player."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"playerid"}),(0,s.jsx)(t.td,{children:"The ID of the player."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["Text3D",":textid"]}),(0,s.jsx)(t.td,{children:"The ID of the 3D text label."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(t.p,{children:["This function returns ",(0,s.jsx)(t.strong,{children:"true"})," if the 3D text label is streamed in for the player, or ",(0,s.jsx)(t.strong,{children:"false"})," if it is not."]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-c",children:'new Text3D:gMyLabel;\n\npublic OnGameModeInit()\n{\n    gMyLabel = Create3DTextLabel("I\'m at the coordinates:\\n30.0, 40.0, 50.0", 0x008080FF, 30.0, 40.0, 50.0, 40.0, 0, false);\n    return 1;\n}\n\npublic OnPlayerSpawn(playerid)\n{\n    if (Is3DTextLabelStreamedIn(playerid, gMyLabel))\n    {\n        // Do something\n    }\n    return 1;\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"Create3DTextLabel",children:"Create3DTextLabel"}),": Creates a 3D Text Label at a specific location in the world."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"IsPlayerStreamedIn",children:"IsPlayerStreamedIn"}),": Checks if a player is streamed in for another player."]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}}}]);