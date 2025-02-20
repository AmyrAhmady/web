"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[48783],{28453:(e,o,n)=>{n.d(o,{R:()=>c,x:()=>d});var a=n(96540);const i={},t=a.createContext(i);function c(e){const o=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),a.createElement(t.Provider,{value:o},e.children)}},92617:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>s,contentTitle:()=>d,default:()=>u,frontMatter:()=>c,metadata:()=>a,toc:()=>r});const a=JSON.parse('{"id":"scripting/callbacks/OnUnoccupiedVehicleUpdate","title":"OnUnoccupiedVehicleUpdate","description":"Essa callback \xe9 executada quando o cliente do jogador faz o update/sincroniza a posi\xe7\xe3o de um ve\xedculo no qual o mesmo n\xe3o est\xe1 dirigindo.","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/scripting/callbacks/OnUnoccupiedVehicleUpdate.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnUnoccupiedVehicleUpdate","permalink":"/pt-BR/docs/scripting/callbacks/OnUnoccupiedVehicleUpdate","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnUnoccupiedVehicleUpdate.md","tags":[{"inline":true,"label":"vehicle","permalink":"/pt-BR/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"OnUnoccupiedVehicleUpdate","sidebar_label":"OnUnoccupiedVehicleUpdate","description":"Essa callback \xe9 executada quando o cliente do jogador faz o update/sincroniza a posi\xe7\xe3o de um ve\xedculo no qual o mesmo n\xe3o est\xe1 dirigindo.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"OnTrailerUpdate","permalink":"/pt-BR/docs/scripting/callbacks/OnTrailerUpdate"},"next":{"title":"OnVehicleDamageStatusUpdate","permalink":"/pt-BR/docs/scripting/callbacks/OnVehicleDamageStatusUpdate"}}');var i=n(74848),t=n(28453);const c={title:"OnUnoccupiedVehicleUpdate",sidebar_label:"OnUnoccupiedVehicleUpdate",description:"Essa callback \xe9 executada quando o cliente do jogador faz o update/sincroniza a posi\xe7\xe3o de um ve\xedculo no qual o mesmo n\xe3o est\xe1 dirigindo.",tags:["vehicle"]},d=void 0,s={},r=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Retornos",id:"retornos",level:2},{value:"Exemplos",id:"exemplos",level:2},{value:"Notas",id:"notas",level:2}];function l(e){const o={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,i.jsx)(o.p,{children:"Essa callback \xe9 executada quando o cliente do jogador faz o update/sincroniza a posi\xe7\xe3o de um ve\xedculo no qual o mesmo n\xe3o est\xe1 dirigindo."}),"\n",(0,i.jsxs)(o.table,{children:[(0,i.jsx)(o.thead,{children:(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.th,{children:"Nome"}),(0,i.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,i.jsxs)(o.tbody,{children:[(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.td,{children:"vehicleid"}),(0,i.jsx)(o.td,{children:"ID do ve\xedculo que teve sua posi\xe7\xe3o atualizada/sincronizada."})]}),(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.td,{children:"playerid"}),(0,i.jsx)(o.td,{children:"ID do jogador que fez o pedido para atualizar/sincronizar o ve\xedculo."})]}),(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.td,{children:"passenger_seat"}),(0,i.jsx)(o.td,{children:"ID dos assentos, caso o jogador seja um passageiro. 0=n\xe3o est\xe1 no ve\xedculo, 1=passageiro frontal, 2=traseiro esquerda, 3=traseiro direita, 4+ caso o ve\xedculo seja um \xf4nibus etc. com a quantidade de assentos."})]}),(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.td,{children:"new_x"}),(0,i.jsx)(o.td,{children:"Nova coordenada X do ve\xedculo."})]}),(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.td,{children:"new_y"}),(0,i.jsx)(o.td,{children:"Nova coordenada Y do ve\xedculo."})]}),(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.td,{children:"new_z"}),(0,i.jsx)(o.td,{children:"Nova coordenada Z do ve\xedculo."})]}),(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.td,{children:"vel_x"}),(0,i.jsx)(o.td,{children:"Nova velocidade X do ve\xedculo."})]}),(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.td,{children:"vel_y"}),(0,i.jsx)(o.td,{children:"Nova velocidade Y do ve\xedculo."})]}),(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.td,{children:"vel_z"}),(0,i.jsx)(o.td,{children:"Nova velocidade Z do ve\xedculo."})]})]})]}),"\n",(0,i.jsx)(o.h2,{id:"retornos",children:"Retornos"}),"\n",(0,i.jsx)(o.p,{children:"Sempre execurada primeiro nos filterscripts, retorne 0 para impedir que outros scripts a vejam."}),"\n",(0,i.jsx)(o.h2,{id:"exemplos",children:"Exemplos"}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-c",children:"public OnUnoccupiedVehicleUpdate(vehicleid, playerid, passenger_seat, Float:new_x, Float:new_y, Float:new_z, Float:vel_x, Float:vel_y, Float:vel_z)\n{\n    // Verifica se o ve\xedculo est\xe1 se movendo para longe\n    if (GetVehicleDistanceFromPoint(vehicleid, new_x, new_y, new_z) > 50.0)\n    {\n        // Rejeita o update\n        return 0;\n    }\n\n    return 1;\n}\n"})}),"\n",(0,i.jsx)(o.h2,{id:"notas",children:"Notas"}),"\n",(0,i.jsx)(o.admonition,{type:"warning",children:(0,i.jsx)(o.p,{children:"Essa callback \xe9 executada com frequ\xeancia a cada segundo, por ve\xedculo n\xe3o ocupado. Voc\xea deve evitar realizar grandes opera\xe7\xf5es de grava\xe7\xe3o e leitura de arquivos. A fun\xe7\xe3o GetVehiclePos ir\xe1 retornar coordenadas antigas da posi\xe7\xe3o do ve\xedculo (antes do update)."})})]})}function u(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}}}]);