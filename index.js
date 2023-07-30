const express = require('express')
const bodyParser = require('body-parser')


const app = express()

app.use(bodyParser.urlencoded({extended: true}))

app.get('/data', (req, res) => {
    res.send('data is and solve nodemon problem')
  })
  

app.listen(4000, ()=>{
    console.log('server listening on port http://localhost:4000')
})