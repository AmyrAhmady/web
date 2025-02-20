"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[56460],{28453:(e,o,n)=>{n.d(o,{R:()=>s,x:()=>r});var t=n(96540);const c={},a=t.createContext(c);function s(e){const o=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function r(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),t.createElement(a.Provider,{value:o},e.children)}},83009:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>i,contentTitle:()=>r,default:()=>j,frontMatter:()=>s,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"scripting/callbacks/OnObjectMoved","title":"OnObjectMoved","description":"Esta callback \xe9 chamada quando um objeto \xe9 movido ap\xf3s o MoveObject (quando para de se mover).","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/scripting/callbacks/OnObjectMoved.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnObjectMoved","permalink":"/pt-BR/docs/scripting/callbacks/OnObjectMoved","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnObjectMoved.md","tags":[],"version":"current","frontMatter":{"title":"OnObjectMoved","sidebar_label":"OnObjectMoved","description":"Esta callback \xe9 chamada quando um objeto \xe9 movido ap\xf3s o MoveObject (quando para de se mover).","tags":[]},"sidebar":"docsSidebar","previous":{"title":"OnNPCSpawn","permalink":"/pt-BR/docs/scripting/callbacks/OnNPCSpawn"},"next":{"title":"OnPickupStreamIn","permalink":"/pt-BR/docs/scripting/callbacks/OnPickupStreamIn"}}');var c=n(74848),a=n(28453);const s={title:"OnObjectMoved",sidebar_label:"OnObjectMoved",description:"Esta callback \xe9 chamada quando um objeto \xe9 movido ap\xf3s o MoveObject (quando para de se mover).",tags:[]},r=void 0,i={},d=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Retorno",id:"retorno",level:2},{value:"Exemplos",id:"exemplos",level:2},{value:"Notas",id:"notas",level:2},{value:"Fun\xe7\xf5es Relacionadas",id:"fun\xe7\xf5es-relacionadas",level:2}];function l(e){const o={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(o.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,c.jsx)(o.p,{children:"Esta callback \xe9 chamada quando um objeto \xe9 movido ap\xf3s o MoveObject (quando para de se mover)."}),"\n",(0,c.jsxs)(o.table,{children:[(0,c.jsx)(o.thead,{children:(0,c.jsxs)(o.tr,{children:[(0,c.jsx)(o.th,{children:"Nome"}),(0,c.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,c.jsx)(o.tbody,{children:(0,c.jsxs)(o.tr,{children:[(0,c.jsx)(o.td,{children:"objectid"}),(0,c.jsx)(o.td,{children:"O ID do objeto que foi movido"})]})})]}),"\n",(0,c.jsx)(o.h2,{id:"retorno",children:"Retorno"}),"\n",(0,c.jsx)(o.p,{children:"Sempre \xe9 chamada primeiro em filterscripts."}),"\n",(0,c.jsx)(o.h2,{id:"exemplos",children:"Exemplos"}),"\n",(0,c.jsx)(o.pre,{children:(0,c.jsx)(o.code,{className:"language-c",children:'public OnObjectMoved(objectid)\n{\n    printf("Objeto %d terminou de se mover.", objectid);\n    return 1;\n}\n'})}),"\n",(0,c.jsx)(o.h2,{id:"notas",children:"Notas"}),"\n",(0,c.jsx)(o.admonition,{type:"tip",children:(0,c.jsx)(o.p,{children:"SetObjectPos n\xe3o funciona quando usado nesta callback. Para consertar isso, recrie o objeto."})}),"\n",(0,c.jsx)(o.h2,{id:"fun\xe7\xf5es-relacionadas",children:"Fun\xe7\xf5es Relacionadas"}),"\n",(0,c.jsxs)(o.ul,{children:["\n",(0,c.jsxs)(o.li,{children:[(0,c.jsx)(o.a,{href:"../functions/MoveObject.md",children:"MoveObject"}),": Move um objeto."]}),"\n",(0,c.jsxs)(o.li,{children:[(0,c.jsx)(o.a,{href:"../functions/MovePlayerObject.md",children:"MovePlayerObject"}),": Move o objeto de um jogador."]}),"\n",(0,c.jsxs)(o.li,{children:[(0,c.jsx)(o.a,{href:"../functions/IsObjectMoving.md",children:"IsObjectMoving"}),": Verifica se um objeto est\xe1 se movendo."]}),"\n",(0,c.jsxs)(o.li,{children:[(0,c.jsx)(o.a,{href:"../functions/StopObject.md",children:"StopObject"}),": Para um objeto de se mover."]}),"\n",(0,c.jsxs)(o.li,{children:[(0,c.jsx)(o.a,{href:"/pt-BR/docs/scripting/callbacks/OnPlayerObjectMoved",children:"OnPlayerObjectMoved"}),": Chamado quando um objeto de jogador para de se mover."]}),"\n"]})]})}function j(e={}){const{wrapper:o}={...(0,a.R)(),...e.components};return o?(0,c.jsx)(o,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}}}]);