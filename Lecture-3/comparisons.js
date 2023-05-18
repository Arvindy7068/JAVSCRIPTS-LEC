// < , > , <== , >== , == , !, !=
// output lways be boolean value

console.log('2 > 1' , 2 > 1); // true
console.log('2 == 1' , 2 == 1); // false
console.log('2 != 1' , 2 != 1); // true


console.log('Z > A','Z' > 'A');  // True  // A = 65, Z = 91
console.log('a > A','a' > 'A');  // True // A = 65, a = 92


console.log('Glow > Glee', 'Glow' > 'Glee'); // True


console.log('2' > 1);  // true
console.log('01' == 1);  // true

console.log('true == 1', true == 1); //true, true value gets converted into number 1
console.log('false == 0', false == 0); //true, false value gets converted into number 0
console.log('' == false); // true


// strict equality (==)

console.log('false===0', false===0); //false

// string non-equality (!==)
console.log('false !==0', false !==0); //true


// Alwys use strict quality (===) operator for comparison  instead of ==

console.log('null == undefined', null == undefined); // true
console.log('null === undefined', null === undefined); //false