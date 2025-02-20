"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[46082],{28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var c=t(96540);const i={},s=c.createContext(i);function a(e){const n=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),c.createElement(s.Provider,{value:n},e.children)}},63750:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>o});const c=JSON.parse('{"id":"scripting/callbacks/OnRconLoginAttempt","title":"OnRconLoginAttempt","description":"Acest callback este apelat atunci c\xe2nd cineva \xeencearc\u0103 s\u0103 se conecteze la RCON \xeen joc; succes sau nu.","source":"@site/i18n/ro/docusaurus-plugin-content-docs/current/scripting/callbacks/OnRconLoginAttempt.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnRconLoginAttempt","permalink":"/ro/docs/scripting/callbacks/OnRconLoginAttempt","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnRconLoginAttempt.md","tags":[],"version":"current","frontMatter":{"title":"OnRconLoginAttempt","sidebar_label":"OnRconLoginAttempt","description":"Acest callback este apelat atunci c\xe2nd cineva \xeencearc\u0103 s\u0103 se conecteze la RCON \xeen joc; succes sau nu.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"OnRconCommand","permalink":"/ro/docs/scripting/callbacks/OnRconCommand"},"next":{"title":"OnRecordingPlaybackEnd","permalink":"/ro/docs/scripting/callbacks/OnRecordingPlaybackEnd"}}');var i=t(74848),s=t(28453);const a={title:"OnRconLoginAttempt",sidebar_label:"OnRconLoginAttempt",description:"Acest callback este apelat atunci c\xe2nd cineva \xeencearc\u0103 s\u0103 se conecteze la RCON \xeen joc; succes sau nu.",tags:[]},r=void 0,l={},o=[{value:"Descriere",id:"descriere",level:2},{value:"Return\u0103ri",id:"return\u0103ri",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Note",id:"note",level:2},{value:"Func\u021bii similare",id:"func\u021bii-similare",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"descriere",children:"Descriere"}),"\n",(0,i.jsx)(n.p,{children:"Acest callback este apelat atunci c\xe2nd cineva \xeencearc\u0103 s\u0103 se conecteze la RCON \xeen joc; succes sau nu."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Nume"}),(0,i.jsx)(n.th,{children:"Descriere"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ip[]"}),(0,i.jsx)(n.td,{children:"IP-ul juc\u0103torului care a \xeencercat s\u0103 se conecteze la RCON."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"password[]"}),(0,i.jsx)(n.td,{children:"Parola folosit\u0103 pentru a v\u0103 autentifica."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"success"}),(0,i.jsx)(n.td,{children:"0 dac\u0103 parola a fost incorect\u0103 sau 1 dac\u0103 a fost corect\u0103."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"return\u0103ri",children:"Return\u0103ri"}),"\n",(0,i.jsx)(n.p,{children:"Este \xeentotdeauna numit primul \xeen filterscript-uri."}),"\n",(0,i.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'public OnRconLoginAttempt(ip[], password[], success)\n{\n    if (!success) //Dac\u0103 parola a fost incorect\u0103\n    {\n        printf("CONECTARE RCON ESUATA PRIN IP %s FOLOSIND PAROLA %s",ip, password);\n        new pip[16];\n        for(new i = GetPlayerPoolSize(); i != -1; --i) //Bucl\u0103 prin to\u021bi juc\u0103torii\n        {\n            GetPlayerIp(i, pip, sizeof(pip));\n            if (!strcmp(ip, pip, true)) //Dac\u0103 IP-ul unui juc\u0103tor este IP-ul care a e\u0219uat autentificarea\n            {\n                SendClientMessage(i, 0xFFFFFFFF, "Parola gresita. Pa!"); //Trimite un mesaj\n                Kick(i); //Acum dati afara jucatorul.\n            }\n        }\n    }\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"note",children:"Note"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"Acest callback este apelat numai c\xe2nd autentificarea /rcon este folosit\u0103 \xeen joc. Acest callback este apelat numai atunci c\xe2nd juc\u0103torul nu este \xeenc\u0103 conectat. C\xe2nd juc\u0103torul este conectat, este apelat OnRconCommand."})}),"\n",(0,i.jsx)(n.h2,{id:"func\u021bii-similare",children:"Func\u021bii similare"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../functions/IsPlayerAdmin",children:"IsPlayerAdmin"}),": Verific\u0103 dac\u0103 un juc\u0103tor este conectat la RCON."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../functions/SendRconCommand",children:"SendRconCommand"}),": Trimite o comand\u0103 RCON prin script."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);