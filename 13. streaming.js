/*
https://imgur.com/LqHlRn1
Here we talk about streaming, which is an efficient method to get data from point A to B.
In last notes #12 we had 11. readme.txt and we wrote all data of this to 11. written.txt and 12. writeMe.txt synchronously and asynchronously.
For this we used file System i.e. fs module and method called readFile and readFileAsync. What happens when we use these methods is
that readFile method is reading from readme.txt into memory, now it waits until memory has all of readme.txt
and then and only then writeFile method gets kicked in and writes to writeMe.txt.

You fill up the memory, some more, keep filling it until all of the readMe.txt has been made available on the memory and then writing
to writeMe.txt. That is what we did in #12.

Streaming works a bit differently. We still have readMe.txt and we still are writing to writeMe.txt and our text file is still passing through the
memory.Still we use the fs module but the method would be fs.createReadStream, what fs.createReadStream does is that it will break up the readMe.txt
into small chunks and read it in small amounts, imagine small chunks or cubes of data broken from a big cube attached with thread.
We have something called buffer in memory and it is a small piece in the memory. When the small cubes have filled up buffer it then goes on to pass
it on to writeMe.txt, these are called chunks, and chunks are passed ahead when the buffer is full.
readMe.txt can have any number of chunks in there, say there are 4 chunks in readMe.txt so we feed the string or chunk into the buffer,
and once the buffer has it, it passes it ahead immediately while it is still in the process of reading other 3 chunks, from readMe.txt.

This is an efficient way of read and write by breaking the data into chunks.
Because if this was a client, say a browser, which we will cover in future notes, so if the browser receives a chunk, while the other
chunks are still being transmitted into the memory buffer then the client gets a preview of the file and starts working on the file a lot
quicker as we break the file in these small chunks. This is much more efficient way of getting data from point A to B.
*/
let fs = require('fs')

let myReadStream = fs.createReadStream('./11. readme.txt','utf-8')

myReadStream.on('data',(chunk)=>{ // Event and call back
    console.log('New Chunk : ')
    console.log(chunk)

})
/*
this creates a variable myReadStream, it calls the createReadStream method on
fs core module and populate it into myReadStream variable. We read the same textfile as #11 and #12.
Now we take variable myReadStream and attach a data event to it. Same as myReadStream when we ran the createReadStream method, we created
something which is called stream. A stream is actually an event emitter, because it inherits from the event emitter class.

An event emitter emits event, it is very similar to client side JS where we could have myButton reference, to get a reference to button.
We can do myButton.onClick(), where our button is an event emitter and click is event on that button event emitter.
In this case below the event is myReadStream the event we are attaching to myReadStream is data, what data event is that
we are saying everytime a chunk of data is read from txt file by myReadStream the stream will emit the data event. We need to pass second
parameter, this because we need to tell readStream what we want it to do when it emits this data event, so second argument is a function.
We create this function using ES6 arrow function.The parameter that we pass in to the function is chunk, so this chunk
parameter here is the everytime this data event is emitted it is going to run the function and it will pass the chunk of data that it read,
as the argument into the call back function. Here what we do inside the function is just log the chunk. We will log 'New Chunk' just
so we can see new chunks as they are being read.
console.log('New Chunk') so that we can see new chunk as those are being read and differentiate.
Code will createReadStream look at corresponding txt file then every single time the stream or event emitter emits the data event
it runs the function and passes this chunk of data and we read this with console.log.
This is the way we can read in streams.
*/