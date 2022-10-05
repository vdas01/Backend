//the http.createServer() method indicates request and response parameters which is supplied by Node.js

// the request object can be used to get information about the current HTTP request
// e.g URL,request Headers, and Data

//The response object can be used to send a response for a current HTTP request

//If the response from the HTTP server is supposed to be displayed as HTML
//you should include an HTTP header with the correct content type:

const htp = require('http');
const fs = require('fs');
const server = htp.createServer((request,response)=>{
    console.log(request);
    if(request.url == "/")
     response.end('Hello from the home sides Vishal');
    else if (request.url == "/about")
    response.end('Hello from the about us sides');
    else if (request.url == "/contact")
    response.end('Hello from the Contact us sides');
    else if (request.url == "/userapi"){
       fs.readFile('D:\Backend\Node\Create API\userApi.json','utf-8',(err,data)=>{
              console.log(data);
       })

       response.end('Hello from the userAPI sides');
    }
    else{
        response.writeHead(404,{"Content-type": "text/html"});
    response.write(`<h1>404 error page. Page doesn't exist</h1>`)    
    response.end();
    }
});

server.listen(8000,'127.0.0.1',()=>{
    console.log('Listening to port no. 8000')
});  //port number,local host



