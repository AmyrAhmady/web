"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[29180],{28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var r=n(96540);const c={},s=r.createContext(c);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),r.createElement(s.Provider,{value:t},e.children)}},35053:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"scripting/callbacks/OnActorStreamIn","title":"OnActorStreamIn","description":"\u042d\u0442\u043e\u0442 \u043a\u043e\u043b\u043b\u0431\u044d\u043a \u0432\u044b\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f, \u043a\u043e\u0433\u0434\u0430 \u0430\u043a\u0442\u0451\u0440 \u043f\u043e\u043f\u0430\u0434\u0430\u0435\u0442 \u0432 \u0437\u043e\u043d\u0443 \u0441\u0442\u0440\u0438\u043c\u0430 \u043a\u043b\u0438\u0435\u043d\u0442\u0430.","source":"@site/i18n/ru/docusaurus-plugin-content-docs/current/scripting/callbacks/OnActorStreamIn.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnActorStreamIn","permalink":"/ru/docs/scripting/callbacks/OnActorStreamIn","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnActorStreamIn.md","tags":[],"version":"current","frontMatter":{"title":"OnActorStreamIn","sidebar_label":"OnActorStreamIn","description":"\u042d\u0442\u043e\u0442 \u043a\u043e\u043b\u043b\u0431\u044d\u043a \u0432\u044b\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f, \u043a\u043e\u0433\u0434\u0430 \u0430\u043a\u0442\u0451\u0440 \u043f\u043e\u043f\u0430\u0434\u0430\u0435\u0442 \u0432 \u0437\u043e\u043d\u0443 \u0441\u0442\u0440\u0438\u043c\u0430 \u043a\u043b\u0438\u0435\u043d\u0442\u0430.","tags":[]},"sidebar":"docsSidebar","next":{"title":"OnActorStreamOut","permalink":"/ru/docs/scripting/callbacks/OnActorStreamOut"}}');var c=n(74848),s=n(28453);const i={title:"OnActorStreamIn",sidebar_label:"OnActorStreamIn",description:"\u042d\u0442\u043e\u0442 \u043a\u043e\u043b\u043b\u0431\u044d\u043a \u0432\u044b\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f, \u043a\u043e\u0433\u0434\u0430 \u0430\u043a\u0442\u0451\u0440 \u043f\u043e\u043f\u0430\u0434\u0430\u0435\u0442 \u0432 \u0437\u043e\u043d\u0443 \u0441\u0442\u0440\u0438\u043c\u0430 \u043a\u043b\u0438\u0435\u043d\u0442\u0430.",tags:[]},o=void 0,l={},a=[{value:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",id:"\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",level:2},{value:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442",id:"\u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440",id:"\u043f\u0440\u0438\u043c\u0435\u0440",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0447\u0430\u043d\u0438\u044f",id:"\u043f\u0440\u0438\u043c\u0435\u0447\u0430\u043d\u0438\u044f",level:2},{value:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438",id:"\u0444\u0443\u043d\u043a\u0446\u0438\u0438",level:2}];function d(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components},{TipNPCCallbacks:n,VersionWarn:r}=t;return n||u("TipNPCCallbacks",!0),r||u("VersionWarn",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{name:"callback",version:"SA-MP 0.3.7"}),"\n",(0,c.jsx)(t.h2,{id:"\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),"\n",(0,c.jsx)(t.p,{children:"\u042d\u0442\u043e\u0442 \u043a\u043e\u043b\u043b\u0431\u044d\u043a \u0432\u044b\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f, \u043a\u043e\u0433\u0434\u0430 \u0430\u043a\u0442\u0451\u0440 \u043f\u043e\u043f\u0430\u0434\u0430\u0435\u0442 \u0432 \u0437\u043e\u043d\u0443 \u0441\u0442\u0440\u0438\u043c\u0430 \u043a\u043b\u0438\u0435\u043d\u0442\u0430."}),"\n",(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442"}),(0,c.jsx)(t.th,{children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"actorid"}),(0,c.jsx)(t.td,{children:"ID \u0430\u043a\u0442\u0451\u0440\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u043f\u0430\u043b \u0432 \u0437\u043e\u043d\u0443 \u0441\u0442\u0440\u0438\u043c\u0430 \u043a\u043b\u0438\u0435\u043d\u0442\u0430."})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"forplayerid"}),(0,c.jsx)(t.td,{children:"\u041a\u043b\u0438\u0435\u043d\u0442, \u0432 \u0447\u044c\u044e \u0437\u043e\u043d\u0443 \u0441\u0442\u0440\u0438\u043c\u0430 \u043f\u043e\u043f\u0430\u043b \u0430\u043a\u0442\u0451\u0440."})]})]})]}),"\n",(0,c.jsx)(t.h2,{id:"\u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442",children:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442"}),"\n",(0,c.jsx)(t.p,{children:"\u0414\u0430\u043d\u043d\u044b\u0439 \u043a\u043e\u043b\u043b\u0431\u044d\u043a \u0432\u0441\u0435\u0433\u0434\u0430 \u0432\u044b\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0432 filterscript'\u0430\u0445 \u043f\u0435\u0440\u0432\u0435\u0435."}),"\n",(0,c.jsx)(t.h2,{id:"\u043f\u0440\u0438\u043c\u0435\u0440",children:"\u041f\u0440\u0438\u043c\u0435\u0440"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-c",children:'public OnActorStreamIn(actorid, forplayerid)\n{\n    new string[40];\n    format(string, sizeof(string), "\u0410\u043a\u0442\u0451\u0440 %d \u043f\u043e\u043f\u0430\u043b \u0432 \u0432\u0430\u0448\u0443 \u0437\u043e\u043d\u0443 \u0441\u0442\u0440\u0438\u043c\u0430.", actorid);\n    SendClientMessage(forplayerid, 0xFFFFFFFF, string);\n    return 1;\n}\n'})}),"\n",(0,c.jsx)(t.h2,{id:"\u043f\u0440\u0438\u043c\u0435\u0447\u0430\u043d\u0438\u044f",children:"\u041f\u0440\u0438\u043c\u0435\u0447\u0430\u043d\u0438\u044f"}),"\n",(0,c.jsx)(n,{}),"\n",(0,c.jsx)(t.h2,{id:"\u0444\u0443\u043d\u043a\u0446\u0438\u0438",children:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438"})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}function u(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);