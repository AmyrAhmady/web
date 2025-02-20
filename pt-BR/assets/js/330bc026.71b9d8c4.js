"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[40758],{28453:(e,n,a)=>{a.d(n,{R:()=>t,x:()=>o});var r=a(96540);const l={},s=r.createContext(l);function t(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),r.createElement(s.Provider,{value:n},e.children)}},92849:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>g,frontMatter:()=>t,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"scripting/functions/PlayerGangZoneFlash","title":"PlayerGangZoneFlash","description":"Start player gangzone flash","source":"@site/docs/scripting/functions/PlayerGangZoneFlash.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/PlayerGangZoneFlash","permalink":"/pt-BR/docs/scripting/functions/PlayerGangZoneFlash","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/PlayerGangZoneFlash.md","tags":[{"inline":true,"label":"player","permalink":"/pt-BR/docs/tags/player"},{"inline":true,"label":"gangzone","permalink":"/pt-BR/docs/tags/gangzone"},{"inline":true,"label":"playergangzone","permalink":"/pt-BR/docs/tags/playergangzone"}],"version":"current","frontMatter":{"title":"PlayerGangZoneFlash","sidebar_label":"PlayerGangZoneFlash","description":"Start player gangzone flash","tags":["player","gangzone","playergangzone"]},"sidebar":"docsSidebar","previous":{"title":"PlayerGangZoneDestroy","permalink":"/pt-BR/docs/scripting/functions/PlayerGangZoneDestroy"},"next":{"title":"PlayerGangZoneGetColour","permalink":"/pt-BR/docs/scripting/functions/PlayerGangZoneGetColour"}}');var l=a(74848),s=a(28453);const t={title:"PlayerGangZoneFlash",sidebar_label:"PlayerGangZoneFlash",description:"Start player gangzone flash",tags:["player","gangzone","playergangzone"]},o=void 0,i={},h=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components},{VersionWarn:a}=n;return a||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{version:"omp v1.1.0.2612"}),"\n",(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"Start player gangzone flash."}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Name"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"playerid"}),(0,l.jsx)(n.td,{children:"The ID of the player to whom player gangzone is bound."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"zoneid"}),(0,l.jsx)(n.td,{children:"The ID of the player gangzone for in start flashing."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"flashColour"}),(0,l.jsx)(n.td,{children:"The colour by which the player gangzone will be flashing."})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"1:"})," The function executed successfully. Success is reported even if the player gangzone was flashing to begin with."]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"0:"})," The function failed to execute. The gangzone specified does not exist."]}),"\n",(0,l.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:"// This variable is used to store the id of the gangzone\n// so that we can use it throught the script\nnew gGangZoneID[MAX_PLAYERS] = {INVALID_GANG_ZONE, ...};\n\npublic OnPlayerConnect(playerid)\n{\n    // Create the gangzone\n    gGangZoneID[playerid] = CreatePlayerGangZone(playerid, 2236.1475, 2424.7266, 2319.1636, 2502.4348);\n\n    // Show the gangzone player\n    PlayerGangZoneShow(playerid, gGangZoneID[playerid]);\n\n    // Start player gangzone flash    \n    PlayerGangZoneFlash(playerid, gGangZoneID[playerid], 0xFF00FFFF);\n}\n"})}),"\n",(0,l.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"CreatePlayerGangZone",children:"CreatePlayerGangZone"}),": Create player gangzone."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"PlayerGangZoneDestroy",children:"PlayerGangZoneDestroy"}),": Destroy player gangzone."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"PlayerGangZoneShow",children:"PlayerGangZoneShow"}),": Show player gangzone."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"PlayerGangZoneHide",children:"PlayerGangZoneHide"}),": Hide player gangzone."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"PlayerGangZoneStopFlash",children:"PlayerGangZoneStopFlash"}),": Stop player gangzone flash."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"PlayerGangZoneGetColour",children:"PlayerGangZoneGetColour"}),": Get the colour of a player gangzone."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"PlayerGangZoneGetFlashColour",children:"PlayerGangZoneGetFlashColour"}),": Get the flashing colour of a player gangzone."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"PlayerGangZoneGetPos",children:"PlayerGangZoneGetPos"}),": Get the position of a gangzone, represented by minX, minY, maxX, maxY coordinates."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"IsValidPlayerGangZone",children:"IsValidPlayerGangZone"}),": Check if the player gangzone valid."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"IsPlayerInPlayerGangZone",children:"IsPlayerInPlayerGangZone"}),": Check if the player in player gangzone."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"IsPlayerGangZoneVisible",children:"IsPlayerGangZoneVisible"}),": Check if the player gangzone is visible."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"IsPlayerGangZoneFlashing",children:"IsPlayerGangZoneFlashing"}),": Check if the player gangzone is flashing."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"UsePlayerGangZoneCheck",children:"UsePlayerGangZoneCheck"}),": Enables the callback when a player enters/leaves this zone."]}),"\n"]})]})}function g(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}}}]);