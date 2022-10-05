//Challenge 
const fs = require('fs');

// 1. Create a folder named it thapa
//2. Create a file in it named bio.txt and data into it
//3.  Add more data into it at the end
//4. Read the data without getting the buffer data at first.
//5. Rename the file name to mybio.txt
//6. Now delete both file and folder

// fs.mkdir('thapa',(err,data)=>{
//    console.log('Folder created');
// });

// fs.writeFile('./thapa/bio.txt','Hello this is challenge 2',(err,data)=>{
//     console.log('Text file created')
// });

// fs.appendFile('./thapa/bio.txt','\n Adding more data using append',(err,data)=>{
//     console.log('Append done');
// });

// console.log(fs.readFile('bio.txt','utf-8',(err,data)=>{
//     console.log(data);
// }))

// fs.rename('./thapa/bio.txt','./thapa/mybio.txt',(err,data)=>{
//     console.log(data);
// })

// fs.unlink('mybio.txt',(err,data)=>{
//     console.log(data);
// })