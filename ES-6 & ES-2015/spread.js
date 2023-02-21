// spread operator, array max, copy arrays
/** spread operator (...) 
 * The javascript spread operator (...) allows us to quickly copy all or part of 
an existing array or object into another array or object.
*/

const max = Math.max(12, 32, 94, 56);
// console.log(max);
const numbers = [23, 48, 79, 05, 49, 30];
// console.log(numbers);
// console.log(Math.max(...numbers));

const numbers2 = [...numbers];
numbers.push(55);
numbers2.push(666);
// console.log(numbers);
// console.log(numbers2);

const numbers3 = [...numbers];
const numbers4 = [333, 99, ...numbers, 111, 000]; // advanced use of spread operator
console.log(numbers4);