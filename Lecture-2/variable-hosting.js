var a = 10;   // all the variables will be hoisted at the top of the file & they are detected
console.log(a);
var a = 10;
console.log(a);

let b; // variable with let are hoiste but they are not defined(temporal deadzone)
console.log(b);
let b = 10;
console.log(b);


{
    // let b = 10; // hoisted => variable b is in temporal deadzone (memory is not located yet)
    // console.log(b); // b is not in temporal deadzone
    let b = 10; // b's temporal deadzone is commpleted
    console.log(b); // b is not in temporal deadzone

}


{
    var a = undefined; //hoisted => variable a is in temporal deadzone  (memory isnot allocated yet)
    console.log(a); // a is not in temporal deadzone
    var a = 10;
    console.log(a);

}