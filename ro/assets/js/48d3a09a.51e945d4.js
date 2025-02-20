"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[28005],{16502:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"scripting/language/reference/Pitfalls-differences-from-C","title":"Pitfalls: differences from C","description":"---","source":"@site/docs/scripting/language/reference/11-Pitfalls-differences-from-C.md","sourceDirName":"scripting/language/reference","slug":"/scripting/language/reference/Pitfalls-differences-from-C","permalink":"/ro/docs/scripting/language/reference/Pitfalls-differences-from-C","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/language/reference/11-Pitfalls-differences-from-C.md","tags":[],"version":"current","sidebarPosition":11,"frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"Proposed-function-library","permalink":"/ro/docs/scripting/language/reference/Proposed-function-library"},"next":{"title":"Assorted-tips","permalink":"/ro/docs/scripting/language/reference/Assorted-tips"}}');var r=t(74848),a=t(28453);const i={},o="Pitfalls: differences from C",l={},c=[];function d(e){const n={a:"a",em:"em",h1:"h1",header:"header",hr:"hr",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"pitfalls-differences-from-c",children:"Pitfalls: differences from C"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"PAWN lacks the typing mechanism of C. PAWN is an \u201cinteger-only\u201d variety of C; there are no structures or unions, and floating point support must be implemented with user-defined operators and the help of native functions."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"The accepted syntax for rational numbers is stricter than that of floating point values in C. Values like \u201c.5\u201d and \u201c6.\u201d are acceptable in C, but in PAWN one must write \u201c0.5\u201d and \u201c6.0\u201d respectively. In C, the decimal period is optional if an exponent is included, so one can write \u201c2E8\u201d; PAWN does not accept the upper case \u201cE\u201d (use a lower case \u201ce\u201d) and it requires the decimal point: e.g. \u201c2.0e8\u201d. See page 98 for more information."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"PAWN does not provide \u201cpointers\u201d. For the purpose of passing function arguments by reference, PAWN provides a \u201creference\u201d argument, (page 71). The \u201cplaceholder\u201d argument replaces some uses of the NULL pointer (page 75)."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Numbers can have hexadecimal, decimal or binary radix. Octal radix is not supported. See \u201cConstants\u201d on page 98. Hexadecimal numbers must start with \u201c0x\u201d (a lower case \u201cx\u201d), the prefix \u201c0X\u201d is invalid."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Escape sequences (\u201c\\n\u201d, \u201c\\t\u201d, etc.) are the same, except for \u201c\\ddd\u201d where \u201cddd\u201d represent three decimal digits, instead of the octal digits that C/C++ uses. The backslash (\u201c\\\u201d) may be replaced with another symbol; see #pragma ctrlchar on page 120 \u2014notably, previous versions of PAWN used the caret (\u201c^\u201d) as the escape character."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Cases in a switch statement are not \u201cfall through\u201d. Only a single instruction may (and must) follow each case label. To execute multiple instructions, you must use a compound statement. The default clause of a switch statement must be the last clause of the switch statement. More on page 115. In C/C++, switch is a \u201cconditional goto\u201d, akin to Fortran\u2019s calculated labels. In PAWN, switch is a structured \u201cif\u201d."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"A break statement breaks out of loops only. In C/C\u207a\u207a, the break statement also ends a case in a switch statement. Switch statements are implemented differently in PAWN (see page 115)."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["PAWN supports \u201carray assignment\u201d, with the restriction that both arrays must have the same size. For example, if \u201ca\u201d and \u201cb\u201d are both arrays with 6 cells, the expression \u201ca = b\u201d is valid. Next to literal strings, PAWN also supports literal arrays, allowing the expression \u201ca = ",5,"\u201d (where \u201ca\u201d is an array variable with 6 elements)."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"char"})," is an operator, not a type. See page 110 and the tips on page 137."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"defined"})," is an operator, not a preprocessor directive. The defined operator in PAWN operates on constants (with const and enum), global variables, local variables and functions."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"sizeof"})," operator returns the size of a variable in \u201celements\u201d, not in \u201cbytes\u201d. An element may be a cell or a sub-array. See page 109 for details."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"The empty instruction is an empty compound block, not a semicolon (page 112). This modification avoids a frequent error."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"The compiler directives differ from C\u2019s preprocessor commands. Notably, the #define directive is incompatible with that of C/C\u207a\u207a, and #ifdef and #ifndef are replaced by the more general #if directive (see \u201cDirectives\u201d on page 117). To create numeric constants, see also page 101; to create string constants, see also page 93."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Text substitutions (preprocessor macros; see the #define directive) are not matched across lines. That is, the text that you want to match and replace with a #define macro must appear on a single line. The definition of a #define macro must also appear on a single line."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"The direction for truncation for the operator \u201c/\u201d is always towards the smaller value, where -2 is smaller than -1. The \u201c%\u201d operator always gives a positive result, regardless of the signs of the operands. See page 104."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"There is no unary \u201c+\u201d operator, which is a \u201cno-operation\u201d operator anyway."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Three of the bitwise operators have different precedence than in C. The precedence levels of the \u201c&\u201d, \u201c^\u201d and | operators is higher than the rela- tional operators (Dennis Ritchie explained that these operators got their low precedence levels in C because early C compilers did not yet have the logical \u201c&&\u201d and || operators, so the bitwise \u201c&\u201d and | were used instead)."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"The \u201cextern\u201d keyword does not exist in PAWN; the current implementation of the compiler has no \u201clinking phase\u201d. To create a program from several source files, add all source files the compilers command line, or create one main project script file that \u201c#include\u2019s\u201d all other source files. The PAWN compiler can optimize out functions and global variables that you do not use. See pages 63 and 84 for details."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"In most situations, forward declarations of functions (i.e., prototypes) are not necessary. PAWN is a two-pass compiler, it will see all functions on the first pass and use them in the second pass. User-defined operators must be declared before use, however."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"If provided, forward declarations must match exactly with the function def-\ninition, parameter names may not be omitted from the prototype or differ\nfrom the function definition. PAWN cares about parameter names in pro-\ntotypes because of the \u201cnamed parameters\u201d feature. One uses prototypes\nto call forwardly declared functions. When doing so with named param-\neters, the compiler must already know the names of the parameters (and\ntheir position in the parameter list). As a result, the parameter names in a\nprototype must be equal to the ones in the definition."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/ro/docs/scripting/language/reference/Contents",children:"Go Back to Contents"})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var s=t(96540);const r={},a=s.createContext(r);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);