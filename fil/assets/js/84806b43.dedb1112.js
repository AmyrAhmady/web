"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[1512],{28453:(e,t,l)=>{l.d(t,{R:()=>i,x:()=>s});var r=l(96540);const a={},n=r.createContext(a);function i(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(n.Provider,{value:t},e.children)}},59916:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>x,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"scripting/functions/PlayerTextDrawSetSelectable","title":"PlayerTextDrawSetSelectable","description":"Toggles whether a player-textdraw can be selected or not.","source":"@site/docs/scripting/functions/PlayerTextDrawSetSelectable.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/PlayerTextDrawSetSelectable","permalink":"/fil/docs/scripting/functions/PlayerTextDrawSetSelectable","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/PlayerTextDrawSetSelectable.md","tags":[{"inline":true,"label":"player","permalink":"/fil/docs/tags/player"},{"inline":true,"label":"textdraw","permalink":"/fil/docs/tags/textdraw"},{"inline":true,"label":"playertextdraw","permalink":"/fil/docs/tags/playertextdraw"}],"version":"current","frontMatter":{"title":"PlayerTextDrawSetSelectable","sidebar_label":"PlayerTextDrawSetSelectable","description":"Toggles whether a player-textdraw can be selected or not.","tags":["player","textdraw","playertextdraw"]},"sidebar":"docsSidebar","previous":{"title":"PlayerTextDrawSetProportional","permalink":"/fil/docs/scripting/functions/PlayerTextDrawSetProportional"},"next":{"title":"PlayerTextDrawSetShadow","permalink":"/fil/docs/scripting/functions/PlayerTextDrawSetShadow"}}');var a=l(74848),n=l(28453);const i={title:"PlayerTextDrawSetSelectable",sidebar_label:"PlayerTextDrawSetSelectable",description:"Toggles whether a player-textdraw can be selected or not.",tags:["player","textdraw","playertextdraw"]},s=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function o(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(t.p,{children:"Toggles whether a player-textdraw can be selected or not."}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"playerid"}),(0,a.jsx)(t.td,{children:"The ID of the player whose player-textdraw to set the selectability of."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{children:["PlayerText",":textid"]}),(0,a.jsx)(t.td,{children:"The ID of the player-textdraw to set the selectability of."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{children:["bool",":selectable"]}),(0,a.jsx)(t.td,{children:"Set the player-textdraw selectable 'true' or non-selectable 'false'. By default this is 'false'."})]})]})]}),"\n",(0,a.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(t.p,{children:"This function does not return any specific values."}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-c",children:"new PlayerText:welcomeText[MAX_PLAYERS];\n\npublic OnPlayerConnect(playerid)\n{\n    welcomeText[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, \"Welcome to my server\");\n    PlayerTextDrawTextSize(playerid, welcomeText[playerid], 30.0, 10.0);\n    \n    // Set 'welcomeText[playerid]' selectable\n    PlayerTextDrawSetSelectable(playerid, welcomeText[playerid], true);\n\n    // Enable select textdraw for player\n    SelectTextDraw(playerid, 0xFF0000FF);\n\n    // Show 'welcomeText[playerid]' to the player\n    PlayerTextDrawShow(playerid, welcomeText[playerid]);\n    return 1;\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsxs)(t.p,{children:["Use ",(0,a.jsx)(t.a,{href:"PlayerTextDrawTextSize",children:"PlayerTextDrawTextSize"})," to define the clickable area."]})}),"\n",(0,a.jsx)(t.admonition,{type:"warning",children:(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"PlayerTextDrawSetSelectable",children:"PlayerTextDrawSetSelectable"})," and ",(0,a.jsx)(t.a,{href:"SelectTextDraw",children:"SelectTextDraw"})," MUST be used BEFORE the textdraw is shown to the player."]})}),"\n",(0,a.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"PlayerTextDrawIsSelectable",children:"PlayerTextDrawIsSelectable"}),": Checks if a player-textdraw is selectable."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"SelectTextDraw",children:"SelectTextDraw"}),": Enables the mouse, so the player can select a textdraw"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"CancelSelectTextDraw",children:"CancelSelectTextDraw"}),": Cancel textdraw selection with the mouse"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"../callbacks/OnPlayerClickPlayerTextDraw",children:"OnPlayerClickPlayerTextDraw"}),": Called when a player clicks on a player-textdraw."]}),"\n"]})]})}function x(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}}}]);