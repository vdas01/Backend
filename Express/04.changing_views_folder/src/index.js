const express = require('express')
const app = express()
const path = require('path');

//when views folder name changed
const templatePath = path.join(__dirname, './templates');
app.set('view engine','hbs');
app.set('views',templatePath);

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