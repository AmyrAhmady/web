"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[88050],{14130:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"scripting/functions/Attach3DTextLabelToPlayer","title":"Attach3DTextLabelToPlayer","description":"Oyuncuya bir 3D Text Label ba\u011flay\u0131n.","source":"@site/i18n/tr/docusaurus-plugin-content-docs/current/scripting/functions/Attach3DTextLabelToPlayer.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/Attach3DTextLabelToPlayer","permalink":"/tr/docs/scripting/functions/Attach3DTextLabelToPlayer","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/Attach3DTextLabelToPlayer.md","tags":[{"inline":true,"label":"player","permalink":"/tr/docs/tags/player"},{"inline":true,"label":"3dtextlabel","permalink":"/tr/docs/tags/3-dtextlabel"}],"version":"current","frontMatter":{"title":"Attach3DTextLabelToPlayer","sidebar_label":"Attach3DTextLabelToPlayer","description":"Oyuncuya bir 3D Text Label ba\u011flay\u0131n.","tags":["player","3dtextlabel"]},"sidebar":"docsSidebar","previous":{"title":"ArePlayerWeaponsAllowed","permalink":"/tr/docs/scripting/functions/ArePlayerWeaponsAllowed"},"next":{"title":"Attach3DTextLabelToVehicle","permalink":"/tr/docs/scripting/functions/Attach3DTextLabelToVehicle"}}');var n=l(74848),r=l(28453);const i={title:"Attach3DTextLabelToPlayer",sidebar_label:"Attach3DTextLabelToPlayer",description:"Oyuncuya bir 3D Text Label ba\u011flay\u0131n.",tags:["player","3dtextlabel"]},s=void 0,c={},d=[{value:"A\xe7\u0131klama",id:"a\xe7\u0131klama",level:2},{value:"\xc7al\u0131\u015f\u0131nca Verece\u011fi Sonu\xe7lar",id:"\xe7al\u0131\u015f\u0131nca-verece\u011fi-sonu\xe7lar",level:2},{value:"\xd6rnekler",id:"\xf6rnekler",level:2},{value:"Ba\u011flant\u0131l\u0131 Fonksiyonlar",id:"ba\u011flant\u0131l\u0131-fonksiyonlar",level:2}];function o(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"a\xe7\u0131klama",children:"A\xe7\u0131klama"}),"\n",(0,n.jsx)(t.p,{children:"Oyuncuya 3D Text Label ba\u011flama fonksiyonu."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parametre"}),(0,n.jsx)(t.th,{children:"A\xe7\u0131klama"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["Text3D",":textid"]}),(0,n.jsx)(t.td,{children:"Create3DTextLabel ile olu\u015fturulmu\u015f label ID'si."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"playerid"}),(0,n.jsx)(t.td,{children:"Label'\u0131n ba\u011flanaca\u011f\u0131 oyuncunun ID'si."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"OffsetX"}),(0,n.jsx)(t.td,{children:"Oyuncunun X-ofset koordinat\u0131. (oyuncunun ortas\u0131ndan ba\u015flar, '0.0, 0.0, 0.0'd\u0131r)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"OffsetY"}),(0,n.jsx)(t.td,{children:"Oyuncunun Y-ofset koordinat\u0131. (oyuncunun ortas\u0131ndan ba\u015flar, '0.0, 0.0, 0.0'd\u0131r)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"OffsetZ"}),(0,n.jsx)(t.td,{children:"Oyuncunun Z-ofset koordinat\u0131. (oyuncunun ortas\u0131ndan ba\u015flar, '0.0, 0.0, 0.0'd\u0131r)"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"\xe7al\u0131\u015f\u0131nca-verece\u011fi-sonu\xe7lar",children:"\xc7al\u0131\u015f\u0131nca Verece\u011fi Sonu\xe7lar"}),"\n",(0,n.jsx)(t.p,{children:"1: Fonksiyon ba\u015far\u0131yla \xe7al\u0131\u015ft\u0131."}),"\n",(0,n.jsx)(t.p,{children:"0: Fonksiyon \xe7al\u0131\u015famad\u0131. Oyuncu veya label yok."}),"\n",(0,n.jsx)(t.h2,{id:"\xf6rnekler",children:"\xd6rnekler"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c",children:'public OnPlayerConnect(playerid)\n{\n    new Text3D:textLabel = Create3DTextLabel("Merhaba, ben buralarda yeniyim!", 0x008080FF, 30.0, 40.0, 50.0, 40.0, 0); // 3D text labelimizi yarat\u0131yoruz\n    Attach3DTextLabelToPlayer(textLabel, playerid, 0.0, 0.0, 0.7); // Oyuncu oyuna girdi\u011finde Text Label\'\u0131 ona ba\u011fl\u0131yoruz\n    return 1;\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"ba\u011flant\u0131l\u0131-fonksiyonlar",children:"Ba\u011flant\u0131l\u0131 Fonksiyonlar"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"Create3DTextLabel",children:"Create3DTextLabel"}),": 3D text label olu\u015fturun."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"Delete3DTextLabel",children:"Delete3DTextLabel"}),": 3D text label silin."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"Attach3DTextLabelToVehicle",children:"Attach3DTextLabelToVehicle"}),": Bir 3D text labeli araca ba\u011flay\u0131n."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"Update3DTextLabelText",children:"Update3DTextLabelText"}),": Bir 3D text labelin metnini de\u011fi\u015ftirin."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"CreatePlayer3DTextLabel",children:"CreatePlayer3DTextLabel"}),": Sadece bir oyuncuya \xf6zel 3D text label olu\u015fturun."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"DeletePlayer3DTextLabel",children:"DeletePlayer3DTextLabel"}),": Oyuncuya ba\u011fl\u0131 3D text labeli silin."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"UpdatePlayer3DTextLabelText",children:"UpdatePlayer3DTextLabelText"}),": Oyuncuya \xf6zel 3D text labelin metnini de\u011fi\u015ftirin."]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},28453:(e,t,l)=>{l.d(t,{R:()=>i,x:()=>s});var a=l(96540);const n={},r=a.createContext(n);function i(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);