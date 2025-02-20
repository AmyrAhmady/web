"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[16387],{26080:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"scripting/callbacks/OnEnterExitModShop","title":"OnEnterExitModShop","description":"Das Callback wird aufgerufen, wenn ein Spieler eine Tuningwerkstatt betritt oder verl\xe4sst.","source":"@site/i18n/de/docusaurus-plugin-content-docs/current/scripting/callbacks/OnEnterExitModShop.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnEnterExitModShop","permalink":"/de/docs/scripting/callbacks/OnEnterExitModShop","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnEnterExitModShop.md","tags":[],"version":"current","frontMatter":{"title":"OnEnterExitModShop","sidebar_label":"OnEnterExitModShop","description":"Das Callback wird aufgerufen, wenn ein Spieler eine Tuningwerkstatt betritt oder verl\xe4sst.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"OnDialogResponse","permalink":"/de/docs/scripting/callbacks/OnDialogResponse"},"next":{"title":"OnFilterScriptExit","permalink":"/de/docs/scripting/callbacks/OnFilterScriptExit"}}');var r=t(74848),s=t(28453);const l={title:"OnEnterExitModShop",sidebar_label:"OnEnterExitModShop",description:"Das Callback wird aufgerufen, wenn ein Spieler eine Tuningwerkstatt betritt oder verl\xe4sst.",tags:[]},d=void 0,c={},a=[{value:"Beschreibung",id:"beschreibung",level:2},{value:"R\xfcckgabe(return value)",id:"r\xfcckgabereturn-value",level:2},{value:"Beispiele",id:"beispiele",level:2},{value:"Anmerkungen",id:"anmerkungen",level:2},{value:"\xc4hnliche Funktionen",id:"\xe4hnliche-funktionen",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"beschreibung",children:"Beschreibung"}),"\n",(0,r.jsx)(n.p,{children:"Das Callback wird aufgerufen, wenn ein Spieler eine Tuningwerkstatt betritt oder verl\xe4sst."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Beschreibung"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"playerid"}),(0,r.jsx)(n.td,{children:"Die ID des Spielers"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"enterexit"}),(0,r.jsx)(n.td,{children:"1 bei Betreten 0 bei Verlassen der Werkstatt"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"interiorid"}),(0,r.jsx)(n.td,{children:"Interior ID der Tuningwerkstatt die betreten wird (oder 0 beim Verlassen)"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"r\xfcckgabereturn-value",children:"R\xfcckgabe(return value)"}),"\n",(0,r.jsx)(n.p,{children:"Dieses Callback wird in Filterscripts immer zuerst aufgerufen."}),"\n",(0,r.jsx)(n.h2,{id:"beispiele",children:"Beispiele"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'public OnEnterExitModShop(playerid, enterexit, interiorid)\n{\n    if (enterexit == 0) // Ist enterexit 0, verl\xe4sst der Spieler die Werkstatt\n    {\n        SendClientMessage(playerid, COLOR_WHITE, "Sch\xf6nes Auto! Der Umbau kostet dich $100.");\n        GivePlayerMoney(playerid, -100);\n    }\n    return 1;\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"anmerkungen",children:"Anmerkungen"}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"Bekannte Bugs: Spieler kollidieren wenn sie sich zusammen in einer Werkstatt befinden."})}),"\n",(0,r.jsx)(n.h2,{id:"\xe4hnliche-funktionen",children:"\xc4hnliche Funktionen"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../functions/AddVehicleComponent",children:"AddVehicleComponent"}),": F\xfcge einem Fahrzeug ein Component(Tuning-Teil) hinzu."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>d});var i=t(96540);const r={},s=i.createContext(r);function l(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);