"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[80174],{2453:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>t,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"scripting/functions/UsePlayerGangZoneCheck","title":"UsePlayerGangZoneCheck","description":"Enables the callback when a player enters/leaves this zone","source":"@site/docs/scripting/functions/UsePlayerGangZoneCheck.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/UsePlayerGangZoneCheck","permalink":"/th/docs/scripting/functions/UsePlayerGangZoneCheck","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/UsePlayerGangZoneCheck.md","tags":[{"inline":true,"label":"player","permalink":"/th/docs/tags/player"},{"inline":true,"label":"gangzone","permalink":"/th/docs/tags/gangzone"},{"inline":true,"label":"playergangzone","permalink":"/th/docs/tags/playergangzone"}],"version":"current","frontMatter":{"title":"UsePlayerGangZoneCheck","sidebar_label":"UsePlayerGangZoneCheck","description":"Enables the callback when a player enters/leaves this zone","tags":["player","gangzone","playergangzone"]},"sidebar":"docsSidebar","previous":{"title":"UseGangZoneCheck","permalink":"/th/docs/scripting/functions/UseGangZoneCheck"},"next":{"title":"UsePlayerPedAnims","permalink":"/th/docs/scripting/functions/UsePlayerPedAnims"}}');var l=a(74848),s=a(28453);const t={title:"UsePlayerGangZoneCheck",sidebar_label:"UsePlayerGangZoneCheck",description:"Enables the callback when a player enters/leaves this zone",tags:["player","gangzone","playergangzone"]},i=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2},{value:"Related Functions",id:"related-functions",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components},{VersionWarn:a}=n;return a||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{version:"omp v1.1.0.2612"}),"\n",(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"Enables the callback when a player enters/leaves this zone."}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Name"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"playerid"}),(0,l.jsx)(n.td,{children:"The ID of the player for whom you want to enable callback triggering when the player enters/leaves this zone."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"zoneid"}),(0,l.jsx)(n.td,{children:"The ID of the player-zone to enable area detection for."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsxs)(n.td,{children:["bool",":enable"]}),(0,l.jsxs)(n.td,{children:["Should entry detection be started or stopped? (",(0,l.jsx)(n.code,{children:"true"}),"/",(0,l.jsx)(n.code,{children:"false"}),")"]})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"true"})," - The function executed successfully."]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"false"})," - The function failed to execute. The gangzone specified does not exist."]}),"\n",(0,l.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:'// This variable is used to store the id of the gangzone\n// so that we can use it throught the script\nnew gGangZoneID[MAX_PLAYERS] = {INVALID_GANG_ZONE, ...};\n\npublic OnPlayerConnect(playerid)\n{\n    // Create the gangzone\n    gGangZoneID[playerid] = CreatePlayerGangZone(playerid, 2236.1475, 2424.7266, 2319.1636, 2502.4348);\n\n    // Enabled the callback when a player enters/leaves this zone\n    UsePlayerGangZoneCheck(playerid, gGangZoneID[playerid], true);\n}\n\npublic OnPlayerEnterPlayerGangZone(playerid, zoneid)\n{\n    if (zoneid == gGangZoneID[playerid])\n    {\n        new string[64];\n        format(string, sizeof(string), "You are entering player gangzone %i", zoneid);\n        SendClientMessage(playerid, 0xFFFFFFFF, string);\n    }\n    return 1;\n}\n\npublic OnPlayerLeavePlayerGangZone(playerid, zoneid)\n{\n    if (zoneid == gGangZoneID[playerid])\n    {\n        new string[64];\n        format(string, sizeof(string), "You are leaving player gangzone %i", zoneid);\n        SendClientMessage(playerid, 0xFFFFFFFF, string);\n    }\n    return 1;\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,l.jsx)(n.p,{children:"The following callbacks might be useful, as they're related to this function in one way or another."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../callbacks/OnPlayerEnterPlayerGangZone",children:"OnPlayerEnterPlayerGangZone"}),": This callback is called when a player enters a player gangzone."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../callbacks/OnPlayerLeavePlayerGangZone",children:"OnPlayerLeavePlayerGangZone"}),": This callback is called when a player exited a player gangzone."]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsx)(n.p,{children:"The following functions might be useful, as they're related to this function in one way or another."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"CreatePlayerGangZone",children:"CreatePlayerGangZone"}),": Create player gangzone."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"PlayerGangZoneDestroy",children:"PlayerGangZoneDestroy"}),": Destroy player gangzone."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"PlayerGangZoneShow",children:"PlayerGangZoneShow"}),": Show player gangzone."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"PlayerGangZoneHide",children:"PlayerGangZoneHide"}),": Hide player gangzone."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"PlayerGangZoneFlash",children:"PlayerGangZoneFlash"}),": Start player gangzone flash."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"PlayerGangZoneStopFlash",children:"PlayerGangZoneStopFlash"}),": Stop player gangzone flash."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"PlayerGangZoneGetFlashColour",children:"PlayerGangZoneGetFlashColour"}),": Get the flashing colour of a player gangzone."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"PlayerGangZoneGetColour",children:"PlayerGangZoneGetColour"}),": Get the colour of a player gangzone."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"PlayerGangZoneGetPos",children:"PlayerGangZoneGetPos"}),": Get the position of a gangzone, represented by minX, minY, maxX, maxY coordinates."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"IsValidPlayerGangZone",children:"IsValidPlayerGangZone"}),": Check if the player gangzone valid."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"IsPlayerInPlayerGangZone",children:"IsPlayerInPlayerGangZone"}),": Check if the player in player gangzone."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"IsPlayerGangZoneVisible",children:"IsPlayerGangZoneVisible"}),": Check if the player gangzone is visible."]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>t,x:()=>i});var r=a(96540);const l={},s=r.createContext(l);function t(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);