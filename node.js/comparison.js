// number and number
// comparison operators: >, <, >=, <=, ==, !=, ===, !==
// returns boolean value: true or false
// == and != do type coercion
// === and !== do not do type coercion
// always use === and !==
// examples:
console.log(2>1);
console.log(2<1);
console.log(2>=1);
console.log(2<=1);
console.log(2==1);
console.log(2!=1);

// number and string
// string is converted to number
// if string is not a valid number, it is converted to NaN
// NaN compared to any number is false
// examples:
console.log(2==="2");
console.log(2!=="2");
console.log("2">2);
console.log("2"<2);
console.log(2=="2");
console.log(2>"12");
console.log(2<"12");

// string and string
// lexicographical comparison
// based on unicode values
// first character is compared
// if first characters are same, then second character is compared and so on
// if one string is prefix of other, then shorter string is considered smaller
// case sensitive
// examples:
console.log("apple">"banana");
console.log("apple"<"banana");

console.log("2">"12");
console.log("2"<"12");

// special cases
// null and number
// null is converted to 0
// examples:
console.log(null>0);
console.log(null<0);
console.log(null>=0);
console.log(null<=0);
console.log(null==0);
console.log(null!=0);

// undefined and number
// undefined is converted to NaN
// NaN compared to any number is false
// examples:

console.log(undefined>0);
console.log(undefined<0);
console.log(undefined>=0);
console.log(undefined<=0);
console.log(undefined==0);
console.log(undefined!=0);

// boolean and number
// boolean is converted to number
// true is converted to 1
// false is converted to 0
// examples:
console.log(true>1);
console.log(false<1);
console.log(true>=1);
console.log(false<=0);
console.log(true==1);
console.log(false!=0);

// ===
// examples:
console.log("2"===2);
console.log(false===0);
console.log(null===undefined);

// !==
// examples:
console.log("2"!==2);
console.log(false!==0);
console.log(null!==undefined);  
