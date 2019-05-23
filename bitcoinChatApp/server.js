const express = require('express')

// REQUIRE MODULE TO DEAL WITH THE BODY OF POST REQUEST
var bodyParser = require('body-parser') // Allows us to read body of post request.

// create express app
const app = express()

app.set('view engine','ejs')

//USE BODYPARSER MIDDLEWARE FOR JSON REQUESTS
app.use(bodyParser.json()) /* Allows us to use middleware module on any route. Middleware is in between request and response.
Body parser can be used to parse different types of data. In our case contentType is JSON so we use JSON.
*/
//-----------------------------------------------------------------------------


// ----------------------USING EJS FOR DYNAMIC UPDATION-----------------------------------------------------------------------------------

/*app.get(['/','/:id','/index.htm'], function(req,res) {
    console.log(req.params.id) // request object's parameters and id property this will read the id of :id and prints whatever is after /
    res.render('index.ejs',{userName:req.params.id, fullName:req.query})
    console.log(JSON.stringify(req.query)) // Gives us a JSON object in the JSON format
})*/
// -----------------------------------------------------------------------------------------------------------------------------------------
app.get(['/','/index.html'],function (req,res){
    res.sendFile(__dirname+'/public/index.html')
})

app.get('/css/main.css', function(req,res) {
    res.sendFile(__dirname+'/public/css/main.css')
})

app.get('/js/main.js', function(req,res){
    res.sendFile(__dirname+'/public/js/main.js')
})

// POST
app.post(['/','/index.htm'],function (req,res){
    console.log(req.body)
    // res.send("")
    // Acts like a DB request.
    let resData;
    if(req.body.userName=="anmolt"){
        resData = {
            userName : "anmolt",
            fName:"Anmol",
            lName:"Tomer"
        }
    }else{
        resData == {}
    }
    res.send(JSON.stringify(resData))
})
/*
In above POST req code we are reacting to a post on root URL that is what we did in main.js file in $ajax code.
Then we run the property of request object and we console log it. So we can see what was the data that was passed in the box.
And we respond back to the browser with an empty string. As Chrome dev tools won't show all the request/response headers unless it receives
a response to the request. Once it gets a response we can see what the header is in Chrome Dev Tools.
Send method is doing the same thing as creating a writeStream and send is simplifying and eliminating the hassle of creation of writeStream.
*/


app.listen(8080,'127.0.0.1',() =>{
    console.log('This awesome server works on localhost port 8080.Wubba Lubba Dub Dub.')
})