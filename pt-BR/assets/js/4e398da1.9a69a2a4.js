"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[33656],{28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var i=t(96540);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}},53125:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"scripting/functions/GetVehiclePos","title":"GetVehiclePos","description":"Obt\xe9m a posi\xe7\xe3o de um ve\xedculo.","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/scripting/functions/GetVehiclePos.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetVehiclePos","permalink":"/pt-BR/docs/scripting/functions/GetVehiclePos","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetVehiclePos.md","tags":[{"inline":true,"label":"vehicle","permalink":"/pt-BR/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"GetVehiclePos","sidebar_label":"GetVehiclePos","description":"Obt\xe9m a posi\xe7\xe3o de um ve\xedculo.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"GetVehiclePoolSize","permalink":"/pt-BR/docs/scripting/functions/GetVehiclePoolSize"},"next":{"title":"GetVehicleRespawnDelay","permalink":"/pt-BR/docs/scripting/functions/GetVehicleRespawnDelay"}}');var s=t(74848),o=t(28453);const r={title:"GetVehiclePos",sidebar_label:"GetVehiclePos",description:"Obt\xe9m a posi\xe7\xe3o de um ve\xedculo.",tags:["vehicle"]},l=void 0,c={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Retornos",id:"retornos",level:2},{value:"Exemplos",id:"exemplos",level:2},{value:"Fun\xe7\xf5es Relacionadas",id:"fun\xe7\xf5es-relacionadas",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsx)(n.p,{children:"Obt\xe9m a posi\xe7\xe3o de um ve\xedculo."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Nome"}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"vehicleid"}),(0,s.jsx)(n.td,{children:"O ID do ve\xedculo para obter a posi\xe7\xe3o."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["&Float",":x"]}),(0,s.jsx)(n.td,{children:"Uma vari\xe1vel float para armazenar a coordenada X, passada por refer\xeancia."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["&Float",":y"]}),(0,s.jsx)(n.td,{children:"Uma vari\xe1vel float para armazenar a coordenada Y, passada por refer\xeancia."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["&Float",":z"]}),(0,s.jsx)(n.td,{children:"Uma vari\xe1vel float para armazenar a coordenada Z, passada por refer\xeancia."})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"retornos",children:"Retornos"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"true"})," - A fun\xe7\xe3o foi executada com sucesso."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"false"})," - A fun\xe7\xe3o falhou ao ser executada. O ve\xedculo especificado n\xe3o existe."]}),"\n",(0,s.jsx)(n.h2,{id:"exemplos",children:"Exemplos"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n     if (strcmp(cmdtext, "/vehpos", true) == 0)\n     {\n          new vehicleid = GetPlayerVehicleID(playerid);\n\n          // se vehicleid for igual a 0\n          if (vehicleid == 0)\n          {\n               return SendClientMessage(playerid, -1, "Voc\xea n\xe3o est\xe1 em nenhum ve\xedculo!");\n          }\n\n          new\n               Float:vehX, Float:vehY, Float:vehZ,\n               string[128];\n\n          GetVehiclePos(vehicleid, vehX, vehY, vehZ);\n          format(string, sizeof(string), "As posi\xe7\xf5es atuais do ve\xedculo s\xe3o: %f, %f, %f", vehX, vehY, vehZ);\n          SendClientMessage(playerid, 0xFFFFFFFF, string);\n          return 1;\n     }\n\n     return 0;\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"fun\xe7\xf5es-relacionadas",children:"Fun\xe7\xf5es Relacionadas"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"GetVehicleDistanceFromPoint",children:"GetVehicleDistanceFromPoint"}),": Obt\xe9m a dist\xe2ncia entre um ve\xedculo e um ponto."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"SetVehiclePos",children:"SetVehiclePos"}),": Define a posi\xe7\xe3o de um ve\xedculo."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"GetVehicleZAngle",children:"GetVehicleZAngle"}),": Verifica o \xe2ngulo atual de um ve\xedculo."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"GetVehicleRotationQuat",children:"GetVehicleRotationQuat"}),": Obt\xe9m o quatern\xe1rio de rota\xe7\xe3o de um ve\xedculo."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}}}]);