"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[69971],{19976:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"scripting/resources/tirestates","title":"Tire States","description":"Information about byte size and its corresponding tire state bits.","source":"@site/docs/scripting/resources/tirestates.md","sourceDirName":"scripting/resources","slug":"/scripting/resources/tirestates","permalink":"/ta/docs/scripting/resources/tirestates","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/resources/tirestates.md","tags":[],"version":"current","frontMatter":{"title":"Tire States","sidebar_label":"Tire States","description":"Information about byte size and its corresponding tire state bits."},"sidebar":"docsSidebar","previous":{"title":"TextDraw Sprites","permalink":"/ta/docs/scripting/resources/textdrawsprites"},"next":{"title":"Vehicle Door Status","permalink":"/ta/docs/scripting/resources/vehicle-door-status"}}');var r=s(74848),t=s(28453);const l={title:"Tire States",sidebar_label:"Tire States",description:"Information about byte size and its corresponding tire state bits."},c=void 0,a={},h=[{value:"Which bit stores what?",id:"which-bit-stores-what",level:2},{value:"Example",id:"example",level:2},{value:"Info table",id:"info-table",level:2},{value:"4-wheeled vehicles",id:"4-wheeled-vehicles",level:3},{value:"2-wheeled vehicles (bikes)",id:"2-wheeled-vehicles-bikes",level:3},{value:"Example usage",id:"example-usage",level:2},{value:"See also",id:"see-also",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Tire states are used by natives such as ",(0,r.jsx)(n.a,{href:"../functions/GetVehicleDamageStatus",children:"GetVehicleDamageStatus"})," and ",(0,r.jsx)(n.a,{href:"../functions/UpdateVehicleDamageStatus",children:"UpdateVehicleDamageStatus"}),"."]})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"Even vehicles with more than 4 wheels (e.g. trucks) only have 4 tire states."})}),"\n",(0,r.jsx)(n.h2,{id:"which-bit-stores-what",children:"Which bit stores what?"}),"\n",(0,r.jsxs)(n.p,{children:["The damage of all tires will be saved together in 1 nibble (which is 4 bits) for 4-wheeled vehicles and in 1 pair (which is 2 bits) for 2-wheeled vehicles. Each bit stores whether the corresponding tire is ",(0,r.jsx)(n.strong,{children:"popped (value 1)"})," or ",(0,r.jsx)(n.strong,{children:"not (value 0)"}),"."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.strong,{children:"first bit"})," stores the state of the ",(0,r.jsx)(n.strong,{children:"back-right"})," tire for a 4-wheeled vehicle or the ",(0,r.jsx)(n.strong,{children:"back"})," tire for a 2-wheeled vehicle."]}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.strong,{children:"second bit"})," stores the state of the ",(0,r.jsx)(n.strong,{children:"front-right"})," tire for a 4-wheeled vehicle or the ",(0,r.jsx)(n.strong,{children:"front"})," tire for a 2-wheeled vehicle."]}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.strong,{children:"third bit"})," stores the state of the ",(0,r.jsx)(n.strong,{children:"back-left"})," tire for a 4-wheeled vehicle."]}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.strong,{children:"fourth bit"})," stores the state of the ",(0,r.jsx)(n.strong,{children:"front-left"})," tire for a 4-wheeled vehicle."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Notice that the bits are counted from behind, so the first bit is the rightmost bit."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"The following code tells that for a 4-wheeled vehicle two tires are popped and two are not:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"0101"})}),"\n",(0,r.jsx)(n.p,{children:"However, SA-MP returns a decimal number so you have to convert it to a binary number first to get a result like above. What SA-MP would return given the example above is this:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"5"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"info-table",children:"Info table"}),"\n",(0,r.jsx)(n.p,{children:"Here is a visual representation of the tire states. Vehicle viewed from a top-down perspective, with the upper values being the front of the vehicle and the lower values the back of the vehicle."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Legend:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"o - inflated tire\nx - popped tire\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"4-wheeled-vehicles",children:"4-wheeled vehicles"}),"\n",(0,r.jsx)(n.p,{children:"4 bits for 4-wheeled vehicles: (FL)(BL)(FR)(BR) (Front-Left, Back-Left, Front-Right and Back-Right)."}),"\n",(0,r.jsx)(n.p,{children:"0: (0000)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"    o-o\n    | |\n    o-o\n"})}),"\n",(0,r.jsx)(n.p,{children:"1: (0001)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"    o-o\n    | |\n    o-x\n"})}),"\n",(0,r.jsx)(n.p,{children:"2: (0010)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"    o-x\n    | |\n    o-o\n"})}),"\n",(0,r.jsx)(n.p,{children:"3: (0011)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"    o-x\n    | |\n    o-x\n"})}),"\n",(0,r.jsx)(n.p,{children:"4: (0100)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"    o-o\n    | |\n    x-o\n"})}),"\n",(0,r.jsx)(n.p,{children:"5: (0101)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"    o-o\n    | |\n    x-x\n"})}),"\n",(0,r.jsx)(n.p,{children:"6: (0110)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"    o-x\n    | |\n    x-o\n"})}),"\n",(0,r.jsx)(n.p,{children:"7: (0111)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"    o-x\n    | |\n    x-x\n"})}),"\n",(0,r.jsx)(n.p,{children:"8: (1000)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"    x-o\n    | |\n    o-o\n"})}),"\n",(0,r.jsx)(n.p,{children:"9: (1001)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"    x-o\n    | |\n    o-x\n"})}),"\n",(0,r.jsx)(n.p,{children:"10: (1010)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"    x-x\n    | |\n    o-o\n"})}),"\n",(0,r.jsx)(n.p,{children:"11: (1011)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"    x-x\n    | |\n    o-x\n"})}),"\n",(0,r.jsx)(n.p,{children:"12: (1100)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"    x-o\n    | |\n    x-o\n"})}),"\n",(0,r.jsx)(n.p,{children:"13: (1101)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"    x-o\n    | |\n    x-x\n"})}),"\n",(0,r.jsx)(n.p,{children:"14: (1110)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"    x-x\n    | |\n    x-o\n"})}),"\n",(0,r.jsx)(n.p,{children:"15: (1111)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"    x-x\n    | |\n    x-x\n"})}),"\n",(0,r.jsx)(n.p,{children:"After 15 the values are repeated, so 16 is 0, 17 is 1 and so on."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"2-wheeled-vehicles-bikes",children:"2-wheeled vehicles (bikes)"}),"\n",(0,r.jsx)(n.p,{children:"2 bits for 2-wheeled vehicles: (F)(B) (Front and Back)."}),"\n",(0,r.jsx)(n.p,{children:"0: (00)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"    o\n    |\n    o\n"})}),"\n",(0,r.jsx)(n.p,{children:"1: (01)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"    o\n    |\n    x\n"})}),"\n",(0,r.jsx)(n.p,{children:"2: (10)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"    x\n    |\n    o\n"})}),"\n",(0,r.jsx)(n.p,{children:"3: (11)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"    x\n    |\n    x\n"})}),"\n",(0,r.jsx)(n.p,{children:"After 3 the values are repeated, so 4 is 0, 5 is 1 and so on."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"example-usage",children:"Example usage"}),"\n",(0,r.jsx)(n.p,{children:"To pop the back two tires of a 4-wheeled vehicle while keeping the front unchanged:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"new\n\tVEHICLE_PANEL_STATUS:panels,\n\tVEHICLE_DOOR_STATUS:doors,\n\tVEHICLE_LIGHT_STATUS:lights,\n\tVEHICLE_TIRE_STATUS:tires;\n\nGetVehicleDamageStatus(vehicleid, panels, doors, lights, tires);\nUpdateVehicleDamageStatus(vehicleid, panels, doors, lights, (tires | VEHICLE_TIRE_STATUS:0b0101)); // The '0b' part means that the following number is in binary. Just the same way that '0x' indicates a hexadecimal number.\n"})}),"\n",(0,r.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"../resources/vehicle-tire-status",children:"Vehicle Tire Status"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>c});var i=s(96540);const r={},t=i.createContext(r);function l(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);