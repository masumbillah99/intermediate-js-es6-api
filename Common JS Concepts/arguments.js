// arguments is array like Object

function sum(a, b, c) {
    // console.log(typeof arguments);
    // console.log(arguments[3]);
    // for(let a of arguments) {
    //     console.log(a);
    // }

    const args = [...arguments];
    console.log(args);
    return a + b + c;
}

// console.log(arguments);
const total = sum(32, 59, 40, 45, 69, 31);
console.log(total);