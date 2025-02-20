"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[83801],{25394:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"scripting/functions/AddCharModel","title":"AddCharModel","description":"Adds a new custom character model for download.","source":"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/scripting/functions/AddCharModel.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/AddCharModel","permalink":"/zh-cn/docs/scripting/functions/AddCharModel","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/AddCharModel.md","tags":[{"inline":true,"label":"custom skin","permalink":"/zh-cn/docs/tags/custom-skin"},{"inline":true,"label":"char model","permalink":"/zh-cn/docs/tags/char-model"}],"version":"current","frontMatter":{"title":"AddCharModel","sidebar_label":"AddCharModel","description":"Adds a new custom character model for download.","tags":["custom skin","char model"]},"sidebar":"docsSidebar","previous":{"title":"OnVehicleStreamOut","permalink":"/zh-cn/docs/scripting/callbacks/OnVehicleStreamOut"},"next":{"title":"AddMenuItem","permalink":"/zh-cn/docs/scripting/functions/AddMenuItem"}}');var d=t(74848),s=t(28453);const i={title:"AddCharModel",sidebar_label:"AddCharModel",description:"Adds a new custom character model for download.",tags:["custom skin","char model"]},o=void 0,l={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components},{VersionWarn:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t,{version:"SA-MP 0.3.DL R1"}),"\n",(0,d.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,d.jsx)(n.p,{children:"Adds a new custom character model for download. The model files will be stored in player's Documents\\GTA San Andreas User Files\\SAMP\\cache under the Server IP and Port folder in a CRC-form file name."}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Name"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"baseid"}),(0,d.jsx)(n.td,{children:"The base skin model ID to use (behavior of the character & original character to use when download is failed)."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"newid"}),(0,d.jsx)(n.td,{children:"The new skin model ID ranged from 20001 to 30000 (10000 slots) to be used later with SetPlayerSkin"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"const dff[]"}),(0,d.jsx)(n.td,{children:"Name of the .dff model collision file located in models server folder by default (artpath setting)."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"const textureLibrary[]"}),(0,d.jsx)(n.td,{children:"Name of the .txd model texture file located in models server folder by default (artpath setting)."})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"1:"})," The function executed successfully."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"0:"})," The function failed to execute."]}),"\n",(0,d.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-c",children:'public OnGameModeInit()\n{\n    AddCharModel(305, 20001, "lvpdpc2.dff", "lvpdpc2.txd");\n    AddCharModel(305, 20002, "lapdpd2.dff", "lapdpd2.txd");\n    return 1;\n}\n'})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-c",children:'AddCharModel(305, 20001, "lvpdpc2.dff", "lvpdpc2.txd");\nAddCharModel(305, 20002, "lapdpd2.dff", "lapdpd2.txd");\n'})}),"\n",(0,d.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,d.jsx)(n.admonition,{type:"tip",children:(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"useartwork"})," or ",(0,d.jsx)(n.strong,{children:"artwork.enable"})," must be enabled first in server settings in order for this to work."]})}),"\n",(0,d.jsx)(n.admonition,{type:"warning",children:(0,d.jsxs)(n.p,{children:["There are currently no restrictions on when you can call this function, but be aware that if you do not call them inside ",(0,d.jsx)(n.a,{href:"../callbacks/OnFilterScriptInit",children:"OnFilterScriptInit"}),"/",(0,d.jsx)(n.a,{href:"../callbacks/OnGameModeInit",children:"OnGameModeInit"}),", you run the risk that some players, who are already on the server, may not have downloaded the models."]})}),"\n",(0,d.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"SetPlayerSkin",children:"SetPlayerSkin"}),": Set a player's skin."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var r=t(96540);const d={},s=r.createContext(d);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);