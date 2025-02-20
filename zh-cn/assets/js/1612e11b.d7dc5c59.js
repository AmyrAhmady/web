"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[20940],{28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var l=n(96540);const r={},s=l.createContext(r);function a(e){const t=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),l.createElement(s.Provider,{value:t},e.children)}},44326:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});const l=JSON.parse('{"id":"scripting/functions/GetPlayer3DTextLabelPos","title":"GetPlayer3DTextLabelPos","description":"Gets the player\'s 3D text label position.","source":"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/scripting/functions/GetPlayer3DTextLabelPos.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayer3DTextLabelPos","permalink":"/zh-cn/docs/scripting/functions/GetPlayer3DTextLabelPos","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetPlayer3DTextLabelPos.md","tags":[{"inline":true,"label":"player","permalink":"/zh-cn/docs/tags/player"},{"inline":true,"label":"3dtextlabel","permalink":"/zh-cn/docs/tags/3-dtextlabel"}],"version":"current","frontMatter":{"title":"GetPlayer3DTextLabelPos","sidebar_label":"GetPlayer3DTextLabelPos","description":"Gets the player\'s 3D text label position.","tags":["player","3dtextlabel"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayer3DTextLabelLOS","permalink":"/zh-cn/docs/scripting/functions/GetPlayer3DTextLabelLOS"},"next":{"title":"GetPlayer3DTextLabelText","permalink":"/zh-cn/docs/scripting/functions/GetPlayer3DTextLabelText"}}');var r=n(74848),s=n(28453);const a={title:"GetPlayer3DTextLabelPos",sidebar_label:"GetPlayer3DTextLabelPos",description:"Gets the player's 3D text label position.",tags:["player","3dtextlabel"]},i=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Gets the player's 3D text label position."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"playerid"}),(0,r.jsx)(t.td,{children:"The ID of the player."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["PlayerText3D",":textid"]}),(0,r.jsx)(t.td,{children:"The ID of the player's 3D text label to get the position of."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["&Float",":x"]}),(0,r.jsx)(t.td,{children:"An float variable into which to store the X coordinate, passed by reference."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["&Float",":y"]}),(0,r.jsx)(t.td,{children:"An float variable into which to store the Y coordinate, passed by reference."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["&Float",":z"]}),(0,r.jsx)(t.td,{children:"An float variable into which to store the Z coordinate, passed by reference."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:'new PlayerText3D:playerTextId;\nnew Float:playerX, Float:playerY, Float:playerZ;\n\nGetPlayerPos(playerid, playerX, playerY, playerZ);\nplayerTextId = CreatePlayer3DTextLabel(playerid, "Hello\\nI\'m at your position", 0x008080FF, playerX, playerY, playerZ, 40.0);\n\nnew Float:x, Float:y, Float:z;\nGetPlayer3DTextLabelPos(playerid, playerTextId, x, y, z);\n'})}),"\n",(0,r.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"Get3DTextLabelPos",children:"Get3DTextLabelPos"}),": Gets the 3D text label position."]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);