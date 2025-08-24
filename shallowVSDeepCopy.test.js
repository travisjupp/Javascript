// import {describe, it} from 'node:test';
import assert from 'node:assert/strict';
import {jest} from '@jest/globals';
import util from 'node:util';
import {style} from './styles.js';
util.inspect.defaultOptions.depth = null; // show full objects
// util.inspect.defaultOptions.depth = 0; // show truncated objects
// util.inspect.defaultOptions.compact = true; // dont break objects to new lines
// util.inspect.defaultOptions.compact = false; // break objects to new lines

// suppress jests tracing console logs
import console from 'console';
const jestConsole = console;

beforeEach(() => {
    global.console = console;
    console.log(style.color(255,0,255),'▷',style.reset,style.color(39),expect.getState().currentTestName,style.reset,'\n'); });

afterEach(() => {
    global.console = jestConsole;
    console.log(style.color(99), style.hr.double, style.reset);
});

describe('shallowVSDeepCopy', () => {
  it('Shallow-Copy VS Deep-Copy concept in JS', () => {

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

    console.log(style.bold,style.underline,style.blue,"--- Initial State ---",style.reset);
    console.log("Original Object:", originalObject);
    console.log("Shallow Copy:", shallowCopy, "\n");

    console.log(style.bold,style.underline,style.blue,"--- Modifying the shallow copy ---",style.reset);

    // 1. Changing a root-level primitive property in the shallow copy
    console.log(style.red,"1. Changing a root-level primitive property in the shallow copy", style.reset);
    
    shallowCopy.somePrimitive = 10; 
    console.log("shallowCopy.somePrimitive changed to:", shallowCopy.somePrimitive); 
    console.log("Original Object's somePrimitive:", originalObject.somePrimitive, style.italic, style.magenta, "// Original unaffected\n", style.reset); // Original unaffected

    // 2. Changing a root-level primitive property that was added to illustrate the point
    console.log(style.red,"2. Changing a root-level primitive property that was added to illustrate the point", style.reset);

    shallowCopy.anotherPrimitive = "world";
    console.log("shallowCopy.anotherPrimitive changed to:", shallowCopy.anotherPrimitive);
    console.log("Original Object's anotherPrimitive:", originalObject.anotherPrimitive, style.italic, style.magenta, "// Original unaffected\n", style.reset); // Original unaffected


    // 3. Modifying a property *within* a nested object in the shallow copy
    console.log(style.red,"3. Modifying a property *within* a nested object in the shallow copy", style.reset);

    shallowCopy.someReference.someNestedPrim = 15;
    console.log("shallowCopy.someReference.someNestedPrim changed to:", shallowCopy.someReference.someNestedPrim); 
    console.log("Original Object's someReference.someNestedPrim:", originalObject.someReference.someNestedPrim, style.italic, style.magenta, "// Original AFFECTED\n", style.reset); // Original AFFECTED


    // 4. Modifying a nested array in the shallow copy
    console.log(style.red,"4. Modifying a nested array in the shallow copy", style.reset);

    shallowCopy.someReference.someNestedRef.push("c"); 
    console.log("shallowCopy.someReference.someNestedRef after push:", shallowCopy.someReference.someNestedRef); 
    console.log("Original Object's someReference.someNestedRef after push:", originalObject.someReference.someNestedRef, style.italic, style.magenta, "// Original AFFECTED\n", style.reset); // Original AFFECTED

    // 5. Reassigning a root-level reference property in the shallow copy
    console.log(style.red,"5. Reassigning a root-level reference property in the shallow copy", style.reset);

    shallowCopy.someReference = { newProperty: true };
    console.log("shallowCopy.someReference reassigned to:", shallowCopy.someReference);
    console.log("Original Object's someReference:", originalObject.someReference, style.italic, style.magenta, "// Original still points to the old object", style.reset); // Original still points to the old object
  });

});


