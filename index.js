const http=require("http");//built in package in Node js to create servers
const fs=require('fs');//built in package in Node js to manage files 
const url=require('url');// built in pacakge to manage  url
// const server=http.createServer((req,res)=>{
//     console.log('new req received');
//     console.log(req.headers);// this will give more data from the where request is received 
//     console.log(req);
//     res.end('Hello from server ')
// });
//Above is http request Handle call back function it takes request as->req and return response as res->{
//  req->all the meta data about the client and res->return the requested response from the server 
// }

// server.listen(8000,()=>{
//     console.log("Server Started");
// });// to listen the incoming the request (one port can only listen to one server)
// first we need to start by running file (node index.js)then we can see on port localhost:8000 and get the response from server 
// & if we change anything in our System we need to restart the server to reflect the change on the server

const server=http.createServer((req,res)=>{
    const log=`${Date.now()}:${req.url}: New Request received\n`;
    const myurl=url.parse(req.url,true);
    console.log(myurl);
    fs.appendFile('log.txt',log,(err,data)=>{
        switch(myurl.pathname){
            case'/':
            res.end("Home Page")
            break;
            case"/about":
            const username=myurl.query.myname;
            res.end(`Hello ${username}   this is a server hosted by Nishant Pritam`)
            break;
            default:
                res.end("Hey server is running but you requested for someThing Wrong(404)Not Found?")
        }
        console.log("Hey Server is Running Now")
    });
});// here we made a log to  store a timestamp at which any user hai requested on the server or logged into server && req.url will store the url of the client on the server
server.listen(8000,()=>{
    console.log("Server Started");
    
});

//npm js.com
