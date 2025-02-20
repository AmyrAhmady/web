"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[65618],{28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var r=n(96540);const l={},a=r.createContext(l);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),r.createElement(a.Provider,{value:t},e.children)}},48799:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>x,frontMatter:()=>s,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"scripting/functions/TextDrawSetSelectable","title":"TextDrawSetSelectable","description":"Sets whether a textdraw can be selected (clicked on) or not.","source":"@site/docs/scripting/functions/TextDrawSetSelectable.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/TextDrawSetSelectable","permalink":"/sr/docs/scripting/functions/TextDrawSetSelectable","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/TextDrawSetSelectable.md","tags":[{"inline":true,"label":"textdraw","permalink":"/sr/docs/tags/textdraw"}],"version":"current","frontMatter":{"title":"TextDrawSetSelectable","sidebar_label":"TextDrawSetSelectable","description":"Sets whether a textdraw can be selected (clicked on) or not.","tags":["textdraw"]},"sidebar":"docsSidebar","previous":{"title":"TextDrawSetProportional","permalink":"/sr/docs/scripting/functions/TextDrawSetProportional"},"next":{"title":"TextDrawSetShadow","permalink":"/sr/docs/scripting/functions/TextDrawSetShadow"}}');var l=n(74848),a=n(28453);const s={title:"TextDrawSetSelectable",sidebar_label:"TextDrawSetSelectable",description:"Sets whether a textdraw can be selected (clicked on) or not.",tags:["textdraw"]},i=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function o(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(t.p,{children:"Sets whether a textdraw can be selected (clicked on) or not"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Name"}),(0,l.jsx)(t.th,{children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{children:["Text",":textid"]}),(0,l.jsx)(t.td,{children:"The ID of the textdraw to make selectable."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{children:["bool",":selectable"]}),(0,l.jsx)(t.td,{children:"'true' to make it selectable, or 'false' to make it not selectable."})]})]})]}),"\n",(0,l.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsx)(t.p,{children:"This function does not return any specific values."}),"\n",(0,l.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-c",children:'new Text:gMyTextdraw;\n\npublic OnGameModeInit()\n{\n    gMyTextdraw = TextDrawCreate(100.0, 33.0, "Example TextDraw");\n    TextDrawTextSize(gMyTextdraw, 30.0, 10.0);\n    TextDrawSetSelectable(gMyTextdraw, true);\n    return 1;\n}\n'})}),"\n",(0,l.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,l.jsx)(t.admonition,{type:"tip",children:(0,l.jsxs)(t.p,{children:["Use ",(0,l.jsx)(t.a,{href:"TextDrawTextSize",children:"TextDrawTextSize"})," to define the clickable area."]})}),"\n",(0,l.jsx)(t.admonition,{type:"warning",children:(0,l.jsx)(t.p,{children:"TextDrawSetSelectable must be used BEFORE the textdraw is shown to players for it to be selectable."})}),"\n",(0,l.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"TextDrawIsSelectable",children:"TextDrawIsSelectable"}),": Checks if a textdraw is selectable."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"SelectTextDraw",children:"SelectTextDraw"}),": Enables the mouse, so the player can select a textdraw"]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"CancelSelectTextDraw",children:"CancelSelectTextDraw"}),": Cancel textdraw selection with the mouse"]}),"\n"]}),"\n",(0,l.jsx)(t.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"../callbacks/OnPlayerClickTextDraw",children:"OnPlayerClickTextDraw"}),": Called when a player clicks on a textdraw."]}),"\n"]})]})}function x(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}}}]);