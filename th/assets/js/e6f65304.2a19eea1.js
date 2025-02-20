"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[79078],{28453:(e,t,l)=>{l.d(t,{R:()=>s,x:()=>i});var a=l(96540);const n={},r=a.createContext(n);function s(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),a.createElement(r.Provider,{value:t},e.children)}},36293:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"scripting/functions/DeletePlayer3DTextLabel","title":"DeletePlayer3DTextLabel","description":"Destroy a 3D text label that was created using CreatePlayer3DTextLabel.","source":"@site/i18n/th/docusaurus-plugin-content-docs/current/scripting/functions/DeletePlayer3DTextLabel.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/DeletePlayer3DTextLabel","permalink":"/th/docs/scripting/functions/DeletePlayer3DTextLabel","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/DeletePlayer3DTextLabel.md","tags":[{"inline":true,"label":"player","permalink":"/th/docs/tags/player"},{"inline":true,"label":"3dtextlabel","permalink":"/th/docs/tags/3-dtextlabel"}],"version":"current","frontMatter":{"title":"DeletePlayer3DTextLabel","sidebar_label":"DeletePlayer3DTextLabel","description":"Destroy a 3D text label that was created using CreatePlayer3DTextLabel.","tags":["player","3dtextlabel"]},"sidebar":"docsSidebar","previous":{"title":"DeletePVar","permalink":"/th/docs/scripting/functions/DeletePVar"},"next":{"title":"DeleteSVar","permalink":"/th/docs/scripting/functions/DeleteSVar"}}');var n=l(74848),r=l(28453);const s={title:"DeletePlayer3DTextLabel",sidebar_label:"DeletePlayer3DTextLabel",description:"Destroy a 3D text label that was created using CreatePlayer3DTextLabel.",tags:["player","3dtextlabel"]},i=void 0,c={},d=[{value:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",level:2},{value:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",id:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",level:2},{value:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",level:2},{value:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",level:2}];function o(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",children:"\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22"}),"\n",(0,n.jsx)(t.p,{children:"Destroy a 3D text label that was created using CreatePlayer3DTextLabel."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"playerid"}),(0,n.jsx)(t.td,{children:"The ID of the player whose 3D text label to delete."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["PlayerText3D",":textid"]}),(0,n.jsx)(t.td,{children:"The ID of the player's 3D text label to delete."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19",children:"\u0e2a\u0e48\u0e07\u0e04\u0e37\u0e19"}),"\n",(0,n.jsx)(t.p,{children:"1: The function executed successfully."}),"\n",(0,n.jsx)(t.p,{children:"0: The function failed to execute. This means the label specified doesn't exist."}),"\n",(0,n.jsx)(t.h2,{id:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",children:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c",children:"new PlayerText3D:labelid = CreatePlayer3DTextLabel(...);\n\n// Later...\nDeletePlayer3DTextLabel(playerid, labelid);\n"})}),"\n",(0,n.jsx)(t.h2,{id:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19",children:"\u0e1f\u0e31\u0e07\u0e01\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e19"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/th/docs/scripting/functions/Create3DTextLabel",children:"Create3DTextLabel"}),": Create a 3D text label."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/th/docs/scripting/functions/Attach3DTextLabelToPlayer",children:"Attach3DTextLabelToPlayer"}),": Attach a 3D text label to a player."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/th/docs/scripting/functions/Attach3DTextLabelToVehicle",children:"Attach3DTextLabelToVehicle"}),": Attach a 3D text label to a vehicle."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/th/docs/scripting/functions/Update3DTextLabelText",children:"Update3DTextLabelText"}),": Change the text of a 3D text label."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/th/docs/scripting/functions/CreatePlayer3DTextLabel",children:"CreatePlayer3DTextLabel"}),": Create A 3D text label for one player."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/th/docs/scripting/functions/UpdatePlayer3DTextLabelText",children:"UpdatePlayer3DTextLabelText"}),": Change the text of a player's 3D text label."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}}}]);