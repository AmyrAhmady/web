"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[83364],{23066:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"scripting/callbacks/OnClientCheckResponse","title":"OnClientCheckResponse","description":"Acest callback este apelat c\xe2nd se finalizeaz\u0103 o solicitare SendClientCheck","source":"@site/i18n/ro/docusaurus-plugin-content-docs/current/scripting/callbacks/OnClientCheckResponse.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnClientCheckResponse","permalink":"/ro/docs/scripting/callbacks/OnClientCheckResponse","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnClientCheckResponse.md","tags":[],"version":"current","frontMatter":{"title":"OnClientCheckResponse","sidebar_label":"OnClientCheckResponse","description":"Acest callback este apelat c\xe2nd se finalizeaz\u0103 o solicitare SendClientCheck","tags":[]},"sidebar":"docsSidebar","previous":{"title":"OnActorStreamOut","permalink":"/ro/docs/scripting/callbacks/OnActorStreamOut"},"next":{"title":"OnClientMessage","permalink":"/ro/docs/scripting/callbacks/OnClientMessage"}}');var c=t(74848),s=t(28453);const r={title:"OnClientCheckResponse",sidebar_label:"OnClientCheckResponse",description:"Acest callback este apelat c\xe2nd se finalizeaz\u0103 o solicitare SendClientCheck",tags:[]},l=void 0,a={},d=[{value:"Descriere",id:"descriere",level:2},{value:"Return\u0103ri",id:"return\u0103ri",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Note",id:"note",level:2},{value:"Func\u021bii asociate",id:"func\u021bii-asociate",level:2}];function o(e){const n={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h2,{id:"descriere",children:"Descriere"}),"\n",(0,c.jsx)(n.p,{children:"Acest callback este apelat c\xe2nd se finalizeaz\u0103 o solicitare SendClientCheck."}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Name"}),(0,c.jsx)(n.th,{children:"Description"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"playerid"}),(0,c.jsx)(n.td,{children:"ID-ul juc\u0103torului verificat."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"actionid"}),(0,c.jsx)(n.td,{children:"Tipul de verificare efectuat\u0103."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"memaddr"}),(0,c.jsx)(n.td,{children:"Adresa solicitat\u0103."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"retndata"}),(0,c.jsx)(n.td,{children:"Rezultatul verific\u0103rii."})]})]})]}),"\n",(0,c.jsx)(n.h2,{id:"return\u0103ri",children:"Return\u0103ri"}),"\n",(0,c.jsx)(n.p,{children:"Este \xeentotdeauna numit primul \xeen filterscripts."}),"\n",(0,c.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-c",children:'public OnPlayerConnect(playerid)\n{\n    SendClientCheck(playerid, 0x48, 0, 0, 2);\n    return 1;\n}\n\npublic OnClientCheckResponse(playerid, actionid, memaddr, retndata)\n{\n    if(actionid == 0x48) // sau 72\n    {\n        print("WARNING: Juc\u0103torul nu pare s\u0103 foloseasc\u0103 un computer obi\u0219nuit!");\n        Kick(playerid);\n    }\n    return 1;\n}\n'})}),"\n",(0,c.jsx)(n.h2,{id:"note",children:"Note"}),"\n",(0,c.jsx)(n.admonition,{type:"warning",children:(0,c.jsx)(n.p,{children:"Acest callback este apelat numai atunci c\xe2nd este \xeentr-un filterscript."})}),"\n",(0,c.jsx)(n.h2,{id:"func\u021bii-asociate",children:"Func\u021bii asociate"})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var i=t(96540);const c={},s=i.createContext(c);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);