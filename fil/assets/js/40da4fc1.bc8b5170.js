"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[90524],{9281:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>r,default:()=>x,frontMatter:()=>s,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"scripting/functions/Attach3DTextLabelToVehicle","title":"Attach3DTextLabelToVehicle","description":"Naglalagay ng 3D Text Label sa isang partikular na sasakyan.","source":"@site/i18n/fil/docusaurus-plugin-content-docs/current/scripting/functions/Attach3DTextLabelToVehicle.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/Attach3DTextLabelToVehicle","permalink":"/fil/docs/scripting/functions/Attach3DTextLabelToVehicle","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/Attach3DTextLabelToVehicle.md","tags":[{"inline":true,"label":"vehicle","permalink":"/fil/docs/tags/vehicle"},{"inline":true,"label":"3dtextlabel","permalink":"/fil/docs/tags/3-dtextlabel"}],"version":"current","frontMatter":{"title":"Attach3DTextLabelToVehicle","sidebar_label":"Attach3DTextLabelToVehicle","description":"Naglalagay ng 3D Text Label sa isang partikular na sasakyan.","tags":["vehicle","3dtextlabel"]},"sidebar":"docsSidebar","previous":{"title":"Attach3DTextLabelToPlayer","permalink":"/fil/docs/scripting/functions/Attach3DTextLabelToPlayer"},"next":{"title":"AttachCameraToObject","permalink":"/fil/docs/scripting/functions/AttachCameraToObject"}}');var l=t(74848),i=t(28453);const s={title:"Attach3DTextLabelToVehicle",sidebar_label:"Attach3DTextLabelToVehicle",description:"Naglalagay ng 3D Text Label sa isang partikular na sasakyan.",tags:["vehicle","3dtextlabel"]},r=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Related Functions",id:"related-functions",level:2}];function h(e){const a={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(a.p,{children:"Naglalagay ng 3D Text Label sa isang partikular na sasakyan."}),"\n",(0,l.jsxs)(a.table,{children:[(0,l.jsx)(a.thead,{children:(0,l.jsxs)(a.tr,{children:[(0,l.jsx)(a.th,{children:"Name"}),(0,l.jsx)(a.th,{children:"Description"})]})}),(0,l.jsxs)(a.tbody,{children:[(0,l.jsxs)(a.tr,{children:[(0,l.jsxs)(a.td,{children:["Text3D",":textid"]}),(0,l.jsx)(a.td,{children:"Ang 3D Text Label na gusto mong ilagay."})]}),(0,l.jsxs)(a.tr,{children:[(0,l.jsx)(a.td,{children:"vehicleid"}),(0,l.jsx)(a.td,{children:"Ang sasakyan kung saan mo gustong ilagay ang 3D Text Label."})]}),(0,l.jsxs)(a.tr,{children:[(0,l.jsx)(a.td,{children:"OffsetX"}),(0,l.jsx)(a.td,{children:"Ang Offset-X coordinate ng player na sasakyan (ang sasakyan ay 0.0,0.0,0.0).."})]}),(0,l.jsxs)(a.tr,{children:[(0,l.jsx)(a.td,{children:"OffsetY"}),(0,l.jsx)(a.td,{children:"Ang Offset-Y coordinate ng player na sasakyan (ang sasakyan ay 0.0,0.0,0.0).."})]}),(0,l.jsxs)(a.tr,{children:[(0,l.jsx)(a.td,{children:"OffsetZ"}),(0,l.jsx)(a.td,{children:"Ang Offset-Z coordinate ng player na sasakyan (ang sasakyan ay 0.0,0.0,0.0).."})]})]})]}),"\n",(0,l.jsx)(a.h2,{id:"returns",children:"Returns"}),"\n",(0,l.jsx)(a.p,{children:"Ang function na ito ay hindi nagbabalik ng anumang value."}),"\n",(0,l.jsx)(a.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-c",children:'new\n    Text3D:gVehicle3dText[MAX_VEHICLES], // Pag gawa ng  para sa paggamit mamaya\n    gVehicleId;\n\npublic OnGameModeInit ( )\n{\n    gVehicleId = CreateVehicle(510, 0.0, 0.0, 15.0, 5, 0, 120); // Paggawa ng Sasakyan.\n    gVehicle3dText[gVehicleId] = Create3DTextLabel("Example Text", 0xFF0000AA, 0.0, 0.0, 0.0, 50.0, 0, 1);\n    Attach3DTextLabelToVehicle(gVehicle3dText[gVehicleId], vehicle_id, 0.0, 0.0, 2.0); // Paglalagay ng Text Label sa Sasakyan.\n}\n\npublic OnGameModeExit ( )\n{\n    Delete3DTextLabel(gVehicle3dText[gVehicleId]);\n    return true;\n}\n'})}),"\n",(0,l.jsx)(a.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,l.jsxs)(a.ul,{children:["\n",(0,l.jsxs)(a.li,{children:[(0,l.jsx)(a.a,{href:"Create3DTextLabel",children:"Create3DTextLabel"}),": Gumawa ng 3D text label."]}),"\n",(0,l.jsxs)(a.li,{children:[(0,l.jsx)(a.a,{href:"Delete3DTextLabel",children:"Delete3DTextLabel"}),": Magtanggal ng 3D text label."]}),"\n",(0,l.jsxs)(a.li,{children:[(0,l.jsx)(a.a,{href:"Attach3DTextLabelToPlayer",children:"Attach3DTextLabelToPlayer"}),": Mag-attach ng 3D text label sa isang player."]}),"\n",(0,l.jsxs)(a.li,{children:[(0,l.jsx)(a.a,{href:"Update3DTextLabelText",children:"Update3DTextLabelText"}),": Baguhin ang text ng isang 3D text label."]}),"\n",(0,l.jsxs)(a.li,{children:[(0,l.jsx)(a.a,{href:"CreatePlayer3DTextLabel",children:"CreatePlayer3DTextLabel"}),": Gumawa ng 3D text label para sa isang player."]}),"\n",(0,l.jsxs)(a.li,{children:[(0,l.jsx)(a.a,{href:"DeletePlayer3DTextLabel",children:"DeletePlayer3DTextLabel"}),": Tanggalin ang 3D text label ng player."]}),"\n",(0,l.jsxs)(a.li,{children:[(0,l.jsx)(a.a,{href:"UpdatePlayer3DTextLabelText",children:"UpdatePlayer3DTextLabelText"}),": Baguhin ang text ng 3D text label ng player."]}),"\n"]})]})}function x(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,l.jsx)(a,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},28453:(e,a,t)=>{t.d(a,{R:()=>s,x:()=>r});var n=t(96540);const l={},i=n.createContext(l);function s(e){const a=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),n.createElement(i.Provider,{value:a},e.children)}}}]);