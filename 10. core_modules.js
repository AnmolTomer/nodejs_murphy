/*
Core Modules : In last notes 09. we built our own custom modules, and those are called local modules. Those were JS code in a file
which was made available to other files.

Node actually provides some of these modules which were pre-built by the node team ,made available publicly and are part of Vanilla installation.
On going to https://nodejs.org/en/docs/ and clicking on the API link of the node version you are using then you will see on left there will be
lots of core modules present where you can read more about those modules. HTTP, File System are some of the modules that we will be using later
in this course.

OS and Path modules will be explored in series of lectures.
These core modules are much like local modules we built before, path is just a JS file to put it very simply, we can have access to the code
and other methods and contents of the module by requiring it.

However, a difference is existing that with our local modules we had to tell the node where the file was residing using ./
./ means file is in same directory as the file in which we are writing the code in.
With core modules we do not need to do ./ , as node exactly knows where all the core modules are.


*/

var path = require('path')

let fullPath = "D:\\CSE\\video_courses_and_books\\videos\\YT\\Node James Murphy\\nodejs_murphy\\10. index.html"

console.log(path.basename(fullPath)) // Gives file name
console.log(path.dirname(fullPath)) // Gives folder name where file resides
console.log(path.extname(fullPath)) // Gives extension of file
console.log("\n\n")

// OS module can be used to get info of the server you are running your code on. Can give info about CPU too.
let os = require('os')
let cpuArray = os.cpus() // Gives an array of CPUs running on the machine on which this is executed.
console.log(cpuArray)
console.log(cpuArray.length) // By knowing the length of cpuArray we can find out how many cores a processor in a machine has.
/*
Remember when we discussed about one of the great benefits and aspect of single thread and non blocking nature. Now how about we have a 12
core processor which is true in my case, then there is a way which we will learn about where we can leverage multi core ability of CPU
by starting a separate node process on each of the CPU on our server.
*/
console.log(cpuArray[0].model) // Name of the processor.

let freeMem = os.freemem()
console.log("Free memory RAM in GB is :")
console.log(freeMem/1073741824)
