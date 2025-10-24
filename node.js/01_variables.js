// variable declaration in javascript

// three ways to declare a variable
// 1. const
// 2. let
// 3. var

// const - block scope
// let - block scope
// var - functional scope

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
console.table([account_Id,accountemail,accountpassword, accountcity,accountstate])
