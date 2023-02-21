/** 
    --- problem 1 ---
    1. Write an arrow function that will take 3 parameters, will multiply
        the parameters and will return the result.

    2) Write the following sentence in three lines and print the result:
        I am a web developer. I love to code. I love to eat biryani.

    3) Write an arrow function that will take 2 parameters: One parameter
        will come from you and the other parameter will be a default
        parameter. Add these two parameters and return the result.

    --- problem 2 ----
    a) It will take an array where the array elements will be the
        name of your friends
    b) Check if the length of each element is even, push elements
    with even length to a new array and return the result

    --- problem 3 ---
    a) Square each array element
    b) Calculate the sum of the squared elements
    c) Return the average of the sum of the squared elements

    --- problem 4 ---
    a) It will take two array inputs
    b) Combine the two arrays and assign them in a new array
    c) Find the maximum number from the new array and return the result
*/

// problem - 1
// 1.1
const multiply = (a, b, c) => a * b * c;
const output1 = multiply(2, 3, 5);
console.log(output1);

// 1.2
const multiLine = `I am a web developer. 
I love to code. 
I love to eat biryani. `
console.log(multiLine);

// 1.3
const add = (a, b = 5) => a + b;
const output2 = add(4);
console.log(output2);

// -- problem - 2
const friends1 = ['shohid', 'bellal', 'shaiful', 'shahin', 'masum'];
const newFriends = (friends) => {
    const friends2 = [];
    for (const friend of friends) {
        if (friend.length % 2 === 0) {
            friends2.push(friend);
        }
    }
    return friends2;
}
const output3 = newFriends(friends1);
console.log(output3);


// -- 4 ---
const numbers1 = [23, 103, 94, 56, 89, 99, 54];
const numbers2 = [65, 32, 64, 89, 45];

const findMax = (array1, array2) => {
    const newArray = [...array1, ...array2];
    const maxNumber = Math.max(...newArray);
    return maxNumber;
}

const output8 = findMax(numbers1, numbers2);
// console.log(output8);