"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[27159],{28453:(e,n,a)=>{a.d(n,{R:()=>d,x:()=>l});var t=a(96540);const r={},i=t.createContext(r);function d(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(i.Provider,{value:n},e.children)}},38520:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"scripting/callbacks/OnPlayerCommandText","title":"OnPlayerCommandText","description":"\u0627\u06cc\u0646 \u06a9\u0627\u0644\u0628\u06a9 \u0632\u0645\u0627\u0646\u06cc \u0641\u0631\u0627 \u062e\u0648\u0627\u0646\u062f\u0647 \u0645\u06cc \u0634\u0648\u062f \u06a9\u0647 \u06cc\u06a9 \u0628\u0627\u0632\u06cc\u06a9\u0646 \u06cc\u06a9 \u062f\u0633\u062a\u0648\u0631 \u0631\u0627 \u062f\u0631 \u067e\u0646\u062c\u0631\u0647 \u06a9\u0644\u0627\u06cc\u0646\u062a \u0648\u0627\u0631\u062f \u06a9\u0646\u062f.","source":"@site/i18n/fa/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerCommandText.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerCommandText","permalink":"/fa/docs/scripting/callbacks/OnPlayerCommandText","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnPlayerCommandText.md","tags":[{"inline":true,"label":"player","permalink":"/fa/docs/tags/player"}],"version":"current","frontMatter":{"title":"OnPlayerCommandText","sidebar_label":"OnPlayerCommandText","description":"\u0627\u06cc\u0646 \u06a9\u0627\u0644\u0628\u06a9 \u0632\u0645\u0627\u0646\u06cc \u0641\u0631\u0627 \u062e\u0648\u0627\u0646\u062f\u0647 \u0645\u06cc \u0634\u0648\u062f \u06a9\u0647 \u06cc\u06a9 \u0628\u0627\u0632\u06cc\u06a9\u0646 \u06cc\u06a9 \u062f\u0633\u062a\u0648\u0631 \u0631\u0627 \u062f\u0631 \u067e\u0646\u062c\u0631\u0647 \u06a9\u0644\u0627\u06cc\u0646\u062a \u0648\u0627\u0631\u062f \u06a9\u0646\u062f.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerClickTextDraw","permalink":"/fa/docs/scripting/callbacks/OnPlayerClickTextDraw"},"next":{"title":"OnPlayerConnect","permalink":"/fa/docs/scripting/callbacks/OnPlayerConnect"}}');var r=a(74848),i=a(28453);const d={title:"OnPlayerCommandText",sidebar_label:"OnPlayerCommandText",description:"\u0627\u06cc\u0646 \u06a9\u0627\u0644\u0628\u06a9 \u0632\u0645\u0627\u0646\u06cc \u0641\u0631\u0627 \u062e\u0648\u0627\u0646\u062f\u0647 \u0645\u06cc \u0634\u0648\u062f \u06a9\u0647 \u06cc\u06a9 \u0628\u0627\u0632\u06cc\u06a9\u0646 \u06cc\u06a9 \u062f\u0633\u062a\u0648\u0631 \u0631\u0627 \u062f\u0631 \u067e\u0646\u062c\u0631\u0647 \u06a9\u0644\u0627\u06cc\u0646\u062a \u0648\u0627\u0631\u062f \u06a9\u0646\u062f.",tags:["player"]},l=void 0,s={},c=[{value:"\u062a\u0648\u0636\u06cc\u062d\u0627\u062a",id:"\u062a\u0648\u0636\u06cc\u062d\u0627\u062a",level:2},{value:"\u0645\u0642\u0627\u062f\u06cc\u0631 \u0628\u0631\u06af\u0634\u062a\u06cc",id:"\u0645\u0642\u0627\u062f\u06cc\u0631-\u0628\u0631\u06af\u0634\u062a\u06cc",level:2},{value:"\u0645\u062b\u0627\u0644 \u0647\u0627",id:"\u0645\u062b\u0627\u0644-\u0647\u0627",level:2},{value:"\u0646\u06a9\u062a\u0647 \u0647\u0627",id:"\u0646\u06a9\u062a\u0647-\u0647\u0627",level:2},{value:"\u062a\u0627\u0628\u0639 \u0647\u0627\u06cc \u0645\u0631\u062a\u0628\u0637",id:"\u062a\u0627\u0628\u0639-\u0647\u0627\u06cc-\u0645\u0631\u062a\u0628\u0637",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{dir:"rtl",style:{textAlign:"right"},children:[(0,r.jsx)(n.h2,{id:"\u062a\u0648\u0636\u06cc\u062d\u0627\u062a",children:"\u062a\u0648\u0636\u06cc\u062d\u0627\u062a"}),(0,r.jsx)(n.p,{children:"\u0627\u06cc\u0646 \u06a9\u0627\u0644\u0628\u06a9 \u0632\u0645\u0627\u0646\u06cc \u0641\u0631\u0627 \u062e\u0648\u0627\u0646\u062f\u0647 \u0645\u06cc \u0634\u0648\u062f \u06a9\u0647 \u06cc\u06a9 \u0628\u0627\u0632\u06cc\u06a9\u0646 \u06cc\u06a9 \u062f\u0633\u062a\u0648\u0631 \u0631\u0627 \u062f\u0631 \u067e\u0646\u062c\u0631\u0647 \u06a9\u0644\u0627\u06cc\u0646\u062a \u0648\u0627\u0631\u062f \u06a9\u0646\u062f. \u062f\u0633\u062a\u0648\u0631\u0627\u062a \u0686\u06cc\u0632 \u0647\u0627\u06cc\u06cc \u0647\u0633\u062a\u0646\u062f \u06a9\u0647 \u0628\u0627 \u0627\u0633\u0644\u0634 \u0634\u0631\u0648\u0639 \u0645\u06cc \u0634\u0648\u0646\u062f\u060c \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0645\u062b\u0627\u0644 help/."}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u0627\u0633\u0645"}),(0,r.jsx)(n.th,{children:"\u062a\u0648\u0636\u06cc\u062d"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"playerid"}),(0,r.jsx)(n.td,{children:"\u0634\u0646\u0627\u0633\u0647 \u0628\u0627\u0632\u06cc\u06a9\u0646\u06cc \u06a9\u0647 \u062f\u0633\u062a\u0648\u0631 \u0631\u0627 \u0648\u0627\u0631\u062f \u0645\u06cc\u06a9\u0646\u062f."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"cmdtext[]"}),(0,r.jsx)(n.td,{children:"\u062f\u0633\u062a\u0648\u0631 \u0648\u0627\u0631\u062f \u0634\u062f\u0647 (\u0627\u0632 \u062c\u0645\u0644\u0647 \u0627\u0633\u0644\u0634)."})]})]})]}),(0,r.jsx)(n.h2,{id:"\u0645\u0642\u0627\u062f\u06cc\u0631-\u0628\u0631\u06af\u0634\u062a\u06cc",children:"\u0645\u0642\u0627\u062f\u06cc\u0631 \u0628\u0631\u06af\u0634\u062a\u06cc"}),(0,r.jsx)(n.p,{children:"\u0627\u06cc\u0646 \u0647\u0645\u06cc\u0634\u0647 \u0627\u0628\u062a\u062f\u0627 \u062f\u0631 \u0641\u06cc\u0644\u062a\u0631 \u0627\u0633\u06a9\u0631\u06cc\u067e\u062a \u0647\u0627 \u0641\u0631\u0627 \u062e\u0648\u0627\u0646\u062f\u0647 \u0645\u06cc \u0634\u0648\u062f \u0628\u0646\u0627\u0628\u0631\u0627\u06cc\u0646 \u0628\u0631\u06af\u062f\u0627\u0646\u062f\u0646 1 \u062c\u0644\u0648\u06cc \u062f\u06cc\u062f\u0646 \u0627\u0633\u06a9\u0631\u06cc\u067e\u062a \u0647\u0627\u06cc \u062f\u06cc\u06af\u0631 \u0631\u0627 \u0645\u06cc\u06af\u06cc\u0631\u062f."}),(0,r.jsx)(n.h2,{id:"\u0645\u062b\u0627\u0644-\u0647\u0627",children:"\u0645\u062b\u0627\u0644 \u0647\u0627"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext, "/help", true))\n    {\n        SendClientMessage(playerid, -1, "SERVER: In dastoore /help ast");\n        return 1;\n        // Bargardandan 1 be server etela midahad ke dastoor pardazesh shode.\n        // OnPlayerCommandText dar script haye digar farakhani nemishavad.\n    }\n    return 0;\n    // Bargardandane 0 be server etela midahad ke dastoor tavasote in script pardazesh nashode.\n    // OnPlayerCommandText dar script haye digar farakhani mishavad ta zamani ke 1 ra bargaranad.\n    // Agar hich scripti 1 ra barnagardanad, payame \'SERVER: Unknown Command\' baraye bazikon namayesh dade mishavad.\n}\n'})}),"\n",(0,r.jsxs)("div",{dir:"rtl",style:{textAlign:"right"},children:[(0,r.jsx)(n.h2,{id:"\u0646\u06a9\u062a\u0647-\u0647\u0627",children:"\u0646\u06a9\u062a\u0647 \u0647\u0627"}),(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"\u0627\u06cc\u0646 \u06a9\u0627\u0644\u0628\u06a9 \u062a\u0648\u0633\u0637 NPC \u0646\u06cc\u0632 \u0642\u0627\u0628\u0644 \u0641\u0631\u0627 \u062e\u0648\u0627\u0646\u06cc \u0627\u0633\u062a."})}),(0,r.jsx)(n.h2,{id:"\u062a\u0627\u0628\u0639-\u0647\u0627\u06cc-\u0645\u0631\u062a\u0628\u0637",children:"\u062a\u0627\u0628\u0639 \u0647\u0627\u06cc \u0645\u0631\u062a\u0628\u0637"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../functions/SendRconCommand.md",children:"SendRconCommand"}),": \u06cc\u06a9  \u062f\u0633\u062a\u0648\u0631 RCON \u0631\u0627 \u0627\u0632 \u0637\u0631\u06cc\u0642 \u0627\u0633\u06a9\u0631\u06cc\u067e\u062a \u0627\u0631\u0633\u0627\u0644 \u0645\u06cc\u06a9\u0646\u062f."]}),"\n"]})]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}}}]);