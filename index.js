const express = require('express')
const app = express()
require('dotenv').config()



app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/bb', (req,res,next)=>{


    res.send('awevaebabr')
})

app.listen( `${process.env.PORT}`, ()=>{
console.log(`server started at ${process.env.PORT}`)
})