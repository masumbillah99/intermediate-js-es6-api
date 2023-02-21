// function declaration
function add(first, sec) {
    const total = first + sec;
    return total;
}

const number = 55;

// function expression
const add1 = function add1(first, sec) {
    const total = first + sec;
    return total;
}

// function expression with anonymous function
const add2 = function (first, sec) {
    const total = first + sec;
    return total;
}

const add3 = function (first, sec) {
    return first + sec;
}

/** arrow function */
const add4 = (first, sec) => first + sec;

const result = add4(30, 20);
// console.log(result);

/**  Interview Questions
 * differences between function declaration, function expression and arrow 
function? 
*/

const sum = (first, sec) => first * sec;
const getFullName = (fname, lname) => fname + ' ' + lname;
const result2 = getFullName('ami', 'tumi');
// console.log(result2);

// no parameter arrow function
const getPie = () => 3.14159;
// console.log(getPie());

// one parameter
const double = (num) => num * 2;

// one parameter simple version
const fiveTimes = num => num * 5;

// multi line arrow function
// if you want to return something, use the return
const doMath = (x, y, z) => {
    const a = x + y;
    const b = y + z;
    const multiply = a * b;
    const result = multiply / 2;
    return result;
}
console.log(doMath(5, 6, 7));