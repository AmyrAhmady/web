"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[80977],{28453:(e,i,l)=>{l.d(i,{R:()=>t,x:()=>r});var c=l(96540);const s={},n=c.createContext(s);function t(e){const i=c.useContext(n);return c.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),c.createElement(n.Provider,{value:i},e.children)}},41629:(e,i,l)=>{l.r(i),l.d(i,{assets:()=>d,contentTitle:()=>r,default:()=>o,frontMatter:()=>t,metadata:()=>c,toc:()=>a});const c=JSON.parse('{"id":"scripting/functions/AddStaticVehicle","title":"AddStaticVehicle","description":"Adds a \'static\' vehicle (models are pre-loaded for players) to the gamemode.","source":"@site/docs/scripting/functions/AddStaticVehicle.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/AddStaticVehicle","permalink":"/docs/scripting/functions/AddStaticVehicle","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/AddStaticVehicle.md","tags":[{"inline":true,"label":"vehicle","permalink":"/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"AddStaticVehicle","sidebar_label":"AddStaticVehicle","description":"Adds a \'static\' vehicle (models are pre-loaded for players) to the gamemode.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"AddStaticPickup","permalink":"/docs/scripting/functions/AddStaticPickup"},"next":{"title":"AddStaticVehicleEx","permalink":"/docs/scripting/functions/AddStaticVehicleEx"}}');var s=l(74848),n=l(28453);const t={title:"AddStaticVehicle",sidebar_label:"AddStaticVehicle",description:"Adds a 'static' vehicle (models are pre-loaded for players) to the gamemode.",tags:["vehicle"]},r=void 0,d={},a=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2},{value:"Related Resources",id:"related-resources",level:2}];function h(e){const i={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(i.p,{children:"Adds a 'static' vehicle (models are pre-loaded for players) to the gamemode."}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Name"}),(0,s.jsx)(i.th,{children:"Description"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"spawnX"}),(0,s.jsxs)(i.td,{children:["The ",(0,s.jsx)(i.a,{href:"../resources/vehicleid",children:"Model ID"})," for the vehicle."]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsxs)(i.td,{children:["Float",":spawnX"]}),(0,s.jsx)(i.td,{children:"The X-coordinate for the vehicle."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsxs)(i.td,{children:["Float",":spawnY"]}),(0,s.jsx)(i.td,{children:"The Y-coordinate for the vehicle."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsxs)(i.td,{children:["Float",":spawnZ"]}),(0,s.jsx)(i.td,{children:"The Z-coordinate for the vehicle."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsxs)(i.td,{children:["Float",":angle"]}),(0,s.jsx)(i.td,{children:"Direction of vehicle - angle."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"../resources/vehiclecolorid",children:"colour1"})}),(0,s.jsx)(i.td,{children:"The primary colour ID. -1 for random."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"../resources/vehiclecolorid",children:"colour2"})}),(0,s.jsx)(i.td,{children:"The secondary colour ID. -1 for random."})]})]})]}),"\n",(0,s.jsx)(i.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(i.p,{children:"The vehicle ID of the vehicle created (between 1 and MAX_VEHICLES)."}),"\n",(0,s.jsx)(i.p,{children:"INVALID_VEHICLE_ID (65535) if vehicle was not created (vehicle limit reached or invalid vehicle model ID passed)."}),"\n",(0,s.jsx)(i.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-c",children:"public OnGameModeInit()\n{\n    // Add a Hydra to the game\n    AddStaticVehicle(520, 2109.1763, 1503.0453, 32.2887, 82.2873, 0, 1);\n\n    return 1;\n}\n"})}),"\n",(0,s.jsx)(i.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"AddStaticVehicleEx",children:"AddStaticVehicleEx"}),": Add a static vehicle with custom respawn time."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"CreateVehicle",children:"CreateVehicle"}),": Create a vehicle."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"DestroyVehicle",children:"DestroyVehicle"}),": Destroy a vehicle."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"GetVehicleParamsSirenState",children:"GetVehicleParamsSirenState"}),": Check whether a vehicle's siren is on or off."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"SetVehicleSpawnInfo",children:"SetVehicleSpawnInfo"}),": Adjusts vehicle model, spawn location, colours, respawn delay and interior."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"GetVehicleSpawnInfo",children:"GetVehicleSpawnInfo"}),": Gets the vehicle spawn location and colours."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"ChangeVehicleColours",children:"ChangeVehicleColours"}),": Change a vehicle's primary and secondary colors."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"GetVehicleColours",children:"GetVehicleColours"}),": Gets the vehicle colours."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"SetVehicleRespawnDelay",children:"SetVehicleRespawnDelay"}),": Set the respawn delay of a vehicle."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"GetVehicleRespawnDelay",children:"GetVehicleRespawnDelay"}),": Get the respawn delay of a vehicle."]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"../callbacks/OnVehicleSpawn",children:"OnVehicleSpawn"}),": Called when a vehicle respawns."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"../callbacks/OnVehicleSirenStateChange",children:"OnVehicleSirenStateChange"}),": Called when a vehicle's siren is toggled on/off."]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"../resources/vehicleid",children:"Vehicle Models"}),": Comprehensive list of all vehicle models available in game."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"../resources/vehiclecolorid",children:"Vehicle Colour IDs"}),": List of all vehicle colour IDs."]}),"\n"]})]})}function o(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}}}]);