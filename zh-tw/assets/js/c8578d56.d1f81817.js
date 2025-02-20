"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[6367],{15667:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"scripting/functions/SetPlayerObjectMaterialText","title":"SetPlayerObjectMaterialText","description":"Replace the texture of a player object with text.","source":"@site/docs/scripting/functions/SetPlayerObjectMaterialText.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetPlayerObjectMaterialText","permalink":"/zh-tw/docs/scripting/functions/SetPlayerObjectMaterialText","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/SetPlayerObjectMaterialText.md","tags":[{"inline":true,"label":"player","permalink":"/zh-tw/docs/tags/player"},{"inline":true,"label":"object","permalink":"/zh-tw/docs/tags/object"},{"inline":true,"label":"playerobject","permalink":"/zh-tw/docs/tags/playerobject"}],"version":"current","frontMatter":{"title":"SetPlayerObjectMaterialText","sidebar_label":"SetPlayerObjectMaterialText","description":"Replace the texture of a player object with text.","tags":["player","object","playerobject"]},"sidebar":"docsSidebar","previous":{"title":"SetPlayerObjectMaterial","permalink":"/zh-tw/docs/scripting/functions/SetPlayerObjectMaterial"},"next":{"title":"SetPlayerObjectMoveSpeed","permalink":"/zh-tw/docs/scripting/functions/SetPlayerObjectMoveSpeed"}}');var i=r(74848),l=r(28453);const s={title:"SetPlayerObjectMaterialText",sidebar_label:"SetPlayerObjectMaterialText",description:"Replace the texture of a player object with text.",tags:["player","object","playerobject"]},a=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2},{value:"Advanaced Map Editors",id:"advanaced-map-editors",level:2}];function o(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Replace the texture of a player object with text."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"playerid"}),(0,i.jsx)(t.td,{children:"The ID of the player whose player object to set the text of."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"objectid"}),(0,i.jsx)(t.td,{children:"The ID of the object on which to place the text."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"text[]"}),(0,i.jsx)(t.td,{children:"The text to set."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"materialIndex"}),(0,i.jsx)(t.td,{children:"The material index to replace with text (DEFAULT: 0)."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["OBJECT_MATERIAL_SIZE",":materialSize"]}),(0,i.jsxs)(t.td,{children:["The ",(0,i.jsx)(t.a,{href:"../resources/materialtextsizes",children:"size"})," of the material (DEFAULT: 256x128)."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"const fontFace[]"}),(0,i.jsx)(t.td,{children:"The font to use (DEFAULT: Arial)."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"fontSize"}),(0,i.jsx)(t.td,{children:"The size of the text (DEFAULT: 24) (MAX 255)."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["bool",":bold"]}),(0,i.jsx)(t.td,{children:"Bold text. Set to 1 for bold, 0 for not (DEFAULT: 1)."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"fontColour"}),(0,i.jsx)(t.td,{children:"The color of the text (DEFAULT: White)."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"backgroundColour"}),(0,i.jsx)(t.td,{children:"The background color (DEFAULT: None (transparent))."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["OBJECT_MATERIAL_TEXT_ALIGN",":textAlignment"]}),(0,i.jsxs)(t.td,{children:["The ",(0,i.jsx)(t.a,{href:"../resources/materialtextsizes",children:"alignment"})," of the text (DEFAULT: Left)."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"OPEN_MP_TAGS:..."}),(0,i.jsx)(t.td,{children:"Indefinite number of arguments of any tag."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(t.p,{children:"This function does not return any specific values."}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:'public OnPlayerCommandText(playerid, cmdtext[])\n{\n    if (strcmp("/text", cmdtext, true) == 0)\n    {\n        new myObject = CreatePlayerObject(playerid, 19353, 0.0, 0.0, 10.0, 0.0, 0.0, 90.0); //create the object\n        SetPlayerObjectMaterialText(playerid, myObject, "SA-MP {FFFFFF}0.{008500}3.{FF8200}DL", 0, OBJECT_MATERIAL_SIZE_256x128, "Arial", 28, 0, 0xFFFF8200, 0xFF000000, OBJECT_MATERIAL_TEXT_ALIGN_CENTER);\n        // write "SA-MP 0.3.DL" on the object, with orange font color and black background\n        return 1;\n    }\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"Color embedding can be used for multiple colors in the text."})}),"\n",(0,i.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"SetObjectMaterialText",children:"SetObjectMaterialText"}),": Replace the texture of an object with text."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"SetPlayerObjectMaterial",children:"SetPlayerObjectMaterial"}),": Replace the texture of a player object with the texture from another model in the game."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"advanaced-map-editors",children:"Advanaced Map Editors"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://github.com/Pottus/Texture-Studio",children:"Texture Studio"})," by Pottus"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://github.com/NexiusTailer/Ultimate-Creator",children:"Ultimate Creator"})," by Nexius"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://github.com/fusez/Map-Editor-V3",children:"Fusez's Map Editor"})," by RedFusion"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>a});var n=r(96540);const i={},l=n.createContext(i);function s(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);