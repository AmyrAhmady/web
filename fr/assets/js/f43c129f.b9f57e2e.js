"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[47535],{22015:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>o,frontMatter:()=>s,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"scripting/functions/Update3DTextLabelText","title":"Update3DTextLabelText","description":"Updates a 3D Text Label text and color.","source":"@site/docs/scripting/functions/Update3DTextLabelText.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/Update3DTextLabelText","permalink":"/fr/docs/scripting/functions/Update3DTextLabelText","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/Update3DTextLabelText.md","tags":[{"inline":true,"label":"3dtextlabel","permalink":"/fr/docs/tags/3-dtextlabel"}],"version":"current","frontMatter":{"title":"Update3DTextLabelText","sidebar_label":"Update3DTextLabelText","description":"Updates a 3D Text Label text and color.","tags":["3dtextlabel"]},"sidebar":"docsSidebar","previous":{"title":"UnBlockIpAddress","permalink":"/fr/docs/scripting/functions/UnBlockIpAddress"},"next":{"title":"UpdatePlayer3DTextLabelText","permalink":"/fr/docs/scripting/functions/UpdatePlayer3DTextLabelText"}}');var a=l(74848),r=l(28453);const s={title:"Update3DTextLabelText",sidebar_label:"Update3DTextLabelText",description:"Updates a 3D Text Label text and color.",tags:["3dtextlabel"]},i=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function x(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(t.p,{children:"Updates a 3D Text Label text and color."}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsxs)(t.td,{children:["Text3D",":textid"]}),(0,a.jsx)(t.td,{children:"The 3D Text Label you want to update."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"colour"}),(0,a.jsx)(t.td,{children:"The color the 3D Text Label should have from now on."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"const text[]"}),(0,a.jsx)(t.td,{children:"The new text which the 3D Text Label should have from now on."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"OPEN_MP_TAGS:..."}),(0,a.jsx)(t.td,{children:"Indefinite number of arguments of any tag."})]})]})]}),"\n",(0,a.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(t.p,{children:"This function does not return any specific values."}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-c",children:'new Text3D:mylabel;\n\npublic OnGameModeInit()\n{\n    mylabel = Create3DTextLabel("I\'m at the coordinates:\\n30.0,40.0,50.0", 0x008080FF, 30.0, 40.0, 50.0, 40.0, 0);\n\n    Update3DTextLabelText(mylabel, 0xFF0000FF, "New text.");\n    return 1;\n}\n'})}),"\n",(0,a.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,a.jsx)(t.admonition,{type:"warning",children:(0,a.jsx)(t.p,{children:"If text[] is empty, the server/clients next to the text might crash! (Fixed in open.mp)"})}),"\n",(0,a.jsx)(t.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"Create3DTextLabel",children:"Create3DTextLabel"}),": Create a 3D text label."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"Delete3DTextLabel",children:"Delete3DTextLabel"}),": Delete a 3D text label."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"Get3DTextLabelText",children:"Get3DTextLabelText"}),": Gets the 3D text label text."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"Get3DTextLabelColour",children:"Get3DTextLabelColour"}),": Gets the 3D text label colour."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"Attach3DTextLabelToPlayer",children:"Attach3DTextLabelToPlayer"}),": Attach a 3D text label to a player."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"Attach3DTextLabelToVehicle",children:"Attach3DTextLabelToVehicle"}),": Attach a 3D text label to a vehicle."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"CreatePlayer3DTextLabel",children:"CreatePlayer3DTextLabel"}),": Create A 3D text label for one player."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"DeletePlayer3DTextLabel",children:"DeletePlayer3DTextLabel"}),": Delete a player's 3D text label."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"UpdatePlayer3DTextLabelText",children:"UpdatePlayer3DTextLabelText"}),": Change the text of a player's 3D text label."]}),"\n"]})]})}function o(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(x,{...e})}):x(e)}},28453:(e,t,l)=>{l.d(t,{R:()=>s,x:()=>i});var n=l(96540);const a={},r=n.createContext(a);function s(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);