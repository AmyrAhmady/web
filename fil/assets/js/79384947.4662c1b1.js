"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[66268],{28453:(a,n,e)=>{e.d(n,{R:()=>r,x:()=>s});var t=e(96540);const l={},i=t.createContext(l);function r(a){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof a?a(n):{...n,...a}}),[n,a])}function s(a){let n;return n=a.disableParentContext?"function"==typeof a.components?a.components(l):a.components||l:r(a.components),t.createElement(i.Provider,{value:n},a.children)}},37207:(a,n,e)=>{e.r(n),e.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>t,toc:()=>p});const t=JSON.parse('{"id":"scripting/callbacks/OnPlayerUpdate","title":"OnPlayerUpdate","description":"This callback is called every time a client/player updates the server with their status.","source":"@site/i18n/fil/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerUpdate.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerUpdate","permalink":"/fil/docs/scripting/callbacks/OnPlayerUpdate","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnPlayerUpdate.md","tags":[{"inline":true,"label":"player","permalink":"/fil/docs/tags/player"}],"version":"current","frontMatter":{"title":"OnPlayerUpdate","sidebar_label":"OnPlayerUpdate","description":"This callback is called every time a client/player updates the server with their status.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerText","permalink":"/fil/docs/scripting/callbacks/OnPlayerText"},"next":{"title":"OnPlayerWeaponShot","permalink":"/fil/docs/scripting/callbacks/OnPlayerWeaponShot"}}');var l=e(74848),i=e(28453);const r={title:"OnPlayerUpdate",sidebar_label:"OnPlayerUpdate",description:"This callback is called every time a client/player updates the server with their status.",tags:["player"]},s=void 0,o={},p=[{value:"Paglalarawan",id:"paglalarawan",level:2},{value:"Returns",id:"returns",level:2},{value:"Halimbawa ng Paggamit",id:"halimbawa-ng-paggamit",level:2},{value:"Mga Dapat Unawain",id:"mga-dapat-unawain",level:2}];function g(a){const n={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...a.components},{TipNPCCallbacks:e}=n;return e||function(a,n){throw new Error("Expected "+(n?"component":"object")+" `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}("TipNPCCallbacks",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"paglalarawan",children:"Paglalarawan"}),"\n",(0,l.jsx)(n.p,{children:"Ang callback na ito ay tinatawag sa tuwing ina-update ng isang kliyente/manlalaro ang server sa kanilang katayuan. Madalas itong ginagamit para gumawa ng mga custom na callback para sa mga update ng kliyente na hindi aktibong sinusubaybayan ng server, gaya ng mga update sa kalusugan o armor o mga manlalaro na nagpapalit ng armas."}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Name"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"playerid"}),(0,l.jsx)(n.td,{children:"ID ng player na nagpapadala ng update packet."})]})})]}),"\n",(0,l.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsx)(n.p,{children:"0 - Ang pag-update mula sa player na ito ay hindi mai-replicate sa ibang mga kliyente."}),"\n",(0,l.jsx)(n.p,{children:"1 - Isinasaad na ang update na ito ay maaaring maproseso nang normal at maipadala sa iba pang mga manlalaro."}),"\n",(0,l.jsx)(n.p,{children:"Lagi itong na tatawag una sa mga filterscript."}),"\n",(0,l.jsx)(n.h2,{id:"halimbawa-ng-paggamit",children:"Halimbawa ng Paggamit"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:'public OnPlayerUpdate(playerid)\n{\n    new iCurWeap = GetPlayerWeapon(playerid); // Ibalik ang kasalukuyang sandata ng manlalaro\n    if (iCurWeap\xa0!= GetPVarInt(playerid, "iCurrentWeapon")) // Kung nagpalit siya ng armas simula noong huling update\n    {\n        // Tawagan natin ang isang callback na pinangalanang OnPlayerChangeWeapon\n        OnPlayerChangeWeapon(playerid, GetPVarInt(playerid, "iCurrentWeapon"), iCurWeap);\n        SetPVarInt(playerid, "iCurrentWeapon", iCurWeap);// I-update ang variable ng armas\n    }\n    return 1; // Ipadala ang update na ito sa ibang mga manlalaro.\n}\n\nstock OnPlayerChangeWeapon(playerid, oldweapon, newweapon)\n{\n    new     s[128],\n        oWeapon[24],\n        nWeapon[24];\n\n    GetWeaponName(oldweapon, oWeapon, sizeof(oWeapon));\n    GetWeaponName(newweapon, nWeapon, sizeof(nWeapon));\n\n    format(s, sizeof(s), "Iniba mo ang iyong sandata mula sa %s patungong %s!", oWeapon, nWeapon);\n\n    SendClientMessage(playerid, 0xFFFFFFFF, s);\n}\npublic OnPlayerUpdate(playerid)\n{\n    new Float:fHealth;\n\n    GetPlayerHealth(playerid, fHealth);\n\n    if (fHealth\xa0!= GetPVarFloat(playerid, "faPlayerHealth"))\n    {\n        // Ang kalusugan ng manlalaro ay nagbago mula noong huling pag-update -> server, kaya malinaw na na-update ang bagay.\n        // Suriin natin kung mawawalan o makakakuha ng buhay ang manlalaro, anti-health cheat? ;)\n\n        if (fHealth > GetPVarFloat(playerid, "faPlayerHealth"))\n        {\n            /* Siya ay nakakuha ng kalusugan! Pandaraya? Sumulat ng iyong sariling mga script dito upang malaman kung paano ang isang manlalaro\n            nakakuha ng kalusugan! */\n        }\n        else\n        {\n            /* Nawalan siya ng buhay! */\n        }\n\n        SetPVarFloat(playerid, "faPlayerHealth", fHealth);\n    }\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"mga-dapat-unawain",children:"Mga Dapat Unawain"}),"\n",(0,l.jsx)(e,{}),"\n",(0,l.jsx)(n.admonition,{type:"warning",children:(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Ang callback na ito ay tinatawag, sa karaniwan, 30 beses bawat segundo, bawat manlalaro; gamitin lamang ito kapag alam mo kung para saan ito (o mas mahalaga kung ano ang HINDI para sa). Ang dalas ng pagtawag sa callback na ito para sa bawat manlalaro ay nag-iiba, depende sa kung ano ang ginagawa ng manlalaro. Ang pagmamaneho o pagbaril ay magti-trigger ng mas maraming update kaysa sa idling."}),"\n"]})})]})}function d(a={}){const{wrapper:n}={...(0,i.R)(),...a.components};return n?(0,l.jsx)(n,{...a,children:(0,l.jsx)(g,{...a})}):g(a)}}}]);