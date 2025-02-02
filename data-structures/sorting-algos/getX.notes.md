


## Stack
```javascript

merge(mergeSort([4, 3]), mergeSort([2, 1]);

mergeSort([4, 3, 2, 1]);


## Call Stack 

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
