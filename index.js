// --- Exercise Routine Functions ---

/**
 * receivesAFunction
 *
 * This function takes a callback function as an argument and immediately calls it.
 * The return value of this function itself is not important, only that the callback is executed.
 *
 * @param {function} callback - The function to be called.
 */
function receivesAFunction(callback) {
  // Call the provided callback function
  callback();
}

/**
 * returnsANamedFunction
 *
 * This function takes no arguments and returns a named function.
 * The returned function does not perform any specific action,
 * its purpose is to demonstrate returning a named function.
 *
 * @returns {function} A named function.
 */
function returnsANamedFunction() {
  // Define a named function
  function myNamedFunction() {
    console.log("This is a named function.");
  }
  // Return the named function
  return myNamedFunction;
}

/**
 * returnsAnAnonymousFunction
 *
 * This function takes no arguments and returns an anonymous function.
 * The returned function does not perform any specific action,
 * its purpose is to demonstrate returning an anonymous function.
 *
 * @returns {function} An anonymous function.
 */
function returnsAnAnonymousFunction() {
  // Return an anonymous function (using an arrow function for conciseness)
  return () => {
    console.log("This is an anonymous function.");
  };
}

// --- Example Usage (for testing purposes, not part of the required solution) ---

// Example for receivesAFunction:
// function myCallback() {
//   console.log("Callback function was called!");
// }
// receivesAFunction(myCallback);

// Example for returnsANamedFunction:
// const namedFunc = returnsANamedFunction();
// namedFunc(); // This will log "This is a named function."
// console.log("Name of returned named function:", namedFunc.name); // Should log "myNamedFunction"

// Example for returnsAnAnonymousFunction:
// const anonymousFunc = returnsAnAnonymousFunction();
// anonymousFunc(); // This will log "This is an anonymous function."
// console.log("Name of returned anonymous function:", anonymousFunc.name); // Should log "" or a generated name like "anonymous"
