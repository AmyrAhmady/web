"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[9908],{28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>d});var s=i(96540);const t={},l=s.createContext(t);function r(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(l.Provider,{value:n},e.children)}},50003:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"scripting/language/Directives","title":"Keywords: Directives","description":"Directives are instructions passed to the compiler to control how it interprets your source code.","source":"@site/docs/scripting/language/Directives.md","sourceDirName":"scripting/language","slug":"/scripting/language/Directives","permalink":"/bs/docs/scripting/language/Directives","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/language/Directives.md","tags":[],"version":"current","frontMatter":{"title":"Keywords: Directives","sidebar_label":"Keywords: Directives"},"sidebar":"docsSidebar","previous":{"title":"Control Structures","permalink":"/bs/docs/scripting/language/ControlStructures"},"next":{"title":"Keywords: Initialisers","permalink":"/bs/docs/scripting/language/Initialisers"}}');var t=i(74848),l=i(28453);const r={title:"Keywords: Directives",sidebar_label:"Keywords: Directives"},d=void 0,c={},o=[{value:"<code>#assert</code>",id:"assert",level:2},{value:"<code>#define</code>",id:"define",level:2},{value:"<code>#else</code>",id:"else",level:2},{value:"<code>#elseif</code>",id:"elseif",level:2},{value:"<code>#emit</code>",id:"emit",level:2},{value:"<code>#endif</code>",id:"endif",level:2},{value:"<code>#endinput, #endscript</code>",id:"endinput-endscript",level:2},{value:"<code>#error</code>",id:"error",level:2},{value:"<code>#if</code>",id:"if",level:2},{value:"<code>#include</code>",id:"include",level:2},{value:"<code>#pragma</code>",id:"pragma",level:2},{value:"Deprecated",id:"deprecated",level:3},{value:"<code>#tryinclude</code>",id:"tryinclude",level:3},{value:"<code>#undef</code>",id:"undef",level:3}];function a(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Directives are instructions passed to the compiler to control how it interprets your source code."}),"\n",(0,t.jsx)(n.h2,{id:"assert",children:(0,t.jsx)(n.code,{children:"#assert"})}),"\n",(0,t.jsx)(n.p,{children:"This checks if constant expression is true and if not halts the compile."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"#define MOO 10\n#assert MOO > 5\n"})}),"\n",(0,t.jsx)(n.p,{children:"This will compile fine."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"#define MOO 1\n#assert MOO > 5\n"})}),"\n",(0,t.jsx)(n.p,{children:"That won't and will give a fatal error. This is similar to:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"#define MOO 1\n#if MOO <= 5\n    #error MOO check failed\n#endif\n"})}),"\n",(0,t.jsx)(n.p,{children:"However assert will give an error of:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Assertation failed: 1 > 5\n"})}),"\n",(0,t.jsx)(n.p,{children:"Wheras the second will give an error of:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"User error: Moo check failed\n"})}),"\n",(0,t.jsx)(n.p,{children:"Which may or may not be helpful."}),"\n",(0,t.jsx)(n.h2,{id:"define",children:(0,t.jsx)(n.code,{children:"#define"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"#define"})," is a text replacement directive, wherever the first symbol of the define is found the rest of it will be placed."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'#define MOO 7\nprintf("%d", MOO);\n'})}),"\n",(0,t.jsx)(n.p,{children:"Will be changed to:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'printf("%d", 7);\n'})}),"\n",(0,t.jsx)(n.p,{children:"This is why all defines are lost in decompilation as they don't exist when the code is compiled (all directives are pre-processed). Defines don't have to contain numbers:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'#define PL new i = 0; i < MAX_PLAYERS; i++) if (IsPlayerConnected(i)\n\nfor(PL) printf("%d connected", i);\n'})}),"\n",(0,t.jsx)(n.p,{children:"Will compile to the player loop we all know and love (despise). Notice how the brackets are used here, some from the for and some from the define macro(the replacement)."}),"\n",(0,t.jsx)(n.p,{children:"Another little known fact about defines is that they can be multi-line if you escape the new line. Generally a new line ends the define however the following is valid:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'#define PL \\\n        new i = 0; i < MAX_PLAYERS; i++) \\\n                if (IsPlayerConnected(i)\n\nprintf("%d", MOO(6));\n'})}),"\n",(0,t.jsx)(n.p,{children:"That will output 42 (no, not chosen randomly). Notice the excessive brackets in the define? This is because defines are straight text replacements so that will compile as:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'printf("%d", ((6) * 7));\n'})}),"\n",(0,t.jsx)(n.p,{children:"That's fine as it is but let's take this example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'printf("%d", MOO(5 + 6));\n'})}),"\n",(0,t.jsx)(n.p,{children:"You would expect that to compile to output 77 ((5 + 6) * 7) and with the brackets it will, however without the brackets you have:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'#define MOO(%0) \\\n        %0 * 7\n\nprintf("%d", MOO(5 + 6));\n'})}),"\n",(0,t.jsx)(n.p,{children:"Which converts to:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'printf("%d", MOO(5 + 6 * 7));\n'})}),"\n",(0,t.jsx)(n.p,{children:"Which, due to the order of operations, compules as (5 + (6 * 7)), whiche is 47 and very wrong. One interesting fact about the parameters is that if you have too many, the last one is all the extra ones. So doing:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'#define PP(%0,%1) \\\n        printf(%0, %1)\n\nPP(%s %s %s, "hi", "hello", "hi");\n'})}),"\n",(0,t.jsx)(n.p,{children:"Will infact print:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"hi hello hi\n"})}),"\n",(0,t.jsxs)(n.p,{children:["As ",(0,t.jsx)(n.code,{children:"%1"}),' contains "hi", "hello", "hi". You may have also noticed the use of ',(0,t.jsx)(n.code,{children:"#"})," to convert a literal into a string. This is a SA-MP only feature and can be useful. It was just added here to give a disting distinguishing between the parameters."]}),"\n",(0,t.jsx)(n.h2,{id:"else",children:(0,t.jsx)(n.code,{children:"#else"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"#else"})," is like else, but for #if instead of if."]}),"\n",(0,t.jsx)(n.h2,{id:"elseif",children:(0,t.jsx)(n.code,{children:"#elseif"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"#elseif"})," is like else if but for #if."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'#define MOO 10\n\n#if MOO == 9\n        printf("if");\n#elseif MOO == 8\n        printf("else if");\n#else\n        printf("else");\n#endif\n'})}),"\n",(0,t.jsx)(n.h2,{id:"emit",children:(0,t.jsx)(n.code,{children:"#emit"})}),"\n",(0,t.jsxs)(n.p,{children:["This directive is unlisted in the pawn-lang.pdf table however does exist. It is basically an inline compiler. If you know AMX you can use this to put AMX opcodes directly into your code. The one limitation is that is allows only one argument. Syntax: ",(0,t.jsx)(n.code,{children:"#emit <opcode> <argument>"}),". ",(0,t.jsx)(n.code,{children:"<argument>"})," can be a rational number, integer or (local or global) symbol(variables, functions and labels). The list of opcodes and their meaning can be found in Pawn Toolkit ver. 3664."]}),"\n",(0,t.jsx)(n.h2,{id:"endif",children:(0,t.jsx)(n.code,{children:"#endif"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"#endif"})," is like a close brace for if. #if doesn't use braces, everything is conditionally added up to the corresponding #endif."]}),"\n",(0,t.jsx)(n.h2,{id:"endinput-endscript",children:(0,t.jsx)(n.code,{children:"#endinput, #endscript"})}),"\n",(0,t.jsx)(n.p,{children:"This stops the inclusion of a single file."}),"\n",(0,t.jsx)(n.h2,{id:"error",children:(0,t.jsx)(n.code,{children:"#error"})}),"\n",(0,t.jsx)(n.p,{children:"This halts the compiler instantly and gives a custom error message. See #assert for an example."}),"\n",(0,t.jsx)(n.h2,{id:"if",children:(0,t.jsx)(n.code,{children:"#if"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"#if"})," is to the proprocessor what if is to code. You can choose exactly what to compile and what not to from here. For example consider the following code:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'#define LIMIT 10\n\nif (LIMIT < 10)\n{\n    printf("Limit too low");\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"That will compile as:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'if (10 < 10)\n{\n    printf("Limit too low");\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:'Which will clearly never be true and the compiler knows it - so it tells you so, giving you a "constant expression" warning. The question is, if it will never be true what\'s the point of including it at all? You could just remove the code but then there will be no checks if someone changes LIMIT and recompiles. This is what #if is for. Unlike normal if which gives a warning if the expression is constant, #if expressions MUST be constant. So:'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"#define LIMIT 10\n\n#if LIMIT < 10\n    #error Limit too low\n#endif\n"})}),"\n",(0,t.jsx)(n.p,{children:"That will check that the limit is not too small when you compile and if it is will give a compile time error, rather than you having to test the mode to see if there's something wrong. This also means that no excess code is generated. Note the lack of brackets too, you can use them, and may need them in more complex expressions, but they're not required."}),"\n",(0,t.jsx)(n.p,{children:"Here's another example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'#define LIMIT 10\n\nif (LIMIT < 10)\n{\n    printf("Limit less than 10");\n}\nelse\n{\n    printf("Limit equal to or above 10");\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Again this is a constant check, which will give a warning, but both prints will be compiled when we KNOW only one will ever run. Using #if this becomes:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'#define LIMIT 10\n\n#if LIMIT < 10\n    printf("Limit less than 10");\n#else\n    printf("Limit equal to or above 10");\n#endif\n'})}),"\n",(0,t.jsx)(n.p,{children:"That way only the printf which is required will be compiled and the other one will still be in your source code incase they change LIMIT and recompile, but won't be included in the code as it's not needed. This way also means the pointless if isn't run every time your code is run, which is always good."}),"\n",(0,t.jsx)(n.h2,{id:"include",children:(0,t.jsx)(n.code,{children:"#include"})}),"\n",(0,t.jsx)(n.p,{children:"This takes all the code from a specified file and inserts it into your code at the point at which the include line is. There are two types of include: relative and system (I just made those terms up, if you have better ones please say). Relative includes use double quotes around the filename and are located relative to the current file, so:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'#include "me.pwn"\n'})}),"\n",(0,t.jsx)(n.p,{children:'would include the file "me.pwn" from the same directory as the file including that file. The other type, system, includes the file from the "include" directory that is located either in same directory as is Pawn compiler or parent directory(paths:"include","../include"):'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'#include "<me>"\n'})}),"\n",(0,t.jsx)(n.p,{children:'Would include the file "me.inc" (note the lack of extension, you can specify one if the file is not .p (not .pwn) or .inc) from the pawno/include directory (assuming you\'re using pawno).'}),"\n",(0,t.jsx)(n.p,{children:"Both these types can take directories:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'#include "folder/me.pwn"\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"#include <folder/me>\n"})}),"\n",(0,t.jsx)(n.p,{children:"Both of those will include a file one directory down from their respective default directories. If the file does not exist compile fails instantly."}),"\n",(0,t.jsx)(n.h2,{id:"pragma",children:(0,t.jsx)(n.code,{children:"#pragma"})}),"\n",(0,t.jsx)(n.p,{children:"This is one of the most complex directives. It has a number of options to control how your script works. An example setting would look like:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"#pragma ctrlchar '$'\n"})}),"\n",(0,t.jsxs)(n.p,{children:['That changes the escape character from \\ to $, so a new line, instead of being "\\r\\n" (windows CR-LF) would be "$r$n". Many of the options are designed to control amx compilation for embedded systems and so limit things which are really almost unlimited on a PC, they are all listed in pawn-lang.pdf but only selected ones relevant to SA',":MP"," are here:"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Values"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"codepage"}),(0,t.jsx)(n.td,{children:"name/value"}),(0,t.jsx)(n.td,{children:"Sets the Unicode codepage to use for strings."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"compress"}),(0,t.jsx)(n.td,{children:"1/0"}),(0,t.jsx)(n.td,{children:"Unsupported in SA-MP - don't try to use it."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"deprecated"}),(0,t.jsx)(n.td,{children:"symbol"}),(0,t.jsx)(n.td,{children:"Generated a warning if the given symbol is used to tell people there's a better version available."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"dynamic"}),(0,t.jsx)(n.td,{children:"value(generally a power of 2)"}),(0,t.jsx)(n.td,{children:"Sets the size of memory (in cells) assigned to the stack and heap. Required if you get excess memory usage warning after compilation. (A weird table after the compiler copyright line)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"library"}),(0,t.jsx)(n.td,{children:"dll name"}),(0,t.jsxs)(n.td,{children:["Widley incorrectly used in SA-MP. This specifies the dll to get the native functions defined in the file it is from. It does not define a file ",(0,t.jsx)(n.strong,{children:"as"})," a library."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"pack"}),(0,t.jsx)(n.td,{children:"1/0"}),(0,t.jsx)(n.td,{children:'Swap the meanings of !"" and "". See pawn-lang.pdf for more information on packed strings.'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tabsize"}),(0,t.jsx)(n.td,{children:"value"}),(0,t.jsxs)(n.td,{children:["Another widely misused setting. This should be used to set the size of a tab to avoid compiler warnings which are wrong due to spaces and tabs being used interchangably. This is set to 4 in SA",":MP"," as that is the size of a tab in pawno. Setting this to 0 will surpress all your indentation warnings but is highly unadvised as it allows entirely unreadable code."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"unused"}),(0,t.jsx)(n.td,{children:"symbol"}),(0,t.jsx)(n.td,{children:'Like deprecated this appears after the symbol you wish to surpress the "symbol is never used" warning for. Generally the preferred method of doing this is by using stock however this is not always applicable (e.g. function parameters cannot not be compiled).'})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"deprecated",children:"Deprecated"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'new\n    gOldVariable = 5;\n\n#pragma deprecated gOldVariable\n\nmain() {printf("%d", gOldVariable);}\n'})}),"\n",(0,t.jsx)(n.p,{children:"That will give a warning that gOldVariable should not be used anymore. This is mostly useful for functions to preserve backwards compatability while updating the API."}),"\n",(0,t.jsx)(n.h3,{id:"tryinclude",children:(0,t.jsx)(n.code,{children:"#tryinclude"})}),"\n",(0,t.jsx)(n.p,{children:"This is similar to #include but if the file doesn't exist the compilation doesn't fail. This is useful for only including features in your script if a person has the correct plugin installed (or at least the plugin include):"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"myinc.inc"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'#if defined _MY_INC_INC\n    #endinput\n#endif\n#define _MY_INC_INC\n\nstock MyIncFunc() {printf("Hello");}\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Gamemode:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"#tryinclude <myinc>\n\nmain()\n{\n    #if defined _MY_INC_INC\n        MyIncFunc();\n    #endif\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"That will only call MyIncFunc if the file with it in was found and compiled. This, as stated before, is good for things like IRC plugins to check if they actually have the plugin."}),"\n",(0,t.jsx)(n.h3,{id:"undef",children:(0,t.jsx)(n.code,{children:"#undef"})}),"\n",(0,t.jsx)(n.p,{children:"Removes a previously defined macro or constant symbol."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'#define MOO 10\nprintf("%d", MOO);\n#undef MOO\nprintf("%d", MOO);\n'})}),"\n",(0,t.jsx)(n.p,{children:"That will fail to compile as MOO doesn't exist anymore by the time the second printf is reached."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'enum {\n    e_example = 300\n};\n\nprintf("%d", e_example);\n#undef e_example\nprintf("%d", e_example); // fatal error\n'})})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}}}]);