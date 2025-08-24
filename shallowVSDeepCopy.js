const originalObject = {
  somePrimitive: 3,
  someReference: {
    someNestedPrim: 7,
    someNestedRef: ["a", "b"]
  },
  anotherPrimitive: "hello" 
};

// Create a shallow copy using the spread syntax
const shallowCopy = { ...originalObject };

console.log("--- Initial State ---");
console.log("Original Object:", JSON.stringify(originalObject));
console.log("Shallow Copy:", JSON.stringify(shallowCopy));

console.log("\n--- Modifying the shallow copy ---");

// 1. Changing a root-level primitive property in the shallow copy
shallowCopy.somePrimitive = 10; 
console.log("shallowCopy.somePrimitive changed to:", shallowCopy.somePrimitive); 
console.log("Original Object's somePrimitive:", originalObject.somePrimitive); // Original unaffected

// 2. Changing a root-level primitive property that was added to illustrate the point
shallowCopy.anotherPrimitive = "world";
console.log("shallowCopy.anotherPrimitive changed to:", shallowCopy.anotherPrimitive);
console.log("Original Object's anotherPrimitive:", originalObject.anotherPrimitive); // Original unaffected


// 3. Modifying a property *within* a nested object in the shallow copy
shallowCopy.someReference.someNestedPrim = 15;
console.log("shallowCopy.someReference.someNestedPrim changed to:", shallowCopy.someReference.someNestedPrim); 
console.log("Original Object's someReference.someNestedPrim:", originalObject.someReference.someNestedPrim); // Original AFFECTED


// 4. Modifying a nested array in the shallow copy
shallowCopy.someReference.someNestedRef.push("c"); 
console.log("shallowCopy.someReference.someNestedRef after push:", JSON.stringify(shallowCopy.someReference.someNestedRef)); 
console.log("Original Object's someReference.someNestedRef after push:", JSON.stringify(originalObject.someReference.someNestedRef)); // Original AFFECTED

// 5. Reassigning a root-level reference property in the shallow copy
shallowCopy.someReference = { newProperty: true };
console.log("shallowCopy.someReference reassigned to:", JSON.stringify(shallowCopy.someReference));
console.log("Original Object's someReference:", JSON.stringify(originalObject.someReference)); // Original still points to the old object
