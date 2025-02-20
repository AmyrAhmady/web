"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[64997],{28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var i=n(96540);const o={},r=i.createContext(o);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:t},e.children)}},90932:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"scripting/functions/MoveObject","title":"MoveObject","description":"Move an object to a new position with a set speed.","source":"@site/docs/scripting/functions/MoveObject.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/MoveObject","permalink":"/ar/docs/scripting/functions/MoveObject","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/MoveObject.md","tags":[{"inline":true,"label":"object","permalink":"/ar/docs/tags/object"}],"version":"current","frontMatter":{"title":"MoveObject","sidebar_label":"MoveObject","description":"Move an object to a new position with a set speed.","tags":["object"]},"sidebar":"docsSidebar","previous":{"title":"ManualVehicleEngineAndLights","permalink":"/ar/docs/scripting/functions/ManualVehicleEngineAndLights"},"next":{"title":"MovePlayerObject","permalink":"/ar/docs/scripting/functions/MovePlayerObject"}}');var o=n(74848),r=n(28453);const s={title:"MoveObject",sidebar_label:"MoveObject",description:"Move an object to a new position with a set speed.",tags:["object"]},c=void 0,l={},a=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,o.jsx)(t.p,{children:"Move an object to a new position with a set speed. Players/vehicles will 'surf' the object as it moves."}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Name"}),(0,o.jsx)(t.th,{children:"Description"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"objectid"}),(0,o.jsx)(t.td,{children:"The ID of the object to move."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsxs)(t.td,{children:["Float",":targetX"]}),(0,o.jsx)(t.td,{children:"The X coordinate to move the object to."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsxs)(t.td,{children:["Float",":targetY"]}),(0,o.jsx)(t.td,{children:"The Y coordinate to move the object to."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsxs)(t.td,{children:["Float",":targetZ"]}),(0,o.jsx)(t.td,{children:"The Z coordinate to move the object to."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsxs)(t.td,{children:["Float",":speed"]}),(0,o.jsx)(t.td,{children:"The speed at which to move the object (units per second)."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsxs)(t.td,{children:["Float",":rotationX"]}),(0,o.jsx)(t.td,{children:"The FINAL X rotation (optional)."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsxs)(t.td,{children:["Float",":rotationY"]}),(0,o.jsx)(t.td,{children:"The FINAL Y rotation (optional)."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsxs)(t.td,{children:["Float",":rotationZ"]}),(0,o.jsx)(t.td,{children:"The FINAL Z rotation (optional)."})]})]})]}),"\n",(0,o.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,o.jsx)(t.p,{children:"The time it will take for the object to move in milliseconds."}),"\n",(0,o.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-c",children:'new gAirportGate; // Somewhere at the top of your script\n\npublic OnGameModeInit()\n{\n    gAirportGate = CreateObject(980, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);\n    return 1;\n}\n\npublic OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (strcmp(cmdtext, "/moveobject", true) == 0)\n    {\n        new\n            string[64],\n            moveTime = MoveObject(gAirportGate, 0.0, 0.0, 10.0, 2.00);\n\n        format(string, sizeof(string), "Object will finish moving in %d milliseconds", moveTime);\n        SendClientMessage(playerid, 0xFF0000FF, string);\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,o.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,o.jsx)(t.admonition,{type:"warning",children:(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["This function can be used to make objects rotate smoothly. In order to achieve this however, the object must also be ",(0,o.jsx)(t.strong,{children:"moved"}),". The specified rotation is the rotation the object will have after the movement. Hence the object will not rotate when no movement is applied. For a script example take a look at the ferriswheel.pwn filterscript made by Kye included in the server package (SA-MP 0.3d and above)."]}),"\n",(0,o.jsx)(t.li,{children:"To fully understand the above note, you can (but not limited to) increase the z position by (+0.001) and then (-0.001) after moving it again, as not changing the X,Y or Z will not rotate the object."}),"\n"]})}),"\n",(0,o.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"CreateObject",children:"CreateObject"}),": Create an object."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"DestroyObject",children:"DestroyObject"}),": Destroy an object."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"IsValidObject",children:"IsValidObject"}),": Checks if a certain object is vaild."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"IsObjectMoving",children:"IsObjectMoving"}),": Check if the object is moving."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"StopObject",children:"StopObject"}),": Stop an object from moving."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"SetObjectPos",children:"SetObjectPos"}),": Set the position of an object."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"SetObjectRot",children:"SetObjectRot"}),": Set the rotation of an object."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"GetObjectPos",children:"GetObjectPos"}),": Locate an object."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"GetObjectRot",children:"GetObjectRot"}),": Check the rotation of an object."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"AttachObjectToPlayer",children:"AttachObjectToPlayer"}),": Attach an object to a player."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"CreatePlayerObject",children:"CreatePlayerObject"}),": Create an object for only one player."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"DestroyPlayerObject",children:"DestroyPlayerObject"}),": Destroy a player object."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"IsValidPlayerObject",children:"IsValidPlayerObject"}),": Checks if a certain player object is vaild."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"MovePlayerObject",children:"MovePlayerObject"}),": Move a player object."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"StopPlayerObject",children:"StopPlayerObject"}),": Stop a player object from moving."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"IsPlayerObjectMoving",children:"IsPlayerObjectMoving"}),": Check if the player object is moving."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"SetPlayerObjectPos",children:"SetPlayerObjectPos"}),": Set the position of a player object."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"SetPlayerObjectRot",children:"SetPlayerObjectRot"}),": Set the rotation of a player object."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"GetPlayerObjectPos",children:"GetPlayerObjectPos"}),": Locate a player object."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"GetPlayerObjectRot",children:"GetPlayerObjectRot"}),": Check the rotation of a player object."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"AttachPlayerObjectToPlayer",children:"AttachPlayerObjectToPlayer"}),": Attach a player object to a player."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}}}]);