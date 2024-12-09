// Example from MDN `eval` reference illustrating 
// localized object property mutation
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval

function setDescendantProp(obj, desc, value) {
  const arr = desc.split(".");
  while (arr.length > 1) {
    // `obj` variable is reassigned to a nested
    // object within the original object
    // on each iteration, reassignment 
    // does not affect the original reference
    obj = obj[arr.shift()];
  }
  // modifying the property of last nested object
  // `obj` points to, mutating only the nested object
  return (obj[arr[0]] = value);
}

const obj = {a: {b: {c: 0}}};
function getPropPath() {return 'a.b.c'};
const propPath = getPropPath();
const result = setDescendantProp(obj, propPath, 1); // obj.a.b.c is now 1
