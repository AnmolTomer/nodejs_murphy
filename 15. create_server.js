/*
In this lecture we will finally create our Web Server on node. We will create a server that can listen to request from in the browser and respond
back to the browser.
In this video, upon getting the request from the browser, we will read from the text file, but instead of writing back to a text file, we will
write back to the client (browser).

First things first, we would require http core module.
*/

let fs = require('fs')
let http = require('http') // Other major core module used very heavily in NodeJS.
/*
Main method that we use on http core module would be http.createServer.
This createServer method on http module actually creates an event emitter. So similar to read or writeStream, the event emitters can emit events
such as data event below and they respond to those events with what we call event handlers or callback functions, so server object can do
exactly the same.

A key event that we will be listening for is the request event. So when the server object emits the request event, then we will action the
callback function/event handler and this event handler or function will have 2 parameters being passed to it, request and
response objects and these are very interesting objects as request and response objects are event emitters and have lots of great
properties and methods which we will be using.
To look at the request object, we look at request.url property and this property tells us the URL requested by browser.
In this lecture we won't adjust code based on what URL the user passes. We will cover exactly that when we come to routing.
Here irrespective of what URL is passed by client we will react in same way, we just want to show when logged so that you can see the req object
in action.

Next thing is setting the header done using respone.header, use response object to set response header.

*/

let server = http.createServer()
server.on('request', (req, res) => {
    // view request object property, url
    console.log('client requested : ' + req.url)
    /*
    use response object to set response header, html has head and body, header tells info to browser regarding metadata as in what to expect,
    body contains the actual content of the webpage.
    */
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    })
    /*  first parameter is status code, second parameter we use an object, which we can use to communicate with response
headers, the response headers which we use to communicate with browser is content type, text/plain in our case.
We are writing the header of the response by giving it 200 status okay and then telling it that content is text/plain.
*/
    // Now we want to read from 11. readme.txt file, but write to RESPONSE and not to writeME.txt
    let myReadStream = fs.createReadStream('./11. readme.txt', 'utf-8')
    // let myWriteStream = fs.createWriteStream('./15. writeMe.txt','utf-8') // Not needed as explained above

    /* Previously we read from 11. readme.txt and writing to some writeMe.txt, now we still want to read the text from our text file but
    we do not want to write to writeMe.txt but to RESPONSE.

    As mentioned above req and res are event emitters objects, and they actually taken a stage further, these are request and response objects.
    The req object is a readable stream and res is a writeable stream, so we do not need to create a new writeStream as we already have our writeable
    stream the res object. So we still read stuff in myReadStream and when the memory buffer was filled with its first chunk, it would emit a data
    event and this data event has a callback function/event handler which passes through or passes ahead the chunk of data which was read as its
    argument, so in event below we replace myWriteStream with response (res). As response is writeable stream.

    */
    myReadStream.on('data', (chunk) => {
        res.write(chunk) // writing chunk of data to writeable stream res when data event is emitted.
    })


    myReadStream.on('end', () => { // passing in a callback function where we say
        res.end() // tells the res object to finish its writeable stream or write is complete and ends our transaction.
        // Message to validate that indeed read stream finished writing to response object.
        console.log('read stream finished writing to response object.')
    })
})
/**
When writing to a writeable stream we need to tell it when we are finished, so readable stream emits an event when it has finished reading,
so we will use that and we want to say that when readstream has finished reading on end then after this point we would not tell the
wrietable stream or response to finish writing or that writing is over, there is nothing left to read hence nothing more to write.
 */

server.listen(8080, '127.0.0.1')
console.log("Wubba Lubba Dub Dub...This awesome server works on localhost port.") // To know server is now listening, we can see logged on the console.

/*
Now we use the server object we created and we need to tell it to listen to requests, a simple method server.listen() which has first
parameter as the port we want it to listen on, second parameter is the URL you want it to listen on, generally people pass in
localhost i.e. 127.0.0.1, localhost is just a web server on your local machine.
*/