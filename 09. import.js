/* Here to get the visibility to the exported object we need to use the require method. And require method is property of global object.
require method takes one single argument which is the reference to the file that we want to import or made available.
As the object to be imported is in same folder as the file which contains object to be exported that's why we use ./ for same directory address.

*/
let importedObject = require("./09. module")
/* When we do require("./09. module") then what happens is that current code looks into the file being addressed and looks for which object is
exported by being put in module.exports container, we have put in myObject in that container which is exported from 09. module.js file.
The object imported is accessed using importedObject variable.
*/

console.log(importedObject.myAnimal)
//  Logging of these on the console shows that importing object from module.js does works actually.
let importedFunction = importedObject.myFunction // Attaching the function to var name importedFunction()
importedFunction() // After attachment calling the function which was read from imported object using importedFunction()

// So we can create a function or an object inside module.js and use it throughout our application when and wherever needed.