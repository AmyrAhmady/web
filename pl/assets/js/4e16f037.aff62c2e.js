"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[16655],{28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>o});var t=i(96540);const s={},a=t.createContext(s);function l(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(a.Provider,{value:n},e.children)}},95578:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"scripting/language/ControlStructures","title":"Control Structures","description":"An overview of control structures in the Pawn language","source":"@site/docs/scripting/language/ControlStructures.md","sourceDirName":"scripting/language","slug":"/scripting/language/ControlStructures","permalink":"/pl/docs/scripting/language/ControlStructures","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/language/ControlStructures.md","tags":[],"version":"current","frontMatter":{"title":"Control Structures","sidebar_label":"Control Structures","description":"An overview of control structures in the Pawn language"},"sidebar":"docsSidebar","previous":{"title":"Appendices","permalink":"/pl/docs/scripting/language/reference/Appendices"},"next":{"title":"Keywords: Directives","permalink":"/pl/docs/scripting/language/Directives"}}');var s=i(74848),a=i(28453);const l={title:"Control Structures",sidebar_label:"Control Structures",description:"An overview of control structures in the Pawn language"},o=void 0,r={},c=[{value:"Conditionals",id:"conditionals",level:2},{value:"if",id:"if",level:3},{value:"Operators",id:"operators",level:3},{value:"Brackets",id:"brackets",level:3},{value:"else",id:"else",level:3},{value:"else if",id:"else-if",level:3},{value:"?:",id:"",level:3},{value:"Loops",id:"loops",level:2},{value:"While",id:"while",level:3},{value:"for()",id:"for",level:3},{value:"do-while",id:"do-while",level:3},{value:"if-goto",id:"if-goto",level:3},{value:"OBOE",id:"oboe",level:3},{value:"Switch",id:"switch",level:2},{value:"switch",id:"switch-1",level:3},{value:"case",id:"case",level:3},{value:"default",id:"default",level:3},{value:"Single line statements",id:"single-line-statements",level:2},{value:"goto",id:"goto",level:3},{value:"break",id:"break",level:3},{value:"continue",id:"continue",level:3},{value:"return",id:"return",level:3}];function h(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"conditionals",children:"Conditionals"}),"\n",(0,s.jsx)(n.h3,{id:"if",children:"if"}),"\n",(0,s.jsx)(n.p,{children:"An if statement checks if something is true and does something if it is."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'new\n    a = 5;\nif (a == 5)\n{\n    print("a is 5");\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:'The code within the brackets after the "if" is called the condition, there are a number of different things you can test for (see operators).'}),"\n",(0,s.jsx)(n.p,{children:'In the example above both "a" and 5 are symbols, functions can also be symbols:'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'if (SomeFunction() == 5)\n{\n    print("SomeFunction() is 5");\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"That will test the return value of SomeFunction (see below) against 5."}),"\n",(0,s.jsx)(n.p,{children:"You can also combine checks to check multiple things:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'new\n    a = 5,\n    b = 3;\nif (a == 5 && b != 3)\n{\n    print("Won\'t be printed");\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"That example checks that a is equal to 5 AND b is not equal to 3, however b is 3 so the check fails."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'new\n    a = 5,\n    b = 3;\nif (a == 5 || b != 3)\n{\n    print("Will be printed");\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:'That examples checks that a is equal to 5 OR b is not equal to 3, b equals 3 so that part fails* however a is 5 so that part is true, we are using || (or) so only one part needs to be true (if both are true the statement is still true, this is slightly different to the linguistic meaning of "or" meaning only one or the other), so the if statement is true.'}),"\n",(0,s.jsx)(n.p,{children:"Also it is possible to chain the comparisons together without the explicit AND-ing of two different comparisons."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'new\n    idx = 3;\n\nif (0 < idx < 5)\n{\n    print("idx is greater than 0 and less than 5!");\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"operators",children:"Operators"}),"\n",(0,s.jsx)(n.p,{children:"The following are symbols you can use in comparisons and their explanations. Some have been used in examples already."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Operator"}),(0,s.jsx)(n.th,{children:"Meaning"}),(0,s.jsx)(n.th,{children:"Usage"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"=="}),(0,s.jsx)(n.td,{children:"Left is equal to Right"}),(0,s.jsx)(n.td,{children:"if (Left == Right)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"!="}),(0,s.jsx)(n.td,{children:"Left is not equal to Right"}),(0,s.jsx)(n.td,{children:"if (Left != Right)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:">"}),(0,s.jsx)(n.td,{children:"Left is greater than Right"}),(0,s.jsx)(n.td,{children:"if (Left > Right)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:">="}),(0,s.jsx)(n.td,{children:"Left is greater than or equal to Right"}),(0,s.jsx)(n.td,{children:"if (Left >= Right)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"<"}),(0,s.jsx)(n.td,{children:"Left is less than Right"}),(0,s.jsx)(n.td,{children:"if (Left < Right)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"<="}),(0,s.jsx)(n.td,{children:"Left is less than or equal to Right"}),(0,s.jsx)(n.td,{children:"if (Left <= Right)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"&&"}),(0,s.jsx)(n.td,{children:"and"}),(0,s.jsx)(n.td,{children:"if (Left && Right)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"||"}),(0,s.jsx)(n.td,{children:"or"}),(0,s.jsx)(n.td,{children:"if (Left || Right)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"!"}),(0,s.jsx)(n.td,{children:"not"}),(0,s.jsx)(n.td,{children:"if (!Variable)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"nor"}),(0,s.jsx)(n.td,{children:"if (!(Left || Right))"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"nand"}),(0,s.jsx)(n.td,{children:"if (!(Left && Right))"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"exclusive or (xor, eor) - only one or the other is true, not both"}),(0,s.jsx)(n.td,{children:"if (!(Left && Right) && (Left ||Right))"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"not exclusive or (nxor, neor) - both or neither are true"}),(0,s.jsx)(n.td,{children:"if ((Left && Right) || !(Left || Right))"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"brackets",children:"Brackets"}),"\n",(0,s.jsx)(n.p,{children:"The other main aspect of if statements is brackets, these control the order things are done in:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'new\n    a = 3,\n    b = 3,\n    c = 1;\nif (a == 5 && b == 3 || c == 1)\n{\n    print("Will this be called?");\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"There are two ways of looking at the above statement:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"if ((a == 5 && b == 3) || c == 1)\n"})}),"\n",(0,s.jsx)(n.p,{children:"And:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"if (a == 5 && (b == 3 || c == 1))\n"})}),"\n",(0,s.jsx)(n.p,{children:"The first version will check if a is 5 and b is 3, if that is false (i.e. one or both of them are not their respective values) it will check if c is 1. (a == 5 && b == 3) is false as you should know from above, so you replace that group with FALSE:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"if (FALSE || c == 1)\n"})}),"\n",(0,s.jsx)(n.p,{children:"We know FALSE cannot be true (as it is not true by definition), however c is 1 so that half is true and, as we're using an OR in between the whole statement is true."}),"\n",(0,s.jsx)(n.p,{children:"The second version checks if a is 5, if it is it checks if either b is 3 or c is 1. The game will do the a == 5 part first but for clarity we'll do it backwards. (b == 3 || c == 1) is true, both halves are true, although only one needs to be, so going into our if statement we have:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"if (a == 5 && TRUE)\n"})}),"\n",(0,s.jsx)(n.p,{children:"(a == 5) is false, because a is 3, so we have:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"if (FALSE && TRUE)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Obviously FALSE is false so that statement cannot be true, so the check will fail."}),"\n",(0,s.jsx)(n.p,{children:"This little example shows how using brackets can change the outcome of a check, without brackets the compiler will be the first of the two versions demonstrated but that cannot always be guaranteed so you should always use brackets, even if just to clarify what is going on to other people."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"(b != 3) in the OR example doesn't actually fail as it's never called, the compiler orders the code using a thing called short-circuiting, as the first part is already true there's no point checking the second part as it won't affect the final outcome, but if it did check it it would fail."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"else",children:"else"}),"\n",(0,s.jsx)(n.p,{children:"else basically does something if an if check fails:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'new\n    a = 5;\nif (a == 3) // False\n{\n    print("Won\'t be called");\n}\nelse\n{\n    print("Will be called as the check failed");\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"else-if",children:"else if"}),"\n",(0,s.jsx)(n.p,{children:"An else if is a check which occurs if the first if check fails to check something else:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'new\n    a = 5;\nif (a == 1)\n{\n    print("Will be called if a is 1");\n}\nelse if (a == 5)\n{\n    print("Will be called if a is 5");\n}\nelse\n{\n    print("All other numbers");\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"You can have an many of these as you like (you can only have one if and one else in a group of checks):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"new\n    a = 4;\nif (a == 1)\n{\n    // False\n}\nelse if (a == 2)\n{\n    // False\n}\nelse if (a == 3)\n{\n    // False\n}\nelse if (a == 4)\n{\n    // True\n}\nelse\n{\n    // False\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"else ifs will only check the value as it was when the ifs start, so you can't do:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"new\n    a = 5;\nif (a == 5)\n{\n    // Will be called\n    a = 4;\n}\nelse if (a == 4)\n{\n    // Won't be called because the first check didn't fail, even though a is now 4\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"To get round this you would simply make the else if an if."}),"\n",(0,s.jsx)(n.h3,{id:"",children:"?:"}),"\n",(0,s.jsx)(n.p,{children:"'?' and ':' together are called a triadic operator, they basically act as an if statement inside another statement:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"new\n    a,\n    b = 3;\nif (b == 3)\n{\n    a = 5;\n}\nelse\n{\n    a = 7;\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"That's a simple example to assign a variable based on another variable, however it can be made much shorter:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"new\n    a,\n    b = 3;\na = (b == 3) ? (5) : (7);\n"})}),"\n",(0,s.jsx)(n.p,{children:"The part before the '?' is the conditional, this is exactly the same as a normal conditional. The part between the '?' and the ':' is the value to return if the condition is true, the other part is the value to return if the condition is false. You can stack them up the same as else ifs too:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"new\n    a,\n    b = 3;\nif (b == 1)\n{\n    a = 2;\n}\nelse if (b == 2)\n{\n    a = 3;\n}\nelse if (b == 3)\n{\n    a = 4;\n}\nelse\n{\n    a = 5;\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Can be written as:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"new\n    a,\n    b = 3;\na = (b == 1) ? (2) : ((b == 2) ? (3) : ((b == 3) ? (4) : (5)));\n"})}),"\n",(0,s.jsx)(n.p,{children:"This is actually more similar to doing:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"new\n    a,\n    b = 3;\nif (b == 1)\n{\n    a = 2;\n}\nelse\n{\n    if (b == 2)\n    {\n        a = 3;\n    }\n    else\n    {\n        if (b == 3)\n        {\n            a = 4;\n        }\n        else\n        {\n            a = 5;\n        }\n    }\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"But they're equivalent (in this example anyway)."}),"\n",(0,s.jsx)(n.h2,{id:"loops",children:"Loops"}),"\n",(0,s.jsx)(n.h3,{id:"while",children:"While"}),"\n",(0,s.jsx)(n.p,{children:'"while" loops do something while the condition specified is true. A condition is exactly the same format as the condition in an if statement, it is just checked repeatedly and the code done if it is true every time it is checked:'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"new\n    a = 9;\nwhile (a < 10)\n{\n    // Code in the loop\n    a++;\n}\n// Code after the loop\n"})}),"\n",(0,s.jsx)(n.p,{children:"That code will check if 'a' is less than 10. If it is, the code inside the braces (a++;) will be executed, thus incrementing 'a'. When the closing brace is reached, code execution jumps back to the check and does it again, this time the check will fail as 'a' is 10 and execution will jump to after the loop. If 'a' started out as 8, the code would be run twice etc."}),"\n",(0,s.jsx)(n.h3,{id:"for",children:"for()"}),"\n",(0,s.jsx)(n.p,{children:'A "for" loop is essentially a compressed "while" loop. A "for" statement has three sections; initialization, condition and finalization. As a "for" loop, the "while" example above would be written:'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"for (new a = 9; a < 10; a++)\n{\n    // Code in the loop\n}\n// Code after the loop\n"})}),"\n",(0,s.jsx)(n.p,{children:"That's a simple code to loop through all players:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"for(new i,a = GetMaxPlayers(); i < a; i++)\n{\n        if (IsPlayerConnected(i))\n        {\n                 //do something\n        }\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Any of the conditions can be omitted simply by putting no code in them:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"new\n    a = 9;\nfor ( ; a < 10; )\n{\n    // Code in the loop\n    a++;\n}\n// Code after the loop\n"})}),"\n",(0,s.jsx)(n.p,{children:"This example makes it a little easier to show how a \"for\" loop matches up to a \"while\" loop. There are two very slight differences between the two \"for\" loops given. The first is that the second example declares 'a' outside the \"for\" loop, this means it can be used outside the \"for\" loop, in the first example 'a's scope (the section of code for which a variable exists) is only inside the loop. The second difference is that the a++ in the second example is actually done slightly before the a++ in the first example, 99% of the time this doesn't make any difference, the only time it matters is when you're using 'continue' (see below), 'continue' will call the a++ in the first example, but will skip it in the second example."}),"\n",(0,s.jsx)(n.h3,{id:"do-while",children:"do-while"}),"\n",(0,s.jsx)(n.p,{children:"A do-while loop is a while loop where the condition comes after the code inside the loop instead of before. This means that the code inside will always be executed at least once because it is done before the check is done:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"new\n    a = 10;\ndo\n{\n    // Code inside the loop\n    a++;\n}\nwhile (a < 10); // Note the semi-colon\n// Code after the loop\n"})}),"\n",(0,s.jsx)(n.p,{children:"If that was a standard while loop a would not be incremented as the (a < 10) check is false, but here it's incremented before the check. If a started as 9 the loop would also only be done once, 8 - twice etc."}),"\n",(0,s.jsx)(n.h3,{id:"if-goto",children:"if-goto"}),"\n",(0,s.jsx)(n.p,{children:"This is essentially what the loops above compile to, the use of goto is generally discouraged however it's interesting to see exactly what a loop is doing:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"new\n    a = 9;\n\nloop_start:\nif (a < 10)\n{\n    // Code in the loop\n    a++;\n    goto loop_start;\n}\n// Code after the loop\n"})}),"\n",(0,s.jsx)(n.h3,{id:"oboe",children:"OBOE"}),"\n",(0,s.jsx)(n.p,{children:"OBOE stands for Off By One Error. This is a very common mistake where a loop runs for one too many or two few times. E.g:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"new\n    a = 0,\n    b[10];\nwhile (a <= sizeof (b))\n{\n    b[a] = 0;\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"This very simple example demonstrates one of the most common OBOEs, at first glance people may think this will loop through all the contents of b and set them to 0, however this loop will actually run 11 times and try access b[10], which doesn't exist (it would be the 11th slot in b starting from 0), thus can cause all sorts of problems. This is known as an Out Of Bounds (OOB) error."}),"\n",(0,s.jsx)(n.p,{children:"You have to be especially careful of OBOEs when using do-while loops as they ALWAYS run at least once."}),"\n",(0,s.jsx)(n.h2,{id:"switch",children:"Switch"}),"\n",(0,s.jsx)(n.h3,{id:"switch-1",children:"switch"}),"\n",(0,s.jsx)(n.p,{children:"A switch statement is basically a structured if/else if/else system (similar to how for is a structured while). The easiest way to explain it is with an example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"new\n    a = 5;\nswitch (a)\n{\n    case 1:\n    {\n        // Won't be called\n    }\n    case 2:\n    {\n        // Won't be called\n    }\n    case 5:\n    {\n        // Will be called\n    }\n    default:\n    {\n        // Won't be called\n    }\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"This is functionally equivalent to:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"new\n    a = 5;\nif (a == 1)\n{\n    // Won't be called\n}\nelse if (a == 2)\n{\n    // Won't be called\n}\nelse if (a == 5)\n{\n    // Will called\n}\nelse\n{\n    // Won't be called\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"However it is slightly clearer to see what is going on."}),"\n",(0,s.jsx)(n.p,{children:"An important thing to note here is the different ways in which ifs and switches are processed:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"switch (SomeFunction())\n{\n    case 1: {}\n    case 2: {}\n    case 3: {}\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"That will call SomeFunction() ONCE and compare it's result 3 times."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"if (SomeFunction() == 1) {}\nelse if (SomeFunction() == 2) {}\nelse if (SomeFunction() == 3) {}\n"})}),"\n",(0,s.jsx)(n.p,{children:"That will call SomeFunction() three times, which is very inefficient, a switch is more like doing:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"new\n    result = SomeFunction();\nif (result == 1) {}\nelse if (result == 2) {}\nelse if (result == 3) {}\n"})}),"\n",(0,s.jsx)(n.p,{children:"For those of you who know C the PAWN switch is slightly different, the individual conditions are NOT fall-through and are bound by braces so there's no need for break statements."}),"\n",(0,s.jsx)(n.h3,{id:"case",children:"case"}),"\n",(0,s.jsx)(n.p,{children:'case statements (the "case X:" parts of the switch statement) can have other options besides a single number. You can compare a value to a list of numbers (replacing fall-through in C) or even a range of values:'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"case 1, 2, 3, 4:\n"})}),"\n",(0,s.jsx)(n.p,{children:"This case will trigger if the symbol being tested is 1, 2, 3, or 4, it's the same as doing:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"if (bla == 1 || bla == 2 || bla == 3 || bla == 4)\n"})}),"\n",(0,s.jsx)(n.p,{children:"but far more concise. Numbers in lists do not have to be consecutive, in fact if they are it's better to do:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"case 1 .. 4:\n"})}),"\n",(0,s.jsx)(n.p,{children:"This case will do exactly the same as above but by checking a range instead of a list, it is the same as doing:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"if (bla >= 1 && bla <= 4)\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"new\n    a = 4;\nswitch (a)\n{\n    case 1 .. 3:\n    {\n    }\n    case 5, 8, 11:\n    {\n    }\n    case 4:\n    {\n    }\n    default:\n    {\n    }\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"default",children:"default"}),"\n",(0,s.jsx)(n.p,{children:"This is the equivalent to else in if statements, it does something if all the other case statements failed."}),"\n",(0,s.jsx)(n.h2,{id:"single-line-statements",children:"Single line statements"}),"\n",(0,s.jsx)(n.h3,{id:"goto",children:"goto"}),"\n",(0,s.jsx)(n.p,{children:"goto is essentially a jump, it goes to a label without question (i.e. there's no condition to need to be true). You can see an example above in the if-goto loop."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"goto my_label;\n\n// This section will be jumped over\n\nmy_label: // Labels end in a colon and are on their own line\n\n// This section will be processed as normal\n"})}),"\n",(0,s.jsx)(n.p,{children:"The use of gotos is widely discouraged due to their effect on program flow."}),"\n",(0,s.jsx)(n.h3,{id:"break",children:"break"}),"\n",(0,s.jsx)(n.p,{children:"break breaks out of a loop, ending it prematurely:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"for (new a = 0; a < 10; a++)\n{\n    if (a == 5) break;\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"This loop will go 6 times but code after the break will only be executed 5 times."}),"\n",(0,s.jsx)(n.h3,{id:"continue",children:"continue"}),"\n",(0,s.jsx)(n.p,{children:"continue basically skips a loop iteration"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'for (new a = 0; a < 3; a++)\n{\n    if (a == 1) continue;\n    printf("a = %d", a);\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"That will give the output of:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"a = 0 a = 2\n"})}),"\n",(0,s.jsx)(n.p,{children:"The continue basically jumps to the closing brace of the loop, as hinted at above you have to be careful when using continue with some loops:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'new\n    a = 0;\nwhile (a < 3)\n{\n    if (a == 1) continue;\n    printf("a = %d", a);\n    a++;\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"This looks very similar to the other example however this time the continue will skip the a++; line, so the loop will get stuck in an infinite loop as a will always be 1."}),"\n",(0,s.jsx)(n.h3,{id:"return",children:"return"}),"\n",(0,s.jsx)(n.p,{children:"return stops a function and goes back to the point in code which called the function in the first place:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'main()\n{\n    print("1");\n    MyFunction(1);\n    print("3");\n}\n\nMyFunction(num)\n{\n    if (num == 1)\n    {\n        return;\n    }\n    print("2");\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"That code will give an output of:"}),"\n",(0,s.jsx)(n.p,{children:"1 3"}),"\n",(0,s.jsx)(n.p,{children:'Because the print("2"); line will never be reached.'}),"\n",(0,s.jsx)(n.p,{children:"You can also use return to return a value:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'main()\n{\n    print("1");\n    if (MyFunction(1) == 27)\n    {\n        print("3");\n    }\n}\n\nMyFunction(num)\n{\n    if (num == 1)\n    {\n        return 27;\n    }\n    print("2");\n    return 0;\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"That code will give the same output as above, however note that an additional return has been added to the end of the function. The end of a function has a return implied at it, however this return has no value, you cannot return a value and not return a value from the same function so we must explicitly return a value."}),"\n",(0,s.jsx)(n.p,{children:"The symbol you return can be a number, a variable or even another function (in which case the other function will be called, it will return a value (it MUST return a value if you use it as a return value) and that value will be returned from the first function."}),"\n",(0,s.jsx)(n.p,{children:"You can also store return values for later use:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'main()\n{\n    print("1");\n    new\n        ret = MyFunction(1);\n    if (ret == 27)\n    {\n        print("3");\n    }\n}\n\nMyFunction(num)\n{\n    if (num == 1)\n    {\n        return 27;\n    }\n    print("2");\n    return 0;\n}\n'})})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}}}]);