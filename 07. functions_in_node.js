// First method to declare a function
/*
function declaration() {
    console.log("This is a function declaration.")
    // Press Debug in VSCode and upon running when presented with choice of environment between Chrome or Node select node.
}
declaration()
*/
// x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x

// Another method

/*
var functionExpression = () =>{
    console.log("This is a function expression.")
}
functionExpression();
*/

/* The part where we built a function was :

() =>{
    console.log("This is a function expression.")
}
and we pass this to a variable called functionExpression and then letting the function run by calling a variable that the function
was passed to. This is something known as first class function which is enabled by JS. So, JS is actually allowing functions
to be passed around as regular objects. JS is really flexible with the way it works with functions.

*/
// x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x

// Another interesting example

/*
let fnInner = () => {
    console.log("This was passed into fnOuter and then run!!")
};

let fnOuter = (fnParam) => {
    fnParam() // Call the function which you gave as a parameter to fnOuter
};

fnOuter(fnInner);

*/

/*
JS also allows higher order functions, higher order functions are functions which accepts other functions being passed to them
as parameters. The example above has function  fnInner which is being passed in as a parameter to other function fnOuter(fnInner)

fnOuter accepts the fnInner function as a parameter. fnOuter runs and takes in the parameter fnInner and then runs the parameter giving
us the output expected from fnInner.

*/

// x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x

/* Now we look at even more greater level of flexibility that JS has when working with functions :
final thing we show about working with function and objects is following : */

// JS Object
let myObject = {
    myAnimal : "Cat",
    myNumber : 1,
    myAnswer : false,
    myFunction : () => {
        console.log("This was called from inside an object...by a function expression.")
    }
}
// Object contains key and value.
let myFunctionExpression = myObject.myFunction;
myFunctionExpression();
/* Value in an object can be string, int, boolean but more interestingly it can also be a function.
Key is called myFunction and value is actually a function itself. Thus, embedding a function within an object.

let myFunctionExpression = myObject.myFunction;
myFunctionExpression();

In the two lines of code above we are populating the function into the function expression, we take value from key value pair from the
object and using dot notation from the object, we are populating the functionExpression with the function and then we are running the
function using myFunctionExpression() the variable to which function inside the object was passed into.
*/