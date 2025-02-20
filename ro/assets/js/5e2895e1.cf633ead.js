"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[7427],{28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>l});var s=n(96540);const i={},r=s.createContext(i);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:t},e.children)}},75788:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"scripting/resources/lightstates","title":"Light States","description":"Information about byte size and its corresponding light state bits.","source":"@site/docs/scripting/resources/lightstates.md","sourceDirName":"scripting/resources","slug":"/scripting/resources/lightstates","permalink":"/ro/docs/scripting/resources/lightstates","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/resources/lightstates.md","tags":[],"version":"current","frontMatter":{"title":"Light States","sidebar_label":"Light States","description":"Information about byte size and its corresponding light state bits."},"sidebar":"docsSidebar","previous":{"title":"Vehicle Landing Gear States","permalink":"/ro/docs/scripting/resources/landinggearstate"},"next":{"title":"Limits","permalink":"/ro/docs/scripting/resources/limits"}}');var i=n(74848),r=n(28453);const a={title:"Light States",sidebar_label:"Light States",description:"Information about byte size and its corresponding light state bits."},l=void 0,h={},o=[{value:"Which bit stores what?",id:"which-bit-stores-what",level:2},{value:"Example",id:"example",level:2},{value:"Info table",id:"info-table",level:2},{value:"Example usage",id:"example-usage",level:2},{value:"See also",id:"see-also",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["Light states are used by natives such as ",(0,i.jsx)(t.a,{href:"../functions/GetVehicleDamageStatus",children:"GetVehicleDamageStatus"})," and ",(0,i.jsx)(t.a,{href:"../functions/UpdateVehicleDamageStatus",children:"UpdateVehicleDamageStatus"}),"."]})}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"The lights on vehicles with 2 wheels (and thus 2 lights) can not be changed."})}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"The two back lights of a vehicle can not be changed separately."})}),"\n",(0,i.jsx)(t.h2,{id:"which-bit-stores-what",children:"Which bit stores what?"}),"\n",(0,i.jsxs)(t.p,{children:["The damage of all lights will be saved together in 1 byte (which is 8 bits). Each bit stores whether the corresponding light is ",(0,i.jsx)(t.strong,{children:"broken (value 1)"})," or ",(0,i.jsx)(t.strong,{children:"not (value 0)"}),"."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["The ",(0,i.jsx)(t.strong,{children:"first bit"})," stores the state of the ",(0,i.jsx)(t.strong,{children:"front-left"})," light."]}),"\n",(0,i.jsxs)(t.li,{children:["The ",(0,i.jsx)(t.strong,{children:"third bit"})," stores the state of the ",(0,i.jsx)(t.strong,{children:"front-right"})," light."]}),"\n",(0,i.jsxs)(t.li,{children:["The ",(0,i.jsx)(t.strong,{children:"zeventh bit"})," stores the state of the ",(0,i.jsx)(t.strong,{children:"back"})," lights."]}),"\n",(0,i.jsx)(t.li,{children:"The rest of the bits are empty."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Notice that the bits are counted from behind, so the first bit is the rightmost bit."}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(t.p,{children:"The following code tells that both front lights are broken and the back lights are not:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"0000 0101"})}),"\n",(0,i.jsx)(t.p,{children:"However, SA-MP returns a decimal number so you have to convert it to a binary number first to get a result like above. What SA-MP would return given the example above is this:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"5"})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"info-table",children:"Info table"}),"\n",(0,i.jsx)(t.p,{children:"Here is a visual representation of the light states. Vehicle viewed from a top-down perspective, with the upper values being the front of the vehicle and the lower values the back of the vehicle."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Legend:"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"o - enabled light\nx - disabled light\n"})}),"\n",(0,i.jsx)(t.p,{children:"0: (0000 0000)"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:"    o-o\n    | |\n    o-o\n"})}),"\n",(0,i.jsx)(t.p,{children:"1: (0000 0001)"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:"    x-o\n    | |\n    o-o\n"})}),"\n",(0,i.jsx)(t.p,{children:"4: (0000 0100)"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:"    o-x\n    | |\n    o-o\n"})}),"\n",(0,i.jsx)(t.p,{children:"5: (0000 0101)"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:"    x-x\n    | |\n    o-o\n"})}),"\n",(0,i.jsx)(t.p,{children:"64: (0100 0000)"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:"    o-o\n    | |\n    x-x\n"})}),"\n",(0,i.jsx)(t.p,{children:"65: (0100 0001)"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:"    x-o\n    | |\n    x-x\n"})}),"\n",(0,i.jsx)(t.p,{children:"68: (0100 0100)"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:"    o-x\n    | |\n    x-x\n"})}),"\n",(0,i.jsx)(t.p,{children:"69: (0100 0101)"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:"    x-x\n    | |\n    x-x\n"})}),"\n",(0,i.jsx)(t.p,{children:"Other values not listed here can change the lights, but they are just repeats of other values (e.g. 15 has the same outcome as 5). After 255 the values will wrap around, 256 will be set as 0, 257 as 1 and so on."}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"example-usage",children:"Example usage"}),"\n",(0,i.jsx)(t.p,{children:"To disable the back two lights of a vehicle while keeping the front unchanged:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:"new\n\tVEHICLE_PANEL_STATUS:panels,\n\tVEHICLE_DOOR_STATUS:doors,\n\tVEHICLE_LIGHT_STATUS:lights,\n\tVEHICLE_TIRE_STATUS:tires;\n\nGetVehicleDamageStatus(vehicleid, panels, doors, lights, tires);\nUpdateVehicleDamageStatus(vehicleid, panels, doors, (lights | VEHICLE_LIGHT_STATUS:0b01000000), tires); // The '0b' part means that the following number is in binary. Just the same way that '0x' indicates a hexadecimal number.\n"})}),"\n",(0,i.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"../resources/vehicle-light-status",children:"Vehicle Light Status"})}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}}}]);