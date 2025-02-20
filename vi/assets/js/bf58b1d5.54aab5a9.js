"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[82626],{28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>r});var l=i(96540);const t={},c=l.createContext(t);function a(e){const n=l.useContext(c);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),l.createElement(c.Provider,{value:n},e.children)}},63723:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});const l=JSON.parse('{"id":"scripting/callbacks/OnPlayerExitedMenu","title":"OnPlayerExitedMenu","description":"Callback n\xe0y \u0111\u01b0\u1ee3c g\u1ecdi khi m\u1ed9t ng\u01b0\u1eddi ch\u01a1i tho\xe1t kh\u1ecfi menu.","source":"@site/i18n/vi/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerExitedMenu.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerExitedMenu","permalink":"/vi/docs/scripting/callbacks/OnPlayerExitedMenu","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnPlayerExitedMenu.md","tags":[{"inline":true,"label":"player","permalink":"/vi/docs/tags/player"},{"inline":true,"label":"menu","permalink":"/vi/docs/tags/menu"}],"version":"current","frontMatter":{"title":"OnPlayerExitedMenu","sidebar_label":"OnPlayerExitedMenu","description":"Callback n\xe0y \u0111\u01b0\u1ee3c g\u1ecdi khi m\u1ed9t ng\u01b0\u1eddi ch\u01a1i tho\xe1t kh\u1ecfi menu.","tags":["player","menu"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerExitVehicle","permalink":"/vi/docs/scripting/callbacks/OnPlayerExitVehicle"},"next":{"title":"OnPlayerFinishedDownloading","permalink":"/vi/docs/scripting/callbacks/OnPlayerFinishedDownloading"}}');var t=i(74848),c=i(28453);const a={title:"OnPlayerExitedMenu",sidebar_label:"OnPlayerExitedMenu",description:"Callback n\xe0y \u0111\u01b0\u1ee3c g\u1ecdi khi m\u1ed9t ng\u01b0\u1eddi ch\u01a1i tho\xe1t kh\u1ecfi menu.",tags:["player","menu"]},r=void 0,s={},d=[{value:"M\xf4 T\u1ea3",id:"m\xf4-t\u1ea3",level:2},{value:"Tr\u1ea3 V\u1ec1",id:"tr\u1ea3-v\u1ec1",level:2},{value:"V\xed D\u1ee5",id:"v\xed-d\u1ee5",level:2},{value:"C\xe1c Callbacks Li\xean Quan",id:"c\xe1c-callbacks-li\xean-quan",level:2},{value:"C\xe1c H\xe0m Li\xean Quan",id:"c\xe1c-h\xe0m-li\xean-quan",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"m\xf4-t\u1ea3",children:"M\xf4 T\u1ea3"}),"\n",(0,t.jsx)(n.p,{children:"Callback n\xe0y \u0111\u01b0\u1ee3c g\u1ecdi khi m\u1ed9t ng\u01b0\u1eddi ch\u01a1i tho\xe1t kh\u1ecfi menu."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"T\xean"}),(0,t.jsx)(n.th,{children:"M\xf4 T\u1ea3"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"playerid"}),(0,t.jsx)(n.td,{children:"ID c\u1ee7a ng\u01b0\u1eddi ch\u01a1i \u0111\xe3 tho\xe1t kh\u1ecfi menu"})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"tr\u1ea3-v\u1ec1",children:"Tr\u1ea3 V\u1ec1"}),"\n",(0,t.jsx)(n.p,{children:"Callback n\xe0y lu\xf4n \u0111\u01b0\u1ee3c g\u1ecdi \u0111\u1ea7u ti\xean trong gamemode."}),"\n",(0,t.jsx)(n.h2,{id:"v\xed-d\u1ee5",children:"V\xed D\u1ee5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"public OnPlayerExitedMenu(playerid)\n{\n    TogglePlayerControllable(playerid, true); // gi\u1ea3i ph\xf3ng ng\u01b0\u1eddi ch\u01a1i khi h\u1ecd tho\xe1t kh\u1ecfi menu\n    return 1;\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"c\xe1c-callbacks-li\xean-quan",children:"C\xe1c Callbacks Li\xean Quan"}),"\n",(0,t.jsx)(n.p,{children:"C\xe1c callback sau \u0111\xe2y c\xf3 th\u1ec3 h\u1eefu \xedch v\xec ch\xfang li\xean quan \u0111\u1ebfn callback n\xe0y theo m\u1ed9t c\xe1ch n\xe0o \u0111\xf3."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"OnPlayerSelectedMenuRow",children:"OnPlayerSelectedMenuRow"}),": Callback n\xe0y \u0111\u01b0\u1ee3c g\u1ecdi khi m\u1ed9t ng\u01b0\u1eddi ch\u01a1i ch\u1ecdn m\u1ed9t h\xe0ng trong menu."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"c\xe1c-h\xe0m-li\xean-quan",children:"C\xe1c H\xe0m Li\xean Quan"}),"\n",(0,t.jsx)(n.p,{children:"C\xe1c h\xe0m sau \u0111\xe2y c\xf3 th\u1ec3 h\u1eefu \xedch v\xec ch\xfang li\xean quan \u0111\u1ebfn callback n\xe0y theo m\u1ed9t c\xe1ch n\xe0o \u0111\xf3."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"../functions/CreateMenu",children:"CreateMenu"}),": T\u1ea1o m\u1ed9t menu."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"../functions/DestroyMenu",children:"DestroyMenu"}),": X\xf3a m\u1ed9t menu."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}}}]);