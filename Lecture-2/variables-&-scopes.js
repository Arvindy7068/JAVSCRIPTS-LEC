// console.log('variavles');

// let a = 10;
// var b = 20;
// const c = 30;

// console.log(a,b,c);
// console.log(b);
// console.log(c);

// global scope
var a =10;
console.log('a',a);

{
  //block scope

  var b = 20;
  let c = 30;

}
console.log('b',b);


if (true) {
    // block scope
}

for (var i = 0; i < 5; i++) {
    // block sope
}
console.log(i);

function fun1() {
    // function / local scope
    var result = 10 + 20;
}

fun1();

