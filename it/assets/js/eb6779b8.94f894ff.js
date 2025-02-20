"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[80429],{28453:(e,t,i)=>{i.d(t,{R:()=>c,x:()=>l});var n=i(96540);const s={},r=n.createContext(s);function c(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),n.createElement(r.Provider,{value:t},e.children)}},64438:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>n,toc:()=>o});const n=JSON.parse('{"id":"scripting/functions/DestroyPickup","title":"DestroyPickup","description":"Destroys a pickup created with CreatePickup.","source":"@site/docs/scripting/functions/DestroyPickup.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/DestroyPickup","permalink":"/it/docs/scripting/functions/DestroyPickup","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/DestroyPickup.md","tags":[{"inline":true,"label":"pickup","permalink":"/it/docs/tags/pickup"}],"version":"current","frontMatter":{"title":"DestroyPickup","sidebar_label":"DestroyPickup","description":"Destroys a pickup created with CreatePickup.","tags":["pickup"]},"sidebar":"docsSidebar","previous":{"title":"DestroyObject","permalink":"/it/docs/scripting/functions/DestroyObject"},"next":{"title":"DestroyPlayerObject","permalink":"/it/docs/scripting/functions/DestroyPlayerObject"}}');var s=i(74848),r=i(28453);const c={title:"DestroyPickup",sidebar_label:"DestroyPickup",description:"Destroys a pickup created with CreatePickup.",tags:["pickup"]},l=void 0,a={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function p(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Destroys a pickup created with CreatePickup."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"pickup"}),(0,s.jsx)(t.td,{children:"The ID of the pickup to destroy (returned by CreatePickup)."})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"true"})," - The function executed successfully."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"false"})," - The function failed to execute. The pickup specified doesn't exist."]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-c",children:"new g_PickupArmour;\n\n// Create a pickup for armor.\ng_PickupArmour = CreatePickup(1242, 2, 1503.3359, 1432.3585, 10.1191);\n\n// Some time later...\nDestroyPickup(g_PickupArmour);\n"})}),"\n",(0,s.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"CreatePickup",children:"CreatePickup"}),": Create a pickup."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"IsValidPickup",children:"IsValidPickup"}),": Checks if a pickup is valid."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"../callbacks/OnPlayerPickUpPickup",children:"OnPlayerPickUpPickup"}),": Called when a player picks up a pickup."]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}}}]);