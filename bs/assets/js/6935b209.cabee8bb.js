"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[87393],{3512:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"scripting/functions/PlayCrimeReportForPlayer","title":"PlayCrimeReportForPlayer","description":"Ova funkcija reproducira prijavu zlo\u010dina za igra\u010da - ba\u0161 kao i kod jednog igra\u010da kada CJ po\u010dini zlo\u010din.","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/PlayCrimeReportForPlayer.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/PlayCrimeReportForPlayer","permalink":"/bs/docs/scripting/functions/PlayCrimeReportForPlayer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/PlayCrimeReportForPlayer.md","tags":[{"inline":true,"label":"player","permalink":"/bs/docs/tags/player"}],"version":"current","frontMatter":{"title":"PlayCrimeReportForPlayer","sidebar_label":"PlayCrimeReportForPlayer","description":"Ova funkcija reproducira prijavu zlo\u010dina za igra\u010da - ba\u0161 kao i kod jednog igra\u010da kada CJ po\u010dini zlo\u010din.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"PlayAudioStreamForPlayer","permalink":"/bs/docs/scripting/functions/PlayAudioStreamForPlayer"},"next":{"title":"PlayerGangZoneDestroy","permalink":"/bs/docs/scripting/functions/PlayerGangZoneDestroy"}}');var a=i(74848),t=i(28453);const o={title:"PlayCrimeReportForPlayer",sidebar_label:"PlayCrimeReportForPlayer",description:"Ova funkcija reproducira prijavu zlo\u010dina za igra\u010da - ba\u0161 kao i kod jednog igra\u010da kada CJ po\u010dini zlo\u010din.",tags:["player"]},s=void 0,l={},d=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function c(e){const r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,a.jsx)(r.p,{children:"Ova funkcija reproducira prijavu zlo\u010dina za igra\u010da - ba\u0161 kao i kod jednog igra\u010da kada CJ po\u010dini zlo\u010din."}),"\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Ime"}),(0,a.jsx)(r.th,{children:"Deskripcija"})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"playerid"}),(0,a.jsx)(r.td,{children:"ID igra\u010da koji \u0107e \u010duti prijavu zlo\u010dina (crime report).."})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"suspectid"}),(0,a.jsx)(r.td,{children:"ID osumnji\u010deni igra\u010d koji \u0107e biti opisan u krivi\u010dnoj prijavi."})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"crimeid"}),(0,a.jsxs)(r.td,{children:[(0,a.jsx)(r.a,{href:"../resources/crimelist",children:"Crime ID"}),", koji \u0107e biti prijavljen kao 10-kod (tj. 10-16 ako je 16 donesen kao zlo\u010din)."]})]})]})]}),"\n",(0,a.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(r.p,{children:"1: Funkcija uspje\u0161no izvr\u0161ena."}),"\n",(0,a.jsx)(r.p,{children:"0: Funkcija neuspje\u0161no izvr\u0161ena. Ovo zna\u010di da navedeni igra\u010d ne postoji."}),"\n",(0,a.jsx)(r.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, "/suspect"))\n    {\n        PlayCrimeReportForPlayer(playerid, 0, 16);\n        SendClientMessage(playerid, 0xFFFFFFFF, "ID 0 je napravio zlo\u010din (10-16).");\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,a.jsx)(r.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"PlayerPlaySound",children:"PlayerPlaySound"}),": Reprodukujte zvuk za igra\u010da."]}),"\n"]})]})}function p(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},28453:(e,r,i)=>{i.d(r,{R:()=>o,x:()=>s});var n=i(96540);const a={},t=n.createContext(a);function o(e){const r=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(t.Provider,{value:r},e.children)}}}]);