function fun1() {
    console.log('fun1');
}

// cb is called as callback function
// call back function is passed as a parameter to another function
// function to which a callback function is passed is called as higher order funtion 
function fun2(cb) {  // assume this function is asynchronous.
    console.log('fun2');
    cb();
}

fun2(fun1);



function ask(question, yes, no) {
    const answer = confirm(question);
    if (answer) {
        yes();
    } else {
        no ();
    }
}

function showOk() {
    console.log('Ok');
}

function showCncel() {
    console.log('Cancelled');
}
//ask('Do you want to delete this user?', showOk, showCancel);

ask(
    'Do you gree to the terms & Conditions?',
    function() { console.log('Yes, I Agree!');},
    function() { console.log('No, I Dont Agree!');},
)
