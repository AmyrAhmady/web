"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[17235],{28453:(e,n,a)=>{a.d(n,{R:()=>l,x:()=>s});var t=a(96540);const r={},i=t.createContext(r);function l(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:n},e.children)}},99233:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"scripting/functions/GetPlayerState","title":"GetPlayerState","description":"Kunin ang kasalukuyang estado ng isang manlalaro.","source":"@site/i18n/fil/docusaurus-plugin-content-docs/current/scripting/functions/GetPlayerState.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerState","permalink":"/fil/docs/scripting/functions/GetPlayerState","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetPlayerState.md","tags":[{"inline":true,"label":"player","permalink":"/fil/docs/tags/player"}],"version":"current","frontMatter":{"title":"GetPlayerState","sidebar_label":"GetPlayerState","description":"Kunin ang kasalukuyang estado ng isang manlalaro.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerSpectateType","permalink":"/fil/docs/scripting/functions/GetPlayerSpectateType"},"next":{"title":"GetPlayerSurfingObjectID","permalink":"/fil/docs/scripting/functions/GetPlayerSurfingObjectID"}}');var r=a(74848),i=a(28453);const l={title:"GetPlayerState",sidebar_label:"GetPlayerState",description:"Kunin ang kasalukuyang estado ng isang manlalaro.",tags:["player"]},s=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Kunin ang kasalukuyang estado ng isang manlalaro."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"playerid"}),(0,r.jsx)(n.td,{children:"Ang ID ng player para makuha ang kasalukuyang estado."})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(n.p,{children:["Ang kasalukuyang estado ng manlalaro bilang isang integer (tingnan ang: ",(0,r.jsx)(n.a,{href:"../resources/playerstates",children:"Player States"}),")."]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"public OnPlayerDeath(playerid, killerid, WEAPON:reason)\n{\n    new playerState = GetPlayerState(killerid); // Kunin ang estado ng pumatay\n\n    if (playerState == PLAYER_STATE_DRIVER) // Kung ang pumatay ay nasa sasakyan\n    {\n        // Ito ay isang driver drive-by, kumuha ng pera\n        GivePlayerMoney(killerid, -10000);\n    }\n    return 1;\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"GetPlayerSpecialAction",children:"GetPlayerSpecialAction"}),": Kunin ang kasalukuyang special action ng manlalaro."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"SetPlayerSpecialAction",children:"SetPlayerSpecialAction"}),": Magtakda ng special action ng manlalaro."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../callbacks/OnPlayerStateChange",children:"OnPlayerStateChange"}),": Tinatawag kapag binago ng player ang estado."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);