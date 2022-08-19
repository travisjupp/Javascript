const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept);

function removeElement(newArr) {
  newArr.pop();
}

removeElement(concept);
console.log(concept);

/* when you pass an array into a function, if the array is mutated inside the function, 
that change will be maintained outside the function as well. You might also see this 
concept explained as pass-by-reference since what we’re actually passing to the function
is a reference to where the variable memory is stored and changing the memory. */