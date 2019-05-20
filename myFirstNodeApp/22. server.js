const express = require('express')

const app = express()
//-----------------------------------------------------------------------------

app.get(['/','/index.htm'], function(req,res) {
    res.sendFile(__dirname+'/public/19. index.htm')
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
    console.log('Wubba Lubba Dub Dub...This awesome server works on localhost port 8080.')
})