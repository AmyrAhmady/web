"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[53999],{28453:(e,n,a)=>{a.d(n,{R:()=>s,x:()=>l});var r=a(96540);const o={},t=r.createContext(o);function s(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(t.Provider,{value:n},e.children)}},29256:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"scripting/functions/PlayerGangZoneGetPos","title":"PlayerGangZoneGetPos","description":"Get the position of a gangzone, represented by minX, minY, maxX, maxY coordinates","source":"@site/docs/scripting/functions/PlayerGangZoneGetPos.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/PlayerGangZoneGetPos","permalink":"/bs/docs/scripting/functions/PlayerGangZoneGetPos","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/PlayerGangZoneGetPos.md","tags":[{"inline":true,"label":"player","permalink":"/bs/docs/tags/player"},{"inline":true,"label":"gangzone","permalink":"/bs/docs/tags/gangzone"},{"inline":true,"label":"playergangzone","permalink":"/bs/docs/tags/playergangzone"}],"version":"current","frontMatter":{"title":"PlayerGangZoneGetPos","sidebar_label":"PlayerGangZoneGetPos","description":"Get the position of a gangzone, represented by minX, minY, maxX, maxY coordinates","tags":["player","gangzone","playergangzone"]},"sidebar":"docsSidebar","previous":{"title":"PlayerGangZoneGetFlashColour","permalink":"/bs/docs/scripting/functions/PlayerGangZoneGetFlashColour"},"next":{"title":"PlayerGangZoneHide","permalink":"/bs/docs/scripting/functions/PlayerGangZoneHide"}}');var o=a(74848),t=a(28453);const s={title:"PlayerGangZoneGetPos",sidebar_label:"PlayerGangZoneGetPos",description:"Get the position of a gangzone, represented by minX, minY, maxX, maxY coordinates",tags:["player","gangzone","playergangzone"]},l=void 0,i={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components},{VersionWarn:a}=n;return a||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a,{version:"omp v1.1.0.2612"}),"\n",(0,o.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,o.jsx)(n.p,{children:"Get the position of a gangzone, represented by minX, minY, maxX, maxY coordinates."}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Name"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"playerid"}),(0,o.jsx)(n.td,{children:"The ID of the player to whom player gangzone is bound."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"zoneid"}),(0,o.jsx)(n.td,{children:"The ID of the zone to the coordinates of which want to get."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsxs)(n.td,{children:["&Float",":minX"]}),(0,o.jsx)(n.td,{children:"The X coordinate for the west side of the player gangzone."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsxs)(n.td,{children:["&Float",":minY"]}),(0,o.jsx)(n.td,{children:"The Y coordinate for the south side of the player gangzone."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsxs)(n.td,{children:["&Float",":maxX"]}),(0,o.jsx)(n.td,{children:"The X coordinate for the east side of the player gangzone."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsxs)(n.td,{children:["&Float",":maxY"]}),(0,o.jsx)(n.td,{children:"The Y coordinate for the north side of the player gangzone."})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,o.jsxs)(n.p,{children:["This function always returns ",(0,o.jsx)(n.strong,{children:"true"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-c",children:"new gGangZoneID[MAX_PLAYERS];\n\npublic OnPlayerConnect(playerid)\n{\n    // Create the gangzone\n    gGangZoneID[playerid] = CreatePlayerGangZone(playerid, 2236.1475, 2424.7266, 2319.1636, 2502.4348);\n\n    new \n        Float:minX,\n        Float:minY,\n        Float:maxX,\n        Float:maxY;\n    \n    PlayerGangZoneGetPos(playerid, gGangZoneID[playerid], minX, minY, maxX, maxY);\n    return 1;\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"CreatePlayerGangZone",children:"CreatePlayerGangZone"}),": Create player gangzone."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"PlayerGangZoneDestroy",children:"PlayerGangZoneDestroy"}),": Destroy player gangzone."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"PlayerGangZoneShow",children:"PlayerGangZoneShow"}),": Show player gangzone."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"PlayerGangZoneHide",children:"PlayerGangZoneHide"}),": Hide player gangzone."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"PlayerGangZoneFlash",children:"PlayerGangZoneFlash"}),": Start player gangzone flash."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"PlayerGangZoneStopFlash",children:"PlayerGangZoneStopFlash"}),": Stop player gangzone flash."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"PlayerGangZoneGetFlashColour",children:"PlayerGangZoneGetFlashColour"}),": Get the flashing colour of a player gangzone."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"PlayerGangZoneGetColour",children:"PlayerGangZoneGetColour"}),": Get the colour of a player gangzone."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"IsValidPlayerGangZone",children:"IsValidPlayerGangZone"}),": Check if the player gangzone valid."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"IsPlayerInPlayerGangZone",children:"IsPlayerInPlayerGangZone"}),": Check if the player in player gangzone."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"IsPlayerGangZoneVisible",children:"IsPlayerGangZoneVisible"}),": Check if the player gangzone is visible."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"IsPlayerGangZoneFlashing",children:"IsPlayerGangZoneFlashing"}),": Check if the player gangzone is flashing."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"UsePlayerGangZoneCheck",children:"UsePlayerGangZoneCheck"}),": Enables the callback when a player enters/leaves this zone."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}}}]);