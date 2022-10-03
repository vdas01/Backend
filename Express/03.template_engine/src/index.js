const express = require('express')
const app = express()
const path = require('path');

//always give absoulte path
const staticPath = path.join(__dirname,'../public');

//to set the view engine
app.set("view engine",'hbs');


//when views folder name changed
// const templatePath = path.join(__dirname, './templates');
// app.set('views',templatePath);

//template engine route ,
app.get('/',(req,res)=>{
    res.render('index',{
        name:'Vishal das',        //adding dynamic data
    });
});

app.get('/about',(req,res)=>{
    res.render('contact');
})

//built-in middleware
// app.use(express.static(staticPath))

app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.listen(3000, () => console.log(` Listening on port 3000!`))