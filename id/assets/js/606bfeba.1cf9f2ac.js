"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[22257],{28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var i=t(96540);const a={},r=i.createContext(a);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(r.Provider,{value:n},e.children)}},92554:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"scripting/language/reference/Directives","title":"Directives","description":"---","source":"@site/docs/scripting/language/reference/09-Directives.md","sourceDirName":"scripting/language/reference","slug":"/scripting/language/reference/Directives","permalink":"/id/docs/scripting/language/reference/Directives","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/language/reference/09-Directives.md","tags":[],"version":"current","sidebarPosition":9,"frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"Statements","permalink":"/id/docs/scripting/language/reference/Statements"},"next":{"title":"Proposed-function-library","permalink":"/id/docs/scripting/language/reference/Proposed-function-library"}}');var a=t(74848),r=t(28453);const s={},o="Directives",l={},c=[];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",header:"header",hr:"hr",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"directives",children:"Directives"})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.p,{children:"All directives must appear first on a line (they may be preceded by white space,\nbut not by any other characters). All directives start with the character # and\nthe complete instruction may not span more than one line."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"#assert"})," ",(0,a.jsx)(n.em,{children:"constant expression"})]}),"\n",(0,a.jsx)(n.p,{children:"Issues a compile time error if the supplied constant expression evalu-\nates to zero. The #assert directive is most useful to guard against\nimplementation defined constructs on which a program may depend,\nsuch as the cell size in bits, or the number of packed characters per cell."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"#define"})," ",(0,a.jsx)(n.em,{children:"pattern replacement"})]}),"\n",(0,a.jsx)(n.p,{children:"Defines a text substitution macro. The pattern is matched to all lines\nread from the source files; the sections that match are replaced by\nthe replacement texts. The pattern and the replacement texts may\ncontain parameters, denoted by \u201c%0\u201d to \u201c%9\u201d. See page 93 for details\nand examples on text substitution."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"#emit"})," ",(0,a.jsx)(n.em,{children:"opcode, parameters"})]}),"\n",(0,a.jsx)(n.p,{children:"The #emit directive serves as an inline assembler. It is currently used\nonly for testing the abstract machine."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"#endinput & #endscript"})}),"\n",(0,a.jsx)(n.p,{children:"Closes the current file and thereby ignores\nall the text below the #endinput directive.\nThe directive #endscript is a synonym for #endinput."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"#error"})}),"\n",(0,a.jsx)(n.p,{children:"message: Signals a \u201cuser error\u201d with the specified message. User er-\nrors are fatal errors and they serve a similar purpose as the #assert\ndirective."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"#file"})," ",(0,a.jsx)(n.em,{children:"name"})]}),"\n",(0,a.jsx)(n.p,{children:"Adjusts the name for the current file. This directive is used implicitly\nby the text preprocessor; there is usually no need to set a filename\nexplicitly."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"#if"})," ",(0,a.jsx)(n.em,{children:"constant expression"}),", #elseif, #else, #endif"]}),"\n",(0,a.jsx)(n.p,{children:"Portions of a program may be parsed or be ignored depending on cer-\ntain conditions. The pawn parser (compiler or interpreter) generates\ncode only for those portions for which the condition is true."}),"\n",(0,a.jsx)(n.p,{children:"The directive #if must be followed by a constant expression. To check\nwhether a variable or constant is defined, use the defined operator."}),"\n",(0,a.jsx)(n.p,{children:"Zero or more #elseif directives may follow the initial #if directive.\nThese blocks are skipped if any of the preceding #if or #elseif blocks\nwere parsed (i.e. not skipped). As with the #if directive, a constant\nexpression must follow the #elseif expression."}),"\n",(0,a.jsx)(n.p,{children:"The #else causes the parser to skip all lines up to #endif if the pre-\nceding #if or any of the preceding #elseif directives were \u201ctrue\u201d, and\nthe parses these lines if all preceding blocks were skipped. The #else\ndirective may be omitted; if present, there may be only be one #else\nassociated with each #if."}),"\n",(0,a.jsx)(n.p,{children:"The #endif directive terminates a program portion that is parsed con-\nditionally. Conditional directives can be nested and each #if directive\nmust be ended by an #endif directive."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"#include"})," ",(0,a.jsx)(n.em,{children:"filename"})," or ",(0,a.jsx)(n.em,{children:"< filename >"})]}),"\n",(0,a.jsx)(n.p,{children:"Inserts the contents of the specified file at the current position within\nthe current file. A filename between angle brackets (\u201c<\u201d and \u201c>\u201d)\nrefers to a system file; the pawn parser (compiler or interpreter) will\nsearch for such files only in a preset list of directories and not in the\n\u201ccurrent\u201d directory. Filenames that are unquoted or that appear in\ndouble quotes are normal include files, for which a pawn parser will\nlook in the currect directory first."}),"\n",(0,a.jsx)(n.p,{children:"The pawn parser first attempts to open the file with the specified\nname. If that fails, it tries appending the extensions \u201c.inc\u201d, \u201c.p\u201d\nand \u201c.pawn\u201d to the filename (in that order). The proposed default\nextension of include files is \u201c.inc\u201d."}),"\n",(0,a.jsxs)(n.p,{children:["When the file can be opened successfully, the #include directive de-\nfines a constant with the name \u201c",(0,a.jsx)(n.em,{children:"inc"}),"\u201d plus the base name of the\nfile (the filename without path and extension) and the value 1. If\nthe constant already exists, the #include directive skips opening and\nincluding the file, thus preventing a double inclusion. To force a dou-\nble include, remove the constant definition with the #undef directive\nbefore the second inclusion of the file."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"#line"})," ",(0,a.jsx)(n.em,{children:"number"})]}),"\n",(0,a.jsx)(n.p,{children:"The current line number (in the current file). This directive is used\nimplicitly by the text preprocessor; there is usually no need to set the\nline number explicitly."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"#pragma"})," ",(0,a.jsx)(n.em,{children:"extra information"})]}),"\n",(0,a.jsx)(n.p,{children:"A \u201cpragma\u201d is a hook for a parser to specify additional settings, such\nas warning levels or extra capabilities. Common #pragmas are:"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"#pragma"})," align"]}),"\n",(0,a.jsx)(n.p,{children:"Aligns the next declaration to the offset set with the alignment\ncompiler option. Some (native) functions may perform better\nwith parameters that are passed by reference when these are on\nboundaries of 8, 16, or even 32 bytes. Alignment requirements\nare dependent of the host applications."}),"\n",(0,a.jsx)(n.p,{children:"Putting the #pragma align line in front of a declaration of a\nglobal or a static variable aligns this variable to the bound-\nary set with the compiler option. Note that this #pragma\naligns only the variable that immediately follows the #pragma.\nThe alignment of subsequent variables depends on the size and\nalignment of the variables that precede it. For example, if a\nglobal array variable of 2 cells is aligned on a 16-byte boundary\nand a cell is 4 bytes, the next global variable is located 8 bytes\nfurther."}),"\n",(0,a.jsx)(n.p,{children:"Putting the #pragma align line in front of a declaration of\na function will align the stack frame of that function to the\nboundary specified earlier, with the result that the first local,\nnon-\u201cstatic\u201d, variable is aligned to that boundary. The align-\nment of subsequent variables depends on the size and align-\nment of the variables that precede it. In practice, to align a\nlocal non-static variable, you must align the function\u2019s stack\nframe and declare that variable before any other variables."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"#pragma"})," amxlimit ",(0,a.jsx)(n.em,{children:"value"})]}),"\n",(0,a.jsx)(n.p,{children:"Sets the maximum size, in bytes, that the compiled script may\ngrow to. This pragma is useful for (embedded) environments\nwhere the maximum size of a script is bound to a hard upper\nlimit."}),"\n",(0,a.jsx)(n.p,{children:"If there is no setting for the amount of RAM for the data and\nstack (see the pragma amxram), this refers to the total memory\nrequirements; if the amount of RAM is explicitly set, this value"}),"\n",(0,a.jsx)(n.p,{children:"only goves the amount of memory needed for the code and the\nstatic data."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"#pragma"})," amxram ",(0,a.jsx)(n.em,{children:"value"})]}),"\n",(0,a.jsx)(n.p,{children:"Sets the maximum memory requirements, in bytes, for data\nand stack that a compiled script may have. This value is is\nuseful for (embedded) environments where the maximum data\nsize of a script is bound to a hard upper limit. Especially in"}),"\n",(0,a.jsx)(n.p,{children:"the case where the pawn script runs from ROM, the sizes for\nthe code and data sections need both to be set."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"#pragma"})," codepage ",(0,a.jsx)(n.em,{children:"name/value"})]}),"\n",(0,a.jsx)(n.p,{children:"The pawn parser can translate characters in unpacked strings\nand character constants to Unicode/UCS-4 \u201cwide\u201d characters.\nThis #pragma indicates the codepage that must be used for\nthe translation. See the section \u201cInternationalization\u201d on page"}),"\n",(0,a.jsx)(n.p,{children:"139 for details and required extra resources for the codepage\ntranslation."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"#pragma"})," compress ",(0,a.jsx)(n.em,{children:"value"})]}),"\n",(0,a.jsx)(n.p,{children:"The pawn parser may write the generated P-code in compact\nor plain (\u201cnon-compact\u201d) encoding. The default depends on\nthe parser configuration (and, perhaps, user settings). This\n#pragma allows the script writer to override the default and"}),"\n",(0,a.jsx)(n.p,{children:"force compact encoding (when value is non-zero) or to force\nplain encoding (when value is zero). Especially toggling com-\npact encoding off (forcing plain encoding) is useful, because"}),"\n",(0,a.jsx)(n.p,{children:"the pawn parser may be unable to compile a particular script\nin \u201ccompact encoding\u201d mode."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"#pragma"})," ctrlchar ",(0,a.jsx)(n.em,{children:"character"})]}),"\n",(0,a.jsx)(n.p,{children:"Defines the character to use to indicate the start of a \u201cescape sequence\u201d.\nBy default, the control character is \u201c\\\u201d."}),"\n",(0,a.jsx)(n.p,{children:"For example"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"#pragma ctrlchar \u2019\\$\u2019**"})}),"\n",(0,a.jsx)(n.p,{children:"You may give the new value for the control character as a char-\nacter constant (between single quotes) or as a decimal or hex-\nadecimal value. When you omit the value of the new control\ncharacter, the parser reverts to the default control character."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"#pragma dynamic"})," ",(0,a.jsx)(n.em,{children:"value"})]}),"\n",(0,a.jsx)(n.p,{children:"Sets the size, in cells, of the memory block for dynamic data\n(the stack and the heap) to the value specified by the expres-\nsion. The default size of the dynamic data block is implemen-\ntation defined. An implementation may also choose to grow\nthe block on an as-needed basis (see the host program\u2019s docu-\nmentation, or the \u201cImplementor\u2019s Guide\u201d for details)."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"#pragma library"})," ",(0,a.jsx)(n.em,{children:"name"})]}),"\n",(0,a.jsx)(n.p,{children:"Sets the name of the (dynamically linked) extension module\nthat contains required native functions. This #pragma should\nappear above native function declarations that are part of the\nextension module."}),"\n",(0,a.jsx)(n.p,{children:"The library name parameter may be absent, in which case\nany subsequent native function declarations are not associated\nwith any extension module."}),"\n",(0,a.jsx)(n.p,{children:"The scope of this #pragma runs from the line at which it ap-\npears until the end of the file in which it appears. In typical\nusage, a #pragma library line will appear at the top of an\ninclude file that declares native functions for an extension mod-\nule, and the scope of the library \u201clink\u201d ends at the end of that\ninclude file."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"#pragma pack"})," ",(0,a.jsx)(n.em,{children:"value"})]}),"\n",(0,a.jsx)(n.p,{children:'If value is zero, packed literal strings start with \u201c!"\u201d (exclama-\ntion point + double quote) and unpacked literal strings with\nonly a double quote (\u201c"\u201d), as described in this manual at page 99.\nIf value is non-zero, the syntax for packed and unpacked\nliteral strings is swapped: literal strings that start with a dou-\nble quote are packed and literal strings that start with \u201c!"\u201d\nare unpacked.'}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"#pragma rational"})," ",(0,a.jsx)(n.em,{children:"tagname(value)"})]}),"\n",(0,a.jsx)(n.p,{children:"Enables support for rational numbers. The tagname is the\nname of the tag that rational numbers will have; typically one\nchooses the names \u201cFloat:\u201d or \u201cFixed:\u201d. The presence of\nvalue in parentheses behind tagname is optional: if it is omit-\nted, a rational number is stored as a \u201cfloating point\u201d value\naccording to the IEEE 754 norm; if it is present, a rational\nnumber is a fixed precision number (\u201cscaled integer\u201d) with the\nspecified number of decimals."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"#pragma semicolon"})," ",(0,a.jsx)(n.em,{children:"value"})]}),"\n",(0,a.jsx)(n.p,{children:"If value is zero, no semicolon is required to end a statement if\nthat statement is last on a line. Semicolons are still needed to\nseparate multiple statements on the same line."}),"\n",(0,a.jsx)(n.p,{children:"When semicolons are optional (the default), a postfix operator\n(one of \u201c++\u201d, \u201c--\u201d and \u201cchar\u201d) may not be the first token on\na line, as they will be interpreted as prefix operators."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"#pragma tabsize"})," ",(0,a.jsx)(n.em,{children:"value"})]}),"\n",(0,a.jsx)(n.p,{children:"The number of characters between two consecutive tab posi-\ntions. The default value is 8. You may need to set the tab\nsize to avoid warning 217 (loose indentation) if the source code\nis indented alternately with spaces and with tab characters.\nAlternatively, by setting the \u201ctabsize\u201d #pragma to zero, the\nparser will no longer issue warning 217."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"#pragma unused"})," ",(0,a.jsx)(n.em,{children:"symbol,..."})]}),"\n",(0,a.jsx)(n.p,{children:"Marks the named symbol as \u201cused\u201d. Normally, the pawn\nparser warns about unused variables and unused local con-\nstants. In most situations, these variables and constants are\nredundant, and it is better to remove them for the sake of code"}),"\n",(0,a.jsx)(n.p,{children:"clarity. Especially in the case of local constants, it may, how-\never, be better (or required) to keep the constant definitions.\nThis #pragma then permits to mark the symbol (variable or\nconstant) as \u201cused\u201d, and avoid a parser warning."}),"\n",(0,a.jsx)(n.p,{children:"The #pragma must appear after the symbol declaration \u2014but\nit need not appear immediately after the declaration."}),"\n",(0,a.jsx)(n.p,{children:"Multiple symbol names may appear in a single #pragma; the\nsymbols must be separated by commas."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"#section"})," ",(0,a.jsx)(n.em,{children:"name"})]}),"\n",(0,a.jsx)(n.p,{children:"Starts a new section for the generated code. Any variables and func-\ntions that are declared \u201cstatic\u201d are only visible to the section to\nwhich they belong. By default, each source file is a separate section\nand there is only one section per file."}),"\n",(0,a.jsx)(n.p,{children:"With the #section directive, you can create multiple sections in a"}),"\n",(0,a.jsx)(n.p,{children:"source file. The name of a section is optional, if it is not set, a unique\nidentifier for the source file is used for the name of the section."}),"\n",(0,a.jsx)(n.p,{children:"Any declared section ends automatically at the end of the file."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"#tryinclude"})," ",(0,a.jsx)(n.em,{children:"filename"})," or ",(0,a.jsx)(n.em,{children:"< filename >"})]}),"\n",(0,a.jsx)(n.p,{children:"This directive behaves similarly as the #include directive, but it does\nnot give an error when the file to include does not exist \u2014i.e., try to\ninclude but fail silently on error."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"#undef"})," ",(0,a.jsx)(n.em,{children:"name"})]}),"\n",(0,a.jsx)(n.p,{children:"Removes a text substitution macro or a numeric constant declared\nwith const. The \u201cname\u201d parameter must be the macro \u201cprefix\u201d \u2014the\nalphanumeric part of the macro. See page 93 for details and examples\non text substitution."}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"See also \u201cPredefined constants\u201d on page 102"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"Escape character: 99"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"Rational number support: 98"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"Warning messages: 161"})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"/id/docs/scripting/language/reference/Contents",children:"Go Back to Contents"})})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}}}]);