"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[76969],{20365:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>x,frontMatter:()=>o,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"scripting/functions/GetPlayer3DTextLabelColor","title":"GetPlayer3DTextLabelColor","description":"Gets the player\'s 3D text label color.","source":"@site/docs/scripting/functions/GetPlayer3DTextLabelColor.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayer3DTextLabelColor","permalink":"/de/docs/scripting/functions/GetPlayer3DTextLabelColor","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetPlayer3DTextLabelColor.md","tags":[{"inline":true,"label":"player","permalink":"/de/docs/tags/player"},{"inline":true,"label":"3dtextlabel","permalink":"/de/docs/tags/3-dtextlabel"}],"version":"current","frontMatter":{"title":"GetPlayer3DTextLabelColor","sidebar_label":"GetPlayer3DTextLabelColor","description":"Gets the player\'s 3D text label color.","tags":["player","3dtextlabel"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayer3DTextLabelAttachedData","permalink":"/de/docs/scripting/functions/GetPlayer3DTextLabelAttachedData"},"next":{"title":"GetPlayer3DTextLabelColour","permalink":"/de/docs/scripting/functions/GetPlayer3DTextLabelColour"}}');var n=l(74848),a=l(28453);const o={title:"GetPlayer3DTextLabelColor",sidebar_label:"GetPlayer3DTextLabelColor",description:"Gets the player's 3D text label color.",tags:["player","3dtextlabel"]},s=void 0,i={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsxs)(t.p,{children:["This function is deprecated. Please see ",(0,n.jsx)(t.a,{href:"GetPlayer3DTextLabelColour",children:"GetPlayer3DTextLabelColour"}),"."]})}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"Gets the player's 3D text label color."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"playerid"}),(0,n.jsx)(t.td,{children:"The ID of the player."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["PlayerText3D",":textid"]}),(0,n.jsx)(t.td,{children:"The ID of the player's 3D text label to get the color of."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.p,{children:"Returns the player's 3D text label color."}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c",children:'new PlayerText3D:playerTextId;\nnew Float:X, Float:Y, Float:Z;\nnew color;\n\nGetPlayerPos(playerid, X, Y, Z);\nplayerTextId = CreatePlayer3DTextLabel(playerid, "Hello\\nI\'m at your position", 0x008080FF, X, Y, Z, 40.0);\n\ncolor = GetPlayer3DTextLabelColor(playerid, playerTextId);\n// color = 0x008080FF\n'})}),"\n",(0,n.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"Get3DTextLabelColor",children:"Get3DTextLabelColor"}),": Gets the 3D text label color."]}),"\n"]})]})}function x(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,l)=>{l.d(t,{R:()=>o,x:()=>s});var r=l(96540);const n={},a=r.createContext(n);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);