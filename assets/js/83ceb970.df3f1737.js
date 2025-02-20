"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[29526],{28453:(e,l,i)=>{i.d(l,{R:()=>t,x:()=>r});var s=i(96540);const n={},c=s.createContext(n);function t(e){const l=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function r(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),s.createElement(c.Provider,{value:l},e.children)}},60426:(e,l,i)=>{i.r(l),i.d(l,{assets:()=>d,contentTitle:()=>r,default:()=>o,frontMatter:()=>t,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"scripting/functions/AddStaticVehicleEx","title":"AddStaticVehicleEx","description":"Adds a \'static\' vehicle (models are pre-loaded for players) to the gamemode.","source":"@site/docs/scripting/functions/AddStaticVehicleEx.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/AddStaticVehicleEx","permalink":"/docs/scripting/functions/AddStaticVehicleEx","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/AddStaticVehicleEx.md","tags":[{"inline":true,"label":"vehicle","permalink":"/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"AddStaticVehicleEx","sidebar_label":"AddStaticVehicleEx","description":"Adds a \'static\' vehicle (models are pre-loaded for players) to the gamemode.","tags":["vehicle"]},"sidebar":"docsSidebar","previous":{"title":"AddStaticVehicle","permalink":"/docs/scripting/functions/AddStaticVehicle"},"next":{"title":"AddVehicleComponent","permalink":"/docs/scripting/functions/AddVehicleComponent"}}');var n=i(74848),c=i(28453);const t={title:"AddStaticVehicleEx",sidebar_label:"AddStaticVehicleEx",description:"Adds a 'static' vehicle (models are pre-loaded for players) to the gamemode.",tags:["vehicle"]},r=void 0,d={},a=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2},{value:"Related Resources",id:"related-resources",level:2}];function h(e){const l={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(l.p,{children:"Adds a 'static' vehicle (models are pre-loaded for players) to the gamemode."}),"\n",(0,n.jsx)(l.p,{children:"Differs from AddStaticVehicle in only one way: allows a respawn time to be set for when the vehicle is left unoccupied by the driver."}),"\n",(0,n.jsxs)(l.table,{children:[(0,n.jsx)(l.thead,{children:(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.th,{children:"Name"}),(0,n.jsx)(l.th,{children:"Description"})]})}),(0,n.jsxs)(l.tbody,{children:[(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{children:"modelid"}),(0,n.jsxs)(l.td,{children:["The ",(0,n.jsx)(l.a,{href:"../resources/vehicleid",children:"Model ID"})," for the vehicle."]})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsxs)(l.td,{children:["Float",":spawnX"]}),(0,n.jsx)(l.td,{children:"The X-coordinate for the vehicle."})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsxs)(l.td,{children:["Float",":spawnY"]}),(0,n.jsx)(l.td,{children:"The Y-coordinate for the vehicle."})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsxs)(l.td,{children:["Float",":spawnZ"]}),(0,n.jsx)(l.td,{children:"The Z-coordinate for the vehicle."})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsxs)(l.td,{children:["Float",":angle"]}),(0,n.jsx)(l.td,{children:"The facing - angle for the vehicle."})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{children:(0,n.jsx)(l.a,{href:"../resources/vehiclecolorid",children:"colour1"})}),(0,n.jsx)(l.td,{children:"The primary colour ID."})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{children:(0,n.jsx)(l.a,{href:"../resources/vehiclecolorid",children:"colour2"})}),(0,n.jsx)(l.td,{children:"The secondary colour ID."})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsx)(l.td,{children:"respawnDelay"}),(0,n.jsx)(l.td,{children:"The delay until the car is respawned without a driver, in seconds."})]}),(0,n.jsxs)(l.tr,{children:[(0,n.jsxs)(l.td,{children:["bool",":addSiren"]}),(0,n.jsx)(l.td,{children:"Has a default value 'false'. Enables the vehicle to have a siren, providing the vehicle has a horn."})]})]})]}),"\n",(0,n.jsx)(l.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(l.p,{children:"The vehicle ID of the vehicle created (1 - MAX_VEHICLES)."}),"\n",(0,n.jsx)(l.p,{children:"INVALID_VEHICLE_ID (65535) if vehicle was not created (vehicle limit reached or invalid vehicle model ID passed)."}),"\n",(0,n.jsx)(l.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-c",children:"public OnGameModeInit()\n{\n    // Add a Hydra (520) to the game that will respawn 15 seconds after being left\n    AddStaticVehicleEx(520, 2109.1763, 1503.0453, 32.2887, 82.2873, -1, -1, 15);\n\n    return 1;\n}\n"})}),"\n",(0,n.jsx)(l.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsxs)(l.li,{children:[(0,n.jsx)(l.a,{href:"AddStaticVehicle",children:"AddStaticVehicle"}),": Add a static vehicle."]}),"\n",(0,n.jsxs)(l.li,{children:[(0,n.jsx)(l.a,{href:"CreateVehicle",children:"CreateVehicle"}),": Create a vehicle."]}),"\n",(0,n.jsxs)(l.li,{children:[(0,n.jsx)(l.a,{href:"DestroyVehicle",children:"DestroyVehicle"}),": Destroy a vehicle."]}),"\n",(0,n.jsxs)(l.li,{children:[(0,n.jsx)(l.a,{href:"GetVehicleParamsSirenState",children:"GetVehicleParamsSirenState"}),": Check whether a vehicle's siren is on or off."]}),"\n",(0,n.jsxs)(l.li,{children:[(0,n.jsx)(l.a,{href:"SetVehicleSpawnInfo",children:"SetVehicleSpawnInfo"}),": Adjusts vehicle model, spawn location, colours, respawn delay and interior."]}),"\n",(0,n.jsxs)(l.li,{children:[(0,n.jsx)(l.a,{href:"GetVehicleSpawnInfo",children:"GetVehicleSpawnInfo"}),": Gets the vehicle spawn location and colours."]}),"\n",(0,n.jsxs)(l.li,{children:[(0,n.jsx)(l.a,{href:"ChangeVehicleColours",children:"ChangeVehicleColours"}),": Change a vehicle's primary and secondary colors."]}),"\n",(0,n.jsxs)(l.li,{children:[(0,n.jsx)(l.a,{href:"GetVehicleColours",children:"GetVehicleColours"}),": Gets the vehicle colours."]}),"\n",(0,n.jsxs)(l.li,{children:[(0,n.jsx)(l.a,{href:"SetVehicleRespawnDelay",children:"SetVehicleRespawnDelay"}),": Set the respawn delay of a vehicle."]}),"\n",(0,n.jsxs)(l.li,{children:[(0,n.jsx)(l.a,{href:"GetVehicleRespawnDelay",children:"GetVehicleRespawnDelay"}),": Get the respawn delay of a vehicle."]}),"\n"]}),"\n",(0,n.jsx)(l.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsxs)(l.li,{children:[(0,n.jsx)(l.a,{href:"../callbacks/OnVehicleSpawn",children:"OnVehicleSpawn"}),": Called when a vehicle respawns."]}),"\n",(0,n.jsxs)(l.li,{children:[(0,n.jsx)(l.a,{href:"../callbacks/OnVehicleSirenStateChange",children:"OnVehicleSirenStateChange"}),": Called when a vehicle's siren is toggled on/off."]}),"\n"]}),"\n",(0,n.jsx)(l.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsxs)(l.li,{children:[(0,n.jsx)(l.a,{href:"../resources/vehicleid",children:"Vehicle Models"}),": Comprehensive list of all vehicle models available in game."]}),"\n",(0,n.jsxs)(l.li,{children:[(0,n.jsx)(l.a,{href:"../resources/vehiclecolorid",children:"Vehicle Colour IDs"}),": List of all vehicle colour IDs."]}),"\n"]})]})}function o(e={}){const{wrapper:l}={...(0,c.R)(),...e.components};return l?(0,n.jsx)(l,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}}}]);