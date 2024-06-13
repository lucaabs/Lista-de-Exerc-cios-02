// Function to test if variable is a string
function isString(variable) {
    return typeof variable === "string";
  }
  
  // Variables of different types
  let myBool = false;
  let myNum = 12;
  let myArray = [1, 2, 3]
  let myObject = { a: 1, b: 2, c: 3}
  let myString = "Hello world!"
  
  // Tests
  console.log(isString(myBool)); // will print "false"
  console.log(isString(myNum)); // will print "false"
  console.log(isString(myArray)); // will print "false"
  console.log(isString(myObject)); // will print "false"
  console.log(isString(myString)); // will print "true"
  