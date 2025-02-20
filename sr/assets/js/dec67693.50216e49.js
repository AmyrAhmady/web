"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[90394],{28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>c});var t=i(96540);const r={},s=t.createContext(r);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(s.Provider,{value:n},e.children)}},34535:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>x,frontMatter:()=>l,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"scripting/callbacks/OnGameModeExit","title":"OnGameModeExit","description":"\u041e\u0432\u0430 \u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0430 \u0441\u0435 \u043f\u043e\u0437\u0438\u0432\u0430 \u043a\u0430\u0434\u0430 \u0441\u0435 \u0433\u0430\u043c\u0435\u043c\u043e\u0434\u0435 \u0437\u0430\u0432\u0440\u0448\u0438, \u0431\u0438\u043b\u043e \u0434\u0430 \u0458\u0435 \u0442\u043e \u043f\u0440\u0435\u043a\u043e gmx, \u0437\u0430\u0442\u0432\u0430\u0440\u0430\u045a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0438\u043b\u0438 GameModeExit.","source":"@site/i18n/sr/docusaurus-plugin-content-docs/current/scripting/callbacks/OnGameModeExit.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnGameModeExit","permalink":"/sr/docs/scripting/callbacks/OnGameModeExit","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnGameModeExit.md","tags":[],"version":"current","frontMatter":{"title":"OnGameModeExit","sidebar_label":"OnGameModeExit","description":"\u041e\u0432\u0430 \u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0430 \u0441\u0435 \u043f\u043e\u0437\u0438\u0432\u0430 \u043a\u0430\u0434\u0430 \u0441\u0435 \u0433\u0430\u043c\u0435\u043c\u043e\u0434\u0435 \u0437\u0430\u0432\u0440\u0448\u0438, \u0431\u0438\u043b\u043e \u0434\u0430 \u0458\u0435 \u0442\u043e \u043f\u0440\u0435\u043a\u043e gmx, \u0437\u0430\u0442\u0432\u0430\u0440\u0430\u045a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0438\u043b\u0438 GameModeExit.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"OnFilterScriptInit","permalink":"/sr/docs/scripting/callbacks/OnFilterScriptInit"},"next":{"title":"OnGameModeInit","permalink":"/sr/docs/scripting/callbacks/OnGameModeInit"}}');var r=i(74848),s=i(28453);const l={title:"OnGameModeExit",sidebar_label:"OnGameModeExit",description:"\u041e\u0432\u0430 \u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0430 \u0441\u0435 \u043f\u043e\u0437\u0438\u0432\u0430 \u043a\u0430\u0434\u0430 \u0441\u0435 \u0433\u0430\u043c\u0435\u043c\u043e\u0434\u0435 \u0437\u0430\u0432\u0440\u0448\u0438, \u0431\u0438\u043b\u043e \u0434\u0430 \u0458\u0435 \u0442\u043e \u043f\u0440\u0435\u043a\u043e gmx, \u0437\u0430\u0442\u0432\u0430\u0440\u0430\u045a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0438\u043b\u0438 GameModeExit.",tags:[]},c=void 0,d={},a=[{value:"\u041e\u043f\u0438\u0441",id:"\u043e\u043f\u0438\u0441",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u0438",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u0438",level:2},{value:"\u0411\u0435\u043b\u0435\u0448\u043a\u0435",id:"\u0431\u0435\u043b\u0435\u0448\u043a\u0435",level:2},{value:"\u041f\u043e\u0432\u0435\u0437\u0430\u043d\u0435 \u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0435",id:"\u043f\u043e\u0432\u0435\u0437\u0430\u043d\u0435-\u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0435-\u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0435",level:2},{value:"\u041f\u043e\u0432\u0435\u0437\u0430\u043d\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0435",id:"\u043f\u043e\u0432\u0435\u0437\u0430\u043d\u0435-\u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0435",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u043e\u043f\u0438\u0441",children:"\u041e\u043f\u0438\u0441"}),"\n",(0,r.jsxs)(n.p,{children:["\u041e\u0432\u0430 \u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0430 \u0441\u0435 \u043f\u043e\u0437\u0438\u0432\u0430 \u043a\u0430\u0434\u0430 \u0441\u0435 \u0433\u0430\u043c\u0435\u043c\u043e\u0434 \u0437\u0430\u0432\u0440\u0448\u0438, \u0431\u0438\u043b\u043e \u0434\u0430 \u0458\u0435 \u0442\u043e \u043f\u0440\u0435\u043a\u043e ",(0,r.jsx)(n.code,{children:"gmx"}),", \u0437\u0430\u0442\u0432\u0430\u0440\u0430\u045a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0438\u043b\u0438 ",(0,r.jsx)(n.code,{children:"GameModeExit"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u0438",children:"\u041f\u0440\u0438\u043c\u0435\u0440\u0438"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'public OnGameModeExit()\n{\n    print("Gamemode ended.");\n    return 1;\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u0431\u0435\u043b\u0435\u0448\u043a\u0435",children:"\u0411\u0435\u043b\u0435\u0448\u043a\u0435"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"\u041e\u0432\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0430 \u0441\u0435 \u0442\u0430\u043a\u043e\u0452\u0435 \u043c\u043e\u0436\u0435 \u043a\u043e\u0440\u0438\u0441\u0442\u0438\u0442\u0438 \u0443 \u0444\u0438\u043b\u0442\u0435\u0440 \u0441\u043a\u0440\u0438\u043f\u0442i \u0434\u0430 \u0434\u0435\u0442\u0435\u043a\u0442\u0443\u0458\u0435 \u0430\u043a\u043e \u0441\u0435 \u0433\u0430\u043c\u0435\u043c\u043e\u0434 \u043f\u0440\u043e\u043c\u0435\u043d\u0438 \u043f\u043e\u043c\u043e\u045b\u0443 RCON \u043a\u043e\u043c\u0430\u043d\u0434\u0438 \u043a\u0430\u043e \u0448\u0442\u043e \u0441\u0443 changemode \u0438\u043b\u0438 gmx, \u0458\u0435\u0440 \u043f\u0440\u043e\u043c\u0435\u043d\u0430 \u0433\u0430\u043c\u0435\u043c\u043e\u0434\u0430 \u043d\u0435 \u0443\u0447\u0438\u0442\u0430\u0432\u0430 \u0444\u0438\u043b\u0442\u0435\u0440 \u0441\u043a\u0440\u0438\u043f\u0442\u0435 \u043f\u043e\u043d\u043e\u0432\u043e."})}),"\n",(0,r.jsxs)(n.admonition,{type:"warning",children:[(0,r.jsx)(n.p,{children:"\u041a\u0430\u0434\u0430 \u043a\u043e\u0440\u0438\u0441\u0442\u0438\u0442\u0435 OnGameModeExit \u0443 \u043a\u043e\u043c\u0431\u0438\u043d\u0430\u0446\u0438\u0458\u0438 \u0441\u0430 'rcon gmx' \u043a\u043e\u043c\u0430\u043d\u0434\u043e\u043c \u0443 \u043a\u043e\u043d\u0437\u043e\u043b\u0438, \u0438\u043c\u0430\u0458\u0442\u0435 \u043d\u0430 \u0443\u043c\u0443 \u0434\u0430 \u043c\u043e\u0436\u0435 \u0434\u043e\u045b\u0438 \u0434\u043e \u043f\u043e\u0442\u0435\u043d\u0446\u0438\u0458\u0430\u043b\u043d\u0438\u0445 \u0433\u0440\u0435\u0448\u0430\u043a\u0430 \u043d\u0430 \u043a\u043b\u0438\u0458\u0435\u043d\u0442\u0443."}),(0,r.jsxs)(n.p,{children:["\u041f\u0440\u0438\u043c\u0435\u0440 \u043e\u0432\u043e\u0433\u0430 \u0458\u0435 \u043f\u0440\u0435\u043a\u043e\u043c\u0435\u0440\u043d\u043e \u043a\u043e\u0440\u0438\u0448\u045b\u0435\u045a\u0435 ",(0,r.jsx)(n.a,{href:"RemoveBuildingForPlayer",children:"RemoveBuildingForPlayer"})," \u0442\u043e\u043a\u043e\u043c ",(0,r.jsx)(n.a,{href:"OnGameModeInit",children:"OnGameModeInit"}),", \u0448\u0442\u043e \u043c\u043e\u0436\u0435 \u0434\u043e\u0432\u0435\u0441\u0442\u0438 \u0434\u043e \u043f\u0430\u0434\u0430 \u043a\u043b\u0438\u0458\u0435\u043d\u0442\u0430. \u041e\u0432\u0430 \u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0430 \u041d\u0415\u040b\u0415 \u0431\u0438\u0442\u0438 \u043f\u043e\u0437\u0432\u0430\u043d\u0430 \u0430\u043a\u043e \u0441\u0435\u0440\u0432\u0435\u0440 \u043f\u0430\u0434\u043d\u0435 \u0438\u043b\u0438 \u043f\u0440\u043e\u0446\u0435\u0441 \u0431\u0443\u0434\u0435 \u0443\u0431\u0438\u0458\u0435\u043d \u043d\u0430 \u0434\u0440\u0443\u0433\u0435 \u043d\u0430\u0447\u0438\u043d\u0435, \u043a\u0430\u043e \u0448\u0442\u043e \u0458\u0435 \u043a\u043e\u0440\u0438\u0448\u045b\u0435\u045a\u0435 Linux kill \u043a\u043e\u043c\u0430\u043d\u0434\u0435 \u0438\u043b\u0438 \u043f\u0440\u0438\u0442\u0438\u0441\u043a\u0430\u045a\u0435 \u0434\u0443\u0433\u043c\u0435\u0442\u0430 \u0437\u0430 \u0437\u0430\u0442\u0432\u0430\u0440\u0430\u045a\u0435 \u043d\u0430 Windows \u043a\u043e\u043d\u0437\u043e\u043b\u0438."]})]}),"\n",(0,r.jsx)(n.h2,{id:"\u043f\u043e\u0432\u0435\u0437\u0430\u043d\u0435-\u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0435-\u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0435",children:"\u041f\u043e\u0432\u0435\u0437\u0430\u043d\u0435 \u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0435"}),"\n",(0,r.jsx)(n.p,{children:"\u0421\u043b\u0435\u0434\u0435\u045b\u0435 \u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0435 \u043c\u043e\u0433\u0443 \u0431\u0438\u0442\u0438 \u043a\u043e\u0440\u0438\u0441\u043d\u0435, \u0458\u0435\u0440 \u0441\u0443 \u043d\u0430 \u043d\u0435\u043a\u0438 \u043d\u0430\u0447\u0438\u043d \u043f\u043e\u0432\u0435\u0437\u0430\u043d\u0435 \u0441\u0430 \u043e\u0432\u043e\u043c \u043f\u043e\u0432\u0440\u0430\u0442\u043d\u043e\u043c \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u043e\u043c."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"OnGameModeInit",children:"OnGameModeInit"}),": \u041e\u0432\u0430 \u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0430 \u0441\u0435 \u043f\u043e\u0437\u0438\u0432\u0430 \u043a\u0430\u0434\u0430 \u0441\u0435 \u0433\u0430\u043c\u0435\u043c\u043e\u0434 \u043f\u043e\u043a\u0440\u0435\u043d\u0435."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"OnFilterScriptInit",children:"OnFilterScriptInit"}),": \u041e\u0432\u0430 \u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0430 \u0441\u0435 \u043f\u043e\u0437\u0438\u0432\u0430 \u043a\u0430\u0434\u0430 \u0441\u0435 \u0444\u0438\u043b\u0442\u0435\u0440 \u0441\u043a\u0440\u0438\u043f\u0442\u0430 \u0443\u0447\u0438\u0442\u0430."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"OnFilterScriptExit",children:"OnFilterSciptExit"}),": \u041e\u0432\u0430 \u043f\u043e\u0432\u0440\u0430\u0442\u043d\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0430 \u0441\u0435 \u043f\u043e\u0437\u0438\u0432\u0430 \u043a\u0430\u0434\u0430 \u0441\u0435 \u0444\u0438\u043b\u0442\u0435\u0440 \u0441\u043a\u0440\u0438\u043f\u0442\u0430 \u0438\u0441\u043a\u0459\u0443\u0447\u0438."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u043f\u043e\u0432\u0435\u0437\u0430\u043d\u0435-\u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0435",children:"\u041f\u043e\u0432\u0435\u0437\u0430\u043d\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0435"}),"\n",(0,r.jsx)(n.p,{children:"\u0421\u043b\u0435\u0434\u0435\u045b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u0435 \u043c\u043e\u0433\u0443 \u0431\u0438\u0442\u0438 \u043a\u043e\u0440\u0438\u0441\u043d\u0435, \u0458\u0435\u0440 \u0441\u0443 \u043d\u0430 \u043d\u0435\u043a\u0438 \u043d\u0430\u0447\u0438\u043d \u043f\u043e\u0432\u0435\u0437\u0430\u043d\u0435 \u0441\u0430 \u043e\u0432\u043e\u043c \u043f\u043e\u0432\u0440\u0430\u0442\u043d\u043e\u043c \u0444\u0443\u043d\u043a\u0446\u0438\u0458\u043e\u043c."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../functions/GameModeExit",children:"GameModeExit"}),": \u041d\u0430\u043f\u0443\u0448\u0442\u0430 \u0442\u0440\u0435\u043d\u0443\u0442\u043d\u0438 \u0433\u0430\u043c\u0435\u043c\u043e\u0434\u0435."]}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}}}]);