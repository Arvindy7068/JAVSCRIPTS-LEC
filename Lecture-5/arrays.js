// Input:
// ====
const arr = [1,2,3,4,5];
console.log(arr);
console.log(arr[2]);
arr[3] = 40;
console.log(arr);

const arr1 = [1, 'Hell0', true, [2, 3], { key1: 'val1'}];
console.log(arr1);


// Output:
// =======
// (5) [1, 2, 3, 40, 5]
// arrays.js:8 (5) [1, "Hell0", true, Array(2), {…}]
// arrays.js:13 arr.length 5



// arr = [20, 30];
console.log('arr.length', arr.length);
console.log('!tostring', arr);
console.log('tostring', arr.tostring);
console.log('join', arr.join(' +=+ '));


const arr2 = [1,2,3,4,5];
console.log('arr2', arr2);
arr2.push(6);  // add elemen at the end
console.log('after push', arr2);
arr2.push(7, 8);
console.log('after push', arr2);
arr2.pop();  // remove elemen from the end
console.log('after pop', arr2);

arr2.shift();  // remove element from the start
console.log('after shift', arr2);
arr2.unshift(-1, 0); // add element at the start
console.log('after unshift', arr2);



// Output:
// ==========
// !tostring (5) [1, 2, 3, 40, 5]
// arrays.js:24 tostring undefined
// arrays.js:25 join 1 +=+ 2 +=+ 3 +=+ 40 +=+ 5
// arrays.js:29 arr2 (5) [1, 2, 3, 4, 5]
// arrays.js:31 after push (6) [1, 2, 3, 4, 5, 6]
// arrays.js:33 after push (8) [1, 2, 3, 4, 5, 6, 7, 8]
// arrays.js:35 after pop (7) [1, 2, 3, 4, 5, 6, 7]
// arrays.js:38 after shift (6) [2, 3, 4, 5, 6, 7]
// arrays.js:40 after unshift (8) [-1, 0, 2, 3, 4, 5, 6, 7]

// Input:
//========

const fruits = ['Apple', 'Mango', 'Banana', 'Orange'];
console.log('fruits', fruits);
fruits.splice(2, 0, 'Chiko'); // add chiko at index 2, not removing anything
console.log('after splice add', fruits);
fruits.splice(3, 1); // remove Banana from index 3
//fruits.splice(3, 2); // remove 2 elements from index 3
console.log('after splice delete', fruits);


console.log('slice method', fruits.slice(1,2));
console.log('after slice', fruits);


// merge arrys
const a = [1, 2, 3];
const b = [4, 5];
let newArr = a.concat(b);
console.log(newArr);

const c = [6, 7];
newArr = a.concat(b,c);
console.log(newArr);

const multiDArr = [
    [1, 2],
    [3, 4],
    [5, 6]
];
console.log('flat', multiDArr.flat()) // flatten the array