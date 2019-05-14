/*
Global Object in Node is synonymous to the window object in JS. We will use Git Bash which you can download from Git.
It allows us to use Linux Shell in windows environment. Type in node,then type in global, it returns all of the objects which are attached to global objects or methods.

If we do a small interactive coding session in terminal then if we do
var animal = "cat"
this is attached to global object and it can be proved by typing global.animal and it will return cat.

According to ES6 syntax if we use let bird = "hawk", now though variable bird is in memory still it isn't attached to global object which can be verified by passing in
global.bird and output being undefined.
ES6 syntax let allows us to attach variables to local scope and using var attaches variables to the global scope.
Thus, much safer to use let instead of var.

To have a more in-depth look at the functionality of global we move to something else.
__dirname give us directory name of the directory under which our file is in and __filename gives us the name of our file.
*/


/* This is a method which is a child of global object, it takes two parameters, i.e. function you want to run and second is the amount of time you like to wait until this
function runs. It first waits for node to run all the code on the page has to be executed first. This is a good example of single thread non blocking nature of JS, this is a
good example of that as this says to rest of the code that I want you to wait until the next loop, or finish the existing loop you are working on, and then and only then
I want you to run the setTimeout() function. First all code is run then with 5 second delay output inside setTimeout function is shown.
 */

/*
setTimeout(() => {
    console.log("This is called 5 seconds later.")
}, 5000);
*/

// global.console.log(__dirname)
// global.console.log(__filename)
/*
Even if we put the setTimeout to 0 ms then also it will execute all other code first and then after exiting the execution context, complete the loop and on next turn of event
loop then it will run the setTimeout() fxn.

More efficient way of doing what is achieved through setTimeout() is by using process.nextTick() which is very similar to using setTimeout() with 0 seconds.
It just says that wait till next tick or next loop of the event loop and then run the contents present inside me.
This is a very useful function and is used extensively in NodeJS.
When we talk about callback functions then we use this functionality to make sure that code is executed on the next loop and not on current loop.
*/

/*
process.nextTick(() => {
    console.log("This is called on next loop.")
})
*/
/*
Last but not the least we look at setInterval(), which is another child of global object, rather than setting timeout, setInterval is used to repeat.
Takes 2 parameters, what to run and how long to wait before running the parameter 1 again.
*/

let setInt = setInterval( () =>{
    console.log("This is called every second.")
},1000)

