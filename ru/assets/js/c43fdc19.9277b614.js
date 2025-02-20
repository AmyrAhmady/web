"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[64012],{13724:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"scripting/callbacks/OnVehicleSirenStateChange","title":"OnVehicleSirenStateChange","description":"This callback is called when a vehicle\'s siren is toggled.","source":"@site/docs/scripting/callbacks/OnVehicleSirenStateChange.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnVehicleSirenStateChange","permalink":"/ru/docs/scripting/callbacks/OnVehicleSirenStateChange","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnVehicleSirenStateChange.md","tags":[{"inline":true,"label":"vehicle","permalink":"/ru/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"OnVehicleSirenStateChange","sidebar_label":"OnVehicleSirenStateChange","description":"This callback is called when a vehicle\'s siren is toggled.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"OnVehicleRespray","permalink":"/ru/docs/scripting/callbacks/OnVehicleRespray"},"next":{"title":"OnVehicleSpawn","permalink":"/ru/docs/scripting/callbacks/OnVehicleSpawn"}}');var l=i(74848),s=i(28453);const r={title:"OnVehicleSirenStateChange",sidebar_label:"OnVehicleSirenStateChange",description:"This callback is called when a vehicle's siren is toggled.",tags:["vehicle"]},a=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components},{VersionWarn:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i,{name:"callback",version:"SA-MP 0.3.7"}),"\n",(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"This callback is called when a vehicle's siren is toggled."}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Name"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"playerid"}),(0,l.jsx)(n.td,{children:"The ID of the player that toggled the siren (driver)."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"vehicleid"}),(0,l.jsx)(n.td,{children:"The ID of the vehicle of which the siren was toggled for."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"newstate"}),(0,l.jsx)(n.td,{children:"0 if siren was turned off, 1 if siren was turned on."})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsx)(n.p,{children:"1 - Will prevent gamemode from receiving this callback."}),"\n",(0,l.jsx)(n.p,{children:"0 - Indicates that this callback will be passed to the gamemode."}),"\n",(0,l.jsx)(n.p,{children:"It is always called first in filterscripts."}),"\n",(0,l.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-c",children:'public OnVehicleSirenStateChange(playerid, vehicleid, newstate)\n{\n    if (newstate)\n    {\n        GameTextForPlayer(playerid, "~W~Siren ~G~on", 1000, 3);\n    }\n    else\n    {\n        GameTextForPlayer(playerid, "~W~Siren ~r~off", 1000, 3);\n    }\n    return 1;\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsx)(n.p,{children:"This callback is only called when a vehicle's siren is toggled on or off, NOT when the alternate siren is in use (holding horn)."})}),"\n",(0,l.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsx)(n.p,{children:"The following functions might be useful, as they're related to this callback in one way or another."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../functions/GetVehicleParamsSirenState",children:"GetVehicleParamsSirenState"}),": Check whether a vehicle's siren is on or off."]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var t=i(96540);const l={},s=t.createContext(l);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);