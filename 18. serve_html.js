/*
// Instead of this run server.js in the myFirstNodeApp folder.
In recent notes we created a node server and we used that server to respond to requests from client by sending a text file.
Here instead of responding with a text file, we will respond with a text file.
All of the code would be inside myFirstNodeApp folder.
server.js file will have code same as #17 which creates the server and req res is done.
There is another folder called public, which is just a naming convention seen on backend and is used to hold all of the static
files which client can see without any issues. Static files include html,css and client side js.
These are the files that are delivered to the client in exactly the same manner as they are stored on our server. Reason these are called public is
because public or client can view these files.

*/


let fs = require('fs')
let http = require('http')

//createServer method creates event emitter

let server = http.createServer()
server.on('request',(req,res)=>{
    //view request object property, 'url'
    console.log('client requested : '+req.url)

    //use response object to set header
    res.writeHead(200,{'Content-Type' : 'text/html'}) // Changing the type of file received in response.

    //now we want to read from html file but write to response
    let myReadStream = fs.createReadStream('./myFirstNodeApp/public/index.html','utf-8')

    myReadStream.on('data',(chunk)=>{
        res.write(chunk);
    })

    myReadStream.on('end',()=>{
        res.end()
        console.log("read stream finished writing to response object.")
    })
})

server.listen(8080, '127.0.0.1')
console.log("Wubba Lubba Dub Dub...This awesome server works on localhost port.")