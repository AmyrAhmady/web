"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[25020],{28453:(e,t,a)=>{a.d(t,{R:()=>s,x:()=>i});var n=a(96540);const r={},l=n.createContext(r);function s(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(l.Provider,{value:t},e.children)}},44677:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"scripting/functions/GetPlayer3DTextLabelDrawDistance","title":"GetPlayer3DTextLabelDrawDistance","description":"Gets the player\'s 3D text label draw distance.","source":"@site/docs/scripting/functions/GetPlayer3DTextLabelDrawDistance.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayer3DTextLabelDrawDistance","permalink":"/pt-BR/docs/scripting/functions/GetPlayer3DTextLabelDrawDistance","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetPlayer3DTextLabelDrawDistance.md","tags":[{"inline":true,"label":"player","permalink":"/pt-BR/docs/tags/player"},{"inline":true,"label":"3dtextlabel","permalink":"/pt-BR/docs/tags/3-dtextlabel"}],"version":"current","frontMatter":{"title":"GetPlayer3DTextLabelDrawDistance","sidebar_label":"GetPlayer3DTextLabelDrawDistance","description":"Gets the player\'s 3D text label draw distance.","tags":["player","3dtextlabel"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayer3DTextLabelDrawDist","permalink":"/pt-BR/docs/scripting/functions/GetPlayer3DTextLabelDrawDist"},"next":{"title":"GetPlayer3DTextLabelLOS","permalink":"/pt-BR/docs/scripting/functions/GetPlayer3DTextLabelLOS"}}');var r=a(74848),l=a(28453);const s={title:"GetPlayer3DTextLabelDrawDistance",sidebar_label:"GetPlayer3DTextLabelDrawDistance",description:"Gets the player's 3D text label draw distance.",tags:["player","3dtextlabel"]},i=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function o(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components},{VersionWarn:a}=t;return a||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a,{version:"omp v1.1.0.2612"}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Gets the player's 3D text label draw distance."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"playerid"}),(0,r.jsx)(t.td,{children:"The ID of the player."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["PlayerText3D",":textid"]}),(0,r.jsx)(t.td,{children:"The ID of the player's 3D text label to get the draw distance of."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(t.p,{children:"Returns the draw distance of the player's 3D text label as float."}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:'new PlayerText3D:playerTextId;\nnew Float:x, Float:y, Float:z;\nnew Float:drawDistance;\n\nGetPlayerPos(playerid, x, y, z);\nplayerTextId = CreatePlayer3DTextLabel(playerid, "Hello\\nI\'m at your position", 0x008080FF, x, y, z, 40.0);\n\ndrawDistance = GetPlayer3DTextLabelDrawDistance(playerid, playerTextId);\n// drawDistance = 40.0\n'})}),"\n",(0,r.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"SetPlayer3DTextLabelDrawDistance",children:"SetPlayer3DTextLabelDrawDistance"}),": Sets the player's 3D text label draw distance."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"Get3DTextLabelDrawDistance",children:"Get3DTextLabelDrawDistance"}),": Gets the 3D text label draw distance."]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}}}]);