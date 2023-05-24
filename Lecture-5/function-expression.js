// function declaration
function sayHi() {
    console.log('Hi');
}
sayHi();


// function expression
const greet = function() {
    console.log('Good Evening');
};
greet();


fun1(); // can call a function before declaring it.
function fun1() {
    console.log('fun1');
}


// fun2(); // Error: Cannot access 'fun2' before initialization
// let fun2 = function() {
//     console.log('fun2');
// };



let age = prompt('Enter Your age...?');

let welcome;
if (age < 18) {
    welcome = function() {
        console.log('Hello');
    }
} else {
    welcome = function() {
        console.log('Greetings..!');
    }
}
welcome();