// const math=require('./math')
const {add,subs}=require('./math')// we can also import like this and as above
// console.log("Hello Nishant")
//it doesn't consist of dom element or window element only core js is added in node js
//npm-node package manager
//npm --init- node initialze
// in the Script we can also create some new command and node js will run that specific tast 
// for Example->
// "start":"node hello.js"  (npm run start)  this will automatically run hello.js file in my pacakage

//+++++++++++++++++++++++++++++++++Modules in Nodejs++++++++++++++++++++++++++++++++++++++
//if we devide our program in small small parts thats called modular programming 
// here we can't access to add function because that is in the other file  and we need to import the function in other file 

// In Node.js Application, a Module can be considered as a block of code that provide a simple or complex functionality that can
//  communicate with external application. Modules can be organized in a single file or a collection of multiple files/folders.
//   Almost all programmers prefer modules because of their reusability throughout the application and ability to reduce the complexity 
//   of code into smaller pieces. fo

console.log(add(2,5));
console.log(subs(9,4));