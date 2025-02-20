"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[52918],{28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>r});var s=i(96540);const t={},l=s.createContext(t);function a(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(l.Provider,{value:n},e.children)}},88048:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"scripting/language/Statements","title":"Keywords: Statements","description":"assert","source":"@site/docs/scripting/language/Statements.md","sourceDirName":"scripting/language","slug":"/scripting/language/Statements","permalink":"/pl/docs/scripting/language/Statements","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/language/Statements.md","tags":[],"version":"current","frontMatter":{"title":"Keywords: Statements","sidebar_label":"Keywords: Statements"},"sidebar":"docsSidebar","previous":{"title":"Keywords: Operators","permalink":"/pl/docs/scripting/language/Operators"},"next":{"title":"Pawn Style Guide","permalink":"/pl/docs/scripting/language/Style"}}');var t=i(74848),l=i(28453);const a={title:"Keywords: Statements",sidebar_label:"Keywords: Statements"},r=void 0,o={},c=[{value:"<code>assert</code>",id:"assert",level:2},{value:"<code>break</code>",id:"break",level:2},{value:"<code>case</code>",id:"case",level:2},{value:"<code>continue</code>",id:"continue",level:2},{value:"<code>default</code>",id:"default",level:2},{value:"<code>do</code>",id:"do",level:2},{value:"<code>else</code>",id:"else",level:2},{value:"<code>exit</code>",id:"exit",level:2},{value:"<code>for</code>",id:"for",level:2},{value:"<code>goto</code>",id:"goto",level:2},{value:"<code>if</code>",id:"if",level:2},{value:"<code>return</code>",id:"return",level:2},{value:"<code>sleep</code>",id:"sleep",level:2},{value:"<code>state</code>",id:"state",level:2},{value:"<code>switch</code>",id:"switch",level:2},{value:"<code>while</code>",id:"while",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"assert",children:(0,t.jsx)(n.code,{children:"assert"})}),"\n",(0,t.jsx)(n.p,{children:"Aborts execution with a runtime error if the expression evaluates to logically false. Seems to work only in the main() block. The assert statement should be used to indicate a logical(programmer's) error, never a run-time(user's) error."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"main()\n{\n    assert (MAX_PLAYERS == GetMaxPlayers()); // ascertain that the definition of MAX_PLAYERS is equal to the actual number of server slots in use\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"break",children:(0,t.jsx)(n.code,{children:"break"})}),"\n",(0,t.jsx)(n.p,{children:"Breaks out of a loop instantly, only leaves the top level loop, not all current loops."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'for (new i = 0; i < 10; i++)\n{\n    printf("%d", i);\n    if (i == 5)\n    {\n        break;\n    }\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Will produce:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"0\n1\n2\n3\n4\n5\n"})}),"\n",(0,t.jsx)(n.p,{children:"While:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'for (new i = 0; i < 10; i++)\n{\n    if (i == 5)\n    {\n        break;\n    }\n    printf("%d", i);\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Will produce:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"0\n1\n2\n3\n4\n"})}),"\n",(0,t.jsx)(n.p,{children:"As the loop is instantly exited neither loop gets to 10 and the second one ends before the number 5 is printed."}),"\n",(0,t.jsx)(n.h2,{id:"case",children:(0,t.jsx)(n.code,{children:"case"})}),"\n",(0,t.jsx)(n.p,{children:"Handles a specific result in a switch statement. The result can be either a single number, a selection of numbers or a range of numbers:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'new\n    switchVar = 10;\nswitch (switchVar)\n{\n    case 1:\n    {\n        printf("switchVar is 1");\n    }\n    case 4:\n    {\n        printf("switchVar is 4");\n    }\n    case 2, 3, 5:\n    {\n        printf("switchVar is either 2, 3 or 5");\n    }\n    case 7 .. 11:\n    {\n        printf("switchVar is somewhere between 7 and 11 inclusive (7, 8, 9, 10 or 11)");\n    }\n    default:\n    {\n        printf("switchVar is not 1, 2, 3, 4, 5, 7, 8, 9, 10 or 11");\n    }\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"continue",children:(0,t.jsx)(n.code,{children:"continue"})}),"\n",(0,t.jsx)(n.p,{children:"Similar to break but just goes on to the next loop itteration. It is important to note that the point to which it jumps varies depending on which loop type you use."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'for (new i = 0; i < 10; i++)\n{\n    if (i == 5)\n    {\n        continue;\n    }\n    printf("%d", i);\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Will produce:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"0\n1\n2\n3\n4\n6\n7\n8\n9\n"})}),"\n",(0,t.jsx)(n.p,{children:'A continue after the print will basically do nothing. In a for loop continue jumps to the third statement in the for statement (in this example the "i++;" bit), this is different to how it behaves in a while loop:'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'new\n    i = 0;\nwhile (i < 10)\n{\n    if (i == 5)\n    {\n        continue;\n    }\n    printf("%d", i);\n    i++;\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:'This will produce an infinate loop as continue will jump to AFTER the "i++;" and go back to the "while (i < 10)" part. At this time, "i" will still be 5 as "i++;" was never called, and so continue will be called again and "i" will be stuck at 5 forever.'}),"\n",(0,t.jsx)(n.h2,{id:"default",children:(0,t.jsx)(n.code,{children:"default"})}),"\n",(0,t.jsx)(n.p,{children:"default handles switch statement results which aren't handled explicitly by case statements. See the case example for an example."}),"\n",(0,t.jsx)(n.h2,{id:"do",children:(0,t.jsx)(n.code,{children:"do"})}),"\n",(0,t.jsx)(n.p,{children:"do is a type of loop which can be used with while to produce a loop which will always be run at least once. Note the semi-colon after the while () in the following example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'new\n    i = 10;\ndo\n{\n    printf("%d", i);\n    i++;\n}\nwhile (i < 10);\n'})}),"\n",(0,t.jsx)(n.p,{children:'"i" is clearly not less that 10 but this loop will produce:'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"10\n"})}),"\n",(0,t.jsx)(n.p,{children:"anyway. The similar while loop:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'new\n    i = 10;\nwhile (i < 10)\n{\n    printf("%d", i);\n    i++;\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"} Will not give any output as the condition instantly fails."}),"\n",(0,t.jsx)(n.p,{children:"These are also useful for avoiding double checks:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"new\n    checkVar = 10;\nif (checkVar == 10)\n{\n    new\n        i = 0;\n    while (checkVar == 10)\n    {\n        checkVar = someFunction(i);\n        i++;\n    }\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"This isn't obviously a major issue but you are checking checkVar twice in quick succession at the start of the loop, which is quite pointless, however the if is required as you need to do code if the condition is true but outside the loop (this is a fairly common situation). This can be improved by doing:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"new\n    checkVar = 10;\nif (checkVar == 10)\n{\n    new\n        i = 0;\n    do\n    {\n        checkVar = someFunction(i);\n        i++;\n    }\n    while (checkVar == 10);\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"In this instance the result will be exactly the same but crucially with one less pointless check."}),"\n",(0,t.jsx)(n.h2,{id:"else",children:(0,t.jsx)(n.code,{children:"else"})}),"\n",(0,t.jsx)(n.p,{children:"else is called when an if statement fails (assuming it is present):"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'new\n    checkVar = 5;\nif (checkVar == 10)\n{\n    printf("This will never be called");\n}\nelse\n{\n    printf("The if statement failed so this will be displayed");\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"else can also be combined with if:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'new\n    checkVar = 2;\nif (checkVar == 1)\n{\n    printf("This will not be called"):\n}\nelse if (checkVar == 2)\n{\n    printf("The first if failed so the second was checked and is true");\n}\nelse\n{\n    printf("This will not be called as one of the ifs was true");\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"exit",children:(0,t.jsx)(n.code,{children:"exit"})}),"\n",(0,t.jsx)(n.p,{children:"This exits the current program instantly."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"main()\n{\n    exit;\n    return 0;\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"for",children:(0,t.jsx)(n.code,{children:"for"})}),"\n",(0,t.jsx)(n.p,{children:"A for loop is a type of loop involving three stages, initialisation, comparison and update. These are each separated by a semicolon (Wink and can each be excluded by just setting a blank space. The most basic for loop is:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"for ( ; ; ) {}\n"})}),"\n",(0,t.jsx)(n.p,{children:"This has no initialisation, no comparison and no update and as a result will go forever (the comparison, being absent, defaults to true)."}),"\n",(0,t.jsx)(n.p,{children:"One of the more common loops is:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'for (new i = 0; i < MAX_PLAYERS; i++)\n{\n    printf("%d", i);\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"The initialisation in this loop is:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"new i = 0;\n"})}),"\n",(0,t.jsx)(n.p,{children:'The semicolon marks the end of the initialisation. This declares a new variable, called i, which can only be used with this loop. Next comparison is done. This compares i to MAX_PLAYERS (default 500 - see #define) and if it is less continues. Then the contents of the loop is run. Initially this will print "0". Finally the update is done "i++", this increases the value of i. Now a complete itteration is done, the loop loops, as its name implies, and goes back to the comparison stage (initialisation is only done once per call).'}),"\n",(0,t.jsx)(n.p,{children:"The result of this loop is all the numbers from 0 to 499 inclusive being printed out. The equivalent while loop (ignoring the effects of continue) would be:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'new\n    i = 0;\nwhile (i < MAX_PLAYERS)\n{\n    printf("%d", i);\n    i++;\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"The three stages can be made a lot more complex if required using commas for the first and last sections and standard comparisons for the middle section:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'for (new i = 0, j = 200; i < MAX_PLAYERS && j > 10; i++, j -= 2)\n{\n    printf("%d %d", i, j);\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"This will create two new variables and set them to 0 and 200, then loop while one is less than 200 and the other is greater than 10, increasing one each time and decreasing the other by two each time."}),"\n",(0,t.jsx)(n.p,{children:"As stated before the scope of variables is limited to the loop usually:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'for (new i = 0; i < MAX_PLAYERS; i++)\n{\n    printf("%d", i);\n}\nprintf("%d", i);\n'})}),"\n",(0,t.jsx)(n.p,{children:'That will produce an error as "i" doesn\'t exist after the loop ends. However:'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'new\n    i = 0;\nfor ( ; i < MAX_PLAYERS; i++)\n{\n    printf("%d", i);\n}\nprintf("%d", i);\n'})}),"\n",(0,t.jsx)(n.p,{children:'Is fine as "i" is not declared in the loop. You could also initialise "i" in the loop but not declare it there:'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'new\n    i;\nfor (i = 0; i < MAX_PLAYERS; i++)\n{\n    printf("%d", i);\n}\nprintf("%d", i);\n'})}),"\n",(0,t.jsx)(n.h2,{id:"goto",children:(0,t.jsx)(n.code,{children:"goto"})}),"\n",(0,t.jsx)(n.p,{children:"goto and labels are generally discouraged in the coding community as what they do can usually be done better by restructuring your code properly. However basically a goto is a jump:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'goto my_label;\nprintf("This will never be printed");\nmy_label:\nprintf("This will be printed");\n'})}),"\n",(0,t.jsx)(n.p,{children:"The compiler however doesn't handle goto very well so that will not be optimised at all and things like:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"{\n    new\n        i = 5;\n    if (i == 5)\n    {\n        goto my_label;\n    }\n    else\n    {\n        my_label:\n        return 0;\n    }\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Will give a warning about inconsistent return types as it things the true branch doesn't return anything when it actually does, just in a very roundabout way. Also:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"MyFunction()\n{\n    new\n        i = 5;\n    if (i == 5)\n    {\n        goto my_label;\n    }\n    return 0;\n    my_label:\n    return 1;\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Will give an unreachable code warning despite the fact it actually is reachable."}),"\n",(0,t.jsx)(n.p,{children:"The basic syntax is:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"label:\n\ngoto label;\n"})}),"\n",(0,t.jsx)(n.p,{children:"The label should be on a line on it's own and ends in a colon, NOT a semicolon. Labels follow the same naming restrictions as variables and functions etc."}),"\n",(0,t.jsx)(n.h2,{id:"if",children:(0,t.jsx)(n.code,{children:"if"})}),"\n",(0,t.jsx)(n.p,{children:"If is one of the most important operators. It determines wether something should be done or not and acts accordingly, it, along with goto, is the basis of almost all other control structures:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"for (new i = 0; i < 10; i++)\n{\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Is equivalent to:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"new\n    i = 0;\nfor_loop:\nif (i < 10)\n{\n    i++;\n    goto for_loop;\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"The conditions if can take are way too many for this post however some are listed below:"}),"\n",(0,t.jsx)(n.p,{children:"Operator Explanation Example Result when a=1, b=0 Result when a=1, b=1 Result when a=0, b=1 Result when a=0, b=0 == Checks if one thing is equal to another if (a == b) false true false true != Checks if one thing is not the same as another if (a != b) true false true false < Checks if one thing is less than another if (a < b) false false true false > Checks if one thing is greater than another if (a > b) true false false false <= Checks if one thing is less than or equal to another if (a <= b) false true true true >= Checks if one thing is greater than or equal to another if (a >= b) true true false true && Checks if two things are true (not 0) if (a && b) false true false false || Checks if at least one of two things are true (not 0) if (a || b) true true true false ! Checks if something is false if (!(a == b)) true false true false"}),"\n",(0,t.jsx)(n.p,{children:"Obviously with these you can build up complex conditionals:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"if (a == b && (c != d || f < g))\n"})}),"\n",(0,t.jsx)(n.p,{children:"That will be true if a is the same as b and either f is less than g or c is not the same as d (or both)."}),"\n",(0,t.jsx)(n.h2,{id:"return",children:(0,t.jsx)(n.code,{children:"return"})}),"\n",(0,t.jsx)(n.p,{children:"This breaks out a function and can return data to the calling function:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"MyFunction()\n{\n    new\n        someVar = OtherFunction();\n}\n\nOtherFunction()\n{\n    return 5;\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"someVar will now be 5."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'MyFunction()\n{\n    if (SomeFunction())\n    {\n        printf("Returned 1");\n    }\n}\n\nSomeFunction()\n{\n    return random(2);\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"That will either return 1 or 0 to the calling function's if statement. 1 is true and 0 if false so the text will only be printed if 1 is returned. However:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'MyFunction()\n{\n    if (SomeFunction())\n    {\n        printf("Returned something between 1 and 10");\n    }\n}\n\nSomeFunction()\n{\n    return random(11);\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"That will return 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 or 10. Anything which is not 0 is true so the text will display if anything between 1 and 10 is returned."}),"\n",(0,t.jsx)(n.p,{children:"You can also use return with strings:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'MyFunction()\n{\n    printf("%s", SomeFunction());\n}\n\nSomeFunction()\n{\n    new\n        str[10] = "Hello";\n    return str;\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:'Will print "Hello" (without the quotes).'}),"\n",(0,t.jsx)(n.p,{children:"You also don't have to return anything:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"MyFunction()\n{\n    SomeFunction();\n}\n\nSomeFunction()\n{\n    return;\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"However if you do this you must make sure the function's return is never used:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'MyFunction()\n{\n    if (SomeFunction())\n    {\n        printf("Problem");\n    }\n}\n\nSomeFunction()\n{\n    return;\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Here SomeFunction is not returning anything however MyFunction is checking if the value returned from SomeFunction is true or not - it's neither as it just doesn't exist, so you will get a compiler error. No return is the default, so:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"SomeFunction()\n{\n    return;\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"And:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"SomeFunction()\n{\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Are the same."}),"\n",(0,t.jsx)(n.p,{children:"Finally, you can't mix return values:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"MyFunction()\n{\n    SomeFunction();\n}\n\nSomeFunction()\n{\n    if (random(2))\n    {\n        return 1;\n    }\n    else\n    {\n        return;\n    }\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"This will give an error because it doesn't know what to do."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"SomeFunction()\n{\n    if (random(2))\n    {\n        return 1;\n    }\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Is also not allowed as the default return is nothing."}),"\n",(0,t.jsx)(n.h2,{id:"sleep",children:(0,t.jsx)(n.code,{children:"sleep"})}),"\n",(0,t.jsx)(n.p,{children:"sleep is a psudo-function which makes execution pause for a given number of milliseconds:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'printf("Time 0s");\nsleep(1000);\nprintf("Time 1s");\n'})}),"\n",(0,t.jsx)(n.p,{children:"This only works in main(), not callbacks however as it's run in the PAWN thread."}),"\n",(0,t.jsx)(n.h2,{id:"state",children:(0,t.jsx)(n.code,{children:"state"})}),"\n",(0,t.jsxs)(n.p,{children:["state is part of the PAWN state machine and autonoma system, see ",(0,t.jsx)(n.a,{href:"https://forum.sa-mp.com/showthread.php?t=86850",children:"this thread"})," for more information."]}),"\n",(0,t.jsx)(n.h2,{id:"switch",children:(0,t.jsx)(n.code,{children:"switch"})}),"\n",(0,t.jsx)(n.p,{children:"switch is basically a structured if/else if/else system:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'switch (someVar)\n{\n    case 1:\n    {\n        printf("one");\n    }\n    case 2:\n    {\n        printf("two");\n    }\n    case 3:\n    {\n        printf("three");\n    }\n    default:\n    {\n        printf("other");\n    }\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Is just a slightly more efficient (and much cleaner) way of doing:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'if (someVar == 1)\n{\n    printf("one");\n}\nelse if (someVar == 2)\n{\n    printf("two");\n}\nelse if (someVar == 3)\n{\n    printf("three");\n}\nelse\n{\n    printf("other");\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"while",children:(0,t.jsx)(n.code,{children:"while"})}),"\n",(0,t.jsx)(n.p,{children:"while is a loop type similar to for and do..while. The basic operation is an if statement done which if true does some code and jumps back to the if. If it's false it goes to after the loop code - there is no else. Going back to the goto example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"new\n    i = 0;\nfor_loop:\nif (i < 10)\n{\n    i++;\n    goto for_loop;\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"This can also be written as:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:"new\n    i = 0;\nwhile (i < 10)\n{\n    i++;\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"See do and for more information."})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}}}]);