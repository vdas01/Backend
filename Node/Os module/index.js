const os = require('os');
console.log(os.arch());

const freeMemory = os.freemem();
console.log(freeMemory/1024/1024/1024);     //in gb otherwise default in bytes

console.log(os.totalmem()/1024/1024/1024);

console.log(os.hostname());
console.log(os.platform());
console.log(os.tmpdir());
console.log(os.type())

//1 byte = 8 bit
//1 kb = 1024 bytes
//1 mb =1024 kb
//1 gb =1024 mb
//1 tb = 1024 gb
//1 pb = 1024 tb