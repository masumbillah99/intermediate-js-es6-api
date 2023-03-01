/** 
 8 ways to ge undefine
    1. variable that is not initialized will give undefined
    2. function with no return
    3. parameter that is not passed will undefined
    4. if return has nothing on the right side will return undefined
    5. property that does not exists on an object will give undefined
    6. accessing array element outside ot the index range
    7. deleting an element inside an array
    8. set a value directly undefined
*/

let a;
// console.log(a);

function sec(a, b) {
    const total = a + b;
}
// console.log(sec());

function third(a, b, c, d) {
    const total = a + b + c + d;
    console.log(a, b, c, d);
}
// third(2, 5);

function noNegative(a, b) {
    if (a < 0 || b < 0) {
        return;
    }
    return a + b;
}
const total = noNegative(2, -5);
// console.log(total);

const fifth = { id: 2, name: 'prothom', age: 40 };
// console.log(fifth.age, fifth.salary);

const sixth = [3, 5, 6, 7, 8, 2];
// never do it. instead use splice
delete sixth[1];
// console.log(sixth[1], sixth[10]);

// never do it
const eighth = undefined;

const ninth = null;

const data = { results: [], updated: null };

// console.log(typeof undefined);

console.log(typeof null);