"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[11396],{28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var r=n(96540);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}},36683:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"scripting/functions/gettime","title":"gettime","description":"Retorna o hor\xe1rio atual do servidor, aonde ser\xe1 guardado nas vari\xe1veis &hora, &minuto e &segundo.","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/scripting/functions/gettime.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/gettime","permalink":"/pt-BR/docs/scripting/functions/gettime","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/gettime.md","tags":[],"version":"current","frontMatter":{"title":"gettime","sidebar_label":"gettime","description":"Retorna o hor\xe1rio atual do servidor, aonde ser\xe1 guardado nas vari\xe1veis &hora, &minuto e &segundo.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"getpubvar","permalink":"/pt-BR/docs/scripting/functions/getpubvar"},"next":{"title":"gpci","permalink":"/pt-BR/docs/scripting/functions/gpci"}}');var o=n(74848),s=n(28453);const i={title:"gettime",sidebar_label:"gettime",description:"Retorna o hor\xe1rio atual do servidor, aonde ser\xe1 guardado nas vari\xe1veis &hora, &minuto e &segundo.",tags:[]},a=void 0,d={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Retorno",id:"retorno",level:2},{value:"Exemplos",id:"exemplos",level:2},{value:"Notas",id:"notas",level:2},{value:"Fun\xe7\xf5es Relacionadas",id:"fun\xe7\xf5es-relacionadas",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components},{LowercaseNote:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("LowercaseNote",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n,{}),"\n",(0,o.jsx)(t.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsx)(t.p,{children:"Retorna o hor\xe1rio atual do servidor, aonde ser\xe1 guardado nas vari\xe1veis &hora, &minuto e &segundo."}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Name"}),(0,o.jsx)(t.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"&hora=0"}),(0,o.jsx)(t.td,{children:"A vari\xe1vel para armazenar a hora, passada por refer\xeancia."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"&minuto=0"}),(0,o.jsx)(t.td,{children:"A vari\xe1vel para armazenar o minuto, passada por refer\xeancia."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"&segundo=0"}),(0,o.jsx)(t.td,{children:"A vari\xe1vel para armazenar os segundos, passada por refer\xeancia."})]})]})]}),"\n",(0,o.jsx)(t.h2,{id:"retorno",children:"Retorno"}),"\n",(0,o.jsx)(t.p,{children:"A pr\xf3pria fun\xe7\xe3o se retorna em Unix Timestamp."}),"\n",(0,o.jsx)(t.h2,{id:"exemplos",children:"Exemplos"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-c",children:'new\n  horas,\n  minutos,\n  segundos,\n  timestamp;\n\ntimestamp = gettime(horas, minutos, segundos);\nprintf("%02d:%02d:%02d", horas, minutos, segundos);\nprintf("Segundos desde meia noite de 1\xba de Janeiro de 1970: %d", timestamp);\n'})}),"\n",(0,o.jsx)(t.h2,{id:"notas",children:"Notas"}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsx)(t.p,{children:"Esta fun\xe7\xe3o \xe9 \xfatil para medir intervalos de tempo usando suas caracter\xedsticas de timestamp. Isso pode ser particularmente \xfatil se voc\xea quiser restringir algumas funcionalidades com base em um tempo (por exemplo, um comando que s\xf3 pode ser executado a cada 30 segundos). Usando esse m\xe9todo, voc\xea n\xe3o precisa depender de timers."})}),"\n",(0,o.jsx)(t.h2,{id:"fun\xe7\xf5es-relacionadas",children:"Fun\xe7\xf5es Relacionadas"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"getdate",children:"getdate"}),": Retorna a data atual do servidor."]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}}}]);