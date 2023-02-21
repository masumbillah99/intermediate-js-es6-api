/** array map to do one line loop magic */
/** map (Morph array piece-by-piece) */

const numbers = [23, 48, 79, 05, 49, 30];

function getDouble(numbers) {
    const output = [];
    for (const number of numbers) {
        const double = number * 2;
        output.push(double);
    }
    return output;
}

// function doubleIt(num) {
//     return num * 2;
// }

/**  --- purpose ---
    1. get an array
    2. for every elements of the array do something
    3. store the result in an array
    4. return the result array
*/

const doubleIt = num => num * 2;

const makeDouble = numbers.map(doubleIt);
const makeDoubleDirect = numbers.map(num => num * 2);
const makeDouble2 = numbers.map(x => x * 3);
// console.log(makeDouble);
// console.log(makeDoubleDirect);
// console.log(makeDouble2);

const output = doubleIt(4);
// console.log(output);

/** map string array, array of objects map */

const numbers2 = [58, 94, 34, 21, 43];
const half = numbers2.map(n => n / 2);
const thirds = numbers2.map(x => x / 3);
// console.log(half);
// console.log(thirds);

const friends = ['Tom hanks', 'Dom', 'Nom', 'Som'];
const firstLetters = friends.map(friend => friend[0]);
const nameLengths = friends.map(friend => friend.length);
// console.log(nameLengths);

const products = [
    { id: 5, name: 'watch', price: 11000 },
    { id: 1, name: 'mobile', price: 21000 },
    { id: 2, name: 'tablet', price: 25000 },
    { id: 2, name: 'laptop', price: 41000 },
    { id: 4, name: 'dekstop', price: 61000 },
];

// const items = products.map(product => console.log(product.name));
const items = products.map(product => product.name);
const prices = products.map(product => product.price);
console.log(items);
console.log(prices);