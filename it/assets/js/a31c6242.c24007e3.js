"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[7781],{28453:(e,i,t)=>{t.d(i,{R:()=>c,x:()=>p});var n=t(96540);const r={},s=n.createContext(r);function c(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function p(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),n.createElement(s.Provider,{value:i},e.children)}},40443:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>a,contentTitle:()=>p,default:()=>h,frontMatter:()=>c,metadata:()=>n,toc:()=>o});const n=JSON.parse('{"id":"tutorials/PickupGuide","title":"Pickup Guide","description":"A short tutorial that describes how to use pickups.","source":"@site/docs/tutorials/PickupGuide.md","sourceDirName":"tutorials","slug":"/tutorials/PickupGuide","permalink":"/it/docs/tutorials/PickupGuide","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/tutorials/PickupGuide.md","tags":[],"version":"current","frontMatter":{"title":"Pickup Guide","sidebar_label":"Pickup Guide"},"sidebar":"docsSidebar","previous":{"title":"Menu Guide","permalink":"/it/docs/tutorials/MenuGuide"},"next":{"title":"Plugin Development Guide","permalink":"/it/docs/tutorials/PluginDevelopmentGuide"}}');var r=t(74848),s=t(28453);const c={title:"Pickup Guide",sidebar_label:"Pickup Guide"},p=void 0,a={},o=[{value:"Define the pickupid",id:"define-the-pickupid",level:2},{value:"Creating the pickup",id:"creating-the-pickup",level:2},{value:"Choosing what it does",id:"choosing-what-it-does",level:3},{value:"Further Reading",id:"further-reading",level:2}];function d(e){const i={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.p,{children:"A short tutorial that describes how to use pickups."}),"\n",(0,r.jsx)(i.h2,{id:"define-the-pickupid",children:"Define the pickupid"}),"\n",(0,r.jsx)(i.p,{children:'The first thing to be done when creating pickups is creating a place to store their ID. This will be done in a global variable so it can be set when you create the pickup and read when you pick up a pickup, calling a callback with the ID of the pickup you picked up. For this example we will use the name "gMyPickup".'}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-pawn",children:"new gMyPickup;\n"})}),"\n",(0,r.jsx)(i.h2,{id:"creating-the-pickup",children:"Creating the pickup"}),"\n",(0,r.jsxs)(i.p,{children:["There are two ways to create pickups. ",(0,r.jsx)(i.a,{href:"../scripting/functions/CreatePickup",children:"CreatePickup"})," and ",(0,r.jsx)(i.a,{href:"../scripting/functions/AddStaticPickup",children:"AddStaticPickup"}),". AddStaticPickup doesn't return an ID when it is created, can't be destroyed and can only be used under OnGameModeInit, so for this example we will use ",(0,r.jsx)(i.a,{href:"../scripting/functions/CreatePickup",children:"CreatePickup"}),"."]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsxs)(i.strong,{children:["The syntax for ",(0,r.jsx)(i.a,{href:"../scripting/functions/CreatePickup",children:"CreatePickup"})," is:"]})}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Parameters:"})}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"model"}),(0,r.jsx)(i.th,{children:"The model you'd like to use for the pickup."})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"type"}),(0,r.jsx)(i.td,{children:"The pickup spawn type, see further down this page."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsxs)(i.td,{children:["Float",":X"]}),(0,r.jsx)(i.td,{children:"The X-coordinate for the pickup to show."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsxs)(i.td,{children:["Float",":Y"]}),(0,r.jsx)(i.td,{children:"The Y-coordinate for the pickup to show."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsxs)(i.td,{children:["Float",":Z"]}),(0,r.jsx)(i.td,{children:"The Z-coordinate for the pickup to show."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"Virtualworld"}),(0,r.jsx)(i.td,{children:"The virtual world ID of the pickup. A value of -1 will cause the pickup to display in all virtual worlds."})]})]})]}),"\n",(0,r.jsx)(i.p,{children:"For this example we will create a cash pickup at Grove Street."}),"\n",(0,r.jsxs)(i.p,{children:["Now we need to decide on a model to appear in the world, there are lots of models to choose from, some are listed on the external site ",(0,r.jsx)(i.a,{href:"https://dev.prineside.com/en/gtasa_samp_model_id",children:"here"}),", here choose model number 1274 which is dollar sign."]}),"\n",(0,r.jsxs)(i.p,{children:["Finally we need a ",(0,r.jsx)(i.a,{href:"../scripting/resources/pickuptypes",children:"Type"})," for the pickup, on the same page with the pickup models is a list of pickup types describing what the various ones do. We want this pickup to disappear when you pick it up, so you can't pick it up repeatedly, but to reappear after a few minutes so you can pick it up again, type 2 does just this."]}),"\n",(0,r.jsxs)(i.p,{children:["Pickups are most commonly created when the script starts, in ",(0,r.jsx)(i.a,{href:"../scripting/callbacks/OnGameModeInit",children:"OnGameModeInit"})," or ",(0,r.jsx)(i.a,{href:"../scripting/callbacks/OnFilterScriptInit",children:"OnFilterScriptInit"})," depending on the script type, however it can go in any function (for example you could create a weapon drop script which would use OnPlayerDeath to create weapon pickups)."]}),"\n",(0,r.jsx)(i.p,{children:"So here is the code to create our pickup, and store the ID in 'gMyPickup':"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-pawn",children:"gMyPickup = CreatePickup(1274, 2, 2491.7900, -1668.1653, 13.3438, -1);\n"})}),"\n",(0,r.jsx)(i.h3,{id:"choosing-what-it-does",children:"Choosing what it does"}),"\n",(0,r.jsxs)(i.p,{children:["When you pick up a pickup, ",(0,r.jsx)(i.a,{href:"../scripting/callbacks/OnPlayerPickUpPickup",children:"OnPlayerPickUpPickup"})," is called, passing playerid (the player that picked up a pickup) and pickupid (the ID of the pickup that was picked up)."]}),"\n",(0,r.jsxs)(i.p,{children:["Some pickup types are designed to work automatically, so there is no need to do anything under OnPlayerPickUpPickup. Check out the ",(0,r.jsx)(i.a,{href:"../scripting/resources/pickuptypes",children:"Pickup Types"})," page for more information."]}),"\n",(0,r.jsx)(i.p,{children:"When a player picks up our new pickup, we want to give them $100, to do this first we need to check that they have picked up our dollar pickup and not a different one. When we've done that, we can give them the $100:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-pawn",children:'public OnPlayerPickUpPickup(playerid, pickupid)\n{\n    // Check that the pickup ID of the pickup they picked up is gMyPickup\n    if(pickupid == gMyPickup)\n    {\n        // Message the player\n        SendClientMessage(playerid, 0xFFFFFFFF, "You received $100!");\n        // Give the player the money\n        GivePlayerMoney(playerid, 100);\n    }\n    // if you need to add more pickups, simply do this:\n    else if (pickupid == (some other pickup))\n    {\n        // Another pickup, do something else\n    }\n    return 1;\n}\n'})}),"\n",(0,r.jsx)(i.p,{children:"Congratulations, you now know how to create and handle pickups!"}),"\n",(0,r.jsx)(i.h2,{id:"further-reading",children:"Further Reading"}),"\n",(0,r.jsxs)(i.p,{children:["You can use the ",(0,r.jsx)(i.a,{href:"https://github.com/samp-incognito/samp-streamer-plugin",children:"Streamer"})," plugin to create unlimited pickups with ",(0,r.jsx)(i.a,{href:"https://github.com/samp-incognito/samp-streamer-plugin/wiki/Natives-(Pickups)",children:"CreateDynamicPickup"})]}),"\n",(0,r.jsxs)(i.p,{children:["You can also create per-player pickup with ",(0,r.jsx)(i.a,{href:"../scripting/functions/CreatePlayerPickup",children:"CreatePlayerPickup"}),"."]})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);