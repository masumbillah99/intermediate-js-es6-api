/** 
  --- 6 ways to loop through an array ---
 1. for loop
 2. do...while
 3. while loop
 4. for...of
 5. map() method
 6. forEach()
*/

const numbers = [1, 23, 48, 79, 9, 6, 49, 30, 2, 1, 88, 55];
const bigNums = numbers.filter(number => number > 20);
const tinyNums = numbers.filter(n => n < 10);
console.log(bigNums);
console.log(tinyNums);
// console.log(numbers);

const five = numbers.find(num => num % 5 === 0);
console.log(five);

const products = [
    { id: 1, name: 'watch', price: 11000 },
    { id: 2, name: 'mobile', price: 21000 },
    { id: 3, name: 'tablet', price: 25000 },
    { id: 4, name: 'laptop', price: 41000 },
    { id: 5, name: 'desktop', price: 61000 },
];

const expensive = products.filter(product => product.price > 30000);
// console.log(expensive);