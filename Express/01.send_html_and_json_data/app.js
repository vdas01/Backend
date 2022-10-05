  const express = require('express')
 const app = express()
 const port = 3000
 const hbs = require('hbs');
 const requests = require('requests');
 
 app.get('/', (req, res) => {
    res.write('<h1>Hello</h1>');
    res.write('<h2>Kya ho rhaa hai</h2>');
    res.end();
})

// app.get('/about',(req,res)=>{
//     res.send({
//         id:'1',
//         nam: 'Vishal'
//     });
//     res.send([{
//         id:'1',
//         nam: 'Vishal'
//     }],
//     {
//         id:'2',
//         nam: 'Sid'
//     });          //array of objects
//     res.json({
//         id:'5',
//         ma:'vo'
//     })
// })

app.get('/about',(req,res)=>{
    requests(
              `http://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&units=metric&appid=c33820c4e1eccf6ddb4f7c2f496b60e8`
            )
              .on("data", (chunk) => {
                console.log(req.query);
                const objdata = JSON.parse(chunk);
              
                const arrData = [objdata];
                // console.log(arrData);
                res.send(arrData)
                res.write(arrData[0].name);
              })
              .on("end", (err) => {
                if (err) return console.log("connection closed due to errors", err);
                res.end();
              }); 
})

 app.listen(port, () => console.log(`Example app listening on port ${port}!`)) ;


 //when we use write() then we have to at last use end() to end response
 //when we send object or array it automatically converts into json in res.send()
 //res.json() converts non-objects such as null and undefined also to json