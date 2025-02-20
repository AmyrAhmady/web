"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[32256],{28453:(e,a,n)=>{n.d(a,{R:()=>t,x:()=>l});var r=n(96540);const i={},s=r.createContext(i);function t(e){const a=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(s.Provider,{value:a},e.children)}},58231:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>t,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"scripting/callbacks/OnPlayerTakeDamage","title":"OnPlayerTakeDamage","description":"Descripci\xf3n","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/scripting/callbacks/OnPlayerTakeDamage.md","sourceDirName":"scripting/callbacks","slug":"/scripting/callbacks/OnPlayerTakeDamage","permalink":"/es/docs/scripting/callbacks/OnPlayerTakeDamage","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/callbacks/OnPlayerTakeDamage.md","tags":[{"inline":true,"label":"player","permalink":"/es/docs/tags/player"}],"version":"current","frontMatter":{"t\xedtulo":"OnPlayerTakeDamage","descripci\xf3n":"Este callback se llama cuando un jugador sufre da\xf1o.","tags":["player"]},"sidebar":"docsSidebar","previous":{"title":"OnPlayerStreamOut","permalink":"/es/docs/scripting/callbacks/OnPlayerStreamOut"},"next":{"title":"OnPlayerText","permalink":"/es/docs/scripting/callbacks/OnPlayerText"}}');var i=n(74848),s=n(28453);const t={"t\xedtulo":"OnPlayerTakeDamage","descripci\xf3n":"Este callback se llama cuando un jugador sufre da\xf1o.",tags:["player"]},l=void 0,o={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Devoluciones",id:"devoluciones",level:2},{value:"Ejemplos",id:"ejemplos",level:2},{value:"Notas",id:"notas",level:2}];function c(e){const a={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsx)(a.p,{children:"Este callback se llama cuando un jugador sufre da\xf1o."}),"\n",(0,i.jsxs)(a.table,{children:[(0,i.jsx)(a.thead,{children:(0,i.jsxs)(a.tr,{children:[(0,i.jsx)(a.th,{children:"Nombre"}),(0,i.jsx)(a.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(a.tbody,{children:[(0,i.jsxs)(a.tr,{children:[(0,i.jsx)(a.td,{children:"playerid"}),(0,i.jsx)(a.td,{children:"El ID del jugador que sufri\xf3 da\xf1o."})]}),(0,i.jsxs)(a.tr,{children:[(0,i.jsx)(a.td,{children:"issuerid"}),(0,i.jsx)(a.td,{children:"El ID del jugador que caus\xf3 el da\xf1o. O INVALID_PLAYER_ID si fue \xe9l mismo."})]}),(0,i.jsxs)(a.tr,{children:[(0,i.jsxs)(a.td,{children:["Float",":amount"]}),(0,i.jsx)(a.td,{children:"La cantidad de da\xf1o que sufri\xf3 el jugador (salud y chaleco combinados)."})]}),(0,i.jsxs)(a.tr,{children:[(0,i.jsxs)(a.td,{children:["WEAPON",":weaponid"]}),(0,i.jsx)(a.td,{children:"El ID del arma/origen del da\xf1o."})]}),(0,i.jsxs)(a.tr,{children:[(0,i.jsx)(a.td,{children:"bodypart"}),(0,i.jsx)(a.td,{children:"La parte del cuerpo del impacto."})]})]})]}),"\n",(0,i.jsx)(a.h2,{id:"devoluciones",children:"Devoluciones"}),"\n",(0,i.jsx)(a.p,{children:"1 - Prevendr\xe1 a otros filterscripts de recibir este callback."}),"\n",(0,i.jsx)(a.p,{children:"0 - Indica que este callback ser\xe1 pasado al siguiente filterscript."}),"\n",(0,i.jsx)(a.p,{children:"Siempre se llama primero en filterscripts."}),"\n",(0,i.jsx)(a.h2,{id:"ejemplos",children:"Ejemplos"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-c",children:'public OnPlayerTakeDamage(playerid, issuerid, Float:amount, WEAPON:weaponid, bodypart)\n{\n    if (issuerid\xa0!= INVALID_PLAYER_ID) // Si no fue causado por \xe9l mismo\n    {\n        new\n            infoString[128],\n            weaponName[24],\n            victimName[MAX_PLAYER_NAME],\n            attackerName[MAX_PLAYER_NAME];\n\n        GetPlayerName(playerid, victimName, sizeof (victimName));\n        GetPlayerName(issuerid, attackerName, sizeof (attackerName));\n\n        GetWeaponName(weaponid, weaponName, sizeof (weaponName));\n\n        format(infoString, sizeof(infoString), "%s le hizo %.0f de da\xf1o a %s, arma: %s, parte del cuerpo: %d", attackerName, amount, victimName, weaponName, bodypart);\n        SendClientMessageToAll(-1, infoString);\n    }\n    return 1;\n}\n\npublic OnPlayerTakeDamage(playerid, issuerid, Float:amount, WEAPON:weaponid, bodypart)\n{\n    if (issuerid\xa0!= INVALID_PLAYER_ID && weaponid == 34 && bodypart == 9)\n    {\n        // Un disparo en la cabeza con sniper matar\xe1 instant\xe1neamente al jugador\n        SetPlayerHealth(playerid, 0.0);\n    }\n    return 1;\n}\n'})}),"\n",(0,i.jsx)(a.h2,{id:"notas",children:"Notas"}),"\n",(0,i.jsx)(a.admonition,{type:"tip",children:(0,i.jsx)(a.p,{children:"El 'weaponid' va a retornar 37 (lanzallamas) de cualquier origen de fuego (ej. molotov, 18), 'weaponid' retornar\xe1 51 ante cualquier arma que cree una explosi\xf3n (ej. lanzamisiles, granada). playerid es el \xfanico que puede llamar este callback. La cantidad de da\xf1o es siempre el da\xf1o m\xe1ximo que el weaponid puede hacer, incluso cuando la vida restante es menor que el da\xf1o m\xe1ximo de esta. Entonces cuando un jugador tiene 100.0 de salud y recibe un tiro con una Desert Eagle que tiene un valor de da\xf1o de 46.2, tomar\xe1 3 disparos para matar a ese jugador. Los 3 disparos mostrar\xe1n una cantidad de da\xf1o de 46.2 sin importar que cuando el \xfaltimo disparo impacta, el jugador tiene s\xf3lo 7.6 de salud restante."})}),"\n",(0,i.jsx)(a.admonition,{type:"warning",children:(0,i.jsx)(a.p,{children:"GetPlayerHealth y GetPlayerArmour retornar\xe1 los valores antiguos antes de este callback. Siempre comprobar si 'issuerid' es v\xe1lido antes de usarlo en un array."})})]})}function u(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}}}]);