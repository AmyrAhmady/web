"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[83624],{23343:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>r});const c=JSON.parse('{"id":"scripting/callbacks/OnObjectMoved","title":"OnObjectMoved","description":"This callback is called when an object is moved after MoveObject (when it stops moving).","source":"@site/docs/scripting/callbacks/OnObjectMoved.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnObjectMoved","permalink":"/hu/docs/scripting/callbacks/OnObjectMoved","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnObjectMoved.md","tags":[{"inline":true,"label":"object","permalink":"/hu/docs/tags/object"}],"version":"current","frontMatter":{"title":"OnObjectMoved","sidebar_label":"OnObjectMoved","description":"This callback is called when an object is moved after MoveObject (when it stops moving).","tags":["object"]},"sidebar":"docsSidebar","previous":{"title":"OnNPCSpawn","permalink":"/hu/docs/scripting/callbacks/OnNPCSpawn"},"next":{"title":"OnPickupStreamIn","permalink":"/hu/docs/scripting/callbacks/OnPickupStreamIn"}}');var i=n(74848),s=n(28453);const l={title:"OnObjectMoved",sidebar_label:"OnObjectMoved",description:"This callback is called when an object is moved after MoveObject (when it stops moving).",tags:["object"]},o=void 0,a={},r=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"This callback is called when an object is moved after MoveObject (when it stops moving)."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"objectid"}),(0,i.jsx)(t.td,{children:"The ID of the object that was moved"})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(t.p,{children:"It is always called first in filterscripts."}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:'public OnObjectMoved(objectid)\n{\n    printf("Object %d finished moving.", objectid);\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"../functions/SetObjectPos",children:"SetObjectPos"})," does not work when used in this callback. To fix it, recreate the object."]})}),"\n",(0,i.jsx)(t.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,i.jsx)(t.p,{children:"The following callbacks might be useful, as they're related to this callback in one way or another."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"OnPlayerObjectMoved",children:"OnPlayerObjectMoved"}),": This callback is called when a player-object stops moving."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsx)(t.p,{children:"The following callbacks might be useful, as they're related to this callback in one way or another."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"../functions/MoveObject",children:"MoveObject"}),": Move an object."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"../functions/MovePlayerObject",children:"MovePlayerObject"}),": Move a player object."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"../functions/IsObjectMoving",children:"IsObjectMoving"}),": Check if the object is moving."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"../functions/StopObject",children:"StopObject"}),": Stop an object from moving."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>o});var c=n(96540);const i={},s=c.createContext(i);function l(e){const t=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),c.createElement(s.Provider,{value:t},e.children)}}}]);