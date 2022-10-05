const fs = require("fs");

//creating a new file
fs.writeFileSync('read.txt',"Welcome to my home");

//overwrites in existing file
fs.writeFileSync('read.txt',"Welcome to my home, Vishal");

//append 
fs.appendFileSync('read.txt','How are you?');

//read
//Node.js includes an additional data type called Buffer
//(not available in browser's javascript)
//Buffer is mainly used to store binary data
//while reading from a file or receiving packets from the network
const buf_data = fs.readFileSync('read.txt');
console.log(buf_data);
console.log('Like this => ' + buf_data);
console.log(buf_data.toString());
console.log(fs.readFileSync('read.txt','utf-8'));

//rename
// fs.renameSync('read.txt','readwrite.txt');

//to create folder
// fs.mkdirSync("Curd challenge 1");
// fs.writeFileSync('Curd challenge 1/bio.txt','My name is vishal');

//to delete file
// fs.unlinkSync('Curd challenge 1/bio.txt');
//to delete folder
// fs.rmdirSync('Curd challenge 1');




