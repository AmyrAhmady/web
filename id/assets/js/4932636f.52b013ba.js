"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[39260],{28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>p});var r=t(96540);const i={},a=r.createContext(i);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function p(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:n},e.children)}},84472:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>p,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"scripting/functions/GetPVarsUpperIndex","title":"GetPVarsUpperIndex","description":"Each PVar (player-variable) has its own unique identification number for lookup, this function returns the highest ID set for a player.","source":"@site/docs/scripting/functions/GetPVarsUpperIndex.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPVarsUpperIndex","permalink":"/id/docs/scripting/functions/GetPVarsUpperIndex","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetPVarsUpperIndex.md","tags":[{"inline":true,"label":"player variable","permalink":"/id/docs/tags/player-variable"},{"inline":true,"label":"pvar","permalink":"/id/docs/tags/pvar"}],"version":"current","frontMatter":{"title":"GetPVarsUpperIndex","sidebar_label":"GetPVarsUpperIndex","description":"Each PVar (player-variable) has its own unique identification number for lookup, this function returns the highest ID set for a player.","tags":["player variable","pvar"]},"sidebar":"docsSidebar","previous":{"title":"GetPVarType","permalink":"/id/docs/scripting/functions/GetPVarType"},"next":{"title":"GetPickupModel","permalink":"/id/docs/scripting/functions/GetPickupModel"}}');var i=t(74848),a=t(28453);const s={title:"GetPVarsUpperIndex",sidebar_label:"GetPVarsUpperIndex",description:"Each PVar (player-variable) has its own unique identification number for lookup, this function returns the highest ID set for a player.",tags:["player variable","pvar"]},p=void 0,l={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Each PVar (player-variable) has its own unique identification number for lookup, this function returns the highest ID set for a player."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"playerid"}),(0,i.jsx)(n.td,{children:"The ID of the player to get the upper PVar index of."})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:"The highest set PVar ID."}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"// Store the upper index in the variable 'PVarUpperIndex' + 1\nnew PVarUpperIndex = GetPVarsUpperIndex(playerid) + 1;\n\n// This pVarCount variable will store how many pVars a player has set as we count them.\nnew pVarCount;\n\nnew pVarName[128];\n\nfor(new i = 0; i\xa0!= PVarUpperIndex; i++) // Loop through all pVar IDs under the upper index\n{\n    // At first, we need to get PVar name\n    GetPVarNameAtIndex(playerid, i, pVarName, sizeof(pVarName));\n\n    // If the var is set (type not 0), increment pVarCount.\n    if (GetPVarType(playerid, pVarName)\xa0!= 0)\n    {\n        pVarCount++;\n    }\n}\n\nnew szString[128];\nformat(szString, sizeof(szString), \"You have %i player-variables set. Upper index (highest ID): %i.\", pVarCount, PVarUpperIndex-1);\nSendClientMessage(playerid, -1, szString);\n"})}),"\n",(0,i.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"GetPVarNameAtIndex",children:"GetPVarNameAtIndex"}),": Get the player variable's name from its index."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"GetPVarType",children:"GetPVarType"}),": Get the type of the player variable."]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);