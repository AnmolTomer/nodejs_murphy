/*
var contents = fs.readFileSync('./11. readme.txt','utf-8')
In last js file we saw reading and writing to files synchronously which is a blocking way of writing code in NodeJS, we prefer the async
way of performing the same thing i.e. doing it non blocking way. Node has single JS thread, still it works effectively because
it picks events from event queue and immediately passes these off to C++ thread pool and when it does its work then immediately single JS thread
event loop is freed to take the next request from queue. This is how things are done async way.


In sync way when the event loop takes the file and starts reading it, it processes the fs.readFileSync, it gets passed to thread pool and asks
it to read the entire file to C++ thread, but our thread is sitting idle for this entire time, for approx. 4 Million CPU cycles as that is the
amount of cycles needed for reading/writing. So for 4M CPU cycles when C++ thread pool takes time to read the file the single thread JS file sits
idle. Same thing happens for fs.writeFileSync('./11. written.txt',contents,'utf-8')

For Async approach we pass the task to C++ module and we get immediately free to pick up the next event from event queue, in async approach
when thread pool which is C++ is done with read or write, then they pass the callback fuction to event queue and at the next tick of event loop
that callback function is picked up and executed. This way code is free and thread starvation is avoided.
If file was big enough then while reading and writing the file it would take lot of time and thread would be idle or starved in some sense.

console.log(contents) isn't a crucial part. If it was then our JS code as it was running through that console.log would not be run up until
the readFileSync happened, processed and returned. Then and only then console.log would have been read and processed. With async approach the
request to read and writeFileSync gets passed to thread pool and the single thread would be free to execute and it will execute console.log
line straightaway.

Converting Sync Blocking Code of last file to Async Non Blocking Code.
*/

var fs = require('fs')

fs.readFile('./11. readme.txt','utf-8',(err,data)=>{
    fs.writeFile('./12. writeMe.txt',data,(err)=>{ // Putting the writeFile into the callback function, after reading file the callback will
        console.log('File written successfully.') // actually write the file as well. The async way is read the data and made it available to
    })//callback function that will be run, once read file is complete, the data is used again in fs.writeFile and after write there is console log.

}) // Async way of reading files.

/* Now for readFile  we also need callBack function. This call back function gets executed once the C++ threadpool has finished its job of reading
the file, then the call back function will be added to the event queue and at the next tick of event loop, this call back function will act.

We will add this callback function as third parameter,in a callback function method. This function has 2 parameters one is the error err object
and other is data object, err used to handle errors in the event of errors which is a good idea as otherwise our node program can stop, in
production we might try different approach to do error handling. data object contains the data that is read from the file and with data argument
passed to the function, we do the same but without the data object and name writeFile for writing he file.

 We will take the fs.writeFile and we will put it into the callback function of the fs.readFile, once the file is read,the callback
function will actually write the file.

Previously if there would have been a code below then it might have lead to thread starvation due to readFile and writeFile and starve the
single JS thread but this isn't happening here, and in this case it will just run the fs.readFile and will just continue as this is async
it will just register the callback and proceed to rest of the code immediately. Non blocking aspect of code.
*/

