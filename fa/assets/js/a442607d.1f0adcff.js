"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[8021],{13217:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"scripting/resources/panelstates","title":"Panel States","description":"Information about byte size and its corresponding panel state bits.","source":"@site/docs/scripting/resources/panelstates.md","sourceDirName":"scripting/resources","slug":"/scripting/resources/panelstates","permalink":"/fa/docs/scripting/resources/panelstates","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/resources/panelstates.md","tags":[],"version":"current","frontMatter":{"title":"Panel States","sidebar_label":"Panel States","description":"Information about byte size and its corresponding panel state bits."},"sidebar":"docsSidebar","previous":{"title":"Paintjobs","permalink":"/fa/docs/scripting/resources/paintjobs"},"next":{"title":"Pickup IDs","permalink":"/fa/docs/scripting/resources/pickupids"}}');var r=s(74848),a=s(28453);const i={title:"Panel States",sidebar_label:"Panel States",description:"Information about byte size and its corresponding panel state bits."},o=void 0,l={},h=[{value:"Which nibble stores what?",id:"which-nibble-stores-what",level:2},{value:"Example",id:"example",level:2},{value:"Example usage",id:"example-usage",level:2},{value:"See also",id:"see-also",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["Panel states are used by natives such as ",(0,r.jsx)(t.a,{href:"../functions/GetVehicleDamageStatus",children:"GetVehicleDamageStatus"})," and ",(0,r.jsx)(t.a,{href:"../functions/UpdateVehicleDamageStatus",children:"UpdateVehicleDamageStatus"}),"."]})}),"\n",(0,r.jsx)(t.h2,{id:"which-nibble-stores-what",children:"Which nibble stores what?"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["The ",(0,r.jsx)(t.strong,{children:"first nibble"})," stores the state of the ",(0,r.jsx)(t.strong,{children:"front-left"})," panel for a car or the ",(0,r.jsx)(t.strong,{children:"(left-)engine"})," for a plane."]}),"\n",(0,r.jsxs)(t.li,{children:["The ",(0,r.jsx)(t.strong,{children:"second nibble"})," stores the state of the ",(0,r.jsx)(t.strong,{children:"front-right"})," panel for a car or the ",(0,r.jsx)(t.strong,{children:"(right-)engine"})," for a plane."]}),"\n",(0,r.jsxs)(t.li,{children:["The ",(0,r.jsx)(t.strong,{children:"third nibble"})," stores the state of the ",(0,r.jsx)(t.strong,{children:"back-left"})," panel for a car or the ",(0,r.jsx)(t.strong,{children:"rudder (on the vertical stabilizer)"})," for a plane."]}),"\n",(0,r.jsxs)(t.li,{children:["The ",(0,r.jsx)(t.strong,{children:"fourth nibble"})," stores the state of the ",(0,r.jsx)(t.strong,{children:"back-right"})," panel for a car or the ",(0,r.jsx)(t.strong,{children:"elevators (on the tail)"})," for a plane."]}),"\n",(0,r.jsxs)(t.li,{children:["The ",(0,r.jsx)(t.strong,{children:"fifth nibble"})," stores the state of the ",(0,r.jsx)(t.strong,{children:"windshield"})," for a car or the ",(0,r.jsx)(t.strong,{children:"ailerons (on the wings)"})," for a plane."]}),"\n",(0,r.jsxs)(t.li,{children:["The ",(0,r.jsx)(t.strong,{children:"sixth nibble"})," stores the state of the ",(0,r.jsx)(t.strong,{children:"front bumper"})," for a car."]}),"\n",(0,r.jsxs)(t.li,{children:["The ",(0,r.jsx)(t.strong,{children:"seventh nibble"})," stores the state of the ",(0,r.jsx)(t.strong,{children:"back bumper"})," for a car."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Not every vehicle supports all of the mentioned panels. The degree of damage affects the handling of a plane quite a lot and the plane will produce black smoke from whatever part is damaged."}),"\n",(0,r.jsxs)(t.p,{children:["For most panels there are 4 states: ",(0,r.jsx)(t.strong,{children:"undamaged (value 0)"}),", ",(0,r.jsx)(t.strong,{children:"crushed (value 1)"}),", ",(0,r.jsx)(t.strong,{children:"hanging loose (value 2)"})," and ",(0,r.jsx)(t.strong,{children:"removed (value 3)"}),". The crushed and hanging loose states are quite buggy (when you go from a hanging loose state to a crushed state, the panel is hanging loose AND crushed instead of just crushed, but it is only crushed again when the vehicle is restreamed, ...). To fix this weird behaviour, just reset the damage for that panel first and then apply the needed state. In this way it is also possible to have a panel that is hanging loose when driving but is not physically crushed (to better see what this means, go directly from 0 to 2, instead of going from 0 to 1 to 2)."]}),"\n",(0,r.jsx)(t.p,{children:"It seems that you can only read the value of the windshield. Setting it does update the value on the server, but it does not result in any physical change on the vehicle."}),"\n",(0,r.jsx)(t.p,{children:"Notice that the nibbles are counted from behind, so the first nibble is the rightmost nibble."}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.p,{children:"The following code tells that for a car the front and back bumpers are removed:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"00000011 00110000 00000000 00000000"})}),"\n",(0,r.jsx)(t.p,{children:"However, SA-MP returns a decimal number so you have to convert it to a binary number first to get a result like above. What SA-MP would return given the example above is this:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"53477376"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"example-usage",children:"Example usage"}),"\n",(0,r.jsx)(t.p,{children:"To remove the front bumper of a car while keeping the other panels unchanged:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-c",children:"new\n\tVEHICLE_PANEL_STATUS:panels,\n\tVEHICLE_DOOR_STATUS:doors,\n\tVEHICLE_LIGHT_STATUS:lights,\n\tVEHICLE_TIRE_STATUS:tires;\n\nGetVehicleDamageStatus(vehicleid, panels, doors, lights, tires);\nUpdateVehicleDamageStatus(vehicleid, (panels | VEHICLE_PANEL_STATUS:0b00000000001100000000000000000000), doors, lights, tires); // The '0b' part means that the following number is in binary. Just the same way that '0x' indicates a hexadecimal number.\n"})}),"\n",(0,r.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"../resources/vehicle-panel-status",children:"Vehicle Panel Status"})}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>o});var n=s(96540);const r={},a=n.createContext(r);function i(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);