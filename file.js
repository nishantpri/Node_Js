//++++++++++++++++++File Handling++++++++++++++++++
 const fs=require("fs")//built in fs module  to interact with files

//Sync:-As the name suggests synchronous means to be in a sequence, i.e. every statement of the code gets executed one by one. So, basically a statement has to wait for the earlier statement to get executed.
// fs.writeFileSync('./test.txt','Hey Nishant');// we can create  a file through fs module // this overwrite exisitng data in file if we will change the content of the file

//Async->Asynchronous code allows the program to be executed immediately whereas the synchronous code will block further execution of the remaining code until it finishes the current one. This may not look like a big problem but when you see it in a bigger picture you realize that it may lead to delaying the User Interface.
// fs.writeFile("./test1.txt","Hey Prachi",(err)=>{});//it will catch error if any arror occur

//Async:->is non blocking which makes it faster and idependent of thread

// const res=fs.readFileSync("./contact.txt","utf-8");// if we will remove Sync it will give error as it can't be stored in any variable //Synchronous return and ASynchronous doesn't 
// console.log(res);

// fs.readFile("./contact.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log("Error",err)
//     }else{
//         console.log(result)
//     }
// });

// fs.appendFileSync("./test.txt",new Date().getDate().toLocaleString());// this will not over-write in file but it will add new content in file 


// // fs.copyFileSync("./test.txt","./copy.txt"); // it will copy and create a new file

// // fs.unlinkSync("./copy.txt");// unlink is used to delete the file 
//  console.log(fs.statSync("./test.txt"));//statSync is used to fetch the statics of the file 
// //  fs.mkdirSync("my-docs");
//  fs.mkdirSync("my-docss/a/b",{recursive:true});

const os=require("os");
console.log(os.cpus().length);