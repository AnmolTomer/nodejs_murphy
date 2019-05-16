let fs = require('fs')

let myReadStream = fs.createReadStream('./11. readme.txt','utf-8')
let myWriteStream = fs.createWriteStream('./14. writeMe.txt','utf-8')

// myReadStream.on('data',(chunk)=>{
//     myWriteStream.write(chunk)
// })

/**
In last video we learnt about reading and writing files as one big lump using fs.readFile and fs.writeFile, so basically there are not the
the methods which wait for the entire data being read to be on memory and then and only then then allowing it to be written somewhere else or
to some other file.The other way was using streaming as shown above. Here instead of reading the entire data source, here readMe.txt
what we do is we read the smaller chunks into memory buffer, what we see is that myReadStream is the variable which when called upon, calls
fs.createReadStream then stream inhering from event emitters. Streams are able to emit events. What this readStream does is that it emits the data
events once it has 1 chunk in its memory buffer. So this data event here readStream says heyy  I have received the chunk and what should I do
with this, I don't need entire text file written to my memory in one go, I have one chunk in the memory, in last video we just logged
the chunk onto the console.

What we will do here is create a writeStream and it will write the chunk to our destination file instead of logging it and file will be called
writeMe.txt.

One last thing that I would like to add is kind of a syntatic sugar but we can do in Node which is a shorthand is actually a substitute to

myReadStream.on('data',(chunk)=>{

    myWriteStream.write(chunk)

})
and can be written using command or method called pipe when we have to pass the chunk to writeStream we use the following which is basically
following :
*/
myReadStream.pipe(myWriteStream); // Try deleting 14. *.txt to see if this works. Pipes the chunks making exactly the same thing.