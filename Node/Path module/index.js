const path = require('path');

//give exact path not relative
console.log(path.dirname('D:/Backend/Node/Path module/index.js'));
console.log(path.extname('D:/Backend/Node/Path module/index.js'));
console.log(path.basename('D:/Backend/Node/Path module/index.js'));

console.log(path.parse('D:/Backend/Node/Path module/index.js'));

const myPath = path.parse('D:/Backend/Node/Path module/index.js');
console.log(myPath.name);