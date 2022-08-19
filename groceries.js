// Write a function groceries() that takes an array of object literals of grocery items. The function should return a string with each item separated by a comma except the last two items should be separated by the word 'and'. Make sure spaces (' ') are inserted where they are appropriate.

// Examples:

// groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] );
// // returns 'Carrots, Hummus, Pesto and Rigatoni'
 
// groceries( [{item: 'Bread'}, {item: 'Butter'}] );
// // returns 'Bread and Butter'
 
// groceries( [{item: 'Cheese Balls'}] );
// // returns 'Cheese Balls'

// 
const groceries1 = [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}];
const groceries2 = [{item: 'Carrots'}, {item: 'Hummus'}];
const groceries3 = [{item: 'Carrot Salad'}];


function groceries(arr){
    newArr = [];
    let lastItem = arr[arr.length -1];
    let itemBeforeLast = arr[arr.length -2];
    
    if(arr.length > 2){
        // section for arrays with more than 2 items
        let lastTwoItems = `${arr[arr.length - 2].item} and ${arr[arr.length - 1].item}`
        for(let i of arr){
            // console.log(i);
            // if prop is last item prepend 'and' and push to newArr
            if (i !== lastItem && i !== itemBeforeLast){
                newArr.push(i.item);
            } else {
                newArr.push(lastTwoItems);
            }
        }
        newArr.pop(); // pop the extra item
        return newArr.join(', ');

    } else if (arr.length > 1) { 
        // section for arrays with 2 items
        let lastTwoItems = `${arr[arr.length - 2].item} and ${arr[arr.length - 1].item}`
        newArr.push(lastTwoItems);
        return newArr.toString();
    } else if (arr.length = 1) {
        // section for arrays with one item
        newArr.push(arr[0].item);
        return newArr.toString();
    }
}

console.log(groceries(groceries3))


// console.log(groceries.toString());
// console.log(groceries.join(' - '));
// console.log(groceries[0]); // {item: 'Carrots'}
// console.log(groceries[0].item); // Carrots

// console.log((groceries[0].item, groceries[2].item)) 
// // Carrots
// // Pesto
// let items = (groceries[0].item + groceries[2].item);
// console.log('items: ', items)




// console.log(groceries[groceries.length -1]) // returns last object: {item: 'Pesto'}
