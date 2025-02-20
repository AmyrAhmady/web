"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[43610],{28453:(e,t,r)=>{r.d(t,{R:()=>n,x:()=>s});var l=r(96540);const a={},i=l.createContext(a);function n(e){const t=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:n(e.components),l.createElement(i.Provider,{value:t},e.children)}},87708:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>o});const l=JSON.parse('{"id":"scripting/functions/IsPlayerObjectMaterialSlotUsed","title":"IsPlayerObjectMaterialSlotUsed","description":"Checks if a slot of player-object material is used.","source":"@site/docs/scripting/functions/IsPlayerObjectMaterialSlotUsed.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/IsPlayerObjectMaterialSlotUsed","permalink":"/pt-BR/docs/scripting/functions/IsPlayerObjectMaterialSlotUsed","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/IsPlayerObjectMaterialSlotUsed.md","tags":[{"inline":true,"label":"player","permalink":"/pt-BR/docs/tags/player"},{"inline":true,"label":"object","permalink":"/pt-BR/docs/tags/object"},{"inline":true,"label":"playerobject","permalink":"/pt-BR/docs/tags/playerobject"}],"version":"current","frontMatter":{"title":"IsPlayerObjectMaterialSlotUsed","sidebar_label":"IsPlayerObjectMaterialSlotUsed","description":"Checks if a slot of player-object material is used.","tags":["player","object","playerobject"]},"sidebar":"docsSidebar","previous":{"title":"IsPlayerNPC","permalink":"/pt-BR/docs/scripting/functions/IsPlayerNPC"},"next":{"title":"IsPlayerObjectMoving","permalink":"/pt-BR/docs/scripting/functions/IsPlayerObjectMoving"}}');var a=r(74848),i=r(28453);const n={title:"IsPlayerObjectMaterialSlotUsed",sidebar_label:"IsPlayerObjectMaterialSlotUsed",description:"Checks if a slot of player-object material is used.",tags:["player","object","playerobject"]},s=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{VersionWarn:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r,{version:"omp v1.1.0.2612"}),"\n",(0,a.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(t.p,{children:"Checks if a slot of player-object material is used."}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"playerid"}),(0,a.jsx)(t.td,{children:"The ID of the player."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"objectid"}),(0,a.jsx)(t.td,{children:"The ID of the player-object."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"materialIndex"}),(0,a.jsx)(t.td,{children:"The material index on the object. (0 to 15)"})]})]})]}),"\n",(0,a.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(t.p,{children:"The function returns the type of material slot usage."}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"0"})," - None"]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"1"})," - Material"]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"2"})," - Text"]}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-c",children:'new playerobjectid = CreatePlayerObject(playerid, 19371, 978.71143, -925.25708, 42.63720,   0.00000, 0.00000, 2.00000);\nSetPlayerObjectMaterial(playerid, playerobjectid, 0, 19341, "egg_texts", "easter_egg01", 0xFFFFFFFF);\n\nnew type = IsPlayerObjectMaterialSlotUsed(playerid, playerobjectid, 0);\n// type = 1\n'})}),"\n",(0,a.jsx)(t.p,{children:"Another example:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-c",children:'new playerobjectid = CreatePlayerObject(playerid, 19174, 986.42767, -983.14850, 40.95220,   0.00000, 0.00000, 186.00000);\nSetPlayerObjectMaterialText(playerid, playerobjectid, "OPEN.MP", 0, OBJECT_MATERIAL_SIZE_256x128, "Arial", 38, true, 0xFF0000FF, 0x00000000, OBJECT_MATERIAL_TEXT_ALIGN_LEFT);\n\nnew type = IsPlayerObjectMaterialSlotUsed(playerid, playerobjectid, 0);\n// type = 2\n'})}),"\n",(0,a.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"SetPlayerObjectMaterial",children:"SetPlayerObjectMaterial"}),": Replace the texture of a player-object with the texture from another model in the game."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"SetPlayerObjectMaterialText",children:"SetPlayerObjectMaterialText"}),": Replace the texture of a player object with text."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"GetPlayerObjectMaterial",children:"GetPlayerObjectMaterial"}),": Get the material data from an index of the player-object."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"GetPlayerObjectMaterialText",children:"GetPlayerObjectMaterialText"}),": Get the material text data from an index of the player-object."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"IsObjectMaterialSlotUsed",children:"IsObjectMaterialSlotUsed"}),": Checks if a slot of object material is used."]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}}}]);