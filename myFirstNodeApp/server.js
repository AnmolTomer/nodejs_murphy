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
    let myReadStream = fs.createReadStream('./public/index.html','utf-8')

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