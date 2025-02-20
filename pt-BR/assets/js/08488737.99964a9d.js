"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[37426],{28453:(e,t,l)=>{l.d(t,{R:()=>r,x:()=>s});var n=l(96540);const a={},i=n.createContext(a);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(i.Provider,{value:t},e.children)}},45080:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"scripting/functions/GetPlayerDialog","title":"GetPlayerDialog","description":"Get the ID of the dialog currently show to the player.","source":"@site/docs/scripting/functions/GetPlayerDialog.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerDialog","permalink":"/pt-BR/docs/scripting/functions/GetPlayerDialog","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetPlayerDialog.md","tags":[{"inline":true,"label":"player","permalink":"/pt-BR/docs/tags/player"},{"inline":true,"label":"dialog","permalink":"/pt-BR/docs/tags/dialog"}],"version":"current","frontMatter":{"title":"GetPlayerDialog","sidebar_label":"GetPlayerDialog","description":"Get the ID of the dialog currently show to the player.","tags":["player","dialog"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerCustomSkin","permalink":"/pt-BR/docs/scripting/functions/GetPlayerCustomSkin"},"next":{"title":"GetPlayerDialogData","permalink":"/pt-BR/docs/scripting/functions/GetPlayerDialogData"}}');var a=l(74848),i=l(28453);const r={title:"GetPlayerDialog",sidebar_label:"GetPlayerDialog",description:"Get the ID of the dialog currently show to the player.",tags:["player","dialog"]},s=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Return Values",id:"return-values",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.admonition,{type:"warning",children:(0,a.jsxs)(t.p,{children:["This function is deprecated. Use ",(0,a.jsx)(t.a,{href:"GetPlayerDialogID",children:"GetPlayerDialogID"}),"."]})}),"\n",(0,a.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(t.p,{children:"Get the ID of the dialog currently show to the player."}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"playerid"}),(0,a.jsx)(t.td,{children:"The ID of the player."})]})})]}),"\n",(0,a.jsx)(t.h2,{id:"return-values",children:"Return Values"}),"\n",(0,a.jsx)(t.p,{children:"Returns the dialog ID."}),"\n",(0,a.jsxs)(t.p,{children:["Or ",(0,a.jsx)(t.strong,{children:"INVALID_DIALOG_ID"})," if the player is not connected or has no dialog open."]}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-c",children:"new dialogID = GetPlayerDialog(playerid);\nif (dialogID != INVALID_DIALOG_ID)\n{\n    // The player has an open dialog\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"GetPlayerDialogData",children:"GetPlayerDialogData"}),": Get the data of the dialog currently show to the player."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"ShowPlayerDialog",children:"ShowPlayerDialog"}),": Shows the player a synchronous (only one at a time) dialog box."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"../callbacks/OnDialogResponse",children:"OnDialogResponse"}),": Called when a player responds to a dialog."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}}}]);