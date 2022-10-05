//JSON stans for javascript object notation
//JSON is a lightweight format for storing and transporting data.
// JSON is often used when data is send from a server to web page

//object
const bioData = {
    name : "vishal",
    age : 26,
    channel : "vishal das",
};
console.log(bioData.channel);

//object -->> json :-- JSON.stringify(object);
//json -->> object :- JSON.parse(json);

const jsonData = JSON.stringify(bioData);
// console.log(jsonData);
// console.log(jsonData.channel);

const fs = require('fs');
// fs.writeFile('json1.json',jsonData,(err)=>{
//     console.log('done');
// });

fs.readFile('json1.json','utf-8',(err,data)=>{
         console.log(data);
         console.log(JSON.parse(data));
})