"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[66444],{28453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>s});var a=r(96540);const i={},n=a.createContext(i);function l(e){const t=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),a.createElement(n.Provider,{value:t},e.children)}},65985:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>o});const a=JSON.parse('{"id":"scripting/functions/GetPlayerObjectMaterial","title":"GetPlayerObjectMaterial","description":"Get the material data from an index of the player-object.","source":"@site/docs/scripting/functions/GetPlayerObjectMaterial.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetPlayerObjectMaterial","permalink":"/bs/docs/scripting/functions/GetPlayerObjectMaterial","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetPlayerObjectMaterial.md","tags":[{"inline":true,"label":"player","permalink":"/bs/docs/tags/player"},{"inline":true,"label":"object","permalink":"/bs/docs/tags/object"},{"inline":true,"label":"playerobject","permalink":"/bs/docs/tags/playerobject"}],"version":"current","frontMatter":{"title":"GetPlayerObjectMaterial","sidebar_label":"GetPlayerObjectMaterial","description":"Get the material data from an index of the player-object.","tags":["player","object","playerobject"]},"sidebar":"docsSidebar","previous":{"title":"GetPlayerObjectDrawDistance","permalink":"/bs/docs/scripting/functions/GetPlayerObjectDrawDistance"},"next":{"title":"GetPlayerObjectMaterialText","permalink":"/bs/docs/scripting/functions/GetPlayerObjectMaterialText"}}');var i=r(74848),n=r(28453);const l={title:"GetPlayerObjectMaterial",sidebar_label:"GetPlayerObjectMaterial",description:"Get the material data from an index of the player-object.",tags:["player","object","playerobject"]},s=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components},{VersionWarn:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r,{version:"omp v1.1.0.2612"}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Get the material data from an index of the player-object."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"playerid"}),(0,i.jsx)(t.td,{children:"The ID of the player."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"objectid"}),(0,i.jsx)(t.td,{children:"The ID of the player-object."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"materialIndex"}),(0,i.jsx)(t.td,{children:"The material index on the object. (0 to 15)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"&modelid"}),(0,i.jsx)(t.td,{children:"A variable in which to store the model ID, passed by reference."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"textureLibrary[]"}),(0,i.jsx)(t.td,{children:"An array into which to store the textureLibrary, passed by reference."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"textureLibrarySize"}),(0,i.jsx)(t.td,{children:"The size of the textureLibrary."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"textureName[]"}),(0,i.jsx)(t.td,{children:"An array into which to store the textureName, passed by reference."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"textureNameSize"}),(0,i.jsx)(t.td,{children:"The size of the textureName."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"&materialColour"}),(0,i.jsx)(t.td,{children:"A variable in which to store the materialColour, passed by reference."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"true"})," - The function was executed successfully."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"false"})," - The function failed to execute. The object specified does not exist or an invalid material index is specified."]}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:'new playerobjectid = CreatePlayerObject(playerid, 19371, 978.71143, -925.25708, 42.63720,   0.00000, 0.00000, 2.00000);\nSetPlayerObjectMaterial(playerid, playerobjectid, 0, 19341, "egg_texts", "easter_egg01", 0xFFFFFFFF);\n\nnew \n    modelid,\n    textureLibrary[16],\n    textureName[16],\n    materialColour;\n\nGetPlayerObjectMaterial(playerid, playerobjectid, 0, modelid, textureLibrary, sizeof(textureLibrary), textureName, sizeof(textureName), materialColour);\n// modelid = 19341\n// textureLibrary = "egg_texts"\n// textureName = "easter_egg01"\n// materialColour = 0xFFFFFFFF\n'})}),"\n",(0,i.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"SetPlayerObjectMaterial",children:"SetPlayerObjectMaterial"}),": Replace the texture of a player-object with the texture from another model in the game."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"SetPlayerObjectMaterialText",children:"SetPlayerObjectMaterialText"}),": Replace the texture of a player object with text."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"IsPlayerObjectMaterialSlotUsed",children:"IsPlayerObjectMaterialSlotUsed"}),": Checks if a slot of player-object material is used."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"GetPlayerObjectMaterialText",children:"GetPlayerObjectMaterialText"}),": Get the material text data from an index of the player-object."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"GetObjectMaterial",children:"GetObjectMaterial"}),": Get the material data from an index of the object."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);