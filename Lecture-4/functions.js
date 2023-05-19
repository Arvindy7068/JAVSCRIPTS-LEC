// function declaration
function sayHi() {
    console.log('Hi');
}

sayHi(); // calling a fncion

console.log(sayHi);

// const greet = sayHi();

// greet(); // we are not asigniinig any functions so its gives us undefined funcyions.

// const greet = sayHi();
// console.log(greet);
// greet();


// parmeterized functions

function sum(num1, num2) {
    console.log(num1 + num2);
}

sum(10, 20);

function sqaure(num) {
    return num + num;
}

const value = sqaure(3);
console.log(value);

function area(radius, precision = 2){
    return (Math.PI * radius * radius).toFixed(precision);
}

console.log('Area of Circle -->', area(4));
console.log('Area of Circle -->', area(4, 3));
console.log('Area of Circle -->', area(4, undefined));
console.log('Area of Circle -->', area(4, 0));


function fun1() {
    return 1;
}
console.log(fun1()); //1

function fun2() {
    return;
}
console.log(fun2()); //undefined

function fun3() {
    return (
        1 + 4 + 5 + 7 + 8
        + " " + "Hello"
    );
}
console.log(fun3());//25
