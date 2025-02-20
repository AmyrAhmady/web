"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[24044],{28453:(e,t,l)=>{l.d(t,{R:()=>a,x:()=>i});var n=l(96540);const r={},s=n.createContext(r);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(s.Provider,{value:t},e.children)}},80298:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"scripting/functions/GetPlayer3DTextLabelLOS","title":"GetPlayer3DTextLabelLOS","description":"Gets the player\'s 3D text label line-of-sight.","source":"@site/docs/scripting/functions/GetPlayer3DTextLabelLOS.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayer3DTextLabelLOS","permalink":"/de/docs/scripting/functions/GetPlayer3DTextLabelLOS","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetPlayer3DTextLabelLOS.md","tags":[{"inline":true,"label":"player","permalink":"/de/docs/tags/player"},{"inline":true,"label":"3dtextlabel","permalink":"/de/docs/tags/3-dtextlabel"}],"version":"current","frontMatter":{"title":"GetPlayer3DTextLabelLOS","sidebar_label":"GetPlayer3DTextLabelLOS","description":"Gets the player\'s 3D text label line-of-sight.","tags":["player","3dtextlabel"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayer3DTextLabelDrawDistance","permalink":"/de/docs/scripting/functions/GetPlayer3DTextLabelDrawDistance"},"next":{"title":"GetPlayer3DTextLabelPos","permalink":"/de/docs/scripting/functions/GetPlayer3DTextLabelPos"}}');var r=l(74848),s=l(28453);const a={title:"GetPlayer3DTextLabelLOS",sidebar_label:"GetPlayer3DTextLabelLOS",description:"Gets the player's 3D text label line-of-sight.",tags:["player","3dtextlabel"]},i=void 0,o={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components},{VersionWarn:l}=t;return l||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l,{version:"omp v1.1.0.2612"}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Gets the player's 3D text label line-of-sight."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"playerid"}),(0,r.jsx)(t.td,{children:"The ID of the player."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["PlayerText3D",":textid"]}),(0,r.jsx)(t.td,{children:"The ID of the player's 3D text label to get the line-of-sight of."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(t.p,{children:"Returns the line-of-sight of the player's 3D text label as boolean (false/true)."}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:'new PlayerText3D:playerTextId;\nnew Float:X, Float:Y, Float:Z;\nnew bool:testLOS;\n\nGetPlayerPos(playerid, X, Y, Z);\nplayerTextId = CreatePlayer3DTextLabel(playerid, "Hello\\nI\'m at your position", 0x008080FF, X, Y, Z, 40.0, INVALID_PLAYER_ID, INVALID_VEHICLE_ID, true);\n\ntestLOS = GetPlayer3DTextLabelLOS(playerid, playerTextId);\n// testLOS = true\n'})}),"\n",(0,r.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"SetPlayer3DTextLabelLOS",children:"SetPlayer3DTextLabelLOS"}),": Sets the player's 3D text label line-of-sight."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"Get3DTextLabelLOS",children:"Get3DTextLabelLOS"}),": Gets the 3D text label line-of-sight."]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}}}]);