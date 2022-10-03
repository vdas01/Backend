const express = require('express')
const app = express()
const path = require('path');
const hbs = require('hbs');

//when views folder name changed
const templatePath = path.join(__dirname, './templates/views');
const partialsPath = path.join(__dirname,'./templates/partials');

app.set('views',templatePath);
hbs.registerPartials(partialsPath);

//template engine route ,
app.get('/',(req,res)=>{
    res.render('index',{
        name:'Vishal das',        //adding dynamic data
    });
});

app.get('/about',(req,res)=>{
    res.render('contact');
})

app.get('*',(req,res)=>{
    res.render('404',{
        errorcomment: "Ops page couldn't be found"
    })
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.listen(3000, () => console.log(` Listening on port 3000!`))