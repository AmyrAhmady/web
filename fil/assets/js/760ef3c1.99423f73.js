"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[35984],{28453:(a,n,e)=>{e.d(n,{R:()=>i,x:()=>c});var t=e(96540);const r={},s=t.createContext(r);function i(a){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof a?a(n):{...n,...a}}),[n,a])}function c(a){let n;return n=a.disableParentContext?"function"==typeof a.components?a.components(r):a.components||r:i(a.components),t.createElement(s.Provider,{value:n},a.children)}},82122:(a,n,e)=>{e.r(n),e.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"scripting/callbacks/OnActorStreamIn","title":"OnActorStreamIn","description":"This callback is called when an actor is streamed in by a player\'s client.","source":"@site/i18n/fil/docusaurus-plugin-content-docs/current/scripting/callbacks/OnActorStreamIn.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnActorStreamIn","permalink":"/fil/docs/scripting/callbacks/OnActorStreamIn","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnActorStreamIn.md","tags":[],"version":"current","frontMatter":{"title":"OnActorStreamIn","sidebar_label":"OnActorStreamIn","description":"This callback is called when an actor is streamed in by a player\'s client.","tags":[]},"sidebar":"docsSidebar","previous":{"title":"Introduction","permalink":"/fil/docs/"},"next":{"title":"OnActorStreamOut","permalink":"/fil/docs/scripting/callbacks/OnActorStreamOut"}}');var r=e(74848),s=e(28453);const i={title:"OnActorStreamIn",sidebar_label:"OnActorStreamIn",description:"This callback is called when an actor is streamed in by a player's client.",tags:[]},c=void 0,l={},o=[{value:"Deskripsyon",id:"deskripsyon",level:2},{value:"Returns",id:"returns",level:2},{value:"Mga Halimbawa",id:"mga-halimbawa",level:2},{value:"Mga Dapat Unawain",id:"mga-dapat-unawain",level:2},{value:"Mga Related na Callbacks",id:"mga-related-na-callbacks",level:2}];function d(a){const n={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...a.components},{TipNPCCallbacks:e,VersionWarn:t}=n;return e||m("TipNPCCallbacks",!0),t||m("VersionWarn",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t,{name:"callback",version:"SA-MP 0.3.7"}),"\n",(0,r.jsx)(n.h2,{id:"deskripsyon",children:"Deskripsyon"}),"\n",(0,r.jsx)(n.p,{children:"Ang callback na ito ay natatawag kapag ang actor ay na stream na sa client ng player."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Pangalan"}),(0,r.jsx)(n.th,{children:"Deskripsyon"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"actorid"}),(0,r.jsx)(n.td,{children:"Ang ID ng actor na na stream para sa player."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"forplayerid"}),(0,r.jsx)(n.td,{children:"Ang ID ng player kung kanino na stream ang actor"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:"Lagi itong na tatawag una sa mga filterscript."}),"\n",(0,r.jsx)(n.h2,{id:"mga-halimbawa",children:"Mga Halimbawa"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'public OnActorStreamIn(actorid, forplayerid)\n{\n    new string[40];\n    format(string, sizeof(string), "Ang actor %d ay naka stream na para sa iyo.", actorid);\n    SendClientMessage(forplayerid, 0xFFFFFFFF, string);\n    return 1;\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"mga-dapat-unawain",children:"Mga Dapat Unawain"}),"\n",(0,r.jsx)(e,{}),"\n",(0,r.jsx)(n.h2,{id:"mga-related-na-callbacks",children:"Mga Related na Callbacks"})]})}function p(a={}){const{wrapper:n}={...(0,s.R)(),...a.components};return n?(0,r.jsx)(n,{...a,children:(0,r.jsx)(d,{...a})}):d(a)}function m(a,n){throw new Error("Expected "+(n?"component":"object")+" `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);