"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[19058],{28453:(e,i,n)=>{n.d(i,{R:()=>l,x:()=>r});var a=n(96540);const o={},t=a.createContext(o);function l(e){const i=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),a.createElement(t.Provider,{value:i},e.children)}},41838:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"meta/Contributing","title":"Contributing","description":"Questa documentazione \xe8 open-source per chiunque voglia contribuire! Basta solamente un account GitHub e del tempo libero. Non hai nemmeno bisogno di conoscere il linguaggio Git, puoi direttamente contribuire dall\'interfaccia web!","source":"@site/i18n/it/docusaurus-plugin-content-docs/current/meta/Contributing.md","sourceDirName":"meta","slug":"/meta/Contributing","permalink":"/it/docs/meta/Contributing","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/meta/Contributing.md","tags":[],"version":"current","frontMatter":{"titolo":"contribuire","descrizione":"Come contribuire alla documentazione della Wiki di SA-MP e open.mp"},"sidebar":"docsSidebar","previous":{"title":"Changelog","permalink":"/it/docs/changelog"}}');var o=n(74848),t=n(28453);const l={titolo:"contribuire",descrizione:"Come contribuire alla documentazione della Wiki di SA-MP e open.mp"},r=void 0,s={},c=[{value:"Modifica dei contenuti",id:"modifica-dei-contenuti",level:2},{value:"Aggiungere nuovi contenuti",id:"aggiungere-nuovi-contenuti",level:2},{value:"Interfaccia GitHub",id:"interfaccia-github",level:3},{value:"Git",id:"git",level:3},{value:"Note, consigli e convenzioni",id:"note-consigli-e-convenzioni",level:2},{value:"Link Interni",id:"link-interni",level:3},{value:"Immagini",id:"immagini",level:3},{value:"Metadata",id:"metadata",level:3},{value:"Headings",id:"headings",level:3},{value:"Usa gli Snippets di <code>Code</code> per referenze tecniche",id:"usa-gli-snippets-di-code-per-referenze-tecniche",level:3},{value:"Tabelle",id:"tabelle",level:3},{value:"Migrare dalla Wiki di SA-MP",id:"migrare-dalla-wiki-di-sa-mp",level:2},{value:"Prendere l&#39;HTML",id:"prendere-lhtml",level:3},{value:"Convertire l&#39;HTML in Markdown",id:"convertire-lhtml-in-markdown",level:3},{value:"Tabelle HTML a Tabelle in Markdown",id:"tabelle-html-a-tabelle-in-markdown",level:3},{value:"Pulire",id:"pulire",level:3},{value:"Contratto di licenza",id:"contratto-di-licenza",level:2}];function d(e){const i={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(i.p,{children:["Questa documentazione \xe8 open-source per chiunque voglia contribuire! Basta solamente un account ",(0,o.jsx)(i.a,{href:"https://github.com",children:"GitHub"})," e del tempo libero. Non hai nemmeno bisogno di conoscere il linguaggio Git, puoi direttamente contribuire dall'interfaccia web!"]}),"\n",(0,o.jsxs)(i.p,{children:["Se vuoi mantenere una specifica lingua apri una pull request ai ",(0,o.jsx)(i.a,{href:"https://github.com/openmultiplayer/web/blob/master/CODEOWNERS",children:(0,o.jsx)(i.code,{children:"CODEOWNERS"})})," del file e aggiungi una linea con la directory della lingua accompagnato al tuo username."]}),"\n",(0,o.jsx)(i.h2,{id:"modifica-dei-contenuti",children:"Modifica dei contenuti"}),"\n",(0,o.jsx)(i.p,{children:"Su ogni pagina, vi \xe8 un bottone che porta alla pagina di GitHub per poterne modificare il contenuto:"}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.img,{src:"https://assets.open.mp/assets/images/contributing/edit-this-page.png",alt:"'Modifica questa pagina' link presente su ogni pagina della wiki"})}),"\n",(0,o.jsxs)(i.p,{children:["Per esempio, cliccando questo sulla funzione ",(0,o.jsx)(i.a,{href:"../scripting/functions/SetVehicleAngularVelocity",children:"SetVehicleAngularVelocity"})," ti porter\xe0 a ",(0,o.jsx)(i.a,{href:"https://github.com/openmultiplayer/web/edit/master/docs/scripting/functions/SetVehicleAngularVelocity.md",children:"questa pagina"})," che presenta un text editor per poter effettuare modifiche ad un file (assumendo il fatto che tu sia loggato su GitHub)."]}),"\n",(0,o.jsx)(i.p,{children:'Fai la tua modifica e invia una "Pull request" ci\xf2 significa che i mantenitori della wiki e gli altri membri della community potranno revisionare le tue modifiche, discutere qualora vi sia il bisogno di ulteriori modifiche ed effettuare il merge.'}),"\n",(0,o.jsx)(i.h2,{id:"aggiungere-nuovi-contenuti",children:"Aggiungere nuovi contenuti"}),"\n",(0,o.jsx)(i.p,{children:"Aggiungere nuovi contenuti \xe8 un po' pi\xf9 complicato. Puoi farlo in due maniere:"}),"\n",(0,o.jsx)(i.h3,{id:"interfaccia-github",children:"Interfaccia GitHub"}),"\n",(0,o.jsx)(i.p,{children:'Quando navighi su una directory su Github, troverai un pulsante "Add file" nell\'angolo in alto a destra della lista file:'}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.img,{src:"https://assets.open.mp/assets/images/contributing/add-new-file.png",alt:"Bottone 'Add file'"})}),"\n",(0,o.jsx)(i.p,{children:"Vi \xe8 anche la possibilit\xe0 di poter uploddare un file Markdown che hai gi\xe0 scritto oppure scriverlo direttamente nel text editor di GitHub."}),"\n",(0,o.jsxs)(i.p,{children:["Il file deve avere l'estensione ",(0,o.jsx)(i.code,{children:".md"})," e contenere Markdown. Per ulteriori informazioni sul Markdown dai un'occhiata a ",(0,o.jsx)(i.a,{href:"https://guides.github.com/features/mastering-markdown/",children:"questa guida"}),"."]}),"\n",(0,o.jsx)(i.p,{children:'Dopo aver concluso, clicca su "Propose new file" e una Pull Request verr\xe0 aperta per effettuare la revisione del codice.'}),"\n",(0,o.jsx)(i.h3,{id:"git",children:"Git"}),"\n",(0,o.jsx)(i.p,{children:"Se vuoi usare Git, tutto quello che devi fare \xe8 clonare la repository della Wiki con la bash:"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-sh",children:"git clone https://github.com/openmultiplayer/wiki.git\n"})}),"\n",(0,o.jsx)(i.p,{children:"Ora potrai aprire la repository nel tuo editor di testo preferito. Raccomando personalmente Visual Studio Code dato che ha degli ottimi tools per editare e formattare i file Markdown. Come puoi vedere, sto scrivendo questa documentazione usando Visual Studio Code!"}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.img,{src:"https://assets.open.mp/assets/images/contributing/vscode.png",alt:"Anteprima Markdown Visual Studio Code"})}),"\n",(0,o.jsx)(i.p,{children:"Raccomando due estensioni per un'esperienza migliore:"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.a,{href:"https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint",children:"markdownlint"})," di David Anson - Questa estensione si assicura del fatto che il tuo Markdown sia formattato in maniera corretta. Previene errori di sintassi e semantica. Non tutti i warnings sono importanti ma alcuni possono aiutare a migliorare la leggibilit\xe0 del codice. Usa il miglior strumento di valutazione e se hai un dubbio chiedi ad un reviewer!"]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.a,{href:"https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode",children:"Prettier"})," creata dal team Prettier.js - Prettier.js formatter\xe0 automaticamente i tuoi file Markdown automaticamente cosicch\xe9 tutto il testo usi uno stile coerente. La repository della wiki ha alcune impostazioni nel suo file ",(0,o.jsx)(i.code,{children:"package.json"})," che l'estensione dovrebbe usare in modo autonomo. Assicurati di abilitare \"Format On Save\" nelle impostazioni dell'editor cos\xec i tuoi file Markdown verranno automaticamente formattati ogni volta che salvi il file!"]}),"\n"]}),"\n",(0,o.jsx)(i.h2,{id:"note-consigli-e-convenzioni",children:"Note, consigli e convenzioni"}),"\n",(0,o.jsx)(i.h3,{id:"link-interni",children:"Link Interni"}),"\n",(0,o.jsx)(i.p,{children:"Non usare URL assoluti per i link. Usa solo percorsi relativi."}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsx)(i.p,{children:"\u274c"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-md",children:"Da utilizzare con [OnPlayerClickPlayer](https://www.open.mp/docs/scripting/callbacks/OnPlayerClickPlayer)\n"})}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsx)(i.p,{children:"\u2714"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-md",children:"Da utilizzare con [OnPlayerClickPlayer](../callbacks/OnPlayerClickPlayer)\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(i.p,{children:[(0,o.jsx)(i.code,{children:"../"}),' significa "salire di una directory" dunque se il file che stai editando \xe8 dentro la directory ',(0,o.jsx)(i.code,{children:"functions"})," e lo stai collegando a ",(0,o.jsx)(i.code,{children:"callbacks"})," si utilizza ",(0,o.jsx)(i.code,{children:"../"})," per salire alla directory ",(0,o.jsx)(i.code,{children:"scripting/"})," seguita da ",(0,o.jsx)(i.code,{children:"callbacks/"})," per poter entrare nella directory dei callbacks, infine inserire il nome del file (senza ",(0,o.jsx)(i.code,{children:".md"}),") del callback che vuoi collegare."]}),"\n",(0,o.jsx)(i.h3,{id:"immagini",children:"Immagini"}),"\n",(0,o.jsxs)(i.p,{children:["Le immagini vanno in una sub-directory dentro ",(0,o.jsx)(i.code,{children:"/static/images"}),". Successivamente quando linki un immagine in un ",(0,o.jsx)(i.code,{children:"![]()"}),"basta usare ",(0,o.jsx)(i.code,{children:"/images/"})," come path base (non c'\xe8 nessun bisogno di usare ",(0,o.jsx)(i.code,{children:"static"}),"\xe8 solo per la repository)."]}),"\n",(0,o.jsx)(i.p,{children:"Se hai dei dubbi, leggi un'altra pagina che usa delle immagini e imita il procedimento."}),"\n",(0,o.jsx)(i.h3,{id:"metadata",children:"Metadata"}),"\n",(0,o.jsxs)(i.p,{children:["La prima cosa in ",(0,o.jsx)(i.em,{children:"ogni"})," documento dovrebbe essere il metadata:"]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-mdx",children:"---\ntitolo: Il mio documento\ndescrizione: Questa pagina parla di roba, cose e hamburgers, evvai!\n---\n"})}),"\n",(0,o.jsx)(i.p,{children:"Ogni pagina dovrebbe includere un titolo e una descrizione."}),"\n",(0,o.jsxs)(i.p,{children:["Per una lista completa di cosa pu\xf2 andare in mezzo alle ",(0,o.jsx)(i.code,{children:"---"})," dai un'occhiata qui ",(0,o.jsx)(i.a,{href:"https://docusaurus.io/docs/markdown-features#markdown-headers",children:"Documentazione di Docusaurus"}),"."]}),"\n",(0,o.jsx)(i.h3,{id:"headings",children:"Headings"}),"\n",(0,o.jsxs)(i.p,{children:["Non creare un header di livello 1 (",(0,o.jsx)(i.code,{children:"<h1>"}),") con ",(0,o.jsx)(i.code,{children:"#"})," dato che viene generato automaticamente. Il tuo primo header dovrebbe ",(0,o.jsx)(i.em,{children:"sempre"})," essere ",(0,o.jsx)(i.code,{children:"##"})]}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsx)(i.p,{children:"\u274c"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-md",children:"# Il mio titolo\n\nQuesta \xe8 una documentazione per ...\n\n# Sottosezione\n"})}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsx)(i.p,{children:"\u2714"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-md",children:"Questa \xe8 una documentazione per ...\n\n## Sottosezione\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(i.h3,{id:"usa-gli-snippets-di-code-per-referenze-tecniche",children:["Usa gli Snippets di ",(0,o.jsx)(i.code,{children:"Code"})," per referenze tecniche"]}),"\n",(0,o.jsx)(i.p,{children:"Quando stai scrivendo un paragrafo che contiene nomi di funzioni, numeri, espressioni o qualsiasi cosa che non sia un linguaggio non-standard, avvolgili in questo modo `backticks`. Questo facilita la separazione del linguaggio e la descrizione delle cose da riferimenti a elementi tecnici come nomi di funzioni o pezzi di codice."}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"\u274c"}),"\n"]}),"\n",(0,o.jsxs)(i.blockquote,{children:["\n",(0,o.jsx)(i.p,{children:"La funzione fopen ritorner\xe0 un valore che contiene il tag del tipo di file:, non c'\xe8 nessun problema su quella linea di codice poich\xe9 il valore ritornato \xe8 storato in una variabile che inoltre contiene anche il tag del file: (notare che anche i casi sono gli stessi). In ogni caso nella linea successiva il valore 4 \xe8 aggiunto al handle file. 4 non ha nessun tag [...]"}),"\n"]}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"\u2714"}),"\n"]}),"\n",(0,o.jsxs)(i.blockquote,{children:["\n",(0,o.jsxs)(i.p,{children:["La funzione ",(0,o.jsx)(i.code,{children:"fopen"})," ritorner\xe0 un valore che contiene il tag del tipo di ",(0,o.jsx)(i.code,{children:"file:"}),", non c'\xe8 nessun problema su quella linea di codice poich\xe9 il valore ritornato \xe8 storato in una variabile che inoltre contiene anche il tag del ",(0,o.jsx)(i.code,{children:"file:"})," (notare che anche i casi sono gli stessi). In ogni caso nella linea successiva il valore ",(0,o.jsx)(i.code,{children:"4"})," \xe8 aggiunto al handle file. ",(0,o.jsx)(i.code,{children:"4"})," non ha nessun tag."]}),"\n"]}),"\n",(0,o.jsxs)(i.p,{children:["Nel precedente esempio, ",(0,o.jsx)(i.code,{children:"fopen"})," \xe8 il nome di una funzione, non una parola inglese, dunque avvolgila usando ",(0,o.jsx)(i.code,{children:"codice"})," evidenziare usando gli snippets aiuta a distinguerli da altri contenuti."]}),"\n",(0,o.jsx)(i.p,{children:"Inoltre, se il paragrafo si riferisce ad un esempio di blocco di codice, esso aiuta il lettore ad associare le parole con degli esempi."}),"\n",(0,o.jsx)(i.h3,{id:"tabelle",children:"Tabelle"}),"\n",(0,o.jsx)(i.p,{children:"Se una tabella ha un header, va nella parte superiore:"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsx)(i.p,{children:"\u274c"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-md",children:"|         |                                       |\n| ------- | ------------------------------------- |\n| Vita    | Stato del motore                      |\n| 650     | Non danneggiato                       |\n| 650-550 | Fumo bianco                           |\n| 550-390 | Fumo grigio                           |\n| 390-250 | Fumo nero                             |\n| < 250   | In fiamme (esploder\xe0 successivamente) |\n"})}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsx)(i.p,{children:"\u2714"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-md",children:"| Vita    | Stato del motore                      |\n| ------- | ------------------------------------- |\n| 650     | Non danneggiato                       |\n| 650-550 | Fumo bianco                           |\n| 550-390 | Fumo grigio                           |\n| 390-250 | Fumo nero                             |\n| < 250   | In fiamme (esploder\xe0 successivamente) |\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(i.h2,{id:"migrare-dalla-wiki-di-sa-mp",children:"Migrare dalla Wiki di SA-MP"}),"\n",(0,o.jsx)(i.p,{children:"La maggior parte dei contenuti sono stati spostati, per\xf2 se trovi una pagina mancante, qui vi \xe8 una piccola guida per convertire il contenuto in Markdown"}),"\n",(0,o.jsx)(i.h3,{id:"prendere-lhtml",children:"Prendere l'HTML"}),"\n",(0,o.jsxs)(i.ol,{children:["\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsx)(i.p,{children:"Clicca questo bottone"}),"\n",(0,o.jsx)(i.p,{children:"(Firefox)"}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.img,{src:"https://assets.open.mp/assets/images/contributing/04f024579f8d.png",alt:"image"})}),"\n",(0,o.jsx)(i.p,{children:"(Chrome)"}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.img,{src:"https://assets.open.mp/assets/images/contributing/f62bb8112543.png",alt:"image"})}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsxs)(i.p,{children:["Posiziona il mouse in alto a sinistra della pagina wiki principale, nel margine sinistro o nell'angolo finch\xe9 non vedi ",(0,o.jsx)(i.code,{children:"#content"})]}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.img,{src:"https://assets.open.mp/assets/images/contributing/65761ffbc429.png",alt:"image"})}),"\n",(0,o.jsxs)(i.p,{children:["Oppure cerca ",(0,o.jsx)(i.code,{children:"<div id=content>"})]}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.img,{src:"https://assets.open.mp/assets/images/contributing/77befe2749fd.png",alt:"image"})}),"\n"]}),"\n",(0,o.jsxs)(i.li,{children:["\n",(0,o.jsx)(i.p,{children:"Copia l'HTML interno di quell'elemento"}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.img,{src:"https://assets.open.mp/assets/images/contributing/8c7c75cfabad.png",alt:"image"})}),"\n",(0,o.jsxs)(i.p,{children:["Ora hai ",(0,o.jsx)(i.em,{children:"solamente"})," il codice HTML per il ",(0,o.jsx)(i.em,{children:"contenuto"})," concreto della pagina, il materiale che ci importa e che puoi convertire in Markdown."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(i.h3,{id:"convertire-lhtml-in-markdown",children:"Convertire l'HTML in Markdown"}),"\n",(0,o.jsx)(i.p,{children:"Per convertire l'HTML di base (niente tabelle) in Markdown usa:"}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.a,{href:"https://mixmark-io.github.io/turndown/",children:"https://mixmark-io.github.io/turndown/"})}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.img,{src:"https://assets.open.mp/assets/images/contributing/77f4ea555bbb.png",alt:"image"})}),"\n",(0,o.jsx)(i.p,{children:"^^ Nota come tutta la tabella si sia sballata completamente..."}),"\n",(0,o.jsx)(i.h3,{id:"tabelle-html-a-tabelle-in-markdown",children:"Tabelle HTML a Tabelle in Markdown"}),"\n",(0,o.jsx)(i.p,{children:"Il tool soprastante non supporta le tabelle, usa questo tool:"}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.a,{href:"https://jmalarcon.github.io/markdowntables/",children:"https://jmalarcon.github.io/markdowntables/"})}),"\n",(0,o.jsxs)(i.p,{children:["E copia solo l'elemento della tabella ",(0,o.jsx)(i.code,{children:"<table>"})," dentro:"]}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.img,{src:"https://assets.open.mp/assets/images/contributing/57f171ae0da7.png",alt:"image"})}),"\n",(0,o.jsx)(i.h3,{id:"pulire",children:"Pulire"}),"\n",(0,o.jsx)(i.p,{children:"La conversione molto probabilmente non sar\xe0 pervetta. Pertanto avrai da fare un po' di pulizia manuale. L'estensioni di formattazione citate sopra dovrebbero aiutare ma potresti tuttavia avere ancora bisogno di spendere del tempo per sistemarlo manualmente."}),"\n",(0,o.jsx)(i.p,{children:"Se non hai tempo, non ti preoccupare! Inoltra una bozza non finita e qualcun altro pu\xf2 riprendere da dove hai lasciato!"}),"\n",(0,o.jsx)(i.h2,{id:"contratto-di-licenza",children:"Contratto di licenza"}),"\n",(0,o.jsxs)(i.p,{children:["Tutti i progetti open.mp hanno un ",(0,o.jsx)(i.a,{href:"https://cla-assistant.io/openmultiplayer/homepage",children:"Contratto di licenza per collaboratori"}),". Questo in pratica significa solamente che accetti di lasciarci usare il tuo lavoro, e metterlo sotto licenza open-source. Quando si apre una Pull Request per la prima volta, il bot assistente CLA poster\xe0 un link dove puoi firmare il contratto."]})]})}function u(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}}}]);