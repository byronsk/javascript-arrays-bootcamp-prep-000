
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (chocolateBars, kitkat) {
return [element, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray (chocolateBars, snickers) {
  chocolateBars.unshift(snickers);
  return [chocolateBars];
}

function addElementToEndOfArray (chocolateBars, snickers) {
  return [...chocolateBars, snickers];
}

function destructivelyAddElementToEndOfArray (chocolateBars, snickers) {
  chocolateBars.push(snickers);
  return [chocolateBars];
}

function accessElementInArray (array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray (chocolateBars) {
  chocolateBars.shift();
  return [chocolateBars];
}

function removeElementFromBeginningOfArray (chocolateBars) {
  chocolateBars.slice(1);
}

function destructivelyRemoveElementFromEndOfArray (chocolateBars) {
  
}