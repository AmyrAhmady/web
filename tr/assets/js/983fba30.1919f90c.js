"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[33953],{28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>c});var i=r(96540);const n={},a=i.createContext(n);function s(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(a.Provider,{value:t},e.children)}},49260:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"scripting/functions/GetObjectMaterial","title":"GetObjectMaterial","description":"Get the material data from an index of the object.","source":"@site/docs/scripting/functions/GetObjectMaterial.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/GetObjectMaterial","permalink":"/tr/docs/scripting/functions/GetObjectMaterial","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/GetObjectMaterial.md","tags":[{"inline":true,"label":"object","permalink":"/tr/docs/tags/object"}],"version":"current","frontMatter":{"title":"GetObjectMaterial","sidebar_label":"GetObjectMaterial","description":"Get the material data from an index of the object.","tags":["object"]},"sidebar":"docsSidebar","previous":{"title":"GetObjectDrawDistance","permalink":"/tr/docs/scripting/functions/GetObjectDrawDistance"},"next":{"title":"GetObjectMaterialText","permalink":"/tr/docs/scripting/functions/GetObjectMaterialText"}}');var n=r(74848),a=r(28453);const s={title:"GetObjectMaterial",sidebar_label:"GetObjectMaterial",description:"Get the material data from an index of the object.",tags:["object"]},c=void 0,l={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components},{VersionWarn:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r,{version:"omp v1.1.0.2612"}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"Get the material data from an index of the object."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"objectid"}),(0,n.jsx)(t.td,{children:"The ID of the object."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"materialIndex"}),(0,n.jsx)(t.td,{children:"The material index on the object. (0 to 15)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"&modelid"}),(0,n.jsx)(t.td,{children:"A variable in which to store the model ID, passed by reference."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"textureLibrary[]"}),(0,n.jsx)(t.td,{children:"An array into which to store the textureLibrary, passed by reference."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"textureLibrarySize"}),(0,n.jsx)(t.td,{children:"The size of the textureLibrary."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"textureName[]"}),(0,n.jsx)(t.td,{children:"An array into which to store the textureName, passed by reference."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"textureNameSize"}),(0,n.jsx)(t.td,{children:"The size of the textureName."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"&materialColour"}),(0,n.jsx)(t.td,{children:"A variable in which to store the materialColour, passed by reference."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"true"})," - The function was executed successfully."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"false"})," - The function failed to execute. The object specified does not exist or an invalid material index is specified."]}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c",children:'new objectid = CreateObject(19371, 978.71143, -925.25708, 42.63720,   0.00000, 0.00000, 2.00000);\nSetObjectMaterial(objectid, 0, 19341, "egg_texts", "easter_egg01", 0xFFFFFFFF);\n\nnew \n    modelid,\n    textureLibrary[16],\n    textureName[16],\n    materialColour;\n\nGetObjectMaterial(objectid, 0, modelid, textureLibrary, sizeof(textureLibrary), textureName, sizeof(textureName), materialColour);\n// modelid = 19341\n// textureLibrary = "egg_texts"\n// textureName = "easter_egg01"\n// materialColour = 0xFFFFFFFF\n'})}),"\n",(0,n.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"SetObjectMaterial",children:"SetObjectMaterial"}),": Replace the texture of an object with the texture from another model in the game."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"SetObjectMaterialText",children:"SetObjectMaterialText"}),": Replace the texture of an object with text."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"IsObjectMaterialSlotUsed",children:"IsObjectMaterialSlotUsed"}),": Checks if a slot of object material is used."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"GetObjectMaterialText",children:"GetObjectMaterialText"}),": Get the material text data from an index of the object."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"GetPlayerObjectMaterial",children:"GetPlayerObjectMaterial"}),": Get the material data from an index of the player-object."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}}}]);