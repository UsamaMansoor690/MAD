
// Usama Mansoor (FA20-BCS-026)
// String Methods

// 1) length 
let str1 = "Usama Mansoor";
console.log(str1.length); // This method returns the total length of the string

// 2) replace
// The replace method replaces a specified value with another value
let str2 = str1.replace("Mansoor", "Healer");
console.log(str2);

// 3) replaceAll
// The replaceAll method allows you to replcae all values.
let str3 = str1.replaceAll("a","A");
console.log(str3);

// 4) toUpperCase
// A string is converted to upper case.
let str4 = str1.toUpperCase();
console.log(str4);

// 5) toLowerCase
// A string is converted to lower case
let str5 = str1.toLowerCase();
console.log(str5);

// 6) concat
// This function concats (join) two strings.
let s = " ,21 Year Old."
let str6 = str1.concat(s);
console.log(str6);

// 7) trim
// This function removes whitespace.
let str7 = "                   Usama         ";
str7 = str7.trim();
console.log(str7);

// 8) trimStart
// remove Whitespace only from start of string.
str7 = str7.trimStart();

// 9) trimStart
// remove Whitespace only from end of string.
str7 = str7.trimEnd();

// 10) charAt
// returns the character at a specified index
let str8 = str1.charAt(4);
console.log(str8);

// 11) chatCodeAt
// returns the unicode of the character at a specified index.
let str9 = str1.charCodeAt(2);
console.log(str9);

// 12) split
// A string can be converted to an array with the split() method.
console.log(str1.split(","));