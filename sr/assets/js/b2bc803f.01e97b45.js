"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[26821],{28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var c=t(96540);const i={},s=c.createContext(i);function r(e){const n=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),c.createElement(s.Provider,{value:n},e.children)}},64045:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>j,frontMatter:()=>r,metadata:()=>c,toc:()=>o});const c=JSON.parse('{"id":"scripting/callbacks/OnObjectMoved","title":"OnObjectMoved","description":"\u041e\u0432\u0430 \u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0430 \u0441\u0435 \u043f\u043e\u0437\u0438\u0432\u0430 \u043a\u0430\u0434\u0430 \u0441\u0435 \u043e\u0431\u0458\u0435\u043a\u0430\u0442 \u043f\u043e\u043c\u0435\u0440\u0438 \u043d\u0430\u043a\u043e\u043d MoveObject (\u043a\u0430\u0434\u0430 \u0441\u0435 \u0437\u0430\u0443\u0441\u0442\u0430\u0432\u0438 \u0441\u0430 \u043a\u0440\u0435\u0442\u0430\u045a\u0435\u043c).","source":"@site/i18n/sr/docusaurus-plugin-content-docs/current/scripting/callbacks/OnObjectMoved.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnObjectMoved","permalink":"/sr/docs/scripting/callbacks/OnObjectMoved","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnObjectMoved.md","tags":[{"inline":true,"label":"object","permalink":"/sr/docs/tags/object"}],"version":"current","frontMatter":{"title":"OnObjectMoved","sidebar_label":"OnObjectMoved","description":"\u041e\u0432\u0430 \u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0430 \u0441\u0435 \u043f\u043e\u0437\u0438\u0432\u0430 \u043a\u0430\u0434\u0430 \u0441\u0435 \u043e\u0431\u0458\u0435\u043a\u0430\u0442 \u043f\u043e\u043c\u0435\u0440\u0438 \u043d\u0430\u043a\u043e\u043d MoveObject (\u043a\u0430\u0434\u0430 \u0441\u0435 \u0437\u0430\u0443\u0441\u0442\u0430\u0432\u0438 \u0441\u0430 \u043a\u0440\u0435\u0442\u0430\u045a\u0435\u043c).","tags":["object"]},"sidebar":"docsSidebar","previous":{"title":"OnNPCSpawn","permalink":"/sr/docs/scripting/callbacks/OnNPCSpawn"},"next":{"title":"OnPickupStreamIn","permalink":"/sr/docs/scripting/callbacks/OnPickupStreamIn"}}');var i=t(74848),s=t(28453);const r={title:"OnObjectMoved",sidebar_label:"OnObjectMoved",description:"\u041e\u0432\u0430 \u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0430 \u0441\u0435 \u043f\u043e\u0437\u0438\u0432\u0430 \u043a\u0430\u0434\u0430 \u0441\u0435 \u043e\u0431\u0458\u0435\u043a\u0430\u0442 \u043f\u043e\u043c\u0435\u0440\u0438 \u043d\u0430\u043a\u043e\u043d MoveObject (\u043a\u0430\u0434\u0430 \u0441\u0435 \u0437\u0430\u0443\u0441\u0442\u0430\u0432\u0438 \u0441\u0430 \u043a\u0440\u0435\u0442\u0430\u045a\u0435\u043c).",tags:["object"]},l=void 0,d={},o=[{value:"\u041e\u043f\u0438\u0441",id:"\u043e\u043f\u0438\u0441",level:2},{value:"\u0412\u0440\u0430\u045b\u0430",id:"\u0432\u0440\u0430\u045b\u0430",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440",id:"\u043f\u0440\u0438\u043c\u0435\u0440",level:2},{value:"\u0411\u0435\u043b\u0435\u0448\u043a\u0435",id:"\u0431\u0435\u043b\u0435\u0448\u043a\u0435",level:2},{value:"\u041f\u043e\u0432\u0435\u0437\u0430\u043d\u0435 \u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0435",id:"\u043f\u043e\u0432\u0435\u0437\u0430\u043d\u0435-\u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0435-\u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0435",level:2},{value:"\u041f\u043e\u0432\u0435\u0437\u0430\u043d\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0435",id:"\u043f\u043e\u0432\u0435\u0437\u0430\u043d\u0435-\u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0435",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"\u043e\u043f\u0438\u0441",children:"\u041e\u043f\u0438\u0441"}),"\n",(0,i.jsxs)(n.p,{children:["\u041e\u0432\u0430 \u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0430 \u0441\u0435 \u043f\u043e\u0437\u0438\u0432\u0430 \u043a\u0430\u0434\u0430 \u0441\u0435 \u043e\u0431\u0458\u0435\u043a\u0430\u0442 \u043f\u043e\u043c\u0435\u0440\u0438 \u043d\u0430\u043a\u043e\u043d ",(0,i.jsx)(n.a,{href:"../functions/MoveObject",children:"MoveObject"})," (\u043a\u0430\u0434\u0430 \u0441\u0435 \u0437\u0430\u0443\u0441\u0442\u0430\u0432\u0438 \u0441\u0430 \u043a\u0440\u0435\u0442\u0430\u045a\u0435\u043c)."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u0418\u043c\u0435"}),(0,i.jsx)(n.th,{children:"\u041e\u043f\u0438\u0441"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"objectid"}),(0,i.jsx)(n.td,{children:"ID \u043e\u0431\u0458\u0435\u043a\u0442\u0430 \u043a\u043e\u0458\u0438 \u0458\u0435 \u043f\u043e\u043c\u0435\u0440\u0435\u043d."})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"\u0432\u0440\u0430\u045b\u0430",children:"\u0412\u0440\u0430\u045b\u0430"}),"\n",(0,i.jsx)(n.p,{children:"\u0423\u0432\u0435\u043a \u0441\u0435 \u043f\u043e\u0437\u0438\u0432\u0430 \u043f\u0440\u0432\u0430 \u0443 \u0444\u0438\u043b\u0442\u0435\u0440 \u0441\u043a\u0440\u0438\u043f\u0442\u0430\u043c\u0430."}),"\n",(0,i.jsx)(n.h2,{id:"\u043f\u0440\u0438\u043c\u0435\u0440",children:"\u041f\u0440\u0438\u043c\u0435\u0440"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'public OnObjectMoved(objectid)\n{\n    printf("Object %d finished moving.", objectid);\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"\u0431\u0435\u043b\u0435\u0448\u043a\u0435",children:"\u0411\u0435\u043b\u0435\u0448\u043a\u0435"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"../functions/SetObjectPos",children:"SetObjectPos"})," \u043d\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0438\u0448\u0435 \u043a\u0430\u0434\u0430 \u0441\u0435 \u043a\u043e\u0440\u0438\u0441\u0442\u0438 \u0443 \u043e\u0432\u043e\u0458 \u043f\u043e\u0432\u0440\u0430\u0442\u043d\u043e\u0458 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0438. \u0414\u0430 \u0431\u0438\u0441\u0442\u0435 \u0438\u0441\u043f\u0440\u0430\u0432\u0438\u043b\u0438, \u043f\u043e\u043d\u043e\u0432\u043e \u043a\u0440\u0435\u0438\u0440\u0430\u0458\u0442\u0435 \u043e\u0431\u0458\u0435\u043a\u0430\u0442."]})}),"\n",(0,i.jsx)(n.h2,{id:"\u043f\u043e\u0432\u0435\u0437\u0430\u043d\u0435-\u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0435-\u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0435",children:"\u041f\u043e\u0432\u0435\u0437\u0430\u043d\u0435 \u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0435"}),"\n",(0,i.jsx)(n.p,{children:"\u0421\u043b\u0435\u0434\u0435\u045b\u0435 \u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0435 \u043c\u043e\u0433\u0443 \u0431\u0438\u0442\u0438 \u043a\u043e\u0440\u0438\u0441\u043d\u0435, \u0458\u0435\u0440 \u0441\u0443 \u043d\u0430 \u043d\u0435\u043a\u0438 \u043d\u0430\u0447\u0438\u043d \u043f\u043e\u0432\u0435\u0437\u0430\u043d\u0435 \u0441\u0430 \u043e\u0432\u043e\u043c \u043f\u043e\u0432\u0440\u0430\u0442\u043d\u043e\u043c \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u043e\u043c."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"OnPlayerObjectMoved",children:"OnPlayerObjectMoved"}),": \u041e\u0432\u0430 \u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0430 \u0441\u0435 \u043f\u043e\u0437\u0438\u0432\u0430 \u043a\u0430\u0434\u0430 \u043e\u0431\u0458\u0435\u043a\u0430\u0442 \u0438\u0433\u0440\u0430\u0447\u0430 \u043f\u0440\u0435\u0441\u0442\u0430\u043d\u0435 \u0434\u0430 \u0441\u0435 \u043a\u0440\u0435\u045b\u0435."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u043f\u043e\u0432\u0435\u0437\u0430\u043d\u0435-\u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0435",children:"\u041f\u043e\u0432\u0435\u0437\u0430\u043d\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0435"}),"\n",(0,i.jsx)(n.p,{children:"\u0421\u043b\u0435\u0434\u0435\u045b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0435 \u043c\u043e\u0433\u0443 \u0431\u0438\u0442\u0438 \u043a\u043e\u0440\u0438\u0441\u043d\u0435, \u0458\u0435\u0440 \u0441\u0443 \u043d\u0430 \u043d\u0435\u043a\u0438 \u043d\u0430\u0447\u0438\u043d \u043f\u043e\u0432\u0435\u0437\u0430\u043d\u0435 \u0441\u0430 \u043e\u0432\u043e\u043c \u043f\u043e\u0432\u0440\u0430\u0442\u043d\u043e\u043c \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u043e\u043c."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../functions/MoveObject",children:"MoveObject"}),": \u041f\u043e\u043c\u0435\u0440\u0438\u0442\u0435 \u043e\u0431\u0458\u0435\u043a\u0430\u0442."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../functions/MovePlayerObject",children:"MovePlayerObject"}),": \u041f\u043e\u043c\u0435\u0440\u0438\u0442\u0435 \u043e\u0431\u0458\u0435\u043a\u0430\u0442 \u0438\u0433\u0440\u0430\u0447\u0430."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../functions/IsObjectMoving",children:"IsObjectMoving"}),": \u041f\u0440\u043e\u0432\u0435\u0440\u0430\u0432\u0430 \u0434\u0430 \u043b\u0438 \u0441\u0435 \u043e\u0431\u0458\u0435\u043a\u0430\u0442 \u043a\u0440\u0435\u045b\u0435."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"../functions/StopObject",children:"StopObject"}),": \u041f\u0440\u0435\u0441\u0442\u0430\u043d\u0438\u0442\u0435 \u0434\u0430 \u0441\u0435 \u043e\u0431\u0458\u0435\u043a\u0430\u0442 \u043a\u0440\u0435\u045b\u0435."]}),"\n"]})]})}function j(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}}}]);