"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[14830],{28453:(e,n,a)=>{a.d(n,{R:()=>r,x:()=>l});var i=a(96540);const t={},s=i.createContext(t);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(s.Provider,{value:n},e.children)}},41391:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"scripting/language/reference/Data-and-declarations","title":"Data and declarations","description":"---","source":"@site/docs/scripting/language/reference/03-Data-and-declarations.md","sourceDirName":"scripting/language/reference","slug":"/scripting/language/reference/Data-and-declarations","permalink":"/th/docs/scripting/language/reference/Data-and-declarations","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/language/reference/03-Data-and-declarations.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"A-tutorial-introduction","permalink":"/th/docs/scripting/language/reference/A-tutorial-introduction"},"next":{"title":"Functions","permalink":"/th/docs/scripting/language/reference/Functions"}}');var t=a(74848),s=a(28453);const r={},l="Data and declarations",o={},c=[{value:"\u2022 State variable declarations",id:"-state-variable-declarations",level:3},{value:"\u2022 Static local declarations",id:"-static-local-declarations",level:3},{value:"\u2022 Static global declarations",id:"-static-global-declarations",level:3},{value:"\u2022 Stock declarations",id:"-stock-declarations",level:3},{value:"\u2022 Public declarations",id:"-public-declarations",level:3},{value:"\u2022 Arrays (single dimension)",id:"-arrays-single-dimension",level:3},{value:"\u2022 Initialization",id:"-initialization",level:3},{value:"\u2022 Progressive initiallers for arrays",id:"-progressive-initiallers-for-arrays",level:3},{value:"\u2022 array initialization and enumerations",id:"-array-initialization-and-enumerations",level:3},{value:"\u2022 Multi-dimensional arrays",id:"-multi-dimensional-arrays",level:3},{value:"\u2217 The current implementation of the Pawn compiler supports only arrays with up to two dimensions.",id:"-the-current-implementation-of-the-pawn-compiler-supports-only-arrays-with-up-to-two-dimensions",level:6},{value:"\u2022 Arrays and the sizeof operator",id:"-arrays-and-the-sizeof-operator",level:3},{value:"\u2022 Tag names",id:"-tag-names",level:3}];function d(e){const n={a:"a",br:"br",code:"code",h1:"h1",h3:"h3",h6:"h6",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"data-and-declarations",children:"Data and declarations"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.p,{children:"PAWN is a typeless language. All data elements are of type \u201ccell\u201d, and a cell\ncan hold an integral number. The size of a cell (in bytes) is system dependent\n\u2014usually, a cell is 32-bits."}),"\n",(0,t.jsx)(n.p,{children:"The keyword new declares a new variable. For special declarations, the keyword\nnew is replaced by static, public or stock (see below). A simple variable\ndeclaration creates a variable that occupies one \u201ccell\u201d of data memory. Unless\nit is explicitly initialized, the value of the new variable is zero."}),"\n",(0,t.jsx)(n.p,{children:"A variable declaration may occur:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"at any position where a statement would be valid \u2014local variables;"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"at any position where a function declaration (native function declarations) or a function implementation would be valid \u2014global variables;"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"in the first expression of a for loop instruction \u2014also local variables."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Local declarations"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"A local declaration appears inside a compound statement. A local variable can only be accessed from within the compound statement, and from nested compound statements. A declaration in the first expression of a for loop instruction is also a local declaration."})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Global declarations"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"A global declaration appears outside a function and a global variable is accessible to any function. Global data objects can only be initialized with constant expressions."})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"\u201cfor\u201d loop: 113"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"Compound statement: 112"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"-state-variable-declarations",children:"\u2022 State variable declarations"}),"\n",(0,t.jsx)(n.p,{children:"A state variable is a global variable with a state classifier appended at the end.\nThe scope and the lifespan of the variable are restricted to the states that are\nlisted in the classifier."}),"\n",(0,t.jsx)(n.p,{children:"State variables may not be initialized. In contrast to normal variables (which\nare zero after declaration \u2014unless explicitly initialized), state variables\nhold an indeterminate value after declaration and after first entering a state in its\nclassifier. Typically, one uses the state entry function(s) to properly\ninitialize the state variable."}),"\n",(0,t.jsx)(n.h3,{id:"-static-local-declarations",children:"\u2022 Static local declarations"}),"\n",(0,t.jsxs)(n.p,{children:["A local variable is destroyed when the execution leaves the compound block\nin which the variable was created. Local variables in a function",(0,t.jsx)(n.br,{}),"\n","only exist during the run time of that function. Each new run of the function creates\nand initializes new local variables. When a local variable is",(0,t.jsx)(n.br,{}),"\n","declared with the keyword static rather than new, the variable remains in existence after\nthe end of a function. This means that static local variables provide private,\npermanent storage that is accessible only from a single function (or compound\nblock). Like global variables, static local variables can only be initialized\nwith constant expressions."]}),"\n",(0,t.jsx)(n.h3,{id:"-static-global-declarations",children:"\u2022 Static global declarations"}),"\n",(0,t.jsx)(n.p,{children:"A static global variable behaves the same as a normal global variable, except\nthat its scope is restricted to the file that the declaration resides in. To\ndeclare a global variable as static, replace the keyword new by static."}),"\n",(0,t.jsx)(n.h3,{id:"-stock-declarations",children:"\u2022 Stock declarations"}),"\n",(0,t.jsx)(n.p,{children:"A global variable may be declared as \u201cstock\u201d. A stock declaration is one that\nthe parser may remove or ignore if the variable turns out not to be used in the program."}),"\n",(0,t.jsx)(n.p,{children:"Stock variables are useful in combination with stock functions. A public vari-\nable may be declared as \u201cstock\u201d as well \u2014declaring public variables as \u201cpublic\nstock\u201d enables you to declare al public variables that a host application pro-\nvides in an include file, with only those variables that the script actually\nuses winding up in the P-code file."}),"\n",(0,t.jsx)(n.h3,{id:"-public-declarations",children:"\u2022 Public declarations"}),"\n",(0,t.jsx)(n.p,{children:"Global \u201csimple\u201d variables (no arrays) may be declared \u201cpublic\u201d in two ways:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"declare the variable using the keyword public instead of new;"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"start the variable name with the \u201c@\u201d symbol."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Public variables behave like global variables, with the addition that the host\nprogram can also read and write public variables. A (normal) global variable\ncan only be accessed by the functions in your script \u2014the host",(0,t.jsx)(n.br,{}),"\n","program is unaware of them. As such, a host program may require that you declare a\nvariable with a specific name as \u201cpublic\u201d for special purposes \u2014such as the\nmost recent error number, or the general program state."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"Symbolic constants: 101"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"Stock functions: 84"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.p,{children:"\u2022 Constant variables"}),"\n",(0,t.jsx)(n.p,{children:"It is sometimes convenient to be able to create a variable that is initialized\nonce and that may not be modified. Such a variable behaves much like a symbolic\nconstant, but it still is a variable."}),"\n",(0,t.jsx)(n.p,{children:"To declare a constant variable, insert the keyword const between the keyword\nthat starts the variable declaration \u2014new, static, public or stock\u2014 and the\nvariable name."}),"\n",(0,t.jsx)(n.p,{children:"Examples:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"\nnew const address[4] = { 192, 0, 168, 66 }\n\npublic const status           /* initialized to zero */\n\n"})}),"\n",(0,t.jsx)(n.p,{children:"Three typical situations where one may use a constant variable are:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"To create an \u201carray\u201d constant; symbolic constants cannot be indexed."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"For a public variable that should be set by the host application, and only by the host application. See the preceding section for public variables."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"A special case is to mark array arguments to functions as const. Array arguments are always passed by reference, declaring them as const guards against unintentional modification. Refer to page 72 for an example of const function arguments."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"See also \u201cmultidimensional arrays\u201d, page 66"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"-arrays-single-dimension",children:"\u2022 Arrays (single dimension)"}),"\n",(0,t.jsx)(n.p,{children:"The syntax name[constant] declares name to be an array of \u201cconstant\u201d el-\nements, where each element is a single cell. The name is a placeholder of an\nidentifier name of your choosing and constant is a positive non-zero value;\nconstant may be absent. If there is no value between the brackets, the num-\nber of elements is set equal to the number of initiallers\n\u2014see the example below."}),"\n",(0,t.jsx)(n.p,{children:"The array index range is \u201czero based\u201d which means that the first element is at\nname[0] and the last element is name[constant-1]."}),"\n",(0,t.jsx)(n.h3,{id:"-initialization",children:"\u2022 Initialization"}),"\n",(0,t.jsx)(n.p,{children:"Data objects can be initialized at their declaration. The initialler of a\nglobal data object must be a constant. Arrays, global or local, must also be\ninitialized with constants."}),"\n",(0,t.jsx)(n.p,{children:"Uninitialized data defaults to zero.\nExamples:"}),"\n",(0,t.jsx)(n.p,{children:"Listing: good declaration"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'\nnew i = 1\nnew j                                   /* j is zero */\nnew k = \u2019a\u2019                             /* k has character code for letter \u2019a\u2019 */\n\nnew a[] = {1,4,9,16,25}                 /* a has 5 elements */\nnew s1[20] = {\u2019a\u2019,\u2019b\u2019}                  /* the other 18 elements are 0 */\n\nnew s2[] = "Hello world..."             /* a unpacked string */\n\n'})}),"\n",(0,t.jsx)(n.p,{children:"Examples of invalid declarations:"}),"\n",(0,t.jsx)(n.p,{children:"Listing: bad declarations"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'\nnew c[3] = 4                            /* an array cannot be set to a value */\nnew i = "Good-bye"                      /* only an array can hold a string */\nnew q[]                                 /* unknown size of array */\nnew p[2] = { i + j, k - 3 }             /* array initiallers must be constants */\n\n'})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"Constants: 98"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"-progressive-initiallers-for-arrays",children:"\u2022 Progressive initiallers for arrays"}),"\n",(0,t.jsx)(n.p,{children:"The ellipsis operator continues the progression of the initialisation\nconstants for an array, based on the last two initialized elements. The ellipsis operator\n(three dots, or \u201c...\u201d) initializes the array up to its declared size."}),"\n",(0,t.jsx)(n.p,{children:"Examples:"}),"\n",(0,t.jsx)(n.p,{children:"Listing: array initializers"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"\nnew a[10] = { 1, ... }                  /* sets all ten elements to 1 */\nnew b[10] = { 1, 2, ... }               /* sets: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 */\nnew c[8] = { 1, 2, 40, 50, ... }        /* sets: 1, 2, 40, 50, 60, 70, 80, 90 */\nnew d[10] = { 10, 9, ... }              /* sets: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 */\n\n"})}),"\n",(0,t.jsx)(n.h3,{id:"-array-initialization-and-enumerations",children:"\u2022 array initialization and enumerations"}),"\n",(0,t.jsxs)(n.p,{children:["The array size may be set with a constant that represents an",(0,t.jsx)(n.br,{}),"\n","enumeration: an example of this is the \u201cpriority queue\u201d sample program at page 21. When\nindividual fields of the enumeration have a size, the associated array elements\nare interpreted as sub-arrays, on occasion. For an example of this behaviour,\nsee the rpn calculator program at page 30."]}),"\n",(0,t.jsx)(n.p,{children:"The sub-array syntax applies as well to the initialization of an \u201cenumerated\u201d\narray. Referring again to the \u201cpriority queue\u201d sample program, to initialize a\n\u201cmessage\u201d array with fixed values, the syntax is:"}),"\n",(0,t.jsx)(n.p,{children:"Listing: array initializers"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'\nenum message /* declaration copied from "QUEUE.P" */\n    {\n        text[40 char],\n        priority\n    }\n\nnew msg[message] = { !"new message", 1 }\n\n'})}),"\n",(0,t.jsx)(n.p,{children:"The initialler consists of a string (a literal array) and a value; these go\ninto the fields \u201ctext\u201d and \u201cpriority\u201d respectively."}),"\n",(0,t.jsx)(n.h3,{id:"-multi-dimensional-arrays",children:"\u2022 Multi-dimensional arrays"}),"\n",(0,t.jsx)(n.p,{children:"Multi-dimensional arrays are arrays that contain references to the sub-arrays.\u2217\nThat is, a two-dimensional array is an \u201carray of single-dimensional arrays\u201d.\nBelow are a few examples of declarations of two-dimensional arrays."}),"\n",(0,t.jsx)(n.p,{children:"Listing: Two-dimensional arrays"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'\nnew a[4][3]\nnew b[3][2] = { { 1, 2 }, { 3, 4 }, { 5, 6 } }\nnew c[3][3] = { { 1 }, { 2, ...}, { 3, 4, ... } }\nnew d[2][5] = { !"agreement", !"dispute" }\nnew e[2][] = { "OK", "Cancel" }\nnew f[][] = { "OK", "Cancel" }\n\n'})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h6,{id:"-the-current-implementation-of-the-pawn-compiler-supports-only-arrays-with-up-to-two-dimensions",children:"\u2217 The current implementation of the Pawn compiler supports only arrays with up to two dimensions."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.p,{children:"As the last two declarations (variable \u201ce\u201d en \u201cf\u201d) show, the final dimension\nof an array may have an unspecified length, in which case the length of each\nsub-array is determined from the related initializer. Every sub-array may have\na different size; in this particular example, \u201ce[1][5]\u201d contains the letter \u201dl\u201d\nfrom the word \u201cCancel\u201d, but \u201ce[0][5]\u201d is invalid because the length of the\nsub-array \u201ce[0]\u201d is only three cells (containing the letters \u201cO\u201d, \u201cK\u201d and a\nzero terminator)."}),"\n",(0,t.jsx)(n.p,{children:"The difference between the declarations for arrays \u201ce\u201d and \u201cf\u201d is that in we\nlet the compiler count the number of initializers for the major dimension \u2014\n\u201csizeof f\u201d is 2, like \u201csizeof e\u201d (see the next section on the sizeof operator)."}),"\n",(0,t.jsx)(n.h3,{id:"-arrays-and-the-sizeof-operator",children:"\u2022 Arrays and the sizeof operator"}),"\n",(0,t.jsx)(n.p,{children:"The sizeof operator returns the size of a variable in \u201celements\u201d. For a simple\n(non-compound) variable, the result of sizeof is always 1, because an element\nis a cell for a simple variable."}),"\n",(0,t.jsxs)(n.p,{children:["An array with one dimension holds a number of cells and the sizeof operator\nreturns that number. The snippet below would therefore print \u201c5\u201d at",(0,t.jsx)(n.br,{}),"\n","the display, because the array \u201cmsg\u201d holds four characters (each in one cell) plus a zero-terminator:"]}),"\n",(0,t.jsx)(n.p,{children:"Listing: sizeof operator"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'\nnew msg[] = "Help"\nprintf("%d", sizeof msg);\n\n'})}),"\n",(0,t.jsxs)(n.p,{children:["With multi-dimensional arrays, the sizeof operator can return the number\nof elements in each dimension. For the last (minor) dimension, an",(0,t.jsx)(n.br,{}),"\n","element will again be a cell, but for the major dimension(s), an element is a sub-array.\nIn the following code snippet, observe that the syntax sizeof matrix refers\nto the major dimension of the two-dimensional array and the syntax sizeof\nmatrix[] refers to the minor dimension of the array. The values that\nthis snippet prints are 3 and 2 (for the major and minor dimensions respectively):"]}),"\n",(0,t.jsx)(n.p,{children:"Listing: sizeof operator and multidimensional arrays"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'\nnew matrix[3][2] = { { 1, 2 }, { 3, 4 }, { 5, 6 } }\nprintf("%d %d", sizeof matrix, sizeof matrix[]);\n\n'})}),"\n",(0,t.jsx)(n.p,{children:"The application of the sizeof operator on multi-dimensional arrays is especially convenient when used as a default value for function arguments."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"Default function arguments and sizeof: 77"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"-tag-names",children:"\u2022 Tag names"}),"\n",(0,t.jsx)(n.p,{children:"A tag is a label that denotes the objective of \u2014or the meaning of\u2014 a variable,\na constant or a function result. Tags are optional, their only purpose is to\nallow a stronger compile-time error checking of operands in expressions, of function\narguments and of array indices."}),"\n",(0,t.jsx)(n.p,{children:"A tag consists of a symbol name followed by a colon; it has the same syntax as a label. A tag precedes\nthe symbol name of a variable, constant or function."}),"\n",(0,t.jsx)(n.p,{children:"In an assignment, only the right hand of the \u201c=\u201d sign may be tagged.\nExamples of valid tagged variable and constant definitions are:"}),"\n",(0,t.jsx)(n.p,{children:"Listing: tag names"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'\nnew bool:flag = true            /* "flag" can only hold "true" or "false" */\n\nconst error:success = 0\nconst error:fatal= 1\nconst error:nonfatal = 2\n\nerror:errno = fatal\n\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The sequence of the constants success, fatal and nonfatal could more con-\nveniently be declared using an enum instruction, as illustrated below.",(0,t.jsx)(n.br,{}),"\n","The enumeration instruction below creates four constants, success, fatal, non-\nfatal and error, all with the tag error."]}),"\n",(0,t.jsx)(n.p,{children:"Listing: enumerations"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"\nenum error {\n    success,\n    fatal,\n    nonfatal,\n}\n\n"})}),"\n",(0,t.jsx)(n.p,{children:"A typical use of \u201ctagged\u201d enum\u2019s is in conjunction with arrays. If every field\nof an array has a distinct purpose, you can use a tagged enum to declare the size\nof an array and to add tag checking to the array usage in a single step:"}),"\n",(0,t.jsx)(n.p,{children:"Listing: enumerations and arrays"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"\nenum rectangle\n{\n    left,\n    top,\n    right,\n    bottom\n}\n\nnew my_rect[rectangle] /* array is declared as having 4 cells */\n\nmy_rect[left] = 10\nmy_rect[top] = 5\nmy_rect[right] = 30\nmy_rect[bottom] = 12\n\nfor (new i = 0; rectangle:i < rectangle; ++i)\n    my_rect[rectangle:i] *= 2\n\n"})}),"\n",(0,t.jsx)(n.p,{children:"After the declaration of \u201cmy_rect\u201d above, you can access the second field of\nmy_rect with \u201cmy_rect[top]\u201d, but saying \u201cmy_rect[1]\u201d will give a parser\ndiagnostic (a warning or error message). A tag override (or a tag cast) adjusts\na function, constant or variable to the desired tag name. The for loop at the\nlast two lines in the preceding example depicts this: the loop variable i\nis a plain, untagged cell, an it must be cast to the tag rectangle before using it\nas an index in the array my_rect. Note that the enum construct has created\nboth a constant and a tag with the name \u201crectangle\u201d."}),"\n",(0,t.jsx)(n.p,{children:"Tag names introduced so far started with a lower case letter; these are \u201cweak\u201d\ntags. Tag names that start with an upper case letter are \u201cstrong\u201d tags. The\ndifference between weak and strong tags is that weak tags may, in a few circum-\nstances, be dropped implicitly by the pawn parser \u2014so that a weakly tagged\nexpression becomes an untagged expression. The tag checking mechanism verifies the following situations:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"When the expressions on both sides of a binary operator have a different tag, or when one of the expressions is tagged and the other is not, the compiler issues a \u201ctag mismatch\u201d diagnostic. There is no difference between weak and strong tags in this situation."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"There is a special case for the assignment operator: the compiler issues diagnostic if the variable on the left side of an assignment operator has a tag, and the expression on the right side either has a different tag or is untagged. However, if the variable on the left of the assignment operator is untagged, it accepts an expression (on the right side) with a weak tag. In other words, a weak tag is dropped in an assignment when the lvalue is untagged."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Passing arguments to functions follows the rule for assignments. The compiler issues a diagnostic when the formal parameter (in a function definition) has a tag and the actual parameter (in the function call) either is untagged or has a different tag. However, if the formal parameter is untagged, it also accepts a parameter with any weak tag."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"An array may specify a tag for every dimension, see the \u201cmy_rect\u201d example above. Tag checking array indices follows the rule of binary operator tag checking: there is no difference between weak and strong tags."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"Label syntax: 112"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"\u201cenum\u201d statement: 101"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"\u201clvalue\u201d: the variable on the left side in an assignment, see page 104"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/th/docs/scripting/language/reference/Contents",children:"Go Back to Contents"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}}}]);