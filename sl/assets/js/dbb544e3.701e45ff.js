"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[33062],{28453:(e,t,l)=>{l.d(t,{R:()=>s,x:()=>i});var r=l(96540);const n={},a=r.createContext(n);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(a.Provider,{value:t},e.children)}},71248:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"scripting/functions/GetPlayer3DTextLabelText","title":"GetPlayer3DTextLabelText","description":"Gets the player\'s 3D text label text.","source":"@site/docs/scripting/functions/GetPlayer3DTextLabelText.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayer3DTextLabelText","permalink":"/sl/docs/scripting/functions/GetPlayer3DTextLabelText","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetPlayer3DTextLabelText.md","tags":[{"inline":true,"label":"player","permalink":"/sl/docs/tags/player"},{"inline":true,"label":"3dtextlabel","permalink":"/sl/docs/tags/3-dtextlabel"}],"version":"current","frontMatter":{"title":"GetPlayer3DTextLabelText","sidebar_label":"GetPlayer3DTextLabelText","description":"Gets the player\'s 3D text label text.","tags":["player","3dtextlabel"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayer3DTextLabelPos","permalink":"/sl/docs/scripting/functions/GetPlayer3DTextLabelPos"},"next":{"title":"GetPlayer3DTextLabelVirtualWorld","permalink":"/sl/docs/scripting/functions/GetPlayer3DTextLabelVirtualWorld"}}');var n=l(74848),a=l(28453);const s={title:"GetPlayer3DTextLabelText",sidebar_label:"GetPlayer3DTextLabelText",description:"Gets the player's 3D text label text.",tags:["player","3dtextlabel"]},i=void 0,o={},d=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function x(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components},{VersionWarn:l}=t;return l||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l,{version:"omp v1.1.0.2612"}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"Gets the player's 3D text label text."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"playerid"}),(0,n.jsx)(t.td,{children:"The ID of the player."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["PlayerText3D",":textid"]}),(0,n.jsx)(t.td,{children:"The ID of the player's 3D text label to get the text of."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"text[]"}),(0,n.jsx)(t.td,{children:"An array into which to store the text, passed by reference."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"len"}),(0,n.jsx)(t.td,{children:"The length of the text that should be stored."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c",children:'new PlayerText3D:playerTextId;\nnew Float:X, Float:Y, Float:Z;\nnew text[16];\n\nGetPlayerPos(playerid, X, Y, Z);\nplayerTextId = CreatePlayer3DTextLabel(playerid, "Hello World!", 0x008080FF, X, Y, Z, 40.0);\n\nGetPlayer3DTextLabelText(playerid, playerTextId, text, sizeof(text));\n// text = "Hello World!"\n'})}),"\n",(0,n.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"CreatePlayer3DTextLabel",children:"CreatePlayer3DTextLabel"}),": Creates a 3D Text Label only for a specific player."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"UpdatePlayer3DTextLabelText",children:"UpdatePlayer3DTextLabelText"}),": Updates a player 3D Text Label's text and colour."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"Get3DTextLabelText",children:"Get3DTextLabelText"}),": Gets the 3D text label text."]}),"\n"]})]})}function c(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}}}]);