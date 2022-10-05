const express = require('express')
const app = express()
const path = require('path');

//always give absoulte path
const staticPath = path.join(__dirname,'../public');

//to set the view engine
app.set("view engine",'hbs');
//built-in middleware
app.use(express.static(staticPath))



//template engine route ,
app.get('/',(req,res)=>{
    res.render('index',{
        name:'Vishal das',        //adding dynamic data
    });
});

app.get('/about',(req,res)=>{
    res.render('contact');
})



app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.listen(3000, () => console.log(` Listening on port 3000!`))