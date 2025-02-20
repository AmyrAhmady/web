"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[10396],{28453:(e,n,o)=>{o.d(n,{R:()=>l,x:()=>i});var a=o(96540);const c={},s=a.createContext(c);function l(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:l(e.components),a.createElement(s.Provider,{value:n},e.children)}},39867:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>t,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>r});const a=JSON.parse('{"id":"scripting/callbacks/OnRconCommand","title":"OnRconCommand","description":"Descripci\xf3n","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/scripting/callbacks/OnRconCommand.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnRconCommand","permalink":"/es/docs/scripting/callbacks/OnRconCommand","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnRconCommand.md","tags":[],"version":"current","frontMatter":{"t\xedtulo":"OnRconCommand","descripci\xf3n":"Este callback se llama cuando un comando es enviado mediante la consola del servidor, RCON remoto, o v\xeda el juego usando \\"/rcon command\\".","tags":[]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerWeaponShot","permalink":"/es/docs/scripting/callbacks/OnPlayerWeaponShot"},"next":{"title":"OnRconLoginAttempt","permalink":"/es/docs/scripting/callbacks/OnRconLoginAttempt"}}');var c=o(74848),s=o(28453);const l={"t\xedtulo":"OnRconCommand","descripci\xf3n":'Este callback se llama cuando un comando es enviado mediante la consola del servidor, RCON remoto, o v\xeda el juego usando "/rcon command".',tags:[]},i=void 0,t={},r=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Devoluciones",id:"devoluciones",level:2},{value:"Ejemplos",id:"ejemplos",level:2},{value:"Notas",id:"notas",level:2},{value:"Funciones Relacionadas",id:"funciones-relacionadas",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,c.jsx)(n.p,{children:'Este callback se llama cuando un comando es enviado mediante la consola del servidor, RCON remoto, o v\xeda el juego usando "/rcon command".'}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Nombre"}),(0,c.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,c.jsx)(n.tbody,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"cmd[]"}),(0,c.jsx)(n.td,{children:"Un string conteniendo el comando que fue escrito, as\xed como cualquier par\xe1metro pasado."})]})})]}),"\n",(0,c.jsx)(n.h2,{id:"devoluciones",children:"Devoluciones"}),"\n",(0,c.jsx)(n.p,{children:"1 - Prevendr\xe1 a otros filterscripts de recibir este callback."}),"\n",(0,c.jsx)(n.p,{children:"0 - Indica que este callback ser\xe1 pasado al siguiente filterscript."}),"\n",(0,c.jsx)(n.p,{children:"Siempre se llama primero en filterscripts."}),"\n",(0,c.jsx)(n.h2,{id:"ejemplos",children:"Ejemplos"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-c",children:'public OnRconCommand(cmd[])\n{\n    printf("[RCON]: Escribiste \'/rcon %s\'!", cmd);\n    return 0;\n}\n\npublic OnRconCommand(cmd[])\n{\n    if (!strcmp(cmd, "hello", true))\n    {\n        SendClientMessageToAll(0xFFFFFFAA, "Hello World!");\n        print("You said hello to the world."); // Esto le aparecer\xe1 al jugador que escribi\xf3 el comando rcon en el chat en blanco.\n        return 1;\n    }\n    return 0;\n}\n'})}),"\n",(0,c.jsx)(n.h2,{id:"notas",children:"Notas"}),"\n",(0,c.jsx)(n.admonition,{type:"tip",children:(0,c.jsx)(n.p,{children:'"/rcon " no est\xe1 incluido en "cmd" cuando un jugador esribe un comando. Si usas la funci\xf3n "print" ac\xe1, esta enviar\xe1 un mensaje al jugador que escribi\xf3 el comando en el juego as\xed como en el log de la consola. Este callback no se llama cuando el jugador no est\xe1 logeado como un admin RCON. Cuando el jugador no est\xe1 logeado como RCON y usa /rcon login, este callback no va a ser llamado y OnRconLoginAttempt es llamado en su lugar. Sin embargo, cuando el jugador est\xe1 logeado como RCON, el uso de este comando llamar\xe1 este callback.'})}),"\n",(0,c.jsx)(n.admonition,{type:"warning",children:(0,c.jsx)(n.p,{children:"Necesitar\xe1s incluir este callback en un filterscript cargado para que funcione en el gamemode!"})}),"\n",(0,c.jsx)(n.h2,{id:"funciones-relacionadas",children:"Funciones Relacionadas"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"../functions/IsPlayerAdmin",children:"IsPlayerAdmin"}),": Comprueba si un jugador est\xe1 logeado como RCON."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"OnRconLoginAttempt",children:"OnRconLoginAttempt"}),": Se llama cuando hay un intento de identificarse como RCON."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}}}]);