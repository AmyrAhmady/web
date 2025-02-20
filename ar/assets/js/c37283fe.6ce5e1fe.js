"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[52718],{28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var i=t(96540);const r={},l=i.createContext(r);function s(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(l.Provider,{value:n},e.children)}},57630:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"scripting/callbacks/OnVehicleSirenStateChange","title":"OnVehicleSirenStateChange","description":"\u064a\u062a\u0645 \u0625\u0633\u062a\u062f\u0639\u0627\u0621 \u0647\u0630\u0627 \u0627\u0644\u0643\u0627\u0644 \u0628\u0627\u0643 \u0639\u0646\u062f \u062a\u0641\u0639\u064a\u0644 \u0635\u0641\u0627\u0631\u0629 \u0627\u0644\u0625\u0646\u0630\u0627\u0631 \u0644\u0644\u0633\u064a\u0627\u0631\u0629","source":"@site/i18n/ar/docusaurus-plugin-content-docs/current/scripting/callbacks/OnVehicleSirenStateChange.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnVehicleSirenStateChange","permalink":"/ar/docs/scripting/callbacks/OnVehicleSirenStateChange","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnVehicleSirenStateChange.md","tags":[{"inline":true,"label":"vehicle","permalink":"/ar/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"OnVehicleSirenStateChange","sidebar_label":"OnVehicleSirenStateChange","description":"\u064a\u062a\u0645 \u0625\u0633\u062a\u062f\u0639\u0627\u0621 \u0647\u0630\u0627 \u0627\u0644\u0643\u0627\u0644 \u0628\u0627\u0643 \u0639\u0646\u062f \u062a\u0641\u0639\u064a\u0644 \u0635\u0641\u0627\u0631\u0629 \u0627\u0644\u0625\u0646\u0630\u0627\u0631 \u0644\u0644\u0633\u064a\u0627\u0631\u0629","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"OnVehicleRespray","permalink":"/ar/docs/scripting/callbacks/OnVehicleRespray"},"next":{"title":"OnVehicleSpawn","permalink":"/ar/docs/scripting/callbacks/OnVehicleSpawn"}}');var r=t(74848),l=t(28453);const s={title:"OnVehicleSirenStateChange",sidebar_label:"OnVehicleSirenStateChange",description:"\u064a\u062a\u0645 \u0625\u0633\u062a\u062f\u0639\u0627\u0621 \u0647\u0630\u0627 \u0627\u0644\u0643\u0627\u0644 \u0628\u0627\u0643 \u0639\u0646\u062f \u062a\u0641\u0639\u064a\u0644 \u0635\u0641\u0627\u0631\u0629 \u0627\u0644\u0625\u0646\u0630\u0627\u0631 \u0644\u0644\u0633\u064a\u0627\u0631\u0629",tags:["vehicle"]},c=void 0,a={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"\u0623\u0645\u062b\u0644\u0629",id:"\u0623\u0645\u062b\u0644\u0629",level:2},{value:"Notes",id:"notes",level:2},{value:"\u0648\u0638\u0627\u0626\u0641 \u0630\u0627\u062a \u0635\u0644\u0629",id:"\u0648\u0638\u0627\u0626\u0641-\u0630\u0627\u062a-\u0635\u0644\u0629",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components},{VersionWarn:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t,{name:"callback",version:"SA-MP 0.3.7"}),"\n",(0,r.jsxs)("div",{dir:"rtl",style:{textAlign:"right"},children:[(0,r.jsx)(n.h2,{id:"description",children:"Description"}),(0,r.jsx)(n.p,{children:"\u064a\u062a\u0645 \u0625\u0633\u062a\u062f\u0639\u0627\u0621 \u0647\u0630\u0627 \u0627\u0644\u0643\u0627\u0644 \u0628\u0627\u0643 \u0639\u0646\u062f \u062a\u0641\u0639\u064a\u0644 \u0635\u0641\u0627\u0631\u0629 \u0627\u0644\u0625\u0646\u0630\u0627\u0631 \u0644\u0644\u0633\u064a\u0627\u0631\u0629"}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"playerid"}),(0,r.jsx)(n.td,{children:"\u0625\u064a\u062f\u064a \u0627\u0644\u0644\u0627\u0639\u0628 \u0627\u0644\u0630\u064a \u0641\u0639\u0651\u0644 \u0635\u0641\u0627\u0631\u0629 \u0627\u0644\u0625\u0646\u0630\u0627\u0631 (\u0627\u0644\u0633\u0627\u0626\u0642)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"vehicleid"}),(0,r.jsx)(n.td,{children:"\u0625\u064a\u062f\u064a \u0627\u0644\u0633\u064a\u0627\u0631\u0629 \u0627\u0644\u062a\u064a \u062a\u0645 \u062a\u0641\u0639\u064a\u0644 \u0635\u0641\u0627\u0631\u0629 \u0627\u0644\u0625\u0646\u0630\u0627\u0631 \u0641\u064a\u0647\u0627"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"newstate"}),(0,r.jsx)(n.td,{children:"1 \u062a\u0645 \u0625\u0637\u0641\u0627\u0621 \u0627\u0644\u0635\u0641\u0627\u0631\u0629 0"})]})]})]}),(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),(0,r.jsx)(n.p,{children:"1 - \u0633\u064a\u0645\u0646\u0639 \u0627\u0644(\u0627\u0644\u063a\u064a\u0645 \u0645\u0648\u062f\xb9) \u0645\u0646 \u062a\u0644\u0642\u064a \u0647\u0630\u0627 \u0627\u0644\u0643\u0627\u0644\u0628\u0627\u0643"}),(0,r.jsx)(n.p,{children:"0 - \u064a\u0634\u064a\u0631 \u0625\u0644\u0649 \u0623\u0646\u0647 \u0633\u064a\u062a\u0645 \u062a\u0645\u0631\u064a\u0631 \u0647\u0630\u0627 \u0627\u0644\u0643\u0627\u0644 \u0628\u0627\u0643 \u0625\u0644\u0649 \u0627\u0644(\u0627\u0644\u063a\u064a\u0645 \u0645\u0648\u062f\xb9) \u0627\u0644\u0642\u0627\u062f\u0645"}),(0,r.jsx)(n.p,{children:"\xb9\u0627\u0644\u063a\u064a\u0645 \u0645\u0648\u062f = gamemode"}),(0,r.jsx)(n.p,{children:"\u064a\u062a\u0645 \u0625\u0633\u062a\u062f\u0639\u0627\u0626\u0647 \u0623\u0648\u0644\u0627 \u0641\u064a \u0627\u0644\u0641\u064a\u0644\u062a\u0631\u0633\u0643\u0631\u064a\u0628\u062a\u0627\u062a"}),(0,r.jsx)(n.h2,{id:"\u0623\u0645\u062b\u0644\u0629",children:"\u0623\u0645\u062b\u0644\u0629"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'public OnVehicleSirenStateChange(playerid, vehicleid, newstate)\n{\n    if (newstate)\n    {\n        GameTextForPlayer(playerid, "~W~Siren ~G~on", 1000, 3);\n    }\n    else\n    {\n        GameTextForPlayer(playerid, "~W~Siren ~r~off", 1000, 3);\n    }\n    return 1;\n}\n'})}),"\n",(0,r.jsxs)("div",{dir:"rtl",style:{textAlign:"right"},children:[(0,r.jsx)(n.h2,{id:"notes",children:"Notes"}),(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"\u064a\u062a\u0645 \u0625\u0633\u062a\u062f\u0639\u0627\u0621 \u0647\u0630\u0627 \u0627\u0644\u0643\u0627\u0644\u0628\u0627\u0643 \u0641\u0642\u0637 \u0639\u0646\u062f\u0645\u0627 \u064a\u062a\u0645 \u062a\u0634\u063a\u064a\u0644 \u0627\u0648 \u0625\u0637\u0641\u0627\u0621 \u0635\u0641\u0627\u0631\u0629 \u0627\u0644\u0625\u0646\u0638\u0627\u0631"})}),(0,r.jsx)(n.h2,{id:"\u0648\u0638\u0627\u0626\u0641-\u0630\u0627\u062a-\u0635\u0644\u0629",children:"\u0648\u0638\u0627\u0626\u0641 \u0630\u0627\u062a \u0635\u0644\u0629"}),(0,r.jsx)(n.p,{children:"\u0642\u062f \u062a\u0643\u0648\u0646 \u0627\u0644\u0648\u0638\u0627\u0626\u0641 \u0627\u0644\u062a\u0627\u0644\u064a\u0629 \u0645\u0641\u064a\u062f\u0629\u060c \u062d\u064a\u062b \u0623\u0646\u0647\u0627 \u0630\u0627\u062a \u0635\u0644\u0629 \u0628\u0647\u0630\u0627 \u0627\u0644\u0627\u0633\u062a\u062f\u0639\u0627\u0621 \u0628\u0637\u0631\u064a\u0642\u0629 \u0623\u0648 \u0628\u0623\u062e\u0631\u0649"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../functions/GetVehicleParamsSirenState",children:"GetVehicleParamsSirenState"}),": \u0627\u0644\u062a\u062d\u0642\u0642 \u0625\u0630 \u0643\u0627\u0646\u062a \u0635\u0641\u0627\u0631\u0629 \u0627\u0644\u0625\u0646\u0630\u0627\u0631 \u0627\u0644\u062e\u0627\u0635\u0629 \u0628\u0627\u0644\u0633\u064a\u0627\u0631\u0629 \u0645\u0634\u063a\u0644\u0629 \u0623\u0648 \u0644\u0627"]}),"\n"]})]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}}}]);