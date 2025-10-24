//type conversion
// convert one data type to another data type
// string to number
// number to string
// boolean to number
// number to boolean
// boolean to string
// string to boolean
// etc 
// implicit conversion
// explicit conversion

// implicit conversion
let myVar = "34"
let myNumber = 5
console.log (myVar + myNumber); // "345"  string concatenation
console.log (myVar * myNumber); // 170  multiplication
console.log (myVar - myNumber); // 29  subtraction
console.log (myVar / myNumber); // 6.8  division
// in implicit conversion, javascript engine automatically converts one data type to another data type based on the operator
// + => string concatenation
// - , *, / => number conversion
// boolean true => 1; false => 0
// null => 0
// undefined => NAN
// NaN => NaN
// object => NaN
// array => if single value then that value else NaN

// explicit conversion  
//string to number
let myVar1 = "34"
let myNumber1 = 5
let convertedNumber = Number(myVar1)
console.log (convertedNumber + myNumber1); // 39
console.log (typeof convertedNumber); // number

let score = true


console.log (typeof score);
console.log (typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

//"33" =>33
//"33abc" => NAN
 //true => 1; false=> 0

let idloggedIn =1
let booleanIsloggedIn = boolean(isloggedIn)
console.log(booleanIsloggedIn);

// 1 => true; 0=>false
//""=> false
//"atharv"=> true

let someNumber = 33
let stringNumber = string(someNumber)
console.log(stringNumber);



