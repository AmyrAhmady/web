"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[3358],{28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var i=t(96540);const c={},r=i.createContext(c);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),i.createElement(r.Provider,{value:n},e.children)}},34440:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"scripting/callbacks/OnNPCEnterVehicle","title":"OnNPCEnterVehicle","description":"\u041e\u0432\u0430 \u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0430 \u0441\u0435 \u043f\u043e\u0437\u0438\u0432\u0430 \u043a\u0430\u0434\u0430 NPC \u0443\u0452\u0435 \u0443 \u0432\u043e\u0437\u0438\u043b\u043e.","source":"@site/i18n/sr/docusaurus-plugin-content-docs/current/scripting/callbacks/OnNPCEnterVehicle.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnNPCEnterVehicle","permalink":"/sr/docs/scripting/callbacks/OnNPCEnterVehicle","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnNPCEnterVehicle.md","tags":[{"inline":true,"label":"npc","permalink":"/sr/docs/tags/npc"}],"version":"current","frontMatter":{"title":"OnNPCEnterVehicle","sidebar_label":"OnNPCEnterVehicle","description":"\u041e\u0432\u0430 \u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0430 \u0441\u0435 \u043f\u043e\u0437\u0438\u0432\u0430 \u043a\u0430\u0434\u0430 NPC \u0443\u0452\u0435 \u0443 \u0432\u043e\u0437\u0438\u043b\u043e.","tags":["npc"]},"sidebar":"docsSidebar","previous":{"title":"OnNPCDisconnect","permalink":"/sr/docs/scripting/callbacks/OnNPCDisconnect"},"next":{"title":"OnNPCExitVehicle","permalink":"/sr/docs/scripting/callbacks/OnNPCExitVehicle"}}');var c=t(74848),r=t(28453);const s={title:"OnNPCEnterVehicle",sidebar_label:"OnNPCEnterVehicle",description:"\u041e\u0432\u0430 \u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0430 \u0441\u0435 \u043f\u043e\u0437\u0438\u0432\u0430 \u043a\u0430\u0434\u0430 NPC \u0443\u0452\u0435 \u0443 \u0432\u043e\u0437\u0438\u043b\u043e.",tags:["npc"]},l=void 0,d={},a=[{value:"\u041e\u043f\u0438\u0441",id:"\u043e\u043f\u0438\u0441",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u0438",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u0438",level:2},{value:"\u041f\u043e\u0432\u0435\u0437\u0430\u043d\u0435 \u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0435",id:"\u043f\u043e\u0432\u0435\u0437\u0430\u043d\u0435-\u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0435-\u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0435",level:2}];function o(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h2,{id:"\u043e\u043f\u0438\u0441",children:"\u041e\u043f\u0438\u0441"}),"\n",(0,c.jsx)(n.p,{children:"\u041e\u0432\u0430 \u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0430 \u0441\u0435 \u043f\u043e\u0437\u0438\u0432\u0430 \u043a\u0430\u0434\u0430 NPC \u0443\u0452\u0435 \u0443 \u0432\u043e\u0437\u0438\u043b\u043e."}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Name"}),(0,c.jsx)(n.th,{children:"Description"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"vehicleid"}),(0,c.jsx)(n.td,{children:"ID \u0432\u043e\u0437\u0438\u043b\u0430 \u0443 \u043a\u043e\u0458\u0435 \u0458\u0435 NPC \u0443\u0448\u0430\u043e."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"seatid"}),(0,c.jsx)(n.td,{children:"ID \u0441\u0435\u0434\u0438\u0448\u0442\u0430 \u043a\u043e\u0458\u0435 NPC \u043a\u043e\u0440\u0438\u0441\u0442\u0438."})]})]})]}),"\n",(0,c.jsx)(n.h2,{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u0438",children:"\u041f\u0440\u0438\u043c\u0435\u0440\u0438"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-c",children:'public OnNPCEnterVehicle(vehicleid, seatid)\n{\n    printf("OnNPCEnterVehicle ID: %d Seat: %d", vehicleid, seatid);\n    return 1;\n}\n'})}),"\n",(0,c.jsx)(n.h2,{id:"\u043f\u043e\u0432\u0435\u0437\u0430\u043d\u0435-\u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0435-\u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0435",children:"\u041f\u043e\u0432\u0435\u0437\u0430\u043d\u0435 \u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0435"}),"\n",(0,c.jsx)(n.p,{children:"\u0421\u043b\u0435\u0434\u0435\u045b\u0435 \u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0435 \u043c\u043e\u0433\u0443 \u0431\u0438\u0442\u0438 \u043a\u043e\u0440\u0438\u0441\u043d\u0435, \u0458\u0435\u0440 \u0441\u0443 \u043d\u0430 \u043d\u0435\u043a\u0438 \u043d\u0430\u0447\u0438\u043d \u043f\u043e\u0432\u0435\u0437\u0430\u043d\u0435 \u0441\u0430 \u043e\u0432\u043e\u043c \u043f\u043e\u0432\u0440\u0430\u0442\u043d\u043e\u043c \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u043e\u043c."}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"OnNPCExitVehicle",children:"OnNPCExitVehicle"}),": \u041e\u0432\u0430 \u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0430 \u0441\u0435 \u043f\u043e\u0437\u0438\u0432\u0430 \u043a\u0430\u0434\u0430 NPC \u043d\u0430\u043f\u0443\u0441\u0442\u0438 \u0432\u043e\u0437\u0438\u043b\u043e."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}}}]);