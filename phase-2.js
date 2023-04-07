const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  // Fill this in
  let result = []
  let counter = 0
  let currentV = increment
  while (counter < 10) {
    result.push(addNums(currentV))
    currentV += increment
    counter++
  }
  return result
}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  // Fill this in
  let result = []
  let counter = 0
  let currentV = increment
  while (counter < 10) {
    result.push(addManyNums(currentV))
    currentV += increment
    counter++
  }
  return result

}

console.log(addManyNums10(1))
module.exports = [addNums10, addManyNums10];
