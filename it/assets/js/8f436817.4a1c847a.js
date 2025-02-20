"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[82880],{7831:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>n,toc:()=>o});const n=JSON.parse('{"id":"scripting/functions/GetPlayerObjectMaterialText","title":"GetPlayerObjectMaterialText","description":"Get the material text data from an index of the player-object.","source":"@site/docs/scripting/functions/GetPlayerObjectMaterialText.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerObjectMaterialText","permalink":"/it/docs/scripting/functions/GetPlayerObjectMaterialText","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetPlayerObjectMaterialText.md","tags":[{"inline":true,"label":"player","permalink":"/it/docs/tags/player"},{"inline":true,"label":"object","permalink":"/it/docs/tags/object"},{"inline":true,"label":"playerobject","permalink":"/it/docs/tags/playerobject"}],"version":"current","frontMatter":{"title":"GetPlayerObjectMaterialText","sidebar_label":"GetPlayerObjectMaterialText","description":"Get the material text data from an index of the player-object.","tags":["player","object","playerobject"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerObjectMaterial","permalink":"/it/docs/scripting/functions/GetPlayerObjectMaterial"},"next":{"title":"GetPlayerObjectModel","permalink":"/it/docs/scripting/functions/GetPlayerObjectModel"}}');var i=r(74848),l=r(28453);const a={title:"GetPlayerObjectMaterialText",sidebar_label:"GetPlayerObjectMaterialText",description:"Get the material text data from an index of the player-object.",tags:["player","object","playerobject"]},s=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components},{VersionWarn:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r,{version:"omp v1.1.0.2612"}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Get the material text data from an index of the player-object."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"playerid"}),(0,i.jsx)(t.td,{children:"The ID of the player."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"objectid"}),(0,i.jsx)(t.td,{children:"The ID of the player-object."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"materialIndex"}),(0,i.jsx)(t.td,{children:"The material index on the object. (0 to 15)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"text[]"}),(0,i.jsx)(t.td,{children:"An array into which to store the text, passed by reference."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"textSize"}),(0,i.jsx)(t.td,{children:"The size of the text."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["&OBJECT_MATERIAL_SIZE",":materialSize"]}),(0,i.jsx)(t.td,{children:"A variable in which to store the materialSize, passed by reference."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"fontFace[]"}),(0,i.jsx)(t.td,{children:"An array into which to store the fontFace, passed by reference."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"fontFaceSize"}),(0,i.jsx)(t.td,{children:"The size of the fontFace."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"&fontSize"}),(0,i.jsx)(t.td,{children:"A variable in which to store the fontSize, passed by reference."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["&bool",":bold"]}),(0,i.jsx)(t.td,{children:"A boolean variable in which to store the bold, passed by reference."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"&fontColour"}),(0,i.jsx)(t.td,{children:"A variable in which to store the fontColour, passed by reference."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"&backgroundColour"}),(0,i.jsx)(t.td,{children:"A variable in which to store the backgroundColour, passed by reference."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["&OBJECT_MATERIAL_TEXT_ALIGN",":textAlignment"]}),(0,i.jsx)(t.td,{children:"A variable in which to store the textAlignment, passed by reference."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"true"})," - The function was executed successfully."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"false"})," - The function failed to execute. The object specified does not exist or an invalid material index is specified."]}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:'new playerobjectid = CreatePlayerObject(playerid, 19174, 986.42767, -983.14850, 40.95220,   0.00000, 0.00000, 186.00000);\nSetPlayerObjectMaterialText(playerid, playerobjectid, "OPEN.MP", 0, OBJECT_MATERIAL_SIZE_256x128, "Arial", 38, true, 0xFF0000FF, 0x00000000, OBJECT_MATERIAL_TEXT_ALIGN_LEFT);\n\nnew \n    text[16],\n    OBJECT_MATERIAL_SIZE:materialSize,\n    fontFace[16],\n    fontSize,\n    bool:bold,\n    fontColour,\n    backgroundColour,\n    OBJECT_MATERIAL_TEXT_ALIGN:textAlignment;\n\nGetPlayerObjectMaterialText(playerid, playerobjectid, 0, text, sizeof(text), materialSize, fontFace, sizeof(fontFace), fontSize, bold, fontColour, backgroundColour, textAlignment);\n// text = "OPEN.MP"\n// materialSize = OBJECT_MATERIAL_SIZE_256x128\n// fontFace = "Arial"\n// fontSize = 38\n// bold = true\n// fontColour = 0xFF0000FF\n// backgroundColour = 0x00000000\n// textAlignment = OBJECT_MATERIAL_TEXT_ALIGN_LEFT\n'})}),"\n",(0,i.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"SetPlayerObjectMaterial",children:"SetPlayerObjectMaterial"}),": Replace the texture of a player-object with the texture from another model in the game."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"SetPlayerObjectMaterialText",children:"SetPlayerObjectMaterialText"}),": Replace the texture of a player object with text."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"IsPlayerObjectMaterialSlotUsed",children:"IsPlayerObjectMaterialSlotUsed"}),": Checks if a slot of player-object material is used."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"GetPlayerObjectMaterial",children:"GetPlayerObjectMaterial"}),": Get the material data from an index of the player-object."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"GetObjectMaterialText",children:"GetObjectMaterialText"}),": Get the material text data from an index of the object."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>s});var n=r(96540);const i={},l=n.createContext(i);function a(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);