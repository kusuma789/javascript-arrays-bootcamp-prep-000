var chocolateBars = ["snickers","hundred grand","kitkat","skittles"]

function addElementToBeginningOfArray(array,element){
  newarray=[element,...array]
  return newarray
}

function destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift(element)
  return array
}

