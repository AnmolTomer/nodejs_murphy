// Module is a child of global object and can be accessed from anywhere in our Node App.

/*
Say a node app takes like 4 million lines of codes and we do not want all of our code on one particular JS file,
we want to break the code into separate files purely for the organisation of the code.This is achieved by using modules.

Another good reason to use modules is that if we have a particular function that we want to use in multiple places in our app
then to avoid re-writing that function every single time, we want to write it once and have it available to be used in our other files.
This can be done using modules.

Module is just a JS file.


*/

let myObject = { // A JS object simply.
    myAnimal : "Cat",
    myNumber : 1,
    myAnswer : false,
    myFunction : () => {
        console.log("This is a function inside an object.This is here because it was imported to the file 09. module.js using require method.")
    }
}

/* Each JS file can be made a module. Now we want to make this object to be accessible by other files.
Right now the JS object is just in local scope, other files do not have visibility to the object above.
As we do not want lots of variables and objects to be global to prevent unnecessary modification and we prefer things separate.
However in this case we want object made available to other files. This can be achieved as following :
*/


module.exports = myObject // Exports is a child of module object and entire thing is child of global object.
// Here we have exported the object from 09. module.js file. Now we have to import it in 09. import.js file.

/* On running node >> module.exports in bash we get back an empty object represented by {}. It is just a container to be used to export objects
from our files and making them available to other files. Now we fill empty object module.exports with myObject in the following way :



*/