const express = require('express')

// create express app
const app = express()
app.set('view engine','ejs')
//-----------------------------------------------------------------------------

app.get(['/','/index.htm'], function(req,res) {
    res.render('index.ejs',{userName:"Anmol Tomer"})
})

app.get('/contact.htm', function(req,res) {
    res.sendFile(__dirname+'/public/contact.htm')
})

app.get('/css/main.css', function(req,res) {
    res.sendFile(__dirname+'/public/css/main.css')
})

app.get('/js/main.js', function(req,res){
    res.sendFile(__dirname+'/public/js/main.js')
})

app.listen(8080,'127.0.0.1',() =>{
    console.log('This awesome server works on localhost port 8080.Wubba Lubba Dub Dub.')
})