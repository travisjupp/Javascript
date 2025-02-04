# getX

Get Xth smallest number using the merge-sort sorting algorithm
[getX.js](./getX.js)

## Call Stack 

Life-cycle of `mergeSort` for 
`getX(2, [4, 3, 2, 1])`:

```javascript
merge([3, 4], [1, 2]); // => [1, 2, 3, 4]
merge([2], [1]); // => [1, 2]
mergeSort([1]); // right merge argument
mergeSort([2]); // left merge argument
mergeSort([2, 1]); // right merge argument
merge([4], [3]); // => [3, 4]
mergeSort([3]); // right merge argument
mergeSort([4]); // left merge argument
mergeSort([4, 3]); // left merge argument
mergeSort([4, 3, 2, 1]);
getX(2, [4, 3, 2, 1]);
```

## Analysis of `mergeSort`s recursion

What `mergeSort` does:

`mergeSort` takes an array, splits it into two, then stores each sub-array
using the variables: `larr` for left array and `rarr` for the right.  It then
supplies the `merge` parameters `mergeSort(larr)` and `mergeSort(rarr)` with
their parameters, then--if the previous array is still splittable--calls itself
recursively to continue splitting arrays and supplying parameters until the
arrays are unsplittable. 

Once the final array has been split into single-item-arrays, `mergeSort(larr)`
returns as the `merge` functions' first argument value. Execution context then
moves to `mergeSort(rarr)`. 

Since `rarr` is still in scope and has already been broken down to a
single-item-array by `mergeSort(larr)`, `mergeSort(rarr)` avoids splitting and
returns its single-item-array as the `merge` functions' second argument value.

Now `merge` is executed with the values from the first arrays final split.

`merge` takes two arrays, compares the first elements of each array, then
removes and stores the smallest value from the comparison. If either array
still contains more than one element, the comparison repeats until one of the
arrays is empty. The result and return value of this process is a single array
sorted from smallest to largest.

Once `merge` returns, its calling `mergeSort` function is popped off the stack
revealing any previous `mergeSort` calls waiting to continue execution.

As the recursion unfurls, previous `mergeSort` calls await with the previous
`mergeSorts` processed values. Which is why we see, in the stack trace above,
`merge([3, 4], [1, 2])` is called with the values processed (ordered) by the
previous `merge` function.


> [!NOTE]
> Step through code using node:  
> `node --inspect-brk getX.js`
>
> You may want to comment out console logs  
> (dev-tools ingore-list may be useless):  
> ```zsh
> # uncomment line containing 'console':  
> sed -i '.bak' 's,\(console.*\),\/\/ \1,g' getX.js
>
> # comment line containing 'console':  
> sed -i '.bak' 's,\/\/ \(console.*\),\1,g' getX.js
> ```

## Relevant links

[Merge sort](https://en.wikipedia.org/wiki/Merge_sort)  
[John von Neumann](https://en.wikipedia.org/wiki/John_von_Neumann)  
[Codecademy: GetX](https://www.codecademy.com/code-challenges/code-challenge-find-xth-number-in-order-javascript)  


@tjupp

