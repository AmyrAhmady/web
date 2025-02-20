"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[84966],{6552:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});const l=JSON.parse('{"id":"scripting/functions/GetPlayerDialogID","title":"GetPlayerDialogID","description":"Get the ID of the dialog currently show to the player.","source":"@site/docs/scripting/functions/GetPlayerDialogID.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerDialogID","permalink":"/bs/docs/scripting/functions/GetPlayerDialogID","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetPlayerDialogID.md","tags":[{"inline":true,"label":"player","permalink":"/bs/docs/tags/player"},{"inline":true,"label":"dialog","permalink":"/bs/docs/tags/dialog"}],"version":"current","frontMatter":{"title":"GetPlayerDialogID","sidebar_label":"GetPlayerDialogID","description":"Get the ID of the dialog currently show to the player.","tags":["player","dialog"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerDialogData","permalink":"/bs/docs/scripting/functions/GetPlayerDialogData"},"next":{"title":"GetPlayerDistanceFromPoint","permalink":"/bs/docs/scripting/functions/GetPlayerDistanceFromPoint"}}');var r=n(74848),a=n(28453);const i={title:"GetPlayerDialogID",sidebar_label:"GetPlayerDialogID",description:"Get the ID of the dialog currently show to the player.",tags:["player","dialog"]},o=void 0,s={},c=[{value:"Description",id:"description",level:2},{value:"Return Values",id:"return-values",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components},{VersionWarn:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n,{version:"omp v1.1.0.2612"}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Get the ID of the dialog currently show to the player."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"playerid"}),(0,r.jsx)(t.td,{children:"The ID of the player."})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"return-values",children:"Return Values"}),"\n",(0,r.jsx)(t.p,{children:"Returns the dialog ID."}),"\n",(0,r.jsxs)(t.p,{children:["Or ",(0,r.jsx)(t.strong,{children:"INVALID_DIALOG_ID"})," if the player is not connected or has no dialog open."]}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:"new dialogID = GetPlayerDialogID(playerid);\nif (dialogID != INVALID_DIALOG_ID)\n{\n    // The player has an open dialog\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"GetPlayerDialogData",children:"GetPlayerDialogData"}),": Get the data of the dialog currently show to the player."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"ShowPlayerDialog",children:"ShowPlayerDialog"}),": Shows the player a synchronous (only one at a time) dialog box."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"../callbacks/OnDialogResponse",children:"OnDialogResponse"}),": Called when a player responds to a dialog."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var l=n(96540);const r={},a=l.createContext(r);function i(e){const t=l.useContext(a);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),l.createElement(a.Provider,{value:t},e.children)}}}]);