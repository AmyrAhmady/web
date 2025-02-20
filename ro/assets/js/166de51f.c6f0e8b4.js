"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[92407],{28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>c});var t=i(96540);const r={},a=t.createContext(r);function l(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(a.Provider,{value:n},e.children)}},79386:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"scripting/callbacks/OnPlayerRequestSpawn","title":"OnPlayerRequestSpawn","description":"Apelat atunci c\xe2nd un juc\u0103tor \xeencearc\u0103 s\u0103 apar\u0103 prin selec\u021bia clasei, fie ap\u0103s\xe2nd SHIFT, fie f\u0103c\xe2nd clic pe butonul \u201eApari\u021bie\u201d.","source":"@site/i18n/ro/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerRequestSpawn.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerRequestSpawn","permalink":"/ro/docs/scripting/callbacks/OnPlayerRequestSpawn","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnPlayerRequestSpawn.md","tags":[{"inline":true,"label":"player","permalink":"/ro/docs/tags/player"}],"version":"current","frontMatter":{"title":"OnPlayerRequestSpawn","sidebar_label":"OnPlayerRequestSpawn","description":"Apelat atunci c\xe2nd un juc\u0103tor \xeencearc\u0103 s\u0103 apar\u0103 prin selec\u021bia clasei, fie ap\u0103s\xe2nd SHIFT, fie f\u0103c\xe2nd clic pe butonul \u201eApari\u021bie\u201d.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerRequestDownload","permalink":"/ro/docs/scripting/callbacks/OnPlayerRequestDownload"},"next":{"title":"OnPlayerSelectObject","permalink":"/ro/docs/scripting/callbacks/OnPlayerSelectObject"}}');var r=i(74848),a=i(28453);const l={title:"OnPlayerRequestSpawn",sidebar_label:"OnPlayerRequestSpawn",description:"Apelat atunci c\xe2nd un juc\u0103tor \xeencearc\u0103 s\u0103 apar\u0103 prin selec\u021bia clasei, fie ap\u0103s\xe2nd SHIFT, fie f\u0103c\xe2nd clic pe butonul \u201eApari\u021bie\u201d.",tags:["player"]},c=void 0,s={},o=[{value:"Descriere",id:"descriere",level:2},{value:"Return\u0103ri",id:"return\u0103ri",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Note",id:"note",level:2},{value:"Func\u021bii similare",id:"func\u021bii-similare",level:2}];function p(e){const n={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components},{TipNPCCallbacks:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("TipNPCCallbacks",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"descriere",children:"Descriere"}),"\n",(0,r.jsx)(n.p,{children:"Apelat atunci c\xe2nd un juc\u0103tor \xeencearc\u0103 s\u0103 apar\u0103 prin selec\u021bia clasei, fie ap\u0103s\xe2nd SHIFT, fie f\u0103c\xe2nd clic pe butonul \u201eApari\u021bie\u201d."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Descriere"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"playerid"}),(0,r.jsx)(n.td,{children:"ID-ul juc\u0103torului care a solicitat s\u0103 apar\u0103."})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"return\u0103ri",children:"Return\u0103ri"}),"\n",(0,r.jsx)(n.p,{children:"Este \xeentotdeauna numit primul \xeen filterscript-uri, a\u0219a c\u0103 returnarea 0 acolo blocheaz\u0103 \u0219i alte scripturi s\u0103-l vad\u0103."}),"\n",(0,r.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'public OnPlayerRequestSpawn(playerid)\n{\n    if (!IsPlayerAdmin(playerid))\n    {\n        SendClientMessage(playerid, -1, "Nu te poti spawna.");\n        return 0;\n    }\n    return 1;\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"note",children:"Note"}),"\n",(0,r.jsx)(i,{}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"Pentru a \xeempiedica juc\u0103torii s\u0103 apar\u0103 cu anumite clase, ultima clas\u0103 vizualizat\u0103 trebuie salvat\u0103 \xeentr-o variabil\u0103 \xeen OnPlayerRequestClass."})}),"\n",(0,r.jsx)(n.h2,{id:"func\u021bii-similare",children:"Func\u021bii similare"})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}}}]);