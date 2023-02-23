const numbers = [1, 23, 48, 79, 9, 6, 49, 30, 2, 1, 88, 55];

const five = numbers.find(num => num % 5 === 0);
const fiveAll = numbers.filter(num => num % 5 === 0);
console.log(five);
console.log(fiveAll);

// console.log(numbers); 

const products = [
    { id: 1, name: 'watch', price: 11000 },
    { id: 2, name: 'mobile', price: 21000 },
    { id: 3, name: 'tablet', price: 25000 },
    { id: 4, name: 'laptop', price: 41000 },
    { id: 5, name: 'desktop', price: 61000 },
];

const cheap = products.find(product => product.price < 40000);
console.log(cheap);