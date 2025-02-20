"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[12304],{28453:(e,r,a)=>{a.d(r,{R:()=>s,x:()=>i});var l=a(96540);const t={},n=l.createContext(t);function s(e){const r=l.useContext(n);return l.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),l.createElement(n.Provider,{value:r},e.children)}},93210:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>o});const l=JSON.parse('{"id":"scripting/callbacks/OnPlayerStreamOut","title":"OnPlayerStreamOut","description":"This callback is called when a player is streamed out from some other player\'s client.","source":"@site/docs/scripting/callbacks/OnPlayerStreamOut.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerStreamOut","permalink":"/fil/docs/scripting/callbacks/OnPlayerStreamOut","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnPlayerStreamOut.md","tags":[{"inline":true,"label":"player","permalink":"/fil/docs/tags/player"}],"version":"current","frontMatter":{"title":"OnPlayerStreamOut","sidebar_label":"OnPlayerStreamOut","description":"This callback is called when a player is streamed out from some other player\'s client.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerStreamIn","permalink":"/fil/docs/scripting/callbacks/OnPlayerStreamIn"},"next":{"title":"OnPlayerTakeDamage","permalink":"/fil/docs/scripting/callbacks/OnPlayerTakeDamage"}}');var t=a(74848),n=a(28453);const s={title:"OnPlayerStreamOut",sidebar_label:"OnPlayerStreamOut",description:"This callback is called when a player is streamed out from some other player's client.",tags:["player"]},i=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2}];function d(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components},{TipNPCCallbacks:a}=r;return a||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("TipNPCCallbacks",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(r.p,{children:"This callback is called when a player is streamed out from some other player's client."}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Name"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"playerid"}),(0,t.jsx)(r.td,{children:"The player who has been destreamed."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"forplayerid"}),(0,t.jsx)(r.td,{children:"The player who has destreamed the other player."})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(r.p,{children:"It is always called first in filterscripts."}),"\n",(0,t.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-c",children:'public OnPlayerStreamOut(playerid, forplayerid)\n{\n    new string[80];\n    format(string, sizeof(string), "Your computer has just unloaded player ID %d", playerid);\n    SendClientMessage(forplayerid, 0xFF0000FF, string);\n    return 1;\n}\n'})}),"\n",(0,t.jsx)(r.h2,{id:"notes",children:"Notes"}),"\n",(0,t.jsx)(a,{}),"\n",(0,t.jsx)(r.admonition,{type:"warning",children:(0,t.jsx)(r.p,{children:"OnPlayerStreamOut is not called for both players when a player disconnects"})}),"\n",(0,t.jsx)(r.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,t.jsx)(r.p,{children:"The following callbacks might be useful, as they're related to this callback in one way or another."}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"OnPlayerStreamIn",children:"OnPlayerStreamIn"}),": This callback is called when a player streams in for another player."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"OnPlayerStreamOut",children:"OnActorStreamIn"}),": This callback is called when an actor is streamed in by a player."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"OnPlayerStreamOut",children:"OnVehicleStreamIn"}),": This callback is called when a vehicle streams in for a player."]}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}}}]);