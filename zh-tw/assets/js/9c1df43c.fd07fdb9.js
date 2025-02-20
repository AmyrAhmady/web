"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[65128],{28453:(e,l,r)=>{r.d(l,{R:()=>a,x:()=>i});var s=r(96540);const n={},c=s.createContext(n);function a(e){const l=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function i(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(c.Provider,{value:l},e.children)}},28987:(e,l,r)=>{r.r(l),r.d(l,{assets:()=>t,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"scripting/callbacks/OnPlayerClickPlayer","title":"OnPlayerClickPlayer","description":"This callback is called when a player double-clicks on a player on the scoreboard.","source":"@site/docs/scripting/callbacks/OnPlayerClickPlayer.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerClickPlayer","permalink":"/zh-tw/docs/scripting/callbacks/OnPlayerClickPlayer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnPlayerClickPlayer.md","tags":[{"inline":true,"label":"player","permalink":"/zh-tw/docs/tags/player"}],"version":"current","frontMatter":{"title":"OnPlayerClickPlayer","sidebar_label":"OnPlayerClickPlayer","description":"This callback is called when a player double-clicks on a player on the scoreboard.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerClickMap","permalink":"/zh-tw/docs/scripting/callbacks/OnPlayerClickMap"},"next":{"title":"OnPlayerClickPlayerGangZone","permalink":"/zh-tw/docs/scripting/callbacks/OnPlayerClickPlayerGangZone"}}');var n=r(74848),c=r(28453);const a={title:"OnPlayerClickPlayer",sidebar_label:"OnPlayerClickPlayer",description:"This callback is called when a player double-clicks on a player on the scoreboard.",tags:["player"]},i=void 0,t={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2},{value:"Related Resources",id:"related-resources",level:2}];function o(e){const l={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(l.p,{children:"This callback is called when a player double-clicks on a player on the scoreboard."}),"\n",(0,n.jsxs)(l.table,{children:[(0,n.jsx)(l.thead,{children:(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.th,{children:"Name"}),(0,n.jsx)(l.th,{children:"Description"})]})}),(0,n.jsxs)(l.tbody,{children:[(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{children:"playerid"}),(0,n.jsx)(l.td,{children:"The ID of the player that clicked on a player on the scoreboard."})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{children:"clickedplayerid"}),(0,n.jsx)(l.td,{children:"The ID of the player that was clicked on."})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{children:"source"}),(0,n.jsxs)(l.td,{children:["The ",(0,n.jsx)(l.a,{href:"../resources/clicksources",children:"source"})," of the player's click."]})]})]})]}),"\n",(0,n.jsx)(l.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(l.p,{children:"1 - Will prevent other filterscripts from receiving this callback."}),"\n",(0,n.jsx)(l.p,{children:"0 - Indicates that this callback will be passed to the next filterscript."}),"\n",(0,n.jsx)(l.p,{children:"It is always called first in filterscripts."}),"\n",(0,n.jsx)(l.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-c",children:'public OnPlayerClickPlayer(playerid, clickedplayerid, CLICK_SOURCE:source)\n{\n    new string[32];\n    format(string, sizeof(string), "You clicked on player %d", clickedplayerid);\n    SendClientMessage(playerid, 0xFFFFFFFF, string);\n    return 1;\n}\n'})}),"\n",(0,n.jsx)(l.h2,{id:"notes",children:"Notes"}),"\n",(0,n.jsxs)(l.admonition,{type:"tip",children:[(0,n.jsxs)(l.p,{children:["There is currently only one 'source' (0 - ",(0,n.jsx)(l.code,{children:"CLICK_SOURCE_SCOREBOARD"}),")."]}),(0,n.jsx)(l.p,{children:"The existence of this argument suggests that more sources may be supported in the future."})]}),"\n",(0,n.jsx)(l.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,n.jsx)(l.p,{children:"The following callbacks might be useful, as they're related to this callback in one way or another."}),"\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsxs)(l.li,{children:[(0,n.jsx)(l.a,{href:"OnPlayerClickTextDraw",children:"OnPlayerClickTextDraw"}),": This callback is called when a player clicks on a textdraw."]}),"\n"]}),"\n",(0,n.jsx)(l.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsx)(l.li,{children:(0,n.jsx)(l.a,{href:"../resources/clicksources",children:"Click Sources"})}),"\n"]})]})}function h(e={}){const{wrapper:l}={...(0,c.R)(),...e.components};return l?(0,n.jsx)(l,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}}}]);