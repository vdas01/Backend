const fs = require ('fs');


// fs.writeFile('read.txt','I am awesome',
// (error)=>{
//      console.log('file is created');
//      console.log(error);
// });

// fs.appendFile('read.txt','Hello',
// (err)=>{
//     console.log('append done');
// })


fs.readFile('read.txt','utf-8',(err, data)=>{

     console.log(data);
});


//synchronous
// const data = fs.readFileSync('read.txt','utf-8');
// console.log(data);
// console.log('After data');

//asynchronous
// fs.readFile('read.txt','utf-8',(err,data)=>{
//      console.log(data);
// });
// console.log('After the data');

// fs.mkdir('curd challenge 2',()=>{
//     console.log('folder created');
// });



//we pass them a function as an argument -- a callback
//that gets called when task completes
//the callback has an argument that tells you wether the operation completed successfully
//Now we need to say what to do when js.writeFile has completed(even if it's nothing) and start checking for errors


