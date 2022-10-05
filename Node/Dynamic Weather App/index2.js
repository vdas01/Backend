require('dotenv').config();
const http = require("http");
const fs = require("fs");
var requests = require("requests");
const express = require('express');
const app = express();


const homeFile = fs.readFileSync("home.html", "utf-8");


const replaceVal = (tempVal, orgVal) => {
  let temperature = tempVal.replace("{%tempval%}", orgVal.main.temp);
  temperature = temperature.replace("{%tempmin%}", orgVal.main.temp_min);
  temperature = temperature.replace("{%tempmax%}", orgVal.main.temp_max);
  temperature = temperature.replace("{%location%}", orgVal.name);
  temperature = temperature.replace("{%country%}", orgVal.sys.country);
  temperature = temperature.replace("{%tempstatus%}", orgVal.weather[0].main);

  return temperature;
};

const server = http.createServer((req, res) => {
  if (req.url == "/about") {
    requests(
      `http://api.openweathermap.org/data/2.5/weather?q=pune&units=metric&appid=c33820c4e1eccf6ddb4f7c2f496b60e8`
    )
      .on("data", (chunk) => {
        const objdata = JSON.parse(chunk);
        const arrData = [objdata];
        // console.log(arrData[0].main.temp);
        const realTimeData = arrData
          .map((val) => replaceVal(homeFile, val))
          .join("");
        res.write(realTimeData);
        // console.log(realTimeData);
      })
      .on("end", (err) => {
        if (err) return console.log("connection closed due to errors", err);
        res.end();
      });
  } else {
    res.end("File not found");
  }
});

app.get('/',(req,res)=>{
  requests(
    `http://api.openweathermap.org/data/2.5/weather?q=pune&units=metric&appid=c33820c4e1eccf6ddb4f7c2f496b60e8`
  )
    .on("data", (chunk) => {
      const objdata = JSON.parse(chunk);
      const arrData = [objdata];
      // console.log(arrData[0].main.temp);
      const realTimeData = arrData
        .map((val) =>{ 

          return replaceVal(homeFile, val)
        }).join("");
      res.write(realTimeData);
      // console.log(realTimeData);
    })
    .on("end", (err) => {
      if (err) return console.log("connection closed due to errors", err);
      res.end();
    });
})

app.get('/custom',(req,res)=>{
  requests(
    `http://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&units=metric&appid=c33820c4e1eccf6ddb4f7c2f496b60e8`
  )
    .on("data", (chunk) => {
      const objdata = JSON.parse(chunk);
      const arrData = [objdata];
      // console.log(arrData[0].main.temp);
      const realTimeData = arrData
        .map((val) =>{ 

          return replaceVal(homeFile, val)
        }).join("");
      res.write(realTimeData);
      // console.log(realTimeData);
    })
    .on("end", (err) => {
      if (err) return console.log("connection closed due to errors", err);
      res.end();
    });
})



app.listen(8000,()=>{
  console.log('Server is listening at 8000');
})

// server.listen(8000, "127.0.0.1",()=>{
//     console.log('Server is listening at 8000');
// });