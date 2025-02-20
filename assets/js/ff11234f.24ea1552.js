"use strict";(self.webpackChunkomp_web=self.webpackChunkomp_web||[]).push([[79310],{23551:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>h,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"tutorials/Binary","title":"Binary","description":"An in depth look at binary and bitwise operators.","source":"@site/docs/tutorials/Binary.md","sourceDirName":"tutorials","slug":"/tutorials/Binary","permalink":"/docs/tutorials/Binary","draft":false,"unlisted":false,"editUrl":"https://github.com/openmultiplayer/web/tree/master/frontend/docs/tutorials/Binary.md","tags":[],"version":"current","frontMatter":{"title":"Binary","sidebar_label":"Binary","description":"An in depth look at binary and bitwise operators."},"sidebar":"docsSidebar","previous":{"title":"Advanced Structures","permalink":"/docs/tutorials/AdvancedStructures"},"next":{"title":"Menu Guide","permalink":"/docs/tutorials/MenuGuide"}}');var s=i(74848),a=i(28453);const r={title:"Binary",sidebar_label:"Binary",description:"An in depth look at binary and bitwise operators."},o=void 0,h={},l=[{value:"Credits",id:"credits",level:2},{value:"What is binary?",id:"what-is-binary",level:2},{value:"A deeper look at bits",id:"a-deeper-look-at-bits",level:3},{value:"Signed integers",id:"signed-integers",level:4},{value:"Unsigned integers",id:"unsigned-integers",level:4},{value:"Binary Operators",id:"binary-operators",level:2},{value:"Bitwise AND",id:"bitwise-and",level:3},{value:"Bitwise OR",id:"bitwise-or",level:3},{value:"Bitwise XOR",id:"bitwise-xor",level:3},{value:"Bitwise NOT",id:"bitwise-not",level:3},{value:"Bit Shifting",id:"bit-shifting",level:3},{value:"Arithmetic shifts",id:"arithmetic-shifts",level:4},{value:"Right shift",id:"right-shift",level:4},{value:"Left shift",id:"left-shift",level:4},{value:"Logical Shifts",id:"logical-shifts",level:4},{value:"Right Shift",id:"right-shift-1",level:5},{value:"Left shift",id:"left-shift-1",level:5}];function d(e){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"credits",children:"Credits"}),"\n",(0,s.jsxs)(n.p,{children:["This is from a Tutorial topic in SA-MP Forums. The author is ",(0,s.jsx)(n.strong,{children:"Kyosaur"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"what-is-binary",children:"What is binary?"}),"\n",(0,s.jsxs)(n.p,{children:["Binary is a numeral system that uses two unique symbols to represent numbers. While the more common decimal system uses ten numerals (",(0,s.jsx)(n.strong,{children:"base 10"}),"), binary uses only 0 and 1. This may sound useless in every day life, but binary is essential when it comes to computers. Computers at their lowest level perform all of their calculations by manipulating the flow of electricity to indicate on and off states. This is exactly what binary is, just a ton of switches flipped on and off. This is a sort of alien concept to most people, so lets take a look at the decimal and binary system next to each other."]}),"\n",(0,s.jsx)(n.p,{children:"Decimal (base 10)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"0\n1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n"})}),"\n",(0,s.jsx)(n.p,{children:"Binary (Base 2)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"0 //0\n1 //1\n10 //2\n11 //3\n100 //4\n101 //5\n110 //6\n111 //7\n1000 //8\n1001 //9\n1010 //10\n1011 //11\n1100 //12\n1101 //13\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Looking at both systems beside one another, you'll notice they behave exactly the same. Once you reach the last available number you have to move on to another place. These places in binary are referred to as bits (",(0,s.jsx)(n.strong,{children:"b"}),"inary dig",(0,s.jsx)(n.strong,{children:"its"}),") and are simply powers of two; just as places in the decimal system are powers of 10. To prove this, lets take a look at the number 13 in standard notation."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"NOTE:"})," '^' is power in these next few examples, not bitwise exclusive (which we'll cover later.)"]}),"\n",(0,s.jsx)(n.p,{children:"Decimal (base 10)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"13\n\n//which equals\n\n1 * (10^1) + 3 * (10^0)\n\n//which equals\n\n10+3\n\n//which equals\n\n13\n"})}),"\n",(0,s.jsx)(n.p,{children:"Binary (base 2)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"1101\n\n//which equals\n\n1 * (2^3) + 1 * (2^2) + 0 * (2^1) + 1 * (2^0)\n\n//which equals\n\n8+4+0+1\n\n//which equals\n\n13\n"})}),"\n",(0,s.jsx)(n.p,{children:"We can see from the preceding example that if a bit is set to 0, we can ignore it and move on; after all, anything multiplied by 0 is going to be 0. The previous example was a little over complicated and was just me trying to being absolutely clear. When you're converting from binary, all you really have to worry about is adding up the powers of all the bits that are turned on."}),"\n",(0,s.jsx)(n.p,{children:"Here are 12 powers of 2 just off the top of my head:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"4096,2048,1024,512,256,128,64,32,16,8,4,2,1\n"})}),"\n",(0,s.jsx)(n.p,{children:"If you know nothing about working with powers, this probably makes no sense to you at all. A power is a number multiplied by itself x amount of times. With this information in mind, the preceding list of powers probably makes more sense; well with the exception of 1. You may be curious why 2 raised to the power of 0 gives a result of 1, all i can say to this is that it just does."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"2^1 = 2, 2^3 = 4, 2^4 = 8\n"})}),"\n",(0,s.jsxs)(n.p,{children:["We can see that when we move to the right, our previous value is multiplied by 2; so its safe to assume that when we move to the left our new value is just the previous number divided by 2. With this in mind you can see how we can end up with 2 to the zeroth power equaling 1. If this isn't satisfying enough, im sure you can find more proof on ",(0,s.jsx)(n.strong,{children:"**"}),". All that being said, lets take a look at one final example, and lets make it somewhat complicated!"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"111011001011111000 //242424\n\n//Remember, ignore the bits that arent turned on.\n\n1 * (2^17) = 131072\n\n1 * (2^16) = 65536\n\n1 * (2^15) = 32768\n\n1 * (2^13) = 8192\n\n1 * (2^12) = 4096\n\n1 * (2^9) = 512\n\n1 * (2^7) = 128\n\n1 * (2^6) = 64\n\n1 * (2^5) = 32\n\n1 * (2^4) = 16\n\n1 * (2^3) = 8\n\n\n131072+65536+32768+8192+4096+512+128+64+32+16+8\n=\n242424\n"})}),"\n",(0,s.jsx)(n.p,{children:"Remember when converting: The first power is 0 so dont make the mistake as seeing the 18th place as 2^18. There are indeed 18 powers, but that is including the power of 0, so 17 is actually our highest power."}),"\n",(0,s.jsx)(n.h3,{id:"a-deeper-look-at-bits",children:"A deeper look at bits"}),"\n",(0,s.jsx)(n.p,{children:"Most programming languages allow different data types which range in the amount of bits that can be used to store information; however pawn is a typeless 32 bit language. This means that pawn will always have 32 bits available for storing information. So what happens when you have to much information? The answer to that question lies with signed and unsigned integers."}),"\n",(0,s.jsx)(n.h4,{id:"signed-integers",children:"Signed integers"}),"\n",(0,s.jsx)(n.p,{children:'Have you ever noticed that when an integer in pawn gets to high it turns into a negative? This "wrapping" is due to you go OVER the maximum value in pawn which is:'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"2^31 - 1 //Power, not bitwise exclusive. Also the -1 is because we count 0 (there ARE 2,147,483,648 values, but that is with 0, So technically 2,147,483,647 is the max).\n\n//which equals\n\n2,147,483,647\n\n//which in binary is\n\n1111111111111111111111111111111 //31 bits- all on\n"})}),"\n",(0,s.jsx)(n.p,{children:"You might be wondering why THAT is the max value, and not 2^32-1 (4,294,967,295). This is where signed and unsigned integers come into play. Signed integers have the ability to store negative values, where unsigned integers do not. This might sound like im straying away from the question, but i assure you i am not. The reason the maximum integer isnt 2^32-1 is because the 32nd bit is used as a sort of toggle for negative and positive values. This is called the MSB (Most significant bit) if the MSB is turned on, the number will be negative; if its turned off, the number is positive. Pretty simple, right?"}),"\n",(0,s.jsx)(n.p,{children:"Before i show a few negative values, i need to explain how negative values are represented in pawn. Pawn uses a system called 2's complement to represent negative values, which basically means you flip every single bit in your number and add 1 to the new number in order to make it negative."}),"\n",(0,s.jsx)(n.p,{children:"Lets take a look at a few negative values while this idea is still in your head:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"11111111111111111111111111111111 //all 32 bits turned on\n\n//equals\n\n-1\n\n//and\n\n11111111111111111111111111111110\n\n//equals\n\n-2\n\n//and finally\n\n10000000000000000000000000000000\n\n//equals\n\n-2147483648\n"})}),"\n",(0,s.jsx)(n.p,{children:"See, all negative numbers are simply the original positive number with all its bits flipped and increased by one. This is super clear with our last example, as the highest POSITIVE integer is 2147483647."}),"\n",(0,s.jsx)(n.p,{children:"From this we can see that the number range in pawn is actually:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"&#8722;2^31 to +2^31 \u2212 1\n"})}),"\n",(0,s.jsx)(n.h4,{id:"unsigned-integers",children:"Unsigned integers"}),"\n",(0,s.jsx)(n.p,{children:"There are no such thing as unsigned integers in pawn, but im adding this just so its balanced. The only difference between a signed integer and an unsigned integer is that unsigned integers can not store negative values; Integers still wrap around, but they wrap back to 0, instead of a negative value."}),"\n",(0,s.jsx)(n.h2,{id:"binary-operators",children:"Binary Operators"}),"\n",(0,s.jsx)(n.p,{children:"Binary operators allow you to manipulate individual bits of a bit pattern. Lets take a look at a list of available bitwise operators."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Bitwise arithmetic shift: >>, and <<"}),"\n",(0,s.jsx)(n.li,{children:"Bitwise logical shift: >>>"}),"\n",(0,s.jsx)(n.li,{children:"Bitwise NOT (aka complement): ~"}),"\n",(0,s.jsx)(n.li,{children:"Bitwise AND: &"}),"\n",(0,s.jsx)(n.li,{children:"Bitwise OR: |"}),"\n",(0,s.jsx)(n.li,{children:"Bitwise XOR (aka exclusive-or): ^"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"bitwise-and",children:"Bitwise AND"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"NOTE:"})," Not to be confused by the logical AND operator '&&'"]}),"\n",(0,s.jsx)(n.p,{children:"A binary AND simply takes the logical AND of the bits in each position of a number in binary form. This sounds a bit confusing, so lets take a look at it in action!"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:'1100 //12\n&\n0100 //4\n=\n0100 //4 as they both have "100" in them (which is 4)\n'})}),"\n",(0,s.jsx)(n.p,{children:"That was a little easy, lets take a look at a harder one:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"10111000 //184\n&\n01001000 //72\n=\n00001000 //8\n"})}),"\n",(0,s.jsx)(n.p,{children:"Looking at the examples should give you a pretty good idea what this operator does. It compares two bit sets together, if both of them share a bit of 1, the result will have the same bit turned on. If they share no bits at all, then the result is 0."}),"\n",(0,s.jsx)(n.h3,{id:"bitwise-or",children:"Bitwise OR"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"NOTE:"})," Not to be confused by the logical OR operator '||'"]}),"\n",(0,s.jsx)(n.p,{children:"Bitwise OR works almost exactly the same as bitwise AND. The only difference between the two is that bitwise OR only needs one of the two bit patterns to have a bit turned on in order for the result to have the same bit turned on. Lets take a look at a couple of examples!"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"1100 //12\n|\n0100 //4\n=\n1100 //12.\n"})}),"\n",(0,s.jsx)(n.p,{children:"Lets take a look at one more example."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"10111000 //184\n|\n01001000 //72\n=\n11111000 //248\n"})}),"\n",(0,s.jsx)(n.p,{children:"I think this is pretty self explanatory, if either of the numbers have a bit turned on the resulting number will also have that bit turned on."}),"\n",(0,s.jsx)(n.h3,{id:"bitwise-xor",children:"Bitwise XOR"}),"\n",(0,s.jsx)(n.p,{children:"This operator is a little similar to the bitwise OR operator, but there is a bit of a difference. Lets look at the same example used in the bitwise OR section, and see if you can spot the difference."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"1100 //12\n^\n0100 //4\n=\n1000 //8.\n"})}),"\n",(0,s.jsx)(n.p,{children:"and finally:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"10111000 //184\n^\n01001000 //72\n=\n11110000 //240\n"})}),"\n",(0,s.jsx)(n.h3,{id:"bitwise-not",children:"Bitwise NOT"}),"\n",(0,s.jsx)(n.p,{children:"This operator flips every bit in the bit pattern, turning all 1's to 0's and vise versa."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"~0\n=\n11111111111111111111111111111111 //-1\n\n//and\n\n~100 //4\n=\n11111111111111111111111111111011 //-5\n\n//and\n\n~1111111111111111111111111111111 //2147483647 (not to be confused with -1, which has 32 bits, not 31)\n=\n10000000000000000000000000000000 //-2147483648 (32nd bit turned on)\n"})}),"\n",(0,s.jsx)(n.p,{children:'If you dont understand why the negative values are sort of "backwards" please read the section about signed integers.'}),"\n",(0,s.jsx)(n.h3,{id:"bit-shifting",children:"Bit Shifting"}),"\n",(0,s.jsx)(n.p,{children:"Bit shifting does exactly what you would imagine it does; it shifts the bits in a number towards a certain direction. If you remember earlier in the article i mentioned that PAWN has a specific memory range (32 bits that can be used for storage). What happens when you shift a number past that range? The answer to this question lies in what shifting operator you are using, and what direction you are shifting in."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"NOTE:"})," In the following examples, all binary numbers will be written out in full (all 32 bits) to avoid any confusions."]}),"\n",(0,s.jsx)(n.h4,{id:"arithmetic-shifts",children:"Arithmetic shifts"}),"\n",(0,s.jsx)(n.h4,{id:"right-shift",children:"Right shift"}),"\n",(0,s.jsx)(n.p,{children:"All bits in a number are shifted x amount of times to the right when using this operator. Lets takes a quick look at a simple example."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"00000000000000000000000000001000  //8\n>>\n2\n\n=\n\n00000000000000000000000000000010 //2\n"})}),"\n",(0,s.jsx)(n.p,{children:"You can see from the preceding example that every bit has moved to the right by two places, and two zeros were added on the left side as padding. These two zeros are actually the value of the MSB (Most significant bit) and are very important when it comes to signed integer shifting. The reason the MSB is used as padding is so we keep the sign of the number that is being shifted. Lets take a look at the same example, except lets make it negative."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"11111111111111111111111111111000 //-8\n>>\n2\n\n=\n\n11111111111111111111111111111110 //-2\n"})}),"\n",(0,s.jsx)(n.p,{children:"Clearly this behaves exactly the same as the previous example, except the left bits used for padding are ones; which proves that the padding of right arithmetic shift is the value of the MSB."}),"\n",(0,s.jsx)(n.h4,{id:"left-shift",children:"Left shift"}),"\n",(0,s.jsx)(n.p,{children:"This is the exact opposite of the right arithmetic shifting operator. It shifts all the bits in a number to the left x amount of times. Lets look at an example."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"00000000000000000000000000001000  //8\n<<\n2\n\n=\n\n00000000000000000000000000100000 //32\n"})}),"\n",(0,s.jsx)(n.p,{children:"The only difference between the left and right arithmetic shift (besides the direction of the shift) would be the way it handles padding. With the right arithmetic shift, the padding is the value of the MSB (Most significant bit), but with the left arithmetic shift the value is just 0. This is because there is no relevant information like a number's sign to keep track of."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"11111111111111111111111111111000 //-8\n<<\n2\n\n=\n\n11111111111111111111111111100000 //-32\n"})}),"\n",(0,s.jsx)(n.p,{children:"See? Even though the padding is always 0, the sign of the number is still kept. The only thing you really have to worry about is shifting to far. If you shift a positive number past the highest possible number, it will become negative and vise versa with negative values (you'll eventually hit 0)."}),"\n",(0,s.jsx)(n.h4,{id:"logical-shifts",children:"Logical Shifts"}),"\n",(0,s.jsx)(n.h5,{id:"right-shift-1",children:"Right Shift"}),"\n",(0,s.jsx)(n.p,{children:"This is the converse to the arithmetic left shift. The best way to describe it would be a hybrid between the two arithmetic shifts. Lets take a look at it in action!"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"00000000000000000000000000001000  //8\n>>>\n2\n\n=\n\n00000000000000000000000000000010 //2\n"})}),"\n",(0,s.jsx)(n.p,{children:"The bits in the number 8 where shifted 2 times to the right. So how is this any different from the arithmetic right shift? The answer is the padding. With the arithmetic right shift, the padding is the value of the MSB, but with the logical right shift the padding is just 0 (just as it is with the arithmetic left shift). This means that it will not keep the number of the sign, and our result will always be positive. To prove this, lets shift a negative number!"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-c",children:"11111111111111111111111111111000 //-8\n>>>\n2\n\n=\n\n00111111111111111111111111111110 //1073741822\n"})}),"\n",(0,s.jsx)(n.p,{children:"That proves that we wont get any negative values while using the logical right shift!"}),"\n",(0,s.jsx)(n.h5,{id:"left-shift-1",children:"Left shift"}),"\n",(0,s.jsx)(n.p,{children:"There is no logical left shift, as it would do exactly the same as the arithmetic left shift. I just added this to avoid confusion of any sort, and also to keep the section balanced."})]})}function c(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>o});var t=i(96540);const s={},a=t.createContext(s);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);