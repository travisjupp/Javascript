# DOM
**The DOM is a logical tree-like Model that organizes a web page’s HTML Document as an Object**

[accessing elements](#accessing-elements) | [modifying elements](#modifying-elements) | [events](#events) > [removing event handlers](#removing-event-handlers) > [event object](#event-object)


## Accessing elements
The `document` object grants access to the root of the DOM in JavaScript. ex: `document.body` references the `<body>` element.

The DOM Interface allows you to select a specific element with CSS selectors by using the `.querySelector()` method.
```js
document.querySelector('.class')
document.querySelector('#id')
document.querySelector('h1')
```

You can access an element directly by its ID with the `.getElementById()` method which returns a single element.
```js
document.getElementById('id')
```

You can access an  array of elements with the `.getElementsByClassName()` and `.getElementsByTagName()` methods, then call a single element by referencing its placement in the array.


## Modifying elements

The `.innerHTML` and `.style` properties allow you to modify an element by changing its contents or style respectively.

You can create, append, and remove elements by using the `.createElement()`,`.appendChild()` and `.removeChild()` methods respectively.
```js
const newAttraction = document.createElement('li');
newAttraction.id = 'vespa';
newAttraction.innerHTML = 'Rent a Vespa';
document.body.querySelector('#italy-attractions').appendChild(newAttraction);
```

The `.children` property returns a list of an element’s children and the `.parentNode` property returns the element’s closest connected node in the direction towards the root.
```js
let first = document.body.children[0];
first.innerHTML = 'BROWN BEARS ARE AWESOME!';
first.parentNode.style.backgroundColor = 'beige';
```

To change CSS property in JS: `element.style.property = 'value';`


## Events

Events are the user interactions and browser manipulations on the document object model, the *event handler functions* are the responses to this.

The DOM element the event is being fired on is called the *event target*.

Events add interactivity to DOM elements: the `.onclick` property can add interactivity to a DOM element based on a click event. 

### Registering event handlers
```js
function eventHandlerFunction() {
  // this block of code will run when click event happens
}

// Register event listeners

// Method 1 .addEventListener()
eventTarget.addEventListener('click', eventHandlerFunction);

// Method 2 .onevent
eventTarget.onclick = eventHandlerFunction;
```
> It’s important to know that this `.onevent` property and `.addEventListener()` will both register event listeners. With `.onevent`, it allows for one event handler function to be attached to the event target. However, with the `.addEventListener()` method , we can add multiple event handler functions.



### Removing event handlers

The `.removeEventListener()` method is used to reverse the `.addEventListener()` method. 
```js
// use exact event type name and the name of the event handler you want to remove 
eventTarget.removeEventListener('click', eventHandlerFunction);
```
> note: `.addEventListener()` provided with anonymous functions cannot be removed
```js
// Event handler with anonymous function

// Method 1 .addEventListener()
eventTarget.addEventListener('click', () => {...})

// Method 2 .onevent
eventTarget.onevent = function() {...}
```



### Event object

JS stores/interprets events as "event objects", related data/functions are properties/methods. When the event is triggered, the event object can be passed to the event handler function.
```js
function eventHandlerFunction(event) {
    console.log(event.timeStamp);
}

eventTarget.addEventListener('click', eventHandlerFunction);
```
> when `click` event triggers `eventTarget`, `.eventHandlerFunction` receives `event` (the event object with `click` event info), accesses the `.timeStamp` property of the "event object" and logs the time it took to trigger the event.

Event object properties provide information about the event. Some event properties:

+ `.target` Registered event element
+ `.type` Type of event name
+ `.timeStamp` Time taken to trigger event



---
## References & Links
[MDN Events reference](https://developer.mozilla.org/en-US/docs/Web/Events#Mouse_Events)