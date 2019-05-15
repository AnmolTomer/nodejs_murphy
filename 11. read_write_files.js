var fs = require('fs') //file system core module

var contents = fs.readFileSync('./11. readme.txt','utf-8')
// var contents = fs.readFileSync('./11. readme.txt')
console.log(contents)

/* Sync as we talked about non blocking nature NodeJS as this is Synchnorous i.e. blocking code. We do not want blocking code more often than not.

$ node 11.\ read_write_files.js
<Buffer 54 68 69 73 20 69 73 20 61 20 64 75 6d 6d 79 20 72 65 61 64 6d 65 20 66 69 6c 65 2c 2
0 69 74 20 69 73 20 6d 61 64 65 20 74 6f 20 64 65 6d 6f 73 74 72 ... >
We get above output if we call readFileSync without encoding format i.e. buffer output aka binary data.

If we specify character encoding utf-8 then the output is proper and what is actually there in the txt file.

$ node 11.\ read_write_files.js
This is a dummy readme file, it is made to demostrate file reading and writing using NodeJS f
ile system core module.

To write or copy data of one file to another do the following

*/

fs.writeFileSync('./11. written.txt',contents,'utf-8')