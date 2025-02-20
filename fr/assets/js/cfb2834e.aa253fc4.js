"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[51362],{28453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>t});var s=r(96540);const a={},i=s.createContext(a);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),s.createElement(i.Provider,{value:n},e.children)}},34021:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"scripting/language/Operators","title":"Keywords: Operators","description":"char","source":"@site/docs/scripting/language/Operators.md","sourceDirName":"scripting/language","slug":"/scripting/language/Operators","permalink":"/fr/docs/scripting/language/Operators","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/language/Operators.md","tags":[],"version":"current","frontMatter":{"title":"Keywords: Operators","sidebar_label":"Keywords: Operators"},"sidebar":"docsSidebar","previous":{"title":"Keywords: Initialisers","permalink":"/fr/docs/scripting/language/Initialisers"},"next":{"title":"Keywords: Statements","permalink":"/fr/docs/scripting/language/Statements"}}');var a=r(74848),i=r(28453);const c={title:"Keywords: Operators",sidebar_label:"Keywords: Operators"},t=void 0,l={},d=[{value:"<code>char</code>",id:"char",level:2},{value:"<code>defined</code>",id:"defined",level:2},{value:"<code>sizeof</code>",id:"sizeof",level:2},{value:"<code>state</code>",id:"state",level:2},{value:"<code>tagof</code>",id:"tagof",level:2}];function o(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"char",children:(0,a.jsx)(n.code,{children:"char"})}),"\n",(0,a.jsx)(n.p,{children:"char returns the number of cells required to hold the given number of characters in a packed string. I.e. the number of 4-byte cells required to hold a given number of bytes. For example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"4 char\n"})}),"\n",(0,a.jsx)(n.p,{children:"Returns 1."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"3 char\n"})}),"\n",(0,a.jsx)(n.p,{children:"Returns 1 (you can't have 3/4 of a variable)."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"256 char\n"})}),"\n",(0,a.jsx)(n.p,{children:"Returns 64 (256 divided by 4)."}),"\n",(0,a.jsx)(n.p,{children:"This is generally used in variable declarations."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"new\n    someVar[40 char];\n"})}),"\n",(0,a.jsx)(n.p,{children:"Will make an array 10 cells big."}),"\n",(0,a.jsx)(n.p,{children:"For more information on packed strings read pawn-lang.pdf."}),"\n",(0,a.jsx)(n.h2,{id:"defined",children:(0,a.jsx)(n.code,{children:"defined"})}),"\n",(0,a.jsx)(n.p,{children:"Checks if a symbol exists. Generally used in #if statements:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"new\n    someVar = 5;\n#if defined someVar\n    printf(\"%d\", someVar);\n#else\n    #error The variable 'someVar' isn't defined\n#endif\n"})}),"\n",(0,a.jsx)(n.p,{children:"Most commonly it's used to check if a define is defined and generate code accordingly:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"#define FILTERSCRIPT\n\n#if defined FILTERSCRIPT\n\npublic OnFilterScriptInit()\n{\n    return 1;\n}\n\n#else\n\npublic OnGameModeInit()\n{\n    return 1;\n}\n\n#endif\n"})}),"\n",(0,a.jsx)(n.h2,{id:"sizeof",children:(0,a.jsx)(n.code,{children:"sizeof"})}),"\n",(0,a.jsx)(n.p,{children:"Returns the size in ELEMENTS of an array:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:'new\n    someVar[10];\nprintf("%d", sizeof (someVar));\n'})}),"\n",(0,a.jsx)(n.p,{children:"Output:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"10\n"})}),"\n",(0,a.jsx)(n.p,{children:"And:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:'new\n    someVar[2][10];\nprintf("%d %d", sizeof (someVar), sizeof (someVar[]));\n'})}),"\n",(0,a.jsx)(n.p,{children:"Gives:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"2 10\n"})}),"\n",(0,a.jsx)(n.h2,{id:"state",children:(0,a.jsx)(n.code,{children:"state"})}),"\n",(0,a.jsx)(n.p,{children:"This again is related to the PAWN autonoma code and thus not covered here."}),"\n",(0,a.jsx)(n.h2,{id:"tagof",children:(0,a.jsx)(n.code,{children:"tagof"})}),"\n",(0,a.jsx)(n.p,{children:"This returns a number representing the tag of a variable:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:'new\n    someVar,\n    Float:someFloat;\nprintf("%d %d", tagof (someVar), tagof (someFloat));\n'})}),"\n",(0,a.jsx)(n.p,{children:"Gives:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"-./,),(-*,( -1073741820\n"})}),"\n",(0,a.jsx)(n.p,{children:"Which is a slight bug but basically means:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:"0x80000000 0xC0000004\n"})}),"\n",(0,a.jsx)(n.p,{children:"To check, for example, if a variable is a float (with the tag 'Float:'):"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-c",children:'new Float: fValue = 6.9;\n\nnew tag = tagof (fValue);\n\nif (tag == tagof (Float:))\n{\n    print("float");\n}\nelse\n{\n    print("not a float");\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}}}]);