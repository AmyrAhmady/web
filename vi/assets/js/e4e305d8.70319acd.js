"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[46057],{28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var s=t(96540);const i={},o=s.createContext(i);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:n},e.children)}},79640:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"scripting/language/reference/Statements","title":"Statements","description":"---","source":"@site/docs/scripting/language/reference/08-Statements.md","sourceDirName":"scripting/language/reference","slug":"/scripting/language/reference/Statements","permalink":"/vi/docs/scripting/language/reference/Statements","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/language/reference/08-Statements.md","tags":[],"version":"current","sidebarPosition":8,"frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"Operators-and-expressions","permalink":"/vi/docs/scripting/language/reference/Operators-and-expressions"},"next":{"title":"Directives","permalink":"/vi/docs/scripting/language/reference/Directives"}}');var i=t(74848),o=t(28453);const a={},r="Statements",l={},c=[{value:"\u2217 The alternative is to fold unconditional state changes in the common if\u2013else construct.",id:"-the-alternative-is-to-fold-unconditional-state-changes-in-the-common-ifelse-construct",level:6}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h6:"h6",header:"header",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"statements",children:"Statements"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.p,{children:"A statement may take one or more lines, whereas one line may contain two or\nmore statements."}),"\n",(0,i.jsx)(n.p,{children:"Control flow statements (if, if\u2013else, for, while, do\u2013while and switch) may be nested."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Statement label"})}),"\n",(0,i.jsx)(n.p,{children:"A label consists of an identifier followed by a colon (\u201c:\u201d).\nA label is a \u201cjump target\u201d of the goto statement."}),"\n",(0,i.jsx)(n.p,{children:"Each statement may be preceded by a label.\nThere must be a statement after the label; an empty statement is allowed."}),"\n",(0,i.jsx)(n.p,{children:"The scope of a label is the function in which it is declared\n(a goto statement cannot therefore jump out off the current function to another function)."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Compound statement"})}),"\n",(0,i.jsxs)(n.p,{children:["A compound statement is a series of zero or more statements\nsurrounded by braces (",(0,i.jsx)(n.code,{children:"{"})," and ",(0,i.jsx)(n.code,{children:"}"}),"). The final brace (",(0,i.jsx)(n.code,{children:"}"}),") should not be followed by a semicolon.\nAny statement may be replaced by a compound statement.\nA compound statement is also called a block.\nA compound statement with zero statements is a special case,\nand it is called an \u201cempty statement\u201d."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Expression statement"})}),"\n",(0,i.jsx)(n.p,{children:"Any expression becomes a statement when a semicolon (\u201c;\u201d) is appended to it.\nAn expression also becomes a statement when only white space\nfollows it on the line and the expression cannot be extended over the next line."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Empty statement"})}),"\n",(0,i.jsxs)(n.p,{children:["An empty statement performs no operation and consists of a\ncompound block with zero statements; that is, it consists of the tokens \u201c","\u201d.\nEmpty statements are used in control flow statements\nif there is no action (e.g. while (!iskey()) ",") or when defining a label just\nbefore the closing brace of a compound statement.\nAn empty statement does not end with a semicolon."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"assert"})," ",(0,i.jsx)(n.em,{children:"expression"})]}),"\n",(0,i.jsx)(n.p,{children:"Aborts the program with a run-time error\nif the expression evaluates to logically \u201cfalse\u201d."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"break"})}),"\n",(0,i.jsx)(n.p,{children:"Terminates and exits the smallest enclosing do,\nfor or while statement from any point within the loop\nother than the logical end. The break statement moves program control\nto the next statement outside the loop."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"continue"})}),"\n",(0,i.jsx)(n.p,{children:"Terminates the current iteration of the smallest enclosing do,\nfor or while statement and moves program control to the condition part of the loop.\nIf the looping statement is a for statement,\ncontrol moves to the third expression in the for statement\n(and thereafter to the second expression)."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"do"})," ",(0,i.jsx)(n.em,{children:"statement"})," ",(0,i.jsx)(n.strong,{children:"while"})," ( ",(0,i.jsx)(n.em,{children:"expression"})," )"]}),"\n",(0,i.jsx)(n.p,{children:"Executes a statement before the condition part (the while clause) is evaluated.\nThe statement is repeated while the condition is logically \u201ctrue\u201d.\nThe statement is at least executed once."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"exit"})," ",(0,i.jsx)(n.em,{children:"expression"})]}),"\n",(0,i.jsx)(n.p,{children:"Abort the program. The expression is optional, but it must start\non the same line as the exit statement if it is present.\nThe exit instruction returns the expression value (plus the expression tag)\nto the host application, or zero if no exit expression is present.\nThe significance and purpose of exit codes is implementation defined."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"for"})," ( ",(0,i.jsx)(n.em,{children:"expression 1"})," ; ",(0,i.jsx)(n.em,{children:"expression 2"})," ; ",(0,i.jsx)(n.em,{children:"expression 3"})," ) ",(0,i.jsx)(n.em,{children:"statement"})]}),"\n",(0,i.jsx)(n.p,{children:"All three expressions are optional."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"expression 1"}),"\nEvaluated only once, and before entering the loop.\nThis expression may be used to initialize a variable.\nThis expression may also hold a variable declaration, using the new syntax.\nA variable declared in this expression exists only in the for loop."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"expression 2"}),"\nEvaluated before each iteration of the loop and\nends the loop if the expression results to logically \u201cfalse\u201d.\nIf omitted, the result of expression 2 is assumed to be logically \u201ctrue\u201d."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"expression 3"}),"\nEvaluated after each execution of the statement.\nProgram control moves from expression 3 to expression 2\nfor the next (conditional) iteration of the loop.\nThe statement for( ; ; ) is equivalent with while (true)."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"goto"})," ",(0,i.jsx)(n.em,{children:"label"})]}),"\n",(0,i.jsx)(n.p,{children:"Moves program control (unconditionally) to the statement that follows the specified label.\nThe label must be within the same function as the\ngoto statement (a goto statement cannot jump out of a function)."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"if"})," ( ",(0,i.jsx)(n.em,{children:"expression"})," ) ",(0,i.jsx)(n.em,{children:"statement 1"})," ",(0,i.jsx)(n.strong,{children:"else"})," ",(0,i.jsx)(n.em,{children:"statement 2"})]}),"\n",(0,i.jsx)(n.p,{children:"Executes statement 1 if the expression results to logically \u201ctrue\u201d.\nThe else clause of the if statement is optional.\nIf the expression results to logically \u201cfalse\u201d and an else clause exists,\nthe statement associated with the else clause (statement 2) executes."}),"\n",(0,i.jsx)(n.p,{children:"When if statements are nested and else clauses are present,\na given else is associated with the closest preceding if statement in the same block."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"return"})," ",(0,i.jsx)(n.em,{children:"expression"})]}),"\n",(0,i.jsx)(n.p,{children:"Terminates the current function and moves program control\nto the statement following the calling statement.\nThe value of the expression is returned as the function result.\nThe expression may be an array variable or a literal array."}),"\n",(0,i.jsx)(n.p,{children:"The expression is optional, but it must start on the same line\nas the return statement if it is present.\nIf absent, the value of the function is zero."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"sleep"})," ",(0,i.jsx)(n.em,{children:"expression"})]}),"\n",(0,i.jsx)(n.p,{children:"Abort the program, but leave it in a re-startable state.\nThe expression is optional. If included, the sleep instruction\nreturns the expression value (plus the expression tag)\nto the host application. The significance and purpose\nof exit codes/tags is implementation defined;\ntypically, an application uses the sleep instruction to allow for\nlight-weight multitasking of several concurrent pawn programs,\nor to implement \u201clatent\u201d functions."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"state"})," ( ",(0,i.jsx)(n.em,{children:"expression"})," ) ",(0,i.jsx)(n.strong,{children:"automaton"})," :",(0,i.jsx)(n.em,{children:"name"})]}),"\n",(0,i.jsx)(n.p,{children:"Changes the current state in the specified automaton.\nThe expression between parentheses is optional; if it is absent,\nthe parentheses must be omitted as well.\nThe name of the automaton is optional as well,\nwhen changing the state of the default, anonymous, automaton;\nif the automaton name is absent, the colon (\u201c:\u201d) must be omitted as well."}),"\n",(0,i.jsx)(n.p,{children:"Below are two examples of unconditional state changes. The first is for the default automaton:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\nstate handshake\n\n"})}),"\n",(0,i.jsx)(n.p,{children:"and the second for a specific automaton:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\nstate gps:handshake\n\n"})}),"\n",(0,i.jsx)(n.p,{children:"Often, whether or not a state changes depends on parameters of the event or the condition of the automaton as a whole.\nSince conditional state changes are so frequent,\nthe condition may be in the state instruction itself.\n\u2217 The condition follows the keyword state, between parentheses.\nThe state will only change if the condition is logically \u201ctrue\u201d."}),"\n",(0,i.jsx)(n.p,{children:"The state instruction causes an implied call to the\nentry function for the indicated state \u2014if such entry function exists."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"switch"})," ( ",(0,i.jsx)(n.em,{children:"expression"})," ) { ",(0,i.jsx)(n.em,{children:"case list"})," }"]}),"\n",(0,i.jsx)(n.p,{children:"Transfers control to different statements within the switch body depending\non the value of the switch expression.\nThe body of the switch statement is a compound statement,\nwhich contains a series of \u201ccase clauses\u201d."}),"\n",(0,i.jsx)(n.p,{children:"Each \u201ccase clause\u201d starts with the keyword case followed by a constant list and one statement.\nThe constant list is a series of expressions, separated by comma\u2019s,\nthat each evaluates to a constant value.\nThe constant list ends with a colon. To specify a \u201crange\u201d in the constant list,\nseparate the lower and upper bounds of the range with a double period (\u201c..\u201d).\nAn example of a range is: \u201ccase 1..9:\u201d."}),"\n",(0,i.jsx)(n.p,{children:"The switch statement moves control to a \u201ccase clause\u201d if the value of one of the\nexpressions in the constant list is equal to the switch expression result."}),"\n",(0,i.jsx)(n.p,{children:"The \u201cdefault clause\u201d consists of the keyword default and a colon.\nThe default clause is optional, but if it is included, it must be the last clause in the switch body.\nThe switch statement moves control to the \u201cdefault clause\u201d is executed\nif none of the case clauses match the expression result."}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h6,{id:"-the-alternative-is-to-fold-unconditional-state-changes-in-the-common-ifelse-construct",children:"\u2217 The alternative is to fold unconditional state changes in the common if\u2013else construct."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'\nswitch (weekday(12,31,1999))\n{\n    case 0, 1:              /* 0 == Saturday, 1 == Sunday */\n        print("weekend")\n    case 2:\n        print("Monday")\n    case 3:\n        print("Tuesday")\n    case 4:\n        print("Wednesday")\n    case 5:\n        print("Thursday")\n    case 6:\n        print("Friday")\n    default:\n        print("invalid week day")\n}\n\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"while"})," ( ",(0,i.jsx)(n.em,{children:"expression"})," ) ",(0,i.jsx)(n.em,{children:"statement"})]}),"\n",(0,i.jsx)(n.p,{children:"Evaluates the expression and executes the statement\nif the expression result yields logically \u201ctrue\u201d.\nAfter the statement has executed, program control returns to the expression again.\nThe statement is thus executed while the expression is true."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"Identifiers: 97"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"Example: 11 (assert)"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"Example: 21 (break)"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"Example: 27 (do while)"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"Examples: 9, 11, 21 (for)"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"Variable declarations: 62 (for)"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"Example: 7 (if else)"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"Examples: 11, 21 (return)"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"See page 40 for examples of conditional state changes (state automaton)"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"\u201centry\u201d functions: 44 (state automaton)"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"Examples: 7, 21, 26 (while)"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/vi/docs/scripting/language/reference/Contents",children:"Go Back to Contents"})})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}}}]);