
let a = 5;
let b = 7;

function multiply(c, d) {
    c = 20;
    const result = c * d;
    return result;
}

const output = multiply(a, b);
multiply(a, b);
console.log(a);

// object and array are pass by reference
let stu1 = { name: 'shofiq', partner: 'borsha' };
let stu2 = { name: 'alom', partner: 'anika' };

function makeMovie(couple1, couple2) {
    couple1.name = 'Ononto'
    couple2.partner = 'mim';
}

console.log(stu1, stu2);
makeMovie(stu1, stu2);
console.log(stu1, stu2);


function sum(p, q) {
    p + q;
}
const result = sum(2, 3);
console.log(result);