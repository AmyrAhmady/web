"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[91048],{6116:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"tutorials/AdvancedStructures","title":"Advanced Structures","description":"Array manipulation","source":"@site/docs/tutorials/AdvancedStructures.md","sourceDirName":"tutorials","slug":"/tutorials/AdvancedStructures","permalink":"/ar/docs/tutorials/AdvancedStructures","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/tutorials/AdvancedStructures.md","tags":[],"version":"current","frontMatter":{"title":"Advanced Structures","sidebar_label":"Advanced Structures"},"sidebar":"docsSidebar","previous":{"title":"sa-mp.cfg","permalink":"/ar/docs/client/sa-mp.cfg"},"next":{"title":"Binary","permalink":"/ar/docs/tutorials/Binary"}}');var a=n(74848),s=n(28453);const r={title:"Advanced Structures",sidebar_label:"Advanced Structures"},o=void 0,l={},h=[{value:"Array manipulation",id:"array-manipulation",level:2},{value:"Finding an empty slot properly",id:"finding-an-empty-slot-properly",level:3},{value:"List",id:"list",level:3},{value:"Introduction",id:"introduction",level:4},{value:"Types",id:"types",level:4},{value:"Mixed lists",id:"mixed-lists",level:4},{value:"Code",id:"code",level:4},{value:"Binary Trees",id:"binary-trees",level:3},{value:"Introduction",id:"introduction-1",level:4},{value:"Balanced and unbalanced",id:"balanced-and-unbalanced",level:4},{value:"Addition",id:"addition",level:4},{value:"Deletion",id:"deletion",level:4}];function d(e){const t={code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"array-manipulation",children:"Array manipulation"}),"\n",(0,a.jsx)(t.h3,{id:"finding-an-empty-slot-properly",children:"Finding an empty slot properly"}),"\n",(0,a.jsx)(t.p,{children:"This example shows how to find an empty slot in an array using standard coding practices."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-pawn",children:"new\n    gMyArray[10];\n\nstock FindEmptySlot()\n{\n    new\n        i = 0;\n    while (i < sizeof (gMyArray) && gMyArray[i])\n    {\n        i++;\n    }\n    if (i == sizeof (gMyArray)) return -1;\n    return i;\n}\n"})}),"\n",(0,a.jsx)(t.p,{children:"This basic example assumes an array slot is empty if its value is 0. The loop loops through all values in the array (could also be done with a constant) as long as the values are not 0. When it reaches one which is 0 the while condition will fail and the loop ends without using a break as is common practice but discouraged in situations like this. This function also returns -1 if a free slot is not found, which would need to be checked at the other end. More commonly you would use the found id straight away:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-pawn",children:'MyFunction()\n{\n    new\n        i = 0;\n    while (i < sizeof (gMyArray) && gMyArray[i])\n    {\n        i++;\n    }\n    if (i == sizeof (gMyArray))\n    {\n        printf("No free slot found");\n        return 0;\n    }\n    printf("Slot %d is empty", i);\n    // Use the found slot in your code for whatever\n    return 1;\n}\n'})}),"\n",(0,a.jsx)(t.p,{children:'Obviously you would replace the "gMyArray[i]" expression with your own indication of a slot in use.'}),"\n",(0,a.jsx)(t.h3,{id:"list",children:"List"}),"\n",(0,a.jsx)(t.h4,{id:"introduction",children:"Introduction"}),"\n",(0,a.jsx)(t.p,{children:"Lists are a very useful type of structure, they're basically an array where the next piece or relevant data is pointed to by the last piece."}),"\n",(0,a.jsx)(t.p,{children:"Example:"}),"\n",(0,a.jsx)(t.p,{children:"Say you have the following array:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-pawn",children:"3, 1, 64, 2, 4, 786, 2, 9\n"})}),"\n",(0,a.jsx)(t.p,{children:"If you wanted to sort the array you would end up with:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-pawn",children:"1, 2, 2, 3, 4, 9, 64, 786\n"})}),"\n",(0,a.jsx)(t.p,{children:"If however you wanted to leave the data in the original order but still know the numbers in order for some reason (it's just an example), you have a problem, how are you meant to have numbers in two orders at once? This would be a good use of lists. To construct a list from this data you would need to make the array into a 2d array, where the second dimension was 2 cells big, the first dimension containing the original number, the other containing the index of the next largest number. You would also need a separate variable to hold the index of the lowest number, so your new array would look like:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-pawn",children:"start = 1\n3, 1, 64, 2, 4, 786, 2, 9\n4, 3, 5,  6, 7, -1,  0, 2\n"})}),"\n",(0,a.jsx)(t.p,{children:"The next index associated with 786 is -1, this is an invalid array index and indicates the end of the list, i.e. there are no more numbers. The two 2's could obviously be either way round, the first one in the array is the first on in the list too as it's the more likely one to be encountered first."}),"\n",(0,a.jsx)(t.p,{children:"The other advantage of this method of sorting the numbers is adding more numbers is a lot faster. If you wanted to add another number 3 to the sorted array you would need to first shift at least 4 numbers one slot to the right to make space, not terrible here but very slow in larger arrays. With the list version you could just append the 3 to the end of the array and modify a single value in the list;"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-pawn",children:"start = 1\n3, 1, 64, 2, 4, 786, 2, 9, 3\n8, 3, 5,  6, 7, -1,  0, 2, 4\n^ modify this value        ^ next highest slot\n"})}),"\n",(0,a.jsx)(t.p,{children:"None of the other numbers have moved so none of the other indexes need updating, just make the next lowest number point to the new number and make the new number point the number the next lowest used to be pointing to. Removing a value is even easier:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-pawn",children:"start = 1\n3, 1, 64, X, 4, 786, 2, 9, 3\n8, 6, 5,  6, 7, -1,  0, 2, 4\n   ^ Changed to jump over the removed value\n"})}),"\n",(0,a.jsx)(t.p,{children:"Here the first 2 has been removed and the number which pointed to that number (the 1) has been updated to point to the number the removed number was pointing to. In this example neither the removed number's pointer nor number have been removed, but you cannot possibly get to that slot following the list so it doesn't matter, it is effectively removed."}),"\n",(0,a.jsx)(t.h4,{id:"types",children:"Types"}),"\n",(0,a.jsx)(t.p,{children:"The lists in the examples above were just basic single lists, you can also have double lists where every value points to the next value and the last value, these tend to have a pointer to the end of the list too to go backwards (e.g. to get the numbers in descending order):"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-pawn",children:"start = 1\nend = 5\nvalue: 3, 1,  64, 2, 4, 786, 2, 9, 3\nnext:  8, 3,  5,  6, 7, -1,  0, 2, 4\nlast:  6, -1, 7,  1, 8, 2,   3, 4, 0\n"})}),"\n",(0,a.jsx)(t.p,{children:"You have to be careful with these, especially when you have more than one of any value, that the last pointer points to the number who's next pointer goes straight back again, e.g this is wrong:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-pawn",children:"2,  3, 3\n1,  2, -1\n-1, 2, 0\n"})}),"\n",(0,a.jsx)(t.p,{children:"The 2's next pointer points to the 3 in slot one, but that 3's last pointer doesn't go back to the two, both lists are in order on their own (as the two threes can be either way round) but together they are wrong, the correct version would be:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-pawn",children:"2,  3, 3\n1,  2, -1\n-1, 0, 2\n"})}),"\n",(0,a.jsx)(t.p,{children:"Both of those lists start and end on the end two numbers, the back list in the wrong example started on the middle number."}),"\n",(0,a.jsx)(t.p,{children:"The other type of list is the looping one where the last value points back to the first. The obvious advantage to this is that you can get to any value from any other value without knowing in advance whether the target is before or after the start point, you just need to be careful not to get into an infinite loop as there's no explicit -1 end point. These lists do still have start points. You can also do double looping lists where you have a next and last list, both of which loop round:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-pawn",children:"start = 1\nend = 5\n3, 1,  64, 2, 4, 786, 2, 9, 3\n8, 3,  5,  6, 7, 1,   0, 2, 4\n6, 5,  7,  1, 8, 2,   3, 4, 0\n"})}),"\n",(0,a.jsx)(t.h4,{id:"mixed-lists",children:"Mixed lists"}),"\n",(0,a.jsx)(t.p,{children:"Mixed lists are arrays containing multiple lists at once. An example could be an array of values, sorted by a list, with another list linking all unused slots so you know where you can add a new value. Example (X means unused (free) slot):"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-pawn",children:"sortedStart = 3\nunusedStart = 1\nvalue: 34, X, X, 6, 34, 46, X,  54, 23, 25, X,  75, X, 45\nsort:  4,        8, 13, 7,      11, 9,  0,      -1,    5\nfree:      2, 6,            10,             12,     -1\n"})}),"\n",(0,a.jsx)(t.p,{children:"Obviously the two lists never interact so both can use the same slot for their next value:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-pawn",children:"sortedStart = 3\nunusedStart = 1\nvalue: 34, X, X, 6, 34, 46, X,  54, 23, 25, X,  75, X,  45\nnext:  4,  2, 6, 8, 13, 7,  10, 11, 9,  0,  12, -1, -1, 5\n"})}),"\n",(0,a.jsx)(t.h4,{id:"code",children:"Code"}),"\n",(0,a.jsx)(t.p,{children:"Before you start the code you need to decide what sort of list is best suited for your application, this is entirely based on application can't easily be covered here. All these examples are mixed lists, one list for the required values, one for unused slots."}),"\n",(0,a.jsx)(t.p,{children:"This example shows how to write code for a list sorted numerically ascending."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-pawn",children:"#define NUMBER_OF_VALUES (10)\n\nenum E_DATA_LIST\n{\n    E_DATA_LIST_VALUE,\n    E_DATA_LIST_NEXT\n}\n\nnew\n    gListData[NUMBER_OF_VALUES][E_DATA_LIST],\n    gUnusedStart = 0,\n    gListStart = -1; // Starts off with no list\n\n// This function initializes the list\nList_Setup()\n{\n    new\n        i,\n        size = NUMBER_OF_VALUES;\n    size--;\n    for (i = 0; i < size; i++)\n    {\n        // To start with all slots are unused\n        gListData[i][E_DATA_LIST_NEXT] = i + 1;\n    }\n    // End the list\n    gListData[size][E_DATA_LIST_NEXT] = -1;\n}\n\n// This function adds a value to the list (using basic sorting)\nList_Add(value)\n{\n    // Check if there are free slots in the array\n    if (gUnusedStart == -1) return -1;\n    new\n        pointer = gListStart,\n        last = -1,\n        slot = gUnusedStart;\n    // Add the value to the array\n    gListData[slot][E_DATA_LIST_VALUE] = value;\n    // Update the empty list\n    gUnusedStart = gListData[slot][E_DATA_LIST_NEXT];\n    // Loop through the list till we get to bigger/same size number\n    while (pointer != -1 && gListData[pointer][E_DATA_LIST_VALUE] < value)\n    {\n        // Save the position of the last value\n        last = pointer;\n        // Move on to the next slot\n        pointer = gListData[pointer][E_DATA_LIST_NEXT];\n    }\n    // If we got here we ran out of values or reached a larger one\n    // Check if we checked any numbers\n    if (last == -1)\n    {\n        // The first number was bigger or there is no list\n        // Either way add the new value to the start of the list\n        gListData[slot][E_DATA_LIST_NEXT] = gListStart;\n        gListStart = slot;\n    }\n    else\n    {\n        // Place the new value in the list\n        gListData[slot][E_DATA_LIST_NEXT] = pointer;\n        gListData[last][E_DATA_LIST_NEXT] = slot;\n    }\n    return slot;\n}\n\n// This function removes a value from a given slot in the array (returned by List_Add)\nList_Remove(slot)\n{\n    // Is this a valid slot\n    if (slot < 0 || slot >= NUMBER_OF_VALUES) return 0;\n    // First find the slot before\n    new\n        pointer = gListStart,\n        last = -1;\n    while (pointer != -1 && pointer != slot)\n    {\n        last = pointer;\n        pointer = gListData[pointer][E_DATA_LIST_NEXT];\n    }\n    // Did we find the slot in the list\n    if (pointer == -1) return 0;\n    if (last == -1)\n    {\n        // The value is the first in the list\n        // Skip over this slot in the list\n        gListStart = gListData[slot][E_DATA_LIST_NEXT];\n    }\n    else\n    {\n        // The value is in the list\n        // Skip over this slot in the list\n        gListData[last][E_DATA_LIST_NEXT] = gListData[slot][E_DATA_LIST_NEXT];\n    }\n    // Add this slot to the unused list\n    // The unused list isn't in any order so this doesn't matter\n    gListData[slot][E_DATA_LIST_NEXT] = gUnusedStart;\n    gUnusedStart = slot;\n    return 1;\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"binary-trees",children:"Binary Trees"}),"\n",(0,a.jsx)(t.h4,{id:"introduction-1",children:"Introduction"}),"\n",(0,a.jsx)(t.p,{children:"Binary trees are a very fast method of searching for data in an array by using a very special list system. The most well known binary tree is probably the 20 questions game, with just 20 yes/no questions you can have over 1048576 items. A binary tree, as its name implies, is a type of tree, similar to a family tree, where every item has 0, 1 or 2 children. They are not used for ordering data like a list but sorting data for very efficient searching. Basically you start with an item somewhere near the middle of the ordered list of objects (e.g. the middle number in a sorted array) and compare that to the value you want to find. If it's the same you've found your item, if it's greater you move to the item to the right (not immediately to the right, the item to the right of the middle item would be the item at the three quarter mark), if it's less you move left, then repeat the process."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Example"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-pawn",children:"1 2 5 6 7 9 12 14 17 19 23 25 28 33 38\n"})}),"\n",(0,a.jsx)(t.p,{children:"You have the preceding ordered array and you want to find what slot the number 7 is in (if it's in at all), in this example it's probably more efficient to just loop straight through the array to find it but that's not the point, that method increases in time linearly with the size of the array, a binary search time increases linearly as the array increases exponentially in size. I.e. an array 128 big will take twice as long to search straight through as an array 64 big, but a binary search 128 big will only take one check more than a binary search 64 big, not a lot at all."}),"\n",(0,a.jsxs)(t.p,{children:["If we construct a binary tree from the data above we get: ",(0,a.jsx)(t.img,{src:"https://sampwiki.blast.hk/wiki/Image:Binarytree.GIF",alt:"Binarytree"})]}),"\n",(0,a.jsx)(t.p,{children:"If you read left to right, ignoring the vertical aspect you can see that the numbers are in order. Now we can try to find the 7."}),"\n",(0,a.jsx)(t.p,{children:"The start number is 14, 7 is less than 14 so we go to the slot pointed to by the left branch of 14. This brings us to 6, 7 is bigger than 6 so we go right to 9, then left again to 7. This method took 4 comparisons to find the number (including the final check to confirm that we are on 7), using a straight search would have taken 5."}),"\n",(0,a.jsxs)(t.p,{children:["Lets say there is no 7, we would end up with this binary tree: ",(0,a.jsx)(t.img,{src:"https://sampwiki.blast.hk/wiki/Image:Binarytree-7-less.GIF",alt:"Binarytree-7-less"})]}),"\n",(0,a.jsx)(t.p,{children:"This, unlike the example above, has a single child number (the 9), as well as 2 and 0 child numbers. You only get a perfect tree when there are (2^n)-1 numbers (0, 1, 3, 7, 15, 31 ...), any other numbers will give a not quite full tree. In this case when we get to the 9, where the 7 will be, we'll find there is no left branch, meaning the 7 doesn't exist (it cannot possibly be anywhere else in the tree, think about it), so we return -1 for invalid slot."}),"\n",(0,a.jsx)(t.h4,{id:"balanced-and-unbalanced",children:"Balanced and unbalanced"}),"\n",(0,a.jsxs)(t.p,{children:["The trees in the examples above are called balanced binary trees, this means as near as possible all the branches are the same length (obviously in the second there aren't enough numbers for this to be the case but it's as near as possible). Constructing balanced trees is not easy, the generally accepted method of constructing almost balanced trees is putting the numbers in in a random order, this may mean you end up with something like this: ",(0,a.jsx)(t.img,{src:"https://sampwiki.blast.hk/wiki/Image:Binarytree-uneven.GIF",alt:"Binarytree-uneven"})]}),"\n",(0,a.jsx)(t.p,{children:"Obviously this tree is still valid but the right side is much larger than the left, however finding 25 still only takes 7 comparisons in this compared to 12 in the straight list. Also, as long as you start with a fairly middle number the random insertion method should produce a fairly balanced tree. The worst possible thing you can do is put the numbers in in order as then there will be no left branches at all (or right branches if done the other way), however even in this worst case the binary tree will take no longer to search than the straight list."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Modification"})}),"\n",(0,a.jsx)(t.h4,{id:"addition",children:"Addition"}),"\n",(0,a.jsx)(t.p,{children:"Adding a value to a binary tree is relatively easy, you just follow the tree through, using the value you want to add as a reference untill you reach an empty branch and add the number there. E.g. if you wanted to add the number 15 to our original balanced tree it would end up on the left branch of the 17. If we wanted to add the number 8 to the second balanced tree (the one without the 7) it would end up in the 7's old slot on the left of the 9."}),"\n",(0,a.jsx)(t.h4,{id:"deletion",children:"Deletion"}),"\n",(0,a.jsx)(t.p,{children:"Deleting a number from a binary tree can be hard or it can be easy. If the number is at the end of a branch (e.g. 1, 5, 7, 12 etc in the original tree) you simply remove them. If a number only has one child (e.g. the 9 in the second example) you simply move that child (e.g. the 12) up into their position (so 6's children would be 2 and 12 in the new second example with 9 removed). Deletion only gets interesting when a node has two children. There are at least four ways of doing this:"}),"\n",(0,a.jsx)(t.p,{children:"The first method is the simplest computationally. Basically you choose one of the branches (left or right, assume right for this explanation) and replace the node you've removed with the first node of that branch (i.e. the right child of the node you've removed). You then go left through the new branch till you reach the end and place the left branch there. E.g. if you removed the 14 from the original exampe you would end up with 25 taking its place at the top of the tree and 6 attached to the left branch of 17. This method is fast but ends up with very unbalanced trees very quickly."}),"\n",(0,a.jsx)(t.p,{children:"The second method is to get all the numbers which are children of the node you just removed and rebuild a new binary tree from them, then put the top of that tree into the node you've just removed. This keeps the tree fairly well balanced but is obviously slower."}),"\n",(0,a.jsx)(t.p,{children:"The third method is to combine the two methods above and rebuild the tree inline, this is more complex to code but keeps the tree balanced and is faster than the second method (though no-where near as fast as the first)."}),"\n",(0,a.jsx)(t.p,{children:"The final menthod listed here is to simply set a flag on a value saying it's not used any more, this is even faster than the first method and maintains the structure but means you can't re-use slots unless you can find a value to replace it with later."})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var i=n(96540);const a={},s=i.createContext(a);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);