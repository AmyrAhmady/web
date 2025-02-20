"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[35295],{28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>s});var i=t(96540);const o={},l=i.createContext(o);function r(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(l.Provider,{value:n},e.children)}},64897:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"client/ClientOnLinux","title":"open.mp client on linux","description":"Guide on how to run the open.mp client on Linux.","source":"@site/docs/client/ClientOnLinux.md","sourceDirName":"client","slug":"/client/ClientOnLinux","permalink":"/ru/docs/client/ClientOnLinux","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/client/ClientOnLinux.md","tags":[],"version":"current","frontMatter":{"title":"open.mp client on linux","sidebar_label":"open.mp client on linux","description":"Guide on how to run the open.mp client on Linux."},"sidebar":"docsSidebar","previous":{"title":"\u041a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u0438\u0435 \u043a\u043e\u043c\u043c\u0430\u043d\u0434\u044b","permalink":"/ru/docs/client/ClientCommands"},"next":{"title":"\u041e\u0431\u0449\u0438\u0435 \u041f\u0440\u043e\u0431\u043b\u0435\u043c\u044b \u0441 \u041a\u043b\u0438\u0435\u043d\u0442\u043e\u043c","permalink":"/ru/docs/client/CommonClientIssues"}}');var o=t(74848),l=t(28453);const r={title:"open.mp client on linux",sidebar_label:"open.mp client on linux",description:"Guide on how to run the open.mp client on Linux."},s="Guide on how to run the open.mp client on Linux",a={},c=[{value:"Tested on:",id:"tested-on",level:3},{value:"How to:",id:"how-to",level:3},{value:"Sample launch command",id:"sample-launch-command",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"guide-on-how-to-run-the-openmp-client-on-linux",children:"Guide on how to run the open.mp client on Linux"})}),"\n",(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsx)(n.p,{children:"You DO NOT get a working GUI, this must be executed in a Wine prefix via command line arguments."})}),"\n",(0,o.jsx)(n.h3,{id:"tested-on",children:"Tested on:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Lutris: wine-ge 8-26 32-bit prefix"}),"\n",(0,o.jsx)(n.li,{children:"Bottles: soda-9.0-1"}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"how-to",children:"How to:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Ensure you have a Wine prefix created with GTA San Andreas installed."}),"\n",(0,o.jsxs)(n.li,{children:["Download the ",(0,o.jsx)(n.a,{href:"https://github.com/openmultiplayer/launcher/releases/latest",children:"open.mp"})," launcher and install it inside the Wine prefix."]}),"\n",(0,o.jsxs)(n.li,{children:["Download the ",(0,o.jsx)(n.a,{href:"https://github.com/KrustyKoyle/files.sa-mp.com-Archive",children:"SA-MP client"})," and install it in the same Wine Prefix."]}),"\n",(0,o.jsxs)(n.li,{children:["Download the ",(0,o.jsx)(n.a,{href:"https://assets.open.mp/omp-client.dll",children:"omp-client.dll"})," and copy it to the ",(0,o.jsx)(n.code,{children:"AppData\\Local\\mp.open.launcher\\omp\\"})," folder of the main user in your prefix."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Finally, you can execute the open.mp launcher through the Wine prefixes CLI or write it to a .bat script for easy launching."}),"\n",(0,o.jsx)(n.h3,{id:"sample-launch-command",children:"Sample launch command"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"Z:\\path\\to\\omp-launcher.exe -h server.ip -p port -n user.name -g Z:\\home\\yourname\\path\\to\\gta-san-andreas\\install\\\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsx)(n.p,{children:"You can run omp-launcher.exe with the --help flag to get more info about the flags, in case the example above isn't enough."})}),"\n",(0,o.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Issue"}),(0,o.jsx)(n.th,{children:"Supposed fix"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Game crashes when pausing"}),(0,o.jsx)(n.td,{children:"There is a missing font, fix by installing allfonts through winetricks."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Not displaying the login prompt on a server"}),(0,o.jsx)(n.td,{children:'Try toggling on/off the "Prefer system libraries" setting in lutris.'})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Black box appears and the game does not load"}),(0,o.jsx)(n.td,{children:"You may be missing launch parameters on the CLI. Please review your launch command."})]})]})]})]})}function d(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}}}]);