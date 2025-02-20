"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[97805],{28453:(e,i,t)=>{t.d(i,{R:()=>c,x:()=>l});var r=t(96540);const s={},n=r.createContext(s);function c(e){const i=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(n.Provider,{value:i},e.children)}},87609:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>p,contentTitle:()=>l,default:()=>a,frontMatter:()=>c,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"scripting/functions/SetPickupModel","title":"SetPickupModel","description":"Sets the model of a pickup.","source":"@site/docs/scripting/functions/SetPickupModel.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/SetPickupModel","permalink":"/ar/docs/scripting/functions/SetPickupModel","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/SetPickupModel.md","tags":[{"inline":true,"label":"pickup","permalink":"/ar/docs/tags/pickup"}],"version":"current","frontMatter":{"title":"SetPickupModel","sidebar_label":"SetPickupModel","description":"Sets the model of a pickup.","tags":["pickup"]},"sidebar":"docsSidebar","previous":{"title":"SetPickupForPlayer","permalink":"/ar/docs/scripting/functions/SetPickupForPlayer"},"next":{"title":"SetPickupPos","permalink":"/ar/docs/scripting/functions/SetPickupPos"}}');var s=t(74848),n=t(28453);const c={title:"SetPickupModel",sidebar_label:"SetPickupModel",description:"Sets the model of a pickup.",tags:["pickup"]},l=void 0,p={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function o(e){const i={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components},{VersionWarn:t}=i;return t||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("VersionWarn",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t,{version:"omp v1.1.0.2612"}),"\n",(0,s.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(i.p,{children:"Sets the model of a pickup."}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Name"}),(0,s.jsx)(i.th,{children:"Description"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"pickupid"}),(0,s.jsx)(i.td,{children:"The ID of the pickup."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"model"}),(0,s.jsxs)(i.td,{children:["The ",(0,s.jsx)(i.a,{href:"../resources/pickupids",children:"model"})," to set."]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsxs)(i.td,{children:["bool",":update"," = true"]}),(0,s.jsx)(i.td,{children:"Update pickup for everyone. (true/false)"})]})]})]}),"\n",(0,s.jsx)(i.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(i.p,{children:["This function always returns ",(0,s.jsx)(i.strong,{children:"true"}),"."]}),"\n",(0,s.jsx)(i.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-c",children:"new g_Pickup;\n\npublic OnGameModeInit()\n{\n    g_Pickup = CreatePickup(1239, 1, 1686.6160, 1455.4277, 10.7705, -1);\n\n    SetPickupModel(g_Pickup, 1210);\n    return 1;\n}\n"})}),"\n",(0,s.jsx)(i.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"CreatePickup",children:"CreatePickup"}),": Create a pickup."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"AddStaticPickup",children:"AddStaticPickup"}),": Add a static pickup."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"DestroyPickup",children:"DestroyPickup"}),": Destroy a pickup."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"IsValidPickup",children:"IsValidPickup"}),": Checks if a pickup is valid."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"IsPickupStreamedIn",children:"IsPickupStreamedIn"}),": Checks if a pickup is streamed in for a specific player."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"IsPickupHiddenForPlayer",children:"IsPickupHiddenForPlayer"}),": Checks if a pickup is hidden for a specific player."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"SetPickupPos",children:"SetPickupPos"}),": Sets the position of a pickup."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"GetPickupPos",children:"GetPickupPos"}),": Gets the coordinates of a pickup."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"GetPickupModel",children:"GetPickupModel"}),": Gets the model ID of a pickup."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"SetPickupType",children:"SetPickupType"}),": Sets the type of a pickup."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"GetPickupType",children:"GetPickupType"}),": Gets the type of a pickup."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"SetPickupVirtualWorld",children:"SetPickupVirtualWorld"}),": Sets the virtual world ID of a pickup."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"GetPickupVirtualWorld",children:"GetPickupVirtualWorld"}),": Gets the virtual world ID of a pickup."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"ShowPickupForPlayer",children:"ShowPickupForPlayer"}),": Shows a pickup for a specific player."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"HidePickupForPlayer",children:"HidePickupForPlayer"}),": Hides a pickup for a specific player."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.a,{href:"SetPickupForPlayer",children:"SetPickupForPlayer"}),": Adjusts the pickup model, type, and position for a specific player."]}),"\n"]})]})}function a(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}}}]);