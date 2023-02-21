/** 
36.	Write an arrow function where it will do the following:
    a) Square each array element
    b) Calculate the sum of the squared elements
    c) Return the average of the sum of the squared elements

37. a) It will take two array inputs
    b) Combine the two arrays and assign them in a new array
    c) Find the maximum number from the new array and return the

38. a) Square each array element
    b) Calculate the sum of the squared elements
    c) Return the average of the sum of the squared elements

39. a) It will take two array inputs
    b) Combine the two arrays and assign them in a new array
    c) Find the maximum number from the new array and return the result
*/
const y = x => x * x;
const z = y(5);
// console.log(z);

const name = 'Hero';
const greetings = `Welcome Home! ${name}`;
console.log(greetings);

// const division= num1, num2 => console.log(num1 /num2);
// division(4, 2);

const nayikas = ['mousumi', 'popy', 'shabnur', 'purnima'];
const array2 = [...nayikas];
// console.log(array2);

const numbers = [10, 20, 30, 40.50, 60.70];
// console.log(Math.max(...numbers));

const cars=['toyota', 'honda','mercedes']; 
const newCars= [...cars , 'ferrari'];
console.log(newCars);