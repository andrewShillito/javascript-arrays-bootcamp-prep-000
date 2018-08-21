var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

const addElementToBeginningOfArray = function addElementToBeginningOfArray(arr, ele){
  return [ele, ...arr];
}

const destructivelyAddElementToBeginningOfArray = function(arr, ele){
  arr.unshift(ele);
  return arr;
}

const addElementToEndOfArray = function(arr, ele){
  return [...arr, ele];
}

const destructivelyAddElementToEndOfArray = function(arr, ele){
  arr.push(ele);
  return arr;
}