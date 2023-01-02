# Asynchrony

Asynchronous vs. Synchronous

```js 
// Synchronous: blocking sequentially-executed code
function step1(value) {console.log('C')}
function step2(value) {console.log('A')}
function step3(value) {console.log('T')}

function buildCat() {
    step1();
    step2();
    step3();
}
buildCat();

// Asynchronous: non-blocking, non-sequential
function dogStep3(value) {
    setTimeout(() => {console.log(value)}, 9000)
    }
function dogStep2(value) {
    setTimeout(() => {console.log(value)}, 5000)
    }
function dogStep1(value) {
    setTimeout(() => {console.log(value)}, 0)
    }
function buildDog() {
  dogStep3('G');
  dogStep2('O');
  dogStep1('D');
}
buildDog();
```

Single-thread vs. Multi-thread  
The number of threads determine how many concurrent operations can run. JS is a single-threaded programming language, however, the Browser can implement threads.

Blocking vs. Non-Blocking  
Blocking Code "blocks" a user from interacting until an operation is finished —Background code must finish executing before continuing. Non-Blocking operations allow JS to operate concurrently (not parallel) and do not "block" program flow.

## Promises

`Promise(executorFunction(resolve, reject))`  

Promises are objects that represent the eventual outcome of an asynchronous operation. A Promise object can be in one of three states:

* Pending: The initial state— the operation has not completed yet.

* Fulfilled: The operation has completed successfully and the promise now has a ***resolved value***.

* Rejected: The operation has failed and the promise has a reason for the failure.

A Promise that is no longer pending is ***settled***  


`.then` is a Promise method used to get the eventual result of an asynchronous operation and accepts two arguments: `.then(resolvedHandler, errorHandler)`

Chaining Promises with multiple `.then` methods is called ***composition***:

```js
const promise = new Promise(resolve => setTimeout(() => resolve('dAlan'), 100));

promise.then(res => {
  return res === 'Alan' ? Promise.resolve('Hey Alan!') : Promise.reject('Who are you?')
}).then((res) => {
  console.log(res)
}, (err) => {
  alert(err)
});
```
```js
// Avoid nesting callbacks (callback hell):
// note: both examples achieve same result.

// best practice
checkInventory(order)
    .then((resolvedValueArray) => {
        return processPayment(resolvedValueArray);
    })
    .then((resolvedValueArray) => {
        return shipOrder(resolvedValueArray);
    })
    .then((successMessage) => {
        console.log(successMessage);
    })

// callback hell
checkInventory(order)
    .then((resolvedValueArray) => {
        processPayment(resolvedValueArray)
            .then((resolvedValueArray) => {
                shipOrder(resolvedValueArray)
                    .then((successMessage) => {
                        console.log(successMessage);
                    });
            });
    });
```
### Promise concurrency
`Promise.all(iterable)` takes an iterable of Promises and, if **all** fulfill, returns a single Promise —otherwise rejects *(failing fast)*.

```js
function prom1(){
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('prom1Resolved');
    },1000);
  });
}

function prom2(){
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('prom2Resolved');
    },3000);
  });
}

// Promise.all .then method
Promise.all([prom1(),prom2()])
    .then(res => console.log(res)); // => ['prom1Resolved', 'prom2Resolved']

// Promise.all async/await method
async function fulfillAll() {
    const allProms = await Promise.all([prom1(), prom2()]);
  console.log(allProms);
}

fulfillAll(); // => ['prom1Resolved', 'prom2Resolved']
```

## Async / Await
Functions using the `async` keyword always return a Promise:  

```js 
async function fn(){} // async function declaration format  
const fn = async () => {} // async arrow function format  
const fn = async function(){} // async function expression format  

async function fn(){/* no return */} // returns a Promise resolved to value: 'undefined'  
async function fn(){return 'foo'} // returns a Promise resolved to value: 'foo'  
async function fn(){return new Promise()} // returns the new Promise instance  
```  
`new Promise` construction vs. `async`:
```js
function withConstructor(num){
  return new Promise((resolve, reject) => {
    num === 0 ? resolve('zero') : resolve('non-zero');
  });
}

withConstructor(0)
  .then(resolveValue => console.log(`promise: ${resolveValue}.`));

// Same result as above using async (arrow function format):
const withAsync = async num => num === 0 ? 'zero' : 'non-zero';

withAsync(0)
  .then(resolveValue => console.log(`promise: ${resolveValue}.`));

// Note: async is `syntactic sugar`, adds NO functionality to Promises
```

Always used inside an `async` function, `await` pauses function execution until it returns the resolved value of the awaited Promise.

```js
const prom = () => new Promise(res => res('promResVal'));

(async function asFunc(){console.log(await prom())})();
```

`try/catch` error handling
```js
const falseProm = () => Promise.reject('promRejected');

async function fn(){
  try {
      console.log(await falseProm());
  } catch (error) {
      console.log(error);
  }
}

fn(); // promRejected
```
Handling Independent Promises
```js
// halts execution (Promises dependent)
async function waiting() {
 const firstValue = await firstAsyncThing();
 const secondValue = await secondAsyncThing();
 console.log(firstValue, secondValue);
}
// avoids halting execution (Promises independent)
async function concurrent() {
 const firstPromise = firstAsyncThing();
 const secondPromise = secondAsyncThing();
console.log(await firstPromise, await secondPromise);
}
```  

>Note: if we have multiple truly independent promises that we would like to execute fully in parallel, we must use individual `.then()` functions and avoid halting our execution with `await`.



## References & Links

[The Event Loop (local)](../event-loop/eventloop.md)  

[Digital Ocean: Understanding the Event Loop](https://www.digitalocean.com/community/tutorials/understanding-the-event-loop-callbacks-promises-and-async-await-in-javascript)

[latentflip.com loupe](http://latentflip.com/loupe/ "Loupe is a little visualisation to help you understand how JavaScript's call stack/event loop/callback queue interact with each other.")  | [Philip Roberts](http://twitter.com/philip_roberts) :bird: