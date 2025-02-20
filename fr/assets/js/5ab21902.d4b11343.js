"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[43213],{25412:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"scripting/functions/SelectTextDraw","title":"SelectTextDraw","description":"Display the cursor and allow the player to select a textdraw.","source":"@site/docs/scripting/functions/SelectTextDraw.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SelectTextDraw","permalink":"/fr/docs/scripting/functions/SelectTextDraw","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/SelectTextDraw.md","tags":[{"inline":true,"label":"textdraw","permalink":"/fr/docs/tags/textdraw"}],"version":"current","frontMatter":{"title":"SelectTextDraw","sidebar_label":"SelectTextDraw","description":"Display the cursor and allow the player to select a textdraw.","tags":["textdraw"]},"sidebar":"docsSidebar","previous":{"title":"SelectObject","permalink":"/fr/docs/scripting/functions/SelectObject"},"next":{"title":"SendChat","permalink":"/fr/docs/scripting/functions/SendChat"}}');var n=l(74848),a=l(28453);const s={title:"SelectTextDraw",sidebar_label:"SelectTextDraw",description:"Display the cursor and allow the player to select a textdraw.",tags:["textdraw"]},i=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function o(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"Display the cursor and allow the player to select a textdraw"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"playerid"}),(0,n.jsx)(t.td,{children:"The ID of the player that should be able to select a textdraw"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"hoverColour"}),(0,n.jsx)(t.td,{children:"The color of the textdraw when hovering over with mouse (RGBA)"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.p,{children:"This function does not return any specific values."}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, "/tdselect", true))\n    {\n        SelectTextDraw(playerid, 0x00FF00FF); // Highlight green when hovering over\n        SendClientMessage(playerid, 0xFFFFFFFF, "SERVER: Please select a textdraw!");\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsx)(t.p,{children:"It is the TEXT which will be highlighted when hovered over, NOT the box (if one is shown)."})}),"\n",(0,n.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"CancelSelectTextDraw",children:"CancelSelectTextDraw"}),": Cancel textdraw selection with the mouse"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"TextDrawSetSelectable",children:"TextDrawSetSelectable"}),": Sets whether a textdraw is selectable through SelectTextDraw"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"PlayerTextDrawSetSelectable",children:"PlayerTextDrawSetSelectable"}),": Sets whether a player-textdraw is selectable through SelectTextDraw"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../callbacks/OnPlayerClickTextDraw",children:"OnPlayerClickTextDraw"}),": Called when a player clicks on a textdraw."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../callbacks/OnPlayerClickPlayerTextDraw",children:"OnPlayerClickPlayerTextDraw"}),": Called when a player clicks on a player-textdraw."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},28453:(e,t,l)=>{l.d(t,{R:()=>s,x:()=>i});var r=l(96540);const n={},a=r.createContext(n);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);