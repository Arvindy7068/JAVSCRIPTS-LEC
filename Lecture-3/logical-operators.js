// ||  && !


console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false); // false


console.log(true && true); // true
console.log(true && false);
console.log(false && true);
console.log(false && false);

// OR Operator returns firts truelly value

console.log(1 || 0);
let a = 10;
console.log(2 || (a = 20)); // 2, since 1st value is truely, next expression is not evaluated
console.log('a', a); // nad hence vlue of remains 10


console.log('h' || 10); // h
console.log('' || 10);// 10


console.log('null || 10', null || 10); // 10
console.log(null || undefined || 10); // 10
console.log(null || undefined || 0); // 0
console.log(null || 0 || undefined); // undefined



// let username = prompt('Enter Your Name');
// console.log(username || 'Annonymous');


let height = 0;
console.log(height || 10);


// null coalesene (??) // = will only return next value if the previous value is null/undefined.
let h = 0;
console.log(h ?? 10);
console.log('null ?? 10', null ?? 10);
console.log('undefined ?? 10', undefined ?? 10);
