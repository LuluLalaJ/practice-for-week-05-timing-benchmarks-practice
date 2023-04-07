const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  // Copy your `addNums10` code here
  // Then, add timing code

  // Your code here

  let result = []
  let counter = 0
  let currentV = increment
  while (counter < 10) {
    startTime = Date.now()
    result.push(addNums(currentV))
    endTime = Date.now()
    currentV += increment
    counter++
    console.log(`${endTime - startTime}`)
  }
  return result

}


function addManyNums10Timing(increment) {
// Copy your `addManyNums10` code here
// Then, add timing code

  // Your code here

  let result = []
  let counter = 0
  let currentV = increment
  while (counter < 10) {
    startTime = Date.now()
    result.push(addManyNums(currentV))
    endTime = Date.now()
    currentV += increment
    counter++
    console.log(`${endTime - startTime}`)
  }
  return result

}


n = 1000000
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);
