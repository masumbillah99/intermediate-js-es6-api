const numbers = [23, 45, 65, 76, 32, 15];
// for (const number of numbers) {
//     console.log(number);
// }

const bottle = { color: 'yellow', price: 50, isCleand: true, capacity: 11, };

// 1. for of cannot be used with objects
// for(const key of bottle) {
//     console.log(key);
// }

/** 
 3 ways to read object properties
    1. bottle.color         --.notation
    2. bottle['color']
    3. bottle[key]          --bracket notation
*/

const keys = Object.keys(bottle);
/**  option to loop through an object */
// i. for of
for (const key of keys) {
    // console.log(key, bottle[key]);
}

// ii. for in loop -- best system
for (const key in bottle) {
    const value = bottle[key];
    // console.log(key, value);
}

/** advanced */
const pair = Object.entries(bottle);
// console.log(pair);
for(const [key, value] of Object.entries(bottle)) {
    console.log(key, value);
}