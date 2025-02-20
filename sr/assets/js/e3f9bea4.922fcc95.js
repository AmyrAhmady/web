"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[65520],{28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var i=n(96540);const r={},s=i.createContext(r);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:t},e.children)}},36878:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"scripting/functions/SetPlayerHoldingObject","title":"SetPlayerHoldingObject","description":"Attaches an object to a bone.","source":"@site/docs/scripting/functions/SetPlayerHoldingObject.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetPlayerHoldingObject","permalink":"/sr/docs/scripting/functions/SetPlayerHoldingObject","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/SetPlayerHoldingObject.md","tags":[{"inline":true,"label":"player","permalink":"/sr/docs/tags/player"}],"version":"current","frontMatter":{"title":"SetPlayerHoldingObject","sidebar_label":"SetPlayerHoldingObject","description":"Attaches an object to a bone.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"SetPlayerHealth","permalink":"/sr/docs/scripting/functions/SetPlayerHealth"},"next":{"title":"SetPlayerInterior","permalink":"/sr/docs/scripting/functions/SetPlayerInterior"}}');var r=n(74848),s=n(28453);const o={title:"SetPlayerHoldingObject",sidebar_label:"SetPlayerHoldingObject",description:"Attaches an object to a bone.",tags:["player"]},l=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function a(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Attaches an object to a bone."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"playerid"}),(0,r.jsx)(t.td,{children:"ID of the player you want to attach the object to."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"modelid"}),(0,r.jsx)(t.td,{children:"The model you want to use."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"bone"}),(0,r.jsxs)(t.td,{children:["The ",(0,r.jsx)(t.a,{href:"../resources/boneid",children:"bone"})," you want to attach the object to."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fOffsetX"}),(0,r.jsx)(t.td,{children:"(optional) X axis offset for the object position."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fOffsetY"}),(0,r.jsx)(t.td,{children:"(optional) Y axis offset for the object position."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fOffsetZ"}),(0,r.jsx)(t.td,{children:"(optional) Z axis offset for the object position."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fRotX"}),(0,r.jsx)(t.td,{children:"(optional) X axis rotation of the object."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fRotY"}),(0,r.jsx)(t.td,{children:"(optional) Y axis rotation of the object."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fRotZ"}),(0,r.jsx)(t.td,{children:"(optional) Z axis rotation of the object."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(t.p,{children:"1 on success, 0 on failure"}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:"public OnPlayerSpawn(playerid)\n{\n    SetPlayerHoldingObject(playerid, 1609, 2); //Attach a turtle to the playerid's head!\n    return 1;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsx)(t.p,{children:"Only one object may be attached per player. This function is seperate from the CreateObject / CreatePlayerObject pools."})}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsxs)(t.p,{children:["This function was removed in SA-MP 0.3c. See ",(0,r.jsx)(t.a,{href:"SetPlayerAttachedObject",children:"SetPlayerAttachedObject"})]})}),"\n",(0,r.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"StopPlayerHoldingObject",children:"StopPlayerHoldingObject"}),": Removes attached objects."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}}}]);