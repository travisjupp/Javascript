# Software Testing

**Implementation code:** The code defining your app

**Test code:** the code defining your tests.

**Test frameworks** are used to organize and automate tests that provide useful feedback when errors occur.

**Test Suite:** collection of tests for a web application.

**Automated testing:** software to control the execution of tests and the comparison of actual behavior to expected behavior. 
> Automated testing makes code production more reliable thanks to the ease of running frequent tests on all new and old code in a software application.

**Manual testing:** testing done by a human interacting with a system.

**Regression:** When adding a new feature to your product, it’s possible that something will break. If that break occurs within a feature developed earlier, it is called regression. When functionality previously developed and tested stops working, you may say the *functionality regressed*.

**Regression test selection:** Unlike running the entire test suite, with this technique we set, and conditionally, execute different groups of test cases rather than automatically executing each group.

**Test case prioritization:** Here, we prioritize test cases so as to increase the test suite’s rate of fault detection. Test case prioritization techniques schedule test cases so that the test cases that are higher in priority are executed before the test cases that have a lower priority.

**Edge Case:** Problem that occurs at an extreme operating parameter.

**Red—Green—Refactor cycle** (TDD development process)
* write test
* fail test 
* pass test 
* refactor

**The MC-FIRE acronym** (Maintainable, Complete, Fast, Isolated, Reliable, and Expressive) are the characteristics of an effective test suite.

**Mocking** is the process of creating a fake version of an external service for testing purposes, particularly in unit tests and integration tests.  

>While it’s helpful to use mocks in unit tests, we should avoid using mocks in integration tests to better simulate interactions between internal services (though external services should remain mocked)

**Spy:** In testing, a spy is a function that observes and records information about another function’s calls including arguments, return value, the this value, and exceptions thrown (if any).

> Sinon.js is a JavaScript library that includes standalone fakes, spies, and mocks that can be used in any unit testing framework. [^Sinon.js]

## Code coverage

**Code Coverage:** (metric) % of application code tested.[^CodeCoverage]
* Function Coverage: Has each function been called?
* Statement Coverage: Has each statement been executed?
* Path Coverage: Has every edge in the control-flow graph[^Control-flow-graph] been executed?
* Condition Coverage: Has each boolean sub-expression evaluated to be both true and false?

**Test Coverage:** (metric) % of features/specs tested.
* features/specs defined in *product requirements document* (PRD)

## Software testing methods

* **Unit tests** test the smallest unit of code possible.

* **Integration tests** test the interactions between internal services in the application. (I&T)

* **End-to-end tests** test the whole application including the external services it depends on. (E2E)

## Testing methodologies
specific strategies for testing all of the pieces of your software to make sure it behaves as expected.

  * **Test-Driven Development (TDD):** Tests are written before the functioning code is written. Tests concerned with code *components* eg. functions/classes

  * **Behavior-driven Development (BDD):** Test-first approach. Changes are feature-related, the unit of tests is called a “feature.” Language of test-cases are simplified. Tests concerned with product *behavior*

  * **Specification by Example (SBE)**

  * **Acceptance Test-driven Development (ATDD)**

> Software companies don’t need to pick a singular software testing methodology — they can be combined and used at various stages during software development.  

> Some organizations take a test-first approach to software development, with testing methodologies such as TDD and BDD being the first step of code production.

> Since software errors can cost businesses money and customer trust, testing is an integral part of the development process and used in some flavor by every software company.

## npm test
The behavior of npm test is specified in the package.json file that is part of all of our applications.  

```json
"scripts": {
    "start": "node ./bin/www",
    "test": "bin/wdio-test" // npm test will run wdio-test
  },
```

>We can set up our own tests in our environment by specifying a `"test" : "file/path"` key/value pair in "scripts" once we have a `package.json` file for our project.  
>Running `npm init` will create a `package.json` [^npminit]


## Automate and organize tests
### Testing phases: Setup, Exercise, Verify, and Teardown

Testing phases make your test more reliable, maintainable, and expressive.

* **Setup** - create objects, variables, and set conditions that your test depends on

* **Exercise** - execute the functionality you are testing

* **Verify** - check your expectations against the result of the exercise phase. You can use the assert library here

* **Teardown** - tests isolated by resetting the environment before the next test runs.

> Clear separation of each phase makes a test easier to read, change, and validate.

```javascript
// import node.js assert module
const assert = require('assert');

// Naïve approach
describe('.pop', () => {
  it('returns the last element in the array [naive]', () => {
    assert.ok(['padawan', 'knight'].pop() === 'knight'); 
  });
});

// 3 phase approach
describe('.pop', () => {
  it('returns the last element in the array [3phase]', () => {
    // Setup
    const knightString = 'knight';
    const jediPath = ['padawan', knightString];

    // Exercise
    const popped = jediPath.pop();

    // Verify
    assert.ok(popped === knightString);
  });
});
```

## Testing frameworks
### Mocha JS [^Mocha.js]
```js
// Hooks:

// groups tests
describe('description', () => {/* Write it functions here */});

// executes tests
it('description', () => { /* Write assertions here */ });

// executed first, code setup (vars, vals) for other func calls
before(() => {path = './message.txt';});

// executed pre-test, code setup/reset (vars, vals) for other func calls
beforeEach(() => {testCounter++;});

// executed last, print results/reset (vars, vals)
after(() => {console.log(""number of tests: "" + testCounter); });

// executed after each test, print results/reset (vars, vals)
afterEach(() => {path = './message.txt';});


```
### Node.js Assert library [^Node.js-Assert]

```js
// import assert
const assert = require('assert');

assert.ok(a + b === c); // eval boolean expression
assert.equal(a, b); // verify loose equality
assert.strictEqual(a, b); // verify strict equality 
assert.deepEqual(a, b); // compare vals within two objects 
```

### Chai.js Assertion library [^Chai.js]
BDD / TDD assertion library for node and the browser. Pair with any JS testing framework.
```js
var assert = require('chai').assert
  , foo = 'bar'
  , beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

assert.typeOf(foo, 'string'); // without optional message
assert.typeOf(foo, 'string', 'foo is a string'); // with optional message
assert.equal(foo, 'bar', 'foo equal `bar`');
assert.lengthOf(foo, 3, 'foo`s value has a length of 3');
assert.lengthOf(beverages.tea, 3, 'beverages has 3 types of tea');
```
#### BDD Style: `expect` / `should`
```js
var expect = require('chai').expect
  , foo = 'bar'
  , beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

expect(foo).to.be.a('string');
expect(foo).to.equal('bar');
expect(foo).to.have.lengthOf(3);
expect(beverages).to.have.property('tea').with.lengthOf(3);
```

---
## References & Links

[Characteristics of a good test](https://www.codecademy.com/article/tdd-u1-good-test)  
[Hackernoon’s Introduction to Test Driven Development](https://hackernoon.com/introduction-to-test-driven-development-tdd-61a13bc92d92)  


[^Sinon.js]: https://sinonjs.org/releases/latest/spies/ "Sinon.js"
[^CodeCoverage]: https://en.wikipedia.org/wiki/Code_coverage#Parameter_value_coverage "Code coverage"  
[^npminit]: https://docs.npmjs.com/cli/v9/commands/npm-init "npm init"  
[^Mocha.js]: https://mochajs.org/ "Mocha JS Testing Framework"  
[^Node.js-Assert]: https://nodejs.org/api/assert.html#assert "Node.js Assert"  
[^Chai.js]: https://www.chaijs.com/guide/ "Chai.js Assertion Library"  
[^Control-flow-graph]: https://en.wikipedia.org/wiki/Control-flow_graph "Control-flow graph"  