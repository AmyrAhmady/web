"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[12252],{28453:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>i});var l=a(96540);const r={},s=l.createContext(r);function o(e){const n=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),l.createElement(s.Provider,{value:n},e.children)}},83152:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>t,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});const l=JSON.parse('{"id":"scripting/functions/UseGangZoneCheck","title":"UseGangZoneCheck","description":"Enables the callback when a player enters/leaves this zone","source":"@site/docs/scripting/functions/UseGangZoneCheck.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/UseGangZoneCheck","permalink":"/docs/scripting/functions/UseGangZoneCheck","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/UseGangZoneCheck.md","tags":[{"inline":true,"label":"player","permalink":"/docs/tags/player"},{"inline":true,"label":"gangzone","permalink":"/docs/tags/gangzone"}],"version":"current","frontMatter":{"title":"UseGangZoneCheck","sidebar_label":"UseGangZoneCheck","description":"Enables the callback when a player enters/leaves this zone","tags":["player","gangzone"]},"sidebar":"docsSidebar","previous":{"title":"UpdateVehicleDamageStatus","permalink":"/docs/scripting/functions/UpdateVehicleDamageStatus"},"next":{"title":"UsePlayerGangZoneCheck","permalink":"/docs/scripting/functions/UsePlayerGangZoneCheck"}}');var r=a(74848),s=a(28453);const o={title:"UseGangZoneCheck",sidebar_label:"UseGangZoneCheck",description:"Enables the callback when a player enters/leaves this zone",tags:["player","gangzone"]},i=void 0,t={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components},{VersionWarn:a}=n;return a||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a,{version:"omp v1.1.0.2612"}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Enables the callback when a player enters/leaves this zone."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"zoneid"}),(0,r.jsx)(n.td,{children:"The ID of the zone to enable area detection for."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["bool",":enable"]}),(0,r.jsxs)(n.td,{children:["Should entry detection be started or stopped? (",(0,r.jsx)(n.code,{children:"true"}),"/",(0,r.jsx)(n.code,{children:"false"}),")"]})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"1:"})," The function executed successfully."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"0:"})," The function failed to execute. The gangzone specified does not exist."]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'new gGangZoneID = INVALID_GANG_ZONE;\n\npublic OnGameModeInit()\n{\n    gGangZoneID = GangZoneCreate(1248.011, 2072.804, 1439.348, 2204.319);\n\n    // Enabled the callback when a player enters/leaves this zone\n    UseGangZoneCheck(gGangZoneID, true);\n}\n\npublic OnPlayerEnterGangZone(playerid, zoneid)\n{\n    if (zoneid == gGangZoneID)\n    {\n        new string[64];\n        format(string, sizeof(string), "You are entering gangzone %i", zoneid);\n        SendClientMessage(playerid, 0xFFFFFFFF, string);\n    }\n    return 1;\n}\n\npublic OnPlayerLeaveGangZone(playerid, zoneid)\n{\n    if (zoneid == gGangZoneID)\n    {\n        new string[64];\n        format(string, sizeof(string), "You are leaving gangzone %i", zoneid);\n        SendClientMessage(playerid, 0xFFFFFFFF, string);\n    }\n    return 1;\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,r.jsx)(n.p,{children:"The following callbacks might be useful, as they're related to this function in one way or another."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../callbacks/OnPlayerEnterGangZone",children:"OnPlayerEnterGangZone"}),": This callback is called when a player enters a gangzone."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../callbacks/OnPlayerLeaveGangZone",children:"OnPlayerLeaveGangZone"}),": This callback is called when a player exited a gangzone."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,r.jsx)(n.p,{children:"The following functions might be useful, as they're related to this function in one way or another."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"GangZoneCreate",children:"GangZoneCreate"}),": Create a gangzone."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"GangZoneDestroy",children:"GangZoneDestroy"}),": Destroy a gangzone."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"GangZoneShowForPlayer",children:"GangZoneShowForPlayer"}),": Show a gangzone for a player."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"GangZoneShowForAll",children:"GangZoneShowForAll"}),": Show a gangzone for all players."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"GangZoneHideForPlayer",children:"GangZoneHideForPlayer"}),": Hide a gangzone for a player."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"GangZoneHideForAll",children:"GangZoneHideForAll"}),": Hide a gangzone for all players."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"GangZoneFlashForPlayer",children:"GangZoneFlashForPlayer"}),": Make a gangzone flash for a player."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"GangZoneFlashForAll",children:"GangZoneFlashForAll"}),": Make a gangzone flash for all players."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"GangZoneStopFlashForPlayer",children:"GangZoneStopFlashForPlayer"}),": Stop a gangzone flashing for a player."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"GangZoneStopFlashForAll",children:"GangZoneStopFlashForAll"}),": Stop a gangzone flashing for all players."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"IsValidGangZone",children:"IsValidGangZone"}),": Check if the gangzone valid."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"IsPlayerInGangZone",children:"IsPlayerInGangZone"}),": Check if the player in gangzone."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"IsGangZoneVisibleForPlayer",children:"IsGangZoneVisibleForPlayer"}),": Check if the gangzone is visible for player."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);