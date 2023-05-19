// let i = 11;
// while (i <= 10) {
//     console.log('i', i * 2);
//     i++;
// } 

// const j =11;
// do {
//     console.log('j', j * 2);
//     j++;

// } while (j <= 10);

// for (let k = 1; k <= 10; k++) {
//     console.log('k', k * 2);
// }

// for (let i = 1; j = 5; i < 5; i++) {
//     console.log('i', i);
//     console.log('j', j * i);
// }




// // infinite loop
// for ( ; ; ) {

// }

let sum = 0;
while (true) {
    const val = prompt('Enter Some Number');
    if (!val) break;
    // sum = +val ? break : sum + +val;
    sum += +val;  // sum = sum + val;
}

console.log(sum);