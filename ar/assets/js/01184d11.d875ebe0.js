"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[86791],{28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>c});var r=i(96540);const l={},t=r.createContext(l);function s(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),r.createElement(t.Provider,{value:n},e.children)}},62714:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>o,frontMatter:()=>s,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"scripting/callbacks/OnVehicleRespray","title":"OnVehicleRespray","description":"\u064a\u062a\u0645 \u0625\u0633\u062a\u062f\u0639\u0627\u0621 \u0647\u0630\u0627 \u0627\u0644\u0643\u0627\u0644\u0628\u0627\u0643 \u0639\u0646\u062f \u062e\u0631\u0648\u062c \u0627\u0644\u0644\u0627\u0639\u0628 \u0645\u0646  \u0645\u0631\u0622\u0628 \u062a\u0639\u062f\u064a\u0644 \u0627\u0644\u0633\u064a\u0627\u0631\u0627\u062a \u062d\u062a\u0649 \u0625\u0630\u0627 \u0643\u0627\u0646 \u0637\u0644\u0627\u0621 \u0627\u0644\u0633\u064a\u0627\u0631\u0629 \u0644\u0645 \u064a\u062a\u063a\u064a\u0631","source":"@site/i18n/ar/docusaurus-plugin-content-docs/current/scripting/callbacks/OnVehicleRespray.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnVehicleRespray","permalink":"/ar/docs/scripting/callbacks/OnVehicleRespray","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnVehicleRespray.md","tags":[{"inline":true,"label":"vehicle","permalink":"/ar/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"OnVehicleRespray","sidebar_label":"OnVehicleRespray","description":"\u064a\u062a\u0645 \u0625\u0633\u062a\u062f\u0639\u0627\u0621 \u0647\u0630\u0627 \u0627\u0644\u0643\u0627\u0644\u0628\u0627\u0643 \u0639\u0646\u062f \u062e\u0631\u0648\u062c \u0627\u0644\u0644\u0627\u0639\u0628 \u0645\u0646  \u0645\u0631\u0622\u0628 \u062a\u0639\u062f\u064a\u0644 \u0627\u0644\u0633\u064a\u0627\u0631\u0627\u062a \u062d\u062a\u0649 \u0625\u0630\u0627 \u0643\u0627\u0646 \u0637\u0644\u0627\u0621 \u0627\u0644\u0633\u064a\u0627\u0631\u0629 \u0644\u0645 \u064a\u062a\u063a\u064a\u0631","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"OnVehiclePaintjob","permalink":"/ar/docs/scripting/callbacks/OnVehiclePaintjob"},"next":{"title":"OnVehicleSirenStateChange","permalink":"/ar/docs/scripting/callbacks/OnVehicleSirenStateChange"}}');var l=i(74848),t=i(28453);const s={title:"OnVehicleRespray",sidebar_label:"OnVehicleRespray",description:"\u064a\u062a\u0645 \u0625\u0633\u062a\u062f\u0639\u0627\u0621 \u0647\u0630\u0627 \u0627\u0644\u0643\u0627\u0644\u0628\u0627\u0643 \u0639\u0646\u062f \u062e\u0631\u0648\u062c \u0627\u0644\u0644\u0627\u0639\u0628 \u0645\u0646  \u0645\u0631\u0622\u0628 \u062a\u0639\u062f\u064a\u0644 \u0627\u0644\u0633\u064a\u0627\u0631\u0627\u062a \u062d\u062a\u0649 \u0625\u0630\u0627 \u0643\u0627\u0646 \u0637\u0644\u0627\u0621 \u0627\u0644\u0633\u064a\u0627\u0631\u0629 \u0644\u0645 \u064a\u062a\u063a\u064a\u0631",tags:["vehicle"]},c=void 0,d={},a=[{value:"\u0627\u0644\u0648\u0635\u0641",id:"\u0627\u0644\u0648\u0635\u0641",level:2},{value:"Returns",id:"returns",level:2},{value:"\u0623\u0645\u062b\u0644\u0629",id:"\u0623\u0645\u062b\u0644\u0629",level:2},{value:"Notes",id:"notes",level:2},{value:"\u0627\u0644\u0627\u0633\u062a\u062f\u0639\u0627\u0621\u0627\u062a \u0627\u0648 \u0643\u0627\u0644\u0628\u0627\u0643\u0627\u062a \u0630\u0627\u062a \u0627\u0644\u0635\u0644\u0629",id:"\u0627\u0644\u0627\u0633\u062a\u062f\u0639\u0627\u0621\u0627\u062a-\u0627\u0648-\u0643\u0627\u0644\u0628\u0627\u0643\u0627\u062a-\u0630\u0627\u062a-\u0627\u0644\u0635\u0644\u0629",level:2},{value:"\u0648\u0638\u0627\u0626\u0641 \u0630\u0627\u062a \u0635\u0644\u0629",id:"\u0648\u0638\u0627\u0626\u0641-\u0630\u0627\u062a-\u0635\u0644\u0629",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{dir:"rtl",style:{textAlign:"right"},children:[(0,l.jsx)(n.h2,{id:"\u0627\u0644\u0648\u0635\u0641",children:"\u0627\u0644\u0648\u0635\u0641"}),(0,l.jsx)(n.p,{children:"\u064a\u062a\u0645 \u0625\u0633\u062a\u062f\u0639\u0627\u0621 \u0647\u0630\u0627 \u0627\u0644\u0643\u0627\u0644\u0628\u0627\u0643 \u0639\u0646\u062f \u062e\u0631\u0648\u062c \u0627\u0644\u0644\u0627\u0639\u0628 \u0645\u0646  \u0645\u0631\u0622\u0628 \u062a\u0639\u062f\u064a\u0644 \u0627\u0644\u0633\u064a\u0627\u0631\u0627\u062a \u062d\u062a\u0649 \u0625\u0630\u0627 \u0643\u0627\u0646 \u0637\u0644\u0627\u0621 \u0627\u0644\u0633\u064a\u0627\u0631\u0629 \u0644\u0645 \u064a\u062a\u063a\u064a\u0631. \u0625\u062d\u0630\u0631 \u0627\u0644\u0625\u0633\u0645 \u063a\u0627\u0645\u0636 \u0645\u0631\u0627\u0626\u0628 (\u0625\u062f\u0641\u0639 \u0648 \u0631\u0634\xb9) \u0644\u0627 \u064a\u0641\u0639\u0644\u0648\u0627 \u0647\u0630\u0627 \u0627\u0644\u0643\u0627\u0644\u0628\u0627\u0643"}),(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Name"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"playerid"}),(0,l.jsx)(n.td,{children:"\u0625\u064a\u062f\u064a \u0627\u0644\u0644\u0627\u0639\u0628 \u0627\u0644\u0644\u0630\u064a \u064a\u0642\u0648\u062f \u0627\u0644\u0633\u064a\u0627\u0631\u0629"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"vehicleid"}),(0,l.jsx)(n.td,{children:"\u0625\u064a\u062f\u064a \u0627\u0644\u0633\u064a\u0627\u0631\u0629 \u0627\u0644\u062a\u064a \u062a\u0645 \u0625\u063a\u0627\u062f\u0629 \u0637\u0644\u0627\u0626\u0647\u0627"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"color1"}),(0,l.jsx)(n.td,{children:"\u0627\u0644\u0644\u0648\u0646 \u0627\u0644\u0630\u064a \u062a\u0645 \u062a\u063a\u064a\u064a\u0631 \u0627\u0644\u0644\u0648\u0646 \u0627\u0644\u0623\u0633\u0627\u0633\u064a \u0644\u0644\u0645\u0631\u0643\u0628\u0629 \u0625\u0644\u064a\u0647"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"color2"}),(0,l.jsx)(n.td,{children:"\u0627\u0644\u0644\u0648\u0646 \u0627\u0644\u0630\u064a \u062a\u0645 \u062a\u063a\u064a\u064a\u0631 \u0627\u0644\u0644\u0648\u0646 \u0627\u0644\u062b\u0627\u0646\u0648\u064a \u0644\u0644\u0645\u0631\u0643\u0628\u0629 \u0625\u0644\u064a\u0647"})]})]})]}),(0,l.jsx)(n.h2,{id:"returns",children:"Returns"}),(0,l.jsx)(n.p,{children:"\u064a\u062a\u0645 \u0625\u0633\u062a\u062f\u0639\u0627\u0626\u0647 \u0623\u0648\u0644\u0627 \u0641\u064a \u0627\u0644(\u0627\u0644\u063a\u064a\u0645 \u0645\u0648\u062f\xb2) \u0625\u0630\u0627 \u064a\u0631\u062c\u0639 0 \u0648 \u064a\u0642\u0648\u0645 \u0623\u064a\u0636\u0627 \u0628\u062a\u0639\u0637\u064a\u0644 \u0628\u0642\u064a\u0629 \u0627\u0644\u0641\u064a\u0644\u062a\u0631\u0633\u0643\u0631\u064a\u0628\u062a\u0627\u062a \u0645\u0646 \u0631\u0623\u064a\u062a\u0647"}),(0,l.jsx)(n.h2,{id:"\u0623\u0645\u062b\u0644\u0629",children:"\u0623\u0645\u062b\u0644\u0629"})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:'public OnVehicleRespray(playerid, vehicleid, color1, color2)\n{\n    new string[48];\n    format(string, sizeof(string), "You resprayed vehicle %d to colors %d and %d!", vehicleid, color1, color2);\n    SendClientMessage(playerid, COLOR_GREEN, string);\n    return 1;\n}\n'})}),"\n",(0,l.jsxs)("div",{dir:"rtl",style:{textAlign:"right"},children:[(0,l.jsx)(n.h2,{id:"notes",children:"Notes"}),(0,l.jsxs)(n.admonition,{type:"tip",children:[(0,l.jsx)(n.p,{children:"\u0647\u0630\u0627 \u0627\u0644\u0643\u0627\u0644\u0628 \u0628\u0627\u0643 \u0644\u0627 \u064a\u062a\u0645 \u0625\u0633\u062a\u062f\u0639\u0627\u0626\u0647 \u0645\u0646 \u0642\u0628\u0644 (ChangeVehicleColor) \u0628\u0634\u0643\u0644 \u0645\u0636\u0644\u0644.\n\u0647\u0630\u0627 \u0627\u0644\u0643\u0627\u0644\u0628\u0627\u0643 \u0644\u0627 \u064a\u062a\u0645 \u0625\u0633\u062a\u062f\u0639\u0627\u0626\u0647 \u0645\u0646 \u0642\u0628\u0644 (\u0625\u062f\u0641\u0639 \u0648 \u0631\u0634\xb9)"}),(0,l.jsxs)(n.p,{children:["\u0627\u0644\u0625\u0635\u0644\u0627\u062d \u0647\u0646\u0627: ",(0,l.jsx)(n.a,{href:"http://pastebin.com/G81da7N1",children:"http://pastebin.com/G81da7N1"})]})]}),(0,l.jsx)(n.admonition,{type:"warning",children:(0,l.jsx)(n.p,{children:"\u0627\u0644\u0623\u062e\u0637\u0627\u0621 \u0627\u0644\u0645\u0639\u0631\u0648\u0641\u0629 : \u0645\u0639\u0627\u064a\u0646\u0629 \u0623\u062d\u062f \u0627\u0644\u0645\u0643\u0648\u0646\u0627\u062a \u0641\u064a \u0645\u0631\u0622\u0628 \u0627\u0644\u062a\u0639\u062f\u064a\u0644 \u0642\u062f \u064a\u0633\u062a\u062f\u0639\u064a \u0647\u0630\u0627 \u0627\u0644\u0643\u0627\u0644 \u0628\u0627\u0643"})}),(0,l.jsx)(n.p,{children:"\xb9\u0625\u062f\u0642\u0639 \u0648 \u0631\u0634 = Pay 'n' Spray\n\xb2\u0627\u0644\u063a\u064a\u0645 \u0645\u0648\u062f = gamemode"}),(0,l.jsx)(n.h2,{id:"\u0627\u0644\u0627\u0633\u062a\u062f\u0639\u0627\u0621\u0627\u062a-\u0627\u0648-\u0643\u0627\u0644\u0628\u0627\u0643\u0627\u062a-\u0630\u0627\u062a-\u0627\u0644\u0635\u0644\u0629",children:"\u0627\u0644\u0627\u0633\u062a\u062f\u0639\u0627\u0621\u0627\u062a \u0627\u0648 \u0643\u0627\u0644\u0628\u0627\u0643\u0627\u062a \u0630\u0627\u062a \u0627\u0644\u0635\u0644\u0629"}),(0,l.jsx)(n.p,{children:"\u0642\u062f \u062a\u0643\u0648\u0646 \u0627\u0644\u0627\u0633\u062a\u062f\u0639\u0627\u0621\u0627\u062a \u0627\u0644\u062a\u0627\u0644\u064a\u0629 \u0645\u0641\u064a\u062f\u0629\u060c \u062d\u064a\u062b \u0623\u0646\u0647\u0627 \u0630\u0627\u062a \u0635\u0644\u0629 \u0628\u0647\u0630\u0627 \u0627\u0644\u0627\u0633\u062a\u062f\u0639\u0627\u0621 \u0628\u0637\u0631\u064a\u0642\u0629 \u0623\u0648 \u0628\u0623\u062e\u0631\u0649"}),(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"OnVehiclePaintjob",children:"OnVehiclePaintjob"}),": \u0647\u0630\u0627 \u0627\u0644\u0643\u0627\u0644\u0628\u0627\u0643 \u064a\u062a\u0645 \u0625\u0633\u062a\u062f\u0639\u0627\u0626\u0647 \u0639\u0646\u062f\u0645\u0627 \u064a\u062a\u0645 \u062a\u063a\u064a\u064a\u0631 \u0633\u062a\u064a\u0643\u0631\u0627\u062a \u0627\u0644\u0633\u064a\u0627\u0631\u0629"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"OnVehicleMod",children:"OnVehicleMod"}),": \u0647\u0630\u0627 \u0627\u0644\u0643\u0627\u0644\u0628\u0627\u0643 \u064a\u062a\u0645 \u0625\u0633\u062a\u062f\u0639\u0627\u0626\u0647 \u0639\u0646\u062f\u0645\u0627 \u064a\u062a\u0645 \u062a\u063a\u064a\u064a\u0631 \u0645\u0643\u0648\u0646\u0627\u062a \u0627\u0644\u0633\u064a\u0627\u0631\u0629"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"OnEnterExitModShop",children:"OnEnterExitModShop"}),": \u0647\u0630\u0627 \u0627\u0644\u0643\u0627\u0644\u0628\u0627\u0643 \u064a\u062a\u0645 \u0625\u0633\u062a\u062f\u0639\u0627\u0626\u0647 \u0639\u0646\u062f \u062f\u062e\u0648\u0644 \u0623\u0648 \u062e\u0631\u0648\u062c \u0633\u064a\u0627\u0631\u0629 \u0625\u0644\u0649 \u0645\u0631\u0622\u0628 \u0627\u0644\u062a\u0639\u062f\u064a\u0644"]}),"\n"]}),(0,l.jsx)(n.h2,{id:"\u0648\u0638\u0627\u0626\u0641-\u0630\u0627\u062a-\u0635\u0644\u0629",children:"\u0648\u0638\u0627\u0626\u0641 \u0630\u0627\u062a \u0635\u0644\u0629"}),(0,l.jsx)(n.p,{children:"\u0642\u062f \u062a\u0643\u0648\u0646 \u0627\u0644\u0648\u0638\u0627\u0626\u0641 \u0627\u0644\u062a\u0627\u0644\u064a\u0629 \u0645\u0641\u064a\u062f\u0629\u060c \u062d\u064a\u062b \u0623\u0646\u0647\u0627 \u0630\u0627\u062a \u0635\u0644\u0629 \u0628\u0647\u0630\u0627 \u0627\u0644\u0627\u0633\u062a\u062f\u0639\u0627\u0621 \u0628\u0637\u0631\u064a\u0642\u0629 \u0623\u0648 \u0628\u0623\u062e\u0631\u0649"}),(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../functions/ChangeVehicleColor",children:"ChangeVehicleColor"}),": \u064a\u063a\u064a\u0631 \u0644\u0648\u0646 \u0627\u0644\u0633\u064a\u0627\u0631\u0629"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../functions/ChangeVehiclePaintjob",children:"ChangeVehiclePaintjob"}),": \u064a\u063a\u064a\u0631 \u0633\u062a\u064a\u0643\u0631\u0627\u062a \u0627\u0644\u0633\u064a\u0627\u0631\u0629"]}),"\n"]})]})]})}function o(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}}}]);