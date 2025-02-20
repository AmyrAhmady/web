"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[98514],{28453:(e,t,a)=>{a.d(t,{R:()=>l,x:()=>s});var i=a(96540);const n={},r=i.createContext(n);function l(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),i.createElement(r.Provider,{value:t},e.children)}},60917:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>o,frontMatter:()=>l,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"scripting/functions/Update3DTextLabelText","title":"Update3DTextLabelText","description":"A\u017eurira text i boju 3D Text Labela.","source":"@site/i18n/bs/docusaurus-plugin-content-docs/current/scripting/functions/Update3DTextLabelText.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/Update3DTextLabelText","permalink":"/bs/docs/scripting/functions/Update3DTextLabelText","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/Update3DTextLabelText.md","tags":[{"inline":true,"label":"3dtextlabel","permalink":"/bs/docs/tags/3-dtextlabel"}],"version":"current","frontMatter":{"title":"Update3DTextLabelText","sidebar_label":"Update3DTextLabelText","description":"A\u017eurira text i boju 3D Text Labela.","tags":["3dtextlabel"]},"sidebar":"docsSidebar","previous":{"title":"UnBlockIpAddress","permalink":"/bs/docs/scripting/functions/UnBlockIpAddress"},"next":{"title":"UpdatePlayer3DTextLabelText","permalink":"/bs/docs/scripting/functions/UpdatePlayer3DTextLabelText"}}');var n=a(74848),r=a(28453);const l={title:"Update3DTextLabelText",sidebar_label:"Update3DTextLabelText",description:"A\u017eurira text i boju 3D Text Labela.",tags:["3dtextlabel"]},s=void 0,d={},c=[{value:"Deskripcija",id:"deskripcija",level:2},{value:"Returns",id:"returns",level:2},{value:"Primjeri",id:"primjeri",level:2},{value:"Zabilje\u0161ke",id:"zabilje\u0161ke",level:2},{value:"Srodne Funkcije",id:"srodne-funkcije",level:2}];function x(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"deskripcija",children:"Deskripcija"}),"\n",(0,n.jsx)(t.p,{children:"A\u017eurira text i boju 3D Text Labela."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Ime"}),(0,n.jsx)(t.th,{children:"Deskripcija"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["Text3D",":textid"]}),(0,n.jsx)(t.td,{children:"3D Text Label kojeg \u017eelite a\u017eurirati."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"color"}),(0,n.jsx)(t.td,{children:"Boja 3D Text Labela kojeg \u0107e od sada imati."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"text[]"}),(0,n.jsx)(t.td,{children:"Novi text kojeg \u0107e 3D Text Label od sada imati."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.p,{children:"Ova funkcija ne returna (vra\u0107a) nikakve posebne vrijednosti."}),"\n",(0,n.jsx)(t.h2,{id:"primjeri",children:"Primjeri"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c",children:'public OnGameModeInit()\n{\n    new Text3D: mylabel;\n    mylabel = Create3DTextLabel("Ja sam na kordinatama:\\n30.0,40.0,50.0", 0x008080FF, 30.0, 40.0, 50.0, 40.0, 0);\n    Update3DTextLabelText(mylabel, 0xFFFFFFFF, "New text.");\n    return 1;\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"zabilje\u0161ke",children:"Zabilje\u0161ke"}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsx)(t.p,{children:"Ako je text[] prazan, server/client-i pored texta \u0107e mo\u017eda crashovati."})}),"\n",(0,n.jsx)(t.h2,{id:"srodne-funkcije",children:"Srodne Funkcije"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"Create3DTextLabel",children:"Create3DTextLabel"}),": Kreiraj 3D text label."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"Delete3DTextLabel",children:"Delete3DTextLabel"}),": Obri\u0161i 3D text label."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"Attach3DTextLabelToPlayer",children:"Attach3DTextLabelToPlayer"}),": Prikva\u010di 3D text label za igra\u010da."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"Attach3DTextLabelToVehicle",children:"Attach3DTextLabelToVehicle"}),": Prikva\u010di 3D text label za vozilo."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"CreatePlayer3DTextLabel",children:"CreatePlayer3DTextLabel"}),": Kreiraj 3D text label za jednog igra\u010da."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"DeletePlayer3DTextLabel",children:"DeletePlayer3DTextLabel"}),": Obri\u0161i igra\u010dev 3D text label."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"UpdatePlayer3DTextLabelText",children:"UpdatePlayer3DTextLabelText"}),": Promijeni tekst igra\u010devog 3D text labela."]}),"\n"]})]})}function o(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}}}]);