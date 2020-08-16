var rect = require('./rectangle')
function solveRect(l, b) {
  console.log("Solving for rectangle with l = " + l + "and b = " + b)
  rect(l, b, (error, rectangle) => {//this is an anonymous function definition, the arguments for this function will be passed from the callback.
    if ( error ) {
      console.log("Error: ", error.message)
    } else {
      console.log(`The area of the rectangle of dimensions l = ${l} and b = ${b} is ${rectangle.area()}`);
      console.log(`The perimeter of the rectangle of dimensions l = ${l} and b = ${b} is ${rectangle.perimeter()}`);
    }
  });

  console.log("This statement is after the call to rect()")
}

solveRect(2, 3);
solveRect(0, 3);
solveRect(-9, 3);
solveRect(3, 5);
