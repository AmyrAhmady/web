"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[16263],{28453:(e,i,n)=>{n.d(i,{R:()=>l,x:()=>o});var r=n(96540);const a={},t=r.createContext(a);function l(e){const i=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(t.Provider,{value:i},e.children)}},42751:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"scripting/functions/RemovePlayerFromVehicle","title":"RemovePlayerFromVehicle","description":"Uklanja/izbacuje igra\u010da iz njihovog vozila.","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/RemovePlayerFromVehicle.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/RemovePlayerFromVehicle","permalink":"/bs/docs/scripting/functions/RemovePlayerFromVehicle","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/RemovePlayerFromVehicle.md","tags":[{"inline":true,"label":"player","permalink":"/bs/docs/tags/player"},{"inline":true,"label":"vehicle","permalink":"/bs/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"RemovePlayerFromVehicle","sidebar_label":"RemovePlayerFromVehicle","description":"Uklanja/izbacuje igra\u010da iz njihovog vozila.","tags":["player","vehicle"]},"sidebar":"docsSidebar","previous":{"title":"RemovePlayerAttachedObject","permalink":"/bs/docs/scripting/functions/RemovePlayerAttachedObject"},"next":{"title":"RemovePlayerMapIcon","permalink":"/bs/docs/scripting/functions/RemovePlayerMapIcon"}}');var a=n(74848),t=n(28453);const l={title:"RemovePlayerFromVehicle",sidebar_label:"RemovePlayerFromVehicle",description:"Uklanja/izbacuje igra\u010da iz njihovog vozila.",tags:["player","vehicle"]},o=void 0,s={},c=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Zabilje\u0161ke",id:"zabilje\u0161ke",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function d(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,a.jsx)(i.p,{children:"Uklanja/izbacuje igra\u010da iz njihovog vozila."}),"\n",(0,a.jsxs)(i.table,{children:[(0,a.jsx)(i.thead,{children:(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.th,{children:"Ime"}),(0,a.jsx)(i.th,{children:"Deskripcija"})]})}),(0,a.jsx)(i.tbody,{children:(0,a.jsxs)(i.tr,{children:[(0,a.jsx)(i.td,{children:"playerid"}),(0,a.jsx)(i.td,{children:"ID igra\u010da za izbaciti iz vozila."})]})})]}),"\n",(0,a.jsx)(i.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(i.p,{children:"1: Funkcija uspje\u0161no izvr\u0161ena."}),"\n",(0,a.jsx)(i.p,{children:"0: Funkcija neuspje\u0161no izvr\u0161ena. Ovo zna\u010di da igra\u010d nije konektovan."}),"\n",(0,a.jsx)(i.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-c",children:"// Primjer - Igra\u010di mogu da voze vozila samo ako imaju score 10.\npublic OnPlayerStateChange(playerid, PLAYER_STATE:newstate, PLAYER_STATE:oldstate)\n{\n    if (newstate == PLAYER_STATE_DRIVER && GetPlayerScore(playerid) < 10) // PLAYER_STATE_DRIVER = 2\n    {\n        RemovePlayerFromVehicle(playerid);\n    }\n    return 1;\n}\n"})}),"\n",(0,a.jsx)(i.h2,{id:"zabilje\u0161ke",children:"Zabilje\u0161ke"}),"\n",(0,a.jsx)(i.admonition,{type:"tip",children:(0,a.jsx)(i.p,{children:"Izlazna animacija nije sinhronizirana za druge igra\u010de. Ova funkcija ne\u0107e raditi kada se koristi u OnPlayerEnterVehicle, jer igra\u010d nije u vozilu kad se pozove povratni poziv. Umjesto toga koristite OnPlayerStateChange (pogledajte primjer dolje). Igra\u010d se ne uklanja ako je u RC vozilu."})}),"\n",(0,a.jsx)(i.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.a,{href:"PutPlayerInVehicle",children:"PutPlayerInVehicle"}),": Postavi igra\u010da u vozilo."]}),"\n"]})]})}function u(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}}}]);