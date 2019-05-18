/*
Here we use Google Chrome developer console to look under the hood of the request we performed on Node server.
Press F12 or Ctrl+Shift+I to get the developer console and go to network tab. Network tab gives info about REQ and RES made.
Before doing the request to node server we need to run the code to begin server listening.

*/

let fs = require('fs')
let http = require('http')

//createServer method creates event emitter

let server = http.createServer()
server.on('request',(req,res)=>{
    //view request object property, 'url'
    console.log('client requested : '+req.url)

    //use response object to set header
    res.writeHead(200,{'Content-Type' : 'text/plain'})

    //now we want to read from text file but write to response
    let myReadStream = fs.createReadStream('./11. readme.txt','utf-8')

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

/*
After running the server, the server runs on localhost port 8080, go to localhost:8080 in chrome with dev console on and in network tab,
there you can see the request status registered in network tab. Ignore favicon request that's just made by node.
Click on localhost request in the developer console and under headers we would see the header details as we disucussed in #16 with GET, POST etc.
written there. Both request and response has a header and body section, here in Chrome Dev Console we just have header section of req and res.

Within the header there were 2 sections title of the header and header fields. We see request method GET and status code as 200 OK in general
section. Now we move to header fields in request headers we see a very important header field to include in request object is host.
As request has to know where it is going. localhost:8080 in our case. Moving on to response header we see header field which is very important is
Content-Type, this we hard coded in the line     res.writeHead(200,{'Content-Type' : 'text/plain'}).

Another header field within the response object is Transfer-Encoding : chunked, it relates to one of the main benefits of NodeJS about the
control we have on streaming and how effective it is to get data back and forth. In our code we made readStream and then piped that readStream
upon the data event to the response object, which itself is an event emitter and a writeable stream. We pass these chunks one at a time.
This is very efficient way to communicate data and makes node effective.

https://developers.google.com/web/tools/chrome-devtools/network/reference#timing-explanation
*/