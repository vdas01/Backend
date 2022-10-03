const express = require('express')
const app = express()
const path = require('path');

//always give absoulte path
const staticPath = path.join(__dirname,'../public');
// console.log(staticPath)


//built-in middleware
app.use(express.static(staticPath))

app.get('/', (req, res) => {
    res.send('Hello World!')
})






app.listen(3000, () => console.log(`Example app listening on port 3000!`))