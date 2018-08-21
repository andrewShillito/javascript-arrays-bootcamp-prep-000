var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

const addElementToEndOfArray = function(arr, ele){
  return [...arr, ele];
}

const destructivelyAddElementToEndOfArray = function(arr, ele){
  arr.push(ele);
  return arr;
}