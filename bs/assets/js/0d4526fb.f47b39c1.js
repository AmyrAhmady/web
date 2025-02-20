"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[98322],{28453:(e,i,r)=>{r.d(i,{R:()=>l,x:()=>c});var a=r(96540);const n={},t=a.createContext(n);function l(e){const i=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),a.createElement(t.Provider,{value:i},e.children)}},67146:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>s});const a=JSON.parse('{"id":"scripting/functions/SetVehicleParamsForPlayer","title":"SetVehicleParamsForPlayer","description":"Postavi parametre vozila za igra\u010da.","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/SetVehicleParamsForPlayer.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetVehicleParamsForPlayer","permalink":"/bs/docs/scripting/functions/SetVehicleParamsForPlayer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/SetVehicleParamsForPlayer.md","tags":[{"inline":true,"label":"player","permalink":"/bs/docs/tags/player"},{"inline":true,"label":"vehicle","permalink":"/bs/docs/tags/vehicle"}],"version":"current","frontMatter":{"title":"SetVehicleParamsForPlayer","sidebar_label":"SetVehicleParamsForPlayer","description":"Postavi parametre vozila za igra\u010da.","tags":["player","vehicle"]},"sidebar":"docsSidebar","previous":{"title":"SetVehicleParamsEx","permalink":"/bs/docs/scripting/functions/SetVehicleParamsEx"},"next":{"title":"SetVehicleParamsSirenState","permalink":"/bs/docs/scripting/functions/SetVehicleParamsSirenState"}}');var n=r(74848),t=r(28453);const l={title:"SetVehicleParamsForPlayer",sidebar_label:"SetVehicleParamsForPlayer",description:"Postavi parametre vozila za igra\u010da.",tags:["player","vehicle"]},c=void 0,o={},s=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Zabilje\u0161ke",id:"zabilje\u0161ke",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function d(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,n.jsx)(i.p,{children:"Postavi parametre vozila za igra\u010da."}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Ime"}),(0,n.jsx)(i.th,{children:"Deskripcija"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"vehicle"}),(0,n.jsx)(i.td,{children:"ID vozila za postaviti parametre."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"playerid"}),(0,n.jsx)(i.td,{children:"ID igra\u010da za kojeg treba postaviti parametre vozila."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"objective"}),(0,n.jsx)(i.td,{children:"0 da onemogu\u0107ite cilj (objective) ili 1 da ga prika\u017eete. Ovo je klimava \u017euta strelica iznad vozila."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"doorslocked"}),(0,n.jsx)(i.td,{children:"0 za otklju\u010dati vrata ili 1 da ih zaklju\u010date."})]})]})]}),"\n",(0,n.jsx)(i.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(i.p,{children:"1: Funkcija uspje\u0161no izvr\u0161ena."}),"\n",(0,n.jsx)(i.p,{children:"0: Funkcija neuspje\u0161no izvr\u0161ena. Navedeni igra\u010d i/ili vozilo ne postoje."}),"\n",(0,n.jsx)(i.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-c",children:'// nekad ranije:\nSetVehicleParamsForPlayer(iPlayerVehicle, iPlayerID, 1, 0);\n\n// nekad kasnije kada \u017eelite respawnovati auto:\nnew\n    iEngine, iLights, iAlarm,\n    iDoors, iBonnet, iBoot,\n    iObjective;\n\nGetVehicleParamsEx(iPlayerVehicle, iEngine, iLights, iAlarm, iDoors, iBonnet, iBoot, iObjective);\nSetVehicleParamsEx(iPlayerVehicle, iEngine, iLights, iAlarm, iDoors, iBonnet, iBoot, 0);\n// Zaklju\u010dava svoje vozilo za sve igra\u010de, osim igra\u010da koji je koristio komandu.\npublic OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (!strcmp(cmdtext,"/lock",true))\n    {\n        if (!IsPlayerInAnyVehicle(playerid)) return SendClientMessage(playerid,0xFFFFFFAA,"Mora\u0161 biti unutar vozila.");\n        for (new i = 0; i < MAX_PLAYERS; i++)\n        {\n            if (i == playerid) continue;\n            SetVehicleParamsForPlayer(GetPlayerVehicleID(playerid),i,0,1);\n        }\n        return 1;\n    }\n    return 0;\n}\n// Will show vehicle markers for players streaming in for 0.3a+\nnew iVehicleObjective[MAX_VEHICLES][2];\n\npublic OnGameModeInit() //ili drugi callback\n{\n    new temp = AddStaticVehicleEx(400, 0.0, 0.0, 5.0, 0.0, 0,0, -1); //ID 1\n    iVehicleObjective[temp][0] = 1; //Marker\n    iVehicleObjective[temp][1] = 0; //Zakluj\u010davanje vrata\n    return 1;\n}\n\nstock SetVehicleParamsForPlayerEx(vehicleid, playerid, objective, doorslocked)\n{\n    SetVehicleParamsForPlayer(vehicleid, playerid, objective, doorslocked);\n    iVehicleObjective[vehicleid][0] = objective;\n    iVehicleObjective[vehicleid][1] = doorslocked;\n}\n\npublic OnVehicleStreamIn(vehicleid, forplayerid)\n{\n    SetVehicleParamsForPlayer(vehicleid, forplayerid, iVehicleObjective[vehicleid][0], iVehicleObjective[vehicleid][1]);\n}\n//Top\nnew myMarkedCar;\n\npublic OnGameModeInit() //Or another callback\n{\n    myMarkedCar = AddStaticVehicleEx(400, 0.0, 0.0, 5.0, 0.0, 0,0, -1); //Npr: Black Landstalker u blizini Blueberry Acres-a\n    return 1;\n}\n\n//Gdje god \u017eelite\npublic OnVehicleStreamIn(vehicleid, forplayerid)\n{\n    if (vehicleid == myMarkedCar)\n    {\n        SetVehicleParamsForPlayer(myMarkedCar, forplayerid, 1, 0); // marker mo\u017ee biti vidljiv samo ako je vozilo u\u010ditano za igra\u010da\n    }\n    return 1;\n}\n'})}),"\n",(0,n.jsx)(i.h2,{id:"zabilje\u0161ke",children:"Zabilje\u0161ke"}),"\n",(0,n.jsx)(i.admonition,{type:"tip",children:(0,n.jsx)(i.p,{children:"Vozila se moraju respawnovati kako bi se 'objective' uklonio."})}),"\n",(0,n.jsx)(i.admonition,{type:"warning",children:(0,n.jsx)(i.p,{children:"Od 0.3a verzije morati \u0107ete ponovo primijeniti ovu funkciju kada je OnVehicleStreamIn pozvan."})}),"\n",(0,n.jsx)(i.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"SetVehicleParamsEx",children:"SetVehicleParamsEx"}),": Postavlja parametre vozila za sve igra\u010de."]}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}}}]);