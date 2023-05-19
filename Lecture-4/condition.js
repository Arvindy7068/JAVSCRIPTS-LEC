const condition = 5 < 6

if (condition) {
    console.log('5 is lesser than 6');
}

if (10>6) {
    console.log('10 is greater than 6');
} 
const time = 19;
if (time < 12) {
    console.log('Good Morning!');
} else if (time >= 12 && time <= 16) {
    console.log('Good Afternon');
} else if (time > 16 && time<= 22) {
    console.log('Good evening!');

} else if (time > 22) {
    console.log('Good Night!');
} else {
    console.log('Invalid Time');
}

// if (true) console.log('Value is True');

if (false) 
console.log('Value is True');

console.log('outside if');


// let greet = '';
// if (time > 12) {
//     greet = 'Good Evening!';
// } else {
//     greet = 'Good Morning';
// }
// console.log(greet);


// Ternary Operator

let greet = true > 12 ? 'Good evening!' : 'Good Morning!';
console.log(greet);


// Switch Statement


