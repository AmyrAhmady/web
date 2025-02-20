"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[35693],{28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(96540);const s={},l=i.createContext(s);function r(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(l.Provider,{value:n},e.children)}},67640:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"scripting/functions/DB_GetFieldStringByName","title":"DB_GetFieldStringByName","description":"Gets the contents of the field as a string with the specified field name.","source":"@site/docs/scripting/functions/DB_GetFieldStringByName.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/DB_GetFieldStringByName","permalink":"/vi/docs/scripting/functions/DB_GetFieldStringByName","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/DB_GetFieldStringByName.md","tags":[{"inline":true,"label":"sqlite","permalink":"/vi/docs/tags/sqlite"}],"version":"current","frontMatter":{"title":"DB_GetFieldStringByName","sidebar_label":"DB_GetFieldStringByName","description":"Gets the contents of the field as a string with the specified field name.","keywords":["sqlite"],"tags":["sqlite"]},"sidebar":"docsSidebar","previous":{"title":"DB_GetFieldString","permalink":"/vi/docs/scripting/functions/DB_GetFieldString"},"next":{"title":"DB_GetLegacyDBResult","permalink":"/vi/docs/scripting/functions/DB_GetLegacyDBResult"}}');var s=t(74848),l=t(28453);const r={title:"DB_GetFieldStringByName",sidebar_label:"DB_GetFieldStringByName",description:"Gets the contents of the field as a string with the specified field name.",keywords:["sqlite"],tags:["sqlite"]},a=void 0,d={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Get the contents of field with specified name."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["DBResult",":result"]}),(0,s.jsx)(n.td,{children:"The result to get the data from"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"const field[]"}),(0,s.jsx)(n.td,{children:"The fieldname to get the data from"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"output[]"}),(0,s.jsx)(n.td,{children:"The result"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"size = sizeof (output)"}),(0,s.jsx)(n.td,{children:"The max length of the field"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(n.p,{children:["Returns ",(0,s.jsx)(n.strong,{children:"true"})," if result set handle is valid and the column is available, otherwise ",(0,s.jsx)(n.strong,{children:"false"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'// examples.inc\n\n// ...\n\nExamples_ListNames(DB:dbConnectionHandle)\n{\n    // Database result set\n    new DBResult:db_result_set = DB_ExecuteQuery("SELECT `name` FROM `examples`");\n\n    // If database result set is valid\n    if (db_result_set)\n    {\n        // Allocate some memory to store results\n        new result[256];\n\n        // Do operations\n        do\n        {\n            // Add value from "example" field to the return value variable\n            DB_GetFieldStringByName(db_result_set, "name", result, sizeof result);\n        }\n\n        // While next row could be fetched\n        while (DB_SelectNextRow(db_result_set));\n\n        // Free result set\n        DB_FreeResultSet(db_result_set);\n    }\n}\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'// mode.pwn\n\n// ...\n\n#include <examples>\n\nstatic DB:gDBConnectionHandle;\n\n// ...\n\npublic OnGameModeInit()\n{\n    // ...\n\n    // Create a connection to a database\n    gDBConnectionHandle = DB_Open("example.db");\n\n    // If connection to the database exists\n    if (gDBConnectionHandle)\n    {\n        // Successfully created a connection to the database\n        print("Successfully created a connection to database \\"example.db\\".");\n        Examples_ListNames(gDBConnectionHandle);\n    }\n    else\n    {\n        // Failed to create a connection to the database\n        print("Failed to open a connection to database \\"example.db\\".");\n    }\n\n    // ...\n\n    return 1;\n}\n\npublic OnGameModeExit()\n{\n    // Close the connection to the database if connection is open\n    if (DB_Close(gDBConnectionHandle))\n    {\n        // Extra cleanup\n        gDBConnectionHandle = DB:0;\n    }\n\n    // ...\n\n    return 1;\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["Using an invalid handle other than zero will crash your server! Get a valid database connection handle by using ",(0,s.jsx)(n.a,{href:"DB_ExecuteQuery",children:"DB_ExecuteQuery"}),"."]})}),"\n",(0,s.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"DB_Open",children:"DB_Open"}),": Open a connection to an SQLite database"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"DB_Close",children:"DB_Close"}),": Close the connection to an SQLite database"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"DB_ExecuteQuery",children:"DB_ExecuteQuery"}),": Query an SQLite database"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"DB_FreeResultSet",children:"DB_FreeResultSet"}),": Free result memory from a DB_ExecuteQuery"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"DB_GetRowCount",children:"DB_GetRowCount"}),": Get the number of rows in a result"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"DB_SelectNextRow",children:"DB_SelectNextRow"}),": Move to the next row"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"DB_GetFieldCount",children:"DB_GetFieldCount"}),": Get the number of fields in a result"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"DB_GetFieldName",children:"DB_GetFieldName"}),": Returns the name of a field at a particular index"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"DB_GetFieldString",children:"DB_GetFieldString"}),": Get content of field with specified ID from current result row"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"DB_GetFieldStringByName",children:"DB_GetFieldStringByName"}),": Get content of field with specified name from current result row"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"DB_GetFieldInt",children:"DB_GetFieldInt"}),": Get content of field as an integer with specified ID from current result row"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"DB_GetFieldIntByName",children:"DB_GetFieldIntByName"}),": Get content of field as an integer with specified name from current result row"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"DB_GetFieldFloat",children:"DB_GetFieldFloat"}),": Get content of field as a float with specified ID from current result row"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"DB_GetFieldFloatByName",children:"DB_GetFieldFloatByName"}),": Get content of field as a float with specified name from current result row"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"DB_GetMemHandle",children:"DB_GetMemHandle"}),": Get memory handle for an SQLite database that was opened with db_open."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"DB_GetLegacyDBResult",children:"DB_GetLegacyDBResult"}),": Get memory handle for an SQLite query that was executed with DB_ExecuteQuery."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"DB_GetDatabaseConnectionCount",children:"DB_GetDatabaseConnectionCount"}),": The function gets the number of open database connections for debugging purposes."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"DB_GetDatabaseResultSetCount",children:"DB_GetDatabaseResultSetCount"}),": The function gets the number of open database results."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}}}]);