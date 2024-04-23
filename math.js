// function add(a,b){
//     return a+b;
// }

// function subs(a,b){
//     return a-b;
// }
//  // here only things will be shared that you have exported that why we are sharing the add function
// // module.exports=add;
// // module.exports=subs;  //if we will export like this only subs will be shared as subs will over-write add hence we can us js object method


// module.exports={// module.exports can be used only once and exports can be used multiple time
//     add,
//     subs
// }

exports.add=(a,b)=>a+b;// these two are an anonymous function 
exports.subs=(a,b)=>a-b;