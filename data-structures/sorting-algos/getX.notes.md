# getX

Get Xth smallest number using the Merge Sort sorting algorithm

## Call Stack 

Stack trace of function calls when `getX`
is called with `2, [4, 3, 2, 1]`:

```
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

## Merge sort recursive analysis

First, let us explain what `mergeSort` and `merge` do.

`mergeSort` takes an array, splits it into two smaller arrays, then stores each array in the variables: `larr` for left array and `rarr` for the right. It then supplies the `merge` parameters `mergeSort(larr)` and `mergeSort(rarr)` with their parameters, then--if the previous array is still splittable--calls itself recursively to continue splitting arrays and supplying parameters until the arrays are unsplittable. 

Once the final array has been split into single-item-arrays, `mergeSort(larr)` returns as the `merge` functions' first argument value. Execution context then moves to `mergeSort(rarr)`. 

Since `rarr` is still in scope and has already been broken down to a single-item-array by `mergeSort(larr)`, `mergeSort(rarr)` avoids the recursive bit and returns as the `merge` functions second argument value.

Now `merge` is executed with the values from the first arrays final split.

`merge` takes two arrays, compares the first elements of each array, then removes and stores the smallest value from the comparison. If either array still contains more than one element, the comparison repeats until one of the arrays is empty. The result and return value of this process is a single array sorted from smallest to largest.

Once `merge` returns, its calling `mergeSort` function is popped off the stack revealing any previous `mergeSort` calls waiting to be executed.

As the recursion unfurls, previous `mergeSort` calls await with the previous `mergeSorts` processed values. Which is why we see, in the stack trace above, `merge` is called with the values processed (ordered) by the previous `merge` function.


> [!NOTE]
> Step through code using node:  
> `node --inspect-brk getX.js`
>
> You may want to comment out console logs  
> --dev-tools ingore-list may be useless:  
> ```sed
> # uncomment line containing 'console':  
> sed -i '.bak' 's,\(console.*\),\/\/ \1,g' getX.js
>
> # comment line containing 'console':  
> sed -i '.bak' 's,\/\/ \(console.*\),\1,g' getX.js
> ```


@tjupp

