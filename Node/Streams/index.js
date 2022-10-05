const fs = require('fs');
const http = require('http');

const server = http.createServer();
server.on('request',(req,resp)=>{
    // fs.readFile('input.txt',(err,data)=>{
    //     if(err) return console.log(err);
    //     resp.end(data.toString());
    // });

    //2nd way

    // const rstream = fs.createReadStream('input.txt');
    // rstream.on('data',(chunkdata)=>{
    //         resp.write(chunkdata);
    // });
    // rstream.on('end',()=>{
    //     resp.end();
    // })

    // rstream.on('error',(err)=>{
    //     console.log(err);
    //     resp.end('file no found');
    // })


    //3rd way
    const rstream = fs.createReadStream('input.txt');
    rstream.pipe(resp);
});


server.listen(8000, '127.0.0.1');