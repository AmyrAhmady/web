"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[30032],{28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var i=n(96540);const s={},c=i.createContext(s);function o(e){const t=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(c.Provider,{value:t},e.children)}},60211:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>j,frontMatter:()=>o,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"scripting/functions/IsObjectMoving","title":"IsObjectMoving","description":"Checks if the given objectid is moving.","source":"@site/docs/scripting/functions/IsObjectMoving.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/IsObjectMoving","permalink":"/docs/scripting/functions/IsObjectMoving","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/IsObjectMoving.md","tags":[{"inline":true,"label":"object","permalink":"/docs/tags/object"}],"version":"current","frontMatter":{"title":"IsObjectMoving","sidebar_label":"IsObjectMoving","description":"Checks if the given objectid is moving.","tags":["object"]},"sidebar":"docsSidebar","previous":{"title":"IsObjectMaterialSlotUsed","permalink":"/docs/scripting/functions/IsObjectMaterialSlotUsed"},"next":{"title":"IsPickupHiddenForPlayer","permalink":"/docs/scripting/functions/IsPickupHiddenForPlayer"}}');var s=n(74848),c=n(28453);const o={title:"IsObjectMoving",sidebar_label:"IsObjectMoving",description:"Checks if the given objectid is moving.",tags:["object"]},r=void 0,l={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function a(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Checks if the given objectid is moving."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"objectid"}),(0,s.jsx)(t.td,{children:"The objectid you want to check if is moving."})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"true"})," if the object is moving, ",(0,s.jsx)(t.strong,{children:"false"})," if not."]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-c",children:"new gAirportGate;\n\npublic OnGameModeInit()\n{\n    gAirportGate = CreateObject(980, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);\n\n    MoveObject(gAirportGate, 0.0, 0.0, 15.0, 1.00);\n\n\tif (IsObjectMoving(gAirportGate))\n\t{\n\t\tStopObject(gAirportGate);\n\t}\n    return 1;\n}\n\n"})}),"\n",(0,s.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"MoveObject",children:"MoveObject"}),": Move an object."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"StopObject",children:"StopObject"}),": Stop an object from moving."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"../callbacks/OnObjectMoved",children:"OnObjectMoved"}),": Called when an object stops moving."]}),"\n"]})]})}function j(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}}}]);