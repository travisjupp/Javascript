# JS Modules #

## module.exports I ##

We can get started with modules by defining a module in one file and making the module available for use in another file with Node.js `module.exports` syntax. Every JavaScript file run in Node has a local module object with an exports property used to define what should be exported from the file.

The pattern we use to export modules is thus:

	1. Create an object to represent the module.
	2. Add properties or methods to the module object.
	3. Export the module with module.exports.

```js
// 1-airplane.js
	let Airplane = {};
	Airplane.myAirplane = "StarJet";
	module.exports = Airplane;
```

`let Airplane = {};` creates the object that
represents the module Airplane and contains the var Airplane
`Airplane.myAirplane` defines a property of the Airplane module
we add data to the 'Airplane' object in this case 'StarJet'
`module.exports = Airplane;` exports the Airplane object as a module,
"module" is a variable that represents the module and "exports"
exposes the module as an object.

## module.exports II ##

We can also wrap any collection of data and functions in an object, and export the object using `module.exports`. In *menu.js*, we could write:

```js
// menu.js
	module.exports = {
		specialty: "Roasted Beet Burger with Mint Sauce",
		getSpecialty: function() {
			return this.specialty;
		}
	};
```

Notice in the above code:

1. `module.exports` exposes the current module as an object.
2. `specialty` and `getSpecialty` are properties on the object.

Then in *order.js* we write:

```js
	const Menu = require('./menu.js');
	console.log(Menu.getSpecialty());
```
Here we can still access the `Menu` module.

## Import JS modules with the `require()` function ##

```js
// 1-missionControl.js
	const Airplane =
	require('./1-airplane.js');

	function displayAirplane(){
	  console.log(Airplane.myAirplane);
	}

	displayAirplane(); // logs: StarJet in current file from 1-airplane.js
```

In Node.js the `require` function can be used to import code from another file into the current script.

```js
	var moduleA = require("./module-a.js");
	// .js extension optional
	var moduleA = require("./module-a");

	// now the functionality of moduleA can be used
	console.log(moduleA.someFunctionality);
```
## JS `export default` ##

As of ES6, the `export default` keywords allow for a single variable or function to be exported, then, in another script, it will be straightforward to import the default export. After using the `export default` it is possible to import a variable or function without using the `require()` function.

```js
// module "moduleA.js"
	export default function cube(x) {
		return x * x * x;
	}
// In main.js
	import cube from './moduleA.js';
// now the cube function can be used straightforwardly.
	console.log(cube(3)); // 27	or 3 * 3 * 3
```

## Using the `import` keyword in JS ##

As of the ES6, the `import` keyword can be used to import functions, objects or primitives previously exported into the current script.

There are many ways to use the `import` keyword, e.g. use * selector to import all the exports from a script: `import * from 'module_name';`.

A single function can be imported with curly brackets e.g. `import {funcA} as name from 'module_name';`

Or many functions by name: `import {funcA, funcB} as name from 'module_name';`

```js
	// add.js
	export const add = (x,y) => {
		return x + y
	}

	// main.js
	import { add } from './add';
	console.log(add(2,3)); //5
```
