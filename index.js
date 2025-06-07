// --- Exercise Routine Functions ---

// Activity functions
function runFiveMiles() {
  console.log("Go for a five-mile run");
}

function liftWeights() {
  console.log("Pump iron");
}

function swimFortyLaps() {
  console.log("Swim 40 laps");
}

function exerciseRoutine(postRunActivity) {
  runFiveMiles();
  postRunActivity();
}

function morningRoutine(exercise) {
  let breakfast;
  if (exercise === liftWeights) {
    breakfast = "protein bar";
  } else if (exercise === swimFortyLaps) {
    breakfast = "kale smoothie";
  } else {
    breakfast = "granola";
  }
  // Execute the exercise routine immediately
  exerciseRoutine(exercise);

  return function () {
    console.log(`Nom nom nom, this ${breakfast} is delicious!`);
  };
}

// LAB 1: Implement a function called saturdayFun
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

// LAB 2: Implement a function expression called mondayWork
const mondayWork = function(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};

// LAB 3: Implement a function called wrapAdjective (demonstrates closure)
function wrapAdjective(flair = "*") {
  return function (adjective = "special") {
    return `You are ${flair}${adjective}${flair}!`;
  };
}

// Function Expression: divide
const divide = function() {
  return 2000 / 100;
};

// Arrow Function: square
const square = x => x * x;

// Arrow Function: add
// Renamed parameters to `num1` and `num2` for clearer numeric context.
const add = (num1, num2) => num1 + num2;

function receivesAFunction(callback) {
   callback();
 
}

function returnsANamedFunction() {
  function exampleNamedFunction() {
    return "I am a named function!";
  }
  return exampleNamedFunction;
}

function returnsAnAnonymousFunction() {
    return function() {
    return "I am an anonymous function!";
  };
}

console.log("--- Exercise Routine Examples ---");
console.log("Monday's routine:");
exerciseRoutine(liftWeights);

console.log("\nTuesday's routine (using inline anonymous function):");
exerciseRoutine(() => console.log("Swim 40 laps"));

console.log("\nWednesday's routine (using inline arrow function for extra run):");
exerciseRoutine(() => runFiveMiles());

console.log("\nMorning Routine with Closure:");
const afterLiftingBreakfast = morningRoutine(liftWeights);
console.log("Time for breakfast after lifting:");
afterLiftingBreakfast();

const afterSwimmingBreakfast = morningRoutine(swimFortyLaps); 
console.log("Time for breakfast after swimming:");
afterSwimmingBreakfast(); 

const afterPilatesBreakfast = morningRoutine(() => console.log("Stretch! Work that core!")); // This logs run & pilates
console.log("Time for breakfast after pilates:");
afterPilatesBreakfast(); 

console.log("\n--- Previous Lab Functions Verification ---");
console.log("saturdayFun():", saturdayFun());
console.log("saturdayFun('cycling'):", saturdayFun('cycling'));
console.log("mondayWork():", mondayWork());
console.log("mondayWork('code review'):", mondayWork('code review'));
console.log("wrapAdjective()():", wrapAdjective()());
console.log("wrapAdjective('**')('awesome'):", wrapAdjective('**')('awesome'));
console.log("divide():", divide());
console.log("square(8):", square(8));
console.log("add(15, 25):", add(15, 25)); 
console.log("\n--- First-Class Functions Lab Requirements ---");

const mySimpleCallback = () => console.log("The simple callback was executed by receivesAFunction!");
console.log("Calling receivesAFunction:");
receivesAFunction(mySimpleCallback);

const returnedNamedFunction = returnsANamedFunction();
console.log("Calling function returned by returnsANamedFunction:", returnedNamedFunction());

const returnedAnonymousFunction = returnsAnAnonymousFunction();
console.log("Calling function returned by returnsAnAnonymousFunction:", returnedAnonymousFunction());
