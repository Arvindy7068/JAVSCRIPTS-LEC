let value = true;
console.log(typeof value);
console.log(value);

value = String(value);
console.log(typeof value);
console.log(value);


value = '' + true;
console.log(typeof value);

console.log(1, typeof 1);
console.log(1, typeof String(1));

console.log(null, typeof null);
console.log(null, typeof String(null));

console.log(undefined, typeof undefined);
console.log(undefined, typeof String(undefined));


// numeric conversion

console.log("6" * "2"); // in string, it will directly converted in to number. except for + operator
console.log("6" + "2");
console.log("abc" / "2"); //Nan
console.log(typeof Number("a"));
console.log(typeof Number("30"));
console.log(+10, typeof "+18");


console.log(true, Number(true)); //1
console.log(true, Number(false)); // 0

console.log(null, Number(null));//0
console.log(undefined, Number(undefined)); //Nan



// Boolean Conversion

console.log("--------Boolean Conversion");
console.log(1, Boolean(1)); //true
console.log(0, Boolean(0));//false
console.log("Hello", Boolean("Hello"));// true
console.log("", Boolean("")); //false
console.log(null, Boolean(null)); //false
console.log(undefined, Boolean(undefined)); // false
console.log(Nan, Boolean(Nan)); //false
console.log(" ", Boolean(" ")); // true, because space is non-empty value.