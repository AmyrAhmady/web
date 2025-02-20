"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[10984],{867:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"scripting/callbacks/OnPlayerWeaponShot","title":"OnPlayerWeaponShot","description":"This callback is called when a player fires a weapon.","source":"@site/docs/scripting/callbacks/OnPlayerWeaponShot.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerWeaponShot","permalink":"/fil/docs/scripting/callbacks/OnPlayerWeaponShot","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnPlayerWeaponShot.md","tags":[{"inline":true,"label":"player","permalink":"/fil/docs/tags/player"}],"version":"current","frontMatter":{"title":"OnPlayerWeaponShot","sidebar_label":"OnPlayerWeaponShot","description":"This callback is called when a player fires a weapon.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerUpdate","permalink":"/fil/docs/scripting/callbacks/OnPlayerUpdate"},"next":{"title":"OnRconCommand","permalink":"/fil/docs/scripting/callbacks/OnRconCommand"}}');var l=n(74848),a=n(28453);const s={title:"OnPlayerWeaponShot",sidebar_label:"OnPlayerWeaponShot",description:"This callback is called when a player fires a weapon.",tags:["player"]},r=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Callbacks",id:"related-callbacks",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Related Resources",id:"related-resources",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(t.p,{children:"This callback is called when a player fires a weapon. Only firearms are supported."}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Name"}),(0,l.jsx)(t.th,{children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"playerid"}),(0,l.jsx)(t.td,{children:"The ID of the player who fired the weapon."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{children:["WEAPON",":weaponid"]}),(0,l.jsxs)(t.td,{children:["The ID of the ",(0,l.jsx)(t.a,{href:"../resources/weaponids",children:"weapon"})," fired by the player."]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{children:["BULLET_HIT_TYPE",":hittype"]}),(0,l.jsxs)(t.td,{children:["The ",(0,l.jsx)(t.a,{href:"../resources/bullethittypes",children:"type"})," of target hit by the shot."]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"hitid"}),(0,l.jsx)(t.td,{children:"The ID of the player, vehicle, or object that was hit."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{children:["Float",":fX"]}),(0,l.jsx)(t.td,{children:"The X coordinate where the shot hit."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{children:["Float",":fY"]}),(0,l.jsx)(t.td,{children:"The Y coordinate where the shot hit."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsxs)(t.td,{children:["Float",":fZ"]}),(0,l.jsx)(t.td,{children:"The Z coordinate where the shot hit."})]})]})]}),"\n",(0,l.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsx)(t.p,{children:"0 - Prevent the bullet from causing damage."}),"\n",(0,l.jsx)(t.p,{children:"1 - Allow the bullet to cause damage."}),"\n",(0,l.jsx)(t.p,{children:"It is always called first in filterscripts so returning 0 there also blocks other scripts from processing it."}),"\n",(0,l.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-c",children:'public OnPlayerWeaponShot(playerid, WEAPON:weaponid, BULLET_HIT_TYPE:hittype, hitid, Float:fX, Float:fY, Float:fZ)\n{\n    new string[144];\n    format(string, sizeof(string), "Weapon %i fired. hittype: %i   hitid: %i   pos: %f, %f, %f", weaponid, hittype, hitid, fX, fY, fZ);\n    SendClientMessage(playerid, -1, string);\n    return 1;\n}\n'})}),"\n",(0,l.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,l.jsxs)(t.admonition,{type:"tip",children:[(0,l.jsx)(t.p,{children:"This callback is only called when lag compensation is enabled. If hittype is:"}),(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"BULLET_HIT_TYPE_NONE: The fX, fY, and fZ parameters are absolute coordinates. These will return 0.0 if nothing was hit (e.g., a distant object that the bullet can't reach)."}),"\n",(0,l.jsx)(t.li,{children:"Other values: The fX, fY, and fZ values are offsets relative to hitid."}),"\n"]})]}),"\n",(0,l.jsxs)(t.admonition,{type:"tip",children:[(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.a,{href:"../functions/GetPlayerLastShotVectors",children:"GetPlayerLastShotVectors"})," can be used in this callback for more detailed bullet vector information."]}),(0,l.jsx)(t.h1,{id:"known-bugs-and-issues",children:"Known bugs and issues"}),(0,l.jsx)(t.admonition,{type:"warning",children:(0,l.jsx)(t.p,{children:"This callback isn't called when firing from a vehicle as the driver or when shooting while looking backward with the aim enabled (shooting into the air)."})})]}),"\n",(0,l.jsx)(t.admonition,{type:"warning",children:(0,l.jsx)(t.p,{children:"When shooting a player inside a vehicle, this callback will be triggered as BULLET_HIT_TYPE_VEHICLE with the correct hitid (the hit player's vehicleid). It won't be triggered as BULLET_HIT_TYPE_PLAYER."})}),"\n",(0,l.jsx)(t.admonition,{type:"warning",children:(0,l.jsx)(t.p,{children:"Partially fixed in SA-MP 0.3.7: If fake weapon data is sent by a malicious client, other players' clients may freeze or crash. To prevent this, check if the reported weaponid can, in fact, fire projectiles."})}),"\n",(0,l.jsx)(t.admonition,{type:"warning",children:(0,l.jsx)(t.p,{children:"This callback is not called when driving-by as a driver, firing the turret of a Seasparrow, Hunter, or any other armed vehicle."})}),"\n",(0,l.jsx)(t.h2,{id:"related-callbacks",children:"Related Callbacks"}),"\n",(0,l.jsx)(t.p,{children:"The following callbacks might be useful, as they're related to this callback in one way or another."}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"OnPlayerGiveDamage",children:"OnPlayerGiveDamage"}),": This callback is called when a player gives damage."]}),"\n"]}),"\n",(0,l.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsx)(t.p,{children:"The following functions might be useful, as they're related to this callback in one way or another."}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"../functions/GetPlayerLastShotVectors",children:"GetPlayerLastShotVectors"}),": Retrieves the vector of the last shot a player fired."]}),"\n"]}),"\n",(0,l.jsx)(t.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"../resources/bullethittypes",children:"Bullet Hit Types"})}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>r});var i=n(96540);const l={},a=i.createContext(l);function s(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);