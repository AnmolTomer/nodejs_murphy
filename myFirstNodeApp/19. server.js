let fs = require('fs')
let http = require('http')

//createServer method creates event emitter

let server = http.createServer()
server.on('request',(req,res)=>{

    //---------------------- Separating as we would surround switch statement around these 3 lines of code-------------------
    let url = req.url
    let myReadStream
    //view request object property, 'url'
    console.log('client requested : '+req.url)

    switch(url)
    {
    case "/":
    case "/19. index.htm":
        res.writeHead(200,{'Content-Type' : 'text/html'})
        myReadStream = fs.createReadStream('./public/19. index.htm','utf-8')
        readAndWriteFile()
        break;

    case "/contact.htm":
            res.writeHead(200,{'Content-Type' : 'text/html'})
            myReadStream = fs.createReadStream('./public/contact.htm','utf-8')
            readAndWriteFile()
            break;
    case "/css/main.css":
        res.writeHead(200,{'Content-Type' : 'text/css'})
        myReadStream = fs.createReadStream('./public/css/main.css','utf-8')
        readAndWriteFile()
        break;
    case "/js/main.js":
        res.writeHead(200,{'Content-Type' : 'application/javascript'})
        myReadStream = fs.createReadStream('./public/js/main.js','utf-8')
        readAndWriteFile()
        break;
    default:
        res.writeHead(200,{'Content-Type' : 'text/html'})
        myReadStream = fs.createReadStream('./public/19. index.htm','utf-8')
        readAndWriteFile()
        break;
    }

    // ------------------------------------------------------------------------------------------------------------------------
/*
We would be running the code for index.html regardless of the URL requested, but also we need to tweak it based on URL coming in.
1. Create a url to capture the request from user. The url requested from user will drive the response given to client.
2. Below url declare myReadStream to change its scope.
3. Surround res.writeHead(...) and let myReadStream = fs.createReadStream(...) code with a switch statement and use different cases.
4. If client requests a file which does not exist, a 404 request which is called in that case we would not create a readStream, on running
    the code it will throw the error, what we would do is surround the code of myReadStream in a function and call the function from within the case.
5. This way we would be sure that since the case has matched then we can move on to creating a readStream and if case isn't found then no
readStream would be made.
6. Similarly write case for contact.html
7. Write case for stylesheet.
8. Write case for js.
*/

function readAndWriteFile() {
    myReadStream.on('data', (chunk) => {
        res.write(chunk);
    })

    myReadStream.on('end', () => {
        res.end()
        console.log("read stream finished writing to response object.")
    })
}
})


server.listen(8080, '127.0.0.1')
console.log("Wubba Lubba Dub Dub...This awesome server works on localhost port 8080.")