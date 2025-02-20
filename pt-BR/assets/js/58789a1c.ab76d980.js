"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[70803],{28453:(e,o,s)=>{s.d(o,{R:()=>r,x:()=>n});var a=s(96540);const d={},t=a.createContext(d);function r(e){const o=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function n(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),a.createElement(t.Provider,{value:o},e.children)}},46169:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>i,contentTitle:()=>n,default:()=>m,frontMatter:()=>r,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"client/ClientCommands","title":"Comandos de Cliente","description":"Lista de todos os comandos de cliente.","source":"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/client/ClientCommands.md","sourceDirName":"client","slug":"/client/ClientCommands","permalink":"/pt-BR/docs/client/ClientCommands","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/client/ClientCommands.md","tags":[],"version":"current","frontMatter":{"title":"Comandos de Cliente","sidebar_label":"Comandos de Cliente","description":"Lista de todos os comandos de cliente."},"sidebar":"docsSidebar","previous":{"title":"server.cfg","permalink":"/pt-BR/docs/server/server.cfg"},"next":{"title":"open.mp client no linux","permalink":"/pt-BR/docs/client/ClientOnLinux"}}');var d=s(74848),t=s(28453);const r={title:"Comandos de Cliente",sidebar_label:"Comandos de Cliente",description:"Lista de todos os comandos de cliente."},n=void 0,i={},c=[{value:"Comandos",id:"comandos",level:2},{value:"Arquivo sa-mp.cfg",id:"arquivo-sa-mpcfg",level:2}];function l(e){const o={a:"a",h2:"h2",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o.h2,{id:"comandos",children:"Comandos"}),"\n",(0,d.jsxs)(o.table,{children:[(0,d.jsx)(o.thead,{children:(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.th,{children:"Comandos"}),(0,d.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,d.jsxs)(o.tbody,{children:[(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{children:"/quit (/q)"}),(0,d.jsx)(o.td,{children:"Como o pr\xf3prio nome diz, ele fecha o jogo. Voc\xea tamb\xe9m pode usar o comando /q, que \xe9 exatamente o mesmo comando por\xe9m apenas mais curto."})]}),(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{children:"/save"}),(0,d.jsx)(o.td,{children:"/save \xe9 provavelmente o comando padr\xe3o mais utilizado, e provavelmente o mais \xfatil. Quando voc\xea digita /save, sua posi\xe7\xe3o atual \xe9 salva no arquivo savedpositions.txt que fica no seu diret\xf3rio de arquivos de usu\xe1rio, podendo utiliz\xe1-lo em scripts."})]}),(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{children:"/rs"}),(0,d.jsx)(o.td,{children:"/rs (Salvamento Bruto) \xe9 como o /save, mas ele apenas salva sua posi\xe7\xe3o atual e \xe2ngulo de vis\xe3o no arquivo rawpositions.txt no diret\xf3rio de arquivos de usu\xe1rio. Informa\xe7\xf5es extras como classe e armas n\xe3o s\xe3o salvas."})]}),(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{children:"/interior"}),(0,d.jsx)(o.td,{children:"Quase t\xe3o importante quanto o /save, esse comando simplesmente mostra seu interior atual no chat."})]}),(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{children:"/vw"}),(0,d.jsx)(o.td,{children:"Quase t\xe3o importante quanto o /save, esse comando simplesmente mostra seu mundo virtual atual no chat."})]}),(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{children:"/fpslimit"}),(0,d.jsx)(o.td,{children:"Esse comando determina o valor limite de FPS (Frames Por Segundo) do seu jogo. Quanto maior o limite, mais suave ficar\xe1 seu jogo. N\xe3o surtir\xe1 efeito se o limitador de quadros estiver desabilitado nas op\xe7\xf5es gr\xe1ficas. O limite pode ser ajustado entre 20 a 90 e o padr\xe3o \xe9 50. Isso configura a op\xe7\xe3o 'fpslimit' no sa-mp.cfg."})]}),(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{children:"/pagesize"}),(0,d.jsx)(o.td,{children:"/pagesize \xe9 usado para escolher a quantidade de linhas vis\xedveis no chat. Podendo ser qualquer valor entre 10 a 20 linhas. O valor padr\xe3o \xe9 10. Isso configura a op\xe7\xe3o 'pagesize' no sa-mp.cfg."})]}),(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{children:"/headmove"}),(0,d.jsx)(o.td,{children:"Esse comando controla se as cabe\xe7as dos jogadores se movem na dire\xe7\xe3o em que est\xe3o olhando, no entanto ele s\xf3 se aplica localmente, ent\xe3o outros jogadores ainda poder\xe3o ver sua cabe\xe7a se movendo. Isso configura a op\xe7\xe3o 'disableheadmove' no sa-mp.cfg."})]}),(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{children:"/timestamp"}),(0,d.jsx)(o.td,{children:"Esse comando mostra/esconde o tempo para todas as mensagens no chat. O tempo que \xe9 mostrado \xe9 o de seu computador, n\xe3o sendo o tempo do servidor. Isso configura a op\xe7\xe3o 'timestamp' no sa-mp.cfg."})]}),(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{children:"/dl"}),(0,d.jsx)(o.td,{children:"DL significa R\xf3tulos de Debug (Debug Labels). Esse comando alterna a visibilidade dos r\xf3tulos de debug nos ve\xedculos, que mostram o ID do ve\xedculo, modelo, vida, se o ve\xedculo est\xe1 pr\xe9-carregado, dist\xe2ncia do jogador, reboque, assentos dispon\xedveis, posi\xe7\xe3o atual e posi\xe7\xe3o de cria\xe7\xe3o."})]}),(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{children:"/nametagstatus"}),(0,d.jsx)(o.td,{children:"Quando habilitado (que \xe9 o padr\xe3o), os jogadores ver\xe3o um pequeno \xedcone de ampulheta pr\xf3ximo \xe0 tag de nome dos jogadores pausados. Isso inclu\xed jogos minimizados (alt-tab), no menu de pausa (ESC), conex\xf5es perdidas (falha/tempo esgotado) e quando s\xe3o tiradas fotos da tela que congelam o jogo por mais de 3 segundos. Isso configura a op\xe7\xe3o 'nonametagstatus' no sa-mp.cfg."})]}),(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{children:"/mem"}),(0,d.jsx)(o.td,{children:"Mostra a quantidade atual de uso de mem\xf3ria. (Entretanto, geralmente \xe9 mostrado apenas 128 MB.)"})]}),(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{children:"/audiomsg"}),(0,d.jsx)(o.td,{children:"Habilita/desabilita a mensagem que aparece quando uma URL \xe9 transmitida para o cliente. Isso configura a op\xe7\xe3o 'audiomsgoff' no sa-mp.cfg."})]}),(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{children:"/fontsize"}),(0,d.jsx)(o.td,{children:"Altera o tamanho da fonte da Interface Gr\xe1fica (chat, di\xe1logos, etc...). S\xe3o tamanhos v\xe1lidos valores entre -3 a 5."})]}),(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{children:"/ctd"}),(0,d.jsx)(o.td,{children:"Esse comando foi adicionado na vers\xe3o 0.3.7 RC2. Habilita o debugging no cliente do alvo da c\xe2mera do jogador."})]}),(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{children:"/rcon"}),(0,d.jsxs)(o.td,{children:["Mais relacionado com o servidor do que com o cliente. Esse comando \xe9 utilizado para executar comandos RCON. RCON \xe9 o sistema interno de administra\xe7\xe3o. RCON significa ",(0,d.jsx)(o.a,{href:"../server/ControllingServer#using-rcon",children:"Controle Remoto (Remote Control)"}),"."]})]}),(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{children:"/hudscalefix"}),(0,d.jsx)(o.td,{children:"Esse comando foi adicionado na vers\xe3o 0.3.7 R3. Habilita/desabilita a corre\xe7\xe3o de escala do radar, para que o radar do jogo se ajuste melhor em resolu\xe7\xf5es widescreen (corrigindo a distor\xe7\xe3o que faz o radar aparecer em formato oval). Isso configura a op\xe7\xe3o 'nohudscale' no sa-mp.cfg."})]})]})]}),"\n",(0,d.jsx)(o.h2,{id:"arquivo-sa-mpcfg",children:"Arquivo sa-mp.cfg"}),"\n",(0,d.jsxs)(o.table,{children:[(0,d.jsx)(o.thead,{children:(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.th,{children:"Op\xe7\xe3o"}),(0,d.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,d.jsxs)(o.tbody,{children:[(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{children:"pagesize"}),(0,d.jsx)(o.td,{children:"Ver /pagesize."})]}),(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{children:"fpslimit"}),(0,d.jsx)(o.td,{children:"Ver /fpslimit."})]}),(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{children:"disableheadmove"}),(0,d.jsx)(o.td,{children:"Ver /headmove."})]}),(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{children:"timestamp"}),(0,d.jsx)(o.td,{children:"Ver /timestamp."})]}),(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{children:"ime"}),(0,d.jsx)(o.td,{children:"Controla se a janela de entrada do chat suporta edi\xe7\xe3o de texto por M\xe9todo de Entrada (IME) e troca de idiomas. 1 habilita o IME, 0 desabilita."})]}),(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{children:"audiomsgoff"}),(0,d.jsx)(o.td,{children:"Ver /audiomsg."})]}),(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{children:"multicore"}),(0,d.jsx)(o.td,{children:"Alterna se o cliente SA-MP usa m\xfaltiplos n\xfacleos da CPU durante a execu\xe7\xe3o. O padr\xe3o \xe9 1 (USA m\xfaltiplos n\xfacleos). Configure para 0 se voc\xea tiver problemas com o mouse."})]}),(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{children:"directmode"}),(0,d.jsx)(o.td,{children:"Permite que jogadores com problemas na exibi\xe7\xe3o do texto do chat usem o modo mais lento de renderiza\xe7\xe3o direta na tela. 0 para desabilitar, 1 para habilitar."})]}),(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{children:"audioproxyoff"}),(0,d.jsx)(o.td,{children:"Se esta op\xe7\xe3o estiver configurada como 1, e houver um servidor proxy configurado nas Op\xe7\xf5es de Internet do Windows, o proxy n\xe3o ser\xe1 usado ao reproduzir streams de \xe1udio no SA-MP."})]}),(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{children:"nonametagstatus"}),(0,d.jsx)(o.td,{children:"Ver /nametagstatus."})]}),(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{children:"fontface"}),(0,d.jsx)(o.td,{children:'Permite alterar a fonte do chat, di\xe1logos e placar. Ex: fontface="Comic Sans MS". N\xe3o \xe9 oficialmente suportado e pode causar problemas.'})]}),(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{children:"fontweight"}),(0,d.jsx)(o.td,{children:"Esta op\xe7\xe3o alterna se a fonte do seu chat \xe9 negrito ou n\xe3o. 0 = NEGRITO (padr\xe3o) e 1 = NORMAL."})]}),(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{children:"nohudscale"}),(0,d.jsx)(o.td,{children:"Esta op\xe7\xe3o foi adicionada na vers\xe3o 0.3.7 R3. Ver /hudscalefix."})]})]})]})]})}function m(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,d.jsx)(o,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}}}]);