"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[71356],{27189:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"scripting/callbacks/OnPlayerPickUpPickup","title":"OnPlayerPickUpPickup","description":"Apelat atunci c\xe2nd un juc\u0103tor preia un pick-up creat cu CreatePickup.","source":"@site/i18n/ro/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerPickUpPickup.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerPickUpPickup","permalink":"/ro/docs/scripting/callbacks/OnPlayerPickUpPickup","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnPlayerPickUpPickup.md","tags":[{"inline":true,"label":"player","permalink":"/ro/docs/tags/player"}],"version":"current","frontMatter":{"title":"OnPlayerPickUpPickup","sidebar_label":"OnPlayerPickUpPickup","description":"Apelat atunci c\xe2nd un juc\u0103tor preia un pick-up creat cu CreatePickup.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerObjectMoved","permalink":"/ro/docs/scripting/callbacks/OnPlayerObjectMoved"},"next":{"title":"OnPlayerPickUpPlayerPickup","permalink":"/ro/docs/scripting/callbacks/OnPlayerPickUpPlayerPickup"}}');var c=n(74848),t=n(28453);const l={title:"OnPlayerPickUpPickup",sidebar_label:"OnPlayerPickUpPickup",description:"Apelat atunci c\xe2nd un juc\u0103tor preia un pick-up creat cu CreatePickup.",tags:["player"]},a=void 0,p={},u=[{value:"Descriere",id:"descriere",level:2},{value:"Return\u0103ri",id:"return\u0103ri",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Func\u021bii similare",id:"func\u021bii-similare",level:2}];function s(e){const i={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i.h2,{id:"descriere",children:"Descriere"}),"\n",(0,c.jsx)(i.p,{children:"Apelat atunci c\xe2nd un juc\u0103tor preia un pick-up creat cu CreatePickup."}),"\n",(0,c.jsxs)(i.table,{children:[(0,c.jsx)(i.thead,{children:(0,c.jsxs)(i.tr,{children:[(0,c.jsx)(i.th,{children:"Nume"}),(0,c.jsx)(i.th,{children:"Descriere"})]})}),(0,c.jsxs)(i.tbody,{children:[(0,c.jsxs)(i.tr,{children:[(0,c.jsx)(i.td,{children:"playerid"}),(0,c.jsx)(i.td,{children:"ID-ul juc\u0103torului care a ridicat pickup-ul."})]}),(0,c.jsxs)(i.tr,{children:[(0,c.jsx)(i.td,{children:"pickupid"}),(0,c.jsx)(i.td,{children:"ID-ul ridic\u0103rii, returnat de CreatePickup."})]})]})]}),"\n",(0,c.jsx)(i.h2,{id:"return\u0103ri",children:"Return\u0103ri"}),"\n",(0,c.jsx)(i.p,{children:"Este \xeentotdeauna numit primul \xeen modul de joc."}),"\n",(0,c.jsx)(i.h2,{id:"exemple",children:"Exemple"}),"\n",(0,c.jsx)(i.pre,{children:(0,c.jsx)(i.code,{className:"language-c",children:"new pickup_Cash;\nnew pickup_Health;\n\npublic OnGameModeInit()\n{\n    pickup_Cash = CreatePickup(1274, 2, 0.0, 0.0, 9.0);\n    pickup_Health = CreatePickup(1240, 2, 0.0, 0.0, 9.0);\n    return 1;\n}\n\npublic OnPlayerPickUpPickup(playerid, pickupid)\n{\n    if (pickupid == pickup_Cash)\n    {\n        GivePlayerMoney(playerid, 1000);\n    }\n    else if (pickupid == pickup_Health)\n    {\n        SetPlayerHealth(playerid, 100.0);\n    }\n    return 1;\n}\n"})}),"\n",(0,c.jsx)(i.h2,{id:"func\u021bii-similare",children:"Func\u021bii similare"}),"\n",(0,c.jsxs)(i.ul,{children:["\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.a,{href:"../functions/CreatePickup",children:"CreatePickup"}),": Crea\u021bi o ridicare."]}),"\n",(0,c.jsxs)(i.li,{children:[(0,c.jsx)(i.a,{href:"../functions/DestroyPickup",children:"DestroyPickup"}),": Distruge\u021bi un pickup."]}),"\n"]})]})}function d(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,c.jsx)(i,{...e,children:(0,c.jsx)(s,{...e})}):s(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>l,x:()=>a});var r=n(96540);const c={},t=r.createContext(c);function l(e){const i=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:l(e.components),r.createElement(t.Provider,{value:i},e.children)}}}]);