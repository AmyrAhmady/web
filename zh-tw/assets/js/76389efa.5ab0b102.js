"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[99780],{28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>d});var i=t(96540);const s={},r=i.createContext(s);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:n},e.children)}},83502:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"scripting/functions/DB_GetFieldName","title":"DB_GetFieldName","description":"Returns the name of the field at the specified index.","source":"@site/docs/scripting/functions/DB_GetFieldName.md","sourceDirName":"scripting/functions","slug":"/scripting/functions/DB_GetFieldName","permalink":"/zh-tw/docs/scripting/functions/DB_GetFieldName","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/scripting/functions/DB_GetFieldName.md","tags":[{"inline":true,"label":"sqlite","permalink":"/zh-tw/docs/tags/sqlite"}],"version":"current","frontMatter":{"title":"DB_GetFieldName","sidebar_label":"DB_GetFieldName","description":"Returns the name of the field at the specified index.","keywords":["sqlite"],"tags":["sqlite"]},"sidebar":"docsSidebar","previous":{"title":"DB_GetFieldIntByName","permalink":"/zh-tw/docs/scripting/functions/DB_GetFieldIntByName"},"next":{"title":"DB_GetFieldString","permalink":"/zh-tw/docs/scripting/functions/DB_GetFieldString"}}');var s=t(74848),r=t(28453);const l={title:"DB_GetFieldName",sidebar_label:"DB_GetFieldName",description:"Returns the name of the field at the specified index.",keywords:["sqlite"],tags:["sqlite"]},d=void 0,a={},o=[{value:"Description",id:"description",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2},{value:"Related Functions",id:"related-functions",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Returns the name of a field at a particular index."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["DBResult",":result"]}),(0,s.jsxs)(n.td,{children:["The result to get the data from; returned by ",(0,s.jsx)(n.a,{href:"DB_ExecuteQuery",children:"DB_ExecuteQuery"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"field"}),(0,s.jsx)(n.td,{children:"The index of the field to get the name of."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"output[]"}),(0,s.jsx)(n.td,{children:"The result."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"size = sizeof (output)"}),(0,s.jsx)(n.td,{children:"The max length of the field."})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(n.p,{children:["Returns ",(0,s.jsx)(n.strong,{children:"true"})," if result set handle is valid, otherwise ",(0,s.jsx)(n.strong,{children:"false"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'static DB:gDBConnectionHandle;\n\npublic OnGameModeInit()\n{\n    // ...\n\n    // Create a connection to a database\n    gDBConnectionHandle = DB_Open("example.db");\n\n    // If connection to the database exists\n    if (gDBConnectionHandle)\n    {\n        // Select first entry in table "join_log"\n        new DBResult:db_result_set = DB_ExecuteQuery(g_DBConnection, "SELECT * FROM `join_log` LIMIT 1");\n\n        // If result set handle is valid\n        if (db_result_set)\n        {\n            // Get the number of fields from result set\n            new columns = DB_GetRowCount(db_result_set);\n\n            // Allocate some memory for storing field names\n            new field_name[32];\n\n            // Iterate through all column indices\n            for (new column_index; index < column_index; index++)\n            {\n                // Store the name of the i indexed column name into "field_name"\n                DB_GetFieldName(db_result_set, index, field_name, sizeof field_name);\n\n                // Print "field_name"\n                printf("Field name at index %d: \\"%s\\"", index, field_name);\n            }\n\n            // Frees the result set\n            DB_FreeResultSet(db_result_set);\n        }\n    }\n    else\n    {\n        // Failed to create a connection to the database\n        print("Failed to open a connection to database \\"example.db\\".");\n    }\n}\n\npublic OnGameModeExit()\n{\n    // Close the connection to the database if connection is open\n    if (DB_Close(gDBConnectionHandle))\n    {\n        // Extra cleanup\n        gDBConnectionHandle = DB:0;\n    }\n\n    // ...\n\n    return 1;\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["Using an invalid handle other than zero will crash your server! Get a valid database connection handle by using ",(0,s.jsx)(n.a,{href:"DB_ExecuteQuery",children:"DB_ExecuteQuery"}),"."]})}),"\n",(0,s.jsx)(n.h2,{id:"related-functions",children:"Related Functions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"DB_Open",children:"DB_Open"}),": Open a connection to an SQLite database"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"DB_Close",children:"DB_Close"}),": Close the connection to an SQLite database"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"DB_ExecuteQuery",children:"DB_ExecuteQuery"}),": Query an SQLite database"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"DB_FreeResultSet",children:"DB_FreeResultSet"}),": Free result memory from a DB_ExecuteQuery"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"DB_GetRowCount",children:"DB_GetRowCount"}),": Get the number of rows in a result"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"DB_SelectNextRow",children:"DB_SelectNextRow"}),": Move to the next row"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"DB_GetFieldCount",children:"DB_GetFieldCount"}),": Get the number of fields in a result"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"DB_GetFieldName",children:"DB_GetFieldName"}),": Returns the name of a field at a particular index"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"DB_GetFieldString",children:"DB_GetFieldString"}),": Get content of field with specified ID from current result row"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"DB_GetFieldStringByName",children:"DB_GetFieldStringByName"}),": Get content of field with specified name from current result row"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"DB_GetFieldInt",children:"DB_GetFieldInt"}),": Get content of field as an integer with specified ID from current result row"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"DB_GetFieldIntByName",children:"DB_GetFieldIntByName"}),": Get content of field as an integer with specified name from current result row"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"DB_GetFieldFloat",children:"DB_GetFieldFloat"}),": Get content of field as a float with specified ID from current result row"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"DB_GetFieldFloatByName",children:"DB_GetFieldFloatByName"}),": Get content of field as a float with specified name from current result row"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"DB_GetMemHandle",children:"DB_GetMemHandle"}),": Get memory handle for an SQLite database that was opened with db_open."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"DB_GetLegacyDBResult",children:"DB_GetLegacyDBResult"}),": Get memory handle for an SQLite query that was executed with DB_ExecuteQuery."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"DB_GetDatabaseConnectionCount",children:"DB_GetDatabaseConnectionCount"}),": The function gets the number of open database connections for debugging purposes."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"DB_GetDatabaseResultSetCount",children:"DB_GetDatabaseResultSetCount"}),": The function gets the number of open database results."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}}}]);