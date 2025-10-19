const account_Id = 1435465
let  accountemail="atharvk1345@gmail.com" 
var accountpassword= "12345"
accountcity= "lucknow"
let accountstate; // if we not assine a value then it is undefined
//account_Id =2 // not allowed
accountemail ="atharvkumar1345@gmail.com"
accountpassword="123446435"
accountcity="lucknow"
console.log(account_Id);

/*
perfer not to use var
because of issues of scope and functional scope
*/
console.table([account_Id,accountemail,accountpassword, accountcity,accountstate])