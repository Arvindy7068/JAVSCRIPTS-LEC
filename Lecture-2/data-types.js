let megssage = "Hello world..!";
message = 10;


//Number
let n = 10; //integer
n = 12.234; //Float
n = Infinity; 
console.log(n);
console.log(1 / 0);
n = -Infinity;
console.log(n);
console.log(-1 / 0);


n = NaN;  //Not a Number
console.log(n);


console.log("Some String " / 2);

console.log('1' + 2);
console.log('1' + 1 + 2); // '11' + 2 => '112'
console.log(1 + 1 +  '2');  //2 + '2' => '22'

let x = '10';

console.log(x + 20);
console.log(x + 20);
console.log(x + 20);
console.log(x + 20);
console.log(Number(x) + 20);


console.log(+ 'Hello');
console.log(Number('Hello'));

console.log(NaN + 1);


// BigInt

let n1 = 10n;
console.log(typeof n);
console.log(typeof n1);


//String

let username = "Arvind";
let str1 = 'Hello' + username;
let str2 = "Hello" + username;
console.log(str1);
console.log(str2);



// template strings

const str3 = '
<div>
    Hello ${username}
</div>

';


console.log(str3);