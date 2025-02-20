"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[58309],{28453:(a,n,e)=>{e.d(n,{R:()=>s,x:()=>r});var l=e(96540);const t={},i=l.createContext(t);function s(a){const n=l.useContext(i);return l.useMemo((function(){return"function"==typeof a?a(n):{...n,...a}}),[n,a])}function r(a){let n;return n=a.disableParentContext?"function"==typeof a.components?a.components(t):a.components||t:s(a.components),l.createElement(i.Provider,{value:n},a.children)}},86106:(a,n,e)=>{e.r(n),e.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>g});const l=JSON.parse('{"id":"scripting/callbacks/OnPlayerStateChange","title":"OnPlayerStateChange","description":"This callback is called when a player changes state.","source":"@site/i18n/fil/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerStateChange.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerStateChange","permalink":"/fil/docs/scripting/callbacks/OnPlayerStateChange","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnPlayerStateChange.md","tags":[{"inline":true,"label":"player","permalink":"/fil/docs/tags/player"}],"version":"current","frontMatter":{"title":"OnPlayerStateChange","sidebar_label":"OnPlayerStateChange","description":"This callback is called when a player changes state.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerSpawn","permalink":"/fil/docs/scripting/callbacks/OnPlayerSpawn"},"next":{"title":"OnPlayerStreamIn","permalink":"/fil/docs/scripting/callbacks/OnPlayerStreamIn"}}');var t=e(74848),i=e(28453);const s={title:"OnPlayerStateChange",sidebar_label:"OnPlayerStateChange",description:"This callback is called when a player changes state.",tags:["player"]},r=void 0,c={},g=[{value:"Paglalarawan",id:"paglalarawan",level:2},{value:"Returns",id:"returns",level:2},{value:"Halimbawa ng Paggamit",id:"halimbawa-ng-paggamit",level:2},{value:"Mga Dapat Unawain",id:"mga-dapat-unawain",level:2},{value:"Mga Kaugnay na Callbacks",id:"mga-kaugnay-na-callbacks",level:2},{value:"Mga Kaugnay na Functions",id:"mga-kaugnay-na-functions",level:2}];function o(a){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...a.components},{TipNPCCallbacks:e}=n;return e||function(a,n){throw new Error("Expected "+(n?"component":"object")+" `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}("TipNPCCallbacks",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"paglalarawan",children:"Paglalarawan"}),"\n",(0,t.jsx)(n.p,{children:"Ang callback na ito ay tinatawag kapag ang isang player ay nagbago ng estado. Halimbawa, kapag ang isang manlalaro ay nagbago mula sa pagiging driver ng isang sasakyan patungo sa pagiging on-foot."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"playerid"}),(0,t.jsx)(n.td,{children:"Ang ID ng player na nagbago ng estado."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"newstate"}),(0,t.jsx)(n.td,{children:"Ang bagong estado ng manlalaro."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"oldstate"}),(0,t.jsx)(n.td,{children:"Ang dating estado ng manlalaro."})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["Sumangguni sa ",(0,t.jsx)(n.a,{href:"../resources/playerstates",children:"Player States"})," para sa listahan ng lahat ng available na estado ng manlalaro."]}),"\n",(0,t.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(n.p,{children:"Lagi itong na tatawag una sa mga filterscript."}),"\n",(0,t.jsx)(n.h2,{id:"halimbawa-ng-paggamit",children:"Halimbawa ng Paggamit"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"public OnPlayerStateChange(playerid, PLAYER_STATE:newstate, PLAYER_STATE:oldstate)\n{\n    if (oldstate == PLAYER_STATE_ONFOOT && newstate == PLAYER_STATE_DRIVER) // Ang manlalaro ay pumasok sa isang sasakyan bilang isang driver\n    {\n        new vehicleid = GetPlayerVehicleID(playerid);\n        AddVehicleComponent(vehicleid, 1010); // Maglagay ng NOS sa sasakyan\n    }\n    return 1;\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"mga-dapat-unawain",children:"Mga Dapat Unawain"}),"\n",(0,t.jsx)(e,{}),"\n",(0,t.jsx)(n.h2,{id:"mga-kaugnay-na-callbacks",children:"Mga Kaugnay na Callbacks"}),"\n",(0,t.jsx)(n.p,{children:"Maaaring maging kapaki-pakinabang ang mga sumusunod na callback, dahil nauugnay ang mga ito sa callback na ito sa isang paraan o iba pa."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"./OnPlayerInteriorChange",children:"OnPlayerInteriorChange"}),": Tinatawag ang callback na ito kapag nagpalit ng interior ang isang player."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"mga-kaugnay-na-functions",children:"Mga Kaugnay na Functions"}),"\n",(0,t.jsx)(n.p,{children:"Maaaring maging kapaki-pakinabang ang mga sumusunod na function, dahil nauugnay ang mga ito sa callback na ito sa isang paraan o iba pa."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"../functions/GetPlayerState",children:"GetPlayerState"}),": Kunin ang kasalukuyang estado ng isang manlalaro."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"../functions/GetPlayerSpecialAction",children:"GetPlayerSpecialAction"}),": Kumuha ng kasalukuyang espesyal na aksyon ng manlalaro."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"../functions/SetPlayerSpecialAction",children:"SetPlayerSpecialAction"}),": Magtakda ng espesyal na aksyon ng manlalaro."]}),"\n"]})]})}function d(a={}){const{wrapper:n}={...(0,i.R)(),...a.components};return n?(0,t.jsx)(n,{...a,children:(0,t.jsx)(o,{...a})}):o(a)}}}]);