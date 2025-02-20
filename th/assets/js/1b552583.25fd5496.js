"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[18472],{22005:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"scripting/functions/SetPlayerHoldingObject","title":"SetPlayerHoldingObject","description":"Attaches an object to a bone.","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/functions/SetPlayerHoldingObject.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetPlayerHoldingObject","permalink":"/th/docs/scripting/functions/SetPlayerHoldingObject","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/SetPlayerHoldingObject.md","tags":[{"inline":true,"label":"player","permalink":"/th/docs/tags/player"}],"version":"current","frontMatter":{"title":"SetPlayerHoldingObject","sidebar_label":"SetPlayerHoldingObject","description":"Attaches an object to a bone.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"SetPlayerHealth","permalink":"/th/docs/scripting/functions/SetPlayerHealth"},"next":{"title":"SetPlayerInterior","permalink":"/th/docs/scripting/functions/SetPlayerInterior"}}');var r=n(74848),o=n(28453);const s={title:"SetPlayerHoldingObject",sidebar_label:"SetPlayerHoldingObject",description:"Attaches an object to a bone.",tags:["player"]},c=void 0,l={},d=[{value:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",level:2},{value:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",id:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",level:2},{value:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",level:2},{value:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",id:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",level:2},{value:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",level:2}];function a(e){const t={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",children:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22"}),"\n",(0,r.jsx)(t.p,{children:"Attaches an object to a bone."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"playerid"}),(0,r.jsx)(t.td,{children:"ID of the player you want to attach the object to."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"modelid"}),(0,r.jsx)(t.td,{children:"The model you want to use."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"bone"}),(0,r.jsx)(t.td,{children:"The bone you want to attach the object to."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fOffsetX"}),(0,r.jsx)(t.td,{children:"(optional) X axis offset for the object position."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fOffsetY"}),(0,r.jsx)(t.td,{children:"(optional) Y axis offset for the object position."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fOffsetZ"}),(0,r.jsx)(t.td,{children:"(optional) Z axis offset for the object position."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fRotX"}),(0,r.jsx)(t.td,{children:"(optional) X axis rotation of the object."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fRotY"}),(0,r.jsx)(t.td,{children:"(optional) Y axis rotation of the object."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fRotZ"}),(0,r.jsx)(t.td,{children:"(optional) Z axis rotation of the object."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",children:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19"}),"\n",(0,r.jsx)(t.p,{children:"1 on success, 0 on failure"}),"\n",(0,r.jsx)(t.h2,{id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",children:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:"public OnPlayerSpawn(playerid)\n{\n    SetPlayerHoldingObject(playerid, 1609, 2); //Attach a turtle to the playerid's head!\n    return 1;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",children:"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01"}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsx)(t.p,{children:"Only one object may be attached per player. This function is seperate from the CreateObject / CreatePlayerObject pools."})}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsx)(t.p,{children:"This function was removed in SA-MP 0.3c. check SetPlayerAttachedObject"})}),"\n",(0,r.jsx)(t.h2,{id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",children:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19"})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var i=n(96540);const r={},o=i.createContext(r);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);