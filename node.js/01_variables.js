// variable declaration in javascript

// three ways to declare a variable
// 1. const
// 2. let
// 3. var
*-------------------------------------x------------------------------------*/

// const - block scope
// const - constant value - cannot be changed
// const - must be initialized at the time of declaration
// const - cannot be redeclared

*-------------------------------------x------------------------------------*/

// let - block scope
// let - can be changed
// let - can be initialized at the time of declaration or later
// let - cannot be redeclared
*-------------------------------------x------------------------------------*/

// var - functional scope
// var - can be changed
// var - can be initialized at the time of declaration or later
// var - can be redeclared

*-------------------------------------x------------------------------------*/

// scope of variable
// scope - accessibility of variable
// types of scope
// global scope - variable is accessible everywhere
// local scope - variable is accessible within the function it is defined
// module scope - variable is accessible within the module it is defined
// block scope - variable is only accessible within the block it is defined
// functional scope - variable is only accessible within the function it is defined

// types of local scope
// global scope - variable is accessible everywhere
// local scope - variable is accessible within the function it is defined
// module scope - variable is accessible within the module it is defined
// block scope - variable is only accessible within the block it is defined
// functional scope - variable is only accessible within the function it is defined

// example of block scope

    const name = "atharv"
const account_Id = 1435465
let  accountemail="atharvk1345@gmail.com" 
var accountpassword= "12345"
// console.log(name); // accessible
// console.log(account_Id); // accessible
// console.log(accountemail); // accessible
// console.log(accountpassword); // accessible

// console.log(name); // not accessible
// console.log(account_Id); // not accessible
// console.log(accountemail); // not accessible
// console.log(accountpassword); // not accessible

// example of functional scope
function func(){
    const name = "atharv"
const account_Id = 1435465
let  accountemail="
accountcity= "lucknow"
let accountstate;
accountemail ="atharvkumar1345@gmail.com"
accountpassword="123446435"
accountcity="lucknow"
console.log(account_Id);

/*
perfer not to use var
because of issues of scope and functional scope
*/
console.table([account_Id,accountemail,accountpassword, accountcity,accountstate]);
