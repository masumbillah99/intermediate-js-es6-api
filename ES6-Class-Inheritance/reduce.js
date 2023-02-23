/** 
 * পুরো অ্যারেটাকে একটা সিঙ্গেল ভ্যালুর মধ্যে ছোট করে ফেলে
*/

const nums = [1, 2, 3, 4, 5];
// .reduce (accumulator function, initial value)
// accumulator function use two parameters
// const total = nums.reduce((previous, current) => previous + current, 0)
const total = nums.reduce((previous, current) => {
    console.log(previous, current);
    return previous + current;
}, 0);
console.log(total);