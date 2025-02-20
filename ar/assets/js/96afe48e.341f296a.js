"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[37445],{28453:(e,a,l)=>{l.d(a,{R:()=>i,x:()=>c});var r=l(96540);const t={},n=r.createContext(t);function i(e){const a=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(n.Provider,{value:a},e.children)}},60026:(e,a,l)=>{l.r(a),l.d(a,{assets:()=>s,contentTitle:()=>c,default:()=>o,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"scripting/callbacks/OnPlayerClickPlayerTextDraw","title":"OnPlayerClickPlayerTextDraw","description":"This callback is called when a player clicks on a player-textdraw.","source":"@site/docs/scripting/callbacks/OnPlayerClickPlayerTextDraw.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerClickPlayerTextDraw","permalink":"/ar/docs/scripting/callbacks/OnPlayerClickPlayerTextDraw","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnPlayerClickPlayerTextDraw.md","tags":[{"inline":true,"label":"player","permalink":"/ar/docs/tags/player"},{"inline":true,"label":"textdraw","permalink":"/ar/docs/tags/textdraw"},{"inline":true,"label":"playertextdraw","permalink":"/ar/docs/tags/playertextdraw"}],"version":"current","frontMatter":{"title":"OnPlayerClickPlayerTextDraw","sidebar_label":"OnPlayerClickPlayerTextDraw","description":"This callback is called when a player clicks on a player-textdraw.","tags":["player","textdraw","playertextdraw"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerClickPlayerGangZone","permalink":"/ar/docs/scripting/callbacks/OnPlayerClickPlayerGangZone"},"next":{"title":"OnPlayerClickTextDraw","permalink":"/ar/docs/scripting/callbacks/OnPlayerClickTextDraw"}}');var t=l(74848),n=l(28453);const i={title:"OnPlayerClickPlayerTextDraw",sidebar_label:"OnPlayerClickPlayerTextDraw",description:"This callback is called when a player clicks on a player-textdraw.",tags:["player","textdraw","playertextdraw"]},c=void 0,s={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2},{value:"Related Functions",id:"related-functions",level:2}];function y(e){const a={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(a.p,{children:"This callback is called when a player clicks on a player-textdraw. It is not called when player cancels the select mode (ESC) - however, OnPlayerClickTextDraw is."}),"\n",(0,t.jsxs)(a.table,{children:[(0,t.jsx)(a.thead,{children:(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.th,{children:"Name"}),(0,t.jsx)(a.th,{children:"Description"})]})}),(0,t.jsxs)(a.tbody,{children:[(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"playerid"}),(0,t.jsx)(a.td,{children:"The ID of the player that selected a textdraw"})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsxs)(a.td,{children:["PlayerText",":playertextid"]}),(0,t.jsx)(a.td,{children:"The ID of the player-textdraw that the player selected."})]})]})]}),"\n",(0,t.jsx)(a.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(a.p,{children:"It is always called first in filterscripts so returning 1 there also blocks other scripts from processing it."}),"\n",(0,t.jsx)(a.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-c",children:'new PlayerText:gPlayerTextDraw[MAX_PLAYERS];\n\npublic OnPlayerConnect(playerid)\n{\n    // Create the textdraw\n    gPlayerTextDraw[playerid] = CreatePlayerTextDraw(playerid, 10.000000, 141.000000, "MyTextDraw");\n    PlayerTextDrawTextSize(playerid, gPlayerTextDraw[playerid], 60.000000, 20.000000);\n    PlayerTextDrawAlignment(playerid, gPlayerTextDraw[playerid], TEXT_DRAW_ALIGN_LEFT);\n    PlayerTextDrawBackgroundColor(playerid, gPlayerTextDraw[playerid], 0x000000FF);\n    PlayerTextDrawFont(playerid, gPlayerTextDraw[playerid], TEXT_DRAW_FONT_1);\n    PlayerTextDrawLetterSize(playerid, gPlayerTextDraw[playerid], 0.250000, 1.000000);\n    PlayerTextDrawColor(playerid, gPlayerTextDraw[playerid], -1);\n    PlayerTextDrawSetProportional(playerid, gPlayerTextDraw[playerid], true);\n    PlayerTextDrawSetShadow(playerid, gPlayerTextDraw[playerid], 1);\n\n    // Make it selectable\n    PlayerTextDrawSetSelectable(playerid, gPlayerTextDraw[playerid], true);\n\n    // Show it to the player\n    PlayerTextDrawShow(playerid, gPlayerTextDraw[playerid]);\n    return 1;\n}\n\npublic OnPlayerKeyStateChange(playerid, KEY:newkeys, KEY:oldkeys)\n{\n    if (newkeys == KEY_SUBMISSION)\n    {\n        SelectTextDraw(playerid, 0xFF4040AA);\n    }\n    return 1;\n}\n\npublic OnPlayerClickPlayerTextDraw(playerid, PlayerText:playertextid)\n{\n    if (playertextid == gPlayerTextDraw[playerid])\n    {\n        SendClientMessage(playerid, 0xFFFFFFAA, "You clicked on a player-textdraw.");\n        CancelSelectTextDraw(playerid);\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,t.jsx)(a.h2,{id:"notes",children:"Notes"}),"\n",(0,t.jsx)(a.admonition,{type:"warning",children:(0,t.jsxs)(a.p,{children:["When a player presses ESC to cancel selecting a textdraw, ",(0,t.jsx)(a.a,{href:"OnPlayerClickTextDraw",children:"OnPlayerClickTextDraw"})," is called with a textdraw ID of 'INVALID_TEXT_DRAW'. ",(0,t.jsx)(a.a,{href:"OnPlayerClickPlayerTextDraw",children:"OnPlayerClickPlayerTextDraw"})," won't be called also."]})}),"\n",(0,t.jsx)(a.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,t.jsx)(a.p,{children:"The following callbacks might be useful, as they're related to this callback in one way or another."}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.a,{href:"OnPlayerClickTextDraw",children:"OnPlayerClickTextDraw"}),": This callback is called when a player clicks on a textdraw."]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.a,{href:"OnPlayerClickPlayer",children:"OnPlayerClickPlayer"}),": This callback is called when a player click on another."]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,t.jsx)(a.p,{children:"The following functions might be useful, as they're related to this callback in one way or another."}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.a,{href:"../functions/PlayerTextDrawSetSelectable",children:"PlayerTextDrawSetSelectable"}),": Sets whether a player-textdraw is selectable through ",(0,t.jsx)(a.a,{href:"../functions/SelectTextDraw",children:"SelectTextDraw"})]}),"\n"]})]})}function o(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(y,{...e})}):y(e)}}}]);