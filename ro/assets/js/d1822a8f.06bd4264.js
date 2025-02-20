"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[55489],{28453:(e,r,n)=>{n.d(r,{R:()=>a,x:()=>c});var i=n(96540);const t={},l=i.createContext(t);function a(e){const r=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(l.Provider,{value:r},e.children)}},36884:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"scripting/callbacks/OnPlayerInteriorChange","title":"OnPlayerInteriorChange","description":"Apelat c\xe2nd un juc\u0103tor schimb\u0103 interiorul.","source":"@site/i18n/ro/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerInteriorChange.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerInteriorChange","permalink":"/ro/docs/scripting/callbacks/OnPlayerInteriorChange","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnPlayerInteriorChange.md","tags":[{"inline":true,"label":"player","permalink":"/ro/docs/tags/player"}],"version":"current","frontMatter":{"title":"OnPlayerInteriorChange","sidebar_label":"OnPlayerInteriorChange","description":"Apelat c\xe2nd un juc\u0103tor schimb\u0103 interiorul.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerGiveDamageActor","permalink":"/ro/docs/scripting/callbacks/OnPlayerGiveDamageActor"},"next":{"title":"OnPlayerKeyStateChange","permalink":"/ro/docs/scripting/callbacks/OnPlayerKeyStateChange"}}');var t=n(74848),l=n(28453);const a={title:"OnPlayerInteriorChange",sidebar_label:"OnPlayerInteriorChange",description:"Apelat c\xe2nd un juc\u0103tor schimb\u0103 interiorul.",tags:["player"]},c=void 0,s={},o=[{value:"Descriere",id:"descriere",level:2},{value:"Return\u0103ri",id:"return\u0103ri",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Func\u021bii similare",id:"func\u021bii-similare",level:2}];function d(e){const r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"descriere",children:"Descriere"}),"\n",(0,t.jsx)(r.p,{children:"Apelat c\xe2nd un juc\u0103tor schimb\u0103 interiorul. Poate fi declan\u0219at de SetPlayerInterior sau atunci c\xe2nd un juc\u0103tor intr\u0103/iese dintr-o cl\u0103dire."}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Nume"}),(0,t.jsx)(r.th,{children:"Descriere"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"playerid"}),(0,t.jsx)(r.td,{children:"Jucatorul care a schimbat interiorul."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"newinteriorid"}),(0,t.jsx)(r.td,{children:"Interiorul \xeen care se afl\u0103 acum juc\u0103torul."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"oldinteriorid"}),(0,t.jsx)(r.td,{children:"Interiorul \xeen care era juc\u0103torul \xeenainte."})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"return\u0103ri",children:"Return\u0103ri"}),"\n",(0,t.jsx)(r.p,{children:"Este \xeentotdeauna numit primul \xeen modul de joc."}),"\n",(0,t.jsx)(r.h2,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-c",children:'public OnPlayerInteriorChange(playerid, newinteriorid, oldinteriorid)\n{\n    new string[42];\n    format(string, sizeof(string), "Ai trecut de la interiorul %d la interiorul %d!", oldinteriorid, newinteriorid);\n    SendClientMessage(playerid, COLOR_ORANGE, string);\n    return 1;\n}\n'})}),"\n",(0,t.jsx)(r.h2,{id:"func\u021bii-similare",children:"Func\u021bii similare"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"../functions/SetPlayerInterior",children:"SetPlayerInterior"}),": Seta\u021bi interiorul unui juc\u0103tor."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"../functions/GetPlayerInterior",children:"GetPlayerInterior"}),": Ob\u021bine\u021bi interiorul actual al unui juc\u0103tor."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"../functions/LinkVehicleToInterior",children:"LinkVehicleToInterior"}),": Schimba\u021bi interiorul \xeen care este v\u0103zut un vehicul."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"OnPlayerStateChange",children:"OnPlayerStateChange"}),": Apelat c\xe2nd un juc\u0103tor \xee\u0219i schimb\u0103 starea."]}),"\n"]})]})}function u(e={}){const{wrapper:r}={...(0,l.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}}}]);